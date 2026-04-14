import { TFile, Vault, normalizePath, Notice, Menu, MetadataCache } from 'obsidian';
import matter from 'gray-matter';
import type CloudflareSyncPlugin from './main';

export type PublishStatus = 'draft' | 'published' | 'modified' | 'deleted';

export interface PublishFileState {
  status: PublishStatus;
  lastPublishedAt?: string;
  remoteUrl?: string;
  lastPublishedHash?: string;
}

export interface PublishIndexEntry {
  path: string;
  status: PublishStatus;
  frontmatter: Record<string, any>;
  headings: { level: number; text: string }[];
  outgoingLinks: string[];
  backlinks: number;
  lastPublishedAt?: string;
  remoteUrl?: string;
}

export interface PublishIndex {
  generatedAt: string;
  siteUrl: string;
  entries: PublishIndexEntry[];
}

export class PublishEngine {
  private plugin: CloudflareSyncPlugin;
  private publishState: Record<string, PublishFileState> = {};
  private publishStatusBarEl: HTMLElement | null = null;

  constructor(plugin: CloudflareSyncPlugin) {
    this.plugin = plugin;
  }

  async loadState(): Promise<void> {
    const data = await this.plugin.loadData();
    this.publishState = data?._publishState || {};
  }

  async saveState(): Promise<void> {
    const data = (await this.plugin.loadData()) || {};
    data._publishState = this.publishState;
    await this.plugin.saveData(data);
  }

  setStatusBarEl(el: HTMLElement): void {
    this.publishStatusBarEl = el;
    this.updateStatusBar();
  }

  // ========== Status computation ==========

  getPublishState(path: string): PublishFileState | undefined {
    return this.publishState[path];
  }

  async computeFileStatus(file: TFile): Promise<PublishStatus> {
    if (!file.path.endsWith('.md')) return 'draft';

    const content = await this.plugin.app.vault.read(file);
    const parsed = matter(content);
    const state = this.publishState[file.path];

    // If explicitly marked as not publish and never published
    if (parsed.data.publish === false && !state) {
      return 'draft';
    }

    // Determine if this file should be considered for publishing
    const shouldPublish = await this.shouldPublishFile(file, parsed.data);
    if (!shouldPublish) {
      return state?.status === 'published' ? 'deleted' : 'draft';
    }

    if (!state || state.status === 'draft') {
      return 'draft';
    }

    // Compute hash to detect modifications
    const currentHash = await this.plugin.syncEngine.computeLocalHash(content);
    if (state.lastPublishedHash && state.lastPublishedHash !== currentHash) {
      return 'modified';
    }

    return state.status;
  }

  async shouldPublishFile(file: TFile, frontmatter?: Record<string, any>): Promise<boolean> {
    if (!file.path.endsWith('.md')) return false;

    const fm = frontmatter ?? matter(await this.plugin.app.vault.cachedRead(file) || '').data;

    if (this.plugin.settings.publishBehavior === 'frontmatter-only') {
      return fm.publish === true;
    }

    // 'all-notes' behavior: publish unless explicitly false
    return fm.publish !== false;
  }

  async refreshAllStatuses(): Promise<void> {
    const files = this.plugin.app.vault.getFiles().filter((f) => f.path.endsWith('.md'));
    for (const file of files) {
      const status = await this.computeFileStatus(file);
      if (this.publishState[file.path]) {
        this.publishState[file.path].status = status;
      }
    }
    await this.saveState();
    this.updateStatusBar();
  }

  getPendingFiles(): { file: TFile; status: PublishStatus }[] {
    const result: { file: TFile; status: PublishStatus }[] = [];
    for (const [path, state] of Object.entries(this.publishState)) {
      if (state.status === 'draft' || state.status === 'modified') {
        const file = this.plugin.app.vault.getAbstractFileByPath(path);
        if (file instanceof TFile) {
          result.push({ file, status: state.status });
        }
      }
    }
    // Also include files that should be published but have no state yet
    const files = this.plugin.app.vault.getFiles().filter((f) => f.path.endsWith('.md'));
    for (const file of files) {
      if (!this.publishState[file.path]) {
        const cached = this.plugin.app.metadataCache.getFileCache(file);
        const publishFlag = cached?.frontmatter?.publish;
        if (this.plugin.settings.publishBehavior === 'frontmatter-only' && publishFlag === true) {
          result.push({ file, status: 'draft' });
        } else if (this.plugin.settings.publishBehavior === 'all-notes' && publishFlag !== false) {
          result.push({ file, status: 'draft' });
        }
      }
    }
    return result;
  }

  // ========== Publishing actions ==========

  async publishFile(file: TFile): Promise<boolean> {
    if (!file.path.endsWith('.md')) {
      new Notice('Only markdown files can be published');
      return false;
    }

    const serverUrl = this.plugin.settings.serverUrl;
    const apiToken = this.plugin.settings.apiToken;
    if (!serverUrl || !apiToken) {
      new Notice('Please configure Publish Server URL and API Token in settings');
      return false;
    }

    try {
      const rawContent = await this.plugin.app.vault.read(file);
      const parsed = matter(rawContent);

      // Process attachments and replace links
      const { content: processedContent, assets } = await this.processAttachments(parsed.content, file);

      // Upload assets if any
      if (assets.length > 0) {
        await this.uploadPublishAssets(assets);
      }

      // Build publish payload with enhanced frontmatter
      const publishPayload = {
        key: this.getPublishKey(file, parsed.data),
        content: processedContent,
        frontmatter: this.buildPublishFrontmatter(parsed.data),
        meta: {
          path: file.path,
          basename: file.basename,
          headings: this.extractHeadings(rawContent),
          outgoingLinks: this.extractOutgoingLinks(rawContent),
        },
      };

      await this.plugin.api('/api/sync/publish', {
        method: 'POST',
        body: JSON.stringify(publishPayload),
      });

      // Update state
      const hash = await this.plugin.syncEngine.computeLocalHash(rawContent);
      const remoteUrl = `${serverUrl.replace(/\/$/, '')}/blog/${publishPayload.key}`;
      this.publishState[file.path] = {
        status: 'published',
        lastPublishedAt: new Date().toISOString(),
        remoteUrl,
        lastPublishedHash: hash,
      };
      await this.saveState();
      this.updateStatusBar();

      new Notice(`Published ${file.name}`);
      return true;
    } catch (err: any) {
      console.error('[PublishEngine] Publish failed:', err);
      new Notice(`Publish failed: ${err.message}`);
      return false;
    }
  }

  async unpublishFile(file: TFile): Promise<boolean> {
    const serverUrl = this.plugin.settings.serverUrl;
    const apiToken = this.plugin.settings.apiToken;
    if (!serverUrl || !apiToken) {
      new Notice('Please configure Publish Server URL and API Token in settings');
      return false;
    }

    try {
      const parsed = matter(await this.plugin.app.vault.read(file));
      const key = this.getPublishKey(file, parsed.data);

      await this.plugin.api('/api/sync/unpublish', {
        method: 'POST',
        body: JSON.stringify({ key, path: file.path }),
      });

      if (this.publishState[file.path]) {
        this.publishState[file.path].status = 'deleted';
        delete this.publishState[file.path].lastPublishedAt;
        delete this.publishState[file.path].remoteUrl;
        delete this.publishState[file.path].lastPublishedHash;
      }
      await this.saveState();
      this.updateStatusBar();

      new Notice(`Unpublished ${file.name}`);
      return true;
    } catch (err: any) {
      console.error('[PublishEngine] Unpublish failed:', err);
      new Notice(`Unpublish failed: ${err.message}`);
      return false;
    }
  }

  async publishAllChanges(): Promise<void> {
    const pending = this.getPendingFiles();
    if (pending.length === 0) {
      new Notice('No pending changes to publish');
      return;
    }

    new Notice(`Publishing ${pending.length} file(s)...`);
    let success = 0;
    for (const { file } of pending) {
      const ok = await this.publishFile(file);
      if (ok) success++;
    }

    // Generate and upload index
    await this.generateAndUploadIndex();

    new Notice(`Published ${success}/${pending.length} files`);
  }

  // ========== Attachment processing ==========

  async processAttachments(
    content: string,
    file: TFile
  ): Promise<{ content: string; assets: { filename: string; base64: string; contentType: string }[] }> {
    const assets: { filename: string; base64: string; contentType: string }[] = [];
    let result = content;

    const serverUrl = this.plugin.settings.serverUrl;
    const prefix = (this.plugin.settings.attachmentsPathPrefix || 'attachments');

    // Process markdown image links: ![alt](path)
    const mdImageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let match: RegExpExecArray | null;
    while ((match = mdImageRegex.exec(content)) !== null) {
      const [fullMatch, alt, rawPath] = match;
      const assetPath = this.resolveAssetPath(rawPath, file);
      if (!assetPath) continue;

      const assetFile = this.plugin.app.vault.getAbstractFileByPath(assetPath);
      if (!(assetFile instanceof TFile)) continue;

      const base64 = this.plugin.arrayBufferToBase64(await this.plugin.app.vault.readBinary(assetFile));
      const contentType = this.plugin.getMimeType(assetFile.extension);
      assets.push({ filename: assetFile.name, base64, contentType });

      const remoteUrl = `${serverUrl.replace(/\/$/, '')}/api/blog/images/${assetFile.name}`;
      result = result.replace(fullMatch, `![${alt}](${remoteUrl})`);
    }

    // Process wikilink images: ![[filename.png]]
    const wikiImageRegex = /!\[\[([^\]]+)\]\]/g;
    while ((match = wikiImageRegex.exec(content)) !== null) {
      const [fullMatch, rawPath] = match;
      const assetPath = this.resolveAssetPath(rawPath, file);
      if (!assetPath) continue;

      const assetFile = this.plugin.app.vault.getAbstractFileByPath(assetPath);
      if (!(assetFile instanceof TFile)) continue;

      const base64 = this.plugin.arrayBufferToBase64(await this.plugin.app.vault.readBinary(assetFile));
      const contentType = this.plugin.getMimeType(assetFile.extension);
      assets.push({ filename: assetFile.name, base64, contentType });

      const remoteUrl = `${serverUrl.replace(/\/$/, '')}/api/blog/images/${assetFile.name}`;
      result = result.replace(fullMatch, `![](${remoteUrl})`);
    }

    return { content: result, assets };
  }

  resolveAssetPath(rawPath: string, sourceFile: TFile): string | null {
    if (rawPath.startsWith('http')) return null; // Already remote

    const folder = sourceFile.parent?.path || '';

    if (rawPath.startsWith('./') || rawPath.startsWith('../')) {
      return normalizePath(`${folder}/${rawPath}`);
    }

    // Try direct path first
    let direct = this.plugin.app.vault.getAbstractFileByPath(normalizePath(rawPath));
    if (direct instanceof TFile) {
      return normalizePath(rawPath);
    }

    // Try relative to source file
    return normalizePath(`${folder}/${rawPath}`);
  }

  async uploadPublishAssets(
    assets: { filename: string; base64: string; contentType: string }[]
  ): Promise<void> {
    if (assets.length === 0) return;

    try {
      // Try batch upload to publish-assets endpoint first
      await this.plugin.api('/api/sync/publish-assets', {
        method: 'POST',
        body: JSON.stringify({ assets }),
      });
    } catch (err: any) {
      console.warn('[PublishEngine] Batch asset upload failed, falling back to individual uploads:', err.message);
      // Fallback to individual uploads
      for (const asset of assets) {
        await this.plugin.uploadFile(
          `images/${asset.filename}`,
          asset.base64,
          asset.contentType,
          'base64'
        );
      }
    }
  }

  // ========== Frontmatter & metadata ==========

  getPublishKey(file: TFile, frontmatter: Record<string, any>): string {
    if (frontmatter.permalink) {
      return frontmatter.permalink;
    }
    if (frontmatter.slug) {
      return frontmatter.slug;
    }
    return file.basename
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  }

  buildPublishFrontmatter(frontmatter: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};

    const pick = (key: string, targetKey?: string) => {
      if (frontmatter[key] !== undefined) {
        result[targetKey || key] = frontmatter[key];
      }
    };

    pick('title');
    pick('slug');
    pick('permalink');
    pick('description');
    pick('tags');
    pick('date');
    pick('cover');
    pick('hide');
    pick('cssclasses');
    pick('publish');
    pick('summary');
    pick('coverImage', 'cover');

    return result;
  }

  extractHeadings(content: string): { level: number; text: string }[] {
    const headings: { level: number; text: string }[] = [];
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        headings.push({ level: match[1].length, text: match[2].trim() });
      }
    }
    return headings;
  }

  extractOutgoingLinks(content: string): string[] {
    const links: string[] = [];
    // Markdown links
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match: RegExpExecArray | null;
    while ((match = mdLinkRegex.exec(content)) !== null) {
      const url = match[2];
      if (!url.startsWith('http') && !url.startsWith('#')) {
        links.push(decodeURIComponent(url.split('#')[0]));
      }
    }
    // Wikilinks
    const wikiLinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
    while ((match = wikiLinkRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    return [...new Set(links)];
  }

  // ========== Index generation ==========

  async generateAndUploadIndex(): Promise<void> {
    const serverUrl = this.plugin.settings.serverUrl;
    const entries: PublishIndexEntry[] = [];

    // Compute backlink counts
    const backlinkCounts: Record<string, number> = {};
    for (const [path, state] of Object.entries(this.publishState)) {
      if (state.status === 'published' || state.status === 'modified') {
        backlinkCounts[path] = 0;
      }
    }

    for (const file of this.plugin.app.vault.getFiles().filter((f) => f.path.endsWith('.md'))) {
      const state = this.publishState[file.path];
      if (!state || (state.status !== 'published' && state.status !== 'modified')) continue;

      const content = await this.plugin.app.vault.read(file);
      const parsed = matter(content);
      const outgoing = this.extractOutgoingLinks(content);

      entries.push({
        path: file.path,
        status: state.status,
        frontmatter: this.buildPublishFrontmatter(parsed.data),
        headings: this.extractHeadings(content),
        outgoingLinks: outgoing,
        backlinks: backlinkCounts[file.path] || 0,
        lastPublishedAt: state.lastPublishedAt,
        remoteUrl: state.remoteUrl,
      });

      // Count backlinks to other published files
      for (const link of outgoing) {
        const resolved = this.resolveLinkPath(link, file);
        if (resolved && backlinkCounts[resolved] !== undefined) {
          backlinkCounts[resolved]++;
        }
      }
    }

    // Recompute with backlink counts
    for (const entry of entries) {
      entry.backlinks = backlinkCounts[entry.path] || 0;
    }

    const index: PublishIndex = {
      generatedAt: new Date().toISOString(),
      siteUrl: serverUrl.replace(/\/$/, ''),
      entries,
    };

    // Save local index
    const indexJson = JSON.stringify(index, null, 2);
    await this.saveLocalIndex(indexJson);

    // Upload to remote
    try {
      await this.plugin.api('/api/sync/publish-index', {
        method: 'POST',
        body: JSON.stringify({ index }),
      });
    } catch (err: any) {
      console.error('[PublishEngine] Failed to upload publish index:', err.message);
    }
  }

  async saveLocalIndex(indexJson: string): Promise<void> {
    const pluginDir = this.plugin.manifest.dir;
    if (pluginDir) {
      const indexPath = normalizePath(`${pluginDir}/publish-index.json`);
      try {
        await this.plugin.app.vault.adapter.write(indexPath, indexJson);
      } catch (err: any) {
        console.error('[PublishEngine] Failed to write local index:', err.message);
      }
    }
  }

  resolveLinkPath(link: string, sourceFile: TFile): string | null {
    // Try direct path
    const direct = this.plugin.app.vault.getAbstractFileByPath(normalizePath(link + '.md'));
    if (direct instanceof TFile) return direct.path;

    // Try relative to source
    const folder = sourceFile.parent?.path || '';
    const relative = this.plugin.app.vault.getAbstractFileByPath(normalizePath(`${folder}/${link}.md`));
    if (relative instanceof TFile) return relative.path;

    return null;
  }

  updateStatusBar(): void {
    if (!this.publishStatusBarEl) return;
    const pending = this.getPendingFiles();
    if (pending.length > 0) {
      this.publishStatusBarEl.setText(`Publish: ${pending.length} pending`);
      this.publishStatusBarEl.show();
    } else {
      this.publishStatusBarEl.setText('Publish: up to date');
      this.publishStatusBarEl.show();
    }
  }
}
