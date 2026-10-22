import { DownloadPage } from "@/components/pages/download-page";
import { pageMetadata } from "@/i18n/metadata";
import { resolveLocale } from "@/i18n/resolve-locale";
import type { LocaleParams } from "@/i18n/config";
export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await resolveLocale(params), "download");
}
export default async function Page({ params }: LocaleParams) {
  return <DownloadPage locale={await resolveLocale(params)} />;
}
