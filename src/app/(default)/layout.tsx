import type { Metadata } from "next";
import { SiteDocument } from "@/components/site-document";
import { assetPath, siteConfig } from "@/config/site";
import { defaultLocale } from "@/i18n/config";
export const metadata: Metadata = {
  ...(siteConfig.origin ? { metadataBase: new URL(siteConfig.origin) } : {}),
  robots: { index: false, follow: false },
  icons: { icon: assetPath("/images/brand/mark.png") },
};
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteDocument locale={defaultLocale}>{children}</SiteDocument>;
}
