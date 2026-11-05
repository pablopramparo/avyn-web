export const siteConfig = {
  name: "Avyn",
  origin: process.env.NEXT_PUBLIC_SITE_URL || "",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Search engines stay blocked until the site is launched: set NEXT_PUBLIC_INDEXING=on.
  indexing: process.env.NEXT_PUBLIC_INDEXING === "on",
  contactEmail: "avyn.remote@gmail.com",
  // The Android app is in closed beta on Google Play: the listing only installs for invited testers.
  // While true, every "get the Android app" call to action asks for beta access instead of linking to Google Play.
  // When the app goes public, set NEXT_PUBLIC_ANDROID_CLOSED_BETA=off (or flip this default): the CTAs become plain Google Play links.
  androidClosedBeta: process.env.NEXT_PUBLIC_ANDROID_CLOSED_BETA !== "off",
  urls: {
    auren: "https://apps.microsoft.com/store/detail/9PGX6BJ5B1JL?cid=DevShareMCLPCS",
    kantaria: "https://apps.microsoft.com/store/detail/9P8ZKZBJ4RHB?cid=DevShareMCLPCS",
    ultrasongs: { es: "https://pablopramparo.github.io/ultrasongs/", en: "https://pablopramparo.github.io/ultrasongs/en/" },
    windows: process.env.NEXT_PUBLIC_WINDOWS_URL || "https://apps.microsoft.com/store/detail/9PDX4PCD9C96?cid=DevShareMCLPCS",
    // Direct download of Avyn Agent, an alternative to the Microsoft Store listing: the releases page the app already used.
    windowsDirect: process.env.NEXT_PUBLIC_WINDOWS_DIRECT_URL || "https://github.com/pablopramparo/avyn-releases/releases/latest",
    // Closed beta: the listing only installs for invited testers.
    android: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "https://play.google.com/store/apps/details?id=dev.avyn.app",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
    chromeExtension:
      process.env.NEXT_PUBLIC_CHROME_EXTENSION_URL ||
      "https://chromewebstore.google.com/detail/avyn-remote/fkmnmnfhokiiodjjmklpbcinpfeliaii",
    edgeExtension:
      process.env.NEXT_PUBLIC_EDGE_EXTENSION_URL ||
      "https://microsoftedge.microsoft.com/addons/detail/avyn-remote/nfcliegdhaagbjmbgdfamjhekofpfcdg",
  },
};
export const assetPath = (path: string) => siteConfig.basePath + path;
export const canonical = (path: string) =>
  siteConfig.origin
    ? siteConfig.origin.replace(/\/$/, "") + siteConfig.basePath + path
    : undefined;
