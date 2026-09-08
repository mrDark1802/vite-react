import React, { useState } from "react";
import { CINEMATIC_PROJECTS, Project } from "../../data/cinematicPortfolioData";
import { ProjectArchitectureDiagram } from "./ProjectArchitectureDiagram";
import { FiArrowUpRight, FiLayers, FiCheck } from "react-icons/fi";

interface InteractiveWorkGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const InteractiveWorkGallery: React.FC<InteractiveWorkGalleryProps> = ({
  onSelectProject
}) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(CINEMATIC_PROJECTS[0].id);

  const activeProject =
    CINEMATIC_PROJECTS.find((p) => p.id === activeProjectId) || CINEMATIC_PROJECTS[0];

  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-amber-400 font-bold">01 // PRODUCTION WORK</span>
          <span className="text-slate-600">/</span>
          <span>7 CLIENT & ENTERPRISE PRODUCTS</span>
        </div>
        <div className="hidden sm:block text-slate-500">
          HOVER TO INSPECT • CLICK TO EXPAND CASE STUDY
        </div>
      </div>

      <div className="mt-8 mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          PROJECTS AT SCALE
        </h2>
        <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
          Real software shipped to production across SaaS subscriptions, real-time messaging, e-commerce catalog search, and desktop architectures.
        </p>
      </div>

      {/* Main Split Layout: Left Project Rows / Right Live Architecture Monitor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Interactive Project List (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {CINEMATIC_PROJECTS.map((project, idx) => {
            const isActive = project.id === activeProjectId;
            const indexFormatted = `0${idx + 1}`;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProjectId(project.id)}
                onClick={() => onSelectProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View case study for ${project.title}`}
                data-cursor="VIEW SYSTEM"
                className={`group relative p-6 sm:p-7 rounded-2xl transition-all duration-200 cursor-pointer border text-left outline-hidden ${
                  isActive
                    ? "bg-slate-900/90 border-amber-400/50 shadow-xl shadow-amber-950/20 ring-1 ring-amber-400/30"
                    : "bg-slate-950/40 border-slate-800/70 hover:bg-slate-900/50 hover:border-slate-700"
                }`}
              >
                {/* Active Indicator Bar */}
                <div
                  className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-200 ${
                    isActive ? "bg-amber-400" : "bg-transparent group-hover:bg-slate-700"
                  }`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    {/* Index & Category */}
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span
                        className={`font-bold ${
                          isActive ? "text-amber-400" : "text-slate-500"
                        }`}
                      >
                        {indexFormatted}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-slate-400 tracking-wider uppercase text-[11px]">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-slate-300 line-clamp-2 font-sans pt-1">
                      {project.tagline}
                    </p>

                    {/* Verified Outcome highlight */}
                    {project.impactOutcomes && project.impactOutcomes.length > 0 && (
                      <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-400/90">
                        <FiCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{project.impactOutcomes[0]}</span>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 font-mono text-[11px]">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-slate-900/50 border border-slate-800 text-slate-500">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Top Right Action Arrow */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 shrink-0 ${
                      isActive
                        ? "bg-amber-400 text-slate-950 border-amber-300"
                        : "bg-slate-900 text-slate-400 border-slate-800 group-hover:border-slate-700 group-hover:text-white"
                    }`}
                  >
                    <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Mobile inline diagram display when active */}
                {isActive && (
                  <div className="mt-6 lg:hidden pt-6 border-t border-slate-800">
                    <ProjectArchitectureDiagram projectId={project.id} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Sticky Architecture Monitor (5 cols, desktop only) */}
        <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-4">
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 shadow-2xl backdrop-blur-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <FiLayers className="w-4 h-4 text-amber-400" />
                <span className="font-semibold uppercase tracking-wider">LIVE SYSTEM TOPOLOGY</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                ACTIVE
              </span>
            </div>

            {/* Architecture SVG canvas */}
            <div className="mt-4">
              <ProjectArchitectureDiagram projectId={activeProject.id} />
            </div>

            {/* Summary Box */}
            <div className="mt-5 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>SYSTEM TARGET:</span>
                <span className="text-amber-400 font-bold uppercase">{activeProject.title}</span>
              </div>
              <div className="text-slate-400 text-[11px] leading-relaxed">
                {activeProject.architectureNotes}
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                <span>PRESS CLICK TO EXPAND STUDY</span>
                <span className="text-slate-400">ESC TO DISMISS</span>
              </div>
            </div>

            {/* Deep Dive Action Button */}
            <button
              onClick={() => onSelectProject(activeProject)}
              className="mt-4 w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-mono text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              data-cursor="EXPAND"
            >
              <span>EXPAND FULL CASE STUDY</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
