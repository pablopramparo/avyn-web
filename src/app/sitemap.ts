import type { MetadataRoute } from "next";
import { canonical } from "@/config/site";
import { localizedPath, locales } from "@/i18n/config";
export const dynamic = "force-static";

const pages = ["", "security/", "verify/", "download/", "auren/", "kantor/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => {
    const path = page ? `/${page}` : "/";
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      const url = canonical(localizedPath(locale, path));
      if (url) languages[locale] = url;
    }
    return locales.flatMap((locale) => {
      const url = canonical(localizedPath(locale, path));
      return url ? [{ url, alternates: { languages } }] : [];
    });
  });
}
