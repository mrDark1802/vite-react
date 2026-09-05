import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TechnicalSnapshot } from "../components/TechnicalSnapshot";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { AboutAndEducation } from "../components/AboutAndEducation";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ResumeModal } from "../components/ResumeModal";

export default function Portfolio() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      {/* Fixed Navbar */}
      <Navbar onOpenResumeModal={handleOpenResume} />

      {/* Main Content Sections — Skills-First Hierarchy */}
      <main className="flex-1">
        <Hero onOpenResumeModal={handleOpenResume} />
        <TechnicalSnapshot />
        <Skills />
        <Projects />
        <Experience />
        <AboutAndEducation />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={handleOpenResume} />

      {/* Interactive In-App Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}
