import { PageIntro } from "../page-intro";
import { ComingSoon, ExtensionButtons } from "../download-buttons";
import { Icon } from "../icon";
import { MicrosoftStoreBadge } from "../microsoft-store-badge";
import { GooglePlayBadge } from "../google-play-badge";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
export function DownloadPage({ locale }: LocalizedProps) {
  const d = getDictionary(locale),
    t = d.download;
  const downloads = [
    {
      id: "windows",
      badge: "microsoft",
      icon: "windows",
      name: t.windowsTitle,
      text: t.windowsText,
      url: siteConfig.urls.windows,
      label: d.common.windows,
      store: "Microsoft Store",
    },
    {
      id: "android",
      badge: "google",
      icon: "phone",
      name: t.androidTitle,
      text: t.androidText,
      url: siteConfig.urls.android,
      label: d.common.android,
      store: "Google Play",
    },
  ];
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title}>
        {t.intro}
      </PageIntro>
      <div className="container document-content">
        <div className="download-grid">
          {downloads.map((item) => (
            <section className="download-card" id={item.id} key={item.id}>
              <Icon name={item.icon} />
              <h2>{item.name}</h2>
              <p>{item.text}</p>
              {!item.url ? (
                <ComingSoon kicker={d.common.comingSoonOn} store={item.store} icon={item.icon} />
              ) : item.badge === "microsoft" ? (
                <MicrosoftStoreBadge locale={locale} href={item.url} label={item.label} />
              ) : (
                <GooglePlayBadge locale={locale} href={item.url} label={item.label} />
              )}
              {item.id === "windows" && !item.url && (
                <p className="beta-note">
                  {t.windowsDirectText}{" "}
                  <a href={siteConfig.urls.windowsDirect} target="_blank" rel="noopener noreferrer">
                    {t.windowsDirectLink}
                  </a>
                </p>
              )}
              {item.id === "android" && (
                <p className="beta-note">
                  {t.betaText}{" "}
                  <a href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(t.betaSubject)}`}>
                    {siteConfig.contactEmail}
                  </a>
                </p>
              )}
            </section>
          ))}
          <section className="download-card" id="extension">
            <Icon name="play" />
            <h2>{t.extensionTitle}</h2>
            <p>{t.extensionText}</p>
            <ExtensionButtons locale={locale} />
          </section>
        </div>
        <section id="requirements" className="document-band">
          <p className="eyebrow">{t.before}</p>
          <h2>{t.requirementsTitle}</h2>
          <div className="requirements">
            <div>
              <strong>Windows</strong>
              <p>{t.windowsRequirements}</p>
            </div>
            <div>
              <strong>Android</strong>
              <p>{t.androidRequirements}</p>
            </div>
            <div>
              <strong>{t.networkTitle}</strong>
              <p>{t.networkText}</p>
            </div>
          </div>
          <p className="fine-print">{t.compatibility}</p>
        </section>
        <section className="document-band">
          <h2>{t.editionsTitle}</h2>
          <p>{t.editionsText}</p>
        </section>
      </div>
    </>
  );
}
