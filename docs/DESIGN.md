# Design System

The site uses a **dark terminal / engineering-notebook** aesthetic: near-black surfaces, one electric accent color, monospace metadata labels, and numbered sections — like a well-organized project log rather than a generic template.

## Tokens (defined in `tailwind.config.js`)

| Token | Value | Use |
|---|---|---|
| `ink-950` | `#0A0C10` | page background |
| `ink-900` | `#11141B` | cards, nav |
| `ink-800` | `#1A1F29` | borders, dividers |
| `ink-700` | `#2A3140` | hover borders |
| `fog-100` | `#E8ECF3` | headings |
| `fog-300` | `#A9B4C6` | body text |
| `fog-500` | `#6B7689` | muted labels |
| `accent` | `#5EEAD4` | links, highlights, focus states (teal) |
| `accent-dim` | `#134E4A` | accent backgrounds at low emphasis |

Fonts: `font-sans` = Space Grotesk (headings/body), `font-mono` = JetBrains Mono (labels, tags, numbers). Loaded from Google Fonts in `public/index.html`.

## Rules

- **One accent color.** Teal is the only saturated color on the page. Everything else is the ink/fog neutral ramp.
- **Monospace = metadata.** Section numbers (`01.`), tech tags, dates, and terminal prompts use `font-mono text-sm`. Prose never does.
- **Numbered sections.** Every section heading is preceded by a mono accent number: `01. About`, `02. Experience`, etc. Keeps ordering consistent between nav and page.
- **Borders over shadows.** Cards are `bg-ink-900` with a 1px `ink-800` border that shifts to `accent/40` on hover. No drop shadows.
- **Motion is subtle.** Only `transition-colors` / small translate on hover, and a fade-up on section entry. Nothing loops.
- **No `!important`, no raw hex in JSX.** Extend the Tailwind theme instead.

## Signature elements

- Hero opens with a fake terminal prompt (`~ $ whoami`) and types out the name.
- A faint dot-grid background (`bg-grid` utility in `index.css`) sits behind the hero.
- Skills are grouped tag clusters (frontend / backend / tools), not percentage bars — percentages imply false precision.
