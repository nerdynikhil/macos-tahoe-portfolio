// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your macOS-themed portfolio.
// ============================================================

export const config = {
  // -- Personal Info --
  name: "Jane Doe",
  username: "janedoe",
  title: "Developer & Designer",
  email: "hello@example.com",
  bio: "I build things for the web.",
  currentWork: {
    label: "Acme Inc",
    url: "https://example.com",
  },

  // -- SEO --
  siteUrl: "https://yourdomain.com",
  siteTitle: "Jane Doe — Developer & Designer",
  siteDescription:
    "Portfolio of Jane Doe — Developer, Designer, Creator. Web apps, mobile apps, extensions, and more.",
  profileImage: "/images/profile.png",

  // -- Social Links --
  social: {
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
    instagram: "https://instagram.com/janedoe",
  },

  // -- Finder Sidebar Categories --
  // Each category is a filter shown in the Finder sidebar under "Favourites".
  // The `id` must match the `category` field on your projects.
  // The `icon` must be one of: "folder" | "phone" | "puzzle" | "code" | "doc"
  categories: [
    { id: "web", label: "Web Apps", icon: "folder" as const },
    { id: "mobile", label: "Mobile Apps", icon: "phone" as const },
    { id: "extensions", label: "Extensions", icon: "puzzle" as const },
    { id: "tools", label: "Dev Tools", icon: "code" as const },
    { id: "writing", label: "Writing", icon: "doc" as const },
  ],

  // -- Finder Sidebar Locations --
  // External links shown under "Locations" in the Finder sidebar.
  // icon: "github" | "person" | "globe"
  sidebarLocations: [
    { label: "GitHub", href: "https://github.com/janedoe", icon: "github" as const },
    { label: "LinkedIn", href: "https://linkedin.com/in/janedoe", icon: "person" as const },
    { label: "Portfolio", href: "/", icon: "globe" as const },
  ],

  // -- Portfolio Projects --
  // Shown in the Finder window. Each project has a category, icon, and link.
  // action: "external" opens in the Safari window preview, "navigate" goes to a route.
  projects: [
    {
      name: "Project Alpha",
      description: "A modern web application built with React",
      category: "web",
      icon: "🚀",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "Project Beta",
      description: "Full-stack SaaS platform",
      category: "web",
      icon: "💻",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "Project Gamma",
      description: "Real-time collaboration tool",
      category: "web",
      icon: "🌐",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "Mobile App One",
      description: "iOS fitness tracking application",
      category: "mobile",
      icon: "📱",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "Mobile App Two",
      description: "Cross-platform messaging app",
      category: "mobile",
      icon: "💬",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "Browser Extension",
      description: "Productivity browser extension",
      category: "extensions",
      icon: "🧩",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "Code Helper",
      description: "VS Code extension for developers",
      category: "extensions",
      icon: "🔧",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "CLI Toolkit",
      description: "Command-line developer utilities",
      category: "tools",
      icon: "⚡",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "Dev Dashboard",
      description: "Developer analytics dashboard",
      category: "tools",
      icon: "📊",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "Building Better APIs",
      description: "A guide to RESTful API design",
      category: "writing",
      icon: "📝",
      action: "external" as const,
      target: "https://example.com",
    },
    {
      name: "State of Frontend 2025",
      description: "Industry trends and predictions",
      category: "writing",
      icon: "📈",
      action: "external" as const,
      target: "https://example.com",
    },
  ],

  // -- Blog Articles (shown in the Safari window) --
  articles: [
    {
      slug: "building-better-apis",
      title: "Building Better APIs: A Practical Guide",
      meta: "Tutorial",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["API Design", "Backend", "REST"],
    },
    {
      slug: "state-of-frontend-2025",
      title: "The State of Frontend Development in 2025",
      meta: "Industry Research",
      excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Frontend", "React", "Trends"],
    },
    {
      slug: "design-system-from-scratch",
      title: "Creating a Design System from Scratch",
      meta: "Case Study",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tags: ["Design Systems", "UI/UX", "Components"],
    },
    {
      slug: "typescript-best-practices",
      title: "TypeScript Best Practices for Large Projects",
      meta: "Best Practices",
      excerpt:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: ["TypeScript", "Architecture", "DX"],
    },
  ],

  // -- Terminal Content --
  // Controls what appears in the Terminal window animation.
  terminal: {
    hostname: "janedoe",
    greeting: "Last login: Mon Jan 1 00:00:00 on ttys001",
    name: "Jane Doe",
    tagline: "Developer \u00B7 Designer \u00B7 Creator",
    aboutLines: [
      "I build products that solve real problems.",
      "From web apps to mobile apps to developer tools.",
    ],
  },
}

// -- Derived types (no need to edit) --
export type CategoryId = "all" | (typeof config.categories)[number]["id"]
export type SidebarIconType = (typeof config.categories)[number]["icon"]
export type LocationIconType = (typeof config.sidebarLocations)[number]["icon"]
