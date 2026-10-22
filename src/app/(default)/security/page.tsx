import { SecurityPage } from "@/components/pages/security-page";
import { pageMetadata } from "@/i18n/metadata";
import { defaultLocale } from "@/i18n/config";
export const metadata = pageMetadata(defaultLocale, "security");
export default function Page() {
  return <SecurityPage locale={defaultLocale} />;
}
