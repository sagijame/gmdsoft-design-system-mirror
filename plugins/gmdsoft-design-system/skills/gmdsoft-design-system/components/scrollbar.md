# Scrollbar (스크롤바)

> 출처: index.html `#scrollbar` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 스크롤 영역의 현재 위치와 보이는 범위를 표시하고, 끌어서 옮길 때.
- 썸(thumb) 길이 = 전체 콘텐츠 중 보이는 비율.
- 더 볼 내용이 없으면 스크롤바를 두지 않는다 — 보이면 더 있을 거라 기대를 주므로.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Outline | 기본형. 트랙 + 썸을 함께 노출 | `.c-scrollbar-track` + `.c-scrollbar-thumb` |
| Only Thumb (Bare) | 트랙 배경 없이 썸만 노출 | `.c-scrollbar-bare` (트랙 배경 제거) |

## 방향 (Orientation)
| 방향 | 규칙 |
|---|---|
| Vertical (세로) | `.c-scrollbar-v`, `aria-orientation="vertical"`. 썸 길이는 `height`로 지정 |
| Horizontal (가로) | `.c-scrollbar-h`, `aria-orientation="horizontal"`. 썸 길이는 `width`로 지정 |

## 크기 (Sizes)
- 썸 길이 = 보이는 콘텐츠 비율(데모 트랙 약 264px 기준 환산값).
- 25% → 약 66px / 33% → 약 88px / 50% → 약 132px / 75% → 약 198px.
- 비율로 산출하며 임의 고정 px를 박지 않는다.

## 상태 (States)
| 상태 | 규칙 / 토큰 |
|---|---|
| Default (base) | `.c-scrollbar-thumb` 기본 표면 |
| Hover | `.c-scrollbar-hover` — 마우스 오버 시 썸 강조 |
| Pressed | `.c-scrollbar-pressed` — 드래그(누름) 중 썸 강조 |
| Disabled | 트랙 `.c-scrollbar-disabled-track` + 썸 `.c-scrollbar-disabled`, `aria-disabled="true"` |

## Anatomy (구성 요소)
1. **Track** (`.c-scrollbar-track`): 트랙. 스크롤 영역 배경(`--gmd-*-tertiary-subtle` 계열) + pill 라디우스로 그린 레일. 썸이 이동하는 바탕이며 테두리·padding 없음.
2. **Thumb** (`.c-scrollbar-thumb`): 내부 썸. 보이는 콘텐츠 비율을 길이로 표현하고 드래그 위치를 나타냄.

## 접근성
- 트랙에 `role="scrollbar"`, `aria-orientation`, `aria-valuenow`/`aria-valuemin`/`aria-valuemax` 지정.
- Disabled 시 `aria-disabled="true"`.

## 주의 / 하드 규칙
- 더 스크롤할 내용이 없으면 스크롤바를 표시하지 않는다.
- 썸 길이는 보이는 비율에 비례해 산출하고 임의 px를 발명하지 않는다.
- 트랙에는 테두리·padding을 두지 않는다(pill 라디우스 레일만 사용).
