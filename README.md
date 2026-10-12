# Runzeculture.com — Static Corporate Site

Static, English-language corporate website for **NOURISH CULTURE CO., LIMITED** at `runzeculture.com`. Built with vanilla HTML + CSS + JS + SVG. No build step.

## Structure

```
E:\香港\23\
├── index.html              # tiny meta-refresh + JS redirect to home.html (apex URL /)
├── home.html                # homepage (the user-facing landing page)
├── culture.html             # mission / values / mascot / team
├── services.html           # 11 business lines + mobile app
├── news.html               # press releases, insights, events
├── contact.html            # contact form, addresses, emails
├── privacy.html            # Privacy Policy (full prose)
├── terms.html              # Terms of Service (full prose)
├── 404.html                # friendly 404 with cute animal mascot
├── CNAME                   # runzeculture.com (for GitHub Pages apex)
├── app-ads.txt             # IAB-spec placeholder
├── sitemap.xml             # 7 URLs, sitemap-0.9
├── robots.txt              # allow /, disallow /index.html
├── css/
│   └── styles.css          # vanilla CSS, Ford-luxury tokens + motion vocabulary
├── js/
│   ├── partials.js         # header/footer injection
│   ├── animations.js       # IntersectionObserver scroll reveals + parallax + marquee + kinetic type + magnetic CTA
│   ├── contact-form.js     # front-end validation + simulated submit
│   └── app.js              # page-specific boot logic
└── images/
    ├── logo/               # logo.svg, logo-mono.svg, favicon.svg
    ├── icons/              # 36 SVG icons (24×24)
    ├── hero/               # PNG hero illustrations (1920×1080)
    ├── sections/           # PNG section images per business line
    ├── animals/            # cute mascot SVGs (fox, panda, cat, otter, penguin, deer, rabbit, hedgehog, whale)
    └── og/                 # OpenGraph cover PNG
```

## Source docs (in `docs/`)

- `PM-PLAN.md` — master content plan
- `site-map.md` — 7-URL inventory + priorities
- `seo-keywords.md` — per-page meta title + description
- `ad-platforms.md` — 59 ad-SDK compliance matrix
- `legal-outline.md` — section structure for Privacy + Terms
- `design-tokens.md` — color palette, typography, motion vocabulary
- `DEPLOY-CHECKLIST.md` — local QA report (populated by ops agent)
- `SITE-TREE.md` — final tree listing
- `FINAL-REPORT.md` — final delivery summary

## Local preview

```bash
cd "E:\香港\23"
python -m http.server 8765
# open http://localhost:8765/
```

The root URL `/` serves `index.html`, which redirects to `home.html`. Internal links never reference `index.html`.

## Build & deploy (LOCAL ONLY — no publishing in this scope)

Per the user's instruction, this repo is delivered as local code only. To deploy later:
1. Create a GitHub PAT with `repo` scope for an account that owns `runzeculture/runzeculture.com`.
2. `git init -b main` in `E:\香港\23\` (or `E:\同级别的别的目录`).
3. `git remote add origin https://<TOKEN>@github.com/runzeculture/runzeculture.com.git`.
4. `git add . && git commit -m "Initial release: runzeculture.com"`.
5. `git push -u origin main`.
6. Configure GitHub Pages: `POST /repos/runzeculture/runzeculture.com/pages` with `{source:{branch:"main",path:"/"}, cname:"runzeculture.com", https_certificate:true}`.
7. Enforce HTTPS via `PUT /pages` with `{https_enforced:true}` after DNS resolves to `185.199.108.133–111.153`.

> The token in `SEPC.txt` is dead (account suspended). Do **not** push `SEPC.txt` to a real repo — `.gitignore` already excludes it.

## Conventions

- HTML: semantic, single H1, accessible (ARIA + focus rings + 4.5:1 contrast).
- CSS: vanilla, design-token variables, mobile-first (480 / 768 / 1024 / 1280 / 1600).
- JS: vanilla, ES2020 modules, no frameworks, `prefers-reduced-motion` respected.
- Icons / Logo: SVG only.
- Hero / Section images: PNG.
- Animations: Ford-luxury motion vocabulary (parallax, marquee, kinetic type, magnetic CTA).
- Cute animals scattered as mascots and accents.