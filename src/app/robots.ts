import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.indexing) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteConfig.origin
      ? { sitemap: siteConfig.origin.replace(/\/$/, "") + siteConfig.basePath + "/sitemap.xml" }
      : {}),
  };
}
