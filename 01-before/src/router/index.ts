import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import List from '../views/List.vue'

// 🚀 性能问题：所有路由同步导入，全部打包进首包
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/list',
    name: 'list',
    component: List
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
