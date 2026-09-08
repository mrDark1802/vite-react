import { FaBolt, FaDownload, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { PERSONAL_INFO, CINEMATIC_PROJECTS, TECH_STACK_CATEGORIES, EDUCATION_CREDENTIALS } from "../../data/cinematicPortfolioData";

interface RecruiterModeViewProps {
  onExitRecruiterMode: () => void;
  onOpenResumeModal: () => void;
}

export const RecruiterModeView = ({ onExitRecruiterMode, onOpenResumeModal }: RecruiterModeViewProps) => {
  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#05070a] min-h-screen text-slate-100 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Recruiter Mode Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-amber-300">
            <FaBolt className="text-amber-400 text-base shrink-0" />
            <div>
              <span className="font-bold tracking-wider uppercase block">Recruiter Fast View Active</span>
              <span className="text-slate-300 text-[11px] font-sans">
                Streamlined 30-second executive summary of candidate skills, production output, and work history.
              </span>
            </div>
          </div>

          <button
            onClick={onExitRecruiterMode}
            className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs font-mono hover:bg-amber-400 transition-colors w-fit"
          >
            Switch to Cinematic Story Mode
          </button>
        </div>

        {/* Executive Summary Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-white/[0.1] space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <div className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                {PERSONAL_INFO.title}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                {PERSONAL_INFO.displayName}
              </h1>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                📍 {PERSONAL_INFO.location} • 📞 {PERSONAL_INFO.phone} • ✉️ {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                ● {PERSONAL_INFO.availability}
              </span>
              <button
                onClick={onOpenResumeModal}
                className="px-4 py-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.15] text-slate-200 font-bold rounded-xl text-xs font-mono flex items-center gap-2 transition-colors"
              >
                <FaFileAlt size={11} className="text-amber-400" />
                <span>View Resume</span>
              </button>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Sandeep_Kumar_Resume.pdf"
                className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs font-mono flex items-center gap-2 hover:bg-amber-400 transition-colors"
              >
                <FaDownload size={11} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {PERSONAL_INFO.professionalSummary}
          </p>

          {/* Quick Connect Row */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/40 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
            >
              <FaEnvelope className="text-amber-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-emerald-400/40 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
            >
              <FaPhoneAlt className="text-emerald-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-sky-400/40 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
            >
              <FaLinkedin className="text-sky-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/40 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Experience</span>
              <span className="text-base font-bold text-amber-400">{PERSONAL_INFO.yearsOfExperience}</span>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Shipped Products</span>
              <span className="text-base font-bold text-slate-100">{PERSONAL_INFO.shippedProducts}</span>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Primary Core</span>
              <span className="text-base font-bold text-slate-100">Node · Postgres · React</span>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Key Integration</span>
              <span className="text-base font-bold text-amber-300">Stripe & WebSockets</span>
            </div>
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <h2 className="text-xl font-bold text-white tracking-tight font-mono">
              TECHNICAL EXPERTISE MATRIX
            </h2>
            <span className="text-xs font-mono text-slate-400">All technologies verified in production</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            {TECH_STACK_CATEGORIES.map((cat) => (
              <div key={cat.name} className="p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-3">
                <div className="font-bold text-white tracking-wider text-sm border-b border-white/[0.06] pb-2 text-amber-400">
                  {cat.name}
                </div>
                <div className="space-y-1.5">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="flex items-center justify-between text-slate-300">
                      <span className={s.highlight ? "font-bold text-amber-300" : ""}>{s.name}</span>
                      <span className="text-[10px] text-slate-400">{s.highlight ? "Core" : "Applied"}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipped Projects Summary Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <h2 className="text-xl font-bold text-white tracking-tight font-mono">
              SHIPPED PRODUCTION PRODUCTS
            </h2>
            <span className="text-xs font-mono text-slate-400">7 Client & SaaS Engagements</span>
          </div>

          <div className="space-y-3">
            {CINEMATIC_PROJECTS.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-amber-400/40 transition-colors space-y-2.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base font-bold text-white">{p.title}</span>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {p.overview}
                </p>

                <div className="pt-2 border-t border-white/[0.04] text-xs font-mono text-amber-300 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
                  <span>{p.impactOutcomes[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education Brief */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          
          <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-4">
            <div className="font-bold text-white tracking-wider text-sm text-amber-400 border-b border-white/[0.06] pb-2">
              WORK HISTORY
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-white">Full Stack Developer (MERN Stack)</div>
              <div className="text-slate-300">The Brihaspati Infotech Pvt. Ltd., Mohali</div>
              <div className="text-[11px] text-amber-400">Dec 2022 – Jun 2026 (3.5+ Years)</div>
              <p className="text-slate-400 pt-2 font-sans font-light leading-relaxed text-xs">
                Led REST API development, Stripe recurring billing, multi-role auth, and Socket.io live chat across 6 shipped client products.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-4">
            <div className="font-bold text-white tracking-wider text-sm text-amber-400 border-b border-white/[0.06] pb-2">
              EDUCATION & CREDENTIALS
            </div>
            <div className="space-y-3">
              {EDUCATION_CREDENTIALS.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-slate-200 font-semibold">{edu.degree}</div>
                  <div className="text-slate-400 text-[11px]">{edu.institution} ({edu.period})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
