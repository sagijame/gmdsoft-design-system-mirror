---
name: gmdsoft-design-system
description: |
  GMDSOFT 사내 Windows 데스크톱 애플리케이션 디자인 시스템(v2.12). MD-VIDEO,
  MD-SCANNER, MD-PLATFORM 등 GMDSOFT 제품의 UI/UX를 만들거나 수정·검수할 때
  사용한다. 색상, 타이포그래피, 버튼, 모달, 사이드 내비게이션, 테이블, 폼,
  레이아웃(4px 그리드, 타이틀바 32px, 사이드 240/56px), Light/Dark 모드를 모두
  다룬다. "GMD 디자인", "사내 디자인 시스템", "design system 따라서",
  "디자인 토큰", "MD-VIDEO/SCANNER/PLATFORM UI" 키워드에 트리거된다.
---

# GMDSOFT Design System v2.12

GMDSOFT의 Windows 데스크톱 애플리케이션을 위한 디자인 언어. 이 스킬이 활성화되면 모든 UI 생성·수정 작업에서 아래 규칙과 토큰을 따른다.

## 언제 사용하나

- GMDSOFT 제품(MD-VIDEO, MD-SCANNER, MD-PLATFORM 등)의 UI 컴포넌트, 화면, 프로토타입 생성
- 기존 UI를 디자인 시스템에 맞춰 수정·검수
- 색상/타이포그래피/스페이싱/컴포넌트 토큰 질의
- HTML/CSS, Figma 변환, WPF/WinUI 스타일 생성

## 참조 파일 사용 순서

이 스킬 폴더(`gmdsoft-design-system/`) 안의 다음 파일을 필요할 때 Read한다.

1. **`DESIGN.md`** — 디자인 의도, 9개 섹션(Visual Theme, Color Roles, Typography, Components, Layout, Elevation, Do's & Don'ts, Resolution, Agent Prompt Guide)의 전체 스펙. 컴포넌트 구성·치수·상태가 필요하면 먼저 본다.
2. **`COLOR_TOKENS.md`** — 130개 색상 토큰의 token-path + Light/Dark HEX + CSS 변수 전체. 정확한 색상 값이 필요하면 본다.
3. **`preview.html` / `preview-dark.html`** — 모든 토큰을 시각화한 카탈로그. 사용자에게 토큰 적용 모습을 보여주거나 시각 검증이 필요하면 브라우저로 열어 확인한다.

토큰 전문은 본문에 박지 않는다. 필요할 때만 Read해 컨텍스트를 절약한다.

## 절대 규칙 (Hard Rules)

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

전체 토큰은 `COLOR_TOKENS.md` / `DESIGN.md`. 가장 자주 쓰는 값만:

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
- Weight: Regular(400) / Bold(700) — 그 외 사용 금지
- Scale: h1 28 / h2 22 / h3 20 / h4 18 / bodyLg 16 / bodyMd 14 / bodySm 12 / caption 10

## Light/Dark 모두 지원

새 컴포넌트를 만들 때는 항상 두 모드 토큰을 같이 명시. CSS 변수를 쓰면 자동 전환되도록 설계 (`COLOR_TOKENS.md`의 CSS 변수 블록 참고).

## 작업 가이드

UI 작업 요청을 받으면:

1. 어떤 컴포넌트/화면인지 파악
2. 필요하면 `DESIGN.md`의 해당 섹션 먼저 Read
3. 정확한 색상이 필요하면 `COLOR_TOKENS.md`에서 token-path와 HEX 동시에 확인
4. 위 10개 절대 규칙을 준수하며 코드 생성
5. 시각 검증이 필요하면 사용자에게 `preview.html` 또는 `preview-dark.html`을 열어보도록 안내
