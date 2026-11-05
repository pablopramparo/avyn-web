"use client";
import { useEffect } from "react";

/** Cards that get the cursor-following glow. Only the position is set here; the look is pure CSS. */
const SELECTOR = [
  ".showcase-card",
  ".detail-card",
  ".all-features-grid article",
].join(",");

/**
 * Writes the pointer position inside the hovered card as --gx / --gy (px) so CSS can draw a spotlight there.
 * One delegated listener for the whole page; does nothing without a fine pointer or when motion is reduced.
 */
export function CardGlow() {
  useEffect(() => {
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!query.matches) return;
    let frame = 0;
    let last: PointerEvent | null = null;
    const apply = () => {
      frame = 0;
      const event = last;
      if (!event || !(event.target instanceof Element)) return;
      const card = event.target.closest<HTMLElement>(SELECTOR);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--gx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--gy", `${event.clientY - rect.top}px`);
    };
    const onMove = (event: PointerEvent) => {
      last = event;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
