import { Icon } from "./icon";
import Image from "next/image";
import Link from "next/link";
import { assetPath, siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
const storeMarks: Record<string, string> = {
  windows: "/images/brand/microsoft-store-icon.webp",
  phone: "/images/brand/google-play-icon.webp",
};
/**
 * Store button in the site's own style (dark glass, hairline border, a glyph and two lines).
 * Without `href` it is the "coming soon" placeholder, with a generic glyph; with it, a link that
 * shows the store's mark.
 */
export function ComingSoon({
  kicker,
  store,
  icon,
  href,
}: {
  kicker: string;
  store: string;
  icon: string;
  href?: string;
}) {
  // Once the listing exists, the button carries the store's own mark.
  const mark = href && storeMarks[icon];
  const content = (
    <>
      {mark ? (
        <Image src={assetPath(mark)} alt="" width={28} height={28} className="coming-soon-icon" />
      ) : (
        <Icon name={icon} className="coming-soon-icon" />
      )}
      <span className="coming-soon-text">
        <small>{kicker}</small>
        <strong>{store}</strong>
      </span>
    </>
  );
  if (!href) return <span className="coming-soon">{content}</span>;
  return (
    <a className="coming-soon coming-soon-link" href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
export function DownloadButtons({ locale }: LocalizedProps) {
  const t = getDictionary(locale).common;
  return (
    <>
      <div className="button-row">
        <ComingSoon
          kicker={siteConfig.urls.windows ? t.availableOn : t.comingSoonOn}
          store="Microsoft Store"
          icon="windows"
          href={siteConfig.urls.windows}
        />
        <ComingSoon
          kicker={siteConfig.urls.android ? t.betaOn : t.comingSoonOn}
          store="Google Play"
          icon="phone"
          href={siteConfig.urls.android}
        />
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
