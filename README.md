# GMDSOFT Design System

[DESIGN.md](디자인시스템_공유용/v1.0/DESIGN.md) extracted from the internal GMDSOFT Design System v2.12 (Figma collection `01_GMD_Theme_v2.12`). This documents the design language for GMDSOFT's Windows desktop application products (MD-VIDEO, MD-SCANNER, MD-PLATFORM, etc.).

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | Complete design system documentation (9 sections) |
| `COLOR_TOKENS.md` | Full color token reference with token path + HEX (Light/Dark), CSS variables included |
| `color-chart.html` | Visual color token chart for Figma transfer (WinUI style, Light + Dark) |
| `preview.html` | Interactive design token catalog (Light mode) |
| `preview-dark.html` | Interactive design token catalog (Dark mode) |
| `TAB_DESIGN.md` | Tab component design system specification (Underline + Pills) |

Use [DESIGN.md](디자인시스템_공유용/v1.0/DESIGN.md) as a reference for AI agents (Claude, Cursor, Codex) to generate UI that follows the GMDSOFT design language.

## Google DESIGN.md Alpha Format

`DESIGN.md` includes Google `DESIGN.md` alpha front matter at the top:
- YAML front matter: machine-readable tokens for colors, typography, spacing, radius, and common components
- Markdown body: human-readable design rationale and detailed GMDSOFT usage rules

This makes the same file usable in three ways:
1. Stitch can import or reference the design rules as a project design-system source.
2. CLI coding agents can read the file before generating HTML prototypes.
3. The Google CLI can validate, diff, or export the structured tokens.

Recommended local commands:

```bash
env npm_config_cache=/tmp/design-md-npm-cache npx --yes @google/design.md lint DESIGN.md
env npm_config_cache=/tmp/design-md-npm-cache npx --yes @google/design.md diff DESIGN.md DESIGN-vNEXT.md
env npm_config_cache=/tmp/design-md-npm-cache npx --yes @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json
env npm_config_cache=/tmp/design-md-npm-cache npx --yes @google/design.md export --format dtcg DESIGN.md > tokens.json
```

Use the `/tmp` npm cache because the user-level npm cache may contain root-owned files on this machine.

## Key Characteristics

- **Platform**: Windows desktop application (1920x1080 FHD, min 1280x720)
- **App Shell**: Title Bar (32px) + Side Navigation (240px/56px) + Content Area
- **Seed Color**: `#4681DB` — generates the entire blue-gray palette
- **Spacing**: Strict 4px grid (no exceptions)
- **Typography**: 8 sizes only — 10, 12, 14, 16, 18, 20, 22, 28px
- **Font**: Inter (primary), Pretendard (fallback)
- **Weights**: Regular (400) and Bold (700) only
- **Dual Mode**: Light (default) + Dark (monitoring environments)

## Preview

### Light Mode

Open `preview.html` in a browser to see all design tokens visualized:
- Color palette (Seed, Primary, Gray, Semantic)
- Typography scale (h1–caption)
- Button variants (Primary, Seed, Outline, Ghost, Danger, Disabled)
- Data table with status badges
- Form elements with all states
- Side navigation component
- Modal dialog
- Spacing, radius, and elevation scales

### Dark Mode

Open `preview-dark.html` for the Dark mode variant with all dark tokens applied.

## Token Sources

| Token Type | Source |
|-----------|--------|
| Light Colors | `01_GMD_Theme_v2.12/Light.tokens.json` |
| Dark Colors | `01_GMD_Theme_v2.12/Dark.tokens.json` |
| Spacing | `00_GMD Foundations/light.tokens.json` |
| Typography | `desktop.tokens.json` |
