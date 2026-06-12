# Card (카드)

> 출처: index.html `#card` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 성격이 비슷한 정보와 동작을 한 덩어리로 묶는 컨테이너.
- 제목이 그 카드가 무엇인지 분명히 드러내야 여러 장이 늘어서도 서로 구분된다.

## 변형 (Variants / Types)
스타일 3종.

| 변형 | 클래스 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|---|
| Default | `card` | 기본 면 채움 | 배경 var(--gmd-background-card) |
| Outline | `card card-outline` | 경계 강조 | +1px 보더 var(--gmd-divider) |
| Elevated | `card card-elevated` | 부양·단일 강조 | +그림자 var(--gmd-shadow-soft) |

## 상태 (States)
3 Style × 4 State = 12 조합.

| 상태 | 클래스 | 규칙 / 토큰 |
|---|---|---|
| Default (base) | `card …` | 기본 표면 |
| Hover | `is-hover` | 표면 톤 `surface-hover` |
| Pressed | (표면 톤) | `surface-pressed` |
| Focused (focus) | `is-focus` | primary 보더 + subtle ring |

## Anatomy (구성 요소)
1. Eyebrow — 카테고리 라벨. text/secondary 톤으로 카드 성격을 먼저 알려 준다.
2. Title — 카드 제목. Bold 16px, text/primary로 카드 목적을 명확히 드러낸다.
3. Body — 본문 설명. Regular 14px, text/secondary로 요약 정보 제공.
4. Action — 후속 동작. 디자인 시스템 Button(Text·Primary) 인스턴스를 재사용(`card-action`).

## 조합 예시 (Composition)
- 2-card row: `card card-outline` 두 장을 `flex:1`로 가로 나열, 간격 var(--gmd-space-4). (예: 가이드/빠른 시작, 공지/업데이트 소식)
- Elevated single: `card card-elevated` 한 장을 폭 100%로 단일 강조(예: FEATURED / 새 분석 대시보드).
- 스타일 미리보기 행 간격은 var(--gmd-space-6), `align-items:stretch`로 높이 정렬.

## 주의 / 하드 규칙
- Action은 새 버튼을 만들지 말고 Button 컴포넌트(Text·Primary)를 재사용한다.
- 제목(Title)은 카드 식별의 핵심 — 반드시 명확하게.
- 스타일은 누적: Outline = Default + 보더, Elevated = Default + 그림자.
