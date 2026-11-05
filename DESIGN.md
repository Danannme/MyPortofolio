# Design System: Swiss Modernism — Portfolio RZA

**Project:** Robbi Zaidan Ahmad — Digital Portfolio
**Stack:** React 18 + Vite + Tailwind CSS 4 + Framer Motion
**Spec:** `docs/superpowers/specs/2026-11-05-swiss-modernism-redesign-design.md`

## 1. Visual Theme

Minimal, typographic, rational. Layout and type carry the page; ornament does
not. No paper textures, no watermark words, no crop marks, no double borders,
no drop caps. Every element sits on a 12-column grid with hairline rules.

## 2. Color Tokens

Defined in `src/index.css` under `@theme`.

| Token | Value | Role |
|---|---|---|
| `bg` | `#FAFAFA` | Page background |
| `fg` | `#09090B` | Primary text, solid button fill |
| `muted` | `#52525B` | Secondary text (7.4:1 on bg) |
| `hairline` | `#E4E4E7` | 1px rules, card borders, input underlines |
| `accent` | `#800000` | Active nav underline, links, focus ring, section markers (10.5:1 on bg) |
| `surface` | `#FFFFFF` | Cards, image mats |

The accent is never a button fill. Buttons are `fg` fill with white text and
turn accent on hover. Measured contrast: body 7.41:1, labels 10.49:1,
headings 19.06:1 — all pass WCAG AA and AAA for normal text.

## 3. Typography

| Role | Family | Weights | Notes |
|---|---|---|---|
| Display | Archivo | 400/500/600/700 | `letter-spacing: -0.04em`, `line-height: 1.05` |
| Body | Inter | 400/500/600 | `line-height: 1.6`, measure capped at `62ch` |
| Label | JetBrains Mono | 400/500 | `11px`, uppercase, `letter-spacing: 0.14em` |

Sizes are fluid:

- H1 `clamp(2.5rem, 6vw, 5.5rem)`
- Section H2 `clamp(1.75rem, 3.5vw, 2.75rem)`
- Lead `clamp(1rem, 1.4vw, 1.125rem)`
- Body `1rem` / `1.0625rem`

## 4. Layout

- `.shell` — `max-width: 1280px`, gutters `clamp(1.25rem, 4vw, 3rem)`
- `.grid-12` — 12 columns, `gap: 1.5rem`
- Section rhythm — `py-20 lg:py-28`
- Every section opens with a `.rule` top hairline and a mono index label
  (`01 / About`, `02 / Skills`, `03 / Portfolio`, `04 / Contact`)
- Sections: label in columns 1-3, content in columns 4-12 (or 6/6 for the
  portfolio header)

## 5. Components

- **Buttons** — solid `fg` rectangle, `min-height: 48px`, `px-6`, `text-sm`
  medium, no radius, hover fills accent. 200ms color transition.
- **Text links** — `.link-underline`, a 1px underline that scales from left in
  240ms.
- **Cards** — `surface` background, `hairline` border, no radius, no shadow.
  Hover: border darkens, image scales `1.03`, title turns accent.
- **Inputs** — bottom-border only, transparent background, focus turns the
  border accent. Labels always visible above the field.
- **Labels** — `.label` mono class for overlines, metadata, tech lists, and
  skill levels. Never used for body copy.

## 6. Motion (Framer Motion)

`src/Elements/Reveal.jsx` exports `Reveal`, `StaggerGroup`, `StaggerItem` —
all of which short-circuit to a plain `<div>` when `useReducedMotion()` is true.

- Interaction: 200–240ms
- Reveal: 280–450ms, `y` offset 10–16px, `ease: [0.22, 1, 0.36, 1]`
- Hero entrance: 600–700ms, staggered by 60ms
- Only `transform` and `opacity` are animated
- Global `@media (prefers-reduced-motion: reduce)` block zeroes transitions and
  disables smooth scroll

## 7. Accessibility Rules

- Body and muted text ≥ 4.5:1 on background
- `:focus-visible` = 2px accent outline, 2px offset, never removed
- Decorative icons carry `aria-hidden="true"`
- Every image has a unique descriptive `alt`
- Nav links use `aria-current="true"` for the active section
- Mobile menu button uses `aria-expanded` / `aria-controls`; Escape closes it
- Form errors are tied to inputs with `aria-describedby` and announced via
  `role="status"`
- Touch targets ≥ 44×44px

## 8. Anti-Patterns

Do not reintroduce: drop caps, decorative watermark words, double/crop-mark
frames, gradient or paper textures, box shadows on cards, maroon-filled CTAs,
pill-shaped tags, or ad-hoc `w-[95%]` containers.
