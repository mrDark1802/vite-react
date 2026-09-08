export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  impactOutcomes: string[];
  keyFeatures: string[];
  techStack: string[];
  architectureNotes: string;
  technicalFlow: {
    from: string;
    action: string;
    to: string;
  }[];
  featured: boolean;
}

export interface TimelineMilestone {
  year: string;
  period: string;
  role: string;
  company: string;
  headline: string;
  narrative: string;
  technologies: string[];
  keyMilestones: string[];
}

export interface TechStackCategory {
  name: string;
  description: string;
  skills: { name: string; level: string; note: string; highlight?: boolean }[];
}

export interface EducationCredential {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface PillarItem {
  title: string;
  description: string;
  tag: string;
}

export interface BuildStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  deliverable: string;
}

export interface ImpactStatement {
  area: string;
  product: string;
  headline: string;
  narrative: string;
  tech: string;
  metric?: string;
  label?: string;
  detail?: string;
  system?: string;
}

export const PERSONAL_INFO = {
  name: "SANDEEP KUMAR",
  displayName: "Sandeep Kumar",
  title: "Full Stack Developer (MERN Stack)",
  label: "MERN STACK • BACKEND-LEANING • PRODUCTION SYSTEMS",
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
  shippedProducts: "6+ Shipped Client Products",
  statement: "I build software that has to work.",
  professionalSummary:
    "Backend-leaning Full Stack Developer with 3+ years of experience taking SaaS and e-commerce platforms from prototype to production — REST APIs, PostgreSQL/MongoDB schema design, and secure payment infrastructure built to handle real transaction volume. Built the Stripe billing engine powering a SaaS platform's subscription revenue and the multi-role auth plus real-time chat system running a live multi-vendor marketplace. Owns features end-to-end, from schema design through deployment, across six shipped client products."
};

export const CORE_ENGINEERING_PILLARS: PillarItem[] = [
  {
    title: "SaaS & Payment Infrastructure",
    description: "Built Stripe billing infrastructure from the ground up for a SaaS platform — subscriptions, one-time payments, plan management.",
    tag: "Stripe API • Subscriptions • Billing"
  },
  {
    title: "Real-Time Systems & WebSockets",
    description: "Owned security and communication layer with role-based auth and Socket.io live chat for marketplaces and social platforms.",
    tag: "Socket.io • Live Chat • Multi-Role"
  },
  {
    title: "REST APIs & Backend Architecture",
    description: "Designed REST APIs and admin dashboards supporting large, multi-field-searchable product catalogs for e-commerce clients.",
    tag: "Node.js • Express.js • REST APIs"
  },
  {
    title: "Relational & Document Databases",
    description: "Redesigned MongoDB and PostgreSQL schemas to support new product features, improving query performance and eliminating redundant data.",
    tag: "PostgreSQL • MongoDB • Schemas"
  }
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    name: "Backend",
    description: "Core backend architectures, API endpoints, and MVC separation.",
    skills: [
      { name: "Node.js", level: "Core", note: "Primary backend runtime", highlight: true },
      { name: "Express.js", level: "Core", note: "REST endpoints and middleware", highlight: true },
      { name: "REST API Design", level: "Core", note: "Multi-field search and CRUD", highlight: true },
      { name: "Socket.io", level: "Core", note: "Real-time chat and rooms", highlight: true },
      { name: "MVC Architecture", level: "Core", note: "Controller and model separation", highlight: true },
      { name: "WordPress", level: "Working", note: "CMS integrations and hooks" }
    ]
  },
  {
    name: "Databases",
    description: "Relational and document databases, schema redesigns, and migrations.",
    skills: [
      { name: "PostgreSQL", level: "Core", note: "Relational schema and multi-field queries", highlight: true },
      { name: "MongoDB", level: "Core", note: "Document store and chat logs", highlight: true },
      { name: "MySQL", level: "Working", note: "Relational database structure" },
      { name: "Firebase Realtime Database", level: "Working", note: "Production data migration", highlight: true }
    ]
  },
  {
    name: "Frontend",
    description: "Modern component interfaces, responsive styling, and client state.",
    skills: [
      { name: "React.js", level: "Core", note: "Dashboards and admin panels", highlight: true },
      { name: "Redux", level: "Working", note: "Centralized application state" },
      { name: "Tailwind CSS", level: "Core", note: "Utility styling and responsive design", highlight: true },
      { name: "Bootstrap", level: "Working", note: "Responsive grid layout" },
      { name: "jQuery / Ajax", level: "Working", note: "Asynchronous client requests" }
    ]
  },
  {
    name: "Integrations & Tools",
    description: "Payment gateways, browser extensions, desktop apps, and schedulers.",
    skills: [
      { name: "Stripe API", level: "Core", note: "Recurring billing and checkouts", highlight: true },
      { name: "Shopify API", level: "Working", note: "E-commerce platform APIs" },
      { name: "JWT Authentication", level: "Core", note: "Role-based auth (admin/vendor/customer)", highlight: true },
      { name: "Electron.js", level: "Working", note: "Desktop application development" },
      { name: "Chrome Extension APIs", level: "Working", note: "Automation and lazy-loading", highlight: true },
      { name: "Cron Jobs / Task Scheduling", level: "Core", note: "Third-party API data synchronization", highlight: true },
      { name: "AWS S3", level: "Core", note: "Cloud object media storage" },
      { name: "Git & GitHub", level: "Core", note: "Version control and collaboration" },
      { name: "Postman", level: "Core", note: "API testing and validation" }
    ]
  }
];

export const EDUCATION_CREDENTIALS: EducationCredential[] = [
  {
    degree: "10+2 (Non-Medical)",
    institution: "Himachal Pradesh Open School",
    period: "2018 – 2019",
    details: "Higher secondary education in Non-Medical stream."
  },
  {
    degree: "Core PHP, HTML & JavaScript",
    institution: "Industrial Training, Excellence Technology, Mohali",
    period: "6 Months",
    details: "Hands-on industrial software training in Core PHP, HTML, and JavaScript."
  }
];

export const HOW_I_BUILD_STAGES: BuildStage[] = [
  {
    step: "01",
    title: "REQUIREMENTS & SCOPE",
    subtitle: "Understanding User Types & Core Workflows",
    description: "Analyze the business requirements, distinct user roles (admin, vendor, customer), and transaction lifecycles before writing code.",
    technologies: ["Requirements Analysis", "Role Definitions", "Workflow Mapping"],
    deliverable: "Architecture & Security Scope"
  },
  {
    step: "02",
    title: "BACKEND & API DESIGN",
    subtitle: "REST API Endpoints & Role-Based Auth",
    description: "Design modular REST APIs following MVC architecture with JWT role-based authentication and secure controller logic.",
    technologies: ["Node.js", "Express.js", "REST API Design", "JWT Auth"],
    deliverable: "Secure Controller Layer"
  },
  {
    step: "03",
    title: "DATABASE ARCHITECTURE",
    subtitle: "PostgreSQL & MongoDB Schema Design",
    description: "Design relational models and document schemas, optimize query paths for high-frequency filters, and eliminate data redundancy.",
    technologies: ["PostgreSQL", "MongoDB", "Schema Redesign", "Data Modeling"],
    deliverable: "High-Performance Data Layer"
  },
  {
    step: "04",
    title: "REAL-TIME & INTEGRATIONS",
    subtitle: "Stripe Billing, Socket.io & Schedulers",
    description: "Integrate Stripe billing for recurring revenue, deploy Socket.io for live communication, and schedule cron jobs for data sync.",
    technologies: ["Stripe API", "Socket.io", "Cron Jobs", "AWS S3"],
    deliverable: "Live Billing & Messaging System"
  },
  {
    step: "05",
    title: "PRODUCTION DEPLOYMENT",
    subtitle: "Frontend Delivery & Verification",
    description: "Ship responsive React dashboards and admin panels, verify endpoint security, and deliver stable features to production.",
    technologies: ["React.js", "Tailwind CSS", "Git / GitHub", "Postman"],
    deliverable: "Production Shipped Platform"
  }
];

export const PRODUCTION_IMPACT_STATEMENTS: ImpactStatement[] = [
  {
    area: "PAYMENT INFRASTRUCTURE",
    product: "NoblAi",
    headline: "Built Stripe Billing Infrastructure from the Ground Up",
    narrative: "Engineered full Stripe billing flow for recurring plans, one-time payments, and plan management, making it the platform's sole system for recurring revenue collection.",
    tech: "Stripe API • Node.js • PostgreSQL",
    metric: "Sole Revenue Engine",
    label: "Stripe Billing Infrastructure",
    detail: "Built Stripe billing from the ground up for recurring plans, one-time payments, and plan management.",
    system: "NoblAi"
  },
  {
    area: "SECURITY & COMMUNICATION",
    product: "Online Marketplace",
    headline: "Owned Role-Based Auth and Socket.io Live Chat",
    narrative: "Secured multi-vendor marketplace with role-based auth (admin/vendor/customer) and built Socket.io live chat, removing the need for buyers and sellers to communicate off-platform.",
    tech: "Socket.io • JWT Auth • MongoDB",
    metric: "Role-Based Auth",
    label: "Security & Socket.io Live Chat",
    detail: "Owned security and communication layer with role-based auth (admin/vendor/customer) plus Socket.io live chat.",
    system: "Online Marketplace"
  },
  {
    area: "API & SEARCH PERFORMANCE",
    product: "Extreme Performance",
    headline: "Replaced Manual Lookups with Fast Filtered Search",
    narrative: "Designed REST APIs and admin dashboards supporting large, multi-field-searchable product catalogs for e-commerce clients, replacing manual product lookups with fast, filtered search for internal ops teams.",
    tech: "Node.js • PostgreSQL • React.js",
    metric: "Fast Filtered Search",
    label: "Catalog REST APIs & Admin Panel",
    detail: "Replaced manual product lookups with fast, filtered search for internal operations teams.",
    system: "Extreme Performance"
  },
  {
    area: "BROWSER AUTOMATION",
    product: "Triptop",
    headline: "Shipped Automation & Lazy-Loading for Travel Extension",
    narrative: "Shipped automation, multi-destination search, and lazy-loading features for a Chrome extension, improving page load efficiency and cutting manual steps in multi-destination travel search.",
    tech: "Chrome Extension APIs • JavaScript",
    metric: "Lazy-Loading Search",
    label: "Chrome Extension Automation",
    detail: "Shipped automation, multi-destination search, and lazy-loading features for a Chrome extension.",
    system: "Triptop"
  }
];

export const CAREER_TIMELINE: TimelineMilestone[] = [
  {
    year: "2022",
    period: "Dec 2022",
    role: "Full Stack Developer (MERN Stack)",
    company: "The Brihaspati Infotech Pvt. Ltd., Mohali",
    headline: "Backend REST APIs & MVC Foundations",
    narrative:
      "Joined The Brihaspati Infotech focusing on backend API design, database schemas, and building production web applications for clients.",
    technologies: ["Node.js", "Express.js", "JavaScript (ES6+)", "REST API Design", "MVC Architecture"],
    keyMilestones: [
      "Engineered clean REST endpoints with robust controller layers and error handling.",
      "Established standard MVC architecture patterns for client web applications."
    ]
  },
  {
    year: "2023",
    period: "2023",
    role: "Full Stack Developer (MERN Stack)",
    company: "The Brihaspati Infotech Pvt. Ltd., Mohali",
    headline: "E-Commerce Catalog REST APIs & Admin Dashboards",
    narrative:
      "Designed REST APIs and admin dashboards supporting large, multi-field-searchable product catalogs for e-commerce clients, replacing manual product lookups with fast, filtered search for internal ops teams.",
    technologies: ["Node.js", "Express.js", "React.js", "PostgreSQL", "REST API Design", "Tailwind CSS"],
    keyMilestones: [
      "Designed REST APIs and admin dashboards supporting large, multi-field-searchable product catalogs.",
      "Replaced manual product lookups with fast, filtered search for internal operations teams.",
      "Managed catalog and order processing workflows at scale."
    ]
  },
  {
    year: "2024",
    period: "2024",
    role: "Full Stack Developer (MERN Stack)",
    company: "The Brihaspati Infotech Pvt. Ltd., Mohali",
    headline: "Stripe Billing Infrastructure & Multi-Role Security",
    narrative:
      "Built Stripe billing infrastructure from the ground up for a SaaS subscription platform — subscriptions, one-time payments, plan management — making it the platform's sole system for recurring revenue collection. Owned security and communication layer for a multi-vendor marketplace with role-based auth (admin/vendor/customer) and Socket.io live chat.",
    technologies: ["Stripe API", "Node.js", "Express.js", "React.js", "Socket.io", "MongoDB", "JWT Authentication"],
    keyMilestones: [
      "Built Stripe billing infrastructure from the ground up — subscriptions, one-time payments, plan management.",
      "Made Stripe the platform's sole system for recurring revenue collection.",
      "Owned security and communication layer for multi-vendor marketplace with role-based auth (admin/vendor/customer) plus Socket.io live chat."
    ]
  },
  {
    year: "2025",
    period: "2025",
    role: "Full Stack Developer (MERN Stack)",
    company: "The Brihaspati Infotech Pvt. Ltd., Mohali",
    headline: "Chrome Extension Automation & Desktop Architecture",
    narrative:
      "Shipped automation, multi-destination search, and lazy-loading features for a Chrome extension, improving page load efficiency and cutting manual steps in multi-destination travel search. Built Electron desktop app for legal case and attorney management.",
    technologies: ["Chrome Extension APIs", "Electron.js", "JavaScript (ES6+)", "HTML5", "CSS3", "AWS S3"],
    keyMilestones: [
      "Shipped automation, multi-destination search, and lazy-loading features for a Chrome extension.",
      "Improved page load efficiency and cut manual steps in multi-destination travel search.",
      "Engineered Electron-based desktop application for legal case and attorney management."
    ]
  },
  {
    year: "2026",
    period: "Through Jun 2026",
    role: "Full Stack Developer (MERN Stack)",
    company: "The Brihaspati Infotech Pvt. Ltd., Mohali",
    headline: "Database Schema Redesigns & Automated Cron Syncing",
    narrative:
      "Redesigned MongoDB and PostgreSQL schemas to support new product features, improving query performance and removing redundant data storage. Automated data synchronization between internal systems and third-party APIs via scheduled cron jobs, eliminating manual data-update work for the team.",
    technologies: ["PostgreSQL", "MongoDB", "Cron Jobs / Task Scheduling", "Node.js", "Firebase Realtime Database"],
    keyMilestones: [
      "Redesigned MongoDB and PostgreSQL schemas to support new product features.",
      "Improved query performance and removed redundant data storage.",
      "Automated data synchronization between internal systems and third-party APIs via scheduled cron jobs, eliminating manual data-update work."
    ]
  }
];

export const CINEMATIC_PROJECTS: Project[] = [
  {
    id: "noblai",
    title: "NoblAi",
    category: "SAAS SUBSCRIPTION MANAGEMENT",
    tagline: "SaaS subscription management panel — designed and integrated the full Stripe billing flow for recurring plans and one-time payments",
    overview:
      "Built the Stripe billing infrastructure from the ground up for a SaaS subscription platform — handling subscriptions, one-time payments, and plan management, making it the platform's sole system for recurring revenue collection.",
    impactOutcomes: [
      "Sole system for recurring revenue collection",
      "Full Stripe billing flow for recurring plans and one-time payments",
      "End-to-end plan management and subscription lifecycle"
    ],
    keyFeatures: [
      "Designed and integrated full Stripe billing flow for recurring subscription plans.",
      "Implemented checkout workflows for one-time payments.",
      "Engineered comprehensive plan management (upgrades, cancellations, renewals).",
      "Connected frontend dashboard with secure backend Stripe API endpoints."
    ],
    techStack: ["Node.js", "Express.js", "React.js", "Stripe API", "PostgreSQL", "JWT Authentication", "Tailwind CSS"],
    architectureNotes:
      "Built the Stripe billing infrastructure from the ground up, making it the platform's sole system for recurring revenue collection.",
    technicalFlow: [
      { from: "React Dashboard", action: "Selects Subscription Tier", to: "Express Controller" },
      { from: "Express Controller", action: "Creates Checkout Session", to: "Stripe API" },
      { from: "Stripe Webhook", action: "Emits Payment Event", to: "Node.js Listener" },
      { from: "Node.js Listener", action: "Updates Plan & Subscription State", to: "PostgreSQL Database" }
    ],
    featured: true
  },
  {
    id: "online-marketplace",
    title: "Online Marketplace",
    category: "MULTI-ROLE DASHBOARDS & REAL-TIME CHAT",
    tagline: "Multi-role dashboards (admin/vendor/customer) with real-time chat via Socket.io, built to give each user type a distinct, permission-scoped experience",
    overview:
      "Owned the security and communication layer for a multi-vendor marketplace: role-based auth (admin/vendor/customer) plus Socket.io live chat, removing the need for buyers and sellers to communicate off-platform.",
    impactOutcomes: [
      "Distinct, permission-scoped experience for admin, vendor, and customer",
      "Real-time chat via Socket.io removing need for off-platform communication",
      "Full security and role-based authentication (admin/vendor/customer)"
    ],
    keyFeatures: [
      "Multi-role dashboards for Admin, Vendor, and Customer with scoped permissions.",
      "Real-time messaging powered by Socket.io for direct buyer-seller communication.",
      "Role-based authentication (admin/vendor/customer) securing platform endpoints.",
      "Removed the need for buyers and sellers to communicate off-platform."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "JWT Authentication", "REST API Design"],
    architectureNotes:
      "Owned the security and communication layer: role-based auth (admin/vendor/customer) plus Socket.io live chat.",
    technicalFlow: [
      { from: "Admin / Vendor / Customer", action: "Authenticates via JWT", to: "Role-Based Auth Middleware" },
      { from: "Buyer / Seller", action: "Initiates Conversation", to: "Socket.io Live Server" },
      { from: "Socket.io Live Server", action: "Routes Instant Messages", to: "Recipient Dashboard" },
      { from: "Node.js Backend", action: "Persists Conversation History", to: "MongoDB Database" }
    ],
    featured: true
  },
  {
    id: "friendzone",
    title: "FriendZone",
    category: "REAL-TIME SOCIAL PLATFORM",
    tagline: "Real-time social platform with Socket.io chat, message translation, and authentication",
    overview:
      "Engineered a real-time social platform featuring live chat communication powered by Socket.io, automated message translation, secure authentication, and cloud media handling.",
    impactOutcomes: [
      "Real-time social platform communication via Socket.io chat",
      "Integrated message translation for cross-language conversations",
      "Secure user authentication and session management"
    ],
    keyFeatures: [
      "Real-time social chat powered by Socket.io.",
      "Automated message translation for chat messages.",
      "Secure user authentication (JWT).",
      "Cloud media storage integration with AWS S3."
    ],
    techStack: ["React.js", "Node.js", "Socket.io", "JWT Authentication", "AWS S3", "PostgreSQL", "Tailwind CSS"],
    architectureNotes:
      "Real-time social platform with Socket.io chat, message translation, and authentication.",
    technicalFlow: [
      { from: "User Client", action: "Sends Chat Message", to: "Socket.io Server" },
      { from: "Socket.io Server", action: "Applies Message Translation", to: "Translation Service" },
      { from: "Translation Service", action: "Returns Translated Message", to: "Socket.io Server" },
      { from: "Socket.io Server", action: "Delivers Real-Time Message", to: "Chat Recipient" }
    ],
    featured: true
  },
  {
    id: "extreme-performance",
    title: "Extreme Performance",
    category: "E-COMMERCE CATALOG & ORDER MANAGEMENT",
    tagline: "REST APIs and admin panel on Node.js + PostgreSQL for e-commerce catalog and order management at scale",
    overview:
      "Designed REST APIs and admin dashboards supporting large, multi-field-searchable product catalogs for e-commerce clients, replacing manual product lookups with fast, filtered search for internal ops teams.",
    impactOutcomes: [
      "Replaced manual product lookups with fast, filtered search for internal ops teams",
      "REST APIs and admin dashboards supporting large, multi-field-searchable catalogs",
      "E-commerce catalog and order management at scale"
    ],
    keyFeatures: [
      "Designed REST APIs supporting large, multi-field-searchable product catalogs.",
      "Built admin panel on Node.js + PostgreSQL for internal operations teams.",
      "Fast, filtered search replacing slow manual product lookups.",
      "Catalog and order management workflows at scale."
    ],
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "REST API Design", "Tailwind CSS"],
    architectureNotes:
      "Designed REST APIs and admin dashboards supporting large, multi-field-searchable product catalogs, replacing manual lookups with fast, filtered search.",
    technicalFlow: [
      { from: "Internal Ops Dashboard", action: "Executes Multi-Field Search", to: "REST API Endpoint" },
      { from: "Express Controller", action: "Executes Filtered Query", to: "PostgreSQL Database" },
      { from: "PostgreSQL Database", action: "Returns Fast Filtered Results", to: "REST API Endpoint" },
      { from: "REST API Endpoint", action: "Renders Catalog & Order Details", to: "React Admin Panel" }
    ],
    featured: false
  },
  {
    id: "betterearth",
    title: "BetterEarth",
    category: "UI REDESIGN & FIREBASE DATA MIGRATION",
    tagline: "UI redesign, admin panel rebuild, and Firebase data migration for an existing production product",
    overview:
      "Executed a comprehensive UI redesign, admin panel rebuild, and production data migration to Firebase Realtime Database for an existing production product.",
    impactOutcomes: [
      "Successful Firebase data migration for an existing production product",
      "Rebuilt admin panel improving operational workflow",
      "Complete UI redesign modernizing the frontend user experience"
    ],
    keyFeatures: [
      "Complete UI redesign for an existing production product.",
      "Admin panel rebuild for managing operations and records.",
      "Firebase data migration to Firebase Realtime Database.",
      "Real-time data synchronization with Firebase."
    ],
    techStack: ["React.js", "Firebase Realtime Database", "JavaScript (ES6+)", "Tailwind CSS"],
    architectureNotes:
      "UI redesign, admin panel rebuild, and Firebase data migration for an existing production product.",
    technicalFlow: [
      { from: "Existing Production Data", action: "Extracts & Formats Records", to: "Migration Script" },
      { from: "Migration Script", action: "Loads Data to Realtime DB", to: "Firebase Realtime Database" },
      { from: "Firebase Realtime Database", action: "Real-Time Data Sync", to: "Rebuilt Admin Panel & UI" }
    ],
    featured: false
  },
  {
    id: "renner-otto",
    title: "Renner Otto",
    category: "DESKTOP APPLICATION",
    tagline: "Electron-based desktop application for legal case and attorney management",
    overview:
      "Built an Electron-based cross-platform desktop application designed specifically for legal case and attorney management.",
    impactOutcomes: [
      "Cross-platform desktop application built with Electron",
      "Centralized legal case management system",
      "Dedicated attorney workload and management views"
    ],
    keyFeatures: [
      "Electron-based desktop application packaging and deployment.",
      "Legal case tracking and status management.",
      "Attorney assignment and workflow organization.",
      "Local desktop application performance and responsiveness."
    ],
    techStack: ["Electron.js", "JavaScript (ES6+)", "Node.js", "HTML5", "CSS3"],
    architectureNotes:
      "Electron-based desktop application for legal case and attorney management.",
    technicalFlow: [
      { from: "Desktop User", action: "Manages Case / Attorney Record", to: "Electron UI" },
      { from: "Electron UI", action: "IPC Communication", to: "Node.js Desktop Runtime" },
      { from: "Node.js Desktop Runtime", action: "Manages Local State", to: "Local Case Storage" }
    ],
    featured: false
  },
  {
    id: "triptop",
    title: "Triptop",
    category: "CHROME EXTENSION & WORKFLOW AUTOMATION",
    tagline: "Chrome extension with workflow automation, multi-destination search, and lazy-loading for travel use cases",
    overview:
      "Shipped automation, multi-destination search, and lazy-loading features for a Chrome extension, improving page load efficiency and cutting manual steps in multi-destination travel search.",
    impactOutcomes: [
      "Improved page load efficiency via lazy-loading features",
      "Cut manual steps in multi-destination travel search",
      "Workflow automation specifically engineered for travel use cases"
    ],
    keyFeatures: [
      "Shipped workflow automation for travel search use cases.",
      "Multi-destination search functionality cutting manual lookup steps.",
      "Lazy-loading features improving browser page load efficiency.",
      "Utilizes Chrome Extension APIs for background execution."
    ],
    techStack: ["JavaScript (ES6+)", "Chrome Extension APIs", "HTML5", "CSS3"],
    architectureNotes:
      "Shipped automation, multi-destination search, and lazy-loading features for a Chrome extension, improving page load efficiency and cutting manual steps in multi-destination travel search.",
    technicalFlow: [
      { from: "Travel Searcher", action: "Specifies Multi-Destination Itinerary", to: "Extension Popup UI" },
      { from: "Extension Popup UI", action: "Triggers Workflow Automation", to: "Chrome Extension APIs" },
      { from: "Chrome Extension APIs", action: "Lazy-Loads Search Queries", to: "Target Travel Webpages" },
      { from: "Content Script", action: "Extracts Results With Low Overhead", to: "Search Results Display" }
    ],
    featured: false
  }
];
