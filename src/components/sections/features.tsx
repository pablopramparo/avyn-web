import { screenshots } from "@/config/screenshots";
import { Icon } from "../icon";
import { ScreenshotCard } from "../screenshot-card";
import { ScreenshotCarousel } from "../screenshot-carousel";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
const actionIcons = ["power", "windows", "move", "monitor", "folder"];
const mainScreenshots = [
  screenshots.touchpad,
  screenshots.windows,
  screenshots.control,
];
const detailScreenshots = [
  screenshots.files,
  screenshots.programs,
  screenshots.power,
  screenshots.subtitles,
];
export function Actions({ locale }: LocalizedProps) {
  const t = getDictionary(locale).actions;
  return (
    <section
      id="features"
      className="container actions-section"
      aria-label={t.title}
    >
      <h2 className="sr-only">{t.title}</h2>
      <div className="actions-grid">
        {t.items.map((a, i) => (
          <article key={actionIcons[i]}>
            <div className="action-icon">
              <Icon name={actionIcons[i]} />
            </div>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Everyday({ locale }: LocalizedProps) {
  const t = getDictionary(locale).everyday;
  return (
    <section className="container product-showcase">
      <div className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </div>
      <div className="showcase-grid">
        {t.cards.map((c, i) => (
          <ScreenshotCard
            key={mainScreenshots[i].altKey}
            locale={locale}
            title={c.title}
            text={c.text}
            screenshot={mainScreenshots[i]}
          />
        ))}
      </div>
      <ScreenshotCarousel
        label={t.carouselLabel}
        description={t.carouselDescription}
        previousLabel={t.carouselPrevious}
        nextLabel={t.carouselNext}
        positionLabel={t.carouselPosition}
      >
        {t.details.map((c, i) => (
          <ScreenshotCard
            key={detailScreenshots[i].altKey}
            locale={locale}
            title={c.title}
            text={c.text}
            screenshot={detailScreenshots[i]}
            compact
          />
        ))}
      </ScreenshotCarousel>
      <p className="asset-note">{t.note}</p>
    </section>
  );
}
export function FeatureGroups({ locale }: LocalizedProps) {
  const groups = getDictionary(locale).groups;
  return (
    <section className="section container group-grid">
      {groups.map((g, i) => (
        <article className="feature-group" key={i}>
          <p className="eyebrow">
            0{i + 1} / {g.label}
          </p>
          <h3>{g.title}</h3>
          <p>{g.text}</p>
          <ul>
            {g.items.map((item) => (
              <li key={item}>
                <Icon name="check" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
