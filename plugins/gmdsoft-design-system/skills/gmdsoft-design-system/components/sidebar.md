# Sidebar / Ribbon Navigation (사이드바 · 리본 내비게이션)

> 출처: index.html `#ribbon-nav` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 제품의 주요 영역으로 옮겨 다니는 주 내비게이션(사이드바).
- 아이콘·라벨·뱃지·하위메뉴로 짜이고, 활성 표시(`is-active`/`aria-current`)로 지금 위치를 늘 알려준다.
- MD-VIDEO / MD-SCANNER / MD-PLATFORM 앱 셸의 좌측 내비게이션.

## 앱 셸 치수 (Shell Dimensions)
- 확장(expanded) 사이드바 너비: 240px.
- 축소(collapsed) 사이드바 너비: 56px.
- (참고: 타이틀바 32px, 4px 그리드는 전역 레이아웃 규칙.)

## 유형 (Type)
항목(`c-ribbon-nav-item`) 구성 요소 조합.

| 유형 | 클래스 / 마크업 | 용도 |
|---|---|---|
| Text Only | 라벨 + chevron | 아이콘 없는 텍스트 항목 |
| Plain (Icon) | `c-ribbon-nav-ico` + 라벨 + chevron | 아이콘이 붙은 기본 항목 |
| Badge | `c-ribbon-nav-badge` (예: `aria-label="1개 알림"`) | 새 알림 개수 표시 |
| Chevron | `c-ribbon-nav-chev` | 하위 메뉴 펼침 표시(`aria-expanded`) |

## 크기 (Sizes)
| 크기 | 클래스 | 행 높이 | 아이콘 | 라벨 |
|---|---|---|---|---|
| md (기본) | `c-ribbon-nav-item` | 50px | 24px | 16px |
| sm | `is-sm` | 42px | 16px | 14px |

- 높이·아이콘은 Figma Sidebar Size 정합. 라벨만 밀도 우선으로 축소(Figma 20px deviation → 16px).

## 상태 (States)
| 상태 | 클래스 / 속성 | 규칙 / 토큰 |
|---|---|---|
| Default (base) | `c-ribbon-nav-item` | 기본 배경 |
| Hover | (배경 전환) | 배경 var(--gmd-surface-hover), 텍스트 var(--gmd-text-primary) |
| Active (선택) | `is-active` + `aria-current="page"` | 활성 강조 배경/텍스트 |
| Nested | `is-nested` | 하위(중첩) 항목 표시 |
| Expanded | `aria-expanded="true"` | chevron이 위 방향(펼침)으로 전환 |

- Pressed 상태 없음(이 컴포넌트는 base/hover/active/disabled 중심, Figma상 Pressed 미정의).

## Anatomy (구성 요소)
1. Item container — 행 전체 클릭 영역. 50px 기본 높이, hover/active 배경 레이어 담당.
2. Icon — `c-ribbon-nav-ico`. 빠른 스캔용 16/24px 보조 신호, 라벨보다 먼저 배치.
3. Label — `c-ribbon-nav-label`. 주 내비게이션 텍스트. 긴 항목은 줄바꿈 없이 말줄임으로 행 높이 고정.
4. Meta — `c-ribbon-nav-badge`(알림) 또는 `c-ribbon-nav-chev`(하위 메뉴). 우측 끝에서 보조.

## 조합 예시 (Composition)
- 메뉴 스택: `nav.c-ribbon-nav-stack`(`aria-label="사이드 메뉴"`) 안에 `c-ribbon-nav-item` 여러 개. 선택 항목은 `is-active` + `aria-current="page"`, 중첩은 `is-nested`.
- 본문 영역(`c-ribbon-nav-surface`)과 좌우로 배치해 앱 셸을 구성.

## 주의 / 하드 규칙
- 사이드바 너비: 확장 240px / 축소 56px (고정).
- 항목 높이는 md 50px(아이콘 24·라벨 16px) 또는 sm 42px(아이콘 16·라벨 14px) 두 단계만.
- 라벨은 밀도 우선 16px(Figma 20px에서 deviation). 라벨은 말줄임 처리, 줄바꿈 금지(행 높이 고정).
- 활성 항목은 `is-active`와 `aria-current="page"`를 함께 둔다.
- Pressed 상태는 정의하지 않는다.
- 아이콘은 항상 라벨보다 앞(좌측)에 배치.
