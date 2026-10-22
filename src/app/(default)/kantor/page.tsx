import { KantorPage } from "@/components/pages/kantor-page";
import { pageMetadata } from "@/i18n/metadata";
import { defaultLocale } from "@/i18n/config";
export const metadata = pageMetadata(defaultLocale, "kantor");
export default function Page() { return <KantorPage locale={defaultLocale} />; }