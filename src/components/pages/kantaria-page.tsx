import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
import { assetPath, siteConfig } from "@/config/site";
import { Icon } from "../icon";
import { MicrosoftStoreBadge } from "../microsoft-store-badge";
import { KantariaPhoneShowcase } from "./kantaria-phone-showcase";
import { JsonLd } from "../json-ld";
import { RelatedGuides } from "../related-guides";
import { productData } from "@/config/structured-data";
import styles from "./kantaria.module.css";

export function KantariaPage({ locale }: LocalizedProps) {
  const t = getDictionary(locale).kantaria;
  const storeLink = <MicrosoftStoreBadge locale={locale} href={siteConfig.urls.kantaria} label={t.store} />;
  return (
    <div className={styles.page}>
      <JsonLd data={productData(locale, "kantaria")!} />
      <section className={styles.hero}>
        <div className={styles.art}>
          <Image src={assetPath("/images/kantaria/hero.webp")} alt={t.heroImageAlt} fill preload sizes="100vw" />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.copy}>
            <p className={styles.identity}><Image src={assetPath("/images/kantaria/logo.webp")} alt="Kantaria" width={900} height={360} sizes="150px" /><i />{t.eyebrow}</p>
            <h1>{t.title}<br /><span>{t.accent}</span></h1>
            <p className={styles.intro}>{t.intro}</p>
            <p className={styles.songsNote}>{t.songsNote}</p>
            <div className={styles.store}>{storeLink}</div>
            <p className={styles.requirements}>{t.requirements}</p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.experience}`}>
        <div className="section-heading">
          <p className="eyebrow">{t.experienceEyebrow}</p>
          <h2>{t.experienceTitle}</h2>
          <p>{t.experienceText}</p>
        </div>
        <figure className={styles.screenshot}><Image src={assetPath(`/images/kantaria/${locale}/library.webp`)} alt={t.libraryLabel} width={1600} height={900} sizes="(max-width: 760px) 100vw, 90vw" /><figcaption>{t.experienceTitle}</figcaption></figure>
      </section>

      <section className={`container ${styles.features}`}>
        <div className="section-heading">
          <p className="eyebrow">{t.featuresEyebrow}</p>
          <h2>{t.featuresTitle}</h2>
        </div>
        <div className={styles.featureGrid}>
          {t.features.map((feature, index) => (
            <article key={feature.title}>
              <Icon name={["music", "users", "chart", "phone", "folder", "wifi"][index]} className={styles.featureIcon} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`container ${styles.competition}`}>
        <div className={styles.competitionCopy}>
          <p className="eyebrow">{t.competitionEyebrow}</p>
          <h2>{t.competitionTitle}</h2>
          <p>{t.competitionText}</p>
        </div>
        <figure className={styles.screenshot}><Image src={assetPath(`/images/kantaria/${locale}/results.webp`)} alt={t.resultsLabel} width={1600} height={900} sizes="(max-width: 760px) 100vw, 65vw" /></figure>
      </section>

      <section className={`container ${styles.guests}`}>
        <div className={styles.guestScreens}><Image src={assetPath("/images/kantaria/guests.webp")} alt={t.guestsLabel} width={1280} height={853} sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className={styles.guestsCopy}>
          <p className="eyebrow">{t.guestsEyebrow}</p>
          <h2>{t.guestsTitle}</h2>
          <p>{t.guestsText}</p>
          <div className={styles.guestBenefits}>{t.guestBenefits.map((benefit, index) => <div key={benefit}><Icon name={["phone", "wifi", "users"][index]} className={styles.guestIcon} /><span>{benefit}</span></div>)}</div>
        </div>
      </section>

      <section className={styles.integration}>
        <div className={`container ${styles.integrationInner}`}>
          <div className={styles.integrationCopy}>
            <p className="eyebrow">{t.integrationEyebrow}</p>
            <h2>{t.integrationTitle}</h2>
            <p>{t.integrationText}</p>
            <p className="fine-print">{t.integrationNote}</p>
            <Link className="button secondary" href={localizedPath(locale, "/download/")}>{t.integrationLink}</Link>
          </div>
          <KantariaPhoneShowcase
            label={t.integrationLabel}
            slides={["playing", "songs", "queue", "people"].map((name, index) => ({ src: `/images/kantaria/${locale}/avyn-${name}.webp`, label: t.integrationScreens[index] }))}
          />
        </div>
      </section>

      <section className={`container ${styles.ultrasongs}`}>
        <div className={styles.ultrasongsCopy}>
          <Image src={assetPath("/images/kantaria/ultrasongs-logo.webp")} alt="UltraSongs" width={500} height={338} sizes="170px" />
          <p className="eyebrow">{t.ultrasongsEyebrow}</p>
          <h2>{t.ultrasongsTitle}</h2>
          <p>{t.ultrasongsText}</p>
          <p className="fine-print">{t.ultrasongsNote}</p>
          <a className="button secondary" href={siteConfig.urls.ultrasongs[locale === "es" ? "es" : "en"]} target="_blank" rel="noopener noreferrer">{t.ultrasongsLink}</a>
        </div>
        <figure className={styles.screenshot}><Image src={assetPath(`/images/kantaria/${locale}/ultrasongs-editor.webp`)} alt={t.ultrasongsImageAlt} width={1200} height={667} sizes="(max-width: 900px) 100vw, 58vw" /></figure>
      </section>

      <RelatedGuides locale={locale} ids={["karaoke"]} />

      <section className={styles.closing}>
        <div className={`container ${styles.closingInner}`}>
          <div><p className="eyebrow">{t.closingEyebrow}</p><h2>{t.closingTitle}</h2><p>{t.closingText}</p></div>
          <div className={styles.closingStatus}>{storeLink}<p className={styles.requirements}>{t.requirements}</p></div>
        </div>
      </section>
    </div>
  );
}
