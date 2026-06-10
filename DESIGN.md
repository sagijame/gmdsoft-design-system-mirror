---
version: alpha
name: GMDSOFT Design System v2.12
description: Industrial-grade Windows desktop application design language for GMDSOFT products.
colors:
  seed: "#4681DB"
  primary: "#135DB5"
  primaryHover: "#3D82D9"
  primaryPressed: "#0E4A94"
  primaryDisabled: "#A8C4D9"
  primarySubtle: "#EBF2FA"
  secondary: "#E67700"
  tertiary: "#495057"
  success: "#2E8544"
  warning: "#D97706"
  error: "#D42A34"
  info: "#0288D1"
  backgroundBase: "#F8F9FA"
  backgroundSection: "#E9ECEF"
  backgroundCard: "#FAF9FD"
  surfaceBase: "#FFFFFF"
  surfaceHover: "#F5F4F8"
  textPrimary: "#212529"
  textSecondary: "#495057"
  textTertiary: "#868E96"
  textDisabled: "#ADB5BD"
  onPrimary: "#FFFFFF"
  borderBase: "#74777F"
  borderSubtle: "#C4C6D0"
  divider: "#DFE0E4"
  overlayScrim: "#000000"
typography:
  h1:
    fontFamily: Inter, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif
    fontSize: 28px
    fontWeight: 700
    lineHeight: 42px
    letterSpacing: 0px
  h2:
    fontFamily: Inter, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif
    fontSize: 22px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: 0px
  h3:
    fontFamily: Inter, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 0px
  h4:
    fontFamily: Inter, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif
    fontSize: 18px
    fontWeight: 700
    lineHeight: 26px
    letterSpacing: 0px
  bodyLg:
    fontFamily: Inter, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  bodyMd:
    fontFamily: Inter, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  bodySm:
    fontFamily: Inter, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 17px
    letterSpacing: 0px
  caption:
    fontFamily: Inter, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif
    fontSize: 10px
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  space0: 0px
  space2: 2px
  space4: 4px
  space8: 8px
  space12: 12px
  space16: 16px
  space20: 20px
  space24: 24px
  space32: 32px
  space40: 40px
  space48: 48px
  space56: 56px
  space64: 64px
  space80: 80px
  space96: 96px
components:
  buttonPrimary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.onPrimary}"
    typography: "{typography.bodyMd}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  buttonSecondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  inputDefault:
    backgroundColor: "{colors.surfaceBase}"
    textColor: "{colors.textPrimary}"
    typography: "{typography.bodyMd}"
    rounded: "{rounded.sm}"
    padding: "4px 12px"
  cardDefault:
    backgroundColor: "{colors.backgroundCard}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.md}"
    padding: "{spacing.space24}"
  tableHeader:
    backgroundColor: "{colors.backgroundBase}"
    textColor: "{colors.textPrimary}"
    typography: "{typography.bodyMd}"
    padding: "12px 16px"
  modalDefault:
    backgroundColor: "{colors.surfaceBase}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.space24}"
---

# Design System Inspiration of GMDSOFT

## 1. Visual Theme & Atmosphere

GMDSOFT builds industrial-grade Windows desktop applications for video production, security, and device management. The design philosophy is precision engineering for professionals — every interface element exists to maximize operator productivity in high-stakes environments. The visual language draws from broadcast control rooms and industrial monitoring systems: clean, information-dense, and utterly functional.

The atmosphere is controlled and utilitarian. Where consumer apps pursue delight, GMDSOFT pursues clarity. The UI retreats behind the content — video feeds, device lists, scan results — while providing just enough chrome to organize dense information hierarchies. This is software designed for 8-hour shifts, where eye fatigue is the enemy and every pixel of wasted space costs productivity.

The color system is built on a blue-gray foundation. The seed color `#4681DB` anchors the entire token system, generating a harmonious palette through systematic lightness and saturation curves. Primary Blue (`#135DB5`) signals interactive elements and system focus, while the gray scale (50–900) provides the scaffolding for backgrounds, borders, and text hierarchy. Semantic colors — success green, warning amber, error red, info blue — follow industrial convention with zero ambiguity.

Typography is engineered for density. Inter serves as the primary UI font with Pretendard as fallback, optimized for small sizes on Windows displays. The type scale is deliberately compressed — eight sizes only (10/12/14/16/18/20/22/28px) — because in data-heavy interfaces, typographic discipline prevents visual noise. Body text lives at 14px, comfortable for extended reading on desktop monitors at arm's length.

**Key Characteristics:**
- Seed-generated blue palette (`#4681DB`) creating systematic, harmonious color tokens across Light and Dark modes
- Windows desktop-native shell: 32px Title Bar + 240px/56px collapsible Side Navigation + fluid Content Area
- 4px grid spacing system with 15 defined stops (0–96px) — no improvisation allowed
- Industrial information density: tables, lists, and dashboards prioritized over hero imagery
- State-driven design: every interactive element defines base/hover/pressed/disabled through token pairs
- Dual-mode support: Light mode as default workspace, Dark mode for low-light monitoring environments
- Enterprise icon system: monoline outline SVGs at 16/24/32px with `#495057` stroke and `#4681DB` accent
- Figma-production-ready output: Frame hierarchy (no Groups), Auto Layout specs, token path + HEX notation

## 2. Color Palette & Roles

### Seed & Primary

- **Seed Blue** (`#4681DB` Light / `#75A3E8` Dark): The generative origin of the entire color system. Used for seed-level buttons and brand-carrying UI elements.
- **Primary Blue** (`#135DB5` Light / `#4F94D4` Dark): `Foundation/primary/base`. The system's interactive anchor — primary buttons, active states, selected items, focus indicators.
- **Primary Hover** (`#3D82D9` Light / `#6EB4E0` Dark): `Foundation/primary/hover`. Brightened variant for pointer hover feedback.
- **Primary Pressed** (`#0E4A94` Light / `#428AB5` Dark): `Foundation/primary/pressed`. Deepened variant for click/press feedback.
- **Primary Disabled** (`#A8C4D9` Light / `#506B7D` Dark): `Foundation/primary/disabled`. Desaturated variant signaling non-interactive state.
- **Primary Subtle** (`#EBF2FA` Light / `#1E3242` Dark): `Foundation/primary/subtle`. Tinted background for selected rows, active tabs, hover surfaces.

### Secondary & Tertiary

- **Secondary Orange** (`#E67700` Light / `#FFA94D` Dark): `Foundation/secondary/base`. Accent for alerts, non-critical highlights, and secondary actions.
- **Tertiary Gray** (`#495057` Light / `#ADB5BD` Dark): `Foundation/tertiary/base`. Subdued elements, tertiary buttons, metadata.

### Gray Scale

| Step | Light | Dark | Role |
|------|-------|------|------|
| 50 | `#FFFFFF` | `#141517` | Lightest surface / Darkest base |
| 100 | `#F8F9FA` | `#1A1D20` | Page background, base surface |
| 200 | `#E9ECEF` | `#212529` | Section background, dividers |
| 300 | `#DEE2E6` | `#343A40` | Subtle borders, disabled fills |
| 400 | `#CED4DA` | `#495057` | Placeholder text, muted borders |
| 500 | `#ADB5BD` | `#6C757D` | Disabled text, inactive icons |
| 600 | `#6C757D` | `#CED4DA` | Secondary text, captions |
| 700 | `#495057` | `#DEE2E6` | Tertiary headings, icon stroke |
| 800 | `#343A40` | `#E9ECEF` | Emphasized secondary text |
| 900 | `#212529` | `#F8F9FA` | Primary text, headings |

### Primary Scale

| Step | Light | Dark | Role |
|------|-------|------|------|
| 50 | `#EAF2FC` | `#E8F3FB` | Lightest tint, selected row bg |
| 100 | `#D5E5F9` | `#D1E7F7` | Hover background on primary surfaces |
| 200 | `#ACCDF2` | `#B0D6F1` | Progress bar track |
| 300 | `#82B5EB` | `#8EC4EB` | Secondary interactive |
| 400 | `#4A8CD0` | `#75B6E2` | Active tab indicator |
| 500 | `#135DB5` | `#62A8D9` | Primary interactive (= Foundation/primary/base) |
| 600 | `#104E99` | `#4E8BB5` | Dark variant of primary |
| 700 | `#0C3E7D` | `#396D92` | Emphasis on dark surfaces |
| 800 | `#092F61` | `#255070` | Deep primary |
| 900 | `#051F45` | `#14324D` | Darkest primary tone |

### Semantic Colors

- **Success** (`#2E8544` Light / `#43A85E` Dark): `Semantic/success/base`. Completed operations, valid states, positive indicators.
- **Warning** (`#D97706` Light / `#FBBF24` Dark): `Semantic/warning/base`. Caution alerts, pending actions, threshold warnings.
- **Error** (`#D42A34` Light / `#E85A63` Dark): `Semantic/error/base`. Failed operations, validation errors, critical alerts.
- **Info** (`#0288D1` Light / `#29B6F6` Dark): `Semantic/info/base`. Informational notices, system messages, tooltips.

Each semantic color provides `base`, `hover`, `pressed`, and `background` variants for consistent state expression.

### Text Colors

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `Text/default/primary` | `#212529` | `#E0E0E0` | Primary body text, headings |
| `Text/default/secondary` | `#495057` | `#A0A6AC` | Descriptions, metadata, captions |
| `Text/default/tertiary` | `#868E96` | `#6C757D` | Hints, placeholders, timestamps |
| `Text/default/disabled` | `#ADB5BD` | `#6C757D` | Disabled labels, inactive text |
| `Text/on-primary/base` | `#FFFFFF` | `#FFFFFF` | Text on primary-colored backgrounds |
| `Text/on-color/on-success` | `#FFFFFF` | `#FFFFFF` | Text on success backgrounds |
| `Text/on-color/on-warning` | `#212529` | `#212529` | Text on warning backgrounds (dark text for contrast) |
| `Text/on-color/on-error` | `#FFFFFF` | `#FFFFFF` | Text on error backgrounds |

### Background Colors

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `bg/base` | `#F8F9FA` | `#141416` | Page background |
| `bg/section` | `#E9ECEF` | `#1E1E21` | Section/panel background |
| `bg/card` | `#FAF9FD` | `#252529` | Card surfaces |
| `bg/slot-active` | `#FFFFFF` | `#1E1E21` | Active slot/tab content |
| `background_reference/base` | `#FFFFFF` | `#141416` | Pure base reference |
| `surface/primary` | `#FAF9FD` | `#1E1E21` | Elevated surface |
| `surface/hover` | `#F5F4F8` | `#252529` | Surface hover state |
| `overlay/hover` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.06)` | Transparent-control hover overlay |
| `overlay/pressed` | `rgba(19,93,181,0.12)` | `rgba(79,148,212,0.12)` | Transparent-control pressed overlay |
| `overlay/scrim` | `#00000080` | `#000000CC` | Modal backdrop |

### Border Colors

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `border/base` | `#74777F` | `#2E3136` | Standard borders |
| `border-variant/base` | `#C4C6D0` | `#3A3C42` | Subtle borders |
| `border-variant/divider` | `#DFE0E4` | `#2A2C30` | List dividers, section separators |
| `border-variant/border-control` | `#868E96` | `#A0A6AC` | Input field borders |

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, with fallbacks: `Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`
- **Secondary**: `Pretendard`, same fallback chain
- **English Override**: `Arial` for explicit English text blocks
- Inter is chosen for its optical clarity at small sizes on Windows displays, where subpixel rendering can soften other typefaces.

### Hierarchy

| Role | Size | Line Height | Weight | Token | Use |
|------|------|-------------|--------|-------|-----|
| Page Title (h1) | 28px | 42px (1.50) | Bold (700) | `typography/size/h1` | Page-level headings, one per screen |
| Section Title (h2) | 22px | 30px (1.36) | Bold (700) | `typography/size/h2` | Major section headings |
| Subsection Title (h3) | 20px | 28px (1.40) | Bold (700) | `typography/size/h3` | Card titles, subsections |
| Subtitle (h4) | 18px | 26px (1.44) | Bold (700) | `typography/size/h4` | Minor headings, dialog titles |
| Large Body | 16px | 22px (1.38) | Regular (400) | `typography/size/lg-body` | Emphasized body text, lead paragraphs |
| Body (default) | 14px | 20px (1.43) | Regular (400) | `typography/size/md-body` | Standard reading text, table cells, descriptions |
| Small Body | 12px | 17px (1.42) | Regular (400) | `typography/size/sm-body` | Secondary info, metadata, timestamps |
| Caption | 10px | 14px (1.40) | Regular (400) | `typography/size/caption` | Captions, labels, legal text |

### Line Height Tokens

| Token | Value | Use |
|-------|-------|-----|
| `font/line-height/tight` | 20px | Dense layouts: table cells, compact lists |
| `font/line-height/normal` | 24px | Standard body text |
| `font/line-height/relaxed` | 32px | Spacious layouts: hero text, card descriptions |

### Principles
- **Eight sizes only**: 10, 12, 14, 16, 18, 20, 22, 28px. No intermediate values (13px, 15px, 24px are forbidden). This constraint prevents visual noise in data-heavy screens.
- **14px as the workhorse**: The majority of interface text — table cells, form labels, descriptions, navigation items — lives at 14px. This is the size optimized for Windows desktop viewing distance (~60cm).
- **Weight restraint**: Only Regular (400) and Bold (700) are used. No light, medium, or semibold weights. This binary weight system creates clear emphasis without subtlety that gets lost on Windows ClearType rendering.
- **Line height consistency**: Line heights are set as absolute pixel values (not ratios) to ensure precise vertical rhythm in the 4px grid system.
- **Letter-spacing 금지**: `letter-spacing`을 양수(0px 초과)로 설정하지 않는다. 기본값(0) 또는 음수(타이트닝)만 허용한다. uppercase 라벨, 캡션 등 어떤 상황에서도 자간을 벌리지 않는다.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#135DB5` (`button/primary/base`)
- Text: `#FFFFFF` (`Text/on-primary/base`)
- Padding: 8px 16px (Medium), 4px 12px (Small), 12px 24px (Large)
- Radius: 4px
- Border: none
- Font: Inter, 14px, weight 400
- Hover: `#3D82D9` (`button/primary/hover`)
- Pressed: `#0E4A94` (`button/primary/pressed`)
- Disabled: `#A8C4D9` (`button/primary/disabled`), text opacity 60%
- Use: Main action buttons ("Save", "Apply", "Connect")

**Seed**
- Background: `#4681DB` (`button/seed/base`)
- Text: `#FFFFFF`
- Same sizing and radius as Primary
- Hover: `#5B91E1` (`button/seed/hover`)
- Pressed: `#3671CD` (`button/seed/pressed`)
- Disabled: `#A8C4D9` (`button/seed/disabled`)
- Use: Brand-level CTAs, key feature actions

**Secondary (Outline)**
- Background: transparent
- Text: `#135DB5` (`Foundation/primary/base`)
- Border: 1px solid `#135DB5`
- Radius: 4px
- Hover: background `rgba(0,0,0,0.06)` Light / `rgba(255,255,255,0.06)` Dark (`overlay/hover`)
- Pressed: background `rgba(19,93,181,0.12)` Light / `rgba(79,148,212,0.12)` Dark (`overlay/pressed`)
- Disabled: border and text `#A8C4D9`
- Use: Secondary actions ("Cancel", "Reset", "Export")

**Tertiary (Ghost)**
- Background: transparent
- Text: `#495057` (`Foundation/tertiary/base`)
- Border: none
- Hover: background `rgba(0,0,0,0.06)` Light / `rgba(255,255,255,0.06)` Dark (`overlay/hover`)
- Pressed: background `rgba(19,93,181,0.12)` Light / `rgba(79,148,212,0.12)` Dark (`overlay/pressed`)
- Disabled: text `#ADB5BD`
- Use: Tertiary actions, toolbar buttons, icon-only buttons

**Danger**
- Background: `#D42A34` (`Semantic/error/base`)
- Text: `#FFFFFF`
- Hover: `#E24950` (`Semantic/error/hover`)
- Pressed: `#B0232B` (`Semantic/error/pressed`)
- Use: Destructive actions ("Delete", "Remove", "Disconnect")

### Input Fields

Figma reference: `MD-UX > Input Family Complete Documentation > node 489:5`

#### Basic Input

| Item | Spec |
|------|------|
| Background | `#FFFFFF` (`background-colors/bg/slot-active`) |
| Border | `1px solid #C4C6D0` (`border-colors/border-variant/base`) |
| Radius | 4px |
| Horizontal padding | 12px |
| Large vertical padding | top 6px / bottom 5px |
| Placeholder | `#868E96` (`Text/default/tertiary`) |
| Filled text | `#495057` (`Text/default/secondary`) |

#### Basic States

| State | Rule |
|------|------|
| Default | White background + 1px neutral border + tertiary placeholder |
| Hover | Border는 유지하고 white surface 위에 `rgba(0,0,0,0.06)` overlay를 얹는다 |
| Focused / Active | Box-shadow 없이 `2px solid #135DB5` (`Foundation/primary/base`) border로 강조 |
| Filled-not-focused | Default border 유지, 텍스트만 `Text/default/secondary`로 전환 |
| Disabled | Background `#E9ECEF`, border `#C4C6D0`, text `#ADB5BD` |

#### Basic Variants

- Label은 optional이며 문서상 `Label On`과 `Label Off`를 분리해 관리한다.
- `Label On`은 총 높이 55px 기준이며, 상단 13px floating label을 사용한다.
- Floating label은 `#135DB5` 텍스트, 좌측 9px 오프셋, 좌우 2px white chip 배경을 사용한다.
- `Label On`의 field는 기본적으로 focused/active와 같은 2px primary border를 사용한다.
- `Borderless`는 완전 무테가 아니라 `surface/primary` (`#FAF9FD` Light) 배경을 쓰는 톤 변형이다.
- `Filled-not-focused`는 별도 컴포넌트가 아니라 기본 input에 값이 채워진 상태로 해석한다.

#### Basic Sizes

| Size | Text | Padding | Example Height |
|------|------|---------|----------------|
| Small | 12px | 12px horizontal, 4px vertical | 26px |
| Medium | 14px | 12px horizontal, 4px vertical | 30px |
| Large | 16px | 12px horizontal, top 6px / bottom 5px | 45px |

#### Input with Icon

- Leading icon input은 Large basic input의 파생형이다.
- 좌측에 24px icon을 두고, icon과 text 사이 간격은 12px이다.
- 우측 affordance는 16px info/help icon으로 처리하며 text 영역은 `justify-between` 구조를 유지한다.
- Background, border, placeholder, focused 규칙은 basic input과 동일하다.

#### Input Dropdown / Search Field

- 검색형 dropdown input은 14px text 기반의 compact field이다.
- 내부 구조는 14px leading search icon + 8px gap + placeholder text이다.
- Padding은 14px vertical / 16px horizontal이다.
- Background는 `#FFFFFF`, border는 `1px solid #C4C6D0`, radius는 4px이다.
- 상호작용 성격은 버튼형 control에 가깝지만 시각 규칙은 input family를 따른다.

#### Semantic Extension

- Error, Success, Loading은 basic 구조 위에 semantic color를 얹는 방식으로 확장한다.
- Helper text, counter, textarea는 동일한 border/state 원칙을 공유하고 문맥에 따라 하위 패밀리로 분기한다.

#### Textarea

| Item | Spec |
|------|------|
| Background | `bg/base` (`#F8F9FA`) |
| Border | 0.6px neutral border |
| Radius | 4px |
| Padding | 12px |
| Default height | 100px |
| Default size | md, 14px text |
| Placeholder | `#ADB5BD` |
| Helper text | 12px `#868E96` |

- Label이 있을 때는 `12px bold label + field + helper text`를 8px 간격으로 적층한다.
- `Label Off`는 동일 구조에서 label layer만 제거한다.
- `Outlined`는 neutral outline을 유지하고, `Borderless`는 더 경량한 표면형 변형으로 분기한다.

#### Textarea Semantic States

| State | Rule |
|------|------|
| Success | 좌측 4px accent + 나머지 0.6px border를 `#2E8544`로 적용, helper text도 success color 사용 |
| Error | 좌측 4px accent + 나머지 0.6px border를 `#D42A34`로 적용, helper text는 10px error color |
| Loading | `#135DB5` accent border 사용, helper line 앞에 12px spinner 배치 |

- Semantic 상태에서도 field 내부 본문 text는 `Text/default/primary`를 유지한다.
- 의미 전달은 border accent와 helper line에서 우선 담당한다.

#### Textarea Sizes

| Size | Example Width | Note |
|------|---------------|------|
| `sm` | 200px | 더 조밀한 본문 영역과 보조 텍스트 |
| `md` | 250px | 문서의 기본 textarea 크기 |
| `lg` | 280px | 더 넓은 입력 영역, 동일한 4px radius 유지 |

- Single-line input size와 textarea size는 독립적으로 관리한다.
- Typography step은 동일하게 `12 / 14 / 16` 체계를 공유한다.

### Cards

- Background: `#FAF9FD` (`bg/card`) Light / `#252529` Dark
- Border: 1px solid `#DFE0E4` (`border-variant/divider`)
- Radius: 8px
- Padding: 24px (default), 16px (compact)
- Shadow: none by default; `0 2px 8px rgba(0,0,0,0.08)` for elevated cards
- Internal gap: 16px between content blocks
- Card-to-card gap: 16px

### Tables

- Header row: background `#F8F9FA` (`gray/100`), text `#212529` weight 700, 14px
- Body row: background `#FFFFFF`, text `#212529` weight 400, 14px
- Alternating row: background `#FAFAFA`
- Row height: 44px minimum (for touch-friendly click targets)
- Cell padding: 12px 16px
- Border: bottom `1px solid #DFE0E4` (`border-variant/divider`)
- Hover row: background `#EBF2FA` (`Foundation/primary/subtle`)
- Selected row: background `#D5E5F9` (`primary/100`), left border 3px solid `#135DB5`
- Header text must maintain minimum contrast of WCAG AA (4.5:1). Never use light gray header text.

### Modal / Dialog

- Scrim: `#00000080` (`overlay/scrim`)
- Container: background `#FFFFFF`, radius 12px, shadow `0 8px 32px rgba(0,0,0,0.16)`
- Padding: 24px
- Header: 18px Bold, `#212529`, bottom border `1px solid #DFE0E4`
- Header-to-content gap: 16px
- Content-to-actions gap: 24px
- Actions: right-aligned, button gap 8px
- Max width: 560px (standard), 720px (wide), 400px (compact)

### Side Navigation

- Width: 240px expanded / 56px collapsed (icon-only)
- Background: `#FFFFFF` Light / `#141416` Dark
- Menu item height: 40px
- Menu item padding: 8px 12px
- Active item: background `#EBF2FA`, text `#135DB5`, left border 3px solid `#135DB5`
- Hover: background `#F8F9FA`
- Icon size: 24px, color `#495057` (default) / `#135DB5` (active)
- Section divider: 16px vertical gap + `1px solid #DFE0E4` divider
- Collapse transition: width animation 200ms ease

### Status Badges

| Variant | Background | Text | Border | Use |
|---------|-----------|------|--------|-----|
| Success | `#E8F5EC` | `#2E8544` | none | Completed, Online, Active |
| Warning | `#FFFBEB` | `#D97706` | none | Pending, Attention, Expiring |
| Error | `#FCEBED` | `#D42A34` | none | Failed, Offline, Critical |
| Info | `#E1F5FE` | `#0288D1` | none | Processing, In Progress |
| Neutral | `#F8F9FA` | `#495057` | none | Draft, Unknown, N/A |

- Padding: 2px 8px
- Radius: 4px
- Font: 12px, weight 600
- Always pair with descriptive text — never use color alone to indicate status.

### Tooltips

- Background: `#212529` (`gray/900`)
- Text: `#FFFFFF`, 12px, weight 400
- Padding: 4px 8px
- Radius: 4px
- Max width: 240px
- Arrow: 6px equilateral triangle matching background color
- Delay: 300ms before show

## 5. Layout Principles

### App Shell Structure

The GMDSOFT app shell is a fixed three-part structure that never changes across products:

```
+-----------------------------------------------------+
|  Windows Title Bar (H: 32px)              _ [] X     |
+----------+------------------------------------------+
|          |                                          |
|  Side    |  Content Area                            |
|  Nav     |  (padding: 24~32px)                      |
|          |                                          |
|  W: 240  |  W: Fill                                 |
|  (expand)|                                          |
|          |                                          |
|  W: 56   |                                          |
|  (collapse)|                                        |
+----------+------------------------------------------+
|  Status Bar (optional, H: 24~32px)                  |
+-----------------------------------------------------+
```

- **Title Bar** (32px): Windows-native chrome. Background matches app theme. Minimize/Maximize/Close controls on right.
- **Side Navigation** (240px/56px): Fixed left rail. Expands for labels + icons, collapses to icons only.
- **Content Area** (fluid): All functional UI lives here. Padding 24–32px. Minimum width 1040px (at 1280px viewport with expanded nav).

### Spacing System

Base unit: **4px**. Every margin, padding, and gap must be a multiple of 4.

| Token | Value | Use |
|-------|-------|-----|
| `spacing/0` | 0px | No gap |
| `spacing/2` | 2px | Micro adjustment (icon internals, exceptional) |
| `spacing/4` | 4px | Icon-text gap, inline element spacing |
| `spacing/8` | 8px | Related element minimum gap (label-input, icon-text) |
| `spacing/12` | 12px | Tight group internal gap |
| `spacing/16` | 16px | Default component internal padding, list item gap |
| `spacing/20` | 20px | Form field gap, card internal margin |
| `spacing/24` | 24px | Section internal group gap, modal padding |
| `spacing/32` | 32px | Section gap, card default padding |
| `spacing/40` | 40px | Large section divider |
| `spacing/48` | 48px | Major section gap |
| `spacing/56` | 56px | Large vertical margin |
| `spacing/64` | 64px | Page-level top/bottom margin |
| `spacing/80` | 80px | Hero section spacing |
| `spacing/96` | 96px | Maximum spacing token |

### Grid & Container

- **No formal column grid**: GMDSOFT uses a component-driven layout rather than a fixed column grid. Content Area width is fluid, and components expand or stack based on available space.
- **Content minimum width**: 1040px (ensures all tables and dashboards remain usable)
- **Max content width**: Not capped — industrial software fills available space for maximum data density
- **Dashboard grids**: 2, 3, or 4 column layouts using CSS Grid with 16px gap
- **Split panels**: Common pattern of list (left, 320–400px) + detail (right, fluid) with draggable divider

### Whitespace Philosophy

- **Density over delight**: Whitespace exists to separate logical groups, not for aesthetic breathing room. Every gap must serve an information hierarchy purpose.
- **4px grid as law**: The 4px grid is not a guideline — it is a hard constraint. No 5px, 7px, or 13px values. This ensures pixel-perfect alignment across all components.
- **Progressive density**: Page level uses generous spacing (32–64px), card level uses moderate spacing (16–24px), component internal uses tight spacing (4–8px). This creates a zoom-in effect as the user focuses.

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| None | 0px | Table cells, title bar controls |
| Small | 2px | Tags, micro badges |
| Default | 4px | Buttons, inputs, badges, tooltips |
| Medium | 8px | Cards, panels, dropdowns |
| Large | 12px | Modals, dialogs, overlays |
| Full | 9999px | Pills, circular avatars, progress indicators |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, border only (`1px solid #DFE0E4`) | Tables, standard cards, list items |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.06)` | Dropdowns, popovers, floating toolbars |
| Card (Level 2) | `0 2px 8px rgba(0,0,0,0.08)` | Elevated cards, side panels |
| Modal (Level 3) | `0 8px 32px rgba(0,0,0,0.16)` | Modals, dialogs, command palettes |
| Overlay (Level 4) | Scrim `#00000080` + Level 3 shadow | Full-screen overlays, confirmation dialogs |

**Shadow Philosophy**: GMDSOFT uses shadow conservatively. Most UI elements are flat with borders — shadows appear only when an element genuinely overlaps others (dropdowns, modals, floating panels). The shadow values are soft and neutral, never colored. This is industrial software: depth serves z-order clarity, not visual richness.

### Focus Indicators

- **Keyboard focus**: `0 0 0 2px #FFFFFF, 0 0 0 4px #135DB5` (double-ring for visibility on any background)
- **Focus within**: border color changes to `#135DB5`
- Focus indicators are mandatory on all interactive elements for accessibility compliance.

### Dark Mode Depth

In Dark mode, shadows become less effective (dark shadow on dark background). Depth is communicated instead through:
- **Surface lightness stepping**: `#141416` (base) → `#1E1E21` (raised) → `#252529` (elevated) → `#2D2D30` (overlay)
- **Border emphasis**: Borders become slightly lighter (`#3A3C42`) to create visible edges
- Modal scrim deepens to `#000000CC` for stronger contrast

## 7. Do's and Don'ts

### Do
- Always specify colors as **token path + HEX pair** (e.g., `button/primary/base #135DB5`) — never HEX alone
- Use only the 8 defined font sizes: 10, 12, 14, 16, 18, 20, 22, 28px — never interpolate
- Apply the 4px spacing grid without exception — every gap, margin, padding must be a 4px multiple
- Define all four interaction states (base/hover/pressed/disabled) for every interactive element
- Pair status colors with text labels — never rely on color alone to communicate meaning
- Pair icons with text labels — never use icons alone without accessible text
- Maintain WCAG AA contrast (4.5:1) for all text, especially table headers
- Use `border-variant/divider #DFE0E4` for list separators and table borders
- Keep the Title Bar (32px) + Side Nav (240/56px) + Content Area shell structure in every screen
- Use `Foundation/primary/subtle #EBF2FA` for selected/active row backgrounds

### Don't
- Don't invent new colors outside the token system — if a color doesn't exist as a token, don't use it
- Don't use font sizes outside the 8 permitted values (no 13px, 15px, 24px, 36px)
- Don't use font weights other than 400 (Regular) and 700 (Bold)
- Don't use positive `letter-spacing` — keep it at 0 or negative only, no exceptions for uppercase labels or captions
- Don't add shadows to flat elements like table rows or list items — borders define their edges
- Don't use gradients for backgrounds or buttons — solid token colors only
- Don't make table header text lighter than `#212529` — this is a hard accessibility floor
- Don't use color-only status indicators without accompanying text or icons
- Don't create spacing values that aren't in the 4px grid (no 5px, 7px, 10px, 15px)
- Don't use emojis in UI — use the monoline SVG icon system instead
- Don't exceed 12px border-radius on rectangular elements (9999px is for pills only)
- Don't add decorative elements (textures, patterns, illustrations) — this is industrial software
- Don't center-align body text — left-align all text except modal/dialog titles

## 8. Resolution Adaptation

### Target Resolutions

| Name | Resolution | Content Area Width | Key Behavior |
|------|-----------|-------------------|--------------|
| Minimum | 1280 x 720 | 1040px (with 240px nav) / 1224px (with 56px nav) | All features functional, compact mode |
| Standard (FHD) | 1920 x 1080 | 1680px (with 240px nav) | Default design target |
| High DPI | 2560 x 1440+ | 2320px+ | Same layout, sharper rendering |

### Adaptation Strategy

GMDSOFT does not use responsive breakpoints in the web sense. Instead:

- **Side Navigation**: User toggles between 240px (expanded) and 56px (collapsed). At minimum resolution, collapsed is recommended.
- **Tables**: Horizontal scroll appears when columns exceed Content Area width. Column widths use min-width constraints, not percentage-based layouts.
- **Dashboard grids**: Shift from 4-column to 3-column or 2-column based on available Content Area width. Gap remains 16px at all sizes.
- **Split panels**: Maintain minimum panel widths (320px for list, 400px for detail). If Content Area cannot accommodate both, the detail panel overlays as a slide-in.
- **Modals**: Centered within Content Area, never exceeding 80% of viewport width. Min margin: 40px from edges.

### Minimum Viable Layout

At 1280x720 with expanded navigation (240px), the Content Area is 1040px. All layouts must remain fully functional at this width:
- Table columns: prioritize essential columns, secondary columns can be toggled
- Cards: minimum 280px width, 2-column layout at 1040px
- Forms: single column at 1040px is acceptable; two-column forms require 1400px+

### High DPI Behavior

- All icons are SVG — scale perfectly at any DPI
- Font rendering improves at high DPI but layout remains identical
- Shadow values don't change — they are perceptually consistent across DPIs
- Border widths remain 1px (rendered as device-pixel-ratio-aware)

## 9. Agent Prompt Guide

### Quick Color Reference

```
[Primary Interactive]
  Light: #135DB5 (Foundation/primary/base)
  Dark:  #4F94D4
  Hover: #3D82D9 / #6EB4E0
  Pressed: #0E4A94 / #428AB5

[Seed Button]
  Light: #4681DB (button/seed/base)
  Dark:  #75A3E8

[Page Background]
  Light: #FFFFFF (background_reference/base)
  Dark:  #141416

[Card Background]
  Light: #FAF9FD (bg/card)
  Dark:  #252529

[Primary Text]
  Light: #212529 (Text/default/primary)
  Dark:  #E0E0E0

[Secondary Text]
  Light: #495057 (Text/default/secondary)
  Dark:  #A0A6AC

[Tertiary Text / Hints]
  Light: #868E96 (Text/default/tertiary)
  Dark:  #6C757D

[Border - Standard]
  Light: #C4C6D0 (border-variant/base)
  Dark:  #3A3C42

[Border - Divider]
  Light: #DFE0E4 (border-variant/divider)
  Dark:  #2A2C30

[Border - Input Control]
  Light: #868E96 (border-variant/border-control)
  Dark:  #A0A6AC

[Success] #2E8544 / #43A85E  bg: #E8F5EC / #1C3323
[Warning] #D97706 / #FBBF24  bg: #FFFBEB / #451A03
[Error]   #D42A34 / #E85A63  bg: #FCEBED / #331F20
[Info]    #0288D1 / #29B6F6  bg: #E1F5FE / #1A2A33

[Overlay Scrim]
  Light: #00000080
  Dark:  #000000CC
```

### Example Component Prompts

- "Create a data table with toolbar. Toolbar: background #FFFFFF, height 48px, padding 8px 16px, 8px gap between controls. Search input: 14px Inter, border 1px solid #868E96, radius 4px, 8px 12px padding. Filter dropdown: same styling. Table: header row background #F8F9FA, text #212529 bold 14px, row height 44px, cell padding 12px 16px, row border-bottom 1px solid #DFE0E4. Hover row: #EBF2FA. Selected row: #D5E5F9 with left 3px solid #135DB5."
- "Design a modal dialog on scrim #00000080. Container: #FFFFFF background, 12px radius, shadow 0 8px 32px rgba(0,0,0,0.16), 24px padding, max-width 560px. Title: 18px bold #212529. Body: 14px regular #495057, 16px below header. Actions: right-aligned, 24px above bottom, two buttons with 8px gap — 'Cancel' (outline, #135DB5 text/border) and 'Confirm' (filled, #135DB5 bg, #FFFFFF text). Both: 4px radius, 8px 16px padding, 14px Inter."
- "Build the GMDSOFT side navigation. Width 240px, full height minus 32px title bar. Background #FFFFFF. Menu items: 40px height, 8px 12px padding, 14px Inter regular #495057 text, 24px icon left of text with 8px gap. Active item: background #EBF2FA, text #135DB5, icon #135DB5, left 3px solid #135DB5. Hover: background #F8F9FA. Section dividers: 16px vertical gap, 1px solid #DFE0E4 line. Collapsed mode: 56px width, icons only centered, tooltip on hover."
- "Create a status badge row. Four badges inline with 8px gap. Success: bg #E8F5EC, text #2E8544, 'Online'. Warning: bg #FFFBEB, text #D97706, 'Pending'. Error: bg #FCEBED, text #D42A34, 'Offline'. Info: bg #E1F5FE, text #0288D1, 'Processing'. All: padding 2px 8px, 4px radius, 12px font-weight 600."
- "Design the Windows title bar. Height 32px, full width. Light mode: background #FFFFFF, text #212529. App icon (16px) + app name (12px semibold) on left, 8px gap. Window controls on right: minimize, maximize, close buttons each 46px wide, 32px tall. Close button hover: #E81123 background, #FFFFFF icon. Other buttons hover: #5B91E1 background."

### Iteration Guide

1. Every color must come from the token system — specify as `token-path #HEX` pair
2. Font sizes are limited to: 10, 12, 14, 16, 18, 20, 22, 28px only
3. All spacing must be 4px multiples: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96
4. Interactive elements need all four states: base, hover, pressed, disabled
5. The app shell (Title Bar 32px + Side Nav 240/56px + Content Area) is non-negotiable
6. Borders use `border-variant/divider #DFE0E4` for separators, `border-variant/border-control #868E96` for inputs
7. Tables use 44px minimum row height, #F8F9FA header background, #EBF2FA hover, #D5E5F9 selected
8. Modals always have scrim (#00000080), 12px radius, 24px padding, right-aligned actions
9. Status communication requires color + text — never color alone
10. Border radius: 4px (buttons/inputs), 8px (cards), 12px (modals), 9999px (pills only)
