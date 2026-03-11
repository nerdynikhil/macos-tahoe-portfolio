# macOS Tahoe Portfolio

A macOS Tahoe-themed portfolio website template built with React, TypeScript, Vite, and Tailwind CSS. Features a fully interactive desktop environment with draggable windows, a dock, menu bar, Finder, Terminal, and Safari — all running in the browser.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **macOS Desktop UI** — Realistic desktop with wallpaper, menu bar, dock, and draggable windows
- **Finder Window** — Portfolio browser with sidebar categories, list/grid view toggle, and macOS-style column headers
- **Terminal Window** — Animated terminal with typing effect showing your bio, skills, and social links
- **Safari Window** — Blog article viewer with external link preview cards
- **Dock** — Animated dock with bounce effects, tooltips, and running indicators
- **Menu Bar** — Live clock, dark/light mode toggle, Wi-Fi, battery, and Control Center icons
- **Dark Mode** — Full dark/light mode support with one-click toggle
- **Config-Driven** — All content lives in a single `src/config.ts` file for easy customization
- **SEO Ready** — Open Graph, Twitter Cards, and JSON-LD structured data
- **Responsive** — Works on desktop and tablet screens
- **Deploy Anywhere** — Vercel, Netlify, GitHub Pages, or any static host

## Quick Start

```bash
# Clone the template
git clone https://github.com/nerdynikhil/macos-tahoe-portfolio.git
cd macos-tahoe-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your portfolio.

## Customization

All customizable content is in **one file**: `src/config.ts`

### Personal Info

```typescript
export const config = {
  name: "Your Name",
  username: "yourusername",
  title: "Your Title",
  email: "you@example.com",
  // ...
}
```

### Portfolio Projects

Add your projects to the `projects` array. Each project appears in the Finder window:

```typescript
projects: [
  {
    name: "My App",
    description: "A cool web application",
    category: "web",        // matches a category id
    icon: "🚀",             // emoji or { type: "image", src: "/images/icon.png" }
    action: "external",     // "external" opens in Safari preview, "navigate" goes to a route
    target: "https://myapp.com",
  },
],
```

### Categories

Define sidebar categories in the Finder:

```typescript
categories: [
  { id: "web", label: "Web Apps", icon: "folder" },
  { id: "mobile", label: "Mobile Apps", icon: "phone" },
  { id: "extensions", label: "Extensions", icon: "puzzle" },
  { id: "tools", label: "Dev Tools", icon: "code" },
  { id: "writing", label: "Writing", icon: "doc" },
],
```

Available sidebar icons: `folder`, `phone`, `puzzle`, `code`, `doc`

### Blog Articles

Articles shown in the Safari window:

```typescript
articles: [
  {
    slug: "my-article",
    title: "My First Article",
    meta: "Tutorial",
    excerpt: "A brief description of the article...",
    tags: ["React", "TypeScript"],
  },
],
```

### Terminal Content

Customize the terminal animation:

```typescript
terminal: {
  hostname: "yourusername",
  greeting: "Last login: Mon Jan 1 00:00:00 on ttys001",
  name: "Your Name",
  tagline: "Developer \u00B7 Designer \u00B7 Creator",
  aboutLines: [
    "I build products that solve real problems.",
    "From web apps to mobile apps to developer tools.",
  ],
},
```

### Social Links

```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
},
```

## Project Structure

```
macos-tahoe-portfolio/
├── public/
│   ├── images/
│   │   ├── macos-icons/          # macOS dock icons (18 icons)
│   │   └── macos-tahoe-wallpaper.jpg
│   └── robots.txt
├── src/
│   ├── config.ts                 # <-- Edit this file to customize
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── SEO.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── macos/
│   │       ├── Desktop.tsx       # Main desktop container
│   │       ├── DesktopContext.tsx # Window state management
│   │       ├── Dock.tsx          # Application dock
│   │       ├── FinderContent.tsx # Portfolio browser
│   │       ├── MenuBar.tsx       # Top menu bar
│   │       ├── SafariContent.tsx # Blog viewer
│   │       ├── TerminalContent.tsx # Terminal animation
│   │       └── Window.tsx        # Draggable window
│   └── pages/
│       ├── Home.tsx
│       └── NotFound.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
└── vercel.json
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nerdynikhil/macos-tahoe-portfolio)

### Netlify

```bash
npm run build
# Deploy the `dist` folder
```

### GitHub Pages

```bash
npm run build
# Deploy the `dist` folder to your GitHub Pages repo
```

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [TypeScript 5.9](https://typescriptlang.org) | Type safety |
| [Vite 7](https://vite.dev) | Build tool |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [React Router 7](https://reactrouter.com) | Client-side routing |
| [React Helmet Async](https://github.com/staylor/react-helmet-async) | SEO meta tags |

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Made by [@nerdynikhil](https://github.com/nerdynikhil). If you use this template, a star on the repo would be appreciated!
