import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/lib/entry.tsx",
      name: "ExcalidrawLib",
      fileName: (format) => `excalidraw-lib.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      output: {
        extend: true,
      },
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
