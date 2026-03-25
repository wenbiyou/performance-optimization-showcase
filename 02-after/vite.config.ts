import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginCompression } from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
// ✅ 优化：开启各种构建优化
export default defineConfig({
  plugins: [
    vue(),
    // ✅ 性能优化：Gzip/Brotli 压缩
    VitePluginCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    VitePluginCompression({
      algorithm: 'brotli',
      ext: '.br',
    }),
    // ✅ 性能优化：Service Worker 缓存静态资源
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // 缓存首屏核心资源
        globPatterns: ['**/*.{js,css,html,ico,png,webp}'],
      },
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    // ✅ 性能优化：关闭 source map 减小体积
    sourcemap: false,
    // ✅ 性能优化：手动分包，更好的缓存利用
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue'],
          'vue-router': ['vue-router'],
        },
      },
    },
  },
})
