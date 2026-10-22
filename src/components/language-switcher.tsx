"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { locales, localizedPath, type Locale } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { translatePath } from "@/content/guide-paths";
export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const withoutBase =
    siteConfig.basePath &&
    (pathname === siteConfig.basePath ||
      pathname.startsWith(siteConfig.basePath + "/"))
      ? pathname.slice(siteConfig.basePath.length)
      : pathname;
  const path = withoutBase.replace(/^\/(?:es|en)(?=\/|$)/, "") || "/";
  const pathFor = (language: Locale) => translatePath(path, locale, language);
  return (
    <nav className="language-switcher" aria-label={label}>
      {locales.map((language) => (
        <Link
          key={language}
          href={localizedPath(language, pathFor(language))}
          scroll={false}
          hrefLang={language}
          lang={language}
          aria-current={language === locale ? "true" : undefined}
          onNavigate={(event) => {
            // Keep the current URL context without scrolling to its hash again.
            // onNavigate leaves modified clicks and open-in-new-tab behavior intact.
            event.preventDefault();
            router.push(
              localizedPath(language, pathFor(language)) +
                window.location.search +
                window.location.hash,
              { scroll: false },
            );
          }}
        >
          {language === "es" ? "Español" : "English"}
        </Link>
      ))}
    </nav>
  );
}
