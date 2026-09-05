import React from "react";
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting - subtle, dark slate with amber tone */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Positioning & Call to Action (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Super-title / Status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-amber-300 font-medium">{PERSONAL_INFO.title}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">3+ Years Production Exp</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 leading-[1.12]">
              Engineering scalable <span className="text-amber-400">REST APIs</span>, payment backends & <span className="text-slate-200 underline decoration-amber-400/40 decoration-wavy decoration-2">real-time systems</span>.
            </h1>

            {/* Subtitle / Positioning paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.displayName}</strong>. A backend-leaning Full Stack Developer with 3+ years of experience taking SaaS & e-commerce platforms from prototype to production. I architect resilient PostgreSQL/MongoDB schemas, Stripe subscription billing engines, and low-latency Socket.io real-time systems.
            </p>

            {/* Quick Proof Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-2xl font-mono font-bold text-amber-400">3+ Years</div>
                <div className="text-xs text-slate-400 mt-0.5">Production Experience</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-2xl font-mono font-bold text-slate-100">6+ Shipped</div>
                <div className="text-xs text-slate-400 mt-0.5">Client & SaaS Platforms</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-2xl font-mono font-bold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">End-to-End Ownership</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-[0.98]"
              >
                <span>View Featured Work</span>
                <FaArrowRight className="text-xs" />
              </a>

              {onOpenResumeModal ? (
                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-medium rounded-xl text-sm transition-all"
                >
                  <FaDownload className="text-xs text-amber-400" />
                  <span>Resume (PDF)</span>
                </button>
              ) : (
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Sandeep_Kumar_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-medium rounded-xl text-sm transition-all"
                >
                  <FaDownload className="text-xs text-amber-400" />
                  <span>Resume (PDF)</span>
                </a>
              )}

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-slate-400 hover:text-white font-medium text-sm transition-colors"
              >
                <FaEnvelope className="text-xs" />
                <span>Contact Directly</span>
              </a>
            </div>

            {/* Direct Connect Handles */}
            <div className="flex items-center gap-6 pt-2 text-xs font-mono text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <FaGithub />
                <span>{PERSONAL_INFO.githubHandle}</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <FaLinkedin />
                <span>{PERSONAL_INFO.linkedinHandle}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Craft Card with Verified Credentials (5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-[#0e1424] border border-slate-800/80 rounded-2xl p-6 shadow-2xl space-y-5">
              
              {/* Card Header & Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-amber-500/30 bg-slate-800 shrink-0">
                  <img
                    src="/images/me.png"
                    alt="Sandeep Kumar"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 border-2 border-[#0e1424] rounded-full"></div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <FaCheckCircle className="text-amber-400 text-xs" title="Verified Resume Profile" />
                  </div>
                  <p className="text-xs text-slate-400 font-mono">Full Stack Engineer</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <span>📍</span> {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Verified Specialization Badges */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Core Engineering Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "PostgreSQL", "React.js", "Express.js", "Stripe API", "MongoDB", "Socket.io", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recruiter Highlights Box */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 space-y-2">
                <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>Recent Work History</span>
                  <span className="text-[10px] font-mono text-amber-400">2022 – 2026</span>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-200 font-medium">The Brihaspati Infotech</span> • Built Stripe billing platform, marketplace real-time chat, and high-performance product catalog APIs.
                </div>
              </div>

              {/* Quick Contact Line */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Ready to Interview
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-amber-400 hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
