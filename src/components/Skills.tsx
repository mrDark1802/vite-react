import React, { useState } from "react";
import { FaServer, FaDatabase, FaLaptopCode, FaPlug, FaTools, FaCheck } from "react-icons/fa";
import { SKILL_CATEGORIES, TECH_IMPACT_MAPPINGS } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [activeView, setActiveView] = useState<"disciplines" | "implementations">("disciplines");

  const categoryIcons = [
    <FaServer className="text-amber-400 text-base" />,
    <FaDatabase className="text-amber-400 text-base" />,
    <FaLaptopCode className="text-amber-400 text-base" />,
    <FaPlug className="text-amber-400 text-base" />,
    <FaTools className="text-amber-400 text-base" />,
  ];

  return (
    <section id="skills" className="py-24 bg-[#080c14] relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <span>// Technical Mastery & Skill Hierarchy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight">
              Engineering Stack & Real-World Implementation
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Categorized by production usage, verified implementation depth, and direct platform associations.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveView("disciplines")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeView === "disciplines"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              By Engineering Discipline
            </button>
            <button
              onClick={() => setActiveView("implementations")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeView === "implementations"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Technology → Production Matrix
            </button>
          </div>
        </div>

        {/* Skill Tier Legend */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 p-4 bg-slate-950/60 border border-slate-800/80 rounded-2xl text-xs font-mono">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">Skill Hierarchy:</span>
          <div className="flex items-center gap-2 text-amber-300">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-400"></span>
            <span>Primary Core (Extensive Production Exp)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-700"></span>
            <span>Working Knowledge (Secondary / Applied)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-800"></span>
            <span>Developer Tooling & Infrastructure</span>
          </div>
        </div>

        {/* VIEW 1: BY ENGINEERING DISCIPLINE */}
        {activeView === "disciplines" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className={`bg-[#0e1424] border rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  idx === 0 || idx === 1
                    ? "border-slate-700 shadow-xl ring-1 ring-amber-500/10"
                    : "border-slate-800/80 shadow-lg"
                }`}
              >
                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0">
                      {categoryIcons[idx]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{cat.category}</h3>
                      <p className="text-xs text-slate-400 line-clamp-1">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills List with Context Notes */}
                  <div className="space-y-2.5 pt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-3 rounded-xl border transition-all ${
                          skill.tier === "primary"
                            ? "bg-slate-900/90 border-amber-500/30 hover:border-amber-400/60"
                            : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-mono font-bold ${
                              skill.tier === "primary" ? "text-amber-300" : "text-slate-200"
                            }`}
                          >
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                              skill.tier === "primary"
                                ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                                : skill.tier === "working"
                                ? "bg-slate-800 text-slate-300"
                                : "bg-slate-900 text-slate-400"
                            }`}
                          >
                            {skill.tier === "primary" ? "Primary Core" : skill.tier === "working" ? "Working" : "Tool"}
                          </span>
                        </div>
                        {skill.context && (
                          <div className="text-[11px] text-slate-400 mt-1 leading-normal font-sans">
                            {skill.context}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{cat.skills.length} Technologies</span>
                  <span className="text-slate-400">Verified in Production</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* VIEW 2: TECHNOLOGY TO PRODUCTION MATRIX */
          <div className="space-y-4">
            <div className="bg-[#0e1424] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Technology In Production Matrix</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Direct mapping of skills to real shipped products and architectural roles
                  </p>
                </div>
                <div className="text-xs font-mono text-amber-400">
                  {TECH_IMPACT_MAPPINGS.length} Core Implementations
                </div>
              </div>

              <div className="divide-y divide-slate-800/60">
                {TECH_IMPACT_MAPPINGS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 hover:bg-slate-900/40 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
                  >
                    {/* Technology & Category */}
                    <div className="lg:col-span-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white font-mono">{item.technology}</span>
                        <span className="px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded text-[10px] font-mono">
                          {item.tier}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">{item.category}</div>
                    </div>

                    {/* Shipped In Platform */}
                    <div className="lg:col-span-3">
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Shipped In Product</div>
                      <div className="text-xs sm:text-sm font-semibold text-amber-300 flex items-center gap-1.5 mt-0.5">
                        <FaCheck className="text-emerald-400 text-xs" />
                        <span>{item.shippedIn}</span>
                      </div>
                    </div>

                    {/* Concrete Implementation */}
                    <div className="lg:col-span-5 text-xs text-slate-300 leading-relaxed font-sans">
                      {item.concreteImplementation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
