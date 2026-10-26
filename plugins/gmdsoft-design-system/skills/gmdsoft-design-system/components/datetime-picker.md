# Date&Time Picker (날짜·시간 선택기)

> 출처: index.html `#datetime` (Figma v2.12 / MD-UX Docs 미러, 기간 선택은 classic v2.13.3 · Figma `Component / Date&Time Picker Range (개선안)` UIR-019). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 날짜·시간을 고르는 컨트롤.
- 필드를 누르면 달력이 떠 연·월을 넘기며 고르고, 필요하면 시간까지 잡는다.
- 직접 입력도 되고 달력에서 골라도 된다. 입력은 칸별 마스크로 형식 오류를 막고, 달력은 입력한 값을 눈으로 확인하게 한다.
- 시작일과 종료일을 함께 고를 때는 기간 선택(Date Range)을 쓴다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Input Field | 입력 시작점(`c-datetime-field`) | 240×40px, 1px `var(--gmd-border-base)`, `var(--gmd-radius-md)`, 캘린더 16px 아이콘 |
| Date Picker | 날짜 격자 카드(`c-datetime-card`, `role="dialog"`) | 7열 요일 격자, 각 날짜 셀 28px 원형 |
| Year / Month | 연·월 격자(`c-datetime-ymgrid`) | 4열 그리드, 연도 24개 범위(예 2016–2039) / 월 12칸 |
| Date & Time | 날짜+시간 탭(`c-datetime-headtabs`) | 캘린더 탭 + 시계 탭(`aria-selected`) 전환 |
| Hour / Minutes | 시계 다이얼(`c-datetime-clock`) | 시 12칸·분 5분 단위 12칸, 바늘(`c-datetime-chand`) + 중심점 |
| Date Range | 기간 선택(`c-datetime-field.is-range`, `c-datetime-grid.is-range`) | 필드 280px에 시작·종료 두 칸. 시작·종료일 primary 원 + 사이 날짜 `var(--gmd-primary-subtle)` 띠. 데스크톱 기본은 두 달 보기(달 264px) + 빠른 기간(`c-datetime-presets`) |

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

## 기간 선택 (Date Range)
직접 입력이 기본이고 달력은 확인·보조다.

입력 필드(`c-datetime-field.is-range`):

| 상태 | 규칙 / 토큰 |
|---|---|
| Default | 두 칸(`c-datetime-seg`) placeholder `Start date` – `End date`, `var(--gmd-text-tertiary)` |
| Focused | 지금 고르는 칸 `is-active` — 밑줄 2px `var(--gmd-primary-default)` |
| Typing | 친 자리는 `var(--gmd-text-primary)`, 남은 자리 `c-datetime-mask`(예 `20/06/YYYY`)는 `var(--gmd-text-tertiary)` |
| Filled | 두 칸 모두 `var(--gmd-text-primary)` |
| Error (`is-error`, `aria-invalid="true"`) | 테두리 `var(--gmd-semantic-error)`, 포커스 링 `var(--gmd-semantic-error-bg)`. 필드 아래 `c-datetime-help.is-error`에 이유 + 고칠 방법 (`aria-describedby`로 연결) |

날짜 칸(`c-datetime-grid.is-range .c-datetime-day`):

| 상태 | 규칙 / 토큰 |
|---|---|
| Range start / end (`is-range-start`·`is-range-end`, `aria-selected="true"`) | 28px 원 `var(--gmd-primary-default)` + 글자 `var(--gmd-text-on-primary-fill)` Bold, 안쪽 반쪽 띠 `var(--gmd-primary-subtle)` |
| Single day (start = end) | 원만, 띠 없음 |
| In range (`is-in-range`) | 띠 `var(--gmd-primary-subtle)`, 글자 `var(--gmd-text-on-primary-subtle)`. hover 시 원 테두리 1px primary |
| Preview (`is-preview`, `is-preview-end`) | 종료일을 고르는 동안 마우스를 올린 날까지 띠 `var(--gmd-surface-pressed)`, 끝 칸 원 테두리 1px primary |
| Disabled (최대 기간 초과) | 원 `var(--gmd-background-section)`, 글자 `var(--gmd-text-disabled)` + 달력 아래 `c-datetime-hint`에 이유 |
| Blank (`is-blank`, 두 달 보기의 앞뒤 달) | 숨김 |

빠른 기간(`c-datetime-preset`): 높이 28px, `var(--gmd-radius-sm)`. hover `var(--gmd-surface-hover)` · pressed `var(--gmd-surface-pressed)` · 선택 `aria-pressed="true"` = `var(--gmd-primary-subtle)` + `var(--gmd-text-on-primary-subtle)` Bold · disabled `var(--gmd-text-disabled)`. 날짜를 직접 바꾸면 선택을 해제한다.

동작:
- 입력은 연·월·일 칸 마스크로 숫자만 받는다. 시작일을 다 치면 종료일로 넘어가고 달력도 그 달로 따라간다.
- 입력과 달력은 늘 같은 값을 보여준다.
- 달력에서 두 날짜를 누르면 기간이 된다. 먼저 누른 날이 뒤면 앞뒤를 바꿔 잡는다.
- 직접 입력한 값은 바꾸지 않는다. 종료일이 앞서거나 없는 날짜면 Error 상태로 이유를 적는다.
- 종료일을 고르기 전엔 OK를 막고(`disabled`), 헤더(eyebrow "SELECT RANGE")에 지금 고를 차례를 글로 보여준다(예 "Pick an end date").
- 폭이 좁으면 한 달 보기 + 빠른 기간 없이 쓴다.

## Anatomy (구성 요소)
1. Field — 입력 시작점. 날짜 값·placeholder·캘린더 아이콘을 한 줄로 정렬. 직접 입력할 수 있다.
2. Header — 선택 모드(eyebrow "SELECT DATE")와 현재 선택값(`c-datetime-headtitle`, 예 "Tue, Jun 27") 요약.
3. Calendar / Clock body — 날짜 격자(`c-datetime-grid`) 또는 시간 다이얼(`c-datetime-clock`). 선택 가능한 단위만 노출.
4. Actions — CLEAR / CANCEL / OK 확정 동작. 패널 하단 고정.
5. Presets (기간 선택) — 자주 쓰는 구간(Today, Last 7 days 등) 목록. 두 달 보기에만 둔다.

## 조합 예시 (Composition)
- Form field + 달력 카드: 입력 필드(`is-filled`, 22/06/2023)와 날짜 카드를 나란히. 그리드 컬럼 `minmax(220px,260px) minmax(280px,320px)`, gap `var(--gmd-space-6)`.
- 월 이동 바(`c-datetime-monthbar`): 월 선택 버튼("June 2023" + 드롭 chevron) + 이전/다음 아이콘 버튼(`c-datetime-iconbtn`, `aria-label` "이전 달"/"다음 달").
- 액션 행: CLEAR는 왼쪽, CANCEL·OK는 오른쪽(`c-datetime-actright`). 버튼 `c-datetime-actbtn`은 텍스트형 — 색 `var(--gmd-primary-default)`, `var(--gmd-font-size-12)`, `var(--gmd-weight-bold)`, letter-spacing 0.04em. hover `var(--gmd-surface-hover)` · pressed `var(--gmd-surface-pressed)` · disabled `var(--gmd-text-disabled)`.
- 기간 선택 카드(`c-datetime-card.is-range`): 헤더 → 본문(`c-datetime-rbody` = 빠른 기간 + `c-datetime-months`) → 액션. 두 달 보기 월 막대는 `c-datetime-monthbar.is-split`(이전 달 버튼 왼쪽 달, 다음 달 버튼 오른쪽 달).

## 주의 / 하드 규칙
- HEX 발명 금지 — 색은 위 토큰만 사용. (참고 Light: primary-default ≈ #135DB5, border-base #74777F)
- 날짜 셀은 28px 원형 고정. 인접 월(mute)·비활성(disabled) 날짜는 클릭 불가.
- 기간 격자는 가로 간격 0(`column-gap:0`) — 간격을 주면 띠가 끊긴다. 주의 첫·끝 칸에서 띠 끝을 둥글게 닫는다.
- 시작·종료를 색만으로 구분하지 않는다. 헤더에 날짜를 글로 보여준다.
- 시간 다이얼 위치값(`left`/`top` %)은 데모 좌표이며 토큰이 아님 — 발명 금지.
- 접근성: 카드 `role="dialog"`+`aria-label`, 시계 `role="group"`, 탭/요일 적절한 `aria-label`·`aria-selected` 부여.
