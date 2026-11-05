import Link from "next/link";
import { PageIntro } from "../page-intro";
import { guidePath, guideSlugs } from "@/content/guide-paths";
import { ComingSoon, ExtensionButtons } from "../download-buttons";
import { Icon } from "../icon";
import { siteConfig } from "@/config/site";
import { androidAccess } from "@/config/android-access";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
export function DownloadPage({ locale }: LocalizedProps) {
  const d = getDictionary(locale),
    t = d.download,
    android = androidAccess(locale);
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
      step: d.common.stepPc,
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
      step: d.common.stepPhone,
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
              <p className="install-step-label">{item.step}</p>
              <h2>{item.name}</h2>
              <p>{item.text}</p>
              {item.id === "android" && android.closedBeta ? (
                <div className="beta-box">
                  <h3>{t.betaTitle}</h3>
                  <p>
                    {t.betaText}{" "}
                    <a href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(t.betaSubject)}`}>
                      {siteConfig.contactEmail}
                    </a>
                  </p>
                  <p>{t.betaUnlocked}</p>
                  {item.url && (
                    <p className="beta-box-tester">
                      {t.testerPlay}{" "}
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {d.common.testerLink}
                      </a>
                    </p>
                  )}
                </div>
              ) : (
                <ComingSoon
                  kicker={!item.url ? d.common.comingSoonOn : d.common.availableOn}
                  store={item.store}
                  icon={item.icon}
                  href={item.url}
                />
              )}
              {item.id === "windows" && (
                <p className="beta-note">
                  {t.windowsDirectText}{" "}
                  <a href={siteConfig.urls.windowsDirect} target="_blank" rel="noopener noreferrer">
                    {t.windowsDirectLink}
                  </a>
                </p>
              )}
            </section>
          ))}
        </div>
        <section className="document-band pair-band" id="pair">
          <p className="eyebrow">{t.pairEyebrow}</p>
          <h2>{t.pairTitle}</h2>
          <p>{t.pairText}</p>
          <Link className="button secondary" href={guidePath(locale, guideSlugs["pair-phone"][locale])}>
            {t.pairLink}
          </Link>
        </section>
        <section className="document-band optional-band" id="extension">
          <p className="eyebrow">{t.optionalEyebrow}</p>
          <h2>{t.extensionTitle}</h2>
          <p>{t.extensionText}</p>
          <ExtensionButtons locale={locale} />
        </section>
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
