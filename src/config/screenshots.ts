import type { Locale } from "@/i18n/config";
export type ScreenshotKey =
  | "control"
  | "windows"
  | "files"
  | "power"
  | "subtitles"
  | "touchpad"
  | "programs"
  | "agent";
export type Screenshot = {
  src: Record<Locale, string>;
  altKey: ScreenshotKey;
  width: number;
  height: number;
  temporary: boolean;
};
function product(
  name: string,
  altKey: ScreenshotKey,
  width = 720,
  height = 1480,
): Screenshot {
  return {
    src: {
      es: `/images/product/es/${name}.webp`,
      en: `/images/product/en/${name}.webp`,
    },
    altKey,
    width,
    height,
    temporary: false,
  };
}
export const screenshots = {
  touchpad: product("touchpad", "touchpad"),
  programs: product("programs", "programs"),
  control: product("control", "control"),
  windows: product("windows", "windows"),
  files: product("files", "files"),
  power: product("power", "power"),
  subtitles: product("subtitles", "subtitles"),
};
export const agentScreenshot: Screenshot | null = null;
