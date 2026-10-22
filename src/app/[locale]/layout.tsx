import type { Metadata } from "next";
import { SiteDocument } from "@/components/site-document";
import { locales, type LocaleParams } from "@/i18n/config";
import { resolveLocale } from "@/i18n/resolve-locale";
import { rootMetadata, rootViewport } from "@/config/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const metadata: Metadata = rootMetadata;
export const viewport = rootViewport;
export default async function LocaleLayout({
  children,
  params,
}: LocaleParams & { children: React.ReactNode }) {
  const locale = await resolveLocale(params);
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}
