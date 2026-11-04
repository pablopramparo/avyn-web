import Link from "next/link";
import { PageIntro } from "../page-intro";
import { getDictionary } from "@/i18n/dictionaries";
import { type LocalizedProps } from "@/i18n/config";
import { guides } from "@/content/guides";
import { guidePath } from "@/content/guide-paths";
import styles from "./guides.module.css";

/** Every guide keeps its own questions; this page only gathers them by topic, so an answer lives in one place. */
export function FaqPage({ locale }: LocalizedProps) {
  const t = getDictionary(locale).faq;
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title}>
        {t.intro}
      </PageIntro>
      <div className="container document-content">
        {guides[locale].map((guide) => (
          <section key={guide.id} id={guide.id}>
            <h2>{guide.title}</h2>
            <dl className={styles.faq}>
              {guide.faq.map((item) => (
                <div key={item.q}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
            <p>
              <Link className="text-link" href={guidePath(locale, guide.slug)}>
                {t.guide}
              </Link>
            </p>
          </section>
        ))}
      </div>
    </>
  );
}
