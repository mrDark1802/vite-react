import { useEffect } from "react";
import { FaTimes, FaCogs, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Project } from "../../data/cinematicPortfolioData";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#07090f] border border-white/[0.12] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-[#05070a]">
          <div className="space-y-0.5">
            <div className="text-[10px] font-mono tracking-widest uppercase text-amber-400">
              {project.category}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
              Press ESC to exit
            </span>
            <button
              onClick={onClose}
              className="p-2.5 text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-xl transition-colors border border-white/[0.08]"
              aria-label="Close modal"
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Tagline & Overview */}
          <div className="space-y-3">
            <p className="text-base sm:text-lg text-amber-300 font-mono font-medium leading-snug">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Technical Flow Pipeline */}
          <div className="p-5 rounded-2xl bg-[#0a0d16] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <FaCogs className="text-xs" />
              <span>Technical Dataflow Architecture</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {project.technicalFlow.map((flow, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1"
                >
                  <div className="text-[10px] text-slate-400 flex items-center justify-between">
                    <span>STEP 0{idx + 1}</span>
                    <span className="text-amber-400">{flow.action}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="font-semibold">{flow.from}</span>
                    <FaArrowRight size={10} className="text-slate-400 shrink-0" />
                    <span className="font-semibold text-white">{flow.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Engineering Notes */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              System Engineering & Resiliency Rationale
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed p-4 rounded-xl bg-black/60 border border-white/[0.08]">
              {project.architectureNotes}
            </p>
          </div>

          {/* Verified Outcomes */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Verified Production Outcomes
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.impactOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <FaCheckCircle className="text-amber-400 text-xs mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Technical Features Shipped
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-mono mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Deployed */}
          <div className="pt-4 border-t border-white/[0.08] space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#05070a] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Candidate Project Dossier</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs hover:bg-amber-400 transition-colors"
          >
            Close Scene View
          </button>
        </div>
      </div>
    </div>
  );
};
