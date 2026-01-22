import { defineConfig } from "vite";
import monkey, {cdn} from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://raw.githubusercontent.com/azzgo/excalidraw-file-previewer/d0812af94c620041090aebc5d2ca9b7fc058b244/src/assets/icon.svg",
        "run-at": "document-idle",
        match: ["*://*/*.excalidraw", "file:///*.excalidraw"],
        namespace: "npm/vite-plugin-monkey",
        require: [
          "https://github.com/azzgo/excalidraw-file-previewer/releases/download/v0.0.1/excalidraw-lib.umd.js",
        ],
      },
    }),
  ],
});
