import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: "https://raw.githubusercontent.com/azzgo/excalidraw-file-previewer/d0812af94c620041090aebc5d2ca9b7fc058b244/src/assets/icon.svg",
        "run-at": "document-idle",
        match: ["*://*/*.excalidraw", "file:///*.excalidraw"],
        namespace: "npm/vite-plugin-monkey",
      },
    }),
  ],
});
