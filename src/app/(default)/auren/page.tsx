import { AurenPage } from "@/components/pages/auren-page";
import { pageMetadata } from "@/i18n/metadata";
import { defaultLocale } from "@/i18n/config";

export const metadata = pageMetadata(defaultLocale, "auren");
export default function Page() {
  return <AurenPage locale={defaultLocale} />;
}
