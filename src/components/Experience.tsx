import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";
import { EXPERIENCES } from "../data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <span>// Professional Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight">
              Work Experience & Production Impact
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400">
            3+ Years of Continuous Full Stack & Backend Delivery
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="bg-[#0e1424] border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl transition-all"
            >
              {/* Header Info */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-slate-800/80">
                <div className="lg:col-span-8 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-full text-xs font-mono font-semibold">
                    {exp.role}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                    <span>{exp.company}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl pt-1">
                    {exp.summary}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col lg:items-end justify-center space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800">
                    <FaCalendarAlt className="text-amber-400" />
                    <span className="text-slate-200 font-semibold">{exp.period}</span>
                    <span className="text-slate-500">({exp.duration})</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <FaMapMarkerAlt className="text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements Highlight Banner */}
              <div className="my-8 p-5 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border-l-4 border-amber-400 rounded-r-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                  <FaAward className="text-amber-400 text-sm" />
                  <span>Key Production Outcomes & Achievements</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
                  {exp.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-amber-400 mt-1 shrink-0 font-bold">✓</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Responsibilities & Technical Contributions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3 hover:border-slate-700 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Technologies & Frameworks Deployed in Production
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-900 text-slate-200 border border-slate-700/60 rounded-lg text-xs font-mono hover:border-amber-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
