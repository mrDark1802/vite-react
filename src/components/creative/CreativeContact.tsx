import React, { useState } from "react";
import { FiCopy, FiCheck, FiDownload, FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";

export const CreativeContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "skheergr8@gmail.com";
  const phone = "+91 7018614030";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-amber-400 font-bold">05 // ENGAGE</span>
          <span className="text-slate-600">/</span>
          <span>INITIATE CONTACT</span>
        </div>
        <div className="text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>AVAILABLE IMMEDIATELY</span>
        </div>
      </div>

      {/* Massive Typographic Headline */}
      <div className="py-16 sm:py-24">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
          LET'S BUILD<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
            SOMETHING REAL.
          </span>
        </h2>
        <p className="mt-6 text-slate-300 max-w-2xl text-base sm:text-lg font-sans leading-relaxed">
          Looking for a backend-leaning Full Stack Engineer who understands database schemas, payment pipelines, and real-time systems from day one? Let's connect.
        </p>
      </div>

      {/* Interactive Communication Hub */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
        {/* Email Direct Action Box */}
        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <FiMail className="w-4 h-4 text-amber-400" />
              <span>DIRECT EMAIL</span>
            </span>
            <span className="text-slate-500">PRIMARY CONTACT</span>
          </div>

          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight break-all">
            {email}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              data-cursor="COMPOSE"
            >
              <span>SEND EMAIL</span>
              <FiArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-2 transition-colors cursor-pointer"
              data-cursor="COPY"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <FiCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">COPIED</span>
                </>
              ) : (
                <>
                  <FiCopy className="w-4 h-4" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Connect & Channels */}
        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <FiPhone className="w-4 h-4 text-emerald-400" />
              <span>DIRECT CHANNELS & RESUME</span>
            </span>
            <span className="text-slate-500">FAST RESPONSE</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href="https://wa.me/917018614030"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-slate-200 text-xs flex items-center justify-between group transition-colors"
              data-cursor="CHAT"
            >
              <div className="flex items-center gap-2.5">
                <SiWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP</span>
              </div>
              <FiArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/sandeep-mern"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-slate-200 text-xs flex items-center justify-between group transition-colors"
              data-cursor="CONNECT"
            >
              <div className="flex items-center gap-2.5">
                <SiLinkedin className="w-4 h-4 text-blue-400" />
                <span>LINKEDIN</span>
              </div>
              <FiArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
            </a>

            <a
              href="https://github.com/mrDark1802"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-slate-200 text-xs flex items-center justify-between group transition-colors"
              data-cursor="CODE"
            >
              <div className="flex items-center gap-2.5">
                <SiGithub className="w-4 h-4 text-slate-300" />
                <span>GITHUB</span>
              </div>
              <FiArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
            </a>

            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-slate-200 text-xs flex items-center justify-between group transition-colors"
              data-cursor="CALL"
            >
              <div className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-amber-400" />
                <span>PHONE</span>
              </div>
              <FiArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
            </a>
          </div>

          <a
            href="/Sandeep_Kumar_Resume.pdf"
            download="Sandeep_Kumar_Resume.pdf"
            className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-amber-400/50 hover:border-amber-400 text-amber-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer mt-2"
            data-cursor="DOWNLOAD"
          >
            <FiDownload className="w-4 h-4" />
            <span>DOWNLOAD VERIFIED RESUME (PDF)</span>
          </a>
        </div>
      </div>

      {/* Sub-Footer Signature */}
      <div className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
        <div>
          SANDEEP KUMAR © {new Date().getFullYear()} • FULL STACK SOFTWARE ENGINEER
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>REACT 19 • TAILWIND • VITE</span>
          <span className="text-slate-700">•</span>
          <span className="text-emerald-400">HIGH-PERFORMANCE ARCHITECTURE</span>
        </div>
      </div>
    </footer>
  );
};
