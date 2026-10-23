import type { MetadataRoute } from "next";
import { canonical } from "@/config/site";
import { guides } from "@/content/guides";
import { guidePath } from "@/content/guide-paths";
import { localizedPath, locales, type Locale } from "@/i18n/config";
export const dynamic = "force-static";

const pages = ["", "security/", "verify/", "download/", "auren/", "kantaria/"];

/** One sitemap entry per language of a page, each listing all its language alternates. */
function entries(pathFor: (locale: Locale) => string | undefined): MetadataRoute.Sitemap {
  const urls: Record<string, string> = {};
  for (const locale of locales) {
    const path = pathFor(locale);
    const url = path ? canonical(path) : undefined;
    if (url) urls[locale] = url;
  }
  return Object.values(urls).map((url) => ({ url, alternates: { languages: urls } }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const site = pages.flatMap((page) =>
    entries((locale) => localizedPath(locale, page ? `/${page}` : "/")),
  );
  const guideIndex = entries((locale) => guidePath(locale));
  const guidePages = guides.es.flatMap((guide) =>
    entries((locale) => {
      const match = guides[locale].find((item) => item.id === guide.id);
      return match ? guidePath(locale, match.slug) : undefined;
    }),
  );
  return [...site, ...guideIndex, ...guidePages];
}
