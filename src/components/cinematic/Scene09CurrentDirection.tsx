export const Scene09CurrentDirection = () => {
  return (
    <section
      id="direction"
      className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 09 // CURRENT DIRECTION</span>
          </div>
          <span>HORIZON & TECHNICAL EVOLUTION</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            WHAT'S NEXT?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Good engineers continuously deepen their understanding of systems, concurrency, and architecture.
          </p>
        </div>

        {/* Understated Perspective Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#090d16] border border-white/[0.08] space-y-3">
            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
              DIRECTION 01
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              High-Concurrency & Distributed Backends
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Diving deeper into event-driven stream architectures, message queues (Redis/Kafka), and low-latency API gateway optimization.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#090d16] border border-white/[0.08] space-y-3">
            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
              DIRECTION 02
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Advanced Database Performance
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Refining partitioned PostgreSQL tables, complex analytical queries, connection pooling tuning, and zero-downtime replication.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#090d16] border border-white/[0.08] space-y-3">
            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
              DIRECTION 03
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Modern Full-Stack Tooling
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Strengthening end-to-end TypeScript architectures, micro-frontends, and automated cloud CI/CD delivery pipelines.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
