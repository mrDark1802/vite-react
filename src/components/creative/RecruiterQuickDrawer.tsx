import React, { useEffect } from "react";
import { FiX, FiDownload, FiMail, FiPhone, FiCheckCircle, FiBookOpen } from "react-icons/fi";
import { SiLinkedin, SiGithub } from "react-icons/si";

interface RecruiterQuickDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterQuickDrawer: React.FC<RecruiterQuickDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        className="relative w-full max-w-xl h-full bg-[#0b0f19] border-l border-slate-800 shadow-2xl flex flex-col z-10 overflow-hidden animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recruiter-brief-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#090d16]/90 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span id="recruiter-brief-title" className="text-xs font-bold tracking-widest uppercase text-white">
              RECRUITER 30-SECOND EXECUTIVE BRIEF
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
          >
            <span>ESC</span>
            <FiX className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 font-mono text-xs">
          {/* Quick Snapshot Card */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-base font-extrabold text-white">SANDEEP KUMAR</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Una, Himachal Pradesh, India</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold">
                IMMEDIATELY AVAILABLE
              </span>
            </div>
            <div className="text-amber-400 font-bold text-xs">
              Full Stack Developer (MERN Stack)
            </div>
            <div className="text-slate-300 leading-relaxed font-sans text-sm">
              Backend-leaning Full Stack Developer with 3+ years of experience taking SaaS and e-commerce platforms from prototype to production — REST APIs, PostgreSQL/MongoDB schema design, and secure payment infrastructure built to handle real transaction volume. Built the Stripe billing engine powering a SaaS platform's subscription revenue and the multi-role auth plus real-time chat system running a live multi-vendor marketplace. Owns features end-to-end, from schema design through deployment, across six shipped client products.
            </div>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase">EXPERIENCE</span>
              <div className="text-white font-bold text-sm">3+ YEARS</div>
              <div className="text-slate-400 text-[11px]">The Brihaspati Infotech (Dec 2022 – Jun 2026)</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase">SHIPPED PRODUCTS</span>
              <div className="text-white font-bold text-sm">6+ CLIENT PRODUCTS</div>
              <div className="text-slate-400 text-[11px]">SaaS, Marketplace, Social, Extension</div>
            </div>
          </div>

          {/* Core Skills Categorized Strictly from Resume */}
          <div className="space-y-3">
            <div className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">
              CORE SKILLS (FROM RESUME)
            </div>
            <div className="space-y-2">
              {[
                { category: "Languages", text: "JavaScript (ES6+), TypeScript (working knowledge), PHP, HTML5, CSS3" },
                { category: "Backend", text: "Node.js, Express.js, REST API Design, Socket.io, MVC Architecture, WordPress" },
                { category: "Databases", text: "PostgreSQL, MongoDB, MySQL, Firebase Realtime Database" },
                { category: "Frontend", text: "React.js, Redux, Tailwind CSS, Bootstrap, jQuery, Ajax" },
                { category: "Integrations", text: "Stripe API, Shopify API, JWT Authentication, Electron.js, Chrome Extension APIs" },
                { category: "Cloud & Tools", text: "AWS S3, Firebase, Git, GitHub, Postman, Cron Jobs / Task Scheduling" }
              ].map((group, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 flex items-start gap-2.5">
                  <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">{group.category}: </span>
                    <span className="text-slate-400">{group.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects Summary Strictly from Resume */}
          <div className="space-y-3">
            <div className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">
              KEY PROJECTS (EXACT DEFINITIONS)
            </div>
            <div className="space-y-2 text-[11px]">
              {[
                { title: "NoblAi", desc: "SaaS subscription management panel — designed and integrated the full Stripe billing flow for recurring plans and one-time payments." },
                { title: "Online Marketplace", desc: "Multi-role dashboards (admin/vendor/customer) with real-time chat via Socket.io, built to give each user type a distinct, permission-scoped experience." },
                { title: "FriendZone", desc: "Real-time social platform with Socket.io chat, message translation, and authentication." },
                { title: "Extreme Performance", desc: "REST APIs and admin panel on Node.js + PostgreSQL for e-commerce catalog and order management at scale." },
                { title: "BetterEarth", desc: "UI redesign, admin panel rebuild, and Firebase data migration for an existing production product." },
                { title: "Renner Otto", desc: "Electron-based desktop application for legal case and attorney management." },
                { title: "Triptop", desc: "Chrome extension with workflow automation, multi-destination search, and lazy-loading for travel use cases." }
              ].map((proj, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="text-amber-400 font-bold uppercase">{proj.title}: </span>
                  <span className="text-slate-300 font-sans leading-relaxed">{proj.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-slate-300 font-bold uppercase text-[11px]">
              <FiBookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>EDUCATION & TRAINING</span>
            </div>
            <div className="space-y-1.5 text-slate-400 text-[11px]">
              <div>
                <span className="text-white font-semibold">10+2 (Non-Medical)</span> — Himachal Pradesh Open School (2018 – 2019)
              </div>
              <div>
                <span className="text-white font-semibold">Core PHP, HTML & JavaScript</span> — Industrial Training, Excellence Technology, Mohali (6 Months)
              </div>
              <div className="pt-1 text-slate-500">
                <span className="text-slate-400 font-semibold">Languages: </span>English | Hindi | Punjabi
              </div>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              FASTEST CHANNELS
            </div>
            <div className="grid grid-cols-1 gap-2">
              <a
                href="mailto:skheergr8@gmail.com"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FiMail className="w-3.5 h-3.5 text-amber-400" />
                  <span>skheergr8@gmail.com</span>
                </div>
                <span className="text-[10px] text-slate-500">EMAIL</span>
              </a>

              <a
                href="tel:+917018614030"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FiPhone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+91 7018614030</span>
                </div>
                <span className="text-[10px] text-slate-500">PHONE / WA</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://www.linkedin.com/in/sandeep-mern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-white text-center justify-center transition-colors"
                >
                  <SiLinkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://github.com/mrDark1802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white text-center justify-center transition-colors"
                >
                  <SiGithub className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-5 border-t border-slate-800 bg-[#090d16]">
          <a
            href="/Sandeep_Kumar_Resume.pdf"
            download="Sandeep_Kumar_Resume.pdf"
            className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-mono text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
          >
            <FiDownload className="w-4 h-4" />
            <span>DOWNLOAD VERIFIED RESUME (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
