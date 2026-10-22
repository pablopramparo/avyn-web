import { PageIntro } from "../page-intro";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
/** Renders `inline code` spans written with backticks in the dictionary text. */
function withCode(text: string) {
  return text
    .split("`")
    .map((part, i) => (i % 2 ? <code key={i}>{part}</code> : part));
}
export function VerifyPage({ locale }: LocalizedProps) {
  const d = getDictionary(locale),
    t = d.verify;
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={d.common.trust}>
        {t.intro}
      </PageIntro>
      <div className="container document-content">
        <div className="notice">
          <strong>{t.noticeTitle}</strong> {t.notice}
        </div>
        <ol className="verify-list">
          {t.steps.map((s, i) => (
            <li key={i}>
              <div>
                <h2>{s.title}</h2>
                <p>{withCode(s.text)}</p>
              </div>
            </li>
          ))}
        </ol>
        <section className="document-band">
          <h2>{t.bandTitle}</h2>
          <p>{t.bandText}</p>
          {siteConfig.urls.github ? (
            <a className="text-link" href={siteConfig.urls.github} target="_blank" rel="noopener noreferrer">
              {t.source}
            </a>
          ) : (
            <p className="fine-print">{t.sourcePending}</p>
          )}
        </section>
      </div>
    </>
  );
}
