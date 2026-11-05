# Spec: Swiss Modernism Redesign — Portfolio RZA

**Date:** 2026-11-05
**Status:** Approved by user (design approved in chat, spec review waived)
**Supersedes:** `DESIGN.md` (Editorial Contemporâneo)

## Goal

Rebuild the visual system of the portfolio so it reads as a senior front-end
developer's site instead of a partially-applied magazine theme. Fix the seven
concrete defects found in the audit while switching the visual direction to
Swiss Modernism 2.0.

Success = the site passes `npm run lint` and `npm run build`, renders correctly at
375 / 768 / 1024 / 1440 px, and has no misspelling, no broken drop cap, no
dominating CTA, and no empty-card skills grid.

## Why Swiss Modernism

The current Editorial Contemporâneo theme has real character but the execution is
inconsistent: paper textures, watermark words, crop marks and double borders all
compete at once, while the typography carries defects. Swiss Modernism keeps the
"typography does the work" idea but removes the ornaments, which fixes most of the
audit findings structurally rather than cosmetically.

## Tokens

Single source of truth in `src/index.css` under `@theme`.

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#FAFAFA` | Page background |
| `--color-fg` | `#09090B` | Primary text, solid CTA fill |
| `--color-muted-fg` | `#52525B` | Secondary text (contrast 7.1:1 on `#FAFAFA`) |
| `--color-hairline` | `#E4E4E7` | 1px rules, card borders |
| `--color-accent` | `#800000` | Active nav underline, links, focus ring, markers only |
| `--color-surface` | `#FFFFFF` | Cards |

Accent `#800000` on `#FAFAFA` = 8.0:1, passes WCAG AA and AAA for normal text.
Accent is never a button fill; buttons are `--color-fg` fill with white text.

No gradients, no textures, no box-shadows except one optional `0 1px 2px` on
hover for project cards.

## Typography

| Role | Family | Weights | Spec |
|---|---|---|---|
| Display | Archivo | 500/600/700 | `letter-spacing: -0.04em`, `line-height: 1.05`, `clamp()` sizes |
| Body | Inter | 400/500 | `line-height: 1.6`, measure capped at `62ch` |
| Label / index | JetBrains Mono | 400/500 | `11px`, `uppercase`, `letter-spacing: 0.14em` |

Deviation from the database recommendation (Archivo + Space Grotesk): two
grotesks at body size flatten the hierarchy. Inter is sharper at 16px. Recorded
here so it is a decision, not drift.

Sizes:

- H1: `clamp(2.5rem, 6vw, 5.5rem)`
- H2 section: `clamp(1.75rem, 3.5vw, 2.75rem)`
- Lead: `clamp(1rem, 1.4vw, 1.25rem)`
- Body: `1rem` / `1.0625rem`
- Label: `0.6875rem`

## Layout

- Container: `max-width: 1280px`, horizontal padding `clamp(1.25rem, 4vw, 3rem)`
- Grid: 12 columns, `gap: 1.5rem`
- Section vertical rhythm: `padding-block: clamp(4rem, 8vw, 8rem)`
- Spacing scale: multiples of 8px only
- Every section uses the same container + grid; no `w-[95%]` or ad-hoc flex.

## Sections

### Navbar

Hand-rolled, replacing `@material-tailwind` `Navbar`/`MobileNav`.

- Fixed top, height 64px, `bg-[#FAFAFA]/90` + `backdrop-blur`, hairline bottom
- Left: `RZA` in Archivo 700, 16px, tracking `0.1em`
- Right: 5 links, JetBrains Mono 11px uppercase, tracking `0.14em`
- Active section: 2px accent underline, driven by `useActiveSection` hook
  (IntersectionObserver, `rootMargin: "-45% 0px -50% 0px"`)
- Mobile (<1024px): full-height panel, links stacked at 24px, closes on click
- Keyboard: panel traps nothing, Escape closes, links are real `<a href="#id">`

### Hero

Asymmetric 7/5 grid.

- Left: overline `FRONT-END DEVELOPER — JAWA TIMUR, ID` (mono), H1 name,
  lead paragraph `max-w-[48ch]`, two actions: solid `Lihat Karya` + text link
  `Hubungi Saya`
- Right: portrait in a plain square frame, `filter: grayscale(1)` → `grayscale(0)`
  on hover/focus-within, 300ms
- `BlurText` retained for H1 with `prefers-reduced-motion` guard
- `CircularText` and `DecryptedText` removed from the hero (decorative noise)

### About

- Two columns: label `01 / ABOUT` in column 1-3, paragraph in column 4-12
- No card, no border, no drop cap
- Highlight the phrase "Website Development" with a 2px accent underline only

### Skills

Replaces the 3×3 identical-card grid. Three grouped rows:

| Group | Items |
|---|---|
| Languages | HTML, CSS, JavaScript, TypeScript |
| Frameworks & Libraries | React, Tailwind CSS, Redux Toolkit, TanStack Query |
| Tools & Testing | Vitest |

- Each row: group label in column 1-3 (mono), items in column 4-12 as a
  hairline-separated list
- Item: 20px monochrome icon (`currentColor`), name, and level (`Dasar` /
  `Menengah`) right-aligned in mono
- Rows separated by 1px `--color-hairline`; no card borders
- Fix label: `Beginner Redux Tool Kit` → `Redux Toolkit`, `Tanstack Query` →
  `TanStack Query`, `Javascript` → `JavaScript`, `Typescript` → `TypeScript`

### Portfolio

- Section heading `Portfolio` (spelling fixed)
- Tabs become text tabs with a 2px bottom rule on the active one; no filled box
- Grid: 2 columns at `md+`, 1 column below; image aspect `16/10` via
  `aspect-ratio`, `object-fit: cover`
- Whole card is a link (`<a>` wrapping), not a button at the bottom
- Card content: image → title (Archivo 600) → one-line description
  (`line-clamp-2`) → meta row in mono (`role · year`)
- Tech list becomes mono text joined by ` / `, max 4 items, `+N` for overflow
- Hover: image `scale(1.02)`, title gets accent underline; 300ms
- Alt text is per-project and descriptive
- Rename `src/Components/Portofolio.jsx` → `Portfolio.jsx`

### Contact

- Two columns: form (7) + social list (5)
- Form: visible labels above inputs, inputs are bottom-border only, focus turns
  the border accent, errors sit under the field, submit is a solid black button
- Social: vertical list of rows, each `label` + arrow icon, hairline separated,
  whole row is a link. `GlassIcons` dropped.

### Footer

- Single hairline top border, three items on one row: copyright (mono),
  `RZA` mark, back-to-top link. No double border.

## Motion

- Durations 200-300ms for interaction, 300-450ms for reveals
- Easing `cubic-bezier(0.22, 1, 0.36, 1)` (expo-out feel)
- Global `@media (prefers-reduced-motion: reduce)` block: disable transforms,
  set transition duration to `0.01ms`, render reveal states at final opacity
- Only animate `transform` and `opacity`

## Accessibility

- Body and secondary text meet 4.5:1 against `#FAFAFA`
- `:focus-visible` outline: 2px accent, `outline-offset: 2px`, never removed
- All decorative icons get `aria-hidden="true"`
- Every image has a unique descriptive `alt`
- Nav uses `<nav aria-label="Utama">`, sections use `<section aria-labelledby>`
- Mobile nav toggle has `aria-expanded` and `aria-controls`
- Touch targets ≥ 44×44px

## Technical fixes

1. `PORTOFOLIO` → `PORTFOLIO` in navbar and heading; `Portofolio.jsx` renamed
2. `Home.jsx`: remove `useState(window.innerWidth < 960)` and its resize
   listener; use Tailwind breakpoints
3. `App.jsx`: keep the `ldrs` loading state but replace the black spinner with a
   mono `RZA` + hairline progress, and fix the `removeEventListener` leak
   (currently returns the result of `addEventListener`, not a cleanup function)
4. Drop `@material-tailwind/react` imports from `Navbar`, `Home`, `Portofolio`,
   `CardPorto`, `Contact` where they are only used for `Typography`/`Button`
5. Add `src/hooks/useActiveSection.js`
6. `index.html`: update font links, meta description, OG tags
7. `DESIGN.md` rewritten to describe this system

## Out of scope

- Dark mode (tokens are structured to allow it later)
- New project content or copy rewrites beyond spelling
- `FormContact.jsx` submission logic (visual restyle only)
- Deployment configuration

## Verification

```bash
npm run lint
npm run build
```

Then screenshot at 375, 768, 1024, 1440 and confirm: no horizontal scroll, nav
active state tracks scroll, skills groups render, portfolio cards clickable, form
labels visible, no console errors.
