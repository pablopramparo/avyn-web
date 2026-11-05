import Link from "next/link";
import { PageIntro } from "../page-intro";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
import { faqGroups, type FaqLink } from "@/content/faq";
import { guides } from "@/content/guides";
import { guidePath } from "@/content/guide-paths";
import styles from "./guides.module.css";

/** Turns [text](https://…) into a link that opens in a new tab; any other text stays as is. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(https:\/\/[^)\s]+\))/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = /^\[([^\]]+)\]\((https:\/\/[^)\s]+)\)$/.exec(part);
        return match ? (
          <a key={index} className="text-link" href={match[2]} target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>
        ) : (
          part
        );
      })}
    </>
  );
}

/** An answer is a list of paragraphs; consecutive lines starting with "• " become one bullet list. */
function Answer({ lines }: { lines: string[] }) {
  const blocks: ({ p: string } | { items: string[] })[] = [];
  for (const line of lines) {
    if (line.startsWith("• ")) {
      const last = blocks[blocks.length - 1];
      if (last && "items" in last) last.items.push(line.slice(2));
      else blocks.push({ items: [line.slice(2)] });
    } else blocks.push({ p: line });
  }
  return (
    <>
      {blocks.map((block, index) =>
        "p" in block ? (
          <p key={index}><Inline text={block.p} /></p>
        ) : (
          <ul key={index}>
            {block.items.map((item) => (
              <li key={item}><Inline text={item} /></li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

function linkHref(locale: LocalizedProps["locale"], link: FaqLink) {
  if ("guide" in link) {
    const target = guides[locale].find((item) => item.id === link.guide);
    return target ? guidePath(locale, target.slug) : guidePath(locale);
  }
  return localizedPath(locale, link.path);
}

/** The FAQ has its own content (src/content/faq.ts), grouped by what people ask; the guides keep the step by step. */
export function FaqPage({ locale }: LocalizedProps) {
  const t = getDictionary(locale).faq;
  const groups = faqGroups[locale];
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title}>
        {t.intro}
      </PageIntro>
      <div className="container document-content">
        <nav className={styles.faqNav} aria-label={t.topics}>
          {groups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.title}
            </a>
          ))}
        </nav>
        {groups.map((group) => (
          <section key={group.id} id={group.id} className={styles.faqSection}>
            <h2>{group.title}</h2>
            <dl className={styles.faq}>
              {group.items.map((item) => (
                <div key={item.q}>
                  <dt>{item.q}</dt>
                  <dd>
                    <Answer lines={item.a} />
                    {item.link && (
                      <Link className={styles.faqLink} href={linkHref(locale, item.link)}>
                        {item.link.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </>
  );
}
