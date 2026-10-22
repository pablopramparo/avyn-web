import { MicrosoftStoreBadge } from "./microsoft-store-badge";
import { GooglePlayBadge } from "./google-play-badge";
import Image from "next/image";
import { assetPath, siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
export function DownloadButtons({ locale }: LocalizedProps) {
  const t = getDictionary(locale).common;
  return (
    <div className="button-row">
      <MicrosoftStoreBadge
        locale={locale}
        href={siteConfig.urls.windows || localizedPath(locale, "/download/#windows")}
        label={t.windows}
      />
      <GooglePlayBadge
        locale={locale}
        href={siteConfig.urls.android || localizedPath(locale, "/download/#android")}
        label={t.android}
      />
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
export function ReleaseLink({
  href,
  label,
  locale,
}: { href: string; label: string } & LocalizedProps) {
  const t = getDictionary(locale).common;
  return href ? (
    <a className="button" href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <div className="release-pending">
      <span>{t.releasePending}</span>
      <p>{t.releaseDetails}</p>
    </div>
  );
}
