# Avyn public website — local design preview

Documento de continuidad en español: [CONTINUIDAD.md](./CONTINUIDAD.md).

Independent Next.js 16 App Router / TypeScript / Tailwind CSS 4 project. Static export only. No backend, database, authentication, analytics, remote fonts or server runtime in production.

## Screenshots

The phone screenshots in `public/images/product/es/` and `en/` are reviewed demo-mode captures, selected per website language. Every public asset must match its reviewed SHA-256 entry in `asset-policy.json`; `npm run build` fails otherwise, and also fails while a `demo-temp` folder or temporary references exist. The local preview build is forbidden in CI. These checks prevent accidental publication; they cannot prevent someone manually uploading local files.

## Local use

Node 22, npm.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1
npm run lint
npm run typecheck
npm run test:release-guard
npm run build:preview
```

Open http://127.0.0.1:3000. `build:preview` creates a production-optimized static export in `out/` FOR LOCAL REVIEW ONLY. `next start` is not used for static export.

The original captures are in `E:/DEV/avyn/design-assets/screenshots_demo/demo-mode/` (Spanish) and its `en/` subfolder. See `screenshot-sources.json` for the exact source/destination mappings and dimensions.

## Structure

- `src/app/`: route composition, metadata and global design tokens/styles.
- `src/components/sections/`: bounded home sections.
- `src/components/`: header/footer, icon set, device frames, download controls and page introduction.
- `src/i18n/locales/es.json` and `en.json`: all translated visitor-facing copy, accessibility labels, screenshot alt text and metadata.
- `src/components/pages/`: shared page compositions for both languages.
- `src/content/`: future edition-comparison scaffolding.
- `src/config/site.ts`: URLs, domain and base-path helpers.
- `src/config/screenshots.ts`: all screenshot references and replacement slot for the Windows Agent.
- `scripts/`: production asset guard and local-only preview build.
- `public/images/brand/`: official, approved Avyn mark.
- `public/images/product/`: reviewed phone screenshots per language.

Pages: /es/, /en/, and /security/, /verify/, /download/ under each language prefix. Unprefixed routes remain Spanish aliases. Custom bilingual 404.
`page.tsx` composes sections instead of implementing the whole landing.

## Visual approach

Navy/black, cyan primary actions, restrained violet accents, roomy type hierarchy and real Android captures. CSS device frames preserve screenshot proportions. The hero uses the supplied hero.png background and a real Android screenshot in the foreground. The Agent capture remains configured for future use but is no longer displayed in the hero. No product interface is invented. Hero composition stacks on mobile. Reusable styles, native anchors, visible keyboard focus, skip link and reduced-motion support.

## Replacing screenshots

1. Put reviewed, fictional-data marketing captures in `public/images/product/`.
2. Update `src/config/screenshots.ts`; set temporary flags to false. Both Android and Agent screenshots now use language-specific paths and real image dimensions.
3. Remove the demo-temp folder completely and remove temporary references.
4. Review ALL public assets. Add approved path/hash pairs to `asset-policy.json` using SHA-256. Never approve private captures.
5. Rebuild from clean source with `npm run build`. Only this output is publishable.
6. Recheck privacy and layouts before any publication.

## GitHub Pages

`output: "export"`, `trailingSlash: true`, and unoptimized local images are configured. Next Link handles route base paths; `assetPath()` handles public assets.

Copy `.env.example` to `.env.local` for local build-time configuration. For project Pages use `NEXT_PUBLIC_BASE_PATH=/avyn-web`; for custom domains or root Pages leave it empty. Never include a trailing slash. `NEXT_PUBLIC_SITE_URL` is the origin only (no base path), once known. URLs are blank until real destinations exist.

The manually triggered workflow never runs on push. It runs checks and the guarded production build before uploading an artifact. Configure Pages and repository variables only when ready. No workflow has been run and nothing has been published.

Metadata includes titles, descriptions, OpenGraph, Twitter, official favicon and optional canonical URLs. Indexing is intentionally disabled during this preview in layout metadata and robots.ts. No sitemap is generated without a confirmed domain.

## Before production

- Complete publication review of demo-mode captures, particularly the Spanish Agent logs, and approve only suitable marketing assets.
- Supply and validate download URLs, public source URL and final domain.
- Confirm minimum OS versions, TV/display compatibility and Wake-on-LAN requirements.
- Validate security descriptions against the release implementation.
- Complete the versioned Verify guide: tools, LAN/external traffic examples, update exceptions, reversible firewall rules and observed test results.
- Finalize Free/Premium boundaries and purchase language, including browser integration. Official Chrome and Edge extension links are configured in `src/config/site.ts`.
- Enable indexing and add an absolute-URL sitemap once the domain is confirmed.
- Replace the development screenshot caption and remove placeholder copy when assets are ready.
- Review keyboard navigation, contrast, mobile/tablet/desktop and 200% text size.
- Recheck npm audit before release. Initial scaffold reported development-tooling advisories through eslint-config-next → fast-glob → micromatch → braces; no forced downgrade applied.

Official implementation references: [Next static export](https://nextjs.org/docs/app/guides/static-exports), [Tailwind with Next](https://tailwindcss.com/docs/installation/framework-guides/nextjs).

## Verification results (first pass)

- Local static export passed at root and with /avyn-web basePath.
- All four routes and their internal asset/link references resolve in both configurations.
- Lint and TypeScript checks passed. Production asset guard test passed.
- Normal production build correctly refused temporary screenshots.
- Production dependency audit: zero findings. Development tooling: five high-severity transitive findings (documented above).
- Local HTTP preview responds 200. Browser automation was unavailable in this session: viewport rendering, visual contrast and interactive keyboard QA still require a browser review. Responsive breakpoints are implemented, but that is not a claim of completed visual QA.
- No commit, push or deployment was performed.

## Idiomas / translations

- Español (rioplatense): `src/i18n/locales/es.json`. English: `src/i18n/locales/en.json`. Both files have matching text entries, checked automatically.
- Edit copy in these JSON files; keep the same keys and array lengths. `npm run check:i18n` checks parity and empty values. The dictionary shape is also checked by TypeScript.
- `src/i18n/config.ts` defines supported locales and the default (Spanish). `localizedPath()` generates internal links without hardcoding the deployment basePath.
- The header selector switches to the equivalent page and preserves the current hash on ordinary clicks. Language is encoded in the URL; no cookies, middleware, account or server are needed.
- Both languages are prerendered with `generateStaticParams`. The correct `html lang`, titles, descriptions, OpenGraph and Twitter metadata are exported per route. Canonicals and hreflang alternates are added once a real origin is configured.
- `src/app/[locale]/layout.tsx` provides locale-aware root documents. `src/app/(default)/` keeps the original URLs working in Spanish. Shared page components avoid duplication. A global bilingual 404 uses Next’s globalNotFound option because there are multiple root layouts.
- Brand/product names stay unchanged. The official English slogan has a Spanish adaptation. Text embedded in the real Android screenshots is not modified; the supplied Spanish and English demo-mode captures are now selected by locale.
- After `npm run build:preview`, run `npm run check:i18n:export` to check all eight localized routes, metadata, language links and local assets. The Pages workflow also runs these checks around its guarded release build.
- The private screenshot guard is unchanged: no publication is allowed yet.

## Demo-mode screenshot update

Each language uses its own control, windows, demo folder, power, subtitles and Agent status captures. The hero now shows the real media-control screen, not the old Play on TV confirmation. Captures are copied byte-for-byte, with localized alt text. The old private images are no longer in public/. Sources stay unchanged. Assets remain local-only pending publication review.

## Reference-design refinement

- Hero background: `public/images/brand/hero.png`, copied unchanged from the supplied design asset. It is decorative; its alt is empty.
- `src/config/hero.ts` centralizes the background and future phone photos. Set `phonePhotos.es` and `phonePhotos.en` to `{ src, width, height }` when the transparent phone photos are ready. Both entries can use the same photo if appropriate. Until then the real localized Android screenshot is used. The photo is shown directly without an extra CSS phone frame. Add final reviewed photo assets to the release policy before publishing.
- Five-feature strip: Wake & Unlock, Open Apps, Move Windows, Play on TV and Transfer Files, with corresponding Spanish copy.
- Three main screenshot cards: touchpad/control, windows and TV/media. Four compact cards: files, programs, power/displays and subtitles. Preview links open the untouched full-size captures in a new tab. There is no demo-mode Play on TV confirmation capture yet; the TV card uses real media controls rather than an invented dialog.
- `src/app/product-showcase.css` contains the hero and gallery layout; obsolete versions of their rules were removed from globals.css.
- Desktop uses the background composition with the monitor on the right. Mobile stacks copy above the phone and uses a darker gradient for legibility. Visual browser verification was unavailable; review the local preview at desktop/tablet/mobile widths before final approval.
- Real Agent screenshots remain in the centralized configuration and local asset folder, pending future placement and publication review. No deployment, commit or push.
