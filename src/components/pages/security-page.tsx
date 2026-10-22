import Link from "next/link";
import { PageIntro } from "../page-intro";
import { Icon } from "../icon";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath, type LocalizedProps } from "@/i18n/config";
const icons = ["phone", "lock", "shield", "check", "power", "lock"];
export function SecurityPage({ locale }: LocalizedProps) {
  const d = getDictionary(locale),
    t = d.security;
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title}>
        {t.intro}
      </PageIntro>
      <div className="container document-content">
        <div className="info-grid">
          {t.mechanisms.map((s, i) => (
            <article className="info-card" key={i}>
              <Icon name={icons[i]} />
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <section className="document-band">
          <p className="eyebrow">{t.local}</p>
          <h2>{t.bandTitle}</h2>
          <p>{t.bandText}</p>
          <p>{t.note}</p>
          <Link className="text-link" href={localizedPath(locale, "/verify/")}>
            {d.common.trust}
          </Link>
        </section>
      </div>
    </>
  );
}
