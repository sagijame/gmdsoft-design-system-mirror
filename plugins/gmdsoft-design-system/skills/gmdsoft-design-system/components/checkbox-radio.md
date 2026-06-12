# Checkbox & Radio (체크박스 & 라디오)

> 출처: index.html `#checkbox-radio` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 여러 선택지에서 고르는 컨트롤.
- 체크박스: 여러 개(0개 포함)를 자유 다중 선택.
- 라디오: 한 묶음에서 딱 하나만(배타적) 선택.
- 배타적이면 라디오, 자유 다중이면 체크박스.

## 변형 (Variants / Types)
| 변형 | 클래스 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|---|
| Checkbox | `c-checkbox-radio-box` | 사각형 컨트롤, 다중 선택 | 1.5px `var(--gmd-border-base)` 테두리, `var(--gmd-radius-sm)`, 배경 `var(--gmd-surface-base)`. `role="checkbox"` |
| Radio | `c-checkbox-radio-dot` | 원형 컨트롤, 단일 선택 | 동일 18px·1.5px 테두리, `border-radius:50%`. 내부 점 8px. `role="radio"` |
| With Label | `c-checkbox-radio-labelled` | 컨트롤 + 제목 + 보조설명 | `<label>`로 감싸 클릭 영역 확대. 컨트롤 `margin-top:var(--gmd-space-2)`로 텍스트 첫 줄과 정렬 |

- 체크박스 indicator: checked = 체크 SVG, indeterminate = 마이너스 SVG (`is-indeterminate`, `aria-checked="mixed"`). 둘 다 `opacity:1`로 노출.

## 크기 (Sizes)
md(18px)가 기본. 크기 변경 시 `is-sm` / `is-lg` 추가.

| 크기 | 클래스 | 치수 | 비고 |
|---|---|---|---|
| sm | `is-sm` | 16×16px | 조밀 영역 |
| md | (기본) | 18×18px | 기본값 |
| lg | `is-lg` | 22×22px | 라디오 내부 점 8px → 10px |

## 상태 (States)
| 상태 | 규칙 / 토큰 |
|---|---|
| Default (base) | 테두리 `var(--gmd-border-base)`, 배경 `var(--gmd-surface-base)` |
| Hover (`is-hover`) | 테두리 `var(--gmd-primary-hover)` |
| Checked/Selected (`is-checked`) | 체크박스: 배경·테두리 `var(--gmd-primary-default)`, 체크 SVG `var(--gmd-text-on-primary)`(#FFFFFF). 라디오: 테두리 `var(--gmd-primary-default)`, 내부 점 표시(scale 1) |
| Indeterminate (`is-indeterminate`, 체크박스 한정) | 배경·테두리 `var(--gmd-primary-default)`, 마이너스 SVG 노출 |
| Disabled (`is-disabled`) | 배경 `var(--gmd-primary-disabled)`, 테두리 `var(--gmd-border-subtle)`. 라디오 점은 `var(--gmd-text-disabled)`. `aria-disabled="true"` |

## Anatomy (구성 요소)
1. Control — 체크박스 사각형 또는 라디오 원형. 선택·부분 선택·비활성 상태를 직접 표현.
2. Indicator — 체크·마이너스·내부 점. 상태가 바뀌는 핵심 시각 요소.
3. Label — 선택 대상 이름. 클릭 영역(`<label>`)에 포함해 사용성 확보.
4. Helper text — 선택 결과·조건 보조 설명(`c-checkbox-radio-body`). 긴 문장은 그룹 설명으로 분리.

## 조합 예시 (Composition)
- 라벨 포함: `c-checkbox-radio-heading`(제목) + `c-checkbox-radio-body`(보조설명) 2줄 구조. 예: "Remember Me" / "Save my login details for next time."
- 목록(`c-checkbox-radio-list`): 항목(`c-checkbox-radio-item`)을 세로 스택. 각 항목 컨트롤은 `margin-top:var(--gmd-space-2)`.

## 주의 / 하드 규칙
- HEX 발명 금지 — 색은 위 토큰만 사용. (참고 Light: primary-default ≈ #135DB5, primary-hover #3D82D9, border-base #74777F)
- indeterminate는 체크박스에만 존재. 라디오엔 없음.
- 테두리 두께 1.5px 고정.
- 접근성: 체크박스 `role="checkbox"`+`aria-checked`(true/false/mixed), 라디오 `role="radio"`+`aria-checked`, 비활성 `aria-disabled="true"`.
