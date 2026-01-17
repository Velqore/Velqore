import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",        // critical for GitHub Pages
  build: {
    outDir: "dist"
  }
});
