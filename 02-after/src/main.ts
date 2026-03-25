import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'

// ✅ 性能优化：图片懒加载注册
createApp(App)
  .use(router)
  .use(lazyPlugin, {
    // 占位图
    loading: '/placeholder.svg'
  })
  .mount('#app')
