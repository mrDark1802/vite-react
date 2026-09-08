import React, { useState } from "react";
import { FiMonitor, FiServer, FiDatabase, FiRadio, FiCpu, FiArrowRight } from "react-icons/fi";

const SYSTEM_LAYERS = [
  {
    id: "frontend",
    step: "01",
    title: "FRONTEND & DASHBOARDS",
    subtitle: "React.js, Redux, Tailwind CSS & Multi-Role UIs",
    icon: FiMonitor,
    technologies: ["React.js", "Redux", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)", "TypeScript"],
    description:
      "Building user interfaces, admin panels, and multi-role dashboards (admin/vendor/customer). Focused on fast, clean, and responsive user experiences that give each user type a distinct, permission-scoped experience.",
    rule: "Interfaces should be responsive, intuitive, and seamlessly bound to backend services."
  },
  {
    id: "api",
    step: "02",
    title: "REST APIS & MVC ARCHITECTURE",
    subtitle: "Node.js, Express.js & Scoped Security",
    icon: FiServer,
    technologies: ["Node.js", "Express.js", "REST API Design", "MVC Architecture", "JWT Authentication"],
    description:
      "Designing REST APIs and admin dashboards supporting large, multi-field-searchable product catalogs. Implementing clean MVC layers and role-based authentication to secure endpoints across user types.",
    rule: "Every endpoint must be structured with clean controller separation and validated inputs."
  },
  {
    id: "database",
    step: "03",
    title: "DATABASE SCHEMAS & REDESIGN",
    subtitle: "PostgreSQL, MongoDB, MySQL & Firebase",
    icon: FiDatabase,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Firebase Realtime Database", "Schema Redesign"],
    description:
      "Redesigned MongoDB and PostgreSQL schemas to support new product features, improving query performance and removing redundant data storage. Executed zero-downtime data migrations to Firebase Realtime Database.",
    rule: "Optimize schemas for query performance and eliminate redundant data storage."
  },
  {
    id: "realtime",
    step: "04",
    title: "REAL-TIME & INTEGRATIONS",
    subtitle: "Socket.io Chat & Stripe Billing Infrastructure",
    icon: FiRadio,
    technologies: ["Socket.io", "Stripe API", "Shopify API", "Message Translation", "AWS S3"],
    description:
      "Built Stripe billing infrastructure from the ground up for a SaaS platform — subscriptions, one-time payments, plan management. Owned Socket.io live chat for marketplaces, removing off-platform communication leakage.",
    rule: "Stripe billing must reliably manage recurring revenue; live messaging must be instantaneous."
  },
  {
    id: "runtime",
    step: "05",
    title: "DESKTOP, EXTENSIONS & CRON SYNC",
    subtitle: "Electron.js, Chrome MV3 & Task Scheduling",
    icon: FiCpu,
    technologies: ["Electron.js", "Chrome Extension APIs", "Cron Jobs / Task Scheduling", "Git / GitHub", "Postman"],
    description:
      "Built Electron desktop application for legal case and attorney management. Shipped automation, multi-destination search, and lazy-loading for travel Chrome extension. Automated third-party API data sync via scheduled cron jobs.",
    rule: "Automate repetitive data workflows and build purpose-fit tools for users."
  }
];

export const SystemsIdentity: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>("api");

  const activeLayer =
    SYSTEM_LAYERS.find((layer) => layer.id === selectedLayerId) || SYSTEM_LAYERS[0];

  return (
    <section id="systems" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-amber-400 font-bold">02 // ARCHITECTURAL PILLARS</span>
          <span className="text-slate-600">/</span>
          <span>HOW I BUILD PRODUCTION SOFTWARE</span>
        </div>
        <div className="hidden sm:block text-slate-500">
          SELECT A PILLAR TO INSPECT RESUME MAPPING
        </div>
      </div>

      <div className="mt-8 mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          HOW I THINK IN SYSTEMS
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
          "I don't just build interfaces. I build systems." Here is how my core engineering disciplines connect across frontend, backend, databases, and integrations.
        </p>
      </div>

      {/* Interactive 5-Layer Stack Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {SYSTEM_LAYERS.map((layer) => {
          const isCurrent = layer.id === selectedLayerId;
          const Icon = layer.icon;

          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayerId(layer.id)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                isCurrent
                  ? "bg-slate-900 border-amber-400 text-white shadow-lg shadow-amber-950/20 ring-1 ring-amber-400/40"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
              }`}
              data-cursor="INSPECT"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-400 font-bold">{layer.step}</span>
                <Icon className={`w-4 h-4 ${isCurrent ? "text-amber-400" : "text-slate-500"}`} />
              </div>
              <h3 className="mt-3 font-mono font-bold text-xs uppercase tracking-wider text-slate-200">
                {layer.title.split(" ")[0]}
              </h3>
              <p className="text-[11px] text-slate-500 truncate mt-1">
                {layer.technologies[0]} + {layer.technologies[1]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Layer Deep-Dive Display */}
      <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold text-sm">PILLAR {activeLayer.step}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase">
                {activeLayer.title}
              </h3>
            </div>
            <p className="text-slate-400 text-sm font-sans">{activeLayer.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {activeLayer.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              {activeLayer.description}
            </p>
            <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/40 text-amber-200/90 text-xs">
              <FiArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>CORE PRINCIPLE: </strong>
                {activeLayer.rule}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-2">
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold block">
              OFFICIAL RESUME EXPERIENCE
            </span>
            <div className="text-slate-300 font-semibold">
              The Brihaspati Infotech Pvt. Ltd., Mohali
            </div>
            <p className="text-slate-400 text-[11px] font-sans leading-relaxed">
              Dec 2022 – Jun 2026 • Full Stack Developer (MERN Stack)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
