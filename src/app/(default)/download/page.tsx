import { DownloadPage } from "@/components/pages/download-page";
import { pageMetadata } from "@/i18n/metadata";
import { defaultLocale } from "@/i18n/config";
export const metadata = pageMetadata(defaultLocale, "download");
export default function Page() {
  return <DownloadPage locale={defaultLocale} />;
}
