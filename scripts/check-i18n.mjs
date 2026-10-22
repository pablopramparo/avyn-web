import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
const read = (name) =>
  JSON.parse(fs.readFileSync(`src/i18n/locales/${name}.json`, "utf8"));
function leaves(value, prefix = "") {
  if (typeof value === "string") {
    assert.ok(value.trim(), `Empty translation: ${prefix}`);
    return { [prefix]: value };
  }
  return Object.fromEntries(
    Object.entries(value).flatMap(([key, child]) =>
      Object.entries(leaves(child, prefix ? `${prefix}.${key}` : key)),
    ),
  );
}
const en = leaves(read("en")),
  es = leaves(read("es"));
assert.deepEqual(
  Object.keys(es).sort(),
  Object.keys(en).sort(),
  "Translation keys and array lengths must match.",
);
console.log(
  `${Object.keys(en).length} complete translation entries per language.`,
);
if (process.argv.includes("--export")) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const escape = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#x27;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  const pages = ["", "security", "verify", "download", "auren", "kantor"];
  let checked = 0;
  for (const locale of ["es", "en"]) {
    const dict = read(locale);
    for (const page of pages) {
      const route = `/${locale}/${page ? page + "/" : ""}`;
      const html = fs.readFileSync(
        path.join("out", route, "index.html"),
        "utf8",
      );
      assert.ok(
        html.includes(`<html lang="${locale}"`),
        route + " html language",
      );
      assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route + " h1");
      if (!page) {
        const screenshots = [...html.matchAll(/<img[^>]*src="([^"]+)"/g)]
          .map((match) => match[1])
          .filter((src) => src.includes("/images/product/"));
        // Seven phone screenshots, each rendered in the carousel and in the desktop grid.
        assert.equal(
          new Set(screenshots).size,
          7,
          route + " expected seven localized phone screenshots",
        );
        for (const src of screenshots)
          assert.ok(
            src.includes("/images/product/" + locale + "/"),
            route + " screenshot language mismatch: " + src,
          );
      }
      if (!page) {
        assert.ok(
          html.includes(`/images/brand/hero-phone-${locale}.webp`),
          route + " localized hero mockup",
        );
        assert.ok(
          !html.includes(`/images/brand/hero-phone-${locale === "es" ? "en" : "es"}.webp`),
          route + " must not show the other language's hero mockup",
        );
        assert.ok(
          html.includes("/images/brand/hero.png"),
          route + " hero background",
        );
        assert.ok(
          !html.includes("/agent.png"),
          route + " Agent should not appear behind the phone",
        );
        assert.ok(
          html.includes(dict.actions.items[0].title.replaceAll("&", "&amp;")),
          route + " Wake & Unlock",
        );
      }
      const meta = dict.metadata[page || "home"];
      assert.ok(
        html.includes(
          `name="description" content="${escape(meta.description)}"`,
        ),
        route + " metadata",
      );
      const other = locale === "es" ? "en" : "es";
      assert.ok(
        html.includes(`href="${base}/${other}/${page ? page + "/" : ""}"`),
        route + " same-page language switch",
      );
      for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
        const url = match[1].split("#")[0].split("?")[0];
        if (!url.startsWith("/") || url.startsWith("//")) continue;
        assert.ok(
          !base || url.startsWith(base + "/"),
          "Missing basePath: " + url,
        );
        const relative = base ? url.slice(base.length) : url;
        const disk = path.join(
          "out",
          relative.endsWith("/") ? relative + "index.html" : relative,
        );
        assert.ok(fs.existsSync(disk), "Missing static target: " + url);
        checked++;
      }
      // All navigation links other than the language switch must retain the current language.
      const mainNav = html.match(/<nav class="main-nav"[\s\S]*?<\/nav>/)?.[0];
      assert.ok(mainNav, route + " main navigation");
      for (const match of mainNav.matchAll(/href="([^"]+)"/g)) {
        if (match[1].startsWith("/"))
          assert.ok(
            match[1].startsWith(base + "/" + locale + "/"),
            "Mixed-language navigation: " + match[1],
          );
      }
      console.log("Localized export OK: " + route);
    }
  }
  for (const page of pages) {
    const html = fs.readFileSync(path.join("out", page, "index.html"), "utf8");
    assert.ok(
      html.includes('<html lang="es"'),
      "Default route should be Spanish: " + page,
    );
  }
  console.log(
    `${checked} static links/assets resolved; default routes are Spanish.`,
  );
}
