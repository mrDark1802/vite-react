import { FaCheckCircle } from "react-icons/fa";
import { PRODUCTION_IMPACT_STATEMENTS } from "../../data/cinematicPortfolioData";

export const Scene08Impact = () => {
  return (
    <section
      id="impact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 08 // PRODUCTION IMPACT</span>
          </div>
          <span className="text-emerald-400">VERIFIED ENGINEERING DELIVERABLES</span>
        </div>

        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            MEASURABLE PRODUCTION IMPACT
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Real software value is measured by business reliability, eliminated manual bottlenecks, and seamless transaction flow. Here is what my engineering directly produced across client products.
          </p>
        </div>

        {/* Impact Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTION_IMPACT_STATEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#090d16] border border-white/[0.08] hover:border-amber-400/40 transition-colors flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                    {item.area}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">{item.product}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
                  {item.headline}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {item.narrative}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-[11px] text-slate-400">{item.tech}</span>
                <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
