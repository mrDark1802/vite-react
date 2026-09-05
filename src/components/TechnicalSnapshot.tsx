import React from "react";
import { FaServer, FaDatabase, FaLaptopCode, FaCogs } from "react-icons/fa";
import { TECHNICAL_SNAPSHOT } from "../data/portfolioData";

export const TechnicalSnapshot: React.FC = () => {
  const domainIcons = [
    <FaServer className="text-amber-400 text-sm" />,
    <FaDatabase className="text-amber-400 text-sm" />,
    <FaLaptopCode className="text-amber-400 text-sm" />,
    <FaCogs className="text-amber-400 text-sm" />,
  ];

  return (
    <section className="py-10 bg-[#0c111e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              30-Second Recruiter Technical Snapshot
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Specialized in Node.js, PostgreSQL, React & Stripe Billing
          </span>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECHNICAL_SNAPSHOT.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#101728] border border-slate-800 hover:border-slate-700 p-5 rounded-2xl flex flex-col justify-between space-y-3 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    {item.domain}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    {domainIcons[idx]}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-white font-mono">
                    {item.primary}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-1">
                    {item.supporting}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                {item.focus}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
