# Slider (슬라이더)

> 출처: index.html `#slider` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 범위 안에서 값을 끌어 정하는 컨트롤. 손잡이(thumb)를 움직여 맞춘다.
- 정확한 수치보다 대략적인 양·세기를 직관적으로 다룰 때 적합.
- 프리셋 단계가 중요하면 Ticks, 수직 배치는 Vertical, 구간 선택은 Range 변형 사용.

## 변형 (Variants / Types)
| 변형 | 클래스 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|---|
| Single (기본) | `c-slider` | 단일 thumb로 값 하나 선택 | Fill을 var(--gmd-primary-default) 계열로 채움 |
| Ticks | `c-slider-ticks` + `c-slider-tick` | 단계 값(예: 0/25/50/75/100%) 표시 | 프리셋 단계가 중요한 경우에만 노출 |
| Range | `c-slider-range-fill` + thumb 2개 | 양쪽 thumb로 구간 선택 | `left`/`right`로 채움 구간 지정 |
| Vertical | `c-slider-vert` / `c-slider-vfill` / `c-slider-vthumb` | 수직 배치 | `aria-orientation="vertical"`, 채움은 `height`·thumb는 `bottom` |

## 값 (Value)
- 트랙 채움(`c-slider-fill`)의 `width:N%`로 현재 값을 표현(예: 20/40/60/80/100%).
- `role="slider"` + `aria-valuemin`/`aria-valuemax`/`aria-valuenow`로 값 상태 노출.
- Value label(`c-slider-label`)로 숫자 보조 표시. 폼·설정에서는 tabular number 권장.

## 상태 (States)
thumb 상호작용 상태(루트에 `c-slider--*` 부가).

| 상태 | 클래스 / 속성 | 규칙 / 토큰 |
|---|---|---|
| Default (base) | `c-slider` | 기본 thumb, `tabindex="0"`로 포커스 가능 |
| Hover | `c-slider--hover` | 포인터 피드백(thumb 크기·그림자 변화) |
| Pressed | `c-slider--pressed` | 드래그 중 피드백 |
| Focus | (thumb 포커스) | 크기·그림자로 피드백 |
| Disabled | `c-slider--disabled` + `aria-disabled="true"` | 조정 불가 |

## Anatomy (구성 요소)
1. Track (`c-slider-track`) — 값 범위 전체 rail. 배경색 + pill radius로 조정 가능 범위 표시.
2. Fill (`c-slider-fill`) — 선택된 값 구간. 시작점부터 thumb까지 primary 색으로 채움.
3. Thumb (`c-slider-thumb`) — 드래그 손잡이. hover/pressed/focus에서 크기·그림자 피드백.
4. Value label (`c-slider-label`) — 현재 값 숫자 보조 표시. tabular number로 흔들림 감소.
5. Tick (`c-slider-tick`) — 단계 값 기준점. 프리셋 단계가 중요할 때만 노출.

## 조합 예시 (Composition)
- 폼·설정의 값 입력: Single slider(`c-slider` + Fill 60% + `c-slider-label` 60%).
- 단계형: Track 안에 `c-slider-ticks`(0/25/50/75/100%)와 thumb를 함께 배치.

## 주의 / 하드 규칙
- 항상 `role="slider"`와 `aria-valuemin`/`aria-valuemax`/`aria-valuenow`를 둔다.
- 키보드 조작을 위해 thumb(또는 루트)에 `tabindex="0"`를 부여한다.
- Tick은 연속값일 때 숨기고, 프리셋 단계가 의미 있을 때만 노출.
- Vertical은 `aria-orientation="vertical"`을 명시하고, 채움은 `height`·thumb는 `bottom` 기준.
- Disabled는 `aria-disabled="true"`로 표기.
