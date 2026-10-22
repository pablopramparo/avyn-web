import Image from "next/image";
import Link from "next/link";
import { assetPath, siteConfig } from "@/config/site";
import { DownloadButtons, ExtensionButtons } from "../download-buttons";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
import { Icon } from "../icon";
import { MicrosoftStoreBadge } from "../microsoft-store-badge";
export function Integrations({ locale }: LocalizedProps) {
  const t = getDictionary(locale).integrations;
  return (
    <section className="section container integration-grid">
      <div className="auren-card">
        <div className="auren-heading">
          <div className="auren-identity">
            <a className="auren-brand" href={siteConfig.urls.auren} target="_blank" rel="noopener noreferrer" aria-label="Auren Player">
              <Image
                src={assetPath("/images/brand/auren-logo-full.png")}
                alt=""
                width={4500}
                height={960}
                sizes="(max-width: 760px) 132px, 160px"
              />
            </a>
            <p className="eyebrow">{t.eyebrow}</p>
          </div>
          <h2>{t.title}<br />{t.subtitle}</h2>
        </div>
        <div className="auren-stage">
          <Image
            className="auren-capture"
            src={assetPath("/images/brand/auren-hero.webp")}
            alt={t.captureAlt}
            fill
            sizes="(max-width: 760px) 100vw, (max-width: 1100px) 55vw, 700px"
          />
        </div>
        <div className="auren-details">
          <div className="auren-info">
            <p>{t.text}</p>
            <p className="integration-label">
              {t.free}
              <br />
              {t.included}
            </p>
          </div>
          <div className="auren-actions">
            <MicrosoftStoreBadge locale={locale} href={siteConfig.urls.auren} label={t.aurenStore} className="auren-store" />
            <Link className="text-link auren-details-link" href={localizedPath(locale, "/auren/")}>
              {t.aurenDetails}
            </Link>
          </div>
        </div>
      </div>
      <aside className="browser-card">
        <p className="eyebrow">{t.browserEyebrow}</p>
        <h3>{t.browserTitle}</h3>
        <p>{t.browserText}</p>
        <div className="browser-visual" aria-hidden="true">
          <svg viewBox="0 0 360 220" focusable="false">
            {/* Browser window with a generic media player */}
            <rect x="8" y="10" width="268" height="170" rx="12" className="bv-surface" />
            <path d="M8 40h268" className="bv-line" />
            <circle cx="26" cy="25" r="4" className="bv-dot" />
            <circle cx="40" cy="25" r="4" className="bv-dot" />
            <circle cx="54" cy="25" r="4" className="bv-dot" />
            <rect x="72" y="17" width="150" height="16" rx="8" className="bv-field" />
            <rect x="22" y="52" width="240" height="94" rx="6" className="bv-video" />
            <circle cx="142" cy="99" r="22" className="bv-ring" />
            <path d="M135 87v24l20-12z" className="bv-accent" />
            <rect x="22" y="158" width="240" height="4" rx="2" className="bv-track" />
            <rect x="22" y="158" width="96" height="4" rx="2" className="bv-accent" />
            <circle cx="118" cy="160" r="5" className="bv-accent" />
            {/* Connection between phone and player */}
            <path d="M236 128L166 104" className="bv-link" />
            <circle cx="166" cy="104" r="3" className="bv-accent" />
            {/* Phone used as remote control */}
            <rect x="232" y="60" width="112" height="150" rx="16" className="bv-phone" />
            <rect x="270" y="68" width="36" height="4" rx="2" className="bv-track" />
            <rect x="248" y="86" width="62" height="6" rx="3" className="bv-muted" />
            <rect x="248" y="98" width="40" height="5" rx="2.5" className="bv-track" />
            <path d="M262 135v14l-10-7zM326 135v14l10-7z" className="bv-muted" />
            <circle cx="288" cy="142" r="17" className="bv-accent" />
            <path d="M282 134h4v16h-4zM290 134h4v16h-4z" className="bv-ink" />
            <rect x="248" y="178" width="80" height="4" rx="2" className="bv-track" />
            <rect x="248" y="178" width="48" height="4" rx="2" className="bv-muted" />
            <circle cx="296" cy="180" r="5" className="bv-muted" />
          </svg>
        </div>
        <p className="fine-print">{t.browserNote}</p>
        <ExtensionButtons locale={locale} />
      </aside>
    </section>
  );
}
export function Editions({ locale }: LocalizedProps) {
  const t = getDictionary(locale).editions;
  return (
    <section className="section container editions">
      <div>
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>
          {t.title}
          <br />
          {t.subtitle}
        </h2>
        <p>{t.text}</p>
      </div>
      <div className="edition-notes">
        <ul className="edition-benefits">
          {t.benefits.map((benefit) => <li key={benefit}><Icon name="check" />{benefit}</li>)}
        </ul>
        <p className="edition-note">{t.note}</p>
      </div>
    </section>
  );
}
export function FinalCta({ locale }: LocalizedProps) {
  const t = getDictionary(locale).cta;
  return (
    <section className="section final-cta container">
      <p className="eyebrow">{t.eyebrow}</p>
      <h2>
        {t.title}
        <br />
        <span>{t.subtitle}</span>
      </h2>
      <DownloadButtons locale={locale} />
      <p>{t.detail}</p>
    </section>
  );
}
