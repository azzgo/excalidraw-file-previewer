<p align="center">
  <img width="400" src="./src/assets/icon.svg" alt="Banner">
</p>


# Excalidraw File Previewer

A userscript that renders `.excalidraw` files directly in the browser.

## Features

- Automatically detects and renders `.excalidraw` files
- Works with both local (`file://`) and remote URLs
- Full Excalidraw rendering engine support
- View-only mode for previewing diagrams

## Installation

First install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/)

### Get From Greasy Fork

Get script from [Greasy Fork | excalidraw file previewer](https://greasyfork.org/zh-CN/scripts/563560-excalidraw-file-previewer)

### Get From Release

Get script `excalidraw-file-previewer.user.js` from [Release | excalidraw file previewer](https://github.com/azzgo/excalidraw-file-previewer/releases/latest/)

### Build From Source

1. Build the userscript:
   ```bash
   pnpm install
   pnpm run build
   ```
2. Open `dist/excalidraw-file-previewer.user.js` and install it via your userscript manager

## Usage

Once installed, simply navigate to any `.excalidraw` file URL or open a local `.excalidraw` file. The userscript will automatically detect and render the diagram.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Tech Stack

- **React 19** - UI framework
- **Excalidraw** - Diagram rendering engine
- **Vite** - Build tool with userscript support
- **TypeScript** - Type safety

## License

MIT
