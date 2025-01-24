import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-challenge/",
  plugins:[
    vue(),
  ],
  build: {
    target: "esnext",
    outDir,
    emptyOutDir: true,
    assetsInlineLimit: 0
  },
  resolve: {
    alias: {
      "@root": fileURLToPath(new URL("./", import.meta.url)),
      "@src": fileURLToPath(new URL("./src", import.meta.url)),
      "@public": fileURLToPath(new URL("./public", import.meta.url)),
      "@assets": fileURLToPath(new URL("./assets", import.meta.url)),
      "@components": fileURLToPath(new URL("./components", import.meta.url)),
      "@views": fileURLToPath(new URL("./views", import.meta.url)),
      "@data": fileURLToPath(new URL("./data", import.meta.url)),
    }
  }
});
