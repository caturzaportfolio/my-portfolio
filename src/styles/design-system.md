# Monochrome Design System

A strict, high-contrast, minimalist design system utilizing only shades of black, gray, and white.

## 🎨 Grayscale Palette

| Name | CSS Variable | Hex Code | Tailwind Class | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Ink Black** | `--color-ink-black` | `#09090b` | `bg-ink-black`, `text-ink-black` | Core backgrounds, primary headings, rich dark text |
| **Charcoal** | `--color-charcoal` | `#27272a` | `bg-charcoal`, `text-charcoal` | Secondary elements, cards, borders, secondary text |
| **Slate Gray** | `--color-slate-gray` | `#71717a` | `bg-slate-gray`, `text-slate-gray` | Captions, disabled states, subtle borders, metadata |
| **Light Gray** | `--color-light-gray` | `#e4e4e7` | `bg-light-gray`, `text-light-gray` | Soft borders, subtle backgrounds, table headers |
| **Off-White** | `--color-off-white` | `#fafafa` | `bg-off-white`, `text-off-white` | Light backgrounds, zebra striping, soft cards |
| **Pure White** | `--color-pure-white` | `#ffffff` | `bg-pure-white`, `text-pure-white` | High-contrast overlays, text on dark backgrounds |

## ✍️ Typography Pairings

- **Display Headings**: `Outfit` (sans-serif)
  - Bold, structural, tight letter-spacing (`tracking-tight` or `tracking-tighter`).
  - Best for titles, main section headers, large stat callouts.
- **Body Text**: `Inter` (sans-serif)
  - Highly readable, crisp, balanced negative space.
  - Used for descriptions, labels, regular text, and paragraphs.
- **Data & Metadata**: `JetBrains Mono` (monospace)
  - Highly technical, aligned, ideal for numbers, keys, code blocks, and system labels.

## 📐 Spacing & Layout Conventions

- **Whitespace**: Generous vertical and horizontal padding to create breathing room and reinforce minimalism.
- **Section Padding**: Standard vertical spacing of `py-16 md:py-24` to establish a distinct rhythm.
- **Containers**: Centered layouts with `w-full max-w-5xl mx-auto px-6` to ensure optimal line-length and readable content boundaries.
- **Borders**: Hairline borders using `border border-light-gray` or `border border-charcoal/10` with zero or extremely subtle rounding (`rounded-md` or `rounded-none` for an architectural/brutalist look).
