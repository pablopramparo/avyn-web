export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export type LocalizedProps = { locale: Locale };
export type LocaleParams = { params: Promise<{ locale: string }> };
export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
export function localizedPath(locale: Locale, path = "/") {
  return `/${locale}${path.startsWith("/") ? path : "/" + path}`;
}
