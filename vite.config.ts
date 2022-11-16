import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 本地创建一个服务器
  server:{
    host:"0.0.0.0",
    // 该服务器走一个代理 
    proxy:{
      //访问的接口，如果是以 /api为开头
      // 我就自动去帮你访问 target这个地址 
      '^/api': {
        target: 'http://8.131.89.181:8080',
        changeOrigin: true,
        // 重写
        rewrite: (path) => path.replace(/^\/api/,'')
      },
    },
    
  }
});
