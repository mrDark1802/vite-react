import React from "react";
import { FaGraduationCap, FaGlobeAmericas, FaCheckCircle } from "react-icons/fa";
import { EDUCATION, SPOKEN_LANGUAGES } from "../data/portfolioData";

export const AboutAndEducation: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#090d16] relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <span>// Background & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight">
              About Me & Technical Foundations
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400">
            Una, HP, India • Open for Global Remote & Relocation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Professional Narrative (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e1424] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-full text-xs font-mono font-medium">
                Professional Overview
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Backend-driven mindset with full-stack delivery capability
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am a Full Stack Developer with over three years of dedicated experience shipping production software. My primary focus revolves around architecting robust backend APIs, designing normalized PostgreSQL and MongoDB schemas, and implementing mission-critical payment infrastructure with Stripe.
              </p>
              <p>
                During my 3.5+ years at <strong className="text-white font-semibold">The Brihaspati Infotech</strong>, I have taken ownership of features end-to-end — from database indexing and REST endpoint design to real-time WebSockets integration and responsive frontend state management.
              </p>
              <p>
                Whether it's building automated billing flows with zero webhook failure, creating role-permissioned marketplace portals with live Socket.io messaging, or developing browser automation extensions, I focus on performance, clarity, and reliability.
              </p>
            </div>

            {/* Core Values / Work Style */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-start gap-3">
                <FaCheckCircle className="text-amber-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">End-to-End Delivery</div>
                  <div className="text-[11px] text-slate-400">Schema design to production rollout</div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-start gap-3">
                <FaCheckCircle className="text-amber-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Security & Reliability</div>
                  <div className="text-[11px] text-slate-400">Idempotent webhooks & RBAC auth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Spoken Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="bg-[#0e1424] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <FaGraduationCap className="text-amber-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Education & Training</h3>
                  <p className="text-xs text-slate-400 font-mono">Formal background & coursework</p>
                </div>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-2xl space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-amber-400">{edu.period}</span>
                      <span className="text-[11px] font-mono text-slate-500">Verified</span>
                    </div>
                    <div className="text-sm font-bold text-slate-100">{edu.degree}</div>
                    <div className="text-xs text-slate-400 font-medium">{edu.institution}</div>
                    <p className="text-xs text-slate-400 pt-1 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-[#0e1424] border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <FaGlobeAmericas className="text-amber-400 text-sm" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Languages</h3>
                  <p className="text-xs text-slate-400 font-mono">Spoken & Professional</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {SPOKEN_LANGUAGES.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-xs font-mono text-slate-200"
                  >
                    {lang} (Fluent)
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
