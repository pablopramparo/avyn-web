import { KantariaPage } from "@/components/pages/kantaria-page";
import { pageMetadata } from "@/i18n/metadata";
import { defaultLocale } from "@/i18n/config";
export const metadata = pageMetadata(defaultLocale, "kantaria");
export default function Page() { return <KantariaPage locale={defaultLocale} />; }