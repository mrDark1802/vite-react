import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { PERSONAL_INFO } from "../data/portfolioData";

interface FooterProps {
  onOpenResumeModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05080e] border-t border-white/10 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-bold text-white text-lg tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span>{PERSONAL_INFO.displayName}</span>
              <span className="text-amber-400 text-xs font-mono">• Full Stack Developer</span>
            </div>
            <p className="text-xs text-slate-400">
              MERN Stack, PostgreSQL, REST APIs & High-Throughput Payment Architecture
            </p>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Right Action */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-xs font-mono transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <FaArrowUp size={10} />
          </button>
        </div>

        {/* Bottom divider */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Sandeep Kumar. Built with React & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
            {onOpenResumeModal ? (
              <button
                onClick={onOpenResumeModal}
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <FaFilePdf size={12} />
                <span>Resume</span>
              </button>
            ) : (
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Sandeep_Kumar_Resume.pdf"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <FaFilePdf size={12} />
                <span>Resume</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
