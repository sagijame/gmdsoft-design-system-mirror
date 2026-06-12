# Filter Labels (필터 라벨)

> 출처: index.html `#filter-labels` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 지금 걸린 필터·태그를 보여주는 칩(chip).
- 색으로 의미를, 형태로 스타일을 구분하고 x 버튼으로 바로 해제한다.
- 어떤 조건이 걸렸고 어떻게 푸는지 한눈에 보이게 한다.

## 변형 (Variants / Types)
### 색상 (Color)
| 색 | 클래스 | 용도 |
|---|---|---|
| Gray | `c-filter-labels-gray` | 중립·기본 필터 |
| Blue | `c-filter-labels-blue` | 정보·강조 필터 |
| Success | `c-filter-labels-success` | 성공·정상 의미 |
| Warning | `c-filter-labels-warning` | 주의 의미 |
| Error | `c-filter-labels-error` | 오류·위험 의미 |

### 형태 (Shape)
| 형태 | 클래스 | 비고 |
|---|---|---|
| Pill | `c-filter-labels-pill` | 완전 둥근 모서리(기본) |
| Rounded Square | `c-filter-labels-rounded` | 둥근 사각 |
| Square | `c-filter-labels-square` | 각진 사각 |

## 크기 (Sizes)
| 크기 | 클래스 | 비고 |
|---|---|---|
| Size 1 (sm) | `c-filter-labels-sm` | 조밀 영역 |
| Size 2 (lg) | `c-filter-labels-lg` | 기본·강조 영역 |

- 아이콘 유무: Without(텍스트만) / With Icon(선행 아이콘 16×16, `currentColor`).

## Anatomy (구성 요소)
1. **Container** (`.c-filter-labels-chip`): 칩. 배경 + 1px 테두리 + pill 라디우스 + 좌우 padding. 색·모양(pill·rounded·square)·크기 variant 보유.
2. **Label** (`.c-filter-labels-label`): 텍스트(Medium 14px, Figma SemiBold 근사). 주요 텍스트, 토큰 바인딩.
3. **Icon**: 내부 아이콘(16×16). 컴포넌트 의미·상태 시각화. 교체 가능.
4. **Remove action** (`.c-filter-labels-close`, 12×12 x 아이콘): 필터 해제 버튼. 칩이 제거 가능한 상태일 때만 표시하고 `aria-label="필터 해제"`로 동작을 명확히 한다.

## 조합 예시 (Composition)
- 활성 필터를 나란히 표시하는 패턴: 여러 칩(예: Gray·Blue·Gray)을 `.c-filter-labels-stack`에 가로 배치.
- 점(`.c-filter-labels-dot`)을 선행 표식으로 둘 수 있다.

## 주의 / 하드 규칙
- 제거 가능한 칩에만 Remove action을 노출한다.
- Remove action에는 반드시 `aria-label`을 부여한다.
- 색은 의미(semantic), 형태는 스타일 — 의미와 형태를 혼동하지 않는다.
