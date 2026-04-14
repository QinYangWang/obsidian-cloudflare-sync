# Cloudflare Sync

Sync your Obsidian vault to a Cloudflare Workers backend. This plugin provides bidirectional file synchronization, automatic frontmatter generation, conflict detection and resolution, and a real-time status bar.

## Features

- **Bidirectional Sync** — Full sync compares local and remote files using SHA-256 hashes, uploading, downloading, or skipping as needed.
- **Conflict Detection** — Three-way hash comparison detects when a file has changed on both sides. Conflicts can be resolved interactively or automatically.
- **Auto Sync** — Optional debounced sync on file save plus periodic full sync at a configurable interval.
- **Auto Frontmatter** — Automatically generate and fill YAML frontmatter for new and existing markdown files.
- **Selective Publish** — Use `publish: true` frontmatter to control blog publishing; published notes automatically upload linked local images.
- **Status Bar** — Live status indicator in Obsidian’s status bar showing last sync time, pending uploads, conflicts, and errors. Click it for details.
- **One-way Actions** — Force upload entire vault, download entire vault, or sync just the current file.

## Installation

### Manual (GitHub Releases)

1. Download the latest release from the [Releases](https://github.com/QinYangWang/obsidian-cloudflare-sync/releases) page.
2. Extract the zip.
3. Copy the extracted folder into your Obsidian vault’s `.obsidian/plugins/` directory.
4. Restart Obsidian, open **Settings → Community Plugins**, and enable **Cloudflare Sync**.

### From Obsidian Community Plugins

*(Pending review)* Once approved, search for **Cloudflare Sync** in Obsidian’s Community Plugins browser and install directly.

## Configuration

Open **Settings → Community Plugins → Cloudflare Sync** to configure the plugin.

### Connection

| Setting | Description |
|---|---|
| **Server URL** | Your Cloudflare Workers URL (e.g. `https://mysite.your-account.workers.dev`). |
| **API Token** | Bearer token used to authenticate with your Workers API. |

### Sync Settings

| Setting | Description |
|---|---|
| **Auto Sync** | Automatically sync a file after it is modified (with debounce). |
| **Auto Sync Interval** | How often to run a full vault sync, in minutes (`0` to `60`). Set to `0` to disable periodic sync. |
| **Debounce Delay** | Seconds to wait after a file change before syncing (`5` to `120`). Prevents excessive uploads while typing. |
| **Sync on Startup** | Automatically run a full sync a few seconds after Obsidian starts. |

### Conflict Resolution

| Setting | Description |
|---|---|
| **Conflict Strategy** | How to handle conflicts when both local and remote versions have changed.<br>• **Ask me every time** — Open the conflict resolution dialog.<br>• **Local always wins** — Overwrite remote with the local version.<br>• **Remote always wins** — Overwrite local with the remote version. |

### Content Settings

| Setting | Description |
|---|---|
| **Auto Frontmatter** | Automatically generate frontmatter for new markdown files and backfill missing fields on startup. |
| **Sync All Files** | Sync all files in the vault (attachments, images, etc.). When disabled, only markdown files are synced. |
| **Exclude Folders** | Comma-separated list of folder paths to exclude from sync (e.g. `_templates, .trash`). Files inside these folders are never uploaded or downloaded. |

## Usage

### Triggering Sync

- **Ribbon icon** — Click the cloud-upload icon in the left ribbon to run a full sync.
- **Status bar** — Click the status bar item to view sync details, then press **Sync Now**.
- **Command Palette** — Available commands:
  - **Full sync with Cloudflare** — Bidirectional sync with conflict detection.
  - **Sync entire vault to Cloudflare (upload only)** — Force-upload every file.
  - **Download entire vault from Cloudflare** — Force-download every file.
  - **Sync current file to Cloudflare** — Upload only the active file.
  - **Resolve sync conflicts** — Open the conflict resolution dialog.
  - **Show sync status** — Open the sync detail modal.
  - **Update frontmatter for current file** — Regenerate frontmatter for the active note.
  - **Generate frontmatter for all markdown files** — Force-update frontmatter for every markdown file.

### Frontmatter Support

The plugin reads and generates the following YAML frontmatter fields in markdown files:

| Field | Type | Default | Description |
|---|---|---|---|
| `title` | string | File basename | Post title. |
| `slug` | string | URL-safe basename | URL-friendly identifier. |
| `date` | string (ISO) | File creation time | Publication date. |
| `summary` | string | First paragraph (cleaned, max 200 chars) | Short excerpt. |
| `tags` | string or string[] | `[]` | Tags for the post. |
| `publish` | boolean | `false` | Whether the post should be published. When `true`, linked local images are also uploaded. |
| `coverImage` | string | — | Optional cover image filename or path. |

If a markdown file is missing frontmatter, the plugin can automatically create it. If some required fields (`title`, `slug`, `date`, `summary`, `tags`, `publish`) are missing, it will backfill only those fields without overwriting existing values.

### Conflict Resolution

When a conflict is detected, a modal displays the local and remote versions side-by-side with differences highlighted. You can choose:

- **Keep Local** — Upload the local version to the server.
- **Keep Remote** — Overwrite the local file with the remote version.
- **Keep Both** — Create a local `.conflict-{timestamp}.md` copy of the remote version, then upload the local version to the server.

If multiple conflicts exist, you can navigate between them or apply **All Local** / **All Remote** to resolve every conflict at once.

## Development

```bash
# Install dependencies
npm install

# Watch mode (development)
npm run dev

# Production build (runs TypeScript checks first)
npm run build
```

The build outputs `main.js`, which Obsidian loads along with `manifest.json` and `styles.css`.

## Releasing

```bash
# Bump version and update manifest
npm version patch   # or minor / major

# Push the version commit and tag
git push --follow-tags
```

The repository includes a GitHub Action that automatically creates a draft release containing `main.js`, `manifest.json`, and `styles.css`.

## License

MIT
