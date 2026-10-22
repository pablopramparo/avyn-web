import type { Metadata } from "next";
import { canonical } from "@/config/site";
import { getDictionary } from "./dictionaries";
import { localizedPath, type Locale } from "./config";
export type PageName = "home" | "security" | "verify" | "download" | "auren" | "kantor";
export function pageMetadata(locale: Locale, page: PageName): Metadata {
  const copy = getDictionary(locale).metadata[page];
  const path = page === "home" ? "/" : `/${page}/`;
  const url = canonical(localizedPath(locale, path));
  const languages = {
    es: canonical(localizedPath("es", path)),
    en: canonical(localizedPath("en", path)),
    "x-default": canonical(localizedPath("es", path)),
  };
  return {
    title: { absolute: page === "home" ? copy.title : `${copy.title} | Avyn` },
    description: copy.description,
    ...(url ? { alternates: { canonical: url, languages } } : {}),
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: "website",
      siteName: "Avyn",
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_AR",
      ...(url ? { url } : {}),
    },
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description,
    },
  };
}
