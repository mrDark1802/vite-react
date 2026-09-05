import React, { useEffect } from "react";
import { FaTimes, FaDownload, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c111e] border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d16]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FaFilePdf />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Sandeep Kumar — Resume
              </h3>
              <p className="text-xs font-mono text-slate-400">Official Candidate Summary</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Sandeep_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs font-mono transition-colors shadow"
            >
              <FaDownload />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close resume modal"
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>

        {/* Modal Body - Structured Resume View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#090d16]/60 text-slate-200 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {PERSONAL_INFO.availability}
              </span>
            </div>
            <p className="text-sm font-semibold text-amber-400 font-mono">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-slate-400 pt-1">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>📞 {PERSONAL_INFO.phone}</span>
              <span>✉️ {PERSONAL_INFO.email}</span>
              <span>🔗 {PERSONAL_INFO.linkedinHandle}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Core Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Technical Stack & Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-semibold text-slate-200">{cat.category}</div>
                  <div className="text-slate-400 font-mono text-[11px]">
                    {cat.skills.map((s) => s.name).join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Professional Experience
            </h2>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">{exp.role}</h3>
                    <div className="text-xs text-amber-300 font-mono">{exp.company} — {exp.location}</div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 w-fit">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Education & Industrial Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-amber-400 font-mono text-[11px]">{edu.period}</div>
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-slate-400">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090d16] flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Official Resume • Sandeep Kumar</span>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline flex items-center gap-1.5"
          >
            <span>Open PDF in Tab</span>
            <FaExternalLinkAlt size={10} />
          </a>
        </div>
      </div>
    </div>
  );
};
