# Site Map

> Canonical domain: `https://runzeculture.com/`
> Source of truth for slug ↔ filename ↔ URL. All public URLs are clean (no `index.html`).
> Companion files: `PM-PLAN.md` · `seo-keywords.md` · `ad-platforms.md` · `legal-outline.md`

---

## Page inventory

| Page slug | Filename (HTML) | Canonical URL | Sitemap priority | Changefreq |
|---|---|---|---|---|
| home | (root, served from `index.html`) | `https://runzeculture.com/` | 1.0 | weekly |
| services | `services.html` | `https://runzeculture.com/services.html` | 0.9 | monthly |
| culture | `culture.html` | `https://runzeculture.com/culture.html` | 0.7 | monthly |
| news | `news.html` | `https://runzeculture.com/news.html` | 0.7 | weekly |
| contact | `contact.html` | `https://runzeculture.com/contact.html` | 0.8 | yearly |
| privacy | `privacy.html` | `https://runzeculture.com/privacy.html` | 0.3 | yearly |
| terms | `terms.html` | `https://runzeculture.com/terms.html` | 0.3 | yearly |

---

## Routing notes (for coding-runzeculture + ops-runzeculture)

- The Home page lives at `/`. GitHub Pages serves `index.html` by default; the public URL **must not** include the literal `index.html` segment. Configure Pages so the clean URL wins.
- All other pages use plain `.html` slugs; the site is static, no SPA / router.
- The mobile-app deep-link (`https://runzeculture.com/app`) is **not** a public page in v1 — install is driven via stores. Reserve `/app` as a redirect to `/services.html#mobile-app` for future use.
- `/app-ads.txt` is an empty file at the web root (SEPC.txt mandate). It is **not** a page and **not** in `sitemap.xml`.

---

## Sitemap XML (delivered to ops-runzeculture to copy verbatim)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://runzeculture.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://runzeculture.com/services.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://runzeculture.com/culture.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://runzeculture.com/news.html</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://runzeculture.com/contact.html</loc><changefreq>yearly</changefreq><priority>0.8</priority></url>
  <url><loc>https://runzeculture.com/privacy.html</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://runzeculture.com/terms.html</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>
```

## robots.txt template

```
User-agent: *
Allow: /
Disallow: /app-ads.txt

Sitemap: https://runzeculture.com/sitemap.xml
```

> `/app-ads.txt` is intentionally blocked from crawlers per industry convention.
