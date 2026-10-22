import { Header, Footer } from "./site-shell";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import "@/app/globals.css";
export function SiteDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = getDictionary(locale);
  return (
    <html lang={locale}>
      <body>
        <a href="#main" className="skip-link">
          {t.common.skip}
        </a>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
