import { FaqPage } from "@/components/pages/faq-page";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLocale } from "@/i18n/resolve-locale";
import type { LocaleParams } from "@/i18n/config";
export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await resolveLocale(params), "faq");
}
export default async function Page({ params }: LocaleParams) {
  return <FaqPage locale={await resolveLocale(params)} />;
}
