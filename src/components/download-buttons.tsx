import { Icon } from "./icon";
import Image from "next/image";
import Link from "next/link";
import { assetPath, siteConfig } from "@/config/site";
import { androidAccess } from "@/config/android-access";
import { guidePath, guideSlugs } from "@/content/guide-paths";
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
  internal,
}: {
  kicker: string;
  store: string;
  icon: string;
  href?: string;
  /** The link stays on this site: no store mark, same tab. */
  internal?: boolean;
}) {
  // Once the listing exists, the button carries the store's own mark.
  const mark = href && !internal && storeMarks[icon];
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
  if (internal) {
    return (
      <Link className="coming-soon coming-soon-link" href={href}>
        {content}
      </Link>
    );
  }
  return (
    <a className="coming-soon coming-soon-link" href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
/** `lead` is the line above the buttons; `notes` the network and tester lines below them (the hero leaves them to /download). */
export function DownloadButtons({
  locale,
  lead = true,
  notes = true,
}: LocalizedProps & { lead?: boolean; notes?: boolean }) {
  const t = getDictionary(locale).common;
  const android = androidAccess(locale);
  return (
    <div className="install">
      {lead && <p className="install-lead">{t.installLead}</p>}
      <div className="button-row">
        <div className="install-step">
          <span className="install-step-label">{t.stepPc}</span>
          <ComingSoon
            kicker={siteConfig.urls.windows ? t.availableOn : t.comingSoonOn}
            store="Microsoft Store"
            icon="windows"
            href={siteConfig.urls.windows}
          />
        </div>
        <div className="install-step">
          <span className="install-step-label">{t.stepPhone}</span>
          {android.closedBeta ? (
            <ComingSoon kicker={t.betaKicker} store={t.betaRequest} icon="phone" href={android.primaryHref} internal />
          ) : (
            <ComingSoon
              kicker={siteConfig.urls.android ? t.availableOn : t.comingSoonOn}
              store="Google Play"
              icon="phone"
              href={android.primaryHref}
            />
          )}
        </div>
      </div>
      {notes && (
        <p className="fine-print install-note">
        {t.sameNetwork}{" "}
        <Link href={guidePath(locale, guideSlugs.vpn[locale])}>{t.sameNetworkLink}</Link>
        </p>
      )}
      {notes && android.closedBeta && android.playHref && (
        <p className="fine-print install-note">
          {t.testerQuestion}{" "}
          <a href={android.playHref} target="_blank" rel="noopener noreferrer">
            {t.testerLink}
          </a>
        </p>
      )}
    </div>
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
