import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// 🚀 性能问题：无任何构建优化配置
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001
  }
})
