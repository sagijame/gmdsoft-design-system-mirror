# GMDSOFT Design System v2.12 — Claude Design Rules

This document defines the GMDSOFT Design System for Claude Design integration. All design generation must follow these rules.

Shared release version is recorded in `VERSION`. Figma source remains `GMD Design Kit v2.12`; the shared repository release uses `2.12.x`.

## Design System Structure

### Token Definitions

Design tokens are defined in the following files:

- **CSS Variables**: `tokens.css` — import and use `var(--gmd-*)` variables
- **Color Token Reference**: `COLOR_TOKENS.md` — full Light/Dark token path + HEX mapping
- **Design Specification**: `DESIGN.md` — YAML frontmatter + component specs
- **Visual Catalog**: `index.html` — canonical component catalog and visual review baseline
- **Release Version**: `VERSION` — shared repository release version

Token format: CSS Custom Properties with `--gmd-` prefix.
Light mode is `:root`, Dark mode switches via `[data-theme="dark"]`.

### Token Transformation

No build-time transformation. Tokens are used directly as CSS variables.
Dark mode auto-switches when `<html data-theme="dark">` is set.

---

## Color System

### Seed & Primary

| Role | Light | Dark | Token Path |
|------|-------|------|-----------|
| Seed | `#4681DB` | `#75A3E8` | `--gmd-seed` |
| Primary | `#135DB5` | `#4F94D4` | `--gmd-primary-base` |
| Primary Hover | `#3D82D9` | `#6EB4E0` | `--gmd-primary-hover` |
| Primary Pressed | `#0E4A94` | `#428AB5` | `--gmd-primary-pressed` |
| Primary Disabled | `#A8C4D9` | `#506B7D` | `--gmd-primary-disabled` |
| Primary Subtle | `#EBF2FA` | `#1E3242` | `--gmd-primary-subtle` |

### Secondary & Tertiary

| Role | Light | Dark | Token Path |
|------|-------|------|-----------|
| Secondary | `#E67700` | `#FFA94D` | `--gmd-secondary-base` |
| Tertiary | `#495057` | `#ADB5BD` | `--gmd-tertiary-base` |

### Semantic Colors

| Role | Base | Hover | Pressed | Background | CSS Variable |
|------|------|-------|---------|------------|-------------|
| Success | `#2E8544` | `#37A352` | `#256A37` | `#E8F5EC` | `--gmd-success-*` |
| Warning | `#D97706` | `#B45309` | `#92400E` | `#FFFBEB` | `--gmd-warning-*` |
| Error | `#D42A34` | `#E24950` | `#B0232B` | `#FCEBED` | `--gmd-error-*` |
| Info | `#0288D1` | `#039BE5` | `#0277BD` | `#E1F5FE` | `--gmd-info-*` |

### Text Colors

| Role | Light | Dark | CSS Variable |
|------|-------|------|-------------|
| Primary | `#212529` | `#E0E0E0` | `--gmd-text-primary` |
| Secondary | `#495057` | `#A0A6AC` | `--gmd-text-secondary` |
| Tertiary | `#868E96` | `#6C757D` | `--gmd-text-tertiary` |
| Disabled | `#ADB5BD` | `#6C757D` | `--gmd-text-disabled` |
| On Primary | `#FFFFFF` | `#FFFFFF` | `--gmd-text-on-primary` |

### Background Colors

| Role | Light | Dark | CSS Variable |
|------|-------|------|-------------|
| Base | `#FFFFFF` | `#141416` | `--gmd-bg-base` |
| Page | `#F8F9FA` | `#141416` | `--gmd-bg-page` |
| Section | `#E9ECEF` | `#1E1E21` | `--gmd-bg-section` |
| Card | `#FAF9FD` | `#252529` | `--gmd-bg-card` |
| Surface | `#FAF9FD` | `#1E1E21` | `--gmd-surface` |

### Border Colors

| Role | Light | Dark | CSS Variable |
|------|-------|------|-------------|
| Base | `#74777F` | `#2E3136` | `--gmd-border-base` |
| Subtle | `#C4C6D0` | `#3A3C42` | `--gmd-border-variant` |
| Divider | `#DFE0E4` | `#2A2C30` | `--gmd-border-divider` |
| Input Control | `#868E96` | `#A0A6AC` | `--gmd-border-control` |

### Button Colors

| Variant | Base | Hover | Pressed | CSS Variable |
|---------|------|-------|---------|-------------|
| Primary | `#135DB5` | `#3D82D9` | `#0E4A94` | `--gmd-btn-primary-*` |
| Seed | `#4681DB` | `#5B91E1` | `#3671CD` | `--gmd-btn-seed-*` |
| Disabled | `#A8C4D9` (L) / `#506B7D` (D) | — | — | `--gmd-btn-disabled` |

### Gray Scale

```
--gmd-gray-50:  #FFFFFF    --gmd-gray-500: #ADB5BD
--gmd-gray-100: #F8F9FA    --gmd-gray-600: #6C757D
--gmd-gray-200: #E9ECEF    --gmd-gray-700: #495057
--gmd-gray-300: #DEE2E6    --gmd-gray-800: #343A40
--gmd-gray-400: #CED4DA    --gmd-gray-900: #212529
```

### Primary Scale

```
--gmd-primary-50:  #EAF2FC    --gmd-primary-500: #135DB5
--gmd-primary-100: #D5E5F9    --gmd-primary-600: #104E99
--gmd-primary-200: #ACCDF2    --gmd-primary-700: #0C3E7D
--gmd-primary-300: #82B5EB    --gmd-primary-800: #092F61
--gmd-primary-400: #4A8CD0    --gmd-primary-900: #051F45
```

---

## Typography

### Font Family

```css
font-family: 'Inter', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
```

### Type Scale (8 sizes ONLY)

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| h1 | 28px | 700 | 42px | Page title, one per screen |
| h2 | 22px | 700 | 30px | Section headings |
| h3 | 20px | 700 | 28px | Card titles, subsections |
| h4 | 18px | 700 | 26px | Dialog titles, minor headings |
| bodyLg | 16px | 400 | 22px | Lead paragraphs |
| bodyMd | 14px | 400 | 20px | **Default** — table cells, labels, descriptions |
| bodySm | 12px | 400 | 17px | Metadata, timestamps |
| caption | 10px | 400 | 14px | Captions, legal text |

### Hard Rules

- **Only 8 sizes**: 10, 12, 14, 16, 18, 20, 22, 28px. NO 13px, 15px, 24px, 36px.
- **Only 2 weights**: 400 (Regular), 700 (Bold). NO light, medium, semibold.
- **letter-spacing**: NEVER positive. 0 or negative only.
- **14px is the default** for all standard body text.

---

## Spacing System

Base unit: **4px**. Every margin, padding, gap MUST be a 4px multiple.

| Token | Value | Use |
|-------|-------|-----|
| `--gmd-space-0` | 0px | No gap |
| `--gmd-space-1` | 4px | Icon-text gap |
| `--gmd-space-2` | 8px | Label-input gap |
| `--gmd-space-3` | 12px | Tight group gap |
| `--gmd-space-4` | 16px | Component padding, list gap |
| `--gmd-space-5` | 20px | Form field gap |
| `--gmd-space-6` | 24px | Section gap, modal padding |
| `--gmd-space-8` | 32px | Card default padding |
| `--gmd-space-10` | 40px | Large divider |
| `--gmd-space-12` | 48px | Major section gap |
| `--gmd-space-16` | 64px | Page margin |

Forbidden values: 5px, 7px, 10px, 13px, 15px — not 4px multiples.

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--gmd-radius-none` | 0px | Table cells, title bar |
| `--gmd-radius-sm` | 4px | Buttons, inputs, badges, tooltips |
| `--gmd-radius-md` | 8px | Cards, panels, dropdowns |
| `--gmd-radius-lg` | 12px | Modals, dialogs |
| `--gmd-radius-full` | 9999px | Pills, circular avatars |

---

## Elevation / Shadows

| Level | CSS | Use |
|-------|-----|-----|
| Flat (0) | none, border only | Tables, cards, list items |
| Subtle (1) | `--gmd-shadow-sm`: `0 1px 3px rgba(0,0,0,0.06)` | Dropdowns, popovers |
| Card (2) | `--gmd-shadow-md`: `0 2px 8px rgba(0,0,0,0.08)` | Elevated cards |
| Modal (3) | `--gmd-shadow-lg`: `0 8px 32px rgba(0,0,0,0.16)` | Modals, dialogs |

Dark mode: shadows darken (0.2/0.24/0.4 opacity). Depth communicated via surface stepping.

---

## Component Library

### Buttons

```css
/* Primary Button */
background: var(--gmd-btn-primary-base);   /* #135DB5 */
color: var(--gmd-text-on-primary);         /* #FFFFFF */
font: 400 14px/20px var(--gmd-font-family);
padding: 8px 16px;
border-radius: var(--gmd-radius-sm);       /* 4px */
border: none;
/* Hover: --gmd-btn-primary-hover #3D82D9 */
/* Pressed: --gmd-btn-primary-pressed #0E4A94 */
/* Disabled: --gmd-btn-disabled #A8C4D9, text 60% opacity */

/* Secondary (Outline) Button */
background: transparent;
color: var(--gmd-primary-base);            /* #135DB5 */
border: 1px solid var(--gmd-primary-base);
/* Hover bg: --gmd-primary-subtle #EBF2FA */

/* Tertiary (Ghost) Button */
background: transparent;
color: var(--gmd-tertiary-base);           /* #495057 */
border: none;
/* Hover bg: --gmd-gray-100 #F8F9FA */

/* Danger Button */
background: var(--gmd-error-base);         /* #D42A34 */
color: #FFFFFF;
```

Sizes: Small (4px 12px), Medium (8px 16px), Large (12px 24px)

### Input Fields

```css
/* Default Input */
background: var(--gmd-bg-base);            /* #FFFFFF */
border: 1px solid var(--gmd-border-variant); /* #C4C6D0 */
border-radius: var(--gmd-radius-sm);       /* 4px */
padding: 4px 12px;
font: 400 14px/20px var(--gmd-font-family);
color: var(--gmd-text-primary);            /* #212529 */
/* Placeholder: --gmd-text-tertiary #868E96 */
/* Focus: 2px solid --gmd-primary-base #135DB5, no box-shadow */
/* Disabled: bg --gmd-bg-section #E9ECEF, text --gmd-text-disabled */
```

Sizes: Small (12px text, 26px h), Medium (14px, 30px h), Large (16px, 45px h)

### Cards

```css
background: var(--gmd-bg-card);            /* #FAF9FD */
border: 1px solid var(--gmd-border-divider); /* #DFE0E4 */
border-radius: var(--gmd-radius-md);       /* 8px */
padding: 24px;                             /* compact: 16px */
gap: 16px;                                 /* internal blocks */
```

### Tables

```css
/* Header */
background: var(--gmd-gray-100);           /* #F8F9FA */
color: var(--gmd-text-primary);            /* #212529 */
font-weight: 700;
font-size: 14px;
padding: 12px 16px;

/* Body row */
min-height: 44px;
padding: 12px 16px;
border-bottom: 1px solid var(--gmd-border-divider); /* #DFE0E4 */

/* Hover row: bg --gmd-primary-subtle #EBF2FA */
/* Selected row: bg --gmd-primary-100 #D5E5F9, left 3px solid --gmd-primary-base */
```

### Modal / Dialog

```css
/* Scrim */
background: var(--gmd-overlay-scrim);      /* rgba(0,0,0,0.5) */

/* Container */
background: var(--gmd-bg-base);            /* #FFFFFF */
border-radius: var(--gmd-radius-lg);       /* 12px */
box-shadow: var(--gmd-shadow-lg);          /* 0 8px 32px rgba(0,0,0,0.16) */
padding: 24px;
max-width: 560px;                          /* wide: 720px, compact: 400px */

/* Header: 18px bold, border-bottom 1px solid --gmd-border-divider */
/* Actions: right-aligned, 8px button gap, 24px from bottom */
```

### Side Navigation

```css
width: 240px;            /* collapsed: 56px */
background: var(--gmd-bg-base);            /* #FFFFFF */

/* Menu item */
height: 40px;
padding: 8px 12px;
font: 400 14px var(--gmd-font-family);
color: var(--gmd-text-secondary);          /* #495057 */
/* Icon: 24px, 8px gap to text */

/* Active item */
background: var(--gmd-primary-subtle);     /* #EBF2FA */
color: var(--gmd-primary-base);            /* #135DB5 */
border-left: 3px solid var(--gmd-primary-base);

/* Hover: bg --gmd-gray-100 #F8F9FA */
```

### Status Badges

```css
padding: 2px 8px;
border-radius: var(--gmd-radius-sm);       /* 4px */
font-size: 12px;
font-weight: 600;
/* Success: bg #E8F5EC, text #2E8544 */
/* Warning: bg #FFFBEB, text #D97706 */
/* Error:   bg #FCEBED, text #D42A34 */
/* Info:    bg #E1F5FE, text #0288D1 */
/* Neutral: bg #F8F9FA, text #495057 */
```

### Tooltips

```css
background: var(--gmd-gray-900);           /* #212529 */
color: #FFFFFF;
font-size: 12px;
padding: 4px 8px;
border-radius: var(--gmd-radius-sm);       /* 4px */
max-width: 240px;
```

---

## App Shell Structure

```
+-----------------------------------------------------+
|  Windows Title Bar (H: 32px)              _ [] X     |
+----------+------------------------------------------+
|  Side    |  Content Area                            |
|  Nav     |  (padding: 24~32px)                      |
|  W: 240  |  W: Fill (min 1040px)                    |
| (expand) |                                          |
|  W: 56   |                                          |
| (collapse)|                                         |
+----------+------------------------------------------+
```

- Title Bar: 32px height, bg matches theme, close button hover `#E81123`
- Side Nav: 240px expanded / 56px collapsed
- Content Area: fluid, min 1040px, padding 24-32px

---

## Icon System

- Style: Monoline outline SVG
- Sizes: 16px, 24px, 32px
- Default stroke: `#495057` (`--gmd-tertiary-base`)
- Active stroke: `#4681DB` (`--gmd-seed`) or `#135DB5` (`--gmd-primary-base`)
- No emojis allowed in UI — always use SVG icons with text labels

---

## Resolution Targets

| Name | Resolution | Content Width |
|------|-----------|---------------|
| Minimum | 1280x720 | 1040px (nav expanded) |
| Standard (FHD) | 1920x1080 | 1680px (nav expanded) |
| High DPI | 2560x1440+ | 2320px+ |

No responsive breakpoints. Layout adapts via:
- Nav toggle (240px / 56px)
- Table horizontal scroll
- Dashboard grid column reduction (4 → 3 → 2)

---

## Absolute Do's and Don'ts

### DO
- Specify colors as `token-path #HEX` pair
- Use only 8 font sizes (10/12/14/16/18/20/22/28px)
- Apply 4px spacing grid without exception
- Define all 4 states (base/hover/pressed/disabled) for interactive elements
- Pair status colors with text labels
- Pair icons with text labels
- Maintain WCAG AA contrast (4.5:1)
- Use `--gmd-border-divider` for separators

### DON'T
- Invent colors outside the token system
- Use font sizes outside the 8 permitted values
- Use font weights other than 400 and 700
- Use positive letter-spacing
- Add shadows to flat elements (use borders instead)
- Use gradients
- Use emojis in UI
- Use color-only status indicators
- Create non-4px spacing values
- Center-align body text (left-align, except dialog titles)
- Make table header text lighter than `#212529`

---

## Project Structure

```
gmdsoft-design-system/
├── CLAUDE.md               ← This file (Claude Design rules)
├── DESIGN.md               ← Full design spec with YAML frontmatter
├── COLOR_TOKENS.md          ← Light/Dark token path + HEX reference
├── OPERATING_MODEL.md       ← Version management rules
├── VERSION                  ← Shared repository release version
├── index.html               ← Primary component catalog and visual review entry
├── design-system-rules.md   ← Structured rules with YAML tokens
└── tokens.css               ← (in parent) CSS custom properties
```

## Styling Approach

- **CSS Custom Properties** (`var(--gmd-*)`) as the single token layer
- No CSS-in-JS, no Tailwind, no preprocessors in the design system itself
- Consumers import `tokens.css` and reference variables
- Dark mode via `[data-theme="dark"]` selector override
- No responsive breakpoints — fixed shell + fluid content
