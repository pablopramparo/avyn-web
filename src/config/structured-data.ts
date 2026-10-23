import { assetPath, canonical } from "./site";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type Locale } from "@/i18n/config";
import type { PageName } from "@/i18n/metadata";
import type { Guide } from "@/content/guides";
import { guidePath } from "@/content/guide-paths";

const logo = () => canonical("/icon-512.png") ?? assetPath("/icon-512.png");

/** Organization and WebSite for the home page. */
export function siteData(locale: Locale) {
  const copy = getDictionary(locale).metadata.home;
  const url = canonical(localizedPath(locale, "/"));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": (canonical("/") ?? "") + "#organization",
        name: "Avyn Remote",
        ...(canonical("/") ? { url: canonical("/") } : {}),
        logo: logo(),
      },
      {
        "@type": "WebSite",
        "@id": (canonical("/") ?? "") + "#website",
        name: "Avyn Remote",
        inLanguage: locale,
        ...(url ? { url } : {}),
        description: copy.description,
        publisher: { "@id": (canonical("/") ?? "") + "#organization" },
      },
    ],
  };
}

const products: Partial<Record<PageName, { name: string; os: string[]; category: string }>> = {
  home: { name: "Avyn Remote", os: ["Android", "Windows 10", "Windows 11"], category: "UtilitiesApplication" },
  auren: { name: "Auren Player", os: ["Windows 10", "Windows 11"], category: "MultimediaApplication" },
  kantaria: { name: "Kantaria", os: ["Windows 10", "Windows 11"], category: "GameApplication" },
};

/** SoftwareApplication for a product page. Free download; no ratings are claimed. */
export function productData(locale: Locale, page: PageName) {
  const product = products[page];
  if (!product) return null;
  const copy = getDictionary(locale).metadata[page];
  const url = canonical(localizedPath(locale, page === "home" ? "/" : `/${page}/`));
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: copy.description,
    applicationCategory: product.category,
    operatingSystem: product.os.join(", "),
    inLanguage: locale,
    ...(url ? { url } : {}),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

/** Article and breadcrumb for a guide. */
export function articleData(locale: Locale, guide: Guide) {
  const url = canonical(guidePath(locale, guide.slug));
  const home = canonical(localizedPath(locale, "/"));
  const index = canonical(guidePath(locale));
  const t = getDictionary(locale).guides;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        inLanguage: locale,
        datePublished: guide.updated,
        dateModified: guide.updated,
        ...(url ? { mainEntityOfPage: url, url } : {}),
        author: { "@type": "Organization", name: "Avyn Remote" },
        publisher: { "@type": "Organization", name: "Avyn Remote", logo: logo() },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.home, ...(home ? { item: home } : {}) },
          { "@type": "ListItem", position: 2, name: t.breadcrumb, ...(index ? { item: index } : {}) },
          { "@type": "ListItem", position: 3, name: guide.title, ...(url ? { item: url } : {}) },
        ],
      },
    ],
  };
}
