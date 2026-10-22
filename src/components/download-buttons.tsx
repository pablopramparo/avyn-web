import { MicrosoftStoreBadge } from "./microsoft-store-badge";
import { GooglePlayBadge } from "./google-play-badge";
import Image from "next/image";
import { assetPath, siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
/** Shown instead of a store badge while the store listing is not published yet. */
export function ComingSoon({ label }: { label: string }) {
  return (
    <span className="coming-soon" aria-disabled="true">
      {label}
    </span>
  );
}
export function DownloadButtons({ locale }: LocalizedProps) {
  const t = getDictionary(locale).common;
  return (
    <div className="button-row">
      {siteConfig.urls.windows ? (
        <MicrosoftStoreBadge locale={locale} href={siteConfig.urls.windows} label={t.windows} />
      ) : (
        <ComingSoon label={t.windowsSoon} />
      )}
      {siteConfig.urls.android ? (
        <GooglePlayBadge locale={locale} href={siteConfig.urls.android} label={t.android} />
      ) : (
        <ComingSoon label={t.androidSoon} />
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
