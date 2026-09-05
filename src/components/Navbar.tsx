import React, { useState, useEffect } from "react";
import { FaFileAlt, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About & Training", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#overview"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400 group-hover:border-amber-400 transition-colors">
            SK
          </div>
          <div>
            <div className="font-semibold text-slate-100 text-base tracking-tight flex items-center gap-2">
              <span>{PERSONAL_INFO.displayName}</span>
            </div>
            <p className="text-xs text-slate-400 font-mono hidden sm:block">
              Full Stack Engineer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-md transition-colors hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Availability Status */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          {/* Social Quick Links */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-lg" />
          </a>

          {/* Resume Download / View Button */}
          {onOpenResumeModal ? (
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400 rounded-lg text-xs font-mono font-medium transition-all"
            >
              <FaFileAlt className="text-xs" />
              <span>Resume (PDF)</span>
            </button>
          ) : (
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Sandeep_Kumar_Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400 rounded-lg text-xs font-mono font-medium transition-all"
            >
              <FaFileAlt className="text-xs" />
              <span>Resume (PDF)</span>
            </a>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenResumeModal ? (
            <button
              onClick={onOpenResumeModal}
              className="p-2 text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-md text-xs font-mono"
              aria-label="View Resume"
            >
              <FaFileAlt />
            </button>
          ) : (
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Sandeep_Kumar_Resume.pdf"
              className="p-2 text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-md text-xs font-mono"
              aria-label="Download Resume"
            >
              <FaFileAlt />
            </a>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1322] border-b border-white/10 px-4 pt-3 pb-5 space-y-3">
          <div className="flex items-center gap-2 py-2 px-3 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Sandeep_Kumar_Resume.pdf"
              className="flex items-center gap-2 px-3 py-1.5 bg-amber-500 text-slate-950 rounded-md text-xs font-semibold"
            >
              <FaFileAlt />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
