export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  impactMetrics?: string[];
  keyFeatures: string[];
  techStack: string[];
  architectureNotes?: string;
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface SkillItem {
  name: string;
  tier: "primary" | "working" | "tool";
  usedInProjects?: string[];
  context?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface TechImpactMapping {
  technology: string;
  category: string;
  tier: "Primary Core" | "Working Knowledge" | "Tooling";
  shippedIn: string;
  concreteImplementation: string;
}

export const PERSONAL_INFO = {
  name: "SANDEEP KUMAR",
  displayName: "Sandeep Kumar",
  title: "Full Stack Developer (MERN Stack)",
  subtitle: "Backend-leaning Full Stack Developer with 3+ years of experience taking SaaS & e-commerce platforms from prototype to production",
  location: "Una, Himachal Pradesh, India",
  phone: "+91 7018614030",
  email: "skheergr8@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandeep-mern",
  linkedinHandle: "linkedin.com/in/sandeep-mern",
  github: "https://github.com/mrDark1802",
  githubHandle: "github.com/mrDark1802",
  resumeUrl: "/Sandeep_Kumar_Resume.pdf",
  availability: "Immediately Available",
  yearsOfExperience: "3+ Years",
  shippedProducts: "6+ Production Platforms",
  summary: "Backend-leaning Full Stack Developer with 3+ years of experience taking SaaS and e-commerce platforms from prototype to production — REST APIs, PostgreSQL/MongoDB schema design, and secure payment infrastructure built to handle real transaction volume. Built the Stripe billing engine powering a SaaS platform's subscription revenue and the multi-role auth plus real-time chat system running a live multi-vendor marketplace. Owns features end-to-end, from schema design through deployment, across six shipped client products."
};

export const CORE_COMPETENCIES = [
  {
    title: "REST APIs & System Design",
    description: "Designing scalable Express.js / Node.js backends with clean MVC layers, JWT-based RBAC, rate-limiting, and resilient database queries.",
    icon: "server"
  },
  {
    title: "Stripe Payment Infrastructure",
    description: "End-to-end Stripe billing integration powering SaaS recurring subscriptions, one-time checkout flows, webhook handling, and invoice management.",
    icon: "credit-card"
  },
  {
    title: "PostgreSQL & MongoDB Architecture",
    description: "Designing and optimizing relational and NoSQL schemas, query execution plans, indexing, and automated data synchronization via cron jobs.",
    icon: "database"
  },
  {
    title: "Real-Time Chat & Modern Frontend",
    description: "Building responsive, state-driven interfaces in React.js paired with bi-directional Socket.io WebSocket channels for live collaboration.",
    icon: "zap"
  }
];

export const TECHNICAL_SNAPSHOT = [
  {
    domain: "Backend Engineering",
    primary: "Node.js · Express.js · REST APIs",
    supporting: "Socket.io · MVC Architecture · JWT Auth",
    focus: "Scalable API design, idempotent webhooks & rate limiting"
  },
  {
    domain: "Databases & Storage",
    primary: "PostgreSQL · MongoDB",
    supporting: "MySQL · Firebase Realtime DB · AWS S3",
    focus: "Schema normalization, indexing, connection pooling & migrations"
  },
  {
    domain: "Frontend Engineering",
    primary: "React.js · Tailwind CSS · JavaScript (ES6+)",
    supporting: "Redux · TypeScript · HTML5 / CSS3",
    focus: "Component architecture, state management & responsive UI"
  },
  {
    domain: "Integrations & Tools",
    primary: "Stripe API · Cron Jobs · Git / GitHub",
    supporting: "Postman · Shopify API · Chrome Extensions · Electron",
    focus: "Recurring billing infrastructure, data sync & dev workflows"
  }
];

export const TECH_IMPACT_MAPPINGS: TechImpactMapping[] = [
  {
    technology: "Stripe API & Webhooks",
    category: "Payment Infrastructure",
    tier: "Primary Core",
    shippedIn: "NoblAi SaaS",
    concreteImplementation: "Engineered subscription lifecycle, plan management, one-time checkouts, and idempotent webhook listeners."
  },
  {
    technology: "Socket.io (WebSockets)",
    category: "Real-Time Systems",
    tier: "Primary Core",
    shippedIn: "Online Marketplace & FriendZone",
    concreteImplementation: "Built live vendor-customer chat rooms, unread status indicators, and real-time message translation."
  },
  {
    technology: "PostgreSQL",
    category: "Relational Data",
    tier: "Primary Core",
    shippedIn: "Extreme Performance & NoblAi",
    concreteImplementation: "Designed multi-table schemas with indexes on filterable catalog attributes and user account ledgers."
  },
  {
    technology: "Node.js & Express.js",
    category: "API Architecture",
    tier: "Primary Core",
    shippedIn: "6+ Shipped Client Products",
    concreteImplementation: "Built modular REST API services, centralized error handlers, JWT authentication, and RBAC middleware."
  },
  {
    technology: "MongoDB",
    category: "Document Store",
    tier: "Primary Core",
    shippedIn: "Online Marketplace",
    concreteImplementation: "Optimized collection indexing for high-volume chat messages and segregated multi-role user documents."
  },
  {
    technology: "React.js & Tailwind CSS",
    category: "Frontend UI",
    tier: "Primary Core",
    shippedIn: "All Production Dashboards",
    concreteImplementation: "Created custom administrative interfaces, responsive dashboards, and interactive filter controls."
  },
  {
    technology: "Chrome Extension APIs",
    category: "Browser Automation",
    tier: "Working Knowledge",
    shippedIn: "Triptop Travel Extension",
    concreteImplementation: "Developed Manifest V3 content scripts with lazy DOM parsing and multi-destination query automation."
  },
  {
    technology: "Cron Jobs & Schedulers",
    category: "System Automation",
    tier: "Primary Core",
    shippedIn: "The Brihaspati Infotech",
    concreteImplementation: "Automated recurring synchronization pipelines between internal databases and third-party APIs."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Backend Engineering",
    description: "Core server-side architectures, RESTful API design, and WebSocket infrastructure.",
    skills: [
      { name: "Node.js", tier: "primary", context: "Primary runtime for 6+ production platforms" },
      { name: "Express.js", tier: "primary", context: "Modular routing, middleware, controllers" },
      { name: "REST API Design", tier: "primary", context: "Pagination, filtering, error handling & status codes" },
      { name: "Socket.io", tier: "primary", context: "Bi-directional real-time chat & room management" },
      { name: "JWT Authentication", tier: "primary", context: "Token-based security & role-based access control (RBAC)" },
      { name: "MVC Architecture", tier: "primary", context: "Clean separation of models, controllers & services" },
      { name: "PHP", tier: "working", context: "Core PHP industrial training & legacy backend work" },
      { name: "WordPress", tier: "working", context: "Custom backend hooks & CMS management" }
    ]
  },
  {
    category: "Database & Storage Systems",
    description: "Relational database design, document stores, indexing, and cloud object storage.",
    skills: [
      { name: "PostgreSQL", tier: "primary", context: "Relational schemas, foreign keys & indexed query tuning" },
      { name: "MongoDB", tier: "primary", context: "Document aggregation, collections & chat storage" },
      { name: "MySQL", tier: "working", context: "Relational queries, joins & schema normalization" },
      { name: "Firebase Realtime DB", tier: "working", context: "Real-time sync & data migration for BetterEarth" },
      { name: "AWS S3 / Cloud Storage", tier: "tool", context: "Secure cloud bucket media storage & uploads" }
    ]
  },
  {
    category: "Frontend Engineering",
    description: "Component architecture, state management, responsive styling, and fast interactivity.",
    skills: [
      { name: "React.js", tier: "primary", context: "Functional components, custom hooks & dashboard UIs" },
      { name: "JavaScript (ES6+)", tier: "primary", context: "Async/await, closures, prototypes, DOM APIs" },
      { name: "Tailwind CSS", tier: "primary", context: "Utility-first responsive layouts & design systems" },
      { name: "Redux", tier: "working", context: "Global state management for complex UI workflows" },
      { name: "TypeScript", tier: "working", context: "Type safety, interfaces & structured contracts" },
      { name: "HTML5 & CSS3", tier: "primary", context: "Semantic web markup, flexbox & grid systems" },
      { name: "Bootstrap / jQuery / Ajax", tier: "working", context: "Traditional web UI frameworks & asynchronous calls" }
    ]
  },
  {
    category: "Integrations & Specialized Platforms",
    description: "Payment gateways, e-commerce ecosystems, browser extensions, and desktop runtimes.",
    skills: [
      { name: "Stripe API", tier: "primary", context: "Full recurring subscription & checkout engine" },
      { name: "Cron Jobs / Task Scheduling", tier: "primary", context: "Automated third-party API data synchronization" },
      { name: "Shopify API", tier: "working", context: "E-commerce store integrations & webhooks" },
      { name: "Chrome Extension APIs", tier: "working", context: "Manifest V3, background workers & content scripts" },
      { name: "Electron.js", tier: "working", context: "Cross-platform desktop application development" }
    ]
  },
  {
    category: "Development Tools & Environment",
    description: "Version control, API testing, debugging, and development workflow.",
    skills: [
      { name: "Git", tier: "tool", context: "Branching, rebasing, code reviews & team workflows" },
      { name: "GitHub", tier: "tool", context: "Repository management & CI/CD deployment hooks" },
      { name: "Postman", tier: "tool", context: "REST API testing, environment variables & documentation" },
      { name: "Linux / Bash", tier: "tool", context: "Terminal scripting & server administration" },
      { name: "Vite / npm", tier: "tool", context: "Frontend build tooling & package management" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "The Brihaspati Infotech Pvt. Ltd.",
    location: "Mohali, Punjab, India",
    role: "Full Stack Developer (MERN Stack)",
    period: "Dec 2022 – Jun 2026",
    duration: "3.5+ Years",
    summary: "Led full-stack architecture and feature delivery across six shipped client products, specializing in REST APIs, Stripe payment infrastructure, role-based authorization, and real-time Socket.io communication.",
    responsibilities: [
      "Designed REST APIs and admin dashboards supporting large, multi-field-searchable product catalogs for e-commerce clients, replacing manual product lookups with fast, filtered search for internal ops teams.",
      "Built Stripe billing infrastructure from the ground up for a SaaS subscription platform — subscriptions, one-time payments, plan management — making it the platform's sole system for recurring revenue collection.",
      "Owned the security and communication layer for a multi-vendor marketplace: role-based auth (admin/vendor/customer) plus Socket.io live chat, removing the need for buyers and sellers to communicate off-platform.",
      "Shipped automation, multi-destination search, and lazy-loading features for a Chrome extension, improving page load efficiency and cutting manual steps in multi-destination travel search.",
      "Redesigned MongoDB and PostgreSQL schemas to support new product features, improving query performance and removing redundant data storage.",
      "Automated data synchronization between internal systems and third-party APIs via scheduled cron jobs, eliminating manual data-update work for the team."
    ],
    technologies: [
      "Node.js", "Express.js", "React.js", "PostgreSQL", "MongoDB",
      "Stripe API", "Socket.io", "JWT Authentication", "REST API Design",
      "AWS S3", "Cron Jobs / Task Scheduling", "Chrome Extension APIs"
    ],
    achievements: [
      "Built the Stripe billing engine from scratch powering 100% of SaaS recurring subscription revenue.",
      "Owned multi-role auth (admin/vendor/customer) and Socket.io live chat layer for live marketplace.",
      "Optimized query performance and eliminated redundant data across MongoDB & PostgreSQL schemas."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "noblai",
    title: "NoblAi: SaaS Subscription Management Panel",
    category: "SaaS & Payments",
    tagline: "Designed and integrated the full Stripe billing flow for recurring plans and one-time payments",
    overview: "Built the comprehensive Stripe billing infrastructure from the ground up for a SaaS platform — handling recurring subscriptions, one-time payments, plan management, and making it the platform's sole system for recurring revenue collection.",
    impactMetrics: [
      "Sole Recurring Revenue Engine",
      "Full Webhook Lifecycle Sync",
      "Automated Plan & Invoice Management"
    ],
    keyFeatures: [
      "Full Stripe billing integration with webhook listener for recurring plans, renewals, upgrades, and cancellations.",
      "Customer subscription management dashboard for invoice downloads and plan tiers.",
      "Secure backend tokenization and API key / license provisioning upon payment confirmation.",
      "Admin configuration controls for custom pricing models, discount coupons, and refund triggers."
    ],
    techStack: ["Node.js", "Express.js", "React.js", "Stripe API", "PostgreSQL", "JWT Authentication", "Tailwind CSS"],
    architectureNotes: "Engineered idempotent webhook processing with transaction isolation to prevent dropped subscription events or double billing.",
    featured: true
  },
  {
    id: "online-marketplace",
    title: "Online Marketplace: Multi-Role Dashboards & Real-Time Chat",
    category: "Marketplace & Real-Time",
    tagline: "Multi-role dashboards (admin/vendor/customer) with real-time chat via Socket.io",
    overview: "Engineered the permission-scoped multi-role architecture and live communication system for a multi-vendor marketplace, built to give each user type a distinct, secure experience without needing off-platform communication.",
    impactMetrics: [
      "Role-Based Auth (Admin / Vendor / Customer)",
      "Real-Time Socket.io Live Messaging",
      "Unified On-Platform Communication"
    ],
    keyFeatures: [
      "Real-time buyer-seller instant messaging layer powered by Socket.io with unread indicators and chat history.",
      "Granular role-based access control (RBAC) securing distinct admin, vendor, and customer dashboards.",
      "Vendor order management, inventory updates, and dispatch tracking views.",
      "Admin platform oversight, dispute moderation, and vendor verification workflows."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "JWT Authentication", "REST APIs"],
    architectureNotes: "Partitioned WebSocket communication into private conversation rooms with indexed MongoDB cursor querying for sub-100ms message delivery.",
    featured: true
  },
  {
    id: "friendzone",
    title: "FriendZone: Real-Time Social Platform",
    category: "Social & WebSockets",
    tagline: "Real-time social platform with Socket.io chat, message translation, and authentication",
    overview: "A full-featured real-time social application featuring instant direct and group messaging via Socket.io, integrated automated message translation for cross-language chat, JWT authentication, and media storage backed by AWS S3 / Cloudflare R2.",
    impactMetrics: [
      "Sub-Second Live Messaging",
      "Cross-Language Message Translation",
      "Cloud Object Storage Integration"
    ],
    keyFeatures: [
      "Bi-directional real-time chat with typing states and live presence tracking.",
      "Integrated translation layer enabling real-time multi-language communication.",
      "Direct secure media and attachment uploads to cloud object storage.",
      "Relational data model with PostgreSQL connection pooling."
    ],
    techStack: ["React.js", "Node.js", "PostgreSQL", "Socket.io", "AWS S3", "JWT Authentication", "Tailwind CSS"],
    featured: true
  },
  {
    id: "extreme-performance",
    title: "Extreme Performance: REST APIs & Admin Panel",
    category: "E-Commerce Infrastructure",
    tagline: "REST APIs and admin panel on Node.js + PostgreSQL for e-commerce catalog and order management at scale",
    overview: "Designed and implemented high-throughput REST APIs and an administrative operations dashboard supporting large, multi-field-searchable product catalogs, replacing manual product lookups with fast, filtered search for internal ops teams.",
    impactMetrics: [
      "Fast Multi-Field Filtered Search",
      "High-Volume Catalog & Order Tracking",
      "Internal Ops Productivity Boost"
    ],
    keyFeatures: [
      "Multi-criteria product search with optimized PostgreSQL query indexing across thousands of SKUs.",
      "Comprehensive operations dashboard for order management and inventory updates.",
      "Integration with checkout systems and payment APIs."
    ],
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "REST API Design", "Tailwind CSS"],
    featured: false
  },
  {
    id: "triptop",
    title: "Triptop: Travel Chrome Extension",
    category: "Browser Extension",
    tagline: "Chrome extension with workflow automation, multi-destination search, and lazy-loading for travel use cases",
    overview: "Shipped workflow automation, multi-destination search capabilities, and lazy-loading features for a specialized travel Chrome extension, improving page load efficiency and cutting manual lookup steps.",
    impactMetrics: [
      "Automated Multi-Destination Lookups",
      "Lazy-Loading DOM Extraction",
      "Faster Search Workflows"
    ],
    keyFeatures: [
      "Automated multi-destination search parameter dispatch into booking engines.",
      "Optimized content script injection with lazy DOM extraction to reduce memory footprint.",
      "Background worker state synchronization using Chrome Extension APIs."
    ],
    techStack: ["JavaScript (ES6+)", "Chrome Extension APIs", "HTML5", "CSS3", "DOM Automation"],
    featured: false
  },
  {
    id: "renner-otto",
    title: "Renner Otto: Legal Case & Attorney Management",
    category: "Desktop Application",
    tagline: "Electron-based desktop application for legal case and attorney management",
    overview: "Built a cross-platform desktop application using Electron.js to manage legal case portfolios, court deadline calendars, attorney assignments, and client records with local data persistence.",
    impactMetrics: [
      "Cross-Platform Desktop Deployment",
      "Local Case & Record Indexing",
      "Attorney Assignment Dashboard"
    ],
    keyFeatures: [
      "Native desktop client packaging with Electron.js.",
      "Docket milestone calendar and task distribution system.",
      "Searchable case registry with filterable case status logs."
    ],
    techStack: ["Electron.js", "JavaScript (ES6+)", "Node.js", "HTML5", "CSS3"],
    featured: false
  },
  {
    id: "betterearth",
    title: "BetterEarth: UI Redesign & Firebase Migration",
    category: "Modernization & Data Migration",
    tagline: "UI redesign, admin panel rebuild, and Firebase data migration for an existing production product",
    overview: "Executed a complete user interface overhaul and administrative panel rebuild alongside a zero-downtime data migration to Firebase Realtime Database for an active production product.",
    impactMetrics: [
      "Zero-Downtime Data Migration",
      "Modernized Admin Panel Rebuild",
      "Real-Time Database Sync"
    ],
    keyFeatures: [
      "Full frontend interface redesign for improved operational speed.",
      "Admin panel overhaul for managing records, user submissions, and real-time updates.",
      "Data transformation pipeline migrating legacy schemas into Firebase Realtime Database."
    ],
    techStack: ["React.js", "Firebase Realtime Database", "JavaScript (ES6+)", "Tailwind CSS"],
    featured: false
  }
];

export const EDUCATION = [
  {
    institution: "Himachal Pradesh Open School",
    degree: "10+2 (Non-Medical)",
    period: "2018 – 2019",
    description: "Higher secondary education in Physics, Chemistry, and Mathematics."
  },
  {
    institution: "Excellence Technology, Mohali",
    degree: "Industrial Training — Core PHP, HTML & JavaScript",
    period: "6 Months",
    description: "Hands-on industrial software training focusing on core PHP backend programming, database design, and web development fundamentals."
  }
];

export const SPOKEN_LANGUAGES = ["English", "Hindi", "Punjabi"];
