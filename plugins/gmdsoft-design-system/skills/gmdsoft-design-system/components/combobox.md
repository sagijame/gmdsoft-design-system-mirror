# Combobox (콤보박스)

> 출처: index.html `#combobox` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 정해진 목록에서 하나 또는 여럿을 골라 넣는 컨트롤.
- 평소엔 닫혀 있다가 누르면 드롭다운(`listbox`)이 펼쳐진다.
- 선택지가 많으면 검색(Search) 유형, 여러 개 고르면 체크박스(Checkbox) 유형을 붙인다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Line | 기본 트리거. 라벨 + chevron | `c-combobox-trigger` |
| Icon | 텍스트 앞 lead 아이콘(16px search SVG) | `c-combobox-leadicon`, 색 `var(--gmd-text-tertiary)` |
| Checkbox | 다중 선택형 | 옵션에 체크박스 부착 |
| Search | 메뉴 상단 검색 입력 포함 | `c-combobox-search` 입력 박스 (placeholder "Search...") |

- 트리거 기본: 배경 `var(--gmd-surface-base)`, 1px `var(--gmd-border-base)` 테두리, `var(--gmd-radius-sm)`, padding `var(--gmd-space-2x) var(--gmd-space-3)`, 폰트 `var(--gmd-font-size-14)`, 라벨색 `var(--gmd-text-secondary)`. `aria-haspopup="listbox"`.
- chevron: `var(--gmd-text-tertiary)`, 펼침 시 `rotate(180deg)`.

## 크기 (Sizes)
| 크기 | 클래스 | 규칙 |
|---|---|---|
| Medium | (기본) | padding `var(--gmd-space-2x) var(--gmd-space-3)`, `var(--gmd-font-size-14)` |
| Small | `c-combobox-sm` | padding `var(--gmd-space-1) var(--gmd-space-2x)`, `var(--gmd-font-size-12)` |

## 상태 (States)
트리거 상태:

| 상태 | 규칙 / 토큰 |
|---|---|
| Default (base) | 테두리 `var(--gmd-border-base)` |
| Hover | 테두리 `var(--gmd-primary-default)` |
| Open/Focus (`c-combobox-open`, `aria-expanded="true"`) | 테두리 `var(--gmd-primary-default)` + `box-shadow:0 0 0 3px var(--gmd-primary-subtle)`, chevron 180° 회전 |

옵션 항목 상태 (`c-combobox-statebox` / `c-combobox-option`):

| 상태 | 규칙 / 토큰 |
|---|---|
| Default (`is-default`) | 텍스트 `var(--gmd-text-primary)` |
| Hover (`is-hover`) | 배경 `var(--gmd-surface-hover)` |
| Selected (`is-selected`, `aria-selected="true"`) | 텍스트 `var(--gmd-primary-default)`, `var(--gmd-weight-bold)`. statebox는 추가로 `border-left:2px solid var(--gmd-primary-default)` |
| Disabled (`is-disabled`, `aria-disabled="true"`) | 텍스트 `var(--gmd-text-disabled)`, `cursor:not-allowed` |

## Anatomy (구성 요소)
1. Trigger — 닫힌 상태의 입력 표면. 선택값·placeholder·focus ring을 담는다.
2. Lead icon — 검색형의 16px search SVG. 텍스트 앞 고정 배치.
3. Menu — 옵션 목록 표면. trigger와 같은 폭(`var(--c-combobox-width)`)으로 열어 소속감 유지. 배경 `var(--gmd-surface-base)`, 1px `var(--gmd-border-base)`, `var(--gmd-radius-sm)`, `box-shadow:var(--gmd-shadow-lift)`, `margin-top:var(--gmd-space-1)`.
4. Chevron — 열림·닫힘 방향 보조 아이콘. 선택값보다 낮은 시각 우선순위.

## 조합 예시 (Composition)
- Search · Open: 메뉴 최상단에 검색 입력(`c-combobox-search`, 16px search 아이콘 + input) 후 옵션 `listbox` 나열.
- 옵션 항목: padding `var(--gmd-space-2x) var(--gmd-space-3)`, gap `var(--gmd-space-2x)`, `var(--gmd-font-size-14)`.

## 주의 / 하드 규칙
- HEX 발명 금지 — 색은 위 토큰만 사용. (참고 Light: primary-default ≈ #135DB5, primary-subtle #EBF2FA)
- 메뉴 폭은 트리거 폭(`--c-combobox-width`)과 동일하게 맞춘다.
- 접근성: 트리거 `aria-haspopup="listbox"`+`aria-expanded`, 옵션 `role="option"`+`aria-selected`, 비활성 `aria-disabled="true"`.
