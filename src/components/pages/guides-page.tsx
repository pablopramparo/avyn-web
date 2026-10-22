import Link from "next/link";
import { PageIntro } from "../page-intro";
import { JsonLd } from "../json-ld";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type Locale, type LocalizedProps } from "@/i18n/config";
import { guides, type Guide, type GuideBlock } from "@/content/guides";
import { guidePath } from "@/content/guide-paths";
import { articleData } from "@/config/structured-data";
import styles from "./guides.module.css";

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className={styles.steps}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "note":
      return <p className={styles.note}>{block.text}</p>;
  }
}

function formatDate(locale: Locale, iso: string) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-AR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export function GuidesIndexPage({ locale }: LocalizedProps) {
  const t = getDictionary(locale).guides;
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title}>
        {t.intro}
      </PageIntro>
      <div className="container document-content">
        <ul className={styles.cards}>
          {guides[locale].map((guide) => (
            <li key={guide.id}>
              <h2>
                <Link href={guidePath(locale, guide.slug)}>{guide.title}</Link>
              </h2>
              <p>{guide.description}</p>
              <Link className="text-link" href={guidePath(locale, guide.slug)}>
                {t.read}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function GuidePage({ locale, guide }: LocalizedProps & { guide: Guide }) {
  const t = getDictionary(locale).guides;
  return (
    <div className="container document-content">
      <JsonLd data={articleData(locale, guide)} />
      <nav className={styles.breadcrumb} aria-label={t.breadcrumb}>
        <Link href={localizedPath(locale, "/")}>{t.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href={guidePath(locale)}>{t.breadcrumb}</Link>
      </nav>
      <article className={styles.article}>
        <header>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{guide.title}</h1>
          <p className={styles.intro}>{guide.intro}</p>
          <p className={styles.updated}>
            {t.updated} <time dateTime={guide.updated}>{formatDate(locale, guide.updated)}</time>
          </p>
        </header>
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.blocks.map((block, index) => (
              <Block block={block} key={index} />
            ))}
          </section>
        ))}
        <section>
          <h2>{t.faq}</h2>
          <dl className={styles.faq}>
            {guide.faq.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className={styles.related}>
          <h2>{t.related}</h2>
          <ul>
            {guide.related.map((link) => (
              <li key={link.path}>
                <Link className="text-link" href={localizedPath(locale, link.path)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
