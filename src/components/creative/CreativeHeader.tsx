import React, { useState, useEffect } from "react";
import { FiDownload, FiBriefcase } from "react-icons/fi";

interface CreativeHeaderProps {
  onOpenRecruiterBrief: () => void;
}

export const CreativeHeader: React.FC<CreativeHeaderProps> = ({ onOpenRecruiterBrief }) => {
  const [scrolled, setScrolled] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand / Monogram */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="group flex items-center gap-2 text-slate-100 hover:text-amber-400 transition-colors"
            data-cursor="TOP"
          >
            <span className="font-extrabold text-sm tracking-wider uppercase">
              SANDEEP KUMAR
            </span>
            <span className="text-slate-600 font-normal">/</span>
            <span className="text-xs text-slate-400 tracking-normal hidden md:inline font-sans font-medium">
              Full Stack Developer
            </span>
          </a>

          {/* Status badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-[10px] text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE</span>
          </div>
        </div>

        {/* Center / Right: Technical Telemetry & Fast Direct Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Telemetry: Location & Time */}
          <div className="hidden xl:flex items-center gap-2 text-[11px] text-slate-400">
            <span>INDIA</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400/90 font-mono">{localTime ? `${localTime} IST` : "IST"}</span>
          </div>

          {/* Recruiter Quick Mode */}
          <button
            onClick={onOpenRecruiterBrief}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/70 rounded-md transition-all cursor-pointer shadow-xs"
            data-cursor="BRIEF"
            title="Open 30-Second Recruiter Brief"
          >
            <FiBriefcase className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">RECRUITER</span> BRIEF
          </button>

          {/* Resume Download */}
          <a
            href="/Sandeep_Kumar_Resume.pdf"
            download="Sandeep_Kumar_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 rounded-md transition-colors shadow-xs"
            data-cursor="RESUME"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Contact Anchor */}
          <a
            href="#contact"
            className="hidden sm:inline text-xs text-slate-400 hover:text-white transition-colors tracking-wide"
            data-cursor="TALK"
          >
            CONTACT →
          </a>
        </div>
      </div>
    </header>
  );
};
