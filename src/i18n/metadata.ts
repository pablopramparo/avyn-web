import type { Metadata } from "next";
import { assetPath, canonical } from "@/config/site";
import { getDictionary } from "./dictionaries";
import { localizedPath, type Locale } from "./config";
export type PageName = "home" | "security" | "verify" | "download" | "auren" | "kantor";
const ogImages: Record<PageName, string> = {
  home: "home",
  security: "home",
  verify: "home",
  download: "home",
  auren: "auren",
  kantor: "kantor",
};
function ogImage(locale: Locale, page: PageName, alt: string) {
  const name = ogImages[page];
  const file = name === "home" || locale === "es" ? `${name}${name === "home" ? "-" + locale : ""}` : `${name}-en`;
  return { url: assetPath(`/images/og/${file}.jpg`), width: 1200, height: 630, alt };
}
export function pageMetadata(locale: Locale, page: PageName): Metadata {
  const copy = getDictionary(locale).metadata[page];
  const path = page === "home" ? "/" : `/${page}/`;
  const url = canonical(localizedPath(locale, path));
  const image = ogImage(locale, page, copy.title);
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
      images: [image],
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_AR",
      ...(url ? { url } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [image],
    },
  };
}
