import { Icon } from "./icon";
import { MicrosoftStoreBadge } from "./microsoft-store-badge";
import { GooglePlayBadge } from "./google-play-badge";
import Image from "next/image";
import Link from "next/link";
import { assetPath, siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
/**
 * Shown instead of a store badge while the store listing is not published yet. It has the shape of
 * the badges (dark glass, hairline border, a glyph and two lines) but never their logos: those are
 * only for the official, unmodified badges once the listing exists.
 */
export function ComingSoon({ kicker, store, icon }: { kicker: string; store: string; icon: string }) {
  return (
    <span className="coming-soon">
      <Icon name={icon} className="coming-soon-icon" />
      <span className="coming-soon-text">
        <small>{kicker}</small>
        <strong>{store}</strong>
      </span>
    </span>
  );
}
export function DownloadButtons({ locale }: LocalizedProps) {
  const t = getDictionary(locale).common;
  return (
    <>
      <div className="button-row">
        {siteConfig.urls.windows ? (
          <MicrosoftStoreBadge locale={locale} href={siteConfig.urls.windows} label={t.windows} />
        ) : (
          <ComingSoon kicker={t.comingSoonOn} store="Microsoft Store" icon="windows" />
        )}
        {siteConfig.urls.android ? (
          <GooglePlayBadge locale={locale} href={siteConfig.urls.android} label={t.android} />
        ) : (
          <ComingSoon kicker={t.comingSoonOn} store="Google Play" icon="phone" />
        )}
      </div>
      {siteConfig.urls.android && (
        <p className="fine-print beta-note">
          {t.androidBeta} <Link href={`/${locale}/download/#android`}>{t.androidBetaLink}</Link>
        </p>
      )}
    </>
  );
}
export function ExtensionButtons({ locale }: LocalizedProps) {
  const t = getDictionary(locale).download;
  return (
    <div className="button-row extension-buttons">
      <a className="button secondary" href={siteConfig.urls.chromeExtension} target="_blank" rel="noopener noreferrer">
        <Image src={assetPath("/images/brand/chrome.svg")} alt="" width={22} height={22} />
        {t.chromeExtension}
      </a>
      <a className="button secondary" href={siteConfig.urls.edgeExtension} target="_blank" rel="noopener noreferrer">
        <Image src={assetPath("/images/brand/edge.svg")} alt="" width={22} height={22} />
        {t.edgeExtension}
      </a>
    </div>
  );
}
