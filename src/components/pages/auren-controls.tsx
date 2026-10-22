"use client";
import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { assetPath } from "@/config/site";
import styles from "./auren-controls.module.css";

type Item = { title: string; text: string };

const THUMB_WIDTH = 158;
// Illustrative runtime (the sample clip is 9:56); not a real playback position.
const DURATION = 596;
const SAMPLE_TIME = 54;
const clock = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg className={styles.glyph} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      {children}
    </svg>
  );
}

const skip = (dir: "back" | "forward") => (
  <Glyph>
    <path d={dir === "back" ? "M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5" : "M20 12a8 8 0 1 1-2.4-5.7M20 4v5h-5"} />
    <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" stroke="none">10</text>
  </Glyph>
);
const play = (
  <Glyph>
    <path d="m8 5 11 7-11 7Z" fill="currentColor" />
  </Glyph>
);

// Same order as `auren.controls` in the dictionaries.
const infoGlyphs: ReactNode[] = [
  <Glyph key="progress"><path d="M3 12h18" /><circle cx="9" cy="12" r="2.5" fill="currentColor" /></Glyph>,
  <Glyph key="transport"><path d="m10 8 6 4-6 4Z" fill="currentColor" /><circle cx="12" cy="12" r="9" /></Glyph>,
  <Glyph key="volume"><path d="M4 9v6h4l5 4V5L8 9Z" fill="currentColor" /></Glyph>,
  <Glyph key="settings">
    <path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.2a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.2a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.2a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.2a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2Z" />
    <circle cx="12" cy="12" r="3" />
  </Glyph>,
  <Glyph key="subtitles"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M7 11h10M7 15h6" /></Glyph>,
  <Glyph key="audio"><path d="M7 8v8M12 5v14M17 9v6" /></Glyph>,
  <Glyph key="speed"><path d="M4 17a9 9 0 1 1 16 0" /><path d="m12 15 4-5" /></Glyph>,
  <Glyph key="fullscreen"><rect x="5" y="5" width="14" height="14" rx="1.5" /></Glyph>,
];

export function AurenControls({
  controls,
  hint,
  label,
}: {
  controls: Item[];
  hint: string;
  label: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const [seek, setSeek] = useState<{ x: number; time: number } | null>(null);
  const track = useRef<HTMLSpanElement>(null);
  const player = useRef<HTMLDivElement>(null);
  const active = hover ?? pinned;
  const current = active === null ? null : controls[active];

  // Hover only reacts to a real mouse; touch selects through the tap (click).
  const bind = (index: number, extra = "") => ({
    className: `${styles.control} ${extra}`,
    "aria-label": controls[index].title,
    "aria-pressed": pinned === index,
    "data-hover": hover === index || undefined,
    "data-pinned": pinned === index || undefined,
    onPointerEnter: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse") setHover(index);
    },
    onPointerLeave: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse") setHover(null);
    },
    onFocus: (e: React.FocusEvent<HTMLButtonElement>) => {
      if (e.currentTarget.matches(":focus-visible")) setHover(index);
    },
    onBlur: () => setHover(null),
    onClick: () => setPinned((value) => (value === index ? null : index)),
  });

  // The preview follows the pointer along the bar, and its time maps the pointer
  // position on the track to the illustrative runtime.
  const trackSeek = (e: React.PointerEvent) => {
    if (!player.current || !track.current) return;
    const box = player.current.getBoundingClientRect();
    const bar = track.current.getBoundingClientRect();
    const half = THUMB_WIDTH / 2 + 8;
    const fraction = Math.min(Math.max((e.clientX - bar.left) / bar.width, 0), 1);
    setSeek({
      x: Math.min(Math.max(e.clientX - box.left, half), box.width - half),
      time: Math.round(fraction * DURATION),
    });
  };

  return (
    <div className={styles.wrap}>
      <div ref={player} className={styles.player} role="group" aria-label={label}>
        <div className={styles.stage} aria-hidden="true">
          <div
            className={styles.preview}
            data-visible={active === 0 || undefined}
            style={{ left: seek?.x ?? "50%" }}
          >
            <Image
              src={assetPath("/images/brand/auren-thumbnail.png")}
              alt=""
              width={THUMB_WIDTH}
              height={90}
            />
            <span className={styles.time}>{clock(seek?.time ?? SAMPLE_TIME)}</span>
          </div>
        </div>
        <button type="button" {...bind(0, styles.seek)} onPointerMove={trackSeek} onPointerDown={trackSeek}>
          <span className={styles.time}>0:00</span>
          <span ref={track} className={styles.track} aria-hidden="true"><i /></span>
          <span className={styles.time}>{clock(DURATION)}</span>
        </button>
        <div className={styles.row}>
          <div className={styles.cluster}>
            <button type="button" {...bind(1, styles.transport)}>
              {skip("back")}
              {play}
              {skip("forward")}
            </button>
            <button type="button" {...bind(2, styles.volume)}>
              {infoGlyphs[2]}
              <span className={styles.slider} aria-hidden="true"><i /></span>
              <span className={styles.time}>100%</span>
            </button>
          </div>
          <div className={styles.cluster}>
            {[3, 4, 5, 6, 7].map((index) => (
              <button type="button" key={index} {...bind(index, styles.icon)}>
                {infoGlyphs[index]}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.info} aria-live="polite" aria-atomic="true">
        {current && active !== null ? (
          <div key={active} className={styles.detail}>
            <span className={styles.detailIcon}>{infoGlyphs[active]}</span>
            <div>
              <h3>{current.title}</h3>
              <p>{current.text}</p>
            </div>
          </div>
        ) : (
          <p className={styles.hint}>{hint}</p>
        )}
      </div>
    </div>
  );
}
