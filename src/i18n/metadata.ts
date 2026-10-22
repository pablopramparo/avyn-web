import type { Metadata } from "next";
import { assetPath, canonical } from "@/config/site";
import { getDictionary } from "./dictionaries";
import { localizedPath, type Locale } from "./config";
import { guideTranslation, type Guide } from "@/content/guides";
import { guidePath } from "@/content/guide-paths";
export type PageName = "home" | "security" | "verify" | "download" | "auren" | "kantor";
export type OgName = "home" | "auren" | "kantor";
const ogImages: Record<PageName, OgName> = {
  home: "home",
  security: "home",
  verify: "home",
  download: "home",
  auren: "auren",
  kantor: "kantor",
};
function ogImage(locale: Locale, name: OgName, alt: string) {
  const file = name === "home" ? `home-${locale}` : locale === "es" ? name : `${name}-en`;
  return { url: assetPath(`/images/og/${file}.jpg`), width: 1200, height: 630, alt };
}
function openGraph(
  locale: Locale,
  title: string,
  description: string,
  url: string | undefined,
  image: ReturnType<typeof ogImage>,
  type: "website" | "article",
) {
  return {
    title,
    description,
    type,
    siteName: "Avyn Remote",
    images: [image],
    locale: locale === "es" ? "es_AR" : "en_US",
    alternateLocale: locale === "es" ? "en_US" : "es_AR",
    ...(url ? { url } : {}),
  };
}
export function pageMetadata(locale: Locale, page: PageName): Metadata {
  const copy = getDictionary(locale).metadata[page];
  const path = page === "home" ? "/" : `/${page}/`;
  const url = canonical(localizedPath(locale, path));
  const image = ogImage(locale, ogImages[page], copy.title);
  const languages = {
    es: canonical(localizedPath("es", path)),
    en: canonical(localizedPath("en", path)),
    "x-default": canonical(localizedPath("es", path)),
  };
  return {
    title: { absolute: page === "home" ? copy.title : `${copy.title} | Avyn` },
    description: copy.description,
    ...(url ? { alternates: { canonical: url, languages } } : {}),
    openGraph: openGraph(locale, copy.title, copy.description, url, image, "website"),
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [image],
    },
  };
}

/** Index of the guides section. */
export function guidesIndexMetadata(locale: Locale): Metadata {
  const copy = getDictionary(locale).guides;
  const url = canonical(guidePath(locale));
  const image = ogImage(locale, "home", copy.metaTitle);
  return {
    title: { absolute: `${copy.metaTitle} | Avyn` },
    description: copy.metaDescription,
    ...(url
      ? {
          alternates: {
            canonical: url,
            languages: {
              es: canonical(guidePath("es")),
              en: canonical(guidePath("en")),
              "x-default": canonical(guidePath("es")),
            },
          },
        }
      : {}),
    openGraph: openGraph(locale, copy.metaTitle, copy.metaDescription, url, image, "website"),
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [image],
    },
  };
}

/** A single guide, with hreflang pointing at its translation. */
export function guideMetadata(locale: Locale, guide: Guide): Metadata {
  const url = canonical(guidePath(locale, guide.slug));
  const other = (language: Locale) => {
    const match = guideTranslation(guide.id, language);
    return match ? canonical(guidePath(language, match.slug)) : undefined;
  };
  const image = ogImage(locale, guide.image, guide.title);
  return {
    title: { absolute: `${guide.title} | Avyn` },
    description: guide.description,
    ...(url
      ? { alternates: { canonical: url, languages: { es: other("es"), en: other("en"), "x-default": other("es") } } }
      : {}),
    openGraph: openGraph(locale, guide.title, guide.description, url, image, "article"),
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [image],
    },
  };
}
