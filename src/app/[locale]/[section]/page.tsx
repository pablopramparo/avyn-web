import { notFound } from "next/navigation";
import { GuidesIndexPage } from "@/components/pages/guides-page";
import { guideSection } from "@/content/guide-paths";
import { locales } from "@/i18n/config";
import { guidesIndexMetadata } from "@/i18n/metadata";
import { resolveLocale } from "@/i18n/resolve-locale";

type Props = { params: Promise<{ locale: string; section: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale, section: guideSection[locale] }));
}

async function resolve({ params }: Props) {
  const locale = await resolveLocale(params);
  const { section } = await params;
  if (section !== guideSection[locale]) notFound();
  return locale;
}

export async function generateMetadata(props: Props) {
  return guidesIndexMetadata(await resolve(props));
}
export default async function Page(props: Props) {
  return <GuidesIndexPage locale={await resolve(props)} />;
}
