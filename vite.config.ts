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
        icon: "",
        "run-at": "document-idle",
        match: ["*://*/*.excalidraw", "file:///*.excalidraw"],
        namespace: "npm/vite-plugin-monkey",
      },
    }),
  ],
});
