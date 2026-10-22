import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
import { guideTranslation } from "@/content/guides";
import { guidePath, type GuideId } from "@/content/guide-paths";

/** A short list of guides worth reading from a product page. */
export function RelatedGuides({ locale, ids }: LocalizedProps & { ids: GuideId[] }) {
  const t = getDictionary(locale).guides;
  const items = ids.flatMap((id) => guideTranslation(id, locale) ?? []);
  return (
    <section className="container related-guides" aria-labelledby="related-guides-title">
      <h2 id="related-guides-title">{t.related}</h2>
      <ul>
        {items.map((guide) => (
          <li key={guide.id}>
            <Link className="text-link" href={guidePath(locale, guide.slug)}>
              {guide.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
