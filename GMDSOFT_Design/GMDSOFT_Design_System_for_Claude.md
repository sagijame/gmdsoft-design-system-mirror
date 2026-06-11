# GMDSOFT Design System v2.12 — Design Guidelines

## Overview

- **플랫폼**: Windows 데스크탑 / 웹 애플리케이션
- **기준 해상도**: 1920×1080 FHD (최소 1280×720)
- **밀도**: 정보 밀도 우선
- **모드**: Light (기본) / Dark
- **Seed 컬러**: `#4681DB`

---

## 절대 규칙

1. **폰트 크기**: 10 / 12 / **14(기본)** / 16 / 18 / 20 / 22 / 28px만 사용. 13px, 15px, 24px 등 금지
2. **폰트 굵기**: 400(Regular), 700(Bold)만. light, medium, semibold 금지
3. **자간(letter-spacing)**: 양수(0px 초과) 금지. 0 또는 음수만 허용
4. **간격**: 4px 배수만 (0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96)
5. **색상**: 토큰 정의 색상만 사용. 임의 HEX 금지. 표기 시 토큰 경로 + HEX 병기
6. **상태**: 모든 인터랙티브 요소에 base / hover / pressed / disabled 4종 필수
7. **접근성**: 색상만으로 상태 구분 금지 → 텍스트 병행. 아이콘만으로 의미 전달 금지 → 라벨 병행
8. **이모지 금지**: UI에 이모지 사용하지 않음. 모노라인 SVG 아이콘 사용
9. **그라디언트 금지**: 배경·버튼 모두 단색 토큰만
10. **장식 요소 금지**: 텍스처, 패턴, 일러스트레이션 없음

---

## 앱 셸 구조

```
+-----------------------------------------------------+
|  Title Bar (32px)                         _ □ X      |
+----------+------------------------------------------+
|  Side    |  Content Area                            |
|  Nav     |  padding: 24~32px                        |
|  240px   |  min-width: 1040px                       |
| (56px    |                                          |
|  접힘)   |                                          |
+----------+------------------------------------------+
```

- **Title Bar**: 32px (Windows 앱) 또는 커스텀 헤더 (웹), 닫기 hover `#E81123`
- **Side Navigation**: 240px 펼침 / 56px 접힘(아이콘 전용)
- **Content Area**: 유동 폭, 최소 1040px, padding 24~32px

---

## 색상 토큰

### Foundation — Primary

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Seed | `Seed` | `#4681DB` | `#75A3E8` |
| Primary base | `Foundation Colors/primary/base` | `#135DB5` | `#4F94D4` |
| Primary hover | `Foundation Colors/primary/hover` | `#3D82D9` | `#6EB4E0` |
| Primary pressed | `Foundation Colors/primary/pressed` | `#0E4A94` | `#428AB5` |
| Primary disabled | `Foundation Colors/primary/disabled` | `#A8C4D9` | `#506B7D` |
| Primary subtle | `Foundation Colors/primary/subtle` | `#EBF2FA` | `#1E3242` |

### Foundation — Secondary / Tertiary

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Secondary base | `Foundation Colors/secondary/base` | `#E67700` | `#FFA94D` |
| Secondary hover | `Foundation Colors/secondary/hover` | `#F28500` | `#FFB966` |
| Secondary pressed | `Foundation Colors/secondary/pressed` | `#CC6A00` | `#E67700` |
| Secondary disabled | `Foundation Colors/secondary/disabled` | `#FFD8A8` | `#8C5000` |
| Secondary subtle | `Foundation Colors/secondary/subtle` | `#FFF4E6` | `#332B1A` |
| Tertiary base | `Foundation Colors/tertiary/base` | `#495057` | `#ADB5BD` |
| Tertiary hover | `Foundation Colors/tertiary/hover` | `#5A6268` | `#BFC7CD` |
| Tertiary pressed | `Foundation Colors/tertiary/pressed` | `#3D4348` | `#969FA6` |
| Tertiary disabled | `Foundation Colors/tertiary/disabled` | `#ADB5BD` | `#495057` |
| Tertiary subtle | `Foundation Colors/tertiary/subtle` | `#F8F9FA` | `#212529` |

### Semantic Colors

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Error base | `Semantic colors/error/base` | `#D42A34` | `#E85A63` |
| Error hover | `Semantic colors/error/hover` | `#E24950` | `#F27B82` |
| Error pressed | `Semantic colors/error/pressed` | `#B0232B` | `#C94850` |
| Error background | `Semantic colors/error/background` | `#FCEBED` | `#331F20` |
| Warning base | `Semantic colors/warning/base` | `#D97706` | `#FBBF24` |
| Warning hover | `Semantic colors/warning/hover` | `#B45309` | `#FCD34D` |
| Warning pressed | `Semantic colors/warning/pressed` | `#92400E` | `#D97706` |
| Warning background | `Semantic colors/warning/background` | `#FFFBEB` | `#451A03` |
| Success base | `Semantic colors/success/base` | `#2E8544` | `#43A85E` |
| Success hover | `Semantic colors/success/hover` | `#37A352` | `#55C473` |
| Success pressed | `Semantic colors/success/pressed` | `#256A37` | `#348A4B` |
| Success background | `Semantic colors/success/background` | `#E8F5EC` | `#1C3323` |
| Info base | `Semantic colors/info/base` | `#0288D1` | `#29B6F6` |
| Info hover | `Semantic colors/info/hover` | `#039BE5` | `#4FC3F7` |
| Info pressed | `Semantic colors/info/pressed` | `#0277BD` | `#0288D1` |
| Info background | `Semantic colors/info/background` | `#E1F5FE` | `#1A2A33` |

### Text

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Primary | `Text/default/primary` | `#212529` | `#E0E0E0` |
| Secondary | `Text/default/secondary` | `#495057` | `#A0A6AC` |
| Tertiary | `Text/default/tertiary` | `#868E96` | `#6C757D` |
| Disabled | `Text/default/disabled` | `#ADB5BD` | `#6C757D` |
| On primary | `Text/on-primary/base` | `#FFFFFF` | `#FFFFFF` |
| On error | `Text/on-color/on-error` | `#FFFFFF` | `#FFFFFF` |
| On success | `Text/on-color/on-success` | `#FFFFFF` | `#FFFFFF` |
| On warning | `Text/on-color/on-warning` | `#212529` | `#212529` |

### Background

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Base (순백) | `background_reference/base` | `#FFFFFF` | `#141416` |
| Page | `bg/base` | `#F8F9FA` | `#141416` |
| Section | `bg/section` | `#E9ECEF` | `#1E1E21` |
| Card | `bg/card` | `#FAF9FD` | `#252529` |
| Slot active | `bg/slot-active` | `#FFFFFF` | `#1E1E21` |
| Slot disabled | `bg/slot-disabled` | `#E9ECEF` | `#2D2D30` |
| Surface | `surface/primary` | `#FAF9FD` | `#1E1E21` |
| Surface hover | `surface/hover` | `#F5F4F8` | `#252529` |
| Surface pressed | `surface/pressed` | `#EFEEF3` | `#19191B` |
| Overlay scrim | `bg/overlay/scrim` | `rgba(0,0,0,0.50)` | `rgba(0,0,0,0.80)` |
| Overlay hover | `bg/overlay/hover` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.06)` |

### Border

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Base | `Border colors/border/base` | `#74777F` | `#2E3136` |
| Variant base | `Border colors/border-variant/base` | `#C4C6D0` | `#3A3C42` |
| Divider | `Border colors/border-variant/divider` | `#DFE0E4` | `#2A2C30` |
| Input control | `Border colors/border-variant/border-control` | `#868E96` | `#A0A6AC` |
| Disabled | `Border colors/border/disabled` | `#9A9DA6` | `#1C1E21` |

### Button

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Primary base | `button/primary/base` | `#135DB5` | `#62A8D9` |
| Primary hover | `button/primary/hover` | `#3D82D9` | `#8AC6E6` |
| Primary pressed | `button/primary/pressed` | `#0E4A94` | `#428AB5` |
| Primary disabled | `button/primary/disabled` | `#A8C4D9` | `#506B7D` |
| Seed base | `button/seed/base` | `#4681DB` | `#75A3E8` |
| Seed hover | `button/seed/hover` | `#5B91E1` | `#8DB3ED` |
| Seed pressed | `button/seed/pressed` | `#3671CD` | `#6293E3` |

### Gray 900 Scale

| 단계 | Light | Dark | 역할 |
|------|-------|------|------|
| 50 | `#FFFFFF` | `#141517` | 가장 밝은/어두운 표면 |
| 100 | `#F8F9FA` | `#1A1D20` | 페이지 배경 |
| 200 | `#E9ECEF` | `#212529` | 섹션 배경, 구분선 |
| 300 | `#DEE2E6` | `#343A40` | 미세 보더 |
| 400 | `#CED4DA` | `#495057` | 플레이스홀더 |
| 500 | `#ADB5BD` | `#6C757D` | 비활성 텍스트 |
| 600 | `#6C757D` | `#CED4DA` | 보조 텍스트 |
| 700 | `#495057` | `#DEE2E6` | 아이콘 스트로크 |
| 800 | `#343A40` | `#E9ECEF` | 강조 텍스트 |
| 900 | `#212529` | `#F8F9FA` | 본문 텍스트 |

### Primary 900 Scale

| 단계 | Light | Dark | 역할 |
|------|-------|------|------|
| 50 | `#EAF2FC` | `#E8F3FB` | 선택 행 배경 |
| 100 | `#D5E5F9` | `#D1E7F7` | Hover 배경 |
| 200 | `#ACCDF2` | `#B0D6F1` | 프로그레스 트랙 |
| 300 | `#82B5EB` | `#8EC4EB` | 보조 인터랙티브 |
| 400 | `#4A8CD0` | `#75B6E2` | 활성 탭 지시자 |
| 500 | `#135DB5` | `#62A8D9` | Primary interactive |
| 600 | `#104E99` | `#4E8BB5` | Primary dark |
| 700 | `#0C3E7D` | `#396D92` | 어두운 표면 강조 |
| 800 | `#092F61` | `#255070` | Deep primary |
| 900 | `#051F45` | `#14324D` | 가장 어두운 primary |

### Foreground (on surface)

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Primary | `Foreground/on surface/primary` | `#1A1A1A` | `#FFFFFF` |
| Secondary | `Foreground/on surface/secondary` | `#5F5F5F` | `#B3B3B3` |
| Tertiary | `Foreground/on surface/tertiary` | `#9A9A9A` | `#7A7A7A` |
| Disabled | `Foreground/on surface/disabled` | `#C2C2C2` | `#5A5A5A` |
| Inverse | `Foreground/on surface/inverse` | `#FFFFFF` | `#1A1A1A` |

### Loader

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Primary active | `Loader/primary/active` | `#4681DB` | `#4681DB` |
| Primary inactive | `Loader/primary/inactive` | `#E6E6E6` | `#2A2A2A` |
| Gray active | `Loader/gray/active` | `#A0A0A0` | `#5A5A5A` |

### Windows Title Bar

| 역할 | 토큰 경로 | Light | Dark |
|------|----------|-------|------|
| Background base | `Windows App title Bar/background/base` | `#FFFFFF` | `#141416` |
| Control hover | `Windows App title Bar/background/control/hover` | `#5B91E1` | `#152641` |
| Close hover | `Windows App title Bar/background/control/hover(close)` | `#E81123` | `#E81123` |
| Icon base | `Windows App title Bar/icon/base` | `#FFFFFF` | `#FFFFFF` |
| Text base | `Windows App title Bar/text/base` | `#FFFFFF` | `#FFFFFF` |

---

## 타이포그래피

### 폰트 패밀리

```
Primary: Inter, Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif
```

### 타입 스케일 (8단계 — 이 외 크기 금지)

| 역할 | 크기 | 굵기 | 행간 | 용도 |
|------|------|------|------|------|
| h1 (Page Title) | 28px | 700 | 42px | 페이지 제목, 화면당 1개 |
| h2 (Section Title) | 22px | 700 | 30px | 주요 섹션 제목 |
| h3 (Subsection) | 20px | 700 | 28px | 카드 제목, 하위 섹션 |
| h4 (Subtitle) | 18px | 700 | 26px | 다이얼로그 제목, 소제목 |
| bodyLg | 16px | 400 | 22px | 강조 본문, 리드 문단 |
| **bodyMd (기본)** | **14px** | **400** | **20px** | **테이블 셀, 라벨, 설명 — 기본값** |
| bodySm | 12px | 400 | 17px | 메타데이터, 타임스탬프 |
| caption | 10px | 400 | 14px | 캡션, 법적 문구 |

---

## 간격 시스템

기본 단위: **4px**. 모든 margin, padding, gap은 4px 배수여야 한다.

| 토큰 | 값 | 용도 |
|------|-----|------|
| space/0 | 0px | 간격 없음 |
| space/2 | 2px | 마이크로 조정 (예외적) |
| space/4 | 4px | 아이콘-텍스트 간격 |
| space/8 | 8px | 라벨-입력 간격 |
| space/12 | 12px | 그룹 내부 간격 |
| space/16 | 16px | 컴포넌트 내부 패딩, 리스트 간격 |
| space/20 | 20px | 폼 필드 간격 |
| space/24 | 24px | 섹션 간격, 모달 패딩 |
| space/32 | 32px | 카드 기본 패딩 |
| space/40 | 40px | 큰 섹션 구분 |
| space/48 | 48px | 주요 섹션 간격 |
| space/56 | 56px | 큰 수직 마진 |
| space/64 | 64px | 페이지 상하 마진 |
| space/80 | 80px | 히어로 간격 |
| space/96 | 96px | 최대 간격 토큰 |

---

## 보더 라디우스

| 토큰 | 값 | 용도 |
|------|-----|------|
| none | 0px | 테이블 셀, 타이틀 바 |
| sm | 4px | 버튼, 입력, 배지, 툴팁 |
| md | 8px | 카드, 패널, 드롭다운 |
| lg | 12px | 모달, 다이얼로그 |
| full | 9999px | 필, 원형 아바타 |

---

## 엘리베이션 / 그림자

| 레벨 | 값 | 용도 |
|------|-----|------|
| Flat (0) | 없음, border만 | 테이블, 카드, 리스트 |
| Subtle (1) | `0 1px 3px rgba(0,0,0,0.06)` | 드롭다운, 팝오버 |
| Card (2) | `0 2px 8px rgba(0,0,0,0.08)` | 높이감 있는 카드 |
| Modal (3) | `0 8px 32px rgba(0,0,0,0.16)` | 모달, 다이얼로그 |
| Overlay (4) | Scrim + Level 3 | 전체 화면 오버레이 |

Dark 모드에서 그림자는 덜 효과적이므로 surface 밝기 단계로 깊이 표현:
`#141416` → `#1E1E21` → `#252529` → `#2D2D30`

---

## 컴포넌트 규격

### 버튼

| 변형 | 배경 | 텍스트 | 보더 | 라디우스 | 패딩 |
|------|------|--------|------|----------|------|
| Primary | `#135DB5` | `#FFFFFF` | 없음 | 4px | 8px 16px |
| Seed | `#4681DB` | `#FFFFFF` | 없음 | 4px | 8px 16px |
| Secondary (Outline) | transparent | `#135DB5` | 1px solid `#135DB5` | 4px | 8px 16px |
| Tertiary (Ghost) | transparent | `#495057` | 없음 | 4px | 8px 16px |
| Danger | `#D42A34` | `#FFFFFF` | 없음 | 4px | 8px 16px |

크기: Small (4px 12px), **Medium (8px 16px)**, Large (12px 24px)

**상태별 변화:**
- Primary hover → `#3D82D9`, pressed → `#0E4A94`, disabled → `#A8C4D9` + 텍스트 60%
- Secondary hover → bg `#EBF2FA`, pressed → bg `#D5E5F9`
- Tertiary hover → bg `#F8F9FA`, pressed → bg `#E9ECEF`

### 입력 필드 (Input)

| 항목 | 값 |
|------|-----|
| 배경 | `#FFFFFF` (`bg/slot-active`) |
| 보더 | 1px solid `#C4C6D0` (`border-variant/base`) |
| 라디우스 | 4px |
| 수평 패딩 | 12px |
| 플레이스홀더 | `#868E96` (`Text/default/tertiary`) |
| 입력 텍스트 | `#495057` (`Text/default/secondary`) |
| 포커스 | 2px solid `#135DB5` (box-shadow 없음) |
| 비활성 | bg `#E9ECEF`, border `#C4C6D0`, text `#ADB5BD` |

크기: Small (12px, 26px높이), Medium (14px, 30px), Large (16px, 45px)

### 카드

| 항목 | 값 |
|------|-----|
| 배경 | `#FAF9FD` (`bg/card`) |
| 보더 | 1px solid `#DFE0E4` (`border-variant/divider`) |
| 라디우스 | 8px |
| 패딩 | 24px (기본), 16px (compact) |
| 내부 간격 | 16px |
| 카드 간 간격 | 16px |

### 테이블

| 항목 | 값 |
|------|-----|
| 헤더 배경 | `#F8F9FA` (`gray/100`) |
| 헤더 텍스트 | `#212529` bold 14px (**절대 연한 회색 금지**) |
| 바디 배경 | `#FFFFFF` |
| 행 높이 | 최소 44px |
| 셀 패딩 | 12px 16px |
| 행 보더 | bottom 1px solid `#DFE0E4` |
| Hover 행 | bg `#EBF2FA` (`primary/subtle`) |
| 선택 행 | bg `#D5E5F9` (`primary/100`) + 좌측 3px solid `#135DB5` |

### 모달 / 다이얼로그

| 항목 | 값 |
|------|-----|
| Scrim | `rgba(0,0,0,0.50)` (Dark: `rgba(0,0,0,0.80)`) |
| 컨테이너 배경 | `#FFFFFF` |
| 라디우스 | 12px |
| 그림자 | `0 8px 32px rgba(0,0,0,0.16)` |
| 패딩 | 24px |
| 헤더 | 18px bold, bottom border 1px solid `#DFE0E4` |
| 헤더→콘텐츠 간격 | 16px |
| 콘텐츠→액션 간격 | 24px |
| 액션 정렬 | 우측, 버튼 간격 8px |
| 최대 폭 | 560px (standard), 720px (wide), 400px (compact) |

### 사이드 내비게이션

| 항목 | 값 |
|------|-----|
| 폭 | 240px 펼침 / 56px 접힘 |
| 배경 | `#FFFFFF` (Dark: `#141416`) |
| 메뉴 아이템 높이 | 40px |
| 메뉴 아이템 패딩 | 8px 12px |
| 활성 아이템 | bg `#EBF2FA`, text `#135DB5`, 좌측 3px solid `#135DB5` |
| Hover | bg `#F8F9FA` |
| 아이콘 크기 | 24px, 기본 `#495057` / 활성 `#135DB5` |
| 섹션 구분 | 16px 수직 간격 + 1px solid `#DFE0E4` |

### 상태 배지

| 변형 | 배경 | 텍스트 | 용도 |
|------|------|--------|------|
| Success | `#E8F5EC` | `#2E8544` | 완료, 온라인, 활성 |
| Warning | `#FFFBEB` | `#D97706` | 대기, 주의, 만료 예정 |
| Error | `#FCEBED` | `#D42A34` | 실패, 오프라인, 심각 |
| Info | `#E1F5FE` | `#0288D1` | 처리 중, 진행 중 |
| Neutral | `#F8F9FA` | `#495057` | 초안, 알 수 없음 |

공통: padding 2px 8px, radius 4px, 12px weight 600

### 툴팁

배경 `#212529`, 텍스트 `#FFFFFF` 12px, padding 4px 8px, radius 4px, max-width 240px

---

## 아이콘 시스템

- 스타일: 모노라인 아웃라인 SVG
- 크기: 16px / 24px / 32px
- 기본 스트로크: `#495057` (`tertiary/base`)
- 활성 스트로크: `#4681DB` (`seed`) 또는 `#135DB5` (`primary/base`)
- 반드시 텍스트 라벨과 함께 사용

---

## 포커스 표시자

- 키보드 포커스: `0 0 0 2px #FFFFFF, 0 0 0 4px #135DB5` (이중 링)
- 모든 인터랙티브 요소에 필수

---

## 해상도 적응

| 이름 | 해상도 | Content Area 폭 |
|------|--------|-----------------|
| 최소 | 1280×720 | 1040px (nav 펼침) |
| 표준 (FHD) | 1920×1080 | 1680px (nav 펼침) |
| 고해상도 | 2560×1440+ | 2320px+ |

Windows 앱은 반응형 브레이크포인트 없음. 웹 앱은 필요 시 확장 가능. 기본 적응 방식:
- 네비게이션 토글 (240px ↔ 56px)
- 테이블 가로 스크롤
- 대시보드 그리드 열 축소 (4 → 3 → 2), gap 16px 유지

---

## CSS 변수 사용법

```css
/* tokens.css import 후 */
:root { /* Light 모드 변수 */ }
[data-theme="dark"] { /* Dark 모드 변수 */ }
```

주요 변수 접두사: `--gmd-`

```
--gmd-primary-base, --gmd-seed
--gmd-text-primary, --gmd-text-secondary, --gmd-text-tertiary
--gmd-bg-base, --gmd-bg-card, --gmd-bg-section
--gmd-border-variant, --gmd-border-divider, --gmd-border-control
--gmd-btn-primary-base, --gmd-btn-seed-base
--gmd-error-base, --gmd-success-base, --gmd-warning-base, --gmd-info-base
--gmd-shadow-sm, --gmd-shadow-md, --gmd-shadow-lg
--gmd-space-1 ~ --gmd-space-16
--gmd-radius-sm, --gmd-radius-md, --gmd-radius-lg
```

---

## Do / Don't 요약

**DO:**
- 색상은 토큰 경로 + HEX 쌍으로 표기
- 8개 폰트 크기만 사용
- 4px 간격 그리드 절대 준수
- 인터랙티브 요소 4종 상태 정의
- 상태 표현에 색상 + 텍스트 병행
- WCAG AA 대비(4.5:1) 유지
- 테이블 행 최소 44px
- 모달은 반드시 scrim + 12px radius + 24px padding

**DON'T:**
- 토큰 외 색상 사용
- 허용 외 폰트 크기 (13, 15, 24, 36px 등)
- 400/700 외 폰트 굵기
- 양수 letter-spacing
- 플랫 요소에 그림자 추가
- 그라디언트 배경/버튼
- 이모지
- 색상 단독 상태 표현
- 4px 배수 아닌 간격 (5, 7, 10, 15px)
- 본문 텍스트 중앙 정렬 (다이얼로그 제목 제외)
- 테이블 헤더 텍스트를 `#212529`보다 연하게
