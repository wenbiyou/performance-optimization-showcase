<template>
  <div class="list-page">
    <header class="header">
      <h1>长列表展示</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <main class="content">
      <div class="intro">
        <p>
          <strong>🚀 性能问题：</strong>一次性渲染 1000 条数据，没有虚拟滚动
        </p>
        <p>
          这是前端非常常见的性能问题，一次性创建上千 DOM 节点会导致首次渲染非常卡顿。
        </p>
      </div>

      <!-- 🚀 性能问题：一次性渲染 1000 条，全部创建 DOM -->
      <div class="list-container">
        <div
          v-for="item in listData"
          :key="item.id"
          class="list-item"
        >
          <div class="item-avatar"></div>
          <div class="item-content">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-desc">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// 🚀 性能问题：生成 1000 条数据一次性全部渲染

interface ListItem {
  id: number
  title: string
  description: string
}

// 生成 1000 条模拟数据
const generateListData = (count: number): ListItem[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    title: `列表项 ${index + 1}`,
    description: '这是一条测试数据，用于演示长列表一次性渲染的性能问题。在优化后版本会使用虚拟滚动只渲染可视区域。'
  }))
}

const listData = generateListData(1000)
</script>

<style scoped>
.list-page {
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

.intro {
  margin-bottom: 24px;
  padding: 16px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
}

.intro p {
  margin: 8px 0;
  line-height: 1.6;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.list-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.item-avatar {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.item-content {
  flex: 1;
  min-width: 0;
}

.item-title {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}

.item-desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
}
</style>
