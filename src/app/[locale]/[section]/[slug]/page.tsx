import { notFound } from "next/navigation";
import { GuidePage } from "@/components/pages/guides-page";
import { findGuide, guides } from "@/content/guides";
import { guideSection } from "@/content/guide-paths";
import { locales } from "@/i18n/config";
import { guideMetadata } from "@/i18n/metadata";
import { resolveLocale } from "@/i18n/resolve-locale";

type Props = { params: Promise<{ locale: string; section: string; slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    guides[locale].map((guide) => ({ locale, section: guideSection[locale], slug: guide.slug })),
  );
}

async function resolve({ params }: Props) {
  const locale = await resolveLocale(params);
  const { section, slug } = await params;
  const guide = section === guideSection[locale] ? findGuide(locale, slug) : undefined;
  if (!guide) notFound();
  return { locale, guide };
}

export async function generateMetadata(props: Props) {
  const { locale, guide } = await resolve(props);
  return guideMetadata(locale, guide);
}
export default async function Page(props: Props) {
  const { locale, guide } = await resolve(props);
  return <GuidePage locale={locale} guide={guide} />;
}
