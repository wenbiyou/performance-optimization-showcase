import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// 正确写法（默认导出）
import vitePluginCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
// ✅ 优化：开启各种构建优化
export default defineConfig({
  plugins: [
    vue(),
    // ✅ 性能优化：Gzip/Brotli 压缩
    vitePluginCompression({
      algorithm: 'gzip',
      ext: '.gz',
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
    // ✅ 修复：Vite 官方推荐的【函数式分包】
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('vue')) {
            return 'vue-vendor'
          }
        }
      },
    }
  },
})
