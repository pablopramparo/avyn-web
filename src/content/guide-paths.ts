import type { Locale } from "@/i18n/config";

export type GuideId = "control-pc" | "karaoke" | "tv";

/** Section name in the URL: /es/guias/... and /en/guides/... */
export const guideSection: Record<Locale, string> = { es: "guias", en: "guides" };

export const guideSlugs: Record<GuideId, Record<Locale, string>> = {
  "control-pc": { es: "controlar-pc-windows-desde-android", en: "control-windows-pc-from-android" },
  karaoke: { es: "karaoke-ultrastar-en-windows", en: "ultrastar-karaoke-on-windows" },
  tv: { es: "ver-peliculas-de-la-pc-en-la-tv", en: "watch-pc-movies-on-your-tv" },
};

export function guidePath(locale: Locale, slug?: string) {
  return `/${locale}/${guideSection[locale]}/${slug ? slug + "/" : ""}`;
}

/**
 * Maps a locale-less path (as the language switcher sees it) to the same page in
 * another language. Only the guides have different paths per language.
 */
export function translatePath(path: string, from: Locale, to: Locale) {
  const parts = path.split("/").filter(Boolean);
  if (parts[0] !== guideSection[from]) return path;
  if (parts.length === 1) return `/${guideSection[to]}/`;
  const id = (Object.keys(guideSlugs) as GuideId[]).find((key) => guideSlugs[key][from] === parts[1]);
  return id ? `/${guideSection[to]}/${guideSlugs[id][to]}/` : `/${guideSection[to]}/`;
}
