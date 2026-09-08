import React from "react";

interface ProjectArchitectureDiagramProps {
  projectId: string;
  className?: string;
}

export const ProjectArchitectureDiagram: React.FC<ProjectArchitectureDiagramProps> = ({
  projectId,
  className = ""
}) => {
  switch (projectId) {
    case "noblai":
      return (
        <div className={`relative w-full rounded-xl bg-slate-950/90 border border-slate-800/80 p-6 font-mono overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              NOBLAI // STRIPE BILLING & PLAN MANAGEMENT
            </span>
            <span className="text-amber-400/90 text-[10px]">RECURRING & ONE-TIME PAYMENTS</span>
          </div>

          <svg viewBox="0 0 600 240" className="w-full h-auto mt-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridNobl" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridNobl)" />

            {/* Nodes */}
            <g transform="translate(20, 90)">
              <rect width="110" height="60" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              <text x="55" y="26" fill="#f8fafc" fontSize="10" textAnchor="middle" fontWeight="bold">REACT DASHBOARD</text>
              <text x="55" y="44" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Plan Management</text>
            </g>

            <g transform="translate(180, 90)">
              <rect width="115" height="60" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="57" y="26" fill="#fcd34d" fontSize="10" textAnchor="middle" fontWeight="bold">NODE / EXPRESS</text>
              <text x="57" y="44" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Checkout Session</text>
            </g>

            <g transform="translate(345, 30)">
              <rect width="115" height="60" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
              <text x="57" y="26" fill="#a5b4fc" fontSize="10" textAnchor="middle" fontWeight="bold">STRIPE API</text>
              <text x="57" y="44" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Billing Flow</text>
            </g>

            <g transform="translate(345, 150)">
              <rect width="115" height="60" rx="8" fill="#0f172a" stroke="#f59e0b" strokeDasharray="3 3" strokeWidth="1.5" />
              <text x="57" y="26" fill="#fbbf24" fontSize="10" textAnchor="middle" fontWeight="bold">WEBHOOK LISTENER</text>
              <text x="57" y="44" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Payment Events</text>
            </g>

            <g transform="translate(480, 90)">
              <rect width="105" height="60" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="52" y="26" fill="#6ee7b7" fontSize="10" textAnchor="middle" fontWeight="bold">POSTGRESQL</text>
              <text x="52" y="44" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Subscriptions DB</text>
            </g>

            {/* Flows */}
            <path d="M 130 120 L 180 120" stroke="#475569" strokeWidth="2" />
            <circle cx="155" cy="120" r="3" fill="#f59e0b">
              <animate attributeName="cx" values="130;180" dur="1.5s" repeatCount="indefinite" />
            </circle>

            <path d="M 295 110 L 345 60" stroke="#475569" strokeWidth="2" />
            <circle cx="320" cy="85" r="3" fill="#6366f1">
              <animate attributeName="cx" values="295;345" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="cy" values="110;60" dur="1.8s" repeatCount="indefinite" />
            </circle>

            <path d="M 402 90 L 402 150" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="402" cy="120" r="3" fill="#f59e0b">
              <animate attributeName="cy" values="90;150" dur="1.8s" repeatCount="indefinite" />
            </circle>

            <path d="M 460 170 L 532 170 L 532 150" stroke="#10b981" strokeWidth="2" />
            <circle cx="496" cy="170" r="3" fill="#10b981">
              <animate attributeName="cx" values="460;532" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>

          <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
            <span>Sole system for recurring revenue collection • Recurring plans & one-time payments</span>
            <span className="text-amber-400 font-semibold">STRIPE INTEGRATION</span>
          </div>
        </div>
      );

    case "online-marketplace":
      return (
        <div className={`relative w-full rounded-xl bg-slate-950/90 border border-slate-800/80 p-6 font-mono overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              ONLINE MARKETPLACE // MULTI-ROLE SECURITY & CHAT
            </span>
            <span className="text-cyan-400/90 text-[10px]">ROLE-BASED AUTH & SOCKET.IO</span>
          </div>

          <svg viewBox="0 0 600 240" className="w-full h-auto mt-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 30)">
              <rect width="115" height="50" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="57" y="24" fill="#93c5fd" fontSize="9.5" textAnchor="middle" fontWeight="bold">CUSTOMER DASHBOARD</text>
              <text x="57" y="38" fill="#64748b" fontSize="8" textAnchor="middle">Orders & Live Chat</text>
            </g>

            <g transform="translate(20, 95)">
              <rect width="115" height="50" rx="6" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="57" y="24" fill="#c4b5fd" fontSize="9.5" textAnchor="middle" fontWeight="bold">VENDOR DASHBOARD</text>
              <text x="57" y="38" fill="#64748b" fontSize="8" textAnchor="middle">Products & Chat</text>
            </g>

            <g transform="translate(20, 160)">
              <rect width="115" height="50" rx="6" fill="#0f172a" stroke="#ec4899" strokeWidth="1.5" />
              <text x="57" y="24" fill="#f472b6" fontSize="9.5" textAnchor="middle" fontWeight="bold">ADMIN DASHBOARD</text>
              <text x="57" y="38" fill="#64748b" fontSize="8" textAnchor="middle">Scoped Platform Oversight</text>
            </g>

            <g transform="translate(190, 80)">
              <rect width="130" height="80" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
              <text x="65" y="28" fill="#22d3ee" fontSize="10" textAnchor="middle" fontWeight="bold">ROLE-BASED AUTH</text>
              <text x="65" y="46" fill="#94a3b8" fontSize="8.5" textAnchor="middle">admin / vendor / customer</text>
              <text x="65" y="62" fill="#64748b" fontSize="8" textAnchor="middle">JWT Scoped Middleware</text>
            </g>

            <g transform="translate(370, 45)">
              <rect width="120" height="65" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="60" y="26" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">SOCKET.IO LIVE CHAT</text>
              <text x="60" y="44" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Buyer ↔ Seller</text>
              <text x="60" y="56" fill="#64748b" fontSize="7.5" textAnchor="middle">No Off-Platform Comms</text>
            </g>

            <g transform="translate(370, 140)">
              <rect width="120" height="60" rx="8" fill="#0f172a" stroke="#10b981" strokeDasharray="3 3" strokeWidth="1.5" />
              <text x="60" y="26" fill="#6ee7b7" fontSize="10" textAnchor="middle" fontWeight="bold">MONGODB</text>
              <text x="60" y="44" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Chat & Market Data</text>
            </g>

            <path d="M 135 55 L 190 105" stroke="#475569" strokeWidth="1.5" />
            <path d="M 135 120 L 190 120" stroke="#475569" strokeWidth="1.5" />
            <path d="M 135 185 L 190 135" stroke="#475569" strokeWidth="1.5" />

            <path d="M 320 105 L 370 78" stroke="#06b6d4" strokeWidth="2" />
            <circle cx="345" cy="91" r="3" fill="#22d3ee">
              <animate attributeName="cx" values="320;370" dur="1.2s" repeatCount="indefinite" />
              <animate attributeName="cy" values="105;78" dur="1.2s" repeatCount="indefinite" />
            </circle>

            <path d="M 320 135 L 370 165" stroke="#475569" strokeWidth="1.5" />
            <path d="M 430 110 L 430 140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>

          <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
            <span>Distinct permission-scoped experience • Buyers & sellers communicate on-platform</span>
            <span className="text-cyan-400 font-semibold">SECURITY & LIVE CHAT</span>
          </div>
        </div>
      );

    case "friendzone":
      return (
        <div className={`relative w-full rounded-xl bg-slate-950/90 border border-slate-800/80 p-6 font-mono overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              FRIENDZONE // REAL-TIME SOCIAL PLATFORM
            </span>
            <span className="text-violet-400/90 text-[10px]">SOCKET.IO CHAT & TRANSLATION</span>
          </div>

          <svg viewBox="0 0 600 220" className="w-full h-auto mt-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 80)">
              <rect width="110" height="55" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="55" y="24" fill="#ddd6fe" fontSize="9.5" textAnchor="middle" fontWeight="bold">USER CLIENT</text>
              <text x="55" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Chat Message</text>
            </g>

            <g transform="translate(190, 80)">
              <rect width="125" height="55" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="62" y="24" fill="#93c5fd" fontSize="9.5" textAnchor="middle" fontWeight="bold">SOCKET.IO SERVER</text>
              <text x="62" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Live Message Router</text>
            </g>

            <g transform="translate(365, 40)">
              <rect width="125" height="55" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="62" y="24" fill="#e9d5ff" fontSize="9.5" textAnchor="middle" fontWeight="bold">TRANSLATION API</text>
              <text x="62" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Message Translation</text>
            </g>

            <g transform="translate(365, 125)">
              <rect width="125" height="55" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeDasharray="3 3" strokeWidth="1.5" />
              <text x="62" y="24" fill="#7dd3fc" fontSize="9.5" textAnchor="middle" fontWeight="bold">AWS S3 / AUTH</text>
              <text x="62" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">JWT & Cloud Media</text>
            </g>

            <g transform="translate(505, 80)">
              <rect width="85" height="55" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="42" y="24" fill="#6ee7b7" fontSize="9.5" textAnchor="middle" fontWeight="bold">RECIPIENT</text>
              <text x="42" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Live Chat</text>
            </g>

            <path d="M 140 107 L 190 107" stroke="#8b5cf6" strokeWidth="2" />
            <path d="M 315 95 L 365 67" stroke="#a855f7" strokeWidth="1.5" />
            <path d="M 490 67 L 505 95" stroke="#10b981" strokeWidth="2" />

            <circle cx="250" cy="107" r="3" fill="#8b5cf6">
              <animate attributeName="cx" values="140;190" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </svg>

          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
            <span>Real-time social platform with Socket.io chat, message translation, and authentication</span>
            <span className="text-violet-400 font-semibold">SOCKET.IO & AUTH</span>
          </div>
        </div>
      );

    case "extreme-performance":
      return (
        <div className={`relative w-full rounded-xl bg-slate-950/90 border border-slate-800/80 p-6 font-mono overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              EXTREME PERFORMANCE // REST APIS & ADMIN PANEL
            </span>
            <span className="text-amber-400/90 text-[10px]">FAST FILTERED SEARCH</span>
          </div>

          <svg viewBox="0 0 600 200" className="w-full h-auto mt-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 70)">
              <rect width="125" height="55" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              <text x="62" y="24" fill="#f8fafc" fontSize="9.5" textAnchor="middle" fontWeight="bold">ADMIN DASHBOARD</text>
              <text x="62" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Internal Ops Team</text>
            </g>

            <g transform="translate(205, 70)">
              <rect width="135" height="55" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="67" y="24" fill="#fcd34d" fontSize="9.5" textAnchor="middle" fontWeight="bold">NODE.JS REST APIS</text>
              <text x="67" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Catalog & Order API</text>
            </g>

            <g transform="translate(390, 70)">
              <rect width="135" height="55" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <text x="67" y="24" fill="#6ee7b7" fontSize="9.5" textAnchor="middle" fontWeight="bold">POSTGRESQL</text>
              <text x="67" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Multi-Field Search</text>
            </g>

            <path d="M 155 97 L 205 97" stroke="#f59e0b" strokeWidth="2" />
            <path d="M 340 97 L 390 97" stroke="#10b981" strokeWidth="2" />
            <circle cx="272" cy="97" r="3" fill="#f59e0b">
              <animate attributeName="cx" values="155;205" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="365" cy="97" r="3" fill="#10b981">
              <animate attributeName="cx" values="340;390" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </svg>

          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
            <span>Replaced manual product lookups with fast, filtered search for internal ops teams</span>
            <span className="text-amber-400 font-semibold">NODE.JS + POSTGRESQL</span>
          </div>
        </div>
      );

    case "betterearth":
      return (
        <div className={`relative w-full rounded-xl bg-slate-950/90 border border-slate-800/80 p-6 font-mono overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              BETTEREARTH // UI REDESIGN & FIREBASE DATA MIGRATION
            </span>
            <span className="text-emerald-400/90 text-[10px]">PRODUCTION MIGRATION</span>
          </div>

          <svg viewBox="0 0 600 200" className="w-full h-auto mt-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 70)">
              <rect width="130" height="55" rx="8" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
              <text x="65" y="24" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontWeight="bold">EXISTING PRODUCT</text>
              <text x="65" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Production System</text>
            </g>

            <g transform="translate(205, 70)">
              <rect width="140" height="55" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="70" y="24" fill="#fcd34d" fontSize="9.5" textAnchor="middle" fontWeight="bold">MIGRATION SCRIPT</text>
              <text x="70" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Data Pipeline</text>
            </g>

            <g transform="translate(390, 70)">
              <rect width="145" height="55" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <text x="72" y="24" fill="#6ee7b7" fontSize="9.5" textAnchor="middle" fontWeight="bold">FIREBASE REALTIME DB</text>
              <text x="72" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Rebuilt Admin Panel</text>
            </g>

            <path d="M 160 97 L 205 97" stroke="#f59e0b" strokeWidth="2" />
            <path d="M 345 97 L 390 97" stroke="#10b981" strokeWidth="2" />
          </svg>

          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
            <span>UI redesign, admin panel rebuild, and Firebase data migration for an existing production product</span>
            <span className="text-emerald-400 font-semibold">REACT & FIREBASE</span>
          </div>
        </div>
      );

    case "renner-otto":
      return (
        <div className={`relative w-full rounded-xl bg-slate-950/90 border border-slate-800/80 p-6 font-mono overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              RENNER OTTO // ELECTRON-BASED DESKTOP APP
            </span>
            <span className="text-blue-400/90 text-[10px]">LEGAL CASE & ATTORNEY MANAGEMENT</span>
          </div>

          <svg viewBox="0 0 600 200" className="w-full h-auto mt-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 70)">
              <rect width="135" height="55" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="67" y="24" fill="#93c5fd" fontSize="9.5" textAnchor="middle" fontWeight="bold">ELECTRON DESKTOP UI</text>
              <text x="67" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Legal Case Management</text>
            </g>

            <g transform="translate(210, 70)">
              <rect width="130" height="55" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="65" y="24" fill="#c4b5fd" fontSize="9.5" textAnchor="middle" fontWeight="bold">NODE.JS RUNTIME</text>
              <text x="65" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Attorney Management</text>
            </g>

            <g transform="translate(385, 70)">
              <rect width="135" height="55" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
              <text x="67" y="24" fill="#67e8f9" fontSize="9.5" textAnchor="middle" fontWeight="bold">DESKTOP STORAGE</text>
              <text x="67" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Local App Records</text>
            </g>

            <path d="M 165 97 L 210 97" stroke="#3b82f6" strokeWidth="2" />
            <path d="M 340 97 L 385 97" stroke="#8b5cf6" strokeWidth="2" />
          </svg>

          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
            <span>Electron-based desktop application for legal case and attorney management</span>
            <span className="text-blue-400 font-semibold">ELECTRON.JS</span>
          </div>
        </div>
      );

    case "triptop":
      return (
        <div className={`relative w-full rounded-xl bg-slate-950/90 border border-slate-800/80 p-6 font-mono overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              TRIPTOP // CHROME EXTENSION & WORKFLOW AUTOMATION
            </span>
            <span className="text-orange-400/90 text-[10px]">MULTI-DESTINATION SEARCH</span>
          </div>

          <svg viewBox="0 0 600 200" className="w-full h-auto mt-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 70)">
              <rect width="130" height="55" rx="8" fill="#0f172a" stroke="#f97316" strokeWidth="1.5" />
              <text x="65" y="24" fill="#fdba74" fontSize="9.5" textAnchor="middle" fontWeight="bold">CHROME EXTENSION</text>
              <text x="65" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Workflow Automation</text>
            </g>

            <g transform="translate(205, 70)">
              <rect width="135" height="55" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" />
              <text x="67" y="24" fill="#fde047" fontSize="9.5" textAnchor="middle" fontWeight="bold">EXTENSION APIS</text>
              <text x="67" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Lazy-Loading Features</text>
            </g>

            <g transform="translate(385, 70)">
              <rect width="145" height="55" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <text x="72" y="24" fill="#6ee7b7" fontSize="9.5" textAnchor="middle" fontWeight="bold">TRAVEL USE CASES</text>
              <text x="72" y="40" fill="#94a3b8" fontSize="8" textAnchor="middle">Multi-Destination Search</text>
            </g>

            <path d="M 160 97 L 205 97" stroke="#f97316" strokeWidth="2" />
            <path d="M 340 97 L 385 97" stroke="#eab308" strokeWidth="2" />
          </svg>

          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
            <span>Shipped automation, multi-destination search, and lazy-loading for travel use cases</span>
            <span className="text-orange-400 font-semibold">CHROME EXTENSION APIS</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
