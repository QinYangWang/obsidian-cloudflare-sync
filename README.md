# Obsidian Cloudflare Sync

Sync your Obsidian vault to Cloudflare R2 for blog publishing.

## Features

- One-click sync from Obsidian vault to Cloudflare R2
- Automatic frontmatter parsing for blog metadata
- Conflict detection and resolution UI
- Real-time sync status bar
- Selective publish via `publish: true` frontmatter

## Installation

### From GitHub Releases

1. Download the latest release from the [Releases](https://github.com/QinYangWang/obsidian-cloudflare-sync/releases) page.
2. Extract the zip file.
3. Copy the extracted folder to your Obsidian vault's `.obsidian/plugins/` directory.
4. Enable **Cloudflare Sync** in Obsidian's Community Plugins settings.

### From Obsidian Community Plugins (pending review)

Once approved, you can install directly from Obsidian's Community Plugins browser.

## Setup

1. Open **Settings > Community Plugins > Cloudflare Sync**.
2. Enter your Cloudflare credentials:
   - **R2 Access Key ID**
   - **R2 Secret Access Key**
   - **R2 Endpoint**
   - **R2 Bucket Name**
   - **API Token** (for blog backend authentication)
3. (Optional) Configure the vault folder to sync.
4. Click **Sync Now** from the ribbon icon or status bar.

## Frontmatter

Use YAML frontmatter in your notes to control publishing:

```yaml
---
title: My Blog Post
date: 2024-01-01
summary: A short description
tags:
  - obsidian
  - cloudflare
publish: true
coverImage: attachments/cover.png
---
```

## Development

```bash
npm install
npm run dev       # watch mode
npm run build     # production build
```

## Releasing

```bash
npm version patch   # or minor / major
git push --follow-tags
```

The GitHub Action will automatically create a draft release with `main.js`, `manifest.json`, and `styles.css`.

## License

MIT
