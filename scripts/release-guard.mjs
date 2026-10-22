import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
export function checkPublicAssets(root, policy) {
  const errors = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name),
        relative = path.relative(root, file).split(path.sep).join("/");
      if (entry.isSymbolicLink()) {
        errors.push("Symlink not allowed: " + relative);
        continue;
      }
      if (entry.isDirectory()) {
        if (entry.name === "demo-temp")
          errors.push("Temporary screenshots directory: " + relative);
        walk(file);
        continue;
      }
      const hash = createHash("sha256")
        .update(fs.readFileSync(file))
        .digest("hex");
      if (policy.approved[relative] !== hash)
        errors.push("Unreviewed or changed asset: " + relative);
    }
  }
  walk(root);
  return errors;
}
export function assertReleaseSafe() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const policy = JSON.parse(
    fs.readFileSync(path.join(root, "asset-policy.json"), "utf8"),
  );
  const errors = checkPublicAssets(path.join(root, "public"), policy);
  const refs = fs.readFileSync(
    path.join(root, "src/config/screenshots.ts"),
    "utf8",
  );
  if (/temporary:\s*true|demo-temp/.test(refs))
    errors.push("Temporary screenshot references remain.");
  if (errors.length)
    throw new Error(
      "PUBLIC BUILD BLOCKED\n" +
        errors.join("\n") +
        "\nUse npm run build:preview for LOCAL review only. Never publish that output.",
    );
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  assertReleaseSafe();
