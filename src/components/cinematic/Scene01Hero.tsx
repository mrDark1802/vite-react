import { FaArrowDown, FaFileAlt, FaGithub, FaLinkedin, FaBolt } from "react-icons/fa";
import { PERSONAL_INFO } from "../../data/cinematicPortfolioData";

interface Scene01HeroProps {
  onOpenResumeModal: () => void;
  onToggleRecruiterMode: () => void;
}

export const Scene01Hero = ({ onOpenResumeModal, onToggleRecruiterMode }: Scene01HeroProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#05070a] overflow-hidden"
    >
      {/* Subtle atmospheric cinematic light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/[0.04] to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-500/[0.02] blur-[120px] pointer-events-none rounded-full" />

      {/* Top subtle scene identifier */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>SCENE 01 // PROLOGUE</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-emerald-400">{PERSONAL_INFO.availability}</span>
          <span>UNA, HP, INDIA</span>
        </div>
      </div>

      {/* Main Cinematic Title Card */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left: Text & Typography Reveal (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Small cinematic metadata */}
            <div className="inline-block font-mono text-xs sm:text-sm tracking-[0.25em] text-amber-400/90 uppercase font-semibold">
              {PERSONAL_INFO.title}
            </div>

            {/* Enormous Cinematic Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.98]">
              SANDEEP<br />
              <span className="text-slate-400 font-light">KUMAR</span>
            </h1>

            {/* Sub-label */}
            <p className="font-mono text-xs sm:text-sm tracking-wider text-slate-400">
              {PERSONAL_INFO.label}
            </p>

            {/* Positioning Statement */}
            <p className="text-lg sm:text-2xl text-slate-200 max-w-2xl font-normal leading-relaxed pt-2 border-l-2 border-amber-400/80 pl-4">
              "{PERSONAL_INFO.statement}"
            </p>

            {/* Years Experience & Products Shipped */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs font-mono">
              <div className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <span className="text-slate-400 text-[10px] uppercase block tracking-wider">Experience</span>
                <span className="text-base sm:text-lg font-bold text-amber-400">{PERSONAL_INFO.yearsOfExperience}</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <span className="text-slate-400 text-[10px] uppercase block tracking-wider">Production Output</span>
                <span className="text-base sm:text-lg font-bold text-slate-100">{PERSONAL_INFO.shippedProducts}</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <span className="text-slate-400 text-[10px] uppercase block tracking-wider">Status</span>
                <span className="text-base sm:text-lg font-bold text-emerald-400">Ready to Interview</span>
              </div>
            </div>

            {/* Cinematic CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#work"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm font-mono tracking-wider rounded-xl transition-all shadow-lg shadow-amber-500/10 active:scale-95"
              >
                EXPLORE WORK
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.12] hover:border-white/[0.2] font-mono text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2"
              >
                <FaFileAlt className="text-amber-400 text-xs" />
                <span>VIEW RESUME (PDF)</span>
              </button>

              <button
                onClick={onToggleRecruiterMode}
                className="px-4 py-3.5 text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <FaBolt size={12} className="text-amber-400" />
                <span>Recruiter Fast View</span>
              </button>
            </div>

          </div>

          {/* Right: Cinematic Portrait Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-amber-500/20 to-transparent opacity-40 blur-xl group-hover:opacity-70 transition-opacity" />
              
              <div className="relative rounded-2xl bg-[#090d16] border border-white/[0.1] p-4 sm:p-5 shadow-2xl space-y-4">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-white/[0.08]">
                  <img
                    src="/images/me.png"
                    alt="Sandeep Kumar"
                    className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-slate-300">
                    <span className="text-[10px] text-amber-400 tracking-widest block uppercase">Candidate Verified</span>
                    <span className="font-semibold text-white">Full Stack Engineer</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <FaGithub />
                    <span>mrDark1802</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <FaLinkedin />
                    <span>sandeep-mern</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scene transition prompt */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-t border-white/[0.06] pt-4">
        <span>SCROLL TO ENTER NARRATIVE</span>
        <a href="#engineer" className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors">
          <span>SCENE 02</span>
          <FaArrowDown size={10} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
