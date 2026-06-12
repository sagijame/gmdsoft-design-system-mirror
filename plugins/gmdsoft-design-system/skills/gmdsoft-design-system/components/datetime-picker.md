# Date&Time Picker (날짜·시간 선택기)

> 출처: index.html `#datetime` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 날짜·시간을 고르는 컨트롤.
- 필드를 누르면 달력이 떠 연·월을 넘기며 고르고, 필요하면 시간까지 잡는다.
- 직접 타이핑 대신 골라서 형식 오류를 막는다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Input Field | 입력 시작점(`c-datetime-field`) | 240×40px, 1px `var(--gmd-border-base)`, `var(--gmd-radius-md)`, 캘린더 16px 아이콘 |
| Date Picker | 날짜 격자 카드(`c-datetime-card`, `role="dialog"`) | 7열 요일 격자, 각 날짜 셀 28px 원형 |
| Year / Month | 연·월 격자(`c-datetime-ymgrid`) | 4열 그리드, 연도 24개 범위(예 2016–2039) / 월 12칸 |
| Date & Time | 날짜+시간 탭(`c-datetime-headtabs`) | 캘린더 탭 + 시계 탭(`aria-selected`) 전환 |
| Hour / Minutes | 시계 다이얼(`c-datetime-clock`) | 시 12칸·분 5분 단위 12칸, 바늘(`c-datetime-chand`) + 중심점 |

## 상태 (States)
입력 필드(`c-datetime-field`):

| 상태 | 규칙 / 토큰 |
|---|---|
| Default (base) | 테두리 `var(--gmd-border-base)`, 텍스트 `var(--gmd-text-tertiary)`(placeholder) |
| Hover (`is-hover`) | 테두리 `var(--gmd-text-tertiary)`, 배경 `var(--gmd-surface-hover)` |
| Focused (`is-focused`) | 테두리 `var(--gmd-primary-default)` + `box-shadow:0 0 0 3px var(--gmd-primary-subtle)`. 떠오르는 라벨(`c-datetime-floatlabel`) `var(--gmd-font-size-10)`·`var(--gmd-primary-default)`, 아이콘 `var(--gmd-primary-default)` |
| Filled (`is-filled`) | 텍스트 `var(--gmd-text-primary)` (예: `22/06/2023`) |

날짜 셀(`c-datetime-day`):

| 상태 | 규칙 / 토큰 |
|---|---|
| Default | 28px 원형, 텍스트 `var(--gmd-text-primary)` |
| Hover | 배경 `var(--gmd-surface-hover)` |
| Today (`is-today`, `aria-current="date"`) | 1px `var(--gmd-border-base)` 테두리 |
| Selected (`is-selected`, `aria-selected="true"`) | 배경 `var(--gmd-primary-default)`, 텍스트 `var(--gmd-text-on-primary)`(#FFFFFF) |
| Muted (`is-mute`, 인접 월) | 텍스트 `var(--gmd-text-disabled)` |
| Disabled (`is-disabled`, `aria-disabled="true"`) | 텍스트 `var(--gmd-text-disabled)`, 배경 `var(--gmd-background-section)`, `pointer-events:none` |

연·월 셀 현재값: `is-current`(`aria-current="true"`).

## Anatomy (구성 요소)
1. Field — 입력 시작점. 날짜 값·placeholder·캘린더 아이콘을 한 줄로 정렬.
2. Header — 선택 모드(eyebrow "SELECT DATE")와 현재 선택값(`c-datetime-headtitle`, 예 "Tue, Jun 27") 요약.
3. Calendar / Clock body — 날짜 격자(`c-datetime-grid`) 또는 시간 다이얼(`c-datetime-clock`). 선택 가능한 단위만 노출.
4. Actions — CLEAR / CANCEL / OK 확정 동작. 패널 하단 고정.

## 조합 예시 (Composition)
- Form field + 달력 카드: 입력 필드(`is-filled`, 22/06/2023)와 날짜 카드를 나란히. 그리드 컬럼 `minmax(220px,260px) minmax(280px,320px)`, gap `var(--gmd-space-6)`.
- 월 이동 바(`c-datetime-monthbar`): 월 선택 버튼("June 2023" + 드롭 chevron) + 이전/다음 아이콘 버튼(`c-datetime-iconbtn`, `aria-label` "이전 달"/"다음 달").
- 액션 행: CLEAR는 왼쪽, CANCEL·OK는 오른쪽(`c-datetime-actright`). 버튼 `c-datetime-actbtn`은 텍스트형 — 색 `var(--gmd-primary-default)`, `var(--gmd-font-size-12)`, `var(--gmd-weight-bold)`, letter-spacing 0.04em.

## 주의 / 하드 규칙
- HEX 발명 금지 — 색은 위 토큰만 사용. (참고 Light: primary-default ≈ #135DB5, border-base #74777F)
- 날짜 셀은 28px 원형 고정. 인접 월(mute)·비활성(disabled) 날짜는 클릭 불가.
- 시간 다이얼 위치값(`left`/`top` %)은 데모 좌표이며 토큰이 아님 — 발명 금지.
- 접근성: 카드 `role="dialog"`+`aria-label`, 시계 `role="group"`, 탭/요일 적절한 `aria-label`·`aria-selected` 부여.
