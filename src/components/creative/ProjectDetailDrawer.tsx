import React, { useEffect } from "react";
import { Project } from "../../data/cinematicPortfolioData";
import { ProjectArchitectureDiagram } from "./ProjectArchitectureDiagram";
import { FiX, FiCheckCircle, FiLayers, FiCode, FiArrowRight, FiMail } from "react-icons/fi";

interface ProjectDetailDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailDrawer: React.FC<ProjectDetailDrawerProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Study Panel */}
      <div
        className="relative w-full max-w-3xl h-full bg-[#0b0f19] border-l border-slate-800 shadow-2xl flex flex-col z-10 overflow-hidden animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider uppercase">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full">
              SHIPPED PRODUCT
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
            data-cursor="CLOSE"
          >
            <span>ESC</span>
            <FiX className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Header */}
          <div>
            <h2 id="project-title" className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base md:text-lg text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Architecture Visualization */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiLayers className="w-4 h-4 text-amber-400" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                SYSTEM ARCHITECTURE & DATA FLOW
              </h3>
            </div>
            <ProjectArchitectureDiagram projectId={project.id} />
          </div>

          {/* Overview */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5 md:p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
              THE MISSION & ENGINEERING CONTEXT
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {project.overview}
            </p>
            {project.architectureNotes && (
              <div className="mt-4 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                <span className="text-amber-400 font-semibold">SYSTEM DECISION: </span>
                {project.architectureNotes}
              </div>
            )}
          </div>

          {/* Key Impact Outcomes */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiCheckCircle className="w-4 h-4 text-emerald-400" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                VERIFIED RESUME DELIVERABLES
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {project.impactOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-emerald-200/90 text-sm"
                >
                  <span className="font-mono text-xs text-emerald-400 font-bold mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiCode className="w-4 h-4 text-cyan-400" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                CORE TECHNICAL CAPABILITIES
              </h3>
            </div>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <FiArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
              TECHNOLOGY FOUNDATION
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090d16] flex items-center justify-between">
          <span className="font-mono text-xs text-slate-500 hidden sm:inline">
            SANDEEP KUMAR // FULL STACK
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={`mailto:skheergr8@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.title)}`}
              className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-950 text-xs font-bold font-mono rounded-lg hover:bg-amber-300 transition-colors"
              data-cursor="EMAIL"
            >
              <FiMail className="w-3.5 h-3.5" />
              <span>DISCUSS THIS SYSTEM</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              DISMISS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
