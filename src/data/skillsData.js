export const skillsData = {
  backend: {
    category: "Backend & Enterprise Engineering",
    description: "Building high-throughput, resilient server architectures with strict Clean Architecture, CQRS, and Domain-Driven Design principles.",
    skills: [
      { name: "C# & .NET 10", level: 95, highlight: "Primary language for scalable enterprise backends and Clean Architecture implementations." },
      { name: "ASP.NET Core Web API", level: 95, highlight: "Robust REST APIs, dependency injection, middleware pipelines, JWT auth, and OpenAPI/Swagger." },
      { name: "Entity Framework Core", level: 90, highlight: "LINQ optimizations, complex migrations, shadow properties, and repository patterns." },
      { name: "Clean Architecture & CQRS", level: 92, highlight: "MediatR, domain events, decoupled application layers, and Unit of Work orchestration." },
      { name: "Blazor (Server & WASM)", level: 88, highlight: "Full-stack C# interactive web applications with client-side WebAssembly execution." },
      { name: "Node.js & Express", level: 85, highlight: "Event-driven asynchronous microservices and API gateways." }
    ]
  },
  devops: {
    category: "DevOps, Containers & Cloud",
    description: "Automating reliable deployments, container orchestration, and multi-stage container optimization for enterprise workloads.",
    skills: [
      { name: "Docker & Containerization", level: 92, highlight: "Multi-stage Dockerfiles, image size reduction, volume persistence, and secure non-root containers." },
      { name: "Docker Compose", level: 90, highlight: "Multi-service orchestration connecting API services, databases, Redis caches, and reverse proxies." },
      { name: "CI / CD Pipelines", level: 85, highlight: "GitHub Actions workflows for automated linting, unit test execution, and deployment pipelines." },
      { name: "Linux & Bash Scripting", level: 88, highlight: "Server provisioning, process management (systemd, PM2), shell scripting, and security hardening." },
      { name: "Nginx & Reverse Proxies", level: 84, highlight: "SSL termination, load balancing, rate limiting, and header security policies." },
      { name: "Cloud Deployment", level: 86, highlight: "Container deployments across Vercel, VPS, AWS/Azure ready configurations." }
    ]
  },
  frontend: {
    category: "Frontend & Modern Client UI",
    description: "Designing hyper-responsive, animative, and accessible user interfaces with pixel-perfect modern web standards.",
    skills: [
      { name: "React.js", level: 94, highlight: "Advanced hooks, state management, custom animation orchestrations, and component architecture." },
      { name: "TypeScript", level: 88, highlight: "Strict type safety, generic interfaces, and enterprise frontend architecture." },
      { name: "Tailwind CSS", level: 96, highlight: "Bespoke design systems, custom utilities, glassmorphism, and dynamic animations." },
      { name: "Framer Motion", level: 90, highlight: "Physics-based scroll animations, layout transitions, and interactive gestural UI." },
      { name: "Electron.js", level: 82, highlight: "Cross-platform desktop applications interfacing native OS capabilities." },
      { name: "Next.js", level: 85, highlight: "Server-side rendering, static site generation, and optimized web apps." }
    ]
  },
  database: {
    category: "Data Stores & System Design",
    description: "Designing normalized schemas, relational database tuning, and transactional data integrity.",
    skills: [
      { name: "PostgreSQL & SQL Server", level: 90, highlight: "Relational indexing, transactions, complex joins, and stored procedures." },
      { name: "SQLite", level: 92, highlight: "Embedded zero-config database storage for desktop and micro-tier applications." },
      { name: "MongoDB", level: 85, highlight: "Document modeling, aggregation pipelines, and schema validation." },
      { name: "Role-Based Access Control (RBAC)", level: 94, highlight: "Granular permissions, claim policies, and enterprise multi-tenant isolation." }
    ]
  }
};

export const architectureConcepts = [
  {
    title: "Clean / Onion Architecture",
    description: "Domain entities at the core with zero dependencies on frameworks, surrounded by Application CQRS handlers and Infrastructure abstractions.",
    icon: "layers"
  },
  {
    title: "Multi-Stage Docker Pipelines",
    description: "Optimized Docker build stages separating SDK compiler environments from minimal runtime alpine images for sub-100MB production containers.",
    icon: "docker"
  },
  {
    title: "CQRS & MediatR Pattern",
    description: "Clean separation of Read queries from Write commands, maximizing testability, audit logging, and performance.",
    icon: "cpu"
  },
  {
    title: "Multi-Role RBAC & Claim Security",
    description: "Enterprise security architecture verifying roles and granular permission claims across REST endpoints and UI components.",
    icon: "shield"
  }
];
