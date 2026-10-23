"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assetPath } from "@/config/site";
import styles from "./kantaria.module.css";

type Slide = { src: string; label: string };

const INTERVAL_MS = 4200;

/** Phone frame that cycles through the Kantaria tab of the Avyn app. */
export function KantariaPhoneShowcase({ slides, label }: { slides: Slide[]; label: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const sync = () => setMotionOk(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!motionOk || paused) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [motionOk, paused, slides.length]);

  return (
    <div
      className={styles.phoneShowcase}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="phone-mockup">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={assetPath(slide.src)}
            alt={slide.label}
            aria-hidden={index !== active}
            width={640}
            height={1278}
            className={`phone-screen ${styles.phoneSlide}${index === active ? ` ${styles.phoneSlideActive}` : ""}`}
            sizes="(max-width: 600px) 230px, 290px"
          />
        ))}
        <Image
          src={assetPath("/images/brand/phone-frame-front.webp")}
          alt=""
          aria-hidden="true"
          className="phone-frame-overlay"
          width={2779}
          height={4346}
          sizes="(max-width: 600px) 360px, 400px"
        />
      </div>
      <div className={styles.phoneDots}>
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.src}
            className={index === active ? styles.dotActive : undefined}
            aria-label={slide.label}
            aria-current={index === active ? "true" : undefined}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}
