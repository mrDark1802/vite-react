import React, { useState } from "react";
import { FiCode, FiLayers } from "react-icons/fi";

interface TechItem {
  name: string;
  category: "LANGUAGES" | "FRONTEND" | "BACKEND" | "DATABASES" | "CLOUD & TOOLS" | "INTEGRATIONS";
  resumeRole: string;
}

const TECH_ECOSYSTEM: TechItem[] = [
  // Backend
  { name: "Node.js", category: "BACKEND", resumeRole: "Primary runtime for REST APIs, e-commerce catalog services, and Socket.io real-time chat." },
  { name: "Express.js", category: "BACKEND", resumeRole: "Modular routing, MVC architecture, role-based authorization middleware, and API endpoints." },
  { name: "REST API Design", category: "BACKEND", resumeRole: "Designed REST endpoints supporting large, multi-field-searchable product catalogs." },
  { name: "Socket.io", category: "BACKEND", resumeRole: "Bi-directional live messaging for multi-vendor marketplace and FriendZone social platform." },
  { name: "MVC Architecture", category: "BACKEND", resumeRole: "Structured clean separation between controllers, service layers, and database models." },
  { name: "WordPress", category: "BACKEND", resumeRole: "Backend CMS integrations, custom hooks, and client web development." },

  // Databases
  { name: "PostgreSQL", category: "DATABASES", resumeRole: "Relational schema design, catalog search queries, and schema redesigns for performance." },
  { name: "MongoDB", category: "DATABASES", resumeRole: "Document store for marketplace data and real-time chat; redesigned schemas to eliminate redundancy." },
  { name: "MySQL", category: "DATABASES", resumeRole: "Relational data structures, table schemas, and data management." },
  { name: "Firebase Realtime Database", category: "DATABASES", resumeRole: "Executed production data migration and real-time synchronization for BetterEarth." },

  // Integrations
  { name: "Stripe API", category: "INTEGRATIONS", resumeRole: "Built billing infrastructure from scratch for SaaS platform — recurring plans & one-time payments." },
  { name: "Shopify API", category: "INTEGRATIONS", resumeRole: "E-commerce platform integration, catalog synchronization, and webhooks." },
  { name: "JWT Authentication", category: "INTEGRATIONS", resumeRole: "Role-based authentication (admin/vendor/customer) securing platform endpoints." },
  { name: "Electron.js", category: "INTEGRATIONS", resumeRole: "Cross-platform desktop application development for legal case and attorney management." },
  { name: "Chrome Extension APIs", category: "INTEGRATIONS", resumeRole: "Built workflow automation, multi-destination search, and lazy-loading for travel use cases." },

  // Frontend
  { name: "React.js", category: "FRONTEND", resumeRole: "Built user interfaces, multi-role dashboards, and admin panels across 6+ shipped products." },
  { name: "Redux", category: "FRONTEND", resumeRole: "Predictable centralized state management for complex application workflows." },
  { name: "Tailwind CSS", category: "FRONTEND", resumeRole: "Utility-first responsive design, component styling, and fast UI rebuilds." },
  { name: "Bootstrap", category: "FRONTEND", resumeRole: "Responsive grid systems and accessible UI components." },
  { name: "jQuery / Ajax", category: "FRONTEND", resumeRole: "Asynchronous client-server communication and dynamic DOM manipulation." },

  // Languages
  { name: "JavaScript (ES6+)", category: "LANGUAGES", resumeRole: "Core programming language for full-stack MERN engineering across client, server, and extensions." },
  { name: "TypeScript", category: "LANGUAGES", resumeRole: "Working knowledge applied to type safety, structured contracts, and scalable code." },
  { name: "PHP", category: "LANGUAGES", resumeRole: "Backend development and 6-month industrial training foundation in Core PHP." },
  { name: "HTML5 & CSS3", category: "LANGUAGES", resumeRole: "Semantic markup, modern layout structures, and responsive user interfaces." },

  // Cloud & Tools
  { name: "Cron Jobs / Task Scheduling", category: "CLOUD & TOOLS", resumeRole: "Automated data synchronization between internal systems and third-party APIs." },
  { name: "AWS S3", category: "CLOUD & TOOLS", resumeRole: "Cloud object storage for user media, file assets, and secure uploads." },
  { name: "Firebase", category: "CLOUD & TOOLS", resumeRole: "Realtime data migration, hosting, and cloud infrastructure services." },
  { name: "Git & GitHub", category: "CLOUD & TOOLS", resumeRole: "Version control, feature branching, code reviews, and team collaboration." },
  { name: "Postman", category: "CLOUD & TOOLS", resumeRole: "REST API testing, endpoint inspection, and request/response verification." }
];

export const InteractiveTechEcosystem: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechItem>(TECH_ECOSYSTEM[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "BACKEND", "DATABASES", "INTEGRATIONS", "FRONTEND", "LANGUAGES", "CLOUD & TOOLS"];

  const filteredTech =
    selectedCategory === "ALL"
      ? TECH_ECOSYSTEM
      : TECH_ECOSYSTEM.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-amber-400 font-bold">03 // CORE SKILLS</span>
          <span className="text-slate-600">/</span>
          <span>STRICTLY GROUNDED IN RESUME</span>
        </div>
        <div className="hidden sm:block text-slate-500">
          HOVER OR SELECT TO VIEW RESUME CONTEXT
        </div>
      </div>

      <div className="mt-8 mb-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          TECHNICAL SKILLS & ROLES
        </h2>
        <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
          All skills extracted directly from my official resume, mapped to actual production features across 6+ shipped products.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              selectedCategory === cat
                ? "bg-amber-400 text-slate-950 border-amber-300 font-bold"
                : "bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Typography Ecosystem Field */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Fluid Typography Cloud (8 cols) */}
        <div className="lg:col-span-8 flex flex-wrap gap-2 sm:gap-2.5">
          {filteredTech.map((tech) => {
            const isHovered = tech.name === activeTech.name;

            return (
              <button
                key={tech.name}
                onMouseEnter={() => setActiveTech(tech)}
                onClick={() => setActiveTech(tech)}
                data-cursor="INSPECT"
                className={`group px-3.5 py-2 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-150 border cursor-pointer ${
                  isHovered
                    ? "bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-950/30 scale-105 z-10"
                    : "bg-slate-950/50 text-slate-300 border-slate-800/80 hover:border-slate-700 hover:text-white"
                }`}
              >
                <span>{tech.name}</span>
                <span
                  className={`ml-2 text-[10px] font-normal uppercase ${
                    isHovered ? "text-slate-900 font-bold" : "text-slate-500 group-hover:text-slate-400"
                  }`}
                >
                  [{tech.category}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Technical Inspector Card (4 cols) */}
        <div className="lg:col-span-4 sticky top-28">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <FiCode className="w-4 h-4" />
                <span>RESUME MAPPING</span>
              </div>
              <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                {activeTech.category}
              </span>
            </div>

            <div>
              <div className="text-xl font-extrabold text-white tracking-tight uppercase">
                {activeTech.name}
              </div>
              <div className="mt-3 text-xs text-slate-300 font-sans leading-relaxed">
                {activeTech.resumeRole}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <FiLayers className="w-3 h-3 text-emerald-400" />
                <span>OFFICIAL RESUME SKILL</span>
              </span>
              <span className="text-emerald-400 font-semibold">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
