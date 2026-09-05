import React from "react";
import { FaServer, FaCreditCard, FaDatabase, FaBolt } from "react-icons/fa";
import { CORE_COMPETENCIES } from "../data/portfolioData";

export const CoreCompetencies: React.FC = () => {
  const icons = [
    <FaServer className="text-amber-400 text-xl" />,
    <FaCreditCard className="text-amber-400 text-xl" />,
    <FaDatabase className="text-amber-400 text-xl" />,
    <FaBolt className="text-amber-400 text-xl" />,
  ];

  return (
    <section className="py-16 bg-[#0c111e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            <span>// Engineering Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            How I deliver value as a backend-leaning Full Stack Engineer
          </h2>
        </div>

        {/* 4-Grid Architecture Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_COMPETENCIES.map((comp, idx) => (
            <div
              key={idx}
              className="bg-[#101728] border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {icons[idx]}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {comp.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {comp.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>0{idx + 1}</span>
                <span className="text-slate-600 group-hover:text-amber-400/80 transition-colors">Verified In Production</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
