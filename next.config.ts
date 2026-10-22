import { assertReleaseSafe } from "./scripts/release-guard.mjs";
import type { NextConfig } from "next";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
if (basePath && (!basePath.startsWith("/") || basePath.endsWith("/")))
  throw new Error("BASE_PATH must start with / and have no trailing slash.");
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  devIndicators: false,
  experimental: { globalNotFound: true },
};
export default function nextConfig(phase: string): NextConfig {
  if (phase === "phase-production-build" && !process.argv.includes("typegen")) {
    if (process.env.AVYN_LOCAL_PREVIEW === "1" && !process.env.CI)
      console.warn("PRIVATE LOCAL PREVIEW - DO NOT PUBLISH");
    else assertReleaseSafe();
  }
  return config;
}
