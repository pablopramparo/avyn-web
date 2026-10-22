import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
/** Editorial scaffolding. No prices or per-feature entitlements until approved. */
export type Edition = {
  name: string;
  summary: string;
  availability: "planned";
  features: string[];
};
export function getEditions(locale: Locale): Edition[] {
  const copy = getDictionary(locale).editions;
  return [
    {
      name: "Free",
      summary: copy.freeSummary,
      availability: "planned",
      features: [],
    },
    {
      name: "Premium",
      summary: copy.premiumSummary,
      availability: "planned",
      features: [],
    },
  ];
}
