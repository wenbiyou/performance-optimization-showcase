<template>
  <div class="home-page">
    <header class="header">
      <h1>🎯 性能优化案例 - 首页</h1>
      <p>这是<strong>优化前</strong>版本，包含多个典型性能问题</p>
    </header>

    <main class="content">
      <!-- 🚀 性能问题：3 张未压缩大图全部在首屏加载 -->
      <div class="banner-container">
        <img :src="banner1" alt="banner 1" class="banner-image" />
        <img :src="banner2" alt="banner 2" class="banner-image" />
        <img :src="banner3" alt="banner 3" class="banner-image" />
      </div>

      <div class="intro">
        <h2>📝 项目介绍</h2>
        <p>
          这是一个演示前端性能优化的案例项目。
          这里<strong>刻意保留了多种典型的前端性能问题</strong>，用于对比优化前后的差异。
        </p>
        <ul>
          <li>✓ 大图未压缩，PNG 原图直接使用</li>
          <li>✓ 大图全部首屏同步加载</li>
          <li>✓ 路由全部同步打包进首包</li>
          <li>✓ 全量引入第三方库</li>
          <li>✓ 长列表一次性渲染</li>
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
// 🚀 性能问题：全量引入 lodash
import _ from 'lodash'

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'

// 演示使用 lodash
const debouncedFn = _.debounce(() => {
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background-color: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #2563eb;
}
</style>
