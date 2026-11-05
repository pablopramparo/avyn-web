import { screenshots } from "@/config/screenshots";
import { Icon } from "../icon";
import { ScreenshotCard } from "../screenshot-card";
import { ScreenshotCarousel } from "../screenshot-carousel";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
const actionIcons = ["play", "folder", "windows", "monitor", "power"];
// The everyday uses first (media, subtitles and streaming, files); the rest of the phone's reach goes in the gallery.
const mainScreenshots = [
  screenshots.control,
  screenshots.subtitles,
  screenshots.files,
];
const detailScreenshots = [
  screenshots.screen,
  screenshots.windows,
  screenshots.touchpad,
  screenshots.programs,
  screenshots.power,
];
export function Actions({ locale }: LocalizedProps) {
  const d = getDictionary(locale),
    t = d.actions;
  const assurances = [
    { icon: "wifi", title: d.hero.local, text: d.hero.localDetail },
    { icon: "lock", title: d.hero.secure, text: d.hero.secureDetail },
    { icon: "power", title: d.hero.simple, text: d.hero.simpleDetail },
  ];
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
      <ul className="assurances">
        {assurances.map((item) => (
          <li key={item.icon}>
            <Icon name={item.icon} />
            <div>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
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
    </section>
  );
}
export function Gallery({ locale }: LocalizedProps) {
  const t = getDictionary(locale).everyday;
  return (
    <section className="container product-showcase gallery">
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
export function AllFeatures({ locale }: LocalizedProps) {
  const t = getDictionary(locale).allFeatures;
  return (
    <section className="container all-features">
      <details>
        <summary>
          <span>{t.toggle}</span>
          <Icon name="chevron" />
        </summary>
        <div className="all-features-body">
          <h2>{t.title}</h2>
          <p>{t.intro}</p>
          <div className="all-features-grid">
            {t.categories.map((c) => (
              <article key={c.title}>
                <h3>{c.title}</h3>
                <ul>
                  {c.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}
