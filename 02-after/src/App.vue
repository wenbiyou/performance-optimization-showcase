<template>
  <nav class="navbar">
    <div class="container">
      <span class="brand">performance-optimization</span>
      <span class="badge after">优化后</span>
    </div>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
// ✅ 优化完成
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

.badge.after {
  background-color: #10b981;
}
</style>
