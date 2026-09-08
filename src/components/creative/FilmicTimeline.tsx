import React, { useState } from "react";
import { CAREER_TIMELINE, TimelineMilestone } from "../../data/cinematicPortfolioData";
import { FiCheckCircle, FiCalendar } from "react-icons/fi";

export const FilmicTimeline: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  const activeMilestone: TimelineMilestone =
    CAREER_TIMELINE.find((m) => m.year === selectedYear) || CAREER_TIMELINE[2];

  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-amber-400 font-bold">04 // EVOLUTION</span>
          <span className="text-slate-600">/</span>
          <span>THE BRIHASPATI INFOTECH (2022 — 2026)</span>
        </div>
        <div className="hidden sm:block text-slate-500">
          CONTINUOUS PRODUCTION TENURE
        </div>
      </div>

      <div className="mt-8 mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          ENGINEERING JOURNEY
        </h2>
        <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
          Over 3 years of continuous growth at The Brihaspati Infotech taking software from initial prototypes to hardened production deployments.
        </p>
      </div>

      {/* Year Scrubbing Track */}
      <div className="flex items-center justify-between border-b border-slate-800 font-mono text-sm overflow-x-auto pb-4 gap-2">
        {CAREER_TIMELINE.map((item) => {
          const isSelected = item.year === selectedYear;

          return (
            <button
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              className={`px-4 py-2.5 rounded-xl font-bold transition-all duration-150 cursor-pointer flex items-center gap-2 shrink-0 ${
                isSelected
                  ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-950/20"
                  : "bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800/70"
              }`}
              data-cursor="SELECT"
            >
              <FiCalendar className="w-3.5 h-3.5" />
              <span>{item.year}</span>
              {item.year === "2026" && (
                <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-1.5 py-0.2 rounded-full">
                  NOW
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Narrative Card */}
      <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 font-mono shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-amber-400 font-bold text-xs">
              {activeMilestone.period} • THE BRIHASPATI INFOTECH PVT. LTD.
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              {activeMilestone.headline}
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-sans">{activeMilestone.role}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {activeMilestone.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            {activeMilestone.narrative}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {activeMilestone.keyMilestones.map((m, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300"
              >
                <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-sans leading-relaxed">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
