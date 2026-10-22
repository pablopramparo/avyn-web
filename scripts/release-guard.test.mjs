import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";
import { checkPublicAssets } from "./release-guard.mjs";
test("release assets require exact reviewed path and bytes, and demo-temp always blocks", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "avyn-guard-"));
  try {
    fs.writeFileSync(path.join(root, "mark.png"), "approved");
    const policy = {
      approved: {
        "mark.png": createHash("sha256").update("approved").digest("hex"),
      },
    };
    assert.deepEqual(checkPublicAssets(root, policy), []);
    fs.writeFileSync(path.join(root, "renamed-private.png"), "private");
    assert.match(checkPublicAssets(root, policy).join("\n"), /renamed-private/);
    fs.unlinkSync(path.join(root, "renamed-private.png"));
    fs.writeFileSync(path.join(root, "mark.png"), "replacement");
    assert.match(checkPublicAssets(root, policy).join("\n"), /changed asset/);
    fs.mkdirSync(path.join(root, "demo-temp"));
    assert.match(
      checkPublicAssets(root, policy).join("\n"),
      /Temporary screenshots/,
    );
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
