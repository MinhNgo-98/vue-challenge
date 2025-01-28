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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/main.scss";`,
      },
    },
  },
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
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
    }
  }
});