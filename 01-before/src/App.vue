<template>
  <nav class="navbar">
    <div class="container">
      <span class="brand">performance-optimization</span>
      <span class="badge before">优化前</span>
    </div>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
// 🚀 性能问题：无特别问题，这是根组件
</script>

<style scoped>
.navbar {
  background-color: #1f2937;
  padding: 16px 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}

.badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: white;
}

.badge.before {
  background-color: #ef4444;
}
</style>
