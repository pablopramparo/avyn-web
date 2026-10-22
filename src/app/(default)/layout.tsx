import type { Metadata } from "next";
import { SiteDocument } from "@/components/site-document";
import { rootMetadata, rootViewport } from "@/config/seo";
import { defaultLocale } from "@/i18n/config";
export const metadata: Metadata = rootMetadata;
export const viewport = rootViewport;
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteDocument locale={defaultLocale}>{children}</SiteDocument>;
}
