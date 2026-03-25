<template>
  <div class="about-page">
    <header class="header">
      <h1>关于</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <main class="content">
      <div class="card">
        <h2>🎯 这个项目要解决什么问题？</h2>
        <p>
          很多开发者说自己做过性能优化，但通常只有一句话「XX 性能提升了多少」，没有可复现的案例。
        </p>
        <p>
          这个项目就是<em>把性能优化从一句话变成可复现的完整案例</em>，展示从 10s 到 3s 每一步做了什么，带来了多少提升。
        </p>
      </div>

      <div class="card">
        <h2>📊 优化前后对比</h2>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>指标</th>
              <th>优化前</th>
              <th>优化后</th>
              <th>提升</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>首屏加载时间 (3G 弱网)</td>
              <td>10.2s</td>
              <td>3.1s</td>
              <td>↓ 70%</td>
            </tr>
            <tr>
              <td>打包体积 (gzip)</td>
              <td>1.2MB</td>
              <td>380KB</td>
              <td>↓ 68%</td>
            </tr>
            <tr>
              <td>Lighthouse 得分</td>
              <td>42</td>
              <td>89</td>
              <td>+ 47 分</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// 🚀 性能问题：路由已经同步加载了，这里就是示例
</script>

<style scoped>
.about-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.header {
  padding: 24px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  margin: 0;
  font-size: 24px;
  color: #1f2937;
}

.back-link {
  color: #3b82f6;
  text-decoration: none;
}

.content {
  flex: 1;
  padding: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  margin-bottom: 32px;
}

.card h2 {
  font-size: 18px;
  margin-bottom: 16px;
  color: #1f2937;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 8px;
  border: 1px solid #e5e7eb;
  text-align: left;
}

.comparison-table tr:nth-child(even) {
  background-color: #f9fafb;
}
</style>
