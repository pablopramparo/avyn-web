import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
import { guidePath } from "@/content/guide-paths";
import { LanguageSwitcher } from "./language-switcher";
export function Brand({ locale }: LocalizedProps) {
  const t = getDictionary(locale);
  return (
    <Link
      href={localizedPath(locale)}
      className="brand"
      aria-label={t.common.home}
    >
      <Image
        src={assetPath("/images/brand/mark.png")}
        width={40}
        height={40}
        alt=""
      />
      <span>Avyn</span>
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
          <Link href={localizedPath(locale, "/kantor/")}>Kantor</Link>
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
        <Link href={localizedPath(locale, "/kantor/")}>Kantor</Link>
        <Link href={guidePath(locale)}>{t.nav.guides}</Link>
        <Link href={localizedPath(locale, "/verify/")}>{t.common.verify}</Link>
        <Link href={localizedPath(locale, "/download/#requirements")}>
          {t.nav.requirements}
        </Link>
        <Link href={localizedPath(locale, "/download/")}>{t.nav.download}</Link>
      </nav>
      <p className="footer-note">{t.nav.footerNote}</p>
    </footer>
  );
}
