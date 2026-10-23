import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
import { guidePath } from "@/content/guide-paths";
import { LanguageSwitcher } from "./language-switcher";
/**
 * Windows has no flag emoji glyphs (they render as "AR"), so the Argentine flag in a
 * translated string is drawn as a small inline SVG; other platforms are unaffected.
 */
function withFlag(text: string) {
  return text.split("🇦🇷").flatMap((part, index, parts) => [
    part,
    index < parts.length - 1 ? (
      <svg
        key={index}
        className="flag"
        viewBox="0 0 24 16"
        role="img"
        aria-label="Argentina"
      >
        <rect width="24" height="16" rx="2" fill="#74acdf" />
        <rect y="5.33" width="24" height="5.34" fill="#fff" />
        <circle cx="12" cy="8" r="1.7" fill="#f6b40e" />
      </svg>
    ) : null,
  ]);
}
export function Brand({ locale }: LocalizedProps) {
  const t = getDictionary(locale);
  return (
    <Link
      href={localizedPath(locale)}
      className="brand"
      aria-label={t.common.home}
    >
      <Image
        src={assetPath("/images/brand/logo-avyn.webp")}
        width={420}
        height={126}
        alt="Avyn"
        priority
      />
    </Link>
  );
}
export function Header({ locale }: LocalizedProps) {
  const t = getDictionary(locale);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand locale={locale} />
        <nav className="main-nav" aria-label={t.nav.main}>
          <Link href={localizedPath(locale, "/#features")}>
            {t.nav.features}
          </Link>
          <Link href={localizedPath(locale, "/#how-it-works")}>
            {t.nav.how}
          </Link>
          <Link href={localizedPath(locale, "/security/")}>
            {t.nav.security}
          </Link>
          <Link href={localizedPath(locale, "/auren/")}>Auren</Link>
          <Link href={localizedPath(locale, "/kantaria/")}>Kantaria</Link>
        </nav>
        <div className="header-tools">
          <LanguageSwitcher locale={locale} label={t.nav.language} />
          <Link
            href={localizedPath(locale, "/download/")}
            className="button compact"
          >
            {t.nav.get}
          </Link>
        </div>
      </div>
    </header>
  );
}
export function Footer({ locale }: LocalizedProps) {
  const t = getDictionary(locale);
  return (
    <footer className="container footer">
      <div>
        <Brand locale={locale} />
        <p>{t.common.slogan}</p>
      </div>
      <nav aria-label={t.nav.footer}>
        <Link href={localizedPath(locale, "/security/")}>{t.nav.security}</Link>
        <Link href={localizedPath(locale, "/auren/")}>Auren</Link>
        <Link href={localizedPath(locale, "/kantaria/")}>Kantaria</Link>
        <Link href={guidePath(locale)}>{t.nav.guides}</Link>
        <Link href={localizedPath(locale, "/verify/")}>{t.common.verify}</Link>
        <Link href={localizedPath(locale, "/download/#requirements")}>
          {t.nav.requirements}
        </Link>
        <Link href={localizedPath(locale, "/download/")}>{t.nav.download}</Link>
      </nav>
      <p className="footer-note">{t.nav.footerNote}</p>
      <p className="footer-origin">{withFlag(t.nav.footerOrigin)}</p>
    </footer>
  );
}
