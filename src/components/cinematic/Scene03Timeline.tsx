import { useState } from "react";
import { FaCalendarAlt, FaFilm } from "react-icons/fa";
import { CAREER_TIMELINE } from "../../data/cinematicPortfolioData";

export const Scene03Timeline = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  const currentMilestone = CAREER_TIMELINE.find((m) => m.year === selectedYear) || CAREER_TIMELINE[2];

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 03 // CAREER CHRONICLE</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <FaFilm className="text-amber-400 text-xs" />
            <span>THE BRIHASPATI INFOTECH (2022 – 2026)</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            THE CHRONOLOGICAL TIMELINE
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            3.5+ years of continuous engineering growth at <strong className="text-slate-200">The Brihaspati Infotech Pvt. Ltd., Mohali</strong> — charting the progression from REST API integration to SaaS Stripe billing engines, real-time WebSockets, and query optimization.
          </p>
        </div>

        {/* Cinematic Year Selector / Filmstrip Bar */}
        <div className="border-y border-white/[0.08] py-4">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-3 sm:gap-6">
            {CAREER_TIMELINE.map((item) => {
              const isSelected = item.year === selectedYear;
              return (
                <button
                  key={item.year}
                  onClick={() => setSelectedYear(item.year)}
                  className={`flex-1 min-w-[120px] sm:min-w-[160px] p-4 rounded-xl text-left font-mono transition-all border ${
                    isSelected
                      ? "bg-amber-500/10 border-amber-400/80 shadow-lg shadow-amber-500/5 text-amber-300"
                      : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="text-[10px] tracking-widest uppercase text-slate-400">
                    {item.period}
                  </div>
                  <div className={`text-xl sm:text-2xl font-bold tracking-tight mt-1 ${isSelected ? "text-amber-400" : "text-white"}`}>
                    {item.year}
                  </div>
                  <div className="text-[11px] truncate mt-0.5 text-slate-400 font-sans">
                    {item.headline.split(" ")[0]} {item.headline.split(" ")[1]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Film Feature Card */}
        <div className="rounded-3xl bg-[#090d16] border border-white/[0.1] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle background accent number */}
          <div className="absolute right-4 bottom-0 text-[100px] sm:text-[180px] font-mono font-black text-white/[0.02] select-none pointer-events-none leading-none">
            {currentMilestone.year}
          </div>

          <div className="relative z-10 space-y-8">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
                  <FaCalendarAlt className="text-xs" />
                  <span>{currentMilestone.period} Milestone</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {currentMilestone.headline}
                </h3>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-slate-400">
                <div className="text-slate-200 font-semibold">{currentMilestone.role}</div>
                <div>{currentMilestone.company}</div>
              </div>
            </div>

            {/* Narrative */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-4xl">
              {currentMilestone.narrative}
            </p>

            {/* Key Deliverables & Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {currentMilestone.keyMilestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {m}
                  </span>
                </div>
              ))}
            </div>

            {/* Technologies Applied */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                Technologies Active During This Epoch
              </div>
              <div className="flex flex-wrap gap-2">
                {currentMilestone.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
