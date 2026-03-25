<template>
  <div class="list-page">
    <header class="header">
      <h1>长列表展示</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <main class="content">
      <div class="intro">
        <p>
          <strong>✅ 性能优化：</strong>使用 <code>vue-virtual-scroller</code> 虚拟滚动，只渲染可视区域
        </p>
        <p>
          就算 10000 条数据也能秒开，只渲染可视区域大约 10-15 个 DOM 节点。
        </p>
      </div>

      <!-- ✅ 性能优化：虚拟滚动，只渲染可视区域 -->
      <div class="list-container">
        <RecycleScroller
          class="scroller"
          :items="listData"
          :item-size="itemSize"
          key-field="id"
          v-slot="{ item }"
        >
          <div class="list-item">
            <div class="item-avatar"></div>
            <div class="item-content">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-desc">{{ item.description }}</div>
            </div>
          </div>
        </RecycleScroller>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

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
    description: '这是一条测试数据，虚拟滚动只渲染可视区域的列表项，不管多少数据都能秒开。'
  }))
}

const listData = generateListData(1000)
const itemSize = 80 // 每个列表项高度固定 80px
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
  color: #10b981;
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
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
}

.intro p {
  margin: 8px 0;
  line-height: 1.6;
}

.list-container {
  height: 600px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.scroller {
  width: 100%;
  height: 100%;
}

.list-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.item-avatar {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
