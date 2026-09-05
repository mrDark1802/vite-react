import React, { useState } from "react";
import { FaCheck, FaCogs, FaRocket } from "react-icons/fa";
import { PROJECTS } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Work (7)" },
    { id: "featured", name: "Featured & SaaS (3)" },
    { id: "realtime", name: "Real-Time & APIs (4)" },
    { id: "specialized", name: "Extensions & Desktop (2)" },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.featured;
    if (filter === "realtime") return p.techStack.includes("Socket.io") || p.techStack.includes("PostgreSQL") || p.techStack.includes("REST APIs");
    if (filter === "specialized") return p.category.includes("Browser") || p.category.includes("Desktop");
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#090d16] relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <span>// Shipped Work & System Design</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight">
              Production Projects & Engineered Systems
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Concrete platforms, billing engines, real-time architectures, and tools shipped across client engagements.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  filter === cat.id
                    ? "bg-amber-500 text-slate-950 shadow-md font-semibold"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED PROJECTS (Editorial Detailed Layout) */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`rounded-3xl border transition-all duration-300 ${
                project.featured
                  ? "bg-[#0f1629] border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-2xl ring-1 ring-white/5"
                  : "bg-[#0d1322] border-slate-800 p-6 sm:p-8 shadow-xl"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Problem, Overview & Architecture */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-md text-xs font-mono font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 rounded-md text-[11px] font-mono">
                        ★ Featured Architecture
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-amber-400/90">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Overview */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Architecture Highlight (if available) */}
                  {project.architectureNotes && (
                    <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <FaCogs className="text-amber-400 text-xs" />
                        <span>System Architecture Design</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-mono">
                        {project.architectureNotes}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Technologies & Libraries
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded-md text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column: Key Features & Measurable Outcomes */}
                <div className="lg:col-span-5 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-5">
                  
                  {/* Impact Metrics Banner */}
                  {project.impactMetrics && (
                    <div className="space-y-2 pb-4 border-b border-slate-800">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <FaRocket className="text-xs" />
                        <span>Engineering Outcomes</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {project.impactMetrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-slate-200 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features List */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Key Technical Capabilities
                    </div>
                    <ul className="space-y-2.5">
                      {project.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                          <FaCheck className="text-emerald-400 text-xs mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Index */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Project {idx + 1} of {filteredProjects.length}</span>
                    <span className="text-slate-400 font-semibold">Production Ready</span>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
