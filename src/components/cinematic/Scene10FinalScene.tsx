import { useState } from "react";
import { FaLinkedin, FaGithub, FaCopy, FaCheck, FaFileAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { PERSONAL_INFO } from "../../data/cinematicPortfolioData";

interface Scene10FinalSceneProps {
  onOpenResumeModal: () => void;
}

export const Scene10FinalScene = ({ onOpenResumeModal }: Scene10FinalSceneProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-t border-white/[0.08] relative"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 10 // FINALE & CREDITS</span>
          </div>
          <span className="text-emerald-400">READY FOR NEW CHALLENGES</span>
        </div>

        {/* Cinematic Title & Call To Action */}
        <div className="space-y-6 max-w-4xl">
          <div className="font-mono text-xs sm:text-sm tracking-[0.25em] text-amber-400 uppercase font-semibold">
            AVAILABLE FOR FULL STACK & BACKEND ROLES
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            LET'S BUILD SOMETHING REAL.
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Whether you are looking for a reliable Full Stack Engineer to lead billing architecture, scale real-time chat, or build end-to-end web applications, I am ready to contribute immediately.
          </p>
        </div>

        {/* Direct Connect Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 font-mono text-xs">
          
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-amber-400/40 transition-colors flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] text-slate-400 uppercase block tracking-wider">Direct Email</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-semibold text-white hover:text-amber-300 transition-colors truncate block mt-1"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
              <button
                onClick={handleCopyEmail}
                className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
              >
                {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
              </button>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[11px] text-slate-400 hover:text-white">
                Mailto ↗
              </a>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-amber-400/40 transition-colors flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] text-slate-400 uppercase block tracking-wider">Phone & WhatsApp</span>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors truncate block mt-1"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
              <a
                href="https://wa.me/917018614030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
              >
                <FaWhatsapp />
                <span>WhatsApp ↗</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="text-[11px] text-slate-400 hover:text-white"
              >
                {copiedPhone ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* LinkedIn Profile */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-sky-500/40 transition-colors flex flex-col justify-between space-y-4 group"
          >
            <div>
              <span className="text-[10px] text-slate-400 uppercase block tracking-wider">Professional Network</span>
              <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors block mt-1">
                LinkedIn Profile
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-slate-400 group-hover:text-sky-400">
              <span className="text-[11px]">linkedin.com/in/sandeep-mern</span>
              <FaLinkedin />
            </div>
          </a>

          {/* GitHub Profile */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-slate-500 transition-colors flex flex-col justify-between space-y-4 group"
          >
            <div>
              <span className="text-[10px] text-slate-400 uppercase block tracking-wider">Source Code Repository</span>
              <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors block mt-1">
                GitHub Repositories
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-slate-400 group-hover:text-white">
              <span className="text-[11px]">github.com/mrDark1802</span>
              <FaGithub />
            </div>
          </a>

        </div>

        {/* Film Credits / Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-slate-200 font-bold tracking-wider">
              {PERSONAL_INFO.displayName} • {PERSONAL_INFO.title}
            </div>
            <div className="text-[11px] text-slate-400">
              UNA, HIMACHAL PRADESH, INDIA • OPEN FOR GLOBAL OPPORTUNITIES
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 text-amber-400 hover:underline py-1"
            >
              <FaFileAlt size={11} />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <FaArrowUp size={10} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
