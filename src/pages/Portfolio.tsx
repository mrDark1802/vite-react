import { useState } from "react";
import { CustomCursor } from "../components/creative/CustomCursor";
import { ScrollExperience } from "../components/creative/ScrollExperience";
import { CreativeHeader } from "../components/creative/CreativeHeader";
import { CreativeHero } from "../components/creative/CreativeHero";
import { InteractiveWorkGallery } from "../components/creative/InteractiveWorkGallery";
import { SystemsIdentity } from "../components/creative/SystemsIdentity";
import { InteractiveTechEcosystem } from "../components/creative/InteractiveTechEcosystem";
import { FilmicTimeline } from "../components/creative/FilmicTimeline";
import { CreativeContact } from "../components/creative/CreativeContact";
import { ProjectDetailDrawer } from "../components/creative/ProjectDetailDrawer";
import { RecruiterQuickDrawer } from "../components/creative/RecruiterQuickDrawer";
import { ResumeModal } from "../components/ResumeModal";
import { Project } from "../data/cinematicPortfolioData";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isRecruiterBriefOpen, setIsRecruiterBriefOpen] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-amber-400/25 selection:text-amber-200 relative overflow-x-hidden font-sans">
      {/* Custom Lerped Magnetic Cursor */}
      <CustomCursor />

      {/* Scroll Progress & Chapter Tracker */}
      <ScrollExperience />

      {/* Minimal Edge Header */}
      <CreativeHeader
        onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
      />

      {/* Main Creative Storyline */}
      <main className="flex-1">
        {/* 00. Prologue: Minimal kinetic opening & core engineering thesis */}
        <CreativeHero />

        {/* 01. The Centerpiece: Projects at Scale with live interactive architecture monitor */}
        <InteractiveWorkGallery
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 02. Systems Architecture Philosophy (Frontend -> API -> DB -> Realtime -> Runtime) */}
        <SystemsIdentity />

        {/* 03. Typography-Driven Technology Ecosystem & Production Inspector */}
        <InteractiveTechEcosystem />

        {/* 04. Filmic Engineering Timeline (2022 — 2026 at The Brihaspati Infotech) */}
        <FilmicTimeline />

        {/* 05. The Finale: Massive typographic call-to-action & direct communication channels */}
        <CreativeContact />
      </main>

      {/* Seamless In-Place Case Study Drawer (ESC to close) */}
      <ProjectDetailDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 30-Second Fast Recruiter Briefing Drawer */}
      <RecruiterQuickDrawer
        isOpen={isRecruiterBriefOpen}
        onClose={() => setIsRecruiterBriefOpen(false)}
      />

      {/* In-App Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
