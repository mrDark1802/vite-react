import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const lastMousePos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;

      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = target?.closest("a, button, input, [role='button'], select, textarea");
        if (isClickable) {
          setCursorText("");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;

    const render = () => {
      // Calculate instantaneous velocity for dynamic stretch
      velocity.current.x = mousePos.current.x - lastMousePos.current.x;
      velocity.current.y = mousePos.current.y - lastMousePos.current.y;
      lastMousePos.current = { x: mousePos.current.x, y: mousePos.current.y };

      const speed = Math.min(
        Math.sqrt(velocity.current.x * velocity.current.x + velocity.current.y * velocity.current.y),
        40
      );
      const angle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI);
      const stretch = 1 + (speed / 40) * 0.25;
      const squash = 1 - (speed / 40) * 0.15;

      // Smooth lerp for outer ring
      const lerpFactor = 0.16;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      // Inner precise pointer dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Soft ambient glow following cursor
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // Outer follower with velocity stretch
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) rotate(${angle}deg) scale(${stretch}, ${squash})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. Soft ambient aura glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-32 h-32 -ml-16 -mt-16 rounded-full bg-amber-500/10 blur-xl pointer-events-none will-change-transform"
      />

      {/* 2. Inner precise dot with click impulse */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-amber-400 will-change-transform transition-all duration-100 ${
          isClicking
            ? "scale-150 bg-amber-300 shadow-md shadow-amber-400/50"
            : isHovered
            ? "scale-0 opacity-0"
            : "scale-100 opacity-100 shadow-xs shadow-amber-400/40"
        }`}
      />

      {/* 3. Outer magnetic follower ring with morphing states */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full will-change-transform transition-[width,height,background-color,border-color,box-shadow] duration-200 ${
          isClicking
            ? "w-10 h-10 -ml-5 -mt-5 border-2 border-amber-300 bg-amber-400/30 scale-90"
            : cursorText
            ? "w-28 h-28 -ml-14 -mt-14 bg-amber-400/95 text-slate-950 shadow-2xl shadow-amber-400/30 border border-amber-200"
            : isHovered
            ? "w-14 h-14 -ml-7 -mt-7 border-2 border-amber-400 bg-amber-400/15 backdrop-blur-2xs shadow-lg shadow-amber-400/20"
            : "w-9 h-9 -ml-4.5 -mt-4.5 border border-slate-400/50 bg-slate-950/20 backdrop-blur-2xs"
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-extrabold tracking-widest uppercase px-2 text-center select-none leading-tight animate-in fade-in zoom-in-75 duration-150">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
