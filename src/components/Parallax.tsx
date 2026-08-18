import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle scroll-driven parallax for editorial imagery.
 * The inner layer is rendered slightly taller than its frame and drifts
 * vertically as the frame moves through the viewport. Motion is capped and
 * disabled entirely for users who prefer reduced motion.
 */
export function Parallax({
  children,
  className,
  strength = 60,
}: {
  children: ReactNode;
  className?: string;
  /** Maximum vertical drift in pixels across the full scroll range. */
  strength?: number;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    setEnabled(true);

    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner) return;

    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 (frame below viewport) → 1 (frame above viewport), 0 centered
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      inner.style.transform = `translate3d(0, ${(-clamped * strength).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!visible || raf) return;
      raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible) onScroll();
      },
      { threshold: 0 },
    );
    io.observe(frame);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={frameRef} className={cn("relative overflow-hidden", className)}>
      <div
        ref={innerRef}
        className="h-full w-full will-change-transform"
        style={enabled ? { height: `calc(100% + ${strength * 2}px)`, marginTop: `-${strength}px` } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
