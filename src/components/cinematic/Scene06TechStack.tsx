import { useState } from "react";
import { TECH_STACK_CATEGORIES } from "../../data/cinematicPortfolioData";

export const Scene06TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>("BACKEND");

  const selectedCategoryData =
    TECH_STACK_CATEGORIES.find((c) => c.name === activeCategory) || TECH_STACK_CATEGORIES[2];

  return (
    <section
      id="stack"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 06 // TECHNICAL ECOSYSTEM</span>
          </div>
          <span>VERIFIED PRODUCTION KNOWLEDGE</span>
        </div>

        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            ENGINEERING STACK
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Technologies actively deployed across client environments — organized by engineering discipline with practical architectural notes rather than generic percentage bars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/[0.08] pb-4">
          {TECH_STACK_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all border ${
                  isActive
                    ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md"
                    : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.15]"
                }`}
              >
                {cat.name} ({cat.skills.length})
              </button>
            );
          })}
        </div>

        {/* Category Description & Skills Grid */}
        <div className="space-y-6">
          <div className="text-sm font-mono text-slate-400">
            {selectedCategoryData.description}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCategoryData.skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 ${
                  skill.highlight
                    ? "bg-[#090d16] border-amber-500/30 hover:border-amber-400 shadow-lg ring-1 ring-amber-500/10"
                    : "bg-[#07090f] border-white/[0.06] hover:border-white/[0.15]"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-bold font-mono ${
                        skill.highlight ? "text-amber-300" : "text-white"
                      }`}
                    >
                      {skill.name}
                    </span>
                    {skill.highlight ? (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Primary Core
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-400">
                        Applied
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {skill.note}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.04] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Production Ready</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
