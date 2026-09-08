import { FaCheckCircle } from "react-icons/fa";
import { CORE_ENGINEERING_PILLARS } from "../../data/cinematicPortfolioData";

export const Scene02TheEngineer = () => {
  return (
    <section
      id="engineer"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 02 // THE ENGINEER</span>
          </div>
          <span>PRODUCTION ARCHITECTURE & SPECIALIZATION</span>
        </div>

        {/* Editorial Headline Statement */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            I BUILD SOFTWARE THAT HAS TO WORK.
          </h2>
          <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed">
            In software engineering, elegance without reliability is worthless. My work sits at the intersection of <strong className="text-white font-semibold">backend durability</strong>, <strong className="text-white font-semibold">payment systems</strong>, and <strong className="text-white font-semibold">real-time communication</strong> — building infrastructure that powers client revenue and high-concurrency workflows.
          </p>
        </div>

        {/* Narrative Split: Professional Philosophy + Core Architecture Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          
          {/* Left: Editorial Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            <p>
              Over 3+ years at <strong className="text-white font-medium">The Brihaspati Infotech</strong>, I have taken six client software platforms from architectural prototype to production reality. I do not stop at front-end presentation: I design the relational schemas in PostgreSQL, write the parameterized query indexes, integrate idempotent Stripe webhooks, and partition Socket.io WebSocket rooms.
            </p>
            <p>
              Whether engineering the sole recurring subscription engine that collects 100% of a SaaS platform's revenue or developing role-segregated marketplace dashboards with zero off-platform chat leakage, my focus remains steady:
            </p>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 font-mono text-xs sm:text-sm text-slate-200">
              <div className="text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
                Engineering Standard
              </div>
              <p className="italic leading-normal">
                "Own features end-to-end — from database indexing and REST design to live WebSockets, error handling, and production deployment."
              </p>
            </div>
          </div>

          {/* Right: Technical Domains List (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              Primary Engineering Systems
            </div>

            <div className="space-y-3">
              {CORE_ENGINEERING_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0a0d16] border border-white/[0.08] hover:border-amber-400/40 transition-colors group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg group-hover:text-amber-300 transition-colors">
                      <FaCheckCircle className="text-amber-400 text-xs shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light pl-5">
                    {pillar.description}
                  </p>

                  <div className="pl-5 pt-1">
                    <span className="inline-block text-[11px] font-mono text-amber-400/80 bg-amber-400/[0.05] px-2.5 py-0.5 rounded border border-amber-400/20">
                      {pillar.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Status Bar */}
            <div className="pt-4 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/[0.06]">
              <span>3+ Years Professional Experience</span>
              <span className="text-emerald-400">Available Immediately</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
