import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/config/site";
import type { LocalizedProps } from "@/i18n/config";

/** Official "Get it from Microsoft" badge. Keep it unmodified and proportional. */
export function MicrosoftStoreBadge({
  locale,
  href,
  label,
  className = "",
}: LocalizedProps & { href: string; label: string; className?: string }) {
  // Until the store listing URL is configured, the badge goes to the download page.
  const external = /^https?:\/\//.test(href);
  return (
    <Link
      className={`store-badge ${className}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      <Image
        src={assetPath(`/images/brand/microsoft-store-${locale}-dark.svg`)}
        alt=""
        width={161}
        height={44}
      />
    </Link>
  );
}
