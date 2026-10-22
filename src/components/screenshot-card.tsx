import { PhoneMockup } from "./device-frames";
import { assetPath } from "@/config/site";
import type { Screenshot } from "@/config/screenshots";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
import { ScreenshotViewer } from "./screenshot-viewer";
type Props = LocalizedProps & {
  title: string;
  text: string;
  screenshot: Screenshot;
  compact?: boolean;
};
export function ScreenshotCard({
  locale,
  title,
  text,
  screenshot,
  compact = false,
}: Props) {
  const d = getDictionary(locale);
  return (
    <article className={compact ? "detail-card" : "showcase-card"}>
      <div className="screenshot-card-copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <ScreenshotViewer
        src={assetPath(screenshot.src[locale])}
        alt={d.images[screenshot.altKey]}
        width={screenshot.width}
        height={screenshot.height}
        buttonLabel={`${d.everyday.openScreenshot}: ${title}`}
        closeLabel={d.everyday.closeScreenshot}
      >
        <div className="screenshot-preview-content">
          <div className={compact ? "phone-preview-window" : undefined}>
            <PhoneMockup locale={locale} screenshot={screenshot} />
          </div>
          <span className="screenshot-open">{d.everyday.openScreenshot}</span>
        </div>
      </ScreenshotViewer>
    </article>
  );
}
