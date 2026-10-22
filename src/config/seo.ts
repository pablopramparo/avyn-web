import type { Metadata, Viewport } from "next";
import { assetPath, siteConfig } from "./site";

export const themeColor = "#030d19";

/** Metadata shared by the root layouts: indexing switch, icons, manifest and base URL. */
export const rootMetadata: Metadata = {
  ...(siteConfig.origin ? { metadataBase: new URL(siteConfig.origin) } : {}),
  robots: siteConfig.indexing
    ? { index: true, follow: true }
    : { index: false, follow: false },
  manifest: assetPath("/site.webmanifest"),
  icons: {
    icon: [
      { url: assetPath("/favicon.ico"), sizes: "any" },
      { url: assetPath("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { url: assetPath("/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: assetPath("/apple-touch-icon.png"), sizes: "180x180" }],
  },
};

export const rootViewport: Viewport = { themeColor };
