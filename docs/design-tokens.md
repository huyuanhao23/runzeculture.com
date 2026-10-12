# Design Tokens — NOURISH CULTURE CO., LIMITED
**Project:** `runzeculture.com` corporate website
**Audience:** US + EU + UK (English-first, international/global tone)
**Aesthetic:** Ford-luxury editorial + cute-animal brand voice
**Source of truth:** this file. The Coding agent (`coding-runzeculture`) must consume this verbatim and never invent new tokens. The PM agent (`pm-runzeculture`) supplies copy; the Ops agent (`ops-runzeculture`) handles hosting.

---

## 1 · Color Palette

The palette is **near-black + off-white + Ford-style accent blue + restrained gold + playful secondary accents** (coral + teal) so editorial sections feel premium while the cute-animal mascots get a friendly, modern counterpoint.

### 1.1 Core brand colors
| Token | Hex | Role |
|---|---|---|
| `--color-ink-900` | `#0B0B0F` | Primary surface — near-black, used for dark sections, body text on light bg |
| `--color-ink-800` | `#16161D` | Card background on dark surface, slightly lifted |
| `--color-ink-700` | `#23232C` | Borders, dividers on dark surface |
| `--color-paper-50` | `#F4F4F1` | Primary light surface — off-white, slightly warm |
| `--color-paper-100` | `#FFFFFF` | Pure white for cards on `--color-paper-50` |
| `--color-paper-200` | `#E8E8E3` | Subtle section separator on light bg |
| `--color-paper-300` | `#D4D4CC` | Hairline borders on light bg |

### 1.2 Brand accents (Ford-luxury + warm-mascot tension)
| Token | Hex | Role |
|---|---|---|
| `--color-blue-500` | `#1C69D4` | Primary CTA, links on dark, brand accent (Ford-style) |
| `--color-blue-600` | `#155CB8` | CTA hover/active |
| `--color-blue-100` | `#E5EFFC` | Tinted backgrounds, focus rings |
| `--color-gold-500` | `#D4AF37` | Premium accent — used sparingly for awards, premium tags |
| `--color-gold-300` | `#E9D38A` | Soft gold tint for hover states |
| `--color-coral-500` | `#FF6B5B` | Playful mascot accent, error/alert |
| `--color-coral-300` | `#FFB1A8` | Tinted coral background |
| `--color-teal-500` | `#2EC4B6` | Cool secondary, success states, mascot accent |
| `--color-teal-300` | `#A6EDE5` | Tinted teal background |

### 1.3 Semantic tokens
| Token | Maps to | Usage |
|---|---|---|
| `--color-bg` | `--color-paper-50` | Default page background |
| `--color-bg-alt` | `--color-ink-900` | Alternating dark sections (every other hero block) |
| `--color-text-primary` | `--color-ink-900` | Body text on light |
| `--color-text-secondary` | `#4A4A52` | Subheads, captions |
| `--color-text-on-dark` | `--color-paper-50` | Body text on `--color-bg-alt` |
| `--color-text-muted` | `#77777F` | Tertiary text, legal copy |
| `--color-link` | `--color-blue-500` | Inline links |
| `--color-link-hover` | `--color-blue-600` | Link hover state |
| `--color-border` | `--color-paper-300` | Default hairline border |
| `--color-border-dark` | `--color-ink-700` | Hairline on dark surface |
| `--color-success` | `--color-teal-500` | Form success states |
| `--color-warning` | `#E0A800` | Warnings |
| `--color-error` | `--color-coral-500` | Form errors |

### 1.4 Mascot palette (reused in animals + accent illustrations)
| Token | Hex | Used by |
|---|---|---|
| `--m-fox` | `#FF6B5B` (coral) | Fox body |
| `--m-panda` | `#0B0B0F` + `#F4F4F1` | Panda body |
| `--m-cat` | `#E9D38A` (gold-300) | Cat body |
| `--m-otter` | `#A66D3B` (warm brown) | Otter body |
| `--m-penguin` | `#1C1F26` + `#FFB1A8` | Penguin body |
| `--m-deer` | `#C8A97A` (sand) | Deer body |
| `--m-rabbit` | `#E0E0E0` (light grey) | Rabbit body |
| `--m-hedgehog` | `#6B5544` (umber) | Hedgehog body |
| `--m-whale` | `#1C69D4` (blue) | Whale body, deep-ocean accent |

**Rule:** never use more than two mascot accents within one section; alternate to keep the editorial cadence.

---

## 2 · Typography

English-first corporate voice. Two font families max (one display, one body). Load via Google Fonts with `display=swap`.

### 2.1 Families
| Token | Stack |
|---|---|
| `--font-display` | `"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--font-body` | `"Inter", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--font-mono` | `"JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace` |

- Display = `Space Grotesk` (700 / 800) — geometric, wide, editorial.
- Body = `Inter` (400 / 500 / 600).
- Mono = `JetBrains Mono` only for code, telemetry counters, captchas.

### 2.2 Type scale (desktop, ≥1280px)
| Token | font | size (rem / px) | line-height | letter-spacing | weight |
|---|---|---|---|---|---|
| `--type-hero` | display | `5.6rem / 90px` | `1.02` | `-0.025em` | 800 |
| `--type-display-xl` | display | `4.2rem / 68px` | `1.04` | `-0.022em` | 800 |
| `--type-display-lg` | display | `3.2rem / 52px` | `1.08` | `-0.018em` | 700 |
| `--type-display-md` | display | `2.4rem / 38px` | `1.12` | `-0.012em` | 700 |
| `--type-display-sm` | display | `1.75rem / 28px` | `1.2` | `-0.008em` | 700 |
| `--type-h4` | body | `1.375rem / 22px` | `1.35` | `-0.004em` | 600 |
| `--type-body-lg` | body | `1.125rem / 18px` | `1.55` | `0` | 400 |
| `--type-body` | body | `1rem / 16px` | `1.6` | `0` | 400 |
| `--type-body-sm` | body | `0.875rem / 14px` | `1.55` | `0` | 400 |
| `--type-caption` | body | `0.75rem / 12px` | `1.45` | `0.06em` (uppercase) | 500 |
| `--type-overline` | body | `0.6875rem / 11px` | `1.4` | `0.14em` (uppercase) | 600 |

### 2.3 Responsive type scale
Same ratios, capped at:
- ≤ 768px: hero `3.2rem`, display-xl `2.6rem`, display-lg `2rem`, body 16px (unchanged).
- ≤ 480px: hero `2.4rem`, display-xl `2rem`, body 16px.

### 2.4 Rules
- Headlines always `text-wrap: balance`.
- Body text always `text-wrap: pretty`.
- Paragraph max-width = `64ch`.
- All caps only for `--type-caption` and `--type-overline` with explicit `text-transform: uppercase`.

---

## 3 · Spacing (4-pt grid)

| Token | px | rem |
|---|---|---|
| `--space-1` | 4px | 0.25 |
| `--space-2` | 8px | 0.5 |
| `--space-3` | 12px | 0.75 |
| `--space-4` | 16px | 1 |
| `--space-5` | 20px | 1.25 |
| `--space-6` | 24px | 1.5 |
| `--space-8` | 32px | 2 |
| `--space-10` | 40px | 2.5 |
| `--space-12` | 48px | 3 |
| `--space-16` | 64px | 4 |
| `--space-20` | 80px | 5 |
| `--space-24` | 96px | 6 |
| `--space-32` | 128px | 8 |
| `--space-40` | 160px | 10 |

**Section vertical rhythm:** major sections = `--space-32` top + `--space-32` bottom on desktop, `--space-20` on mobile.

---

## 4 · Radii

| Token | px | Usage |
|---|---|---|
| `--radius-sm` | 4px | Tags, badges, small chips |
| `--radius-md` | 8px | Form inputs, small buttons |
| `--radius-lg` | 16px | Cards, image tiles |
| `--radius-xl` | 24px | Hero panels, large cards |
| `--radius-2xl` | 32px | Feature blocks |
| `--radius-pill` | 999px | Pill buttons, marquee items |

**Rule:** outer radius ≥ inner radius + 4px when nesting.

---

## 5 · Shadows (3-tier elevation)

| Token | Definition | Usage |
|---|---|---|
| `--shadow-1` | `0 1px 2px rgba(11,11,15,.06), 0 1px 1px rgba(11,11,15,.04)` | Hairline lift, default card |
| `--shadow-2` | `0 8px 24px rgba(11,11,15,.08), 0 2px 6px rgba(11,11,15,.04)` | Hover state, dropdown |
| `--shadow-3` | `0 24px 48px -12px rgba(11,11,15,.18), 0 8px 16px rgba(11,11,15,.08)` | Modal, sticky header after scroll |
| `--shadow-glow-blue` | `0 0 0 3px rgba(28,105,212,.32)` | Focus ring |
| `--shadow-glow-gold` | `0 0 0 3px rgba(212,175,55,.35)` | Premium focus ring |

Combine with elevation tokens:
- `--elevation-1` = `--shadow-1`
- `--elevation-2` = `--shadow-2`
- `--elevation-3` = `--shadow-3`

Dark surfaces: replace shadow with `0 0 0 1px rgba(255,255,255,.06) + colored glow`.

---

## 6 · Motion timings & easings

### 6.1 Durations
| Token | value | usage |
|---|---|---|
| `--dur-80` | `80ms` | micro (color flash, ripple) |
| `--dur-160` | `160ms` | button press, icon swap |
| `--dur-240` | `240ms` | hover lift, dropdown in/out |
| `--dur-320` | `320ms` | card flip, panel open |
| `--dur-480` | `480ms` | section reveal, panel slide |
| `--dur-720` | `720ms` | hero stagger, marquee loop entry |
| `--dur-1200` | `1200ms` | split-text hero, image-sequence clip |

### 6.2 Easings
| Token | cubic-bezier |
|---|---|
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `--ease-decel` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-accel` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--ease-emphasized` | `cubic-bezier(0.2, 0, 0.1, 1.2)` — slight overshoot for playful motion |
| `--ease-magnetic` | `cubic-bezier(0.5, -0.2, 0.3, 1.4)` — for the CTA hover magnet |
| `--ease-marquee` | `linear` |

**Rule:** all hover transitions = `transition-property: transform, opacity, background-color, box-shadow, color; transition-duration: var(--dur-240); transition-timing-function: var(--ease-standard);`.

---

## 7 · Motion vocabulary (keyframe library)

These keyframe names are the canonical contract the Coding agent must reference. Use `@keyframes <name>` in a global `motion.css` (or equivalent). Each is paired with the token above.

### 7.1 Entrance
- **`fade-up`** — `opacity 0 → 1`, `translateY(24px) → 0`. Duration `--dur-480`, easing `--ease-decel`.
- **`fade-in`** — `opacity 0 → 1`. Duration `--dur-320`, easing `--ease-standard`.
- **`split-text`** — characters (or words) sequentially translateY(100% → 0%) + opacity 0 → 1, staggered 30ms. Duration per char `--dur-480`.
- **`reveal-mask`** — clip-path from `inset(0 100% 0 0)` → `inset(0 0 0 0)`. Duration `--dur-720`, easing `--ease-emphasized`.
- **`count-up`** — numeric display animation (driven by JS counting the value; CSS owns the rolling easing).
- **`stagger-children`** — applies `--delay-step` (60ms) to direct children of any container that wraps `fade-up` / `fade-in` etc. Implement with `nth-child(n)` selectors up to 16, then JS for the rest.

### 7.2 Loop / marquee
- **`marquee-left`** — `translateX(0) → translateX(-50%)` (content duplicated). Duration configurable (default 30s), easing `--ease-marquee`. Pause on hover via `animation-play-state`.
- **`marquee-right`** — mirror of `marquee-left`.
- **`gradient-shift`** — background-position cycles on a `-gradient` with three color stops; 8s loop, `--ease-marquee`.

### 7.3 Parallax & spatial
- **`parallax-y`** — scroll-bound `translateY(scrollY * factor)`. Factor defaults to `0.15`. Implementation uses `transform: translate3d` (never `top`) for compositor-only movement.
- **`float-y`** — `translateY(0) ↔ translateY(-8px)` infinite alternating, 3s, `--ease-standard`. Used on mascots.
- **`pulse`** — `scale(1) → scale(1.04) → scale(1)` infinite, 2.4s, `--ease-standard`. Used on CTAs and notification dots.
- **`bounce-soft`** — `translateY(0) → -12px → 0` once, 600ms, `--ease-emphasized`. Used on mascot landings.

### 7.4 Interaction primitives
- **`scroll-progress`** — JS-driven, populates a `scaleX` `--progress` CSS var on `[data-scroll-progress]` from 0 → 1. Updates on `requestAnimationFrame`.
- **`image-sequence-hover`** — swaps `src` between N pre-baked frames based on cursor x-position, throttled to rAF.
- **`magnetic-cta`** — on pointer move, the CTA translates by `(pointer.x - rect.center) * 0.3`, capped to 12px. Releases with `--ease-magnetic`.
- **`reveal-on-scroll`** — generic intersection-observer wrapper that toggles `data-revealed="true"` to play any entrance animation.

### 7.5 Misc
- **`shimmer`** — `background-position` cycles a linear-gradient sheen (1.2s). Used on skeletons.
- **`spin`** — `rotate(0) → rotate(360deg)` infinite, 1.6s, `--ease-marquee`. Used on loader only.

**Note:** All animations are implemented as CSS keyframes except `count-up`, `scroll-progress`, `image-sequence-hover`, `magnetic-cta`, and `reveal-on-scroll` which require small JS shims (≤ 30 lines each). The Coding agent must not introduce other JS animation libraries; no GSAP, no Framer, no anime.js.

---

## 8 · Layout & breakpoints

### 8.1 Breakpoints
| Token | min-width |
|---|---|
| `--bp-sm` | 480px |
| `--bp-md` | 768px |
| `--bp-lg` | 1024px |
| `--bp-xl` | 1280px |
| `--bp-2xl` | 1600px |

### 8.2 Container widths
| Token | max-width |
|---|---|
| `--container-narrow` | 720px — for legal copy, articles |
| `--container-default` | 1200px — primary reading column |
| `--container-wide` | 1440px — section padding stays wide |
| `--container-bleed` | 1920px — full-bleed hero allowed |

Gutters: `--space-6` (mobile), `--space-10` (tablet), `--space-16` (desktop).

### 8.3 Grid
12-column grid, 24px gutters desktop / 16px mobile.

---

## 9 · Reduced motion strategy

Honor `prefers-reduced-motion: reduce` at the global CSS layer:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  .marquee-track { animation: none; transform: none; }
  .float-y, .pulse, .bounce-soft { animation: none; transform: none; }
  .parallax-y { transform: none !important; }
}
```

Pure informational animations (color changes, opacity fades ≤ 120ms) are still allowed.

---

## 10 · Imagery

### 10.1 Photography
- Hero sections use **1920×1080 PNG**, full-bleed, dark or light per section.
- Editorial photos should have a **single subject + clean negative space**.
- Mask / overlay layer: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(11,11,15,.85) 100%) for darker text legibility.
- Cute animals woven into 3–4 hero photos as foreground mascots — they are part of the brand voice, never decoration.

### 10.2 Logo / icon usage
- Logo primary appears minimum **80px tall** in nav, **120px** in footer.
- Minimum clear space = logo wordmark height ÷ 4 on all sides.
- Do **not** stretch, recolor, or place on noisy backgrounds without an overlay plate.
- Icons: outline 1.5–1.75px stroke, square caps, single accent color or monochrome.

### 10.3 Compression
- All hero PNG → AVIF + WebP fallback via `<picture>` (Coding agent owns).
- Section PNG → max 200KB each. Tools: `cwebp -q 78`, `avifenc --speed 6`.

---

## 11 · Voice & tone (cross-reference for UI copy)

- **Brand voice:** confident, international, quietly playful. Never corporate-stiff, never over-cutesy.
- **Mascot voice:** mascots appear in **empty states**, **404**, **section dividers**, **inline hints** — small and on-brand. Max one mascot per visible region.
- **Microcopy:** button labels start with verbs. CTAs ≤ 3 words.
- **Numbers:** in headlines, prefer "10+" or "27 markets" — never arbitrary.
- **Time, currency, units:** ISO-friendly (USD / EUR / GBP if quoted). 24-hour time only when exact.
- **Errors:** explain what happened + what to do, in one sentence.

---

## 12 · Filesystem reference

```
docs/
  design-tokens.md         ← this file
images/
  logo/
    logo.svg               ← full color wordmark + symbol
    logo-mono.svg          ← monochrome for dark surfaces & print
    favicon.svg            ← 32×32 symbol for browser tabs
  icons/                   ← ≥ 25 SVGs, viewBox 24×24, accessible
  animals/                 ← ≥ 8 cute mascot SVGs, coherent family
  hero/                    ← ≥ 6 PNGs, 1920×1080
  sections/                ← ≥ 12 PNGs, business-line imagery
  og/
    og-cover.png           ← 1200×630 OpenGraph cover
```

---

## 13 · Acceptance checklist for the Coding agent

When the Coding agent wires the site to these tokens:

- [ ] All colors, fonts, spacing, radii, shadows, durations, easings come from this file via `var(--token)`.
- [ ] No new shadow values, no new durations, no new colors introduced.
- [ ] At least one of each entrance animation is used on the homepage hero.
- [ ] Marquee appears at least once (e.g., client logos or "as featured in").
- [ ] Parallax or scroll-progress is enabled on the culture page hero.
- [ ] Reduced-motion media query honored.
- [ ] OG cover + favicon load from `images/og/og-cover.png` and `images/logo/favicon.svg`.

If any deviation is needed, the Coding agent must flag it back to PM/UI before shipping.
