import { SecurityPage } from "@/components/pages/security-page";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLocale } from "@/i18n/resolve-locale";
import type { LocaleParams } from "@/i18n/config";
export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await resolveLocale(params), "security");
}
export default async function Page({ params }: LocaleParams) {
  return <SecurityPage locale={await resolveLocale(params)} />;
}
