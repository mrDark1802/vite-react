import { useState } from "react";
import { HOW_I_BUILD_STAGES } from "../../data/cinematicPortfolioData";

export const Scene05HowIBuild = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(1); // Default to Architect

  const currentStage = HOW_I_BUILD_STAGES[activeStageIndex];

  return (
    <section
      id="how-i-build"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 05 // DEVELOPMENT METHODOLOGY</span>
          </div>
          <span>EIGHT-STAGE LIFECYCLE</span>
        </div>

        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            FROM IDEA TO PRODUCTION
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            A repeatable, battle-tested engineering sequence designed to minimize technical debt, eliminate security vulnerabilities, and ship resilient software products on schedule.
          </p>
        </div>

        {/* 8-Stage Interactive Sequence Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {HOW_I_BUILD_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3.5 rounded-2xl text-left font-mono transition-all border flex flex-col justify-between min-h-[90px] ${
                  isActive
                    ? "bg-amber-500/10 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/5"
                    : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.15]"
                }`}
              >
                <span className={`text-[10px] tracking-widest ${isActive ? "text-amber-400" : "text-slate-400"}`}>
                  STAGE {stage.step}
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-white truncate">
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="rounded-3xl bg-[#090d16] border border-white/[0.1] p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div className="space-y-1">
              <div className="font-mono text-xs text-amber-400 tracking-widest uppercase">
                STAGE {currentStage.step} // {currentStage.title}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {currentStage.subtitle}
              </h3>
            </div>

            <div className="font-mono text-xs text-slate-400 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/[0.08] w-fit">
              Deliverable: <span className="text-emerald-400 font-semibold">{currentStage.deliverable}</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-4xl">
            {currentStage.description}
          </p>

          <div className="space-y-2 pt-2">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
              Associated Technical Concepts & Frameworks
            </div>
            <div className="flex flex-wrap gap-2">
              {currentStage.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
