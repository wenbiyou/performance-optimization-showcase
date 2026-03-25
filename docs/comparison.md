# 📊 性能优化详细对比

本文档详细记录每个优化手段的前后对比、技术原理和性能收益。

## 📋 总体数据对比

| 性能指标 | 优化前 | 优化后 | 提升幅度 |
|---------|--------|--------|---------|
| **首屏加载时间 (Slow 3G)** | 10.2s | 3.1s | **↓ 70%** |
| **打包后总体积 (gzip)** | 1.2MB | 380KB | **↓ 68%** |
| **首屏请求数** | 32 | 12 | **↓ 62%** |
| **Lighthouse Performance** | 42 | 89 | **+47 分** |
| **最大内容绘制 (LCP)** | 8.7s | 2.8s | **↓ 68%** |
| **首次内容绘制 (FCP)** | 4.2s | 1.5s | **↓ 64%** |

*测试环境：Chrome 120 / Mac Studio / 无痕模式 / Slow 3G / 禁用缓存*

---

## 🔍 逐项优化说明

### 1. 图片优化

#### 优化前
- 3 张首页 Banner 使用 PNG 未压缩，每张 ~ 600KB，总 1.8MB
- 所有图片首屏同步加载，即使不在可视区域

#### 优化动作
1. **格式转换**：PNG → WebP，体积减少约 70%
2. **懒加载**：使用 `vue3-lazyload`，仅加载可视区域图片
3. **渐进式加载**：先加载 1KB 低分辨率占位图，再加载高清图

#### 性能收益
- 图片总体积从 1.8MB → 540KB，**减少 1.26MB**
- 首屏加载请求减少 3 个
- LCP 提前约 1.5s

**代码位置**：`02-after/src/App.vue` - 图片懒加载配置

---

### 2. 路由懒加载

#### 优化前
```typescript
// 全部同步导入，打包进首包
import Home from './views/Home.vue'
import About from './views/About.vue'
import List from './views/List.vue'
import User from './views/User.vue'
```
所有路由代码全部打包进首包，首包体积 800KB+

#### 优化后
```typescript
// 按需懒加载，仅加载当前页面
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const List = () => import('./views/List.vue')
// 非首屏路由预加载，空闲时自动加载
const User = () => import('./views/User.vue')
```

#### 性能收益
- 首包体积从 800KB → 320KB，**减少 480KB**
- 首屏 JS 解析时间减少约 2s

**代码位置**：`02-after/src/router/index.ts` - 路由配置

---

### 3. 第三方依赖优化

#### 优化前
```typescript
// 全量引入 lodash
import _ from 'lodash'
```
整个 lodash 打包进去，增加 80KB（gzip 后）

#### 优化后
```typescript
// 仅按需引入用到的方法
import debounce from 'lodash/debounce'
```

#### 性能收益
- 减少 68KB 冗余代码

---

### 4. 关键资源预加载 preload

#### 优化动作
在 `index.html` 中对核心 CSS/JS 添加 preload：
```html
<link rel="preload" href="/assets/vue-chunk.js" as="script">
<link rel="preload" href="/assets/main.css" as="style">
```

#### 性能收益
- 浏览器优先加载核心资源，**LCP 提前约 800ms**

---

### 5. 构建分包优化

#### 优化前
- 所有代码打包成一个 chunk，包括 Vue + 第三方 + 业务代码
- 用户修改业务代码后，用户需要重新下载所有代码

#### 优化后
在 `vite.config.ts` 中配置 manualChunks：
```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vue-vendor': ['vue'],
        'vendor': [...otherThirdParty],
      },
    },
  },
}
```

#### 性能收益
- 更好的缓存利用，重复访问加载更快
- 首包体积进一步减小

---

### 6. 长列表虚拟滚动

#### 优化前
- 一次性渲染 1000+ 列表项，创建 1000+ DOM 节点
- 首次渲染需要 1.5s+，滚动卡顿

#### 优化后
- 使用 `vue-virtual-scroller` 虚拟滚动
- 仅渲染可视区域大约 10-15 个列表项
- 滚动时动态替换内容

#### 性能收益
- 首次渲染时间从 1.5s → 200ms
- 滚动帧率从 30fps → 60fps

**代码位置**：`02-after/src/components/VirtualList.vue`

---

### 7. Gzip/Brotli 压缩

#### 优化前
- 仅 Vite 默认压缩，未开启双重压缩
- 文本资源体积较大

#### 优化后
- 使用 `vite-plugin-compression` 同时生成 gzip 和 br
- Nginx 配置优先返回 br

#### 性能收益
- HTML/CSS/JS 体积再减少约 20%

---

### 8. Service Worker 缓存静态资源

#### 优化动作
- 使用 `workbox-vite-plugin` 缓存首屏核心静态资源
- 用户重复访问时，直接从缓存读取

#### 性能收益
- 重复访问首屏加载时间再减少 **50%+**

---

## 🧪 本地测试指南

### 如何正确测试性能

1. **打开无痕窗口**（避免缓存和插件影响）
2. **打开 DevTools → Network**
3. **选择 Slow 3G** 节流：Network → Throttling → Slow 3G
4. **禁用缓存**：勾选 "Disable cache"
5. **刷新页面**，查看 Network 瀑布流，记录 `DOMContentLoaded` 和 `Load` 时间
6. **对比 01-before** 和 **02-after** 结果

### 如何看 Lighthouse 得分

1. DevTools → Lighthouse
2. 勾选 "Performance"，点击 "Generate report"
3. 查看最终 Performance 得分

## 💡 总结

性能优化不是玄学，是一套可复制的方法论：

1. **测量**：用数据说话，不要凭感觉
2. **定位**：找到最大的瓶颈
3. **优化**：针对性优化
4. **验证**：优化后再测量，确认收益

大多数项目 80% 的性能问题来自 20% 的原因：
- **大图片未压缩** → 占 40% 性能问题
- **首包体积太大** → 占 20%
- **不合理加载顺序** → 占 15%

聚焦解决这几个问题，就能获得 80% 的收益。
