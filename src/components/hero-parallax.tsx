"use client";
import { useEffect, useRef } from "react";

/**
 * Tracks the pointer over the hero section and exposes it as --mx / --my
 * (range -1..1) so CSS can shift the background and phone at different depths.
 * Only runs for fine pointers and when motion is not reduced.
 */
export function HeroParallax() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const hero = marker.current?.closest<HTMLElement>(".hero");
    if (!hero) return;
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!query.matches) return;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      hero.style.setProperty("--mx", current.x.toFixed(3));
      hero.style.setProperty("--my", current.y.toFixed(3));
      const settled =
        Math.abs(target.x - current.x) < 0.001 &&
        Math.abs(target.y - current.y) < 0.001;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      start();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      start();
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <span ref={marker} hidden />;
}
