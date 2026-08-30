import { socialConfig } from "./socialConfig";

export const projectsData = [
  {
    id: "taskmanager-clean-arch",
    title: "TaskManager & Enterprise Inventory Platform",
    category: "aspnet",
    featured: true,
    badge: "ASP.NET Core • Blazor • Docker",
    tagline: "High-performance enterprise task & inventory management system engineered with Clean Architecture, CQRS, and containerized deployment.",
    description: "A production-grade full-stack solution featuring a decoupled multi-tier architecture (.NET 10 Web API, Blazor WebAssembly, CQRS with MediatR, Entity Framework Core, SQLite/PostgreSQL) orchestrated in Docker containers with health checks and automated CI/CD.",
    image: "/Dashboard.jpg",
    tags: ["C#", "ASP.NET Core", "Blazor WebAssembly", "Clean Architecture", "CQRS", "EF Core", "Docker", "REST API"],
    metrics: [
      { label: "Architecture", value: "Clean / Onion" },
      { label: "Containerization", value: "Docker Multi-stage" },
      { label: "Client UI", value: "Blazor WASM" },
      { label: "Latency", value: "< 45ms P95" }
    ],
    architectureHighlights: [
      "Strict separation of concerns: Domain Core, Application (CQRS handlers), Infrastructure (EF Core repositories), and Web/Api presentation.",
      "Blazor WebAssembly client communicating with authenticated REST endpoints with token lifecycle handling.",
      "Dockerized microservice stack with multi-stage lightweight builds, isolated network bridges, and persistent volume mapping.",
      "Repository & Unit of Work patterns ensuring testability and zero database leakage into business logic."
    ],
    github: socialConfig.github,
    demo: "#",
    date: "2026"
  },
  {
    id: "dtapms-school-erp",
    title: "DiamondTech School Management ERP (SMS / DTAPMS)",
    category: "enterprise",
    featured: true,
    badge: "Enterprise ERP • Full-Stack • RBAC",
    tagline: "Comprehensive Multi-Tenant School ERP with Role-Based Access Control, automated gradebook, financial ledger, and parent portal.",
    description: "Architected and delivered an enterprise-grade school management platform used in production. Features dynamic RBAC security across Administrators, Teachers, Accountants, Parents, and Students, alongside automated fee invoicing, grade compilation, attendance tracking, and real-time report card generation.",
    image: "/school_dash_redesign.webp",
    fallbackImage: "/Mercy.jpg",
    tags: ["React", "ASP.NET Core / Node.js", "RBAC Security", "PostgreSQL", "Tailwind CSS", "Docker", "PDF Generation"],
    metrics: [
      { label: "Active Roles", value: "5 RBAC Levels" },
      { label: "Modules", value: "14 ERP Subsystems" },
      { label: "Reporting", value: "Instant PDF Export" },
      { label: "Reliability", value: "99.9% Uptime" }
    ],
    architectureHighlights: [
      "Role-Based Access Control (RBAC) middleware verifying granular route and resource claims per tenant.",
      "Dynamic grade calculation engine processing continuous assessment and exam scores into automated GPA ranks.",
      "Invoicing & student fee reconciliation system with audit-trailed transaction ledgers and receipt printing.",
      "Responsive analytics dashboard featuring attendance heatmaps, revenue charts, and demographic breakdown."
    ],
    github: socialConfig.github,
    demo: "#",
    date: "2026"
  },
  {
    id: "ehms-hospital-management",
    title: "Enterprise Healthcare Management System (EHMS)",
    category: "enterprise",
    featured: true,
    badge: "Healthcare System • Clinical Workflows",
    tagline: "Integrated clinical records, doctor scheduling, pharmacy inventory, and diagnostic triage platform.",
    description: "Engineered a robust hospital operations system built to streamline patient consultations, bed allocation, pharmaceutical stock replenishment, and multi-department billing with stringent data privacy standards.",
    image: "/dashboard_hms.jpg",
    fallbackImage: "/Client.jpg",
    tags: ["ASP.NET Core", "React", "Docker", "SQL Server", "Clean Architecture", "Medical Records", "Tailwind CSS"],
    metrics: [
      { label: "Workflow", value: "Outpatient & Inpatient" },
      { label: "Inventory", value: "Live Pharmacy Sync" },
      { label: "Security", value: "Encrypted Records" },
      { label: "Response", value: "Real-time Triage" }
    ],
    architectureHighlights: [
      "Patient lifecycle tracking from reception registration through triage, consultation, pharmacy dispatch, to final billing.",
      "Automated low-stock threshold alerting for hospital dispensaries and pharmaceutical inventories.",
      "Doctor consultation workbench with historical diagnosis timelines, lab test orders, and prescription logging."
    ],
    github: socialConfig.github,
    demo: "#",
    date: "2026"
  },
  {
    id: "expensetracker-fullstack",
    title: "ExpenseTracker Multi-Tier Financial Engine",
    category: "aspnet",
    featured: false,
    badge: "ASP.NET Core • React • Clean Arch",
    tagline: "Precision multi-account financial tracking, recurring budget forecasts, and interactive spending visualizers.",
    description: "Architected an end-to-end expense tracking suite combining an ASP.NET Core Clean Architecture backend with responsive React visualizations. Features category-wise budget caps, currency conversions, and automated anomaly alerts.",
    image: "/Dashboard.jpg",
    tags: ["C#", "ASP.NET Core", "React", "Entity Framework", "Chart.js", "Docker", "Clean Architecture"],
    metrics: [
      { label: "Architecture", value: "4-Layer Clean" },
      { label: "Visualizations", value: "Interactive Charts" },
      { label: "Budgets", value: "Multi-Currency" },
      { label: "Container", value: "Docker Ready" }
    ],
    architectureHighlights: [
      "Domain model encapsulating business budget validation rules with zero external framework couplings.",
      "RESTful API with Swagger OpenAPI documentation, request validation filters, and structured error responses.",
      "Optimized Entity Framework Core queries using projection queries for minimal memory footprint."
    ],
    github: socialConfig.github,
    demo: "#",
    date: "2026"
  },
  {
    id: "fyp-intelligence-hub",
    title: "Multi-Platform Intelligence & Analytics Hub",
    category: "desktop",
    featured: false,
    badge: "Electron • React • Python • SQLite",
    tagline: "Cross-platform desktop application pairing React UI with high-throughput local Python analytics processing.",
    description: "Developed a cross-platform desktop suite utilizing Electron, React, TypeScript, and a embedded Python analytical worker process for deep local offline data inspection, parsing, and SQLite reporting.",
    image: "/FullStack.jpg",
    tags: ["Electron", "React", "TypeScript", "Python Engine", "SQLite", "Desktop App", "Tailwind CSS"],
    metrics: [
      { label: "Runtime", value: "Cross-Platform" },
      { label: "Engine", value: "Python + Node IPC" },
      { label: "Data Store", value: "Embedded SQLite" },
      { label: "Offline", value: "100% Standalone" }
    ],
    architectureHighlights: [
      "Inter-Process Communication (IPC) bridge safely orchestrating data between Node main process and React renderer.",
      "Background worker subsystem running Python scripts for complex analytical computations.",
      "Native desktop installer packaging with automated schema migrations."
    ],
    github: socialConfig.github,
    demo: "#",
    date: "2026"
  },
  {
    id: "goldlex-auto-commerce",
    title: "Goldlex Automotive & Commerce Portal",
    category: "fullstack",
    featured: false,
    badge: "React • Node.js • E-Commerce",
    tagline: "High-conversion responsive vehicle catalog and parts procurement platform with dynamic filtering.",
    description: "Engineered a high-performance modern web storefront for vehicle and merchandise procurement with instant search filtering, high-resolution media galleries, and seamless client enquiry workflows.",
    image: "/Goldlex.jpg",
    tags: ["React", "Node.js", "Express", "Tailwind CSS", "Responsive UI", "REST API"],
    metrics: [
      { label: "Design", value: "100% Mobile Responsive" },
      { label: "Search", value: "Instant Sub-10ms Filter" },
      { label: "Media", value: "Lazy Loaded Gallery" },
      { label: "SEO", value: "Optimized Meta" }
    ],
    architectureHighlights: [
      "Client-side caching and dynamic catalog filtering across brands, models, price tiers, and condition specs.",
      "Optimized asset pipelines and responsive image formatting for instant page loads on mobile devices."
    ],
    github: socialConfig.github,
    demo: "#",
    date: "2025"
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "aspnet", label: "ASP.NET Core & C#" },
  { id: "enterprise", label: "Enterprise Systems" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "desktop", label: "Desktop & Analytics" }
];
