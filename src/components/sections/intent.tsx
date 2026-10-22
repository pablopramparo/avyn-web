import { Icon } from "../icon";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
export function Intent({ locale }: LocalizedProps) {
  const t = getDictionary(locale).intent;
  return (
    <section className="intent section">
      <div className="container split">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>
            {t.title}
            <br />
            {t.want}
            <br />
            <span className="muted">{t.how}</span>
          </h2>
          <p className="lead">{t.lead}</p>
          <p>{t.text}</p>
          <p className="fine-print">{t.note}</p>
        </div>
        <div className="intent-flow">
          <div className="intent-trigger">
            <span className="intent-trigger-icon"><Icon name="play" /></span>
            <span className="intent-trigger-copy"><strong>{t.action}</strong><small>{t.one}</small></span>
            <span className="intent-coordinator">Avyn</span>
          </div>
          <ol aria-label={t.sequenceLabel}>
            {t.steps.map((s, i) => (
              <li key={i}>
                <span className="step-number">0{i + 1}</span>
                <span>{s}</span>
                <Icon name="check" />
              </li>
            ))}
          </ol>
          <p className="intent-caption">{t.caption}</p>
        </div>
      </div>
    </section>
  );
}
