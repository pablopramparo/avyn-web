import { localizedPath, type Locale } from "@/i18n/config";
import { siteConfig } from "./site";
/**
 * How a visitor gets the Android app. One place decides it, so going public is a single switch
 * (`siteConfig.androidClosedBeta`) and not an edit in every component that shows an Android call to action.
 */
export function androidAccess(locale: Locale) {
  const closedBeta = siteConfig.androidClosedBeta;
  return {
    closedBeta,
    /** Main call to action: how to ask for beta access, or Google Play itself once public. */
    primaryHref: closedBeta ? `${localizedPath(locale, "/download/")}#android` : siteConfig.urls.android,
    /** Whether `primaryHref` leaves the site. */
    primaryExternal: !closedBeta,
    /** Direct Google Play link, for people already in the beta. */
    playHref: siteConfig.urls.android,
  };
}
