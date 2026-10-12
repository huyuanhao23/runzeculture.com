# Site Tree — runzeculture.com/

**Generated:** 2026-10-08 15:40 (Asia/Shanghai)
**Mode:** Local-only QA
**Workspace:** `E:\香港\23\`
**Author:** Ops Agent (Runzeculture) — session `mvs_b396698e37b04d18bbaa232706764868`
**Companion:** `docs/DEPLOY-CHECKLIST.md` (per-SEPC PASS/FAIL matrix) · `docs/FINAL-REPORT.md` (delivery summary)

> This file was last regenerated at the end of the **2026-10-08 15:40** ops run. It replaces the earlier scaffold written before `coding-runzeculture` finished. The site is now built end-to-end.

---

## On-disk state at end of this run

```
E:\香港\23\
├── index.html                        1 193 B   Invisible redirect → ./home.html (meta-refresh + window.location.replace)
│
├── home.html                        19 452 B   Home — hero, services, mobile app, mascot, contact CTA, JSON-LD Organization + WebSite
├── services.html                    19 444 B   Business Services — 11 lines, mobile-app management, hero illustrations
├── culture.html                     13 460 B   Corporate Culture — mission, values, team
├── news.html                        14 314 B   News & insights — release notes, app updates
├── contact.html                      7 695 B   HK office, both emails, contact form (validated by js/contact-form.js)
├── privacy.html                     19 831 B   Privacy Policy — 12 sections; 4 ad formats; 59 ad networks; 16+ regional laws
├── terms.html                       10 867 B   Terms of Service — 15 sections; Google Play + Apple App Store coverage
├── 404.html                          2 984 B   Brand-consistent 404 with fox mascot
│
├── CNAME                                16 B   Single line: runzeculture.com
├── robots.txt                           90 B   User-agent: * / Allow: / / Disallow: /index.html / Sitemap: …
├── sitemap.xml                       1 281 B   7 <url> entries, all on https://runzeculture.com/
├── app-ads.txt                        280 B   IAB-shaped placeholder (google.com pub-…); replace with real seller IDs before launch
├── .gitignore                           56 B   Standard excludes
├── README.md                         4 199 B   Project readme
│
├── css\
│   └── styles.css                   35 561 B   Single hand-authored stylesheet · uses docs/design-tokens.md variables · prefers-reduced-motion aware
│
├── js\
│   ├── partials.js                   6 212 B   Injects shared <header> + <footer>; reads body[data-page]; wires mobile-nav + scroll shadow
│   ├── animations.js                 6 517 B   IntersectionObserver reveals, parallax, marquee, magnetic CTA, kinetic type, scroll progress
│   ├── contact-form.js               2 943 B   Client-side validation + simulated submit (no external HTTP)
│   └── app.js                        3 421 B   Per-page boot logic by body[data-page]
│
├── images\
│   ├── icons\                       ~36 SVGs   Service-line icons (art, brand, business, consulting, craft, exhibition, film, import-export,
│   │                                          marketing, mobile-app, publication) · social (linkedin, instagram, twitter-x, youtube) ·
│   │                                          app-store badges (app-store.svg, google-play.svg) · UI affordances (arrow-right, check,
│   │                                          chevron-{down,right}, close, cookie, document, email, globe, globe-pin, language, location,
│   │                                          lock, map-pin, menu, phone, plus, quote, search, shield, sparkle, sparks, star, users)
│   │
│   ├── logo\                          3 SVGs   favicon.svg, logo.svg (full colour), logo-mono.svg (monochrome variant)
│   │
│   ├── animals\                        9 SVGs  Cute mascots: cat, deer, fox, hedgehog, otter, panda, penguin, rabbit, whale
│   │                                          404 page uses fox; services/contact accent pages use otter/panda/penguin/rabbit/deer;
│   │                                          cat/hedgehog/whale currently unused (over-supply, not a defect)
│   │
│   ├── hero\                           6 PNGs  404.png, business-services.png, contact.png, culture.png, home.png, news.png
│   │                                          (~25.5 MB total) — on disk but **not wired** into HTML; pages render with CSS gradients + SVG accents
│   │
│   ├── sections\                       8 PNGs  business-strategy.png, craft.png, cultural-product.png, exhibition.png (0 bytes — regenerate),
│   │                                          film-tv.png, mobile-app.png, news-1.png, publication.png (~27.8 MB total) — on disk but unused.
│   │                                          See deferred items D-04 / D-07.
│   │
│   └── og\                            EMPTY   og-cover.png (1200×630) missing — see deferred item D-02.
│
└── docs\
    ├── SEPC.txt                       2 439 B   Authoritative spec
    ├── PM-PLAN.md                    14 618 B   PM product plan
    ├── legal-outline.md              18 935 B   PM Privacy + Terms section-by-section outline
    ├── ad-platforms.md               20 860 B   PM ad-platform compliance matrix (59 networks)
    ├── seo-keywords.md                6 462 B   PM SEO keyword set
    ├── design-tokens.md              16 200 B   UI design tokens
    ├── site-map.md                    2 832 B   UI URL inventory + sitemap template
    ├── DEPLOY-CHECKLIST.md           21 559 B   THIS RUN — full PASS/FAIL matrix per SEPC.txt criterion
    ├── FINAL-REPORT.md               12 173 B   THIS RUN — final delivery summary
    └── SITE-TREE.md                          THIS FILE
```

### Inventory counts

| Class | Files | Bytes | Where |
|---|---|---|---|
| HTML | 9 | 109 240 | 5 main + contact + privacy + terms + index/404 |
| CSS | 1 | 35 561 | `css/styles.css` |
| JavaScript | 4 | 19 093 | `js/{partials,animations,contact-form,app}.js` |
| SVG (icons + logos + animals) | 57 | 34 346 | `images/{icons,logo,animals}/` |
| PNG (hero + section illustrations) | 14 | 45 475 139 | `images/{hero,sections}/` (1 corrupt: `exhibition.png` is 0 B) |
| Markdown / docs | 9 | 117 241 | `docs/*.md` + `README.md` |
| Text meta files | 3 | 2 809 | `SEPC.txt` + `robots.txt` + `app-ads.txt` |
| XML | 1 | 1 281 | `sitemap.xml` |
| Other | 2 | 72 | `.gitignore` + `CNAME` |
| **TOTAL** | **100** | **~45.79 MB** | (PNG weight dominates) |

---

## URL ↔ file ↔ canonical

Per `docs/site-map.md` (the URL inventory source of truth).

| Slug | Served file | Canonical URL | Sitemap priority | Changefreq |
|---|---|---|---|---|
| `/` | `index.html` (redirect to `./home.html`) | `https://runzeculture.com/` | 1.0 | weekly |
| home | `home.html` | `https://runzeculture.com/home.html` (reachable as `/`) | — | — |
| services | `services.html` | `https://runzeculture.com/services.html` | 0.9 | monthly |
| culture | `culture.html` | `https://runzeculture.com/culture.html` | 0.7 | monthly |
| news | `news.html` | `https://runzeculture.com/news.html` | 0.7 | weekly |
| contact | `contact.html` | `https://runzeculture.com/contact.html` | 0.8 | yearly |
| privacy | `privacy.html` | `https://runzeculture.com/privacy.html` | 0.3 | yearly |
| terms | `terms.html` | `https://runzeculture.com/terms.html` | 0.3 | yearly |

Notes:
- `home.html` declares `<link rel="canonical" href="https://runzeculture.com/" />` — this is the SEO-canonical Home URL even though the user-facing URL is `/`. Search engines will treat `/` and `/home.html` as the same page; the served `index.html` provides the meta-refresh to make the URL bar show `/` rather than `/index.html`.
- `/app-ads.txt` is intentionally blocked from crawlers (`robots.txt` `Disallow: /index.html`) and is **not** in `sitemap.xml`.

---

## Per-file one-line descriptions

| Path | Role |
|---|---|
| `index.html` | Invisible redirect — meta-refresh + JS URL replace to `./home.html`. <meta robots="noindex, follow"> so search engines don't surface it. |
| `home.html` | Home — hero, 11-service grid, mobile-app teaser, contact CTA, JSON-LD `Organization` + `WebSite`. |
| `services.html` | All 11 business lines with bilingual labels (EN + 繁體中文 in parentheses); mobile-app management section; export-documentation tooling. |
| `culture.html` | Mission, values, team; mascot accent. |
| `news.html` | News + app release notes. |
| `contact.html` | HK office, both emails, validated contact form (no backend). |
| `privacy.html` | Full Privacy Policy — 12 sections per `docs/legal-outline.md`; 4 ad formats; 59 ad networks; 16+ regional laws. |
| `terms.html` | Full Terms of Service — 15 sections per `docs/legal-outline.md`; Google Play + Apple App Store; HKIAC arbitration. |
| `404.html` | Friendly 404 with floating fox mascot + home link. |
| `CNAME` | `runzeculture.com` (single line, no BOM). |
| `robots.txt` | Allow `/`, Disallow `/index.html`, declare Sitemap. |
| `sitemap.xml` | 7 public URLs, lastmod=2026-10-08. |
| `app-ads.txt` | IAB-spec placeholder (`google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0`); replace with real seller IDs before launch. |
| `css/styles.css` | Single hand-authored stylesheet; uses design tokens from `docs/design-tokens.md`; honours `prefers-reduced-motion`. |
| `js/partials.js` | Injects site `<header>` + `<footer>` from `#site-header` / `#site-footer` placeholders; reads `body[data-page]`. |
| `js/animations.js` | IntersectionObserver reveals + parallax + marquee + magnetic CTA + scroll progress + kinetic type; honours `prefers-reduced-motion`. |
| `js/contact-form.js` | Client-side validation + simulated submit (no external HTTP). |
| `js/app.js` | Per-page init driven by `body[data-page]`. |
| `images/logo/{favicon,logo,logo-mono}.svg` | Brand assets — full colour, monochrome variant, favicon. |
| `images/icons/*.svg` | 36 inline SVG icons — services, social, app-store badges, UI affordances. |
| `images/animals/*.svg` | 9 cute-animal mascots — fox is the 404 mascot; otter / panda / penguin / rabbit / deer used as page accents. |
| `images/hero/*.png` | 6 hero illustrations on disk, **not yet referenced** by HTML — pages use CSS gradients + SVG accents (graceful degradation). |
| `images/sections/*.png` | 8 section illustrations on disk (1 empty file: `exhibition.png`), **not yet referenced** by HTML. |
| `images/og/og-cover.png` | **MISSING** — see deferred item D-02. |

---

## Deferred items at the time of this report (full list in `docs/FINAL-REPORT.md` §6)

| ID | Item | Owner | Severity |
|---|---|---|---|
| D-01 | Add `<footer>`/partials to `contact.html` / `privacy.html` / `terms.html` / `404.html`. | coding | **HIGH** |
| D-02 | Ship `images/og/og-cover.png` (1200×630). | ui | **HIGH** |
| D-03 | Copy OG + Twitter tags into `privacy.html` / `terms.html` once D-02 ships. | coding | MEDIUM |
| D-04 | Regenerate `images/sections/exhibition.png` (0 bytes). | ui | MEDIUM |
| D-05 | Add `huyuanhao@runzeculture.com` to Terms §15 Contact. | coding | LOW |
| D-06 | Populate `app-ads.txt` with real seller IDs once AdMob is wired into the apps. | ops (publishing) | LOW |
| D-07 | Wire hero / section PNGs into HTML — or delete from disk + design tokens. | coding + ui | LOW (cosmetic) |
| D-08 | Wire unused cute-animal SVGs (`cat`, `hedgehog`, `whale`) into templates. | ui | LOW (polish) |
| D-09 | Static footers on the 5 main pages for non-JS crawlers. | coding | LOW |
| D-10 | Reserved for the publishing gate: `git push`, GitHub Pages, HTTPS, PAT rotation. | ops (publishing) | **DEFERRED** (out of scope per "只交付本地代码，不发布") |

---

## Snapshot timestamp

**2026-10-08 15:40 Asia/Shanghai** — end of the local-QA ops run.

This file is the third of three deliverables from this run, alongside:

1. `docs/DEPLOY-CHECKLIST.md` — full PASS/FAIL matrix per SEPC.txt criterion.
2. `docs/FINAL-REPORT.md` — file inventory, smoke-test matrix, content checklist, deferred items, next-steps-to-publish.
3. `docs/SITE-TREE.md` — this file.

No git push, no GitHub API call, no GitHub PAT echoed anywhere outside the original `SEPC.txt`.
