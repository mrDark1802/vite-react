import React, { useEffect, useState } from "react";

interface Chapter {
  id: string;
  number: string;
  name: string;
}

const CHAPTERS: Chapter[] = [
  { id: "hero", number: "00", name: "INTRO" },
  { id: "work", number: "01", name: "WORK" },
  { id: "systems", number: "02", name: "SYSTEMS" },
  { id: "skills", number: "03", name: "SKILLS" },
  { id: "timeline", number: "04", name: "TIMELINE" },
  { id: "contact", number: "05", name: "CONTACT" }
];

export const ScrollExperience: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver to track active section
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          setActiveChapter(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.25, 0.5]
    });

    CHAPTERS.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Top Hairline Scroll Progress Bar with Glowing Bead */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-slate-900/60 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 transition-[width] duration-75 ease-out relative shadow-[0_0_12px_rgba(245,158,11,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#fde047]" />
        </div>
      </div>

      {/* 2. Floating Edge Chapter Navigator (Desktop) */}
      <aside
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 font-mono text-xs select-none pointer-events-auto"
        aria-label="Section Navigation"
      >
        <div className="flex flex-col gap-2.5 p-2 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md shadow-2xl">
          {CHAPTERS.map((ch) => {
            const isActive = activeChapter === ch.id;

            return (
              <button
                key={ch.id}
                onClick={() => scrollToSection(ch.id)}
                className={`group flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl transition-all duration-200 text-left cursor-pointer outline-hidden ${
                  isActive
                    ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-950/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/80"
                }`}
                data-cursor="GOTO"
                title={`Jump to ${ch.name}`}
              >
                <span className={`text-[10px] ${isActive ? "text-slate-950 font-black" : "text-slate-500"}`}>
                  {ch.number}
                </span>
                <span className="text-[11px] tracking-wider uppercase font-semibold">
                  {ch.name}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? "bg-slate-950 scale-125" : "bg-transparent group-hover:bg-amber-400/60"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Scroll percentage readout */}
        <div className="pr-2 font-mono text-[10px] text-slate-500 tracking-wider">
          <span className="text-amber-400 font-bold">{Math.round(scrollProgress)}%</span> READOUT
        </div>
      </aside>
    </>
  );
};
