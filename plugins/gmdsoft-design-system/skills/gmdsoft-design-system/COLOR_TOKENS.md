# GMD Design System v2.12 — Color Token Reference

> **Source**: Figma `MD-UX` file (`zt8aRVV4gt9tNwjeyjOu1b`) / Variable Collection `01_GMD_Theme_v2.12`
> **Token JSON**: `01_GMD_Theme_v2.12/Light.tokens.json`, `Dark.tokens.json`
> **Extracted**: 2026-04-14
> **Purpose**: 프로토타입, 화면설계, SPEC.html 작성 시 이 문서의 토큰 경로 + HEX 값을 참조한다. 임의의 HEX를 사용하지 않는다.

---

## 사용 규칙

1. 색상 지정 시 **토큰 경로**와 **HEX 값**을 함께 기재한다
   - 예: `Foundation Colors/primary/base` → `#135DB5`
2. Light 모드를 기본으로 작성하고, Dark 모드는 차이(diff)만 별도 표기한다
3. alpha가 포함된 토큰은 `rgba()` 또는 HEX + opacity로 표기한다
4. CSS 변수로 적용 시 토큰 경로를 kebab-case로 변환한다
   - 예: `--foundation-primary-base: #135DB5;`

---

## 1. Seed

| Token Path | Light | Dark |
|---|---|---|
| `Seed` | `#4681DB` | `#75A3E8` |

---

## 2. Foundation Colors

### 2-1. Primary

| Token Path | Light | Dark |
|---|---|---|
| `Foundation Colors/primary/base` | `#135DB5` | `#4F94D4` |
| `Foundation Colors/primary/hover` | `#3D82D9` | `#6EB4E0` |
| `Foundation Colors/primary/pressed` | `#0E4A94` | `#428AB5` |
| `Foundation Colors/primary/disabled` | `#A8C4D9` | `#506B7D` |
| `Foundation Colors/primary/subtle` | `#EBF2FA` | `#1E3242` |

### 2-2. Primary 900 Scale

| Token Path | Light | Dark |
|---|---|---|
| `Foundation Colors/primary 900/50` | `#EAF2FC` | `#E8F3FB` |
| `Foundation Colors/primary 900/100` | `#D5E5F9` | `#D1E7F7` |
| `Foundation Colors/primary 900/200` | `#ACCDF2` | `#B0D6F1` |
| `Foundation Colors/primary 900/300` | `#82B5EB` | `#8EC4EB` |
| `Foundation Colors/primary 900/400` | `#4A8CD0` | `#75B6E2` |
| `Foundation Colors/primary 900/500` | `#135DB5` | `#62A8D9` |
| `Foundation Colors/primary 900/600` | `#104E99` | `#4E8BB5` |
| `Foundation Colors/primary 900/700` | `#0C3E7D` | `#396D92` |
| `Foundation Colors/primary 900/800` | `#092F61` | `#255070` |
| `Foundation Colors/primary 900/900` | `#051F45` | `#14324D` |

### 2-3. Secondary

| Token Path | Light | Dark |
|---|---|---|
| `Foundation Colors/secondary/base` | `#E67700` | `#FFA94D` |
| `Foundation Colors/secondary/hover` | `#F28500` | `#FFB966` |
| `Foundation Colors/secondary/pressed` | `#CC6A00` | `#E67700` |
| `Foundation Colors/secondary/disabled` | `#FFD8A8` | `#8C5000` |
| `Foundation Colors/secondary/subtle` | `#FFF4E6` | `#332B1A` |

### 2-4. Tertiary

| Token Path | Light | Dark |
|---|---|---|
| `Foundation Colors/tertiary/base` | `#495057` | `#ADB5BD` |
| `Foundation Colors/tertiary/hover` | `#5A6268` | `#BFC7CD` |
| `Foundation Colors/tertiary/pressed` | `#3D4348` | `#969FA6` |
| `Foundation Colors/tertiary/disabled` | `#ADB5BD` | `#495057` |
| `Foundation Colors/tertiary/subtle` | `#F8F9FA` | `#212529` |

### 2-5. Gray 900 Scale

| Token Path | Light | Dark |
|---|---|---|
| `Foundation Colors/gray 900/50` | `#FFFFFF` | `#141517` |
| `Foundation Colors/gray 900/100` | `#F8F9FA` | `#1A1D20` |
| `Foundation Colors/gray 900/200` | `#E9ECEF` | `#212529` |
| `Foundation Colors/gray 900/300` | `#DEE2E6` | `#343A40` |
| `Foundation Colors/gray 900/400` | `#CED4DA` | `#495057` |
| `Foundation Colors/gray 900/500` | `#ADB5BD` | `#6C757D` |
| `Foundation Colors/gray 900/600` | `#6C757D` | `#CED4DA` |
| `Foundation Colors/gray 900/700` | `#495057` | `#DEE2E6` |
| `Foundation Colors/gray 900/800` | `#343A40` | `#E9ECEF` |
| `Foundation Colors/gray 900/900` | `#212529` | `#F8F9FA` |

---

## 3. Semantic Colors

| Token Path | Light | Dark |
|---|---|---|
| `Semantic colors/error/base` | `#D42A34` | `#E85A63` |
| `Semantic colors/error/hover` | `#E24950` | `#F27B82` |
| `Semantic colors/error/pressed` | `#B0232B` | `#C94850` |
| `Semantic colors/error/background` | `#FCEBED` | `#331F20` |
| `Semantic colors/warning/base` | `#D97706` | `#FBBF24` |
| `Semantic colors/warning/hover` | `#B45309` | `#FCD34D` |
| `Semantic colors/warning/pressed` | `#92400E` | `#D97706` |
| `Semantic colors/warning/background` | `#FFFBEB` | `#451A03` |
| `Semantic colors/success/base` | `#2E8544` | `#43A85E` |
| `Semantic colors/success/hover` | `#37A352` | `#55C473` |
| `Semantic colors/success/pressed` | `#256A37` | `#348A4B` |
| `Semantic colors/success/background` | `#E8F5EC` | `#1C3323` |
| `Semantic colors/info/base` | `#0288D1` | `#29B6F6` |
| `Semantic colors/info/hover` | `#039BE5` | `#4FC3F7` |
| `Semantic colors/info/pressed` | `#0277BD` | `#0288D1` |
| `Semantic colors/info/background` | `#E1F5FE` | `#1A2A33` |

---

## 4. Text

| Token Path | Light | Dark |
|---|---|---|
| `Text/default/primary` | `#212529` | `#E0E0E0` |
| `Text/default/secondary` | `#495057` | `#A0A6AC` |
| `Text/default/tertiary` | `#868E96` | `#6C757D` |
| `Text/default/disabled` | `#ADB5BD` | `#6C757D` |
| `Text/on-primary/base` | `#FFFFFF` | `#FFFFFF` |
| `Text/on-primary/secondary` | `#E0E0E0` | `#E0E0E0` |
| `Text/on-primary/tertiary` | `#E0E0E0` | `#212529` |
| `Text/on-primary/disabled` | `#CCCCCC` | `#A6A6A6` |
| `Text/on-color/on-error` | `#FFFFFF` | `#FFFFFF` |
| `Text/on-color/on-primary` | `#FFFFFF` | `#FFFFFF` |
| `Text/on-color/on-success` | `#FFFFFF` | `#FFFFFF` |
| `Text/on-color/on-warning` | `#212529` | `#212529` |

---

## 5. Background Colors

| Token Path | Light | Dark |
|---|---|---|
| `Background colors/bg/base` | `#F8F9FA` | `#141416` |
| `Background colors/bg/card` | `#FAF9FD` | `#252529` |
| `Background colors/bg/section` | `#E9ECEF` | `#1E1E21` |
| `Background colors/bg/slot-active` | `#FFFFFF` | `#1E1E21` |
| `Background colors/bg/slot-disabled` | `#E9ECEF` | `#2D2D30` |
| `Background colors/bg/overlay/hover` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.06)` |
| `Background colors/bg/overlay/pressed` | `rgba(19,93,181,0.12)` | `rgba(79,148,212,0.12)` |
| `Background colors/bg/overlay/scrim` | `rgba(0,0,0,0.50)` | `rgba(0,0,0,0.80)` |
| `Background colors/bg/overlay/sheet` | `rgba(0,0,0,0.30)` | `rgba(255,255,255,0.08)` |
| `Background colors/surface/primary` | `#FAF9FD` | `#1E1E21` |
| `Background colors/surface/hover` | `#F5F4F8` | `#252529` |
| `Background colors/surface/pressed` | `#EFEEF3` | `#19191B` |
| `Background colors/surface/disabled` | `#FFFFFF` | `#141416` |
| `Background colors/surface/seed_reference` | `#FFFFFF` | `#141416` |
| `Background colors/background_reference/base` | `#FFFFFF` | `#141416` |
| `Background colors/background_reference/secondary` | `#F8F9FA` | `#2D2D30` |
| `Background colors/background_reference/tertiary` | `#E9ECEF` | `#3A3A3D` |
| `Background colors/background_reference/overlay` | `rgba(0,0,0,0.80)` | `rgba(0,0,0,0.80)` |

---

## 6. Border Colors

| Token Path | Light | Dark |
|---|---|---|
| `Border colors/border/base` | `#74777F` | `#2E3136` |
| `Border colors/border/hover` | `#5D6069` | `#3A3D42` |
| `Border colors/border/pressed` | `#484B52` | `#232528` |
| `Border colors/border/disabled` | `#9A9DA6` | `#1C1E21` |
| `Border colors/border-variant/base` | `#C4C6D0` | `#3A3C42` |
| `Border colors/border-variant/divider` | `#DFE0E4` | `#2A2C30` |
| `Border colors/border-variant/hover` | `#A7AAB4` | `#4A4D54` |
| `Border colors/border-variant/pressed` | `#898C96` | `#2A2C30` |
| `Border colors/border-variant/border-control` | `#868E96` | `#A0A6AC` |
| `Border colors/border-variant/disabled` | `rgba(255,255,255,0.40)` | `rgba(255,255,255,0.40)` |

---

## 7. Foreground (on surface)

| Token Path | Light | Dark |
|---|---|---|
| `Foreground/on surface/primary` | `#1A1A1A` | `#FFFFFF` |
| `Foreground/on surface/secondary` | `#5F5F5F` | `#B3B3B3` |
| `Foreground/on surface/tertiary` | `#9A9A9A` | `#7A7A7A` |
| `Foreground/on surface/disabled` | `#C2C2C2` | `#5A5A5A` |
| `Foreground/on surface/inverse` | `#FFFFFF` | `#1A1A1A` |

---

## 8. Button

| Token Path | Light | Dark |
|---|---|---|
| `button/primary/base` | `#135DB5` | `#62A8D9` |
| `button/primary/hover` | `#3D82D9` | `#8AC6E6` |
| `button/primary/pressed` | `#0E4A94` | `#428AB5` |
| `button/primary/disabled` | `#A8C4D9` | `#506B7D` |
| `button/seed/base` | `#4681DB` | `#75A3E8` |
| `button/seed/hover` | `#5B91E1` | `#8DB3ED` |
| `button/seed/pressed` | `#3671CD` | `#6293E3` |
| `button/seed/disabled` | `#A8C4D9` | `#506B7D` |

---

## 9. Loader

| Token Path | Light | Dark |
|---|---|---|
| `Loader/primary/active` | `#4681DB` | `#4681DB` |
| `Loader/primary/inactive` | `#E6E6E6` | `#2A2A2A` |
| `Loader/primary/step1` | `#D6E3F4` | `#0F1A2C` |
| `Loader/primary/step2` | `#ADC7EA` | `#1C3357` |
| `Loader/primary/step3` | `#85ABE0` | `#284D83` |
| `Loader/primary/step4` | `#4681DB` | `#4681DB` |
| `Loader/gray/active` | `#A0A0A0` | `#5A5A5A` |
| `Loader/gray/inactive` | `#E6E6E6` | `#2A2A2A` |
| `Loader/gray/step1` | `#E6E6E6` | `#1A1A1A` |
| `Loader/gray/step2` | `#CCCCCC` | `#333333` |
| `Loader/gray/step3` | `#999999` | `#666666` |
| `Loader/gray/step4` | `#666666` | `#999999` |

---

## 10. Windows App Title Bar

| Token Path | Light | Dark |
|---|---|---|
| `Windows App title Bar/background/base` | `#FFFFFF` | `#141416` |
| `Windows App title Bar/background/disabled` | `#CCCCCC` | `#070C15` |
| `Windows App title Bar/background/control/hover` | `#5B91E1` | `#152641` |
| `Windows App title Bar/background/control/pressed` | `#3671CD` | `#1C3357` |
| `Windows App title Bar/background/control/disabled` | `#C7D9F4` | `#04070C` |
| `Windows App title Bar/background/control/hover(close)` | `#E81123` | `#E81123` |
| `Windows App title Bar/background/control/pressed(close)` | `#D10E1F` | `#D10E1F` |
| `Windows App title Bar/icon/base` | `#FFFFFF` | `#FFFFFF` |
| `Windows App title Bar/icon/hover` | `#FFFFFF` | `#FFFFFF` |
| `Windows App title Bar/icon/pressed` | `#FFFFFF` | `#FFFFFF` |
| `Windows App title Bar/icon/disabled` | `#333333` | `#B8C7D9` |
| `Windows App title Bar/text/base` | `#FFFFFF` | `#FFFFFF` |
| `Windows App title Bar/text/disabled` | `#666666` | `#B8C7D9` |

---

## Quick Reference — CSS Variables (Light)

```css
:root {
  /* Seed */
  --seed: #4681DB;

  /* Foundation — Primary */
  --primary-base: #135DB5;
  --primary-hover: #3D82D9;
  --primary-pressed: #0E4A94;
  --primary-disabled: #A8C4D9;
  --primary-subtle: #EBF2FA;

  /* Foundation — Secondary */
  --secondary-base: #E67700;
  --secondary-hover: #F28500;
  --secondary-pressed: #CC6A00;
  --secondary-disabled: #FFD8A8;
  --secondary-subtle: #FFF4E6;

  /* Foundation — Tertiary */
  --tertiary-base: #495057;
  --tertiary-hover: #5A6268;
  --tertiary-pressed: #3D4348;
  --tertiary-disabled: #ADB5BD;
  --tertiary-subtle: #F8F9FA;

  /* Semantic */
  --error-base: #D42A34;
  --error-hover: #E24950;
  --error-pressed: #B0232B;
  --error-bg: #FCEBED;
  --warning-base: #D97706;
  --warning-hover: #B45309;
  --warning-pressed: #92400E;
  --warning-bg: #FFFBEB;
  --success-base: #2E8544;
  --success-hover: #37A352;
  --success-pressed: #256A37;
  --success-bg: #E8F5EC;
  --info-base: #0288D1;
  --info-hover: #039BE5;
  --info-pressed: #0277BD;
  --info-bg: #E1F5FE;

  /* Text */
  --text-primary: #212529;
  --text-secondary: #495057;
  --text-tertiary: #868E96;
  --text-disabled: #ADB5BD;
  --text-on-primary: #FFFFFF;
  --text-on-error: #FFFFFF;
  --text-on-success: #FFFFFF;
  --text-on-warning: #212529;

  /* Background */
  --bg-base: #F8F9FA;
  --bg-card: #FAF9FD;
  --bg-section: #E9ECEF;
  --bg-slot-active: #FFFFFF;
  --bg-slot-disabled: #E9ECEF;
  --bg-overlay-hover: rgba(0,0,0,0.06);
  --bg-overlay-pressed: rgba(19,93,181,0.12);
  --bg-overlay-scrim: rgba(0,0,0,0.50);
  --bg-overlay-sheet: rgba(0,0,0,0.30);
  --surface-primary: #FAF9FD;
  --surface-hover: #F5F4F8;
  --surface-pressed: #EFEEF3;
  --surface-disabled: #FFFFFF;

  /* Border */
  --border-base: #74777F;
  --border-hover: #5D6069;
  --border-pressed: #484B52;
  --border-disabled: #9A9DA6;
  --border-variant-base: #C4C6D0;
  --border-variant-divider: #DFE0E4;
  --border-variant-hover: #A7AAB4;
  --border-variant-pressed: #898C96;
  --border-variant-control: #868E96;

  /* Button */
  --btn-primary-base: #135DB5;
  --btn-primary-hover: #3D82D9;
  --btn-primary-pressed: #0E4A94;
  --btn-primary-disabled: #A8C4D9;
  --btn-seed-base: #4681DB;
  --btn-seed-hover: #5B91E1;
  --btn-seed-pressed: #3671CD;
  --btn-seed-disabled: #A8C4D9;

  /* Gray Scale */
  --gray-50: #FFFFFF;
  --gray-100: #F8F9FA;
  --gray-200: #E9ECEF;
  --gray-300: #DEE2E6;
  --gray-400: #CED4DA;
  --gray-500: #ADB5BD;
  --gray-600: #6C757D;
  --gray-700: #495057;
  --gray-800: #343A40;
  --gray-900: #212529;

  /* Primary Scale */
  --primary-50: #EAF2FC;
  --primary-100: #D5E5F9;
  --primary-200: #ACCDF2;
  --primary-300: #82B5EB;
  --primary-400: #4A8CD0;
  --primary-500: #135DB5;
  --primary-600: #104E99;
  --primary-700: #0C3E7D;
  --primary-800: #092F61;
  --primary-900: #051F45;
}
```

## Quick Reference — CSS Variables (Dark)

```css
[data-theme="dark"] {
  /* Seed */
  --seed: #75A3E8;

  /* Foundation — Primary */
  --primary-base: #4F94D4;
  --primary-hover: #6EB4E0;
  --primary-pressed: #428AB5;
  --primary-disabled: #506B7D;
  --primary-subtle: #1E3242;

  /* Foundation — Secondary */
  --secondary-base: #FFA94D;
  --secondary-hover: #FFB966;
  --secondary-pressed: #E67700;
  --secondary-disabled: #8C5000;
  --secondary-subtle: #332B1A;

  /* Foundation — Tertiary */
  --tertiary-base: #ADB5BD;
  --tertiary-hover: #BFC7CD;
  --tertiary-pressed: #969FA6;
  --tertiary-disabled: #495057;
  --tertiary-subtle: #212529;

  /* Semantic */
  --error-base: #E85A63;
  --error-hover: #F27B82;
  --error-pressed: #C94850;
  --error-bg: #331F20;
  --warning-base: #FBBF24;
  --warning-hover: #FCD34D;
  --warning-pressed: #D97706;
  --warning-bg: #451A03;
  --success-base: #43A85E;
  --success-hover: #55C473;
  --success-pressed: #348A4B;
  --success-bg: #1C3323;
  --info-base: #29B6F6;
  --info-hover: #4FC3F7;
  --info-pressed: #0288D1;
  --info-bg: #1A2A33;

  /* Text */
  --text-primary: #E0E0E0;
  --text-secondary: #A0A6AC;
  --text-tertiary: #6C757D;
  --text-disabled: #6C757D;
  --text-on-primary: #FFFFFF;
  --text-on-error: #FFFFFF;
  --text-on-success: #FFFFFF;
  --text-on-warning: #212529;

  /* Background */
  --bg-base: #141416;
  --bg-card: #252529;
  --bg-section: #1E1E21;
  --bg-slot-active: #1E1E21;
  --bg-slot-disabled: #2D2D30;
  --bg-overlay-hover: rgba(255,255,255,0.06);
  --bg-overlay-pressed: rgba(79,148,212,0.12);
  --bg-overlay-scrim: rgba(0,0,0,0.80);
  --bg-overlay-sheet: rgba(255,255,255,0.08);
  --surface-primary: #1E1E21;
  --surface-hover: #252529;
  --surface-pressed: #19191B;
  --surface-disabled: #141416;

  /* Border */
  --border-base: #2E3136;
  --border-hover: #3A3D42;
  --border-pressed: #232528;
  --border-disabled: #1C1E21;
  --border-variant-base: #3A3C42;
  --border-variant-divider: #2A2C30;
  --border-variant-hover: #4A4D54;
  --border-variant-pressed: #2A2C30;
  --border-variant-control: #A0A6AC;

  /* Button */
  --btn-primary-base: #62A8D9;
  --btn-primary-hover: #8AC6E6;
  --btn-primary-pressed: #428AB5;
  --btn-primary-disabled: #506B7D;
  --btn-seed-base: #75A3E8;
  --btn-seed-hover: #8DB3ED;
  --btn-seed-pressed: #6293E3;
  --btn-seed-disabled: #506B7D;

  /* Gray Scale (inverted) */
  --gray-50: #141517;
  --gray-100: #1A1D20;
  --gray-200: #212529;
  --gray-300: #343A40;
  --gray-400: #495057;
  --gray-500: #6C757D;
  --gray-600: #CED4DA;
  --gray-700: #DEE2E6;
  --gray-800: #E9ECEF;
  --gray-900: #F8F9FA;

  /* Primary Scale */
  --primary-50: #E8F3FB;
  --primary-100: #D1E7F7;
  --primary-200: #B0D6F1;
  --primary-300: #8EC4EB;
  --primary-400: #75B6E2;
  --primary-500: #62A8D9;
  --primary-600: #4E8BB5;
  --primary-700: #396D92;
  --primary-800: #255070;
  --primary-900: #14324D;
}
```

---

## Token Count Summary

| Category | Count |
|---|---|
| Seed | 1 |
| Foundation Colors (Primary) | 5 |
| Foundation Colors (Primary 900 Scale) | 10 |
| Foundation Colors (Secondary) | 5 |
| Foundation Colors (Tertiary) | 5 |
| Foundation Colors (Gray 900 Scale) | 10 |
| Semantic Colors | 16 |
| Text | 12 |
| Background Colors | 18 |
| Border Colors | 10 |
| Foreground | 5 |
| Button | 8 |
| Loader | 12 |
| Windows App Title Bar | 13 |
| **Total** | **130** |
