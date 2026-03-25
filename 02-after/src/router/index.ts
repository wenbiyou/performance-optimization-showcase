import { createRouter, createWebHashHistory } from 'vue-router'

// ✅ 性能优化：路由懒加载，只加载当前页面
// 首屏只加载首页代码，其他页面访问时才加载
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const List = () => import('../views/List.vue')

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
