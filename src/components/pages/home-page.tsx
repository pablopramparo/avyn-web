import { Hero } from "@/components/sections/hero";
import {
  Actions,
  Everyday,
  FeatureGroups,
} from "@/components/sections/features";
import { Intent } from "@/components/sections/intent";
import { HowItWorks, LocalFirst } from "@/components/sections/local";
import { Integrations, Editions, FinalCta } from "@/components/sections/more";
import { JsonLd } from "@/components/json-ld";
import { productData, siteData } from "@/config/structured-data";
import type { LocalizedProps } from "@/i18n/config";
export function HomePage({ locale }: LocalizedProps) {
  return (
    <>
      <JsonLd data={siteData(locale)} />
      <JsonLd data={productData(locale, "home")!} />
      <Hero locale={locale} />
      <Actions locale={locale} />
      <Everyday locale={locale} />
      <Intent locale={locale} />
      <FeatureGroups locale={locale} />
      <HowItWorks locale={locale} />
      <LocalFirst locale={locale} />
      <Integrations locale={locale} />
      <Editions locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
