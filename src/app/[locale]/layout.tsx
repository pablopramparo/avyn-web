import type { Metadata } from "next";
import { SiteDocument } from "@/components/site-document";
import { locales, type LocaleParams } from "@/i18n/config";
import { resolveLocale } from "@/i18n/resolve-locale";
import { assetPath, siteConfig } from "@/config/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const metadata: Metadata = {
  ...(siteConfig.origin ? { metadataBase: new URL(siteConfig.origin) } : {}),
  robots: { index: false, follow: false },
  icons: { icon: assetPath("/images/brand/mark.png") },
};
export default async function LocaleLayout({
  children,
  params,
}: LocaleParams & { children: React.ReactNode }) {
  const locale = await resolveLocale(params);
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}
