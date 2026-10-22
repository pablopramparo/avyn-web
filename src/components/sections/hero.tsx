import Image from "next/image";
import { DownloadButtons } from "../download-buttons";
import { PhoneMockup } from "../device-frames";
import { Icon } from "../icon";
import { HeroParallax } from "../hero-parallax";
import { screenshots } from "@/config/screenshots";
import { heroVisuals } from "@/config/hero";
import { assetPath } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { LocalizedProps } from "@/i18n/config";
export function Hero({ locale }: LocalizedProps) {
  const d = getDictionary(locale),
    t = d.hero,
    photo = heroVisuals.phonePhotos[locale];
  const assurances = [
    { icon: "wifi", title: t.local, text: t.localDetail },
    { icon: "lock", title: t.secure, text: t.secureDetail },
    { icon: "power", title: t.simple, text: t.simpleDetail },
  ];
  return (
    <section className="hero">
      <Image
        className="hero-background"
        src={assetPath(heroVisuals.background)}
        alt=""
        fill
        preload
        sizes="100vw"
      />
      <HeroParallax />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{d.common.slogan}</p>
          <h1>
            {t.title}
            <br />
            {t.from} <span>{t.phone}</span>
          </h1>
          <p className="hero-description">
            {t.description}
            <br />
            <strong>{t.comfort}</strong>
          </p>
          <DownloadButtons locale={locale} />
          <ul className="hero-assurances">
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
        </div>
        <div className="hero-devices">
          <div className={photo ? "hero-phone hero-phone-photo" : "hero-phone"}>
            {photo ? (
              <Image
                src={assetPath(photo.src)}
                alt={d.images.heroPhone}
                width={photo.width}
                height={photo.height}
                preload
                sizes="(max-width: 400px) 290px, (max-width: 760px) 310px, (max-width: 1100px) 320px, (min-width: 1600px) 340px, 330px"
              />
            ) : (
              <PhoneMockup
                locale={locale}
                screenshot={screenshots.control}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
