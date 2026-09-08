import { useState, useEffect } from "react";
import { FaArrowRight, FaCreditCard, FaServer, FaDatabase, FaExchangeAlt, FaShieldAlt, FaDesktop, FaChrome } from "react-icons/fa";

// 1. NOBLAI VISUAL: Technical Stripe Flow & License Tokenizer
export const NoblAiVisual = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "1. Client Checkout", desc: "User picks Pro tier on React", icon: <FaCreditCard /> },
    { label: "2. Stripe Gateway", desc: "invoice.payment_succeeded", icon: <FaExchangeAlt /> },
    { label: "3. Idempotent Webhook", desc: "Express validates HMAC signature", icon: <FaServer /> },
    { label: "4. License Generation", desc: "Token inserted in PostgreSQL", icon: <FaDatabase /> },
  ];

  return (
    <div className="w-full bg-[#05080f] rounded-2xl border border-white/[0.08] p-5 space-y-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-slate-400 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-200 font-semibold">Stripe Billing Pipeline</span>
        </div>
        <span>IDEMPOTENT WEBHOOKS</span>
      </div>

      {/* 4-Step Diagram */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
              activeStep === idx
                ? "bg-amber-500/10 border-amber-400/80 text-amber-300 shadow-md"
                : "bg-white/[0.02] border-white/[0.06] text-slate-400"
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-base">{s.icon}</span>
              <span className="text-[10px] text-slate-400">0{idx + 1}</span>
            </div>
            <div className="font-semibold text-slate-200 text-xs">{s.label}</div>
            <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Simulated Live Tokenizer Terminal */}
      <div className="p-3.5 rounded-xl bg-black/80 border border-white/[0.06] space-y-1 text-[11px]">
        <div className="text-slate-400 flex items-center justify-between">
          <span>// Cryptographic License Ledger</span>
          <span className="text-emerald-400">PAYMENT_CONFIRMED</span>
        </div>
        <div className="text-amber-400 font-semibold truncate">
          KEY: NOBL-PRD-8794-XQ92 • PLAN: PRO_RECURRING • STATUS: ACTIVE
        </div>
        <div className="text-[10px] text-slate-400">
          Sync: 100% platform subscription revenue processed with zero webhook loss.
        </div>
      </div>
    </div>
  );
};

// 2. ONLINE MARKETPLACE VISUAL: Multi-Role RBAC & Real-Time Socket.io Chat
export const MarketplaceVisual = () => {
  const [selectedRole, setSelectedRole] = useState<"CUSTOMER" | "VENDOR" | "ADMIN">("VENDOR");

  const rolesData = {
    CUSTOMER: {
      scope: "Scoped to: Order history, cart dispatch & private vendor chat",
      chatPreview: "Customer: 'Hi! Is the custom SKU available for priority dispatch?'",
      badge: "ROLE_CUSTOMER",
    },
    VENDOR: {
      scope: "Scoped to: Inventory updates, order dispatch & customer direct inbox",
      chatPreview: "Vendor: 'Yes! Ready to dispatch. Processing tracking number now.'",
      badge: "ROLE_VENDOR",
    },
    ADMIN: {
      scope: "Scoped to: Platform oversight, vendor approval & transaction audit logs",
      chatPreview: "Admin System: 'Dispute audit passed. Escrow payout verified.'",
      badge: "ROLE_ADMIN",
    },
  };

  return (
    <div className="w-full bg-[#05080f] rounded-2xl border border-white/[0.08] p-5 space-y-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-slate-400 text-[11px]">
        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-amber-400" />
          <span className="text-slate-200 font-semibold">RBAC & Socket.io Live Layer</span>
        </div>
        <span>SUB-100MS DELIVERY</span>
      </div>

      {/* Role Switcher Tabs */}
      <div className="grid grid-cols-3 gap-2">
        {(["CUSTOMER", "VENDOR", "ADMIN"] as const).map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wider transition-all border ${
              selectedRole === role
                ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-white"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Role Permission Scope */}
      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-amber-300 font-bold">{rolesData[selectedRole].badge}</span>
          <span className="text-emerald-400 text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            JWT Validated
          </span>
        </div>
        <p className="text-[11px] text-slate-300 font-sans">
          {rolesData[selectedRole].scope}
        </p>
      </div>

      {/* Simulated Live Chat Stream */}
      <div className="p-3.5 rounded-xl bg-black/80 border border-white/[0.06] space-y-2">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>ROOM: conversation_room_8842</span>
          <span className="text-amber-400">SOCKET.IO CONNECTED</span>
        </div>
        <div className="text-slate-200 text-[11px] font-sans bg-white/[0.04] p-2.5 rounded-lg border border-white/[0.04]">
          {rolesData[selectedRole].chatPreview}
        </div>
      </div>
    </div>
  );
};

// 3. FRIENDZONE VISUAL: Real-Time Chat & Translation Pipeline
export const FriendZoneVisual = () => {
  return (
    <div className="w-full bg-[#05080f] rounded-2xl border border-white/[0.08] p-5 space-y-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-slate-400 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-slate-200 font-semibold">Real-Time Translation Stream</span>
        </div>
        <span>SOCKET.IO + POSTGRESQL</span>
      </div>

      {/* Speech Bubbles Stream */}
      <div className="space-y-3 font-sans">
        {/* Outgoing Message */}
        <div className="flex flex-col items-end space-y-1">
          <div className="bg-amber-500 text-slate-950 font-medium px-3.5 py-2 rounded-2xl rounded-tr-sm text-xs max-w-[80%] shadow">
            "Looking forward to shipping the next milestone together!"
          </div>
          <span className="text-[10px] font-mono text-slate-400">Sender (English) • 12:04 PM</span>
        </div>

        {/* Translation Indicator Pipeline */}
        <div className="flex items-center justify-center gap-2 py-1 text-[11px] font-mono text-slate-400">
          <span>Translation Pipeline</span>
          <FaArrowRight size={10} className="text-amber-400 animate-pulse" />
          <span className="text-amber-300">Auto-Localized</span>
        </div>

        {/* Received Translated Bubble */}
        <div className="flex flex-col items-start space-y-1">
          <div className="bg-white/[0.05] border border-white/[0.08] text-slate-100 px-3.5 py-2 rounded-2xl rounded-tl-sm text-xs max-w-[80%]">
            "¡Con muchas ganas de lanzar el próximo hito juntos!"
            <div className="text-[10px] text-amber-400/80 font-mono mt-1 pt-1 border-t border-white/[0.06]">
              Translated to Spanish for Recipient
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Recipient (Online) • Delivered</span>
        </div>
      </div>

      {/* Object Storage Indicator */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>Media Attachments: AWS S3 / Cloudflare R2</span>
        <span className="text-emerald-400">Pre-Signed URLs</span>
      </div>
    </div>
  );
};

// 4. EXTREME PERFORMANCE VISUAL: Multi-Field Search & Catalog Indexing
export const ExtremePerformanceVisual = () => {
  return (
    <div className="w-full bg-[#05080f] rounded-2xl border border-white/[0.08] p-5 space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-slate-400 text-[11px]">
        <div className="flex items-center gap-2">
          <FaDatabase className="text-amber-400" />
          <span className="text-slate-200 font-semibold">PostgreSQL Multi-Field Search</span>
        </div>
        <span className="text-emerald-400">&lt; 150ms LATENCY</span>
      </div>

      {/* Search Criteria Bar */}
      <div className="p-3 bg-black/60 rounded-xl border border-white/[0.06] flex flex-wrap gap-2 text-[11px]">
        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
          CATEGORY: Heavy Equipment
        </span>
        <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]">
          SKU: XP-7729-CAT
        </span>
        <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]">
          STOCK &gt; 0
        </span>
      </div>

      {/* Query Execution Step */}
      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 text-[11px]">
        <div className="text-slate-400 flex items-center justify-between">
          <span>SQL Index Scan</span>
          <span className="text-amber-400">B-Tree Compound Index</span>
        </div>
        <div className="text-slate-300 font-mono text-[10px] truncate bg-black/40 p-1.5 rounded">
          SELECT * FROM catalog WHERE category_id = 42 AND in_stock = TRUE ORDER BY sku;
        </div>
        <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
          <span>Records: 12,450 SKUs Indexed</span>
          <span className="text-emerald-400 font-bold">Fast Filtered Results</span>
        </div>
      </div>
    </div>
  );
};

// 5. BETTEREARTH VISUAL: Zero-Downtime Migration Pipeline
export const BetterEarthVisual = () => {
  return (
    <div className="w-full bg-[#05080f] rounded-2xl border border-white/[0.08] p-5 space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-slate-400 text-[11px]">
        <span className="text-slate-200 font-semibold">Zero-Downtime Data Migration</span>
        <span className="text-emerald-400">100% INTEGRITY</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center text-[11px]">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
          <div className="text-slate-400 text-[10px]">STAGE 01</div>
          <div className="font-semibold text-slate-200">Legacy Schema</div>
          <div className="text-[10px] text-slate-400">Normalized records</div>
        </div>
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/40 space-y-1">
          <div className="text-amber-400 text-[10px]">STAGE 02</div>
          <div className="font-semibold text-amber-300">Dual-Write Sync</div>
          <div className="text-[10px] text-amber-400/80">Batch transformation</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
          <div className="text-emerald-400 text-[10px]">STAGE 03</div>
          <div className="font-semibold text-slate-200">Firebase Cutover</div>
          <div className="text-[10px] text-emerald-400/80">Realtime DB Live</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.06] text-[11px] text-slate-300 font-sans">
        Complete admin panel rebuild with responsive forms and real-time reactive event listeners.
      </div>
    </div>
  );
};

// 6. RENNER OTTO VISUAL: Electron Desktop Case Management Frame
export const RennerOttoVisual = () => {
  return (
    <div className="w-full bg-[#05080f] rounded-2xl border border-white/[0.08] p-5 space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-slate-400 text-[11px]">
        <div className="flex items-center gap-2">
          <FaDesktop className="text-amber-400" />
          <span className="text-slate-200 font-semibold">Electron Desktop Architecture</span>
        </div>
        <span>OFFLINE PERSISTENCE</span>
      </div>

      <div className="rounded-xl bg-black/70 border border-white/[0.08] p-3 space-y-2">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] pb-2 text-[10px] text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2">Renner Otto Case Docket — Desktop Client</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
          <div className="p-2 bg-white/[0.02] rounded border border-white/[0.04]">
            <span className="text-slate-400 text-[10px] block">CASE RECORD</span>
            <span className="text-white font-semibold">PAT-2024-8891</span>
          </div>
          <div className="p-2 bg-white/[0.02] rounded border border-white/[0.04]">
            <span className="text-slate-400 text-[10px] block">DOCKET MILESTONE</span>
            <span className="text-amber-400 font-semibold">Hearing Scheduled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. TRIPTOP VISUAL: Chrome Extension Automation & Lazy Loading
export const TriptopVisual = () => {
  return (
    <div className="w-full bg-[#05080f] rounded-2xl border border-white/[0.08] p-5 space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-slate-400 text-[11px]">
        <div className="flex items-center gap-2">
          <FaChrome className="text-amber-400" />
          <span className="text-slate-200 font-semibold">Manifest V3 Travel Automation</span>
        </div>
        <span>MULTI-DESTINATION</span>
      </div>

      <div className="space-y-2 text-[11px]">
        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
          <span className="text-slate-300">Route Query: DEL → DXB → LHR</span>
          <span className="text-amber-400 text-[10px]">Automated Dispatch</span>
        </div>
        <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.06] flex items-center justify-between text-[10px]">
          <span className="text-slate-400">Content Script Lazy Loading:</span>
          <span className="text-emerald-400 font-semibold">Zero Browser Lag</span>
        </div>
      </div>
    </div>
  );
};
