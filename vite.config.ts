import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
  },
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://raw.githubusercontent.com/azzgo/excalidraw-file-previewer/d0812af94c620041090aebc5d2ca9b7fc058b244/src/assets/icon.svg",
        "run-at": "document-idle",
        match: ["*://*/*.excalidraw", "file:///*.excalidraw"],
        name: "excalidraw file previewer",
        namespace: "npm/vite-plugin-monkey",
        description:
          "A userscript that renders `.excalidraw` files directly in the browser.",
        require: [
          "https://cdn.jsdelivr.net/gh/azzgo/excalidraw-file-previewer@0.0.2/dist/excalidraw-lib.umd.js#sha256-saaAgmgXKUqt6J9Lj/M8Zv1QCBLNk2LaOImJ0KZ+R8Q=",
        ],
        resource: {
          REMOTE_STYLE:
            "https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0.18.0/dist/prod/index.min.css",
        },
        license: "MIT",
      },
    }),
  ],
});
