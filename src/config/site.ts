export const siteConfig = {
  name: "Avyn",
  origin: process.env.NEXT_PUBLIC_SITE_URL || "",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  urls: {
    auren: "https://apps.microsoft.com/store/detail/9PGX6BJ5B1JL?cid=DevShareMCLPCS",
    kantor: "https://apps.microsoft.com/store/detail/9P8ZKZBJ4RHB?cid=DevShareMCLPCS",
    ultrasongs: { es: "https://pablopramparo.github.io/ultrasongs/", en: "https://pablopramparo.github.io/ultrasongs/en/" },
    windows: process.env.NEXT_PUBLIC_WINDOWS_URL || "",
    android: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "",
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
