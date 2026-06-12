# Progress (진행 표시)

> 출처: index.html `#progress` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 작업이 얼마나 됐는지 막대로 보여줄 때.
- 끝이 보이는 업로드·다운로드 등 진행률 확정 작업.
- 끝을 모를 땐 indeterminate, 가능하면 수치를 함께 보여 기다림을 덜어준다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Progress (진행률) | 0~100% 채움 비율로 완료 정도 표현 | 트랙 `--gmd-background-section` `#E9ECEF`, 채움 `--gmd-primary-default` `#135DB5`, `progress-bar` width % |
| Primary | 기본 진행 | `--gmd-primary-default` |
| Success | 완료 | `progress-success` (`--gmd-semantic-success` `#2E8544`) |
| Warning | 주의 | `progress-warning` (`--gmd-semantic-warning` `#D97706`) |
| Danger | 오류 | `progress-danger` (`--gmd-semantic-error` `#D42A34`) |
| Indeterminate | 진행률을 알 수 없는 작업 | `is-indeterminate`, 그라데이션 세그먼트가 트랙을 무한 횡단, `--gmd-motion-easing` 가감속, 수치 대신 동작 라벨("업로드 중…") |
| Animated · Flowing | 진행률 확정 + 작업이 살아있음 표시 | `is-flowing`, 채움을 `primary-pressed→default→hover` 그라데이션으로 한 방향 흐름 |
| Animated · Shimmer | 진행률 확정 + 살아있음 표시 | `is-shimmer`, 채움 위로 밝은 빛줄기 주기적 통과 |
| Vertical (세로) | 좁고 높은 영역(사이드 패널·세로 게이지) | `progress-v`, 아래→위로 채움, `progress-bar` height % |

- Animated 두 변형 모두 `prefers-reduced-motion`에서 자동 정지.

## 라벨 위치 (Label Position)
| 위치 | 규칙 |
|---|---|
| Up | 막대 위에 수치 라벨 |
| Down | 막대 아래에 수치 라벨 |
| Side | 막대 우측(`prog-side` + `pct`)에 수치 라벨 |

## 상태 (States)
> 작업 생명주기 상태 칩(`prog-status`)
| 상태 | 규칙 / 토큰 |
|---|---|
| Pending | 대기. `pending`, 빈 dot |
| In progress | 진행 중. `inprogress`, dot |
| Completed | 완료. `completed`, dot 안 `check` 아이콘 (`--gmd-semantic-success`) |
| Error | 오류. `error`, dot 안 `x` 아이콘 (`--gmd-semantic-error`) |

## Anatomy (구성 요소)
- Track: 전체 진행 범위. 배경 토큰(`--gmd-background-section`)으로 남은 구간 표시.
- Fill: 완료된 구간. primary 또는 semantic 색으로 현재 상태 표현.
- Label: 수치나 상태 텍스트. 사용자가 기다림을 예측할 수 있게 함.

## 조합 예시 (Composition)
- 업로드 카드(`card card-outline`): eyebrow "UPLOAD" + 제목 + 설명 + 진행 필드(라벨 "진행률"/"65%" + `progress-bar is-flowing` width 65%).

## 주의 / 하드 규칙
- 끝을 알 수 있으면 진행률, 모르면 indeterminate. indeterminate에는 수치 대신 동작 라벨("…중") 사용.
- 트랙은 `--gmd-background-section`, 기본 채움은 `--gmd-primary-default` 고정. 의미색은 `--gmd-semantic-*` 토큰.
- 애니메이션(Flowing·Shimmer)은 `prefers-reduced-motion`에서 반드시 정지.
- 가능하면 수치를 함께 노출해 대기 체감을 줄인다. 임의 HEX·px 금지.
