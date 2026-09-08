import { useState, useEffect } from "react";
import { FaFileAlt, FaBars, FaTimes, FaBolt, FaFilm } from "react-icons/fa";
import { PERSONAL_INFO } from "../../data/cinematicPortfolioData";

interface CinematicNavbarProps {
  recruiterMode: boolean;
  onToggleRecruiterMode: () => void;
  onOpenResumeModal: () => void;
}

export const CinematicNavbar = ({
  recruiterMode,
  onToggleRecruiterMode,
  onOpenResumeModal,
}: CinematicNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "WORK", href: "#work" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "STACK", href: "#stack" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand identity - Cinematic moniker */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.12] flex items-center justify-center font-mono font-bold text-xs tracking-wider text-slate-200 group-hover:border-amber-400 group-hover:text-amber-400 transition-colors">
            SK
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-100 uppercase">
              {PERSONAL_INFO.displayName}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 hidden sm:block">
              FULL STACK ENGINEER
            </span>
          </div>
        </a>

        {/* Minimal Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-widest text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Recruiter Mode Switch + Resume CTA */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Recruiter Mode Toggle */}
          <button
            onClick={onToggleRecruiterMode}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
              recruiterMode
                ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20"
                : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border-white/[0.12]"
            }`}
            title="Toggle fast 30-second Recruiter Mode"
          >
            {recruiterMode ? <FaFilm className="text-xs" /> : <FaBolt className="text-amber-400 text-xs" />}
            <span>{recruiterMode ? "Cinematic Story Mode" : "Recruiter Fast Mode"}</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400 rounded-lg text-xs font-mono transition-colors"
          >
            <FaFileAlt className="text-xs" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleRecruiterMode}
            className={`p-2 rounded-lg text-xs font-mono border ${
              recruiterMode
                ? "bg-amber-500 text-slate-950 border-amber-400"
                : "bg-white/[0.04] text-amber-400 border-white/[0.12]"
            }`}
            aria-label="Toggle Recruiter Mode"
          >
            {recruiterMode ? <FaFilm size={14} /> : <FaBolt size={14} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/[0.04] border border-white/[0.12] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07090e] border-b border-white/[0.1] px-5 pt-4 pb-6 space-y-4">
          <div className="grid grid-cols-1 gap-1 font-mono text-xs tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-slate-200 hover:text-amber-400 hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                onToggleRecruiterMode();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 bg-white/[0.05] border border-white/[0.1] rounded-lg text-xs font-mono text-slate-300"
            >
              {recruiterMode ? <FaFilm size={12} /> : <FaBolt size={12} className="text-amber-400" />}
              <span>{recruiterMode ? "Exit Recruiter Mode" : "Recruiter Fast Mode"}</span>
            </button>

            <button
              onClick={() => {
                onOpenResumeModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs font-mono"
            >
              <FaFileAlt size={12} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
