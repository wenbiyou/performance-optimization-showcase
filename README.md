# ⚡ performance-optimization-showcase - 前端性能优化实战案例展示

> 真实项目性能优化案例，从 10s → 3s，弱网首屏加载优化 **70%**，可复现、可验证。

[![License](https://img.shields.io/github/license/wenbiyou/performance-optimization-showcase.svg)](https://github.com/wenbiyou/performance-optimization-showcase/blob/main/LICENSE)
[![Vue3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://v3.vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

## 🎯 项目背景

「**弱网首屏加载优化 70%，从 10s 降至 3s**」，这个仓库就是这个优化案例的完整可复现代码。

- `01-before/` - **优化前**：模拟真实业务项目常见的性能问题
- `02-after/` - **优化后**：针对性全维度优化后的版本
- `docs/` - 优化对比数据、方法论总结

## 📊 优化前后对比

| 性能指标                        | 优化前 | 优化后    | 提升幅度   |
| ------------------------------- | ------ | --------- | ---------- |
| **首屏加载时间 (3G 弱网)**      | 10.2s  | **3.1s**  | **↓ 70%**  |
| **总资源大小 (gzip)**           | 1.2MB  | **380KB** | **↓ 68%**  |
| **首屏请求数**                  | 32     | **12**    | **↓ 62%**  |
| **Lighthouse Performance 得分** | 42     | **89**    | **+47 分** |

### 📷 瀑布流对比

| 优化前                               | 优化后                              |
| ------------------------------------ | ----------------------------------- |
| ![优化前](docs/waterfall-before.png) | ![优化后](docs/waterfall-after.png) |

_测试环境：Chrome 无痕模式 → Network → 3G 慢速 → 禁用缓存_

## 🔧 优化手段汇总

### 📦 资源加载优化

| 优化手段                | 解决问题                             | 性能收益                         |
| ----------------------- | ------------------------------------ | -------------------------------- |
| 图片 WebP 压缩 + 懒加载 | 大图未压缩占带宽，首屏加载非可视图片 | 减少图片体积 70%，首屏减少 300KB |
| 路由懒加载 + 预加载     | 首屏加载所有路由代码                 | 首包体积减少 40%                 |
| 关键资源 preload        | 核心 JS/CSS 加载太晚                 | 缩短首屏渲染时间 1.2s            |
| 第三方库按需引入        | 全量引入 lodash 等                   | 减少 80KB 冗余代码               |
| 非核心脚本延迟加载      | 统计等脚本阻塞首屏                   | 不阻塞首屏渲染                   |

### 🏗️ 构建优化

| 优化手段             | 解决问题             | 性能收益               |
| -------------------- | -------------------- | ---------------------- |
| 手动分包拆分 vendor  | 所有第三方打包在一起 | 更好的缓存利用，更新快 |
| Gzip/Brotli 双重压缩 | 未开启服务端压缩     | 资源体积再减少 20%     |
| Tree Shaking         | dead code 未移除     | 减少冗余代码           |
| 关闭生产 sourcemap   | 构建出大 map 文件    | 减少服务器传输         |

### 🎨 渲染优化

| 优化手段            | 解决问题               | 性能收益                |
| ------------------- | ---------------------- | ----------------------- |
| 长列表虚拟滚动      | 一次性渲染 1000+ DOM   | 首次渲染从 1.5s → 200ms |
| 图片渐进式加载      | 空白占位到大图加载完成 | 改善用户体验，LCP 提前  |
| 减少重排重绘        | 频繁 DOM 操作导致卡顿  | 滚动更流畅              |
| Service Worker 缓存 | 重复访问还要重新下载   | 二次访问速度提升 50%+   |

## 🚀 本地运行验证

### 查看优化前版本

```bash
cd 01-before
pnpm install
pnpm build
pnpm preview
# 打开 http://localhost:4173
# Chrome DevTools → Network → 选择 Slow 3G → 刷新查看加载时间
```

### 查看优化后版本

```bash
cd 02-after
pnpm install
pnpm build
pnpm preview
# 同样方式测试，对比加载时间
```

## 📝 性能优化方法论总结

```
1. 测量 → 2. 分析瓶颈 → 3. 优化 → 4. 验证
```

**测量工具**：

- Chrome DevTools Performance / Network
- Lighthouse 综合评分
- WebPageTest 跨区域测试

**常见瓶颈**：

- 大图片未压缩
- 首包体积过大
- 不合理的资源加载顺序
- 大量 DOM 一次性渲染

**优化原则**：

- 🥇 第一原则：**不要传输不需要的内容**
- 🥈 第二原则：**延迟传输非必须内容**
- 🥉 第三原则：**优化传输顺序，关键资源优先**

## 📁 项目结构

```
performance-optimization-showcase/
├── 01-before/          # 优化前（基准版本，有意植入性能问题）
├── 02-after/           # 优化后（全维度优化版本）
├── docs/
│   ├── comparison.md    # 详细对比文档
│   ├── waterfall-before.png
│   └── waterfall-after.png
└── README.md
```

## 🎯 项目价值

- 证明你的性能优化能力不是说说而已，**可复现、可验证**
- 总结的方法论可以给其他人参考
- 找工作的时候，面试官一看就懂：这个人真做过性能优化

## 📄 许可证

[MIT](./LICENSE)

---

⭐️ 如果这个案例对你有帮助，欢迎点个 Star 支持一下！
