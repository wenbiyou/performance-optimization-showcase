<template>
  <div class="home-page">
    <header class="header">
      <h1>🎯 性能优化案例 - 首页</h1>
      <p>这是<strong>优化后</strong>版本，所有性能问题已修复</p>
    </header>

    <main class="content">
      <!-- ✅ 性能优化：图片 WebP + 懒加载 -->
      <div class="banner-container">
        <img
          v-lazy="banner1"
          alt="banner 1"
          class="banner-image"
        />
        <img
          v-lazy="banner2"
          alt="banner 2"
          class="banner-image"
        />
        <img
          v-lazy="banner3"
          alt="banner 3"
          class="banner-image"
        />
      </div>

      <div class="intro">
        <h2>📝 项目介绍</h2>
        <p>
          这是一个演示前端性能优化的案例项目。
          这里针对优化前的所有性能问题做了<strong>全维度针对性优化</strong>。
        </p>
        <ul>
          <li>✅ PNG → WebP 格式，图片体积减少 70%</li>
          <li>✅ <code>vue3-lazy</code> 图片懒加载，仅加载可视区域图片</li>
          <li>✅ 路由懒加载，首包体积大幅减小</li>
          <li>✅ lodash 按需引入，只加载用到的方法</li>
          <li>✅ 长列表虚拟滚动，只渲染可视区域</li>
        </ul>
      </div>

      <div class="navigation">
        <router-link to="/about" class="nav-link">关于页面</router-link>
        <router-link to="/list" class="nav-link">长列表演示</router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// ✅ 性能优化：只按需引入 debounce
import debounce from 'lodash/debounce'

import banner1 from '../assets/banner1.webp'
import banner2 from '../assets/banner2.webp'
import banner3 from '../assets/banner3.webp'

// 演示使用 debounce
const debouncedFn = debounce(() => {
  console.log('debounced')
}, 300)

debouncedFn()
</script>

<style scoped>
.home-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.header {
  padding: 24px;
  text-align: center;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.header h1 {
  margin: 0 0 8px 0;
  font-size: 24px;
}

.header p {
  margin: 0;
  opacity: 0.9;
}

.content {
  flex: 1;
  padding: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.banner-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.banner-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.intro {
  margin-bottom: 32px;
  line-height: 1.6;
}

.intro h2 {
  margin: 0 0 16px 0;
  color: #1f2937;
}

.intro ul {
  margin: 16px 0;
  padding-left: 20px;
}

.intro li {
  margin: 8px 0;
  color: #4b5563;
}

.navigation {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.nav-link {
  padding: 12px 24px;
  background-color: #10b981;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #059669;
}
</style>
