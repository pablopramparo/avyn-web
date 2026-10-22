import { spawnSync } from "node:child_process";
if (process.env.CI)
  throw new Error(
    "Preview builds containing private screenshots are forbidden in CI.",
  );
console.warn(
  "LOCAL REVIEW ONLY. out/ may contain private screenshots. DO NOT UPLOAD.",
);
const result = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      AVYN_LOCAL_PREVIEW: "1",
      NEXT_TELEMETRY_DISABLED: "1",
    },
  },
);
process.exit(result.status ?? 1);
