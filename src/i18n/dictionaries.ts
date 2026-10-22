import en from "./locales/en.json";
import es from "./locales/es.json";
import type { Locale } from "./config";
export type Dictionary = typeof en;
const dictionaries: Record<Locale, Dictionary> = { en, es };
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
