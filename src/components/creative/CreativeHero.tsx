import React from "react";
import { FiArrowDown, FiLayers, FiServer, FiCpu, FiShield } from "react-icons/fi";

export const CreativeHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Dynamic Background Radial Aura with slow pulse */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      {/* Top Tagline */}
      <div className="flex items-center gap-3 font-mono text-xs text-slate-400 tracking-widest uppercase animate-in fade-in duration-500">
        <span className="w-8 h-px bg-amber-400/80" />
        <span className="text-amber-400 font-semibold">ENGINEERING PORTFOLIO</span>
        <span className="text-slate-600">/</span>
        <span className="text-slate-400">SANDEEP KUMAR • 2022 — 2026</span>
      </div>

      {/* Centerpiece: Massive Editorial Typography */}
      <div className="my-auto py-10 lg:py-16">
        <div className="space-y-4">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white uppercase select-none leading-[0.9] transition-transform duration-300"
            data-cursor="ENGINEER"
          >
            SANDEEP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 hover:from-amber-200 hover:to-amber-400 transition-all duration-500">
              KUMAR
            </span>
          </h1>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 pt-2">
            <span
              className="font-mono text-base sm:text-xl text-amber-400 font-bold uppercase tracking-wider"
              data-cursor="MERN"
            >
              FULL STACK DEVELOPER
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="font-mono text-sm sm:text-base text-slate-400">
              MERN Stack • Relational DBs • Real-Time Systems
            </span>
          </div>
        </div>

        {/* The Core Engineering Thesis */}
        <div
          className="mt-10 sm:mt-14 max-w-3xl border-l-2 border-amber-400/80 pl-6 py-2 transition-all duration-300 hover:border-amber-300 group"
          data-cursor="SYSTEMS"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-100 tracking-tight leading-snug group-hover:text-white transition-colors">
            "I don't just craft interfaces.<br />
            <strong className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
              I engineer systems that scale and work under pressure.
            </strong>"
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
            Backend-leaning Full Stack Developer with 3+ years of experience taking SaaS and e-commerce platforms from prototype to production — REST APIs, PostgreSQL/MongoDB schema design, and secure payment infrastructure built to handle real transaction volume across 6 shipped client products at The Brihaspati Infotech.
          </p>
        </div>

        {/* Dynamic Architectural Signals */}
        <div className="mt-10 flex flex-wrap gap-2.5 sm:gap-3 font-mono text-xs">
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-amber-400/60 hover:text-white transition-all duration-200 cursor-default"
            data-cursor="NODE.JS"
          >
            <FiServer className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>NODE.JS & EXPRESS REST</span>
          </div>
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-emerald-400/60 hover:text-white transition-all duration-200 cursor-default"
            data-cursor="POSTGRES"
          >
            <FiLayers className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>POSTGRESQL & MONGODB</span>
          </div>
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all duration-200 cursor-default"
            data-cursor="REALTIME"
          >
            <FiCpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>SOCKET.IO REAL-TIME</span>
          </div>
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-indigo-400/60 hover:text-white transition-all duration-200 cursor-default"
            data-cursor="STRIPE"
          >
            <FiShield className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>STRIPE BILLING & WEBHOOKS</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Cue & Quick Metrics */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-400">
          <div>
            <span className="text-white font-bold">3+</span> YEARS EXP
          </div>
          <span className="text-slate-700">|</span>
          <div>
            <span className="text-white font-bold">6+</span> PRODUCTION PRODUCTS
          </div>
          <span className="text-slate-700">|</span>
          <div>
            <span className="text-emerald-400 font-bold">100%</span> VERIFIED RESUME
          </div>
        </div>

        <a
          href="#work"
          className="group flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-widest cursor-pointer"
          data-cursor="SCROLL"
        >
          <span>EXPLORE PRODUCTION WORK</span>
          <FiArrowDown className="w-4 h-4 group-hover:translate-y-1.5 transition-transform text-amber-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
