import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 🚀 性能问题：所有代码同步加载，无拆分
createApp(App).use(router).mount('#app')
