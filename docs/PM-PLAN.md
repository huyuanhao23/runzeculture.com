# Runzeculture — PM Plan

> Owner: pm-runzeculture · Audience: ui-runzeculture, coding-runzeculture, ops-runzeculture
> Source spec: `E:\香港\23\SEPC.txt`
> Companion docs in this folder: `site-map.md` · `seo-keywords.md` · `ad-platforms.md` · `legal-outline.md`

---

## 1. Project Summary

| Field | Value |
|---|---|
| Company | NOURISH CULTURE CO., LIMITED |
| Website | runzeculture.com (production, HTTPS enforced) |
| Office | Room D1, 1/F, Lucky Horse Industrial Building, 64 Tong Mi Road, Mong Kok, Hong Kong |
| General support email | support@runzeculture.com |
| Key-account email | huyuanhao@runzeculture.com |
| Business focus | Cultural project investment, artistic activity planning, film & TV content planning, brand planning & promotion, exhibition & display services, cultural & creative products, arts & crafts, publication-related consulting, business consulting, online marketing, import & export of goods and technology |
| Mobile-app distribution | Google Play + Apple App Store (covers all 11 lines above) |
| Primary markets | United States, United Kingdom, European Union + EEA |
| Tech stack | Static HTML + CSS + JS + SVG; PNG reserved for hero / large illustrations |
| Hosting | GitHub Pages with custom domain `runzeculture.com` (HTTPS enforced) |
| Repo | https://github.com/runzeculture/runzeculture.com.git |
| Required file | `/app-ads.txt` (empty stub at web root — spec mandate) |
| Visual reference | ford.com — rich motion, layered scroll, parallax; **NOT** minimal |
| Brand mascot | Cute animal (suggest: red panda or tree frog) — one character reused across all pages |

---

## 2. Site Map

| Page | URL | Role | Primary CTA | Keyword cluster |
|---|---|---|---|---|
| Home | `/` | Brand impression, dual-track onboarding (services vs mobile app) | Explore Services | runzeculture, hong kong culture agency, mobile culture app |
| Business Services | `/services.html` | Detail of all 11 business lines + mobile management app | Get a Quote | cultural project investment, art planning, film tv planning, brand promotion |
| Corporate Culture | `/culture.html` | Mission, vision, values, mascot, team | Meet the Team | culture agency hong kong, mission values |
| Company News | `/news.html` | Press, insights, announcements | Read Latest News | runzeculture news, press releases |
| Contact Us | `/contact.html` | Two channels (support + key account) + form | Email Us | contact runzeculture, mong kok office |
| Privacy Policy | `/privacy.html` | Legal compliance — site + app + every required ad SDK | — | privacy policy runzeculture |
| Terms of Service | `/terms.html` | Legal compliance — app distribution, IP, liability, jurisdiction | — | terms of service runzeculture |

> Slug → filename and canonical-URL details live in `docs/site-map.md`. The public URL for Home is exactly `/` — **never** `/index.html`.

---

## 3. Per-Page Content Outline

### 3.1 Home (`/`)

| Section | Content direction | Target keywords | Internal link target |
|---|---|---|---|
| Hero | Full-bleed PNG background, animated mascot (cute animal), headline "Where Culture Meets Mobile", sub-headline cites HK roots + global reach; dual CTA: "Explore Services" (primary) and "Get the App" (secondary). Visual reference: ford.com hero with stacked parallax + reveal. | `runzeculture`, `hong kong culture agency` | `/services.html`, contact |
| Trust strip | "Trusted in Hong Kong · Cultural projects across three continents" + partner-logos placeholders (SVG wordmarks). | `international culture consultancy` | — |
| Service highlights | 4-card grid — each card: SVG icon + 1-line description; tail link "See all 11 services". | `cultural project investment`, `art event planning`, `brand promotion`, `exhibition services` | `/services.html#services` |
| Mobile-app hero | SVG phone-mockup + reduced in-app screenshot, three feature bullets, App Store + Google Play SVG badges, QR placeholder. | `culture management app`, `mobile app for creatives` | `/services.html#mobile-app` |
| Story strip | One paragraph anchored by mascot; CTA "Our culture" → Corporate Culture. | `culture agency story` | `/culture.html` |
| News teaser | 3 most-recent news cards (date + tag + title + 1-line excerpt). | `runzeculture news` | `/news.html` |
| Footer CTA | "Ready to elevate your next cultural project?" + button → Contact. | — | `/contact.html` |

### 3.2 Business Services (`/services.html`)

| Section | Content direction | Target keywords | Internal link target |
|---|---|---|---|
| Page intro | H1 "11 Business Lines, One Cultural Bridge"; sub-paragraph restates HK + global positioning. | `runzeculture services` | Home `/` |
| Services grid (`#services`) | 11 cards (3- or 4-column responsive grid). Each card: SVG icon, English title, 2-3-sentence description, scope note citing the original Chinese label in parentheses (e.g. "Cultural Project Investment — cultural project investment (文化項目投資): sourcing, due diligence, and co-investment support for cross-border cultural projects"). | per keyword — see `seo-keywords.md` | — |
| Mobile-app section (`#mobile-app`) | Block titled "Mobile Management App on Google Play & App Store". Long paragraph: "All eleven business lines are mirrored in our mobile management application, available on Google Play and the Apple App Store. The app combines cultural project dashboards, artistic activity scheduling, film & TV planning boards, brand campaign trackers, exhibition display timelines, cultural-product catalogue, arts & crafts gallery, publication consulting intake, business consulting booking, online marketing analytics, and import/export documentation tools." | `culture management app`, `hong kong mobile app` | — |
| App feature list | Bullet list — dashboards per business line, push notifications, multilingual UI (EN + ZH), document upload, in-app purchases, ads-supported free tier with UMP / ATT consent flows. | `mobile culture app features` | — |
| App store badges | App Store + Google Play SVG badges (no fake ratings), placeholder href `https://play.google.com` and `https://apps.apple.com`. | `download culture app` | — |
| Process | "How We Work" 4-step: Discovery → Scoping → Execution → Reporting. | `how runzeculture works` | — |
| Industries served | Tag chips: cultural institutions, NGOs, IP holders, film studios, brand marketers, exhibition organisers, art schools, publishers, cross-border traders. | `industries served` | — |
| CTA strip | "Talk to our team" → Contact. | `contact runzeculture` | `/contact.html` |

### 3.3 Corporate Culture (`/culture.html`)

| Section | Content direction | Target keywords | Internal link target |
|---|---|---|---|
| Hero | Mascot character (full PNG or layered SVG) + headline "Culture is our craft"; sub-paragraph on craft, care, cross-border fluency. | `corporate culture runzeculture` | — |
| Mission / Vision / Values | Three-card layout (Mission: connect cultures through creative capital · Vision: a global hub linking HK to international cultural projects · Values: craft · candor · cross-border fluency · creator-first). | `mission vision values` | — |
| Our story | 3-paragraph founding story anchored in Mong Kok HK origin, expansion to mobile and global services. | `hong kong culture agency story` | — |
| Mascot spotlight | Full-width panel introducing the mascot (suggest: red panda or tree frog) with motion — idle blink, wave on hover, section-tied pose per scroll position. | `runzeculture mascot` | — |
| Team spirit | Photo-collage placeholders (PNG) — short paragraphs under each block. | `team culture` | — |
| Social responsibility | Cultural-education initiatives; sustainability in arts supply chain. | `csr culture agency` | — |
| CTA | "Get to know our team" → Contact. | — | `/contact.html` |

### 3.4 Company News (`/news.html`)

| Section | Content direction | Target keywords | Internal link target |
|---|---|---|---|
| Hero | "Latest from Runzeculture" + feed-style snippet. | `runzeculture news` | Home `/` |
| Press releases | List of 4–6 cards: date · tag (Press / Insight / Event) · title · 2-line excerpt · "Read more" anchor. | `press release hong kong` | — |
| Insights | 3 cards: long-form topics (e.g. "Why mobile apps are reshaping cultural project management"). | `cultural industry insights` | — |
| Events | Card grid of past + upcoming events. | `events hong kong` | — |
| CTA | "Subscribe via email" → `mailto:support@runzeculture.com`. | — | contact |

> Static build: each "article" is a styled card with anchored title. No separate article pages in v1 unless Coding expands the deliverable.

### 3.5 Contact Us (`/contact.html`)

| Section | Content direction | Target keywords | Internal link target |
|---|---|---|---|
| Hero | "Let's build something cultural"; sub-line "We answer within 2 business days". | `contact runzeculture` | Home `/` |
| Two-channel card | Channel 1 — General Support: `support@runzeculture.com`. Channel 2 — Key Accounts: `huyuanhao@runzeculture.com`. Both as clickable `mailto:` + visually styled cards. | `support email`, `key account email` | — |
| Office card | Full address: `Room D1, 1/F, Lucky Horse Industrial Building, 64 Tong Mi Road, Mong Kok, Hong Kong`. Plus Google Maps link with explicit lat/long for Mong Kok. | `mong kok office` | — |
| Contact form (visual) | Static form — Name, Company, Email, Service-of-interest dropdown, Message. On submit: JS toast "Form is a demo — please email support@runzeculture.com". | `contact form` | — |
| Business hours | Mon–Fri 09:00–18:00 HKT. | — | — |
| Final CTA | "Prefer WhatsApp or call?" — placeholder link (SEPC.txt does not provide a phone number, omit). | — | — |

---

## 4. App & Mobile-Integration Outline

### 4.1 Mobile-app lines mapped to web Services

Each business line on `services.html` mirrors 1:1 as a tab/module inside the Runzeculture mobile management application:

| Business line (English) | Chinese | App module |
|---|---|---|
| Cultural Project Investment | 文化項目投資 | Investment dashboard |
| Artistic Activity Planning | 文藝活動策劃 | Event planner |
| Film & TV Content Planning | 影視內容策劃 | Production board |
| Brand Planning & Promotion | 品牌策劃推廣 | Campaign tracker |
| Exhibition & Display Services | 展覽展示服務 | Show timeline |
| Cultural & Creative Products | 文創產品 | Product catalogue |
| Arts & Crafts | 工藝美術品 | Maker gallery |
| Publication-Related Consulting | 出版物相關諮詢 | Publishing intake |
| Business Consulting | 商務顧問 | Booking system |
| Online Marketing | 網絡營銷 | Analytics view |
| Import & Export of Goods and Technology | 貨物及技術進出口 | Trade docs |

### 4.2 App store publish target

- **Google Play** — `Runzeculture: Culture Manager` (placeholder; Coding finalises)
- **Apple App Store** — same product name
- **App store description (EN)** — 4,000-char max; PM supplies the EN draft on request
- **Categories** — Business (primary) · Productivity (secondary)
- **Privacy nutrition labels** — must match `/privacy.html` byte-for-byte in category coverage

### 4.3 Install CTA placement

1. **Home** — full-height "Mobile App" section
2. **Business Services** — dedicated `#mobile-app` block
3. **Footer** — secondary link "Get the App"

### 4.4 Ad format inventory in the apps (spec mandate)

- Open-screen / splash ads
- Rewarded video ads
- Interstitial ads
- Banner / MREC / native ads

> Full per-SDK format mapping with consent flows lives in `docs/ad-platforms.md`.

---

## 5. Cute Animal + Motion Direction (hand-off: ui-runzeculture)

> Directive from SEPC.txt: "rich animation effects, not minimal · cute animals and expressions."

| Element | Direction |
|---|---|
| Mascot | One signature animal character (suggest: **red panda** or **tree frog**) reused across Home, Corporate Culture, contact-thanks state, 404. Recoloured slightly per section. |
| Mascot behaviour | Idle (blinks, breathes); reacts to hover (waves / peeks); reacts to scroll (per-section pose). Modelled on ford.com feature-reveal cadence but with the animal as protagonist. |
| Section reveals | Parallax on hero PNG; split-screen scroll-tied animation for services grid; sticky scroll-snapping for the app section. |
| Hover | SVG icons morph to filled state; cards lift 4–8 px on hover with shadow upgrade. |
| Page transitions | Cross-fade between routes. |
| Loading | Paw-print spinner instead of generic loader. |
| Performance budget | CSS + small JS only; honour `prefers-reduced-motion`; target 60 fps on mid-range desktop, 30 fps on mid-range mobile. |

---

## 6. Acceptance Criteria

> All items must be verifiable by ops-runzeculture post-deploy.

- [ ] 5 primary pages exist: `/`, `/services.html`, `/culture.html`, `/news.html`, `/contact.html`
- [ ] Home accessible **without** `index.html` in the URL
- [ ] Every page footer contains text links to `/privacy.html` and `/terms.html`
- [ ] All page content is English; no Chinese strings outside the parenthetical "(文化項目投資)" labels on `/services.html`
- [ ] Company facts visible on Home or Contact (or both): legal name `NOURISH CULTURE CO., LIMITED`, office `Room D1, 1/F, Lucky Horse Industrial Building, 64 Tong Mi Road, Mong Kok, Hong Kong`, both emails
- [ ] Mobile-app block is integrated into `/services.html`
- [ ] `/privacy.html` and `/terms.html` are complete (not summaries) — see `docs/legal-outline.md`
- [ ] `/app-ads.txt` is an empty file at the web root (SEPC.txt mandate)
- [ ] Tech split: SVG only for icons/logos/illustrations; PNG only for hero/large images; CSS only under `/css/`; JS only under `/js/`; media under `/images/`
- [ ] No `index.html` literal served to clients (clean URLs)
- [ ] Visual style: rich motion (ford.com-influenced); cute animal mascot appears; not a minimal page
- [ ] Google SEO hygiene: single `<h1>` per page, descriptive `<title>` and `<meta description>`, `lang="en"`, canonical link, sitemap.xml, robots.txt, structured data where applicable
- [ ] HTTPS forced via GitHub Pages custom-domain setup
- [ ] GitHub repo at https://github.com/runzeculture/runzeculture.com.git — code committed (ops-runzeculture owns this step)
- [ ] Meta titles ≤ 60 chars; meta descriptions ≤ 160 chars per page (per `seo-keywords.md`)
- [ ] All SEO keyword targets per page satisfied (per `seo-keywords.md`)
- [ ] Every ad platform in `docs/ad-platforms.md` is disclosed by name in `/privacy.html` and `/terms.html`
