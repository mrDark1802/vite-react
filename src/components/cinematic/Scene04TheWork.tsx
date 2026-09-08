import { useState } from "react";
import { FaArrowRight, FaCogs, FaCheckCircle } from "react-icons/fa";
import { CINEMATIC_PROJECTS, Project } from "../../data/cinematicPortfolioData";
import {
  NoblAiVisual,
  MarketplaceVisual,
  FriendZoneVisual,
  ExtremePerformanceVisual,
  BetterEarthVisual,
  RennerOttoVisual,
  TriptopVisual,
} from "./ProjectVisuals";

interface Scene04TheWorkProps {
  onSelectProject: (project: Project) => void;
}

export const Scene04TheWork = ({ onSelectProject }: Scene04TheWorkProps) => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = CINEMATIC_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "saas") return p.category.includes("SAAS") || p.category.includes("E-COMMERCE");
    if (filter === "realtime") return p.techStack.includes("Socket.io");
    if (filter === "specialized") return p.category.includes("DESKTOP") || p.category.includes("CHROME");
    return true;
  });

  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case "noblai":
        return <NoblAiVisual />;
      case "online-marketplace":
        return <MarketplaceVisual />;
      case "friendzone":
        return <FriendZoneVisual />;
      case "extreme-performance":
        return <ExtremePerformanceVisual />;
      case "betterearth":
        return <BetterEarthVisual />;
      case "renner-otto":
        return <RennerOttoVisual />;
      case "triptop":
        return <TriptopVisual />;
      default:
        return null;
    }
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 04 // THE WORK</span>
          </div>
          <span>SEVEN PRODUCTION PLATFORMS</span>
        </div>

        {/* Section Heading & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              PRODUCTION SOFTWARE CASSETTES
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Every project represents a real client deployment with distinct technical constraints — recurring payment engines, real-time message streams, high-volume database queries, and automated tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {[
              { id: "all", label: "ALL WORK (7)" },
              { id: "saas", label: "SAAS & COMMERCE (3)" },
              { id: "realtime", label: "REAL-TIME & SOCKETS (2)" },
              { id: "specialized", label: "DESKTOP & EXTENSIONS (2)" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg transition-all border ${
                  filter === f.id
                    ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md"
                    : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Project Scenes Stream (Varied Pacing, No 100vh lock) */}
        <div className="space-y-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                project.featured
                  ? "bg-[#090d16] border-white/[0.12] p-6 sm:p-10 lg:p-12 shadow-2xl"
                  : "bg-[#07090f] border-white/[0.08] p-6 sm:p-8 shadow-xl"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Project Narrative & Technical Context (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tracking-widest text-amber-400 uppercase font-semibold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                        ★ Flagship
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-slate-300 leading-snug">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Overview description */}
                  <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Verified Impact Bullets */}
                  <div className="space-y-2 pt-1">
                    {project.impactOutcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <FaCheckCircle className="text-amber-400 text-xs mt-1 shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand / Inspect Action */}
                  <div className="pt-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400 rounded-xl font-mono text-xs transition-colors"
                    >
                      <FaCogs className="text-xs" />
                      <span>INSPECT ARCHITECTURE & DATAFLOW</span>
                      <FaArrowRight size={10} />
                    </button>
                  </div>

                </div>

                {/* Right: SVG/HTML/CSS Interactive Visual Representation (6 cols) */}
                <div className="lg:col-span-6">
                  {renderProjectVisual(project.id)}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
