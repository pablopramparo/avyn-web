"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode[];
  label: string;
  description: string;
  previousLabel: string;
  nextLabel: string;
  positionLabel: string;
};

export function ScreenshotCarousel({
  children,
  label,
  description,
  previousLabel,
  nextLabel,
  positionLabel,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Cards in view at once: 3 on wide screens, 1 on tablets and phones. With several in view the carousel moves
  // one card at a time and has total - visible + 1 stops; with one, each card is a stop and is centered.
  const [visible, setVisible] = useState(1);
  const total = children.length;
  const stops = Math.max(1, total - visible + 1);

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      const card = track?.children.item(0);
      if (!track || !(card instanceof HTMLElement)) return;
      setVisible(Math.max(1, Math.round(track.clientWidth / (card.offsetWidth + 16))));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  function goTo(index: number) {
    const track = trackRef.current;
    const card = track?.children.item(index);
    if (!track || !(card instanceof HTMLElement)) return;
    const offset = card.getBoundingClientRect().left - track.getBoundingClientRect().left;
    const left = track.scrollLeft + (visible > 1 ? offset : offset - (track.clientWidth - card.clientWidth) / 2);
    track.scrollTo({ left, behavior: "smooth" });
    setActiveIndex(index);
  }

  function updateActiveIndex() {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children);
    if (visible > 1) {
      const trackLeft = track.getBoundingClientRect().left;
      const first = cards.reduce((best, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
        return distance < best.distance ? { index, distance } : best;
      }, { index: 0, distance: Number.POSITIVE_INFINITY });
      setActiveIndex(Math.min(first.index, stops - 1));
      return;
    }
    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    const nearest = cards.reduce((best, card, index) => {
      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });
    setActiveIndex(nearest.index);
  }

  return (
    <div className="screenshot-carousel" role="region" aria-roledescription={description} aria-label={label}>
      <div className="screenshot-carousel-track" ref={trackRef} onScroll={updateActiveIndex}>
        {children.map((child, index) => (
          <div className="screenshot-carousel-slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      <div className="screenshot-carousel-controls">
        <button type="button" aria-label={previousLabel} onClick={() => goTo(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div className="screenshot-carousel-dots" aria-label={positionLabel.replace("{current}", String(activeIndex + 1)).replace("{total}", String(stops))}>
          {Array.from({ length: stops }, (_, index) => (

            <button
              type="button"
              key={index}
              className={index === activeIndex ? "is-active" : undefined}
              aria-label={positionLabel.replace("{current}", String(index + 1)).replace("{total}", String(stops))}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button type="button" aria-label={nextLabel} onClick={() => goTo(Math.min(stops - 1, activeIndex + 1))} disabled={activeIndex >= stops - 1}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  );
}
