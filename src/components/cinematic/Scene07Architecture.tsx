import { useState } from "react";
import { FaArrowDown, FaServer, FaDatabase, FaCreditCard, FaBolt, FaFire, FaExchangeAlt } from "react-icons/fa";

type BranchType = "STRIPE" | "SOCKETIO" | "FIREBASE" | "CRON";

export const Scene07Architecture = () => {
  const [activeBranch, setActiveBranch] = useState<BranchType>("STRIPE");

  const branchDetails = {
    STRIPE: {
      title: "Stripe Recurring Billing & Webhook Gateway",
      flow: "Client initiates subscription -> Express issues checkout session -> Stripe emits signed webhook -> Node verifies HMAC -> Database records license token.",
      rationale: "Idempotent event handling ensures zero double-billing or dropped payment subscriptions.",
      tech: "Stripe API • Webhook HMAC • PostgreSQL Transactions"
    },
    SOCKETIO: {
      title: "Socket.io Bi-Directional WebSocket Cluster",
      flow: "Client establishes WSS connection with JWT auth -> Node server authenticates and assigns socket to private conversation room -> Sub-100ms live message relay -> Async persistence to MongoDB.",
      rationale: "Eliminates off-platform communication leakage by keeping all vendor-customer chats on-platform.",
      tech: "Socket.io • Rooms • MongoDB Cursors"
    },
    FIREBASE: {
      title: "Firebase Real-Time Reactive Listeners",
      flow: "Admin dashboard subscribes to Firebase WebSocket channels -> Changes update UI in real-time -> Seamless fallback and dual-write migration integrity.",
      rationale: "Delivers zero-latency administrative status updates without constant HTTP polling.",
      tech: "Firebase Realtime DB • React Hooks"
    },
    CRON: {
      title: "Automated Cron Task Synchronization Pipeline",
      flow: "Scheduled cron daemon triggers worker process -> Worker fetches delta updates from third-party APIs -> Sanitizes and syncs data into PostgreSQL/MongoDB.",
      rationale: "Removes repetitive manual operations work and guarantees synchronized state across partner catalogs.",
      tech: "Node-Cron • REST APIs • Database Upserts"
    }
  };

  return (
    <section
      id="architecture"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Scene Tag */}
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-widest border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SCENE 07 // SYSTEM ARCHITECTURE UNDER THE HOOD</span>
          </div>
          <span>END-TO-END DATAFLOW VISUALIZATION</span>
        </div>

        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            ENGINEERING UNDER THE HOOD
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            A production software system is more than frontend components. Here is how I structure client-server boundaries, validation layers, database connections, and third-party integrations.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Core Pipeline Nodes (6 cols) */}
          <div className="lg:col-span-6 space-y-3 font-mono text-xs">
            
            {/* Step 1: Client */}
            <div className="p-4 rounded-2xl bg-[#090d16] border border-white/[0.1] flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest block">LAYER 01 // CLIENT</span>
                <span className="text-sm font-bold text-white font-mono">React.js · Tailwind CSS · Redux</span>
              </div>
              <span className="text-[10px] text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded">Component State</span>
            </div>

            <div className="flex justify-center py-1">
              <FaArrowDown className="text-amber-400/80 animate-bounce text-xs" />
            </div>

            {/* Step 2: Gateway */}
            <div className="p-4 rounded-2xl bg-[#090d16] border border-white/[0.1] flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest block">LAYER 02 // TRANSPORT</span>
                <span className="text-sm font-bold text-white font-mono">RESTful Endpoints & WebSocket Channels</span>
              </div>
              <span className="text-[10px] text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded">HTTPS / WSS</span>
            </div>

            <div className="flex justify-center py-1">
              <FaArrowDown className="text-amber-400/80 text-xs" />
            </div>

            {/* Step 3: Backend Runtime */}
            <div className="p-4 rounded-2xl bg-[#090d16] border border-amber-500/30 flex items-center justify-between shadow-xl ring-1 ring-amber-500/10">
              <div>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest block">LAYER 03 // SERVER LOGIC</span>
                <span className="text-sm font-bold text-amber-300 font-mono">Node.js · Express.js · MVC Middleware</span>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  JWT Verification • Input Sanitization • Error Handling
                </div>
              </div>
              <FaServer className="text-amber-400 text-lg" />
            </div>

            <div className="flex justify-center py-1">
              <FaArrowDown className="text-amber-400/80 text-xs" />
            </div>

            {/* Step 4: Storage */}
            <div className="p-4 rounded-2xl bg-[#090d16] border border-white/[0.1] flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest block">LAYER 04 // DATA PERSISTENCE</span>
                <span className="text-sm font-bold text-white font-mono">PostgreSQL · MongoDB · AWS S3</span>
              </div>
              <FaDatabase className="text-slate-400 text-lg" />
            </div>

          </div>

          {/* Right: Interactive Branch Selector & Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Inspect Integration Subsystems
            </div>

            {/* Branch Buttons */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {(
                [
                  { id: "STRIPE", label: "STRIPE PAYMENTS", icon: <FaCreditCard /> },
                  { id: "SOCKETIO", label: "SOCKET.IO CHAT", icon: <FaBolt /> },
                  { id: "FIREBASE", label: "FIREBASE REALTIME", icon: <FaFire /> },
                  { id: "CRON", label: "CRON SCHEDULER", icon: <FaExchangeAlt /> },
                ] as const
              ).map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBranch(b.id)}
                  className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all ${
                    activeBranch === b.id
                      ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md"
                      : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{b.icon}</span>
                  <span className="truncate">{b.label}</span>
                </button>
              ))}
            </div>

            {/* Branch Detailed Card */}
            <div className="rounded-3xl bg-[#090d16] border border-white/[0.1] p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  Integration Deep-Dive
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight font-mono">
                  {branchDetails[activeBranch].title}
                </h3>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                  Event & Execution Flow:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed bg-black/60 p-3.5 rounded-xl border border-white/[0.06]">
                  {branchDetails[activeBranch].flow}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 font-sans">
                <span className="font-mono text-slate-400 uppercase text-[11px] block">
                  Engineering Rationale:
                </span>
                <p>{branchDetails[activeBranch].rationale}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-amber-400">
                <span>{branchDetails[activeBranch].tech}</span>
                <span className="text-emerald-400">Verified</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
