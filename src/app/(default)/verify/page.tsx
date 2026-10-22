import { VerifyPage } from "@/components/pages/verify-page";
import { pageMetadata } from "@/i18n/metadata";
import { defaultLocale } from "@/i18n/config";
export const metadata = pageMetadata(defaultLocale, "verify");
export default function Page() {
  return <VerifyPage locale={defaultLocale} />;
}
