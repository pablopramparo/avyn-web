import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/config/site";
import styles from "./local.module.css";
import { Icon } from "../icon";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
export function HowItWorks({ locale }: LocalizedProps) {
  const t = getDictionary(locale).how;
  return (
    <section id="how-it-works" className="section container">
      <div className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
        <p>
          {t.text}
          <br />
          {t.detail}
        </p>
      </div>
      <div className="steps-grid">
        {t.steps.map((s, i) => (
          <article key={i}>
            <span className="large-number">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function LocalFirst({ locale }: LocalizedProps) {
  const d = getDictionary(locale),
    t = d.local;
  return (
    <section className={`section ${styles.section}`} aria-labelledby="local-title">
      <div className="container">
        <div className={styles.heading}>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="local-title">{t.titleLead} <span>{t.titleAccent}</span></h2>
        </div>
        <figure className={styles.diagram}>
          <Image src={assetPath("/images/brand/local.png")} alt={t.diagram} width={1993} height={789} sizes="(max-width: 1320px) 100vw, 1240px" />
          <p className={styles.cloud}>{t.noCloud}</p>
          <figcaption className={styles.network}>
            <strong>{t.network}</strong>
            <span>{t.encrypted}</span>
          </figcaption>
        </figure>
        <ul className={styles.benefits}>
          {t.benefits.map((benefit, index) => (
            <li key={benefit.title}>
              <Icon name={["user-off", "cloud-off", "shield"][index]} />
              <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
            </li>
          ))}
        </ul>
        <div className={styles.description}>
          <p>{t.text}</p>
          <Link
            href={localizedPath(locale, "/security/")}
            className="text-link"
          >
            {t.security}
          </Link>
        </div>
        <div className={`verify-strip ${styles.verify}`}>
          <div>
            <h3>{d.common.trust}</h3>
            <p>{t.verifyText}</p>
          </div>
          <Link
            className="button secondary"
            href={localizedPath(locale, "/verify/")}
          >
            {d.common.verify}
          </Link>
        </div>
      </div>
    </section>
  );
}
