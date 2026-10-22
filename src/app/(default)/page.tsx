import { HomePage } from "@/components/pages/home-page";
import { pageMetadata } from "@/i18n/metadata";
import { defaultLocale } from "@/i18n/config";
export const metadata = pageMetadata(defaultLocale, "home");
export default function Page() {
  return <HomePage locale={defaultLocale} />;
}
