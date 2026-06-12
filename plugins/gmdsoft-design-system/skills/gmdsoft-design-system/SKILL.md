---
name: gmdsoft-design-system
description: |
  GMDSOFT 사내 Windows 데스크톱 애플리케이션 디자인 시스템(v2.12). MD-VIDEO,
  MD-SCANNER, MD-PLATFORM 등 GMDSOFT 제품의 UI/UX를 만들거나 수정·검수할 때
  사용한다. 색상, 타이포그래피, 버튼·모달·테이블·폼 등 29종 컴포넌트,
  사이드 내비게이션, 레이아웃(4px 그리드, 타이틀바 32px, 사이드 240/56px),
  Light/Dark 모드를 모두 다룬다. "GMD 디자인", "사내 디자인 시스템",
  "design system 따라서", "디자인 토큰", "MD-VIDEO/SCANNER/PLATFORM UI" 키워드에 트리거된다.
---

# GMDSOFT Design System v2.12

GMDSOFT Windows 데스크톱 앱의 디자인 언어. 이 스킬이 활성화되면 모든 UI 생성·수정·검수에서 아래 **절대 규칙**과 토큰을 따른다. 상세 스펙은 본문에 박지 말고, 필요한 reference 파일만 그때그때 Read해 컨텍스트를 절약한다.

## 작업 흐름

1. 어떤 컴포넌트/화면인지 파악
2. 아래 **참조 파일 인덱스**에서 필요한 파일만 Read
3. **절대 규칙 10개**를 준수하며 생성
4. 시각 검증이 필요하면 사용자에게 `preview.html` / `preview-dark.html` 안내

## 참조 파일 인덱스 (필요할 때만 Read)

| 필요한 것 | 파일 |
|---|---|
| 컴포넌트 구현 스펙 (변형·크기·상태·Anatomy·조합·토큰) | `components/<name>.md` (정본, 아래 목록) |
| 색·타이포·레이아웃·elevation 설계 의도, Do/Don't | `DESIGN.md` |
| 정확한 색상 값 (token-path + Light/Dark HEX + CSS 변수) | `COLOR_TOKENS.md` |
| 기계 판독 토큰 정본 (색·타이포·간격·radius·elevation) | `tokens.json` |
| 다국어 잘림 등 운영 가이드라인 | `guidelines.md` |
| 토큰 적용 시각 카탈로그 | `preview.html` / `preview-dark.html` |

> 컴포넌트 구현의 **정본은 `components/<name>.md`**. `DESIGN.md §4`는 설계 의도 요약이다.
> 특정 컴포넌트 질문이면 그 파일 **1개만** Read한다 (예: 버튼 → `components/button.md`).

### components/ (29종)

- **입력·폼**: `button` · `input` · `textbox` · `checkbox-radio` · `combobox` · `datetime-picker` · `slider` · `spinner`
- **표시·피드백**: `card` · `badge` · `toast` · `banner` · `info-bar` · `progress` · `tooltip` · `avatar` · `table`
- **내비게이션**: `tab` · `sidebar` · `breadcrumb` · `pagination` · `stepper` · `tree` · `context-menu` · `accordion`
- **오버레이**: `modal` · `popover` · `filter-labels` · `scrollbar`

## 절대 규칙 (Hard Rules) — 항상 적용

DESIGN.md §9 "Agent Prompt Guide"의 규칙. 어떤 경우에도 어기지 않는다.

1. **모든 색상은 토큰에서** — 임의 HEX 금지. 코드/주석에 `token-path #HEX` 페어로 명시 (예: `Foundation/primary/base #135DB5`)
2. **폰트 사이즈는 8개만** — 10, 12, 14, 16, 18, 20, 22, 28px. 그 외 금지
3. **스페이싱은 4px 배수만** — 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96px
4. **상호작용 요소는 4상태 필수** — base / hover / pressed / disabled
5. **앱 셸 비협상** — Title Bar 32px + Side Nav 240px(확장)/56px(축소) + Content Area
6. **보더 구분**
   - 섹션/행 구분: `border-variant/divider #DFE0E4`
   - 입력 컨트롤: `border-variant/border-control #868E96`
7. **테이블 규약** — 행 최소 44px, 헤더 `#F8F9FA`, hover `#EBF2FA`, selected `#D5E5F9`
8. **모달 규약** — scrim `#00000080`, radius 12px, padding 24px, 액션 버튼 우측 정렬
9. **상태 전달은 색상 + 텍스트** — 색상만으로 상태를 전달하지 않는다 (접근성)
10. **Border radius 단계** — 4px(버튼/입력), 8px(카드), 12px(모달), 9999px(pill만)

## 핵심 색상 빠른 참조

전체 토큰은 `COLOR_TOKENS.md` / `tokens.json`. 가장 자주 쓰는 값만:

| 역할 | Light | Dark |
|------|-------|------|
| Primary | `#135DB5` | `#4F94D4` |
| Primary Hover | `#3D82D9` | `#6EB4E0` |
| Primary Pressed | `#0E4A94` | `#428AB5` |
| Seed Button | `#4681DB` | `#75A3E8` |
| Page BG | `#FFFFFF` | `#141416` |
| Card BG | `#FAF9FD` | `#252529` |
| Text Primary | `#212529` | `#E0E0E0` |
| Text Secondary | `#495057` | `#A0A6AC` |
| Text Tertiary | `#868E96` | `#6C757D` |
| Border | `#C4C6D0` | `#3A3C42` |
| Divider | `#DFE0E4` | `#2A2C30` |
| Success | `#2E8544` / bg `#E8F5EC` | `#43A85E` / bg `#1C3323` |
| Warning | `#D97706` / bg `#FFFBEB` | `#FBBF24` / bg `#451A03` |
| Error | `#D42A34` / bg `#FCEBED` | `#E85A63` / bg `#331F20` |
| Info | `#0288D1` / bg `#E1F5FE` | `#29B6F6` / bg `#1A2A33` |

## 폰트

- Family: `Inter, Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`
- Weight: Regular(400) / Bold(700) — 그 외 금지
- Scale: h1 28 / h2 22 / h3 20 / h4 18 / bodyLg 16 / bodyMd 14 / bodySm 12 / caption 10
- Letter-spacing 양수 금지 (0 또는 음수만)

## Light/Dark

새 컴포넌트는 항상 두 모드 토큰을 같이 명시. CSS 변수로 자동 전환되게 설계 (`COLOR_TOKENS.md`의 CSS 변수 블록 참고). 다크는 `<html data-theme="dark">`.

## 커맨드 (반복 액션)

- `/gmd-audit` — 작성된 UI를 디자인 규칙·토큰 대비 검수
- `/gmd-component` — 컴포넌트를 토큰 준수로 스캐폴딩
- `/gmd-tokens-to-xaml` — 토큰을 WPF/WinUI XAML 리소스로 변환
