import type { Locale } from "@/i18n/config";
export type HeroPhonePhoto = { src: string; width: number; height: number };
export const heroVisuals = {
  background: "/images/brand/hero.png",
  // Localized mockups already include the phone frame. Other locales use the screenshot fallback.
  phonePhotos: {
    es: { src: "/images/brand/hero-phone-es.webp", width: 800, height: 1400 },
    en: { src: "/images/brand/hero-phone-en.webp", width: 800, height: 1400 },
  } as Partial<Record<Locale, HeroPhonePhoto>>,
};
