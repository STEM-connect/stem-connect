# Design

Visual system for Stem Connect. Register: **brand**. Strategy: **committed dark surface + acid-lime as a precise signal**. Elevates the existing dark/#d4ff00 identity into a sharp, high-signal, editorial system. All colors in OKLCH.

## Theme

Dark, near-black, faintly lime-tinted neutral ramp. One saturated accent (acid-lime) used as a scalpel — CTAs, key metrics, active states, single emphasis per view. No second hue; depth comes from the neutral ramp, type, and space. Not neon-drenched (avoids crypto), not blue-white (avoids job-board/SaaS), not muted-navy (avoids consultancy).

## Color

Neutral ramp (faint lime hue ~120–140 for cohesion):

| Token | OKLCH | Role |
|---|---|---|
| `--color-bg` | `oklch(0.15 0.006 145)` | Page background, near-black |
| `--color-surface` | `oklch(0.19 0.007 145)` | Cards, raised sections |
| `--color-surface-2` | `oklch(0.23 0.008 145)` | Elevated / hover surfaces |
| `--color-border` | `oklch(0.30 0.008 145)` | Hairlines, dividers |
| `--color-border-strong` | `oklch(0.44 0.010 145)` | Emphasized borders |
| `--color-ink` | `oklch(0.97 0.004 145)` | Primary text (near-white) |
| `--color-muted` | `oklch(0.74 0.012 145)` | Secondary text (≥4.5:1 on bg) |
| `--color-faint` | `oklch(0.60 0.010 145)` | Tertiary / large-text only |
| `--color-accent` | `oklch(0.94 0.24 118)` | Acid-lime signal (~#d4ff00) |
| `--color-accent-ink` | `oklch(0.20 0.03 145)` | Text on lime fills |
| `--color-accent-dim` | `oklch(0.82 0.17 118)` | Lime hover / large fills |

Contrast: ink & lime on bg exceed AA comfortably; muted holds ≥4.5:1 for body. Lime never carries meaning alone — always paired with text/weight/icon.

## Typography

Evolves away from the Space Grotesk + Inter default (flagged as the AI-generation pairing). New system:

- **Display / headings — `Archivo`** (Google): wide neo-grotesque with editorial authority. Weights 500–800, tracking −0.02 to −0.03em. Carries the brand voice.
- **Body — `Archivo`** at 400/500. One deliberate family with committed weight/size contrast; cohesive and sharp.
- **Signal / metadata — `JetBrains Mono`** (Google): used sparingly for micro-labels, stats, role metadata, and section markers where sequence is real. Delivers "high-signal / precision" without becoming dev costume — never body copy.

Scale is fluid (`clamp()`), display ceiling ≤ 5.25rem, `text-wrap: balance` on h1–h3, `pretty` on prose. Light-on-dark line-heights get +0.05.

## Motion

Purposeful, restrained, editorial. Framer Motion. Ease-out expo/quart curves (`--ease-out-expo`, `--ease-out-quart`), no bounce. A single orchestrated hero page-load; scroll reveals that enhance already-visible content (never gate visibility). Reduced-motion: crossfade/instant fallbacks throughout. Marquee for trusted-by/roles ticker. Lime glow used rarely and precisely.

## Layout

Fluid spacing with `clamp()`; vary rhythm (generous section separation, tight groupings). Asymmetry and typographic scale over card grids — cards only when the true affordance. Max content width ~1280px, narrow prose ~68ch. Breakpoint-free grids via `repeat(auto-fit, minmax(280px, 1fr))` where cards are right.

## Bans (project-specific, on top of shared)

No eyebrows-on-every-section, no `01/02/03` scaffolding unless a real sequence, no gradient text, no identical icon-card grids, no glassmorphism default, no stock handshake photography, no neon overload.
