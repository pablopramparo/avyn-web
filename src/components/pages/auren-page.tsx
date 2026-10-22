import Image from "next/image";
import Link from "next/link";
import { Icon } from "../icon";
import { assetPath, siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
import styles from "./auren.module.css";
import { AurenControls } from "./auren-controls";
import { MicrosoftStoreBadge } from "../microsoft-store-badge";
import { JsonLd } from "../json-ld";
import { RelatedGuides } from "../related-guides";
import { productData } from "@/config/structured-data";

const icons = ["play", "monitor", "move", "folder", "power", "windows"];

export function AurenPage({ locale }: LocalizedProps) {
  const t = getDictionary(locale).auren;
  const storeLink = <MicrosoftStoreBadge locale={locale} href={siteConfig.urls.auren} label={t.store} />;
  return (
    <div className={styles.page}>
      <JsonLd data={productData(locale, "auren")!} />
      <section className={styles.hero}>
        <div className={styles.art}>
          <Image
            src={assetPath("/images/brand/auren-hero.webp")}
            alt={t.screenshots[0]}
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.copy}>
            <div className={styles.identity}>
              <Image
                src={assetPath("/images/brand/auren-logo-full.png")}
                alt="Auren Player"
                width={4500}
                height={960}
                sizes="160px"
              />
              <p className="eyebrow">{t.eyebrow}</p>
            </div>
            <h1>{t.title}<br /><span>{t.accent}</span></h1>
            <p className={styles.intro}>{t.intro}</p>
            <div className={styles.heroMeta}>
              {storeLink}
              <p className={styles.requirements}>{t.requirements}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`container ${styles.controls}`}>
        <div className="section-heading">
          <p className="eyebrow">{t.controlsEyebrow}</p>
          <h2>{t.controlsTitle}</h2>
        </div>
        <AurenControls controls={t.controls} hint={t.controlsHint} label={t.controlsLabel} />
      </section>

      <section className={`container ${styles.features}`}>
        <div className="section-heading">
          <p className="eyebrow">{t.featuresEyebrow}</p>
          <h2>{t.featuresTitle}</h2>
        </div>
        <div className={styles.grid}>
          {t.features.map((feature, index) => (
            <article key={feature.title}>
              <Icon name={icons[index]} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`container ${styles.independent}`}>
        <h2>{t.independentTitle}</h2>
        <div><p>{t.independentText}</p><p className={styles.privacy}>{t.privacy}</p></div>
      </section>

      <section className={styles.integration}>
        <div className={styles.integrationArt}>
          <Image
            src={assetPath("/images/brand/avyn-plus-auren.webp")}
            alt=""
            fill
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
        <div className={`container ${styles.integrationInner}`}>
          <div className={styles.integrationCopy}>
            <p className="eyebrow">{t.integrationEyebrow}</p>
            <h2>{t.integrationTitle}</h2>
            <p>{t.integrationText}</p>
            <p className="fine-print">{t.integrationNote}</p>
            <Link className="button secondary" href={localizedPath(locale, "/download/")}>{t.integrationLink}</Link>
          </div>
        </div>
      </section>

      <RelatedGuides locale={locale} ids={["tv"]} />

      <section className={`container ${styles.closing}`}>
        <h2>{t.closingTitle}</h2>
        <p>{t.closingText}</p>
        {storeLink}
        <p className={styles.requirements}>{t.requirements}</p>
      </section>
    </div>
  );
}
