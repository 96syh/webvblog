<div align="center">

# 🌟 Modern Portfolio Website

*A sophisticated, responsive portfolio platform built with cutting-edge web technologies*

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-pink?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Live Demo](https://webvblog.vercel.app) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## ✨ Features

<table>
  <tr>
    <td>🎨</td>
    <td><strong>Modern Design System</strong><br/>Clean, minimalist interface with carefully crafted typography and spacing</td>
  </tr>
  <tr>
    <td>🌙</td>
    <td><strong>Smart Theme Toggle</strong><br/>Seamless dark/light mode with system preference detection</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><strong>Responsive Excellence</strong><br/>Pixel-perfect design across all devices and screen sizes</td>
  </tr>
  <tr>
    <td>⚡</td>
    <td><strong>Performance Optimized</strong><br/>Built with Next.js 15, Turbopack, and modern optimization techniques</td>
  </tr>
  <tr>
    <td>📊</td>
    <td><strong>Privacy-First Analytics</strong><br/>Local analytics dashboard with zero external tracking</td>
  </tr>
  <tr>
    <td>🎭</td>
    <td><strong>Smooth Animations</strong><br/>Delightful micro-interactions powered by Framer Motion</td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun runtime
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/96syh/webvblog.git
cd webvblog

# Install dependencies (recommended: Bun for faster installs)
bun install
# or npm install

# Start development server
bun dev
# or npm run dev
```

Visit [http://localhost:3001](http://localhost:3001) to see your portfolio in action.

## 🏗️ Architecture

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/           # Page routes
│   │   │   ├── about/         # About page
│   │   │   ├── work/          # Portfolio showcase
│   │   │   ├── blog/          # Blog system
│   │   │   └── analytics/     # Analytics dashboard
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   ├── Sidebar.tsx       # Navigation
│   │   └── ThemeProvider.tsx # Theme management
│   ├── contexts/             # React contexts
│   ├── lib/                  # Utilities and configs
│   └── styles/               # Global styles
├── public/                   # Static assets
└── docs/                    # Documentation
```

## 🛠️ Tech Stack

<details>
<summary><strong>Core Technologies</strong></summary>

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (self-hosted)

</details>

<details>
<summary><strong>Development Tools</strong></summary>

- **Runtime**: Bun
- **Linting**: ESLint + Biome
- **Type Checking**: TypeScript
- **Git Hooks**: Husky
- **Code Formatting**: Prettier

</details>

<details>
<summary><strong>Performance Features</strong></summary>

- **Bundler**: Turbopack (development)
- **Image Optimization**: Next.js Image Component
- **Font Optimization**: next/font
- **Code Splitting**: Automatic
- **PWA Ready**: Service Worker included

</details>

## 📦 Available Scripts

```bash
# Development
bun dev          # Start development server with Turbopack
bun build        # Create production build
bun start        # Start production server
bun preview      # Preview production build locally

# Code Quality
bun lint         # Run ESLint
bun type-check   # TypeScript type checking
bun format       # Format code with Prettier

# Testing
bun test         # Run test suite
bun test:watch   # Run tests in watch mode
bun test:coverage # Generate coverage report
```

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/96syh/webvblog)

### Other Platforms

<details>
<summary><strong>Netlify</strong></summary>

```bash
# Build command
bun run build

# Publish directory
out
```

</details>

<details>
<summary><strong>Docker</strong></summary>

```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

</details>

## 🎨 Customization

### Theme Configuration

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          950: '#172554',
        }
      }
    }
  }
}
```

### Component Architecture

All components follow a consistent structure:
- TypeScript interfaces for props
- Responsive design patterns
- Accessibility best practices
- Performance optimizations

## 📈 Analytics

The built-in analytics system provides:

- **Page Views**: Track visitor engagement
- **Session Data**: Understanding user behavior
- **Performance Metrics**: Core Web Vitals monitoring
- **Privacy Compliance**: No external trackers, GDPR compliant

Access your analytics at `/analytics` route.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

---

<div align="center">

**[⬆ Back to Top](#-modern-portfolio-website)**

Made with ❤️ and modern web technologies

</div>
