import Image from "next/image";
import { assetPath } from "@/config/site";
import { agentScreenshot, type Screenshot } from "@/config/screenshots";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
import { Icon } from "./icon";
export function PhoneMockup({
  screenshot,
  priority = false,
  locale,
}: { screenshot: Screenshot; priority?: boolean } & LocalizedProps) {
  const t = getDictionary(locale).images;
  return (
    <div className="phone-mockup">
      <Image
        src={assetPath(screenshot.src[locale])}
        alt={t[screenshot.altKey]}
        width={screenshot.width}
        height={screenshot.height}
        className="phone-screen"
        priority={priority}
        sizes="(max-width: 600px) 230px, 290px"
      />
      <Image
        src={assetPath("/images/brand/phone-frame-front.webp")}
        alt=""
        aria-hidden="true"
        className="phone-frame-overlay"
        width={2779}
        height={4346}
        sizes="(max-width: 600px) 360px, 400px"
        priority={priority}
      />
    </div>
  );
}
export function DesktopScreenshot({ locale }: LocalizedProps) {
  const t = getDictionary(locale).images;
  return (
    <div className="desktop-frame">
      {agentScreenshot ? (
        <Image
          src={assetPath(agentScreenshot.src[locale])}
          alt={t[agentScreenshot.altKey]}
          width={agentScreenshot.width}
          height={agentScreenshot.height}
        />
      ) : (
        <div className="agent-placeholder">
          <Icon name="monitor" />
          <span>{t.agentTitle}</span>
          <p>{t.agentPending}</p>
          <small>{t.agentNote}</small>
        </div>
      )}
    </div>
  );
}
