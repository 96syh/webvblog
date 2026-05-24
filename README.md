# webvblog

基于 Next.js 的个人作品集与博客网站。项目用于展示个人信息、项目作品、文章内容和基础访问分析页面，适合部署为个人主页或技术博客。

## 功能概览

- Next.js App Router 页面结构。
- TypeScript + Tailwind CSS 组件化开发。
- 支持浅色/深色主题切换。
- 包含作品展示、博客、关于页和 analytics 页面。
- 使用 Framer Motion 实现页面动效。
- 引入 Notion SDK，便于后续接入 Notion 内容源。

## 技术栈

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Bun / Node.js

## 本地运行

```bash
bun install
bun dev
```

如果使用 npm：

```bash
npm install
npm run dev
```

默认开发服务由 `package.json` 中的脚本控制：

```bash
bun dev
bun run build
bun run lint
```

## 目录结构

```text
.
├── src/
│   ├── app/             # 页面和路由
│   ├── components/      # 通用组件
│   ├── contexts/        # React context
│   └── lib/             # 工具函数和配置
├── public/              # 静态资源
├── package.json
└── tailwind.config.ts
```

## 部署

项目可以部署到 Vercel、Netlify 或其他支持 Next.js 的平台。部署前建议先运行：

```bash
bun run build
```

