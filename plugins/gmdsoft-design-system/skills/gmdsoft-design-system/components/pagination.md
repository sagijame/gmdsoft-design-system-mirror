# Pagination (페이지네이션)

> 출처: index.html `#pagination` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 많은 항목을 여러 페이지로 나눠 넘겨보는 컨트롤.
- 번호 버튼과 이전/다음으로 이동하며 현재·전체 페이지를 같이 보여 위치를 알린다.
- 페이지가 다 안 담기면 생략(…)으로 줄인다.

## 변형 (Variants / Types)
| 변형 | 클래스 | 용도 |
|---|---|---|
| Page (number) | `c-pagination-item` | 개별 페이지 번호 버튼 |
| Nav (arrow) | `c-pagination-item c-pagination-nav` | 이전/다음 이동(Prev/Next). 16×16 화살표, `aria-label="이전/다음 페이지"` |
| Ellipsis | `c-pagination-ellipsis` | 생략 표시(…). `aria-hidden="true"`, 클릭 대상 아님 |

## 크기 (Sizes)
| 항목 | 치수 |
|---|---|
| Page item | 32px 정방형 영역(행 리듬 유지) |
| 행 간격 | Page 간 `--gmd-space-6`, Nav 간 `--gmd-space-5` |

## 상태 (States)
Page는 6가지, Nav는 5가지(Active 제외).

| 상태 | 클래스 | 규칙 / 토큰 |
|---|---|---|
| Default (base) | (없음) | 기본 표면 |
| Hover | `is-hover` | 호버 표면 강조 |
| Pressed | `is-pressed` | 눌림 표면 |
| Focused | `is-focused` | 포커스 링 표시 |
| Active (현재 페이지, Page 전용) | `is-active` + `aria-current="page"` | primary surface로 강조 |
| Disabled | `is-disabled` + `aria-disabled="true"` | 상호작용 차단 |

## Anatomy (구성 요소)
1. **Nav item**: 이전·다음 이동 버튼. 방향 아이콘만으로 의미가 명확해야 한다.
2. **Page item**: 개별 페이지 번호. 32px 정방형 영역으로 행 리듬을 유지한다.
3. **Current state**: 현재 페이지. primary surface와 `aria-current="page"`로 시각·접근성 상태를 같이 표시한다.
4. **Ellipsis**: 생략 표시. 클릭 대상이 아니라 범위 압축 신호로만 사용한다.

## 조합 예시 (Composition)
- **Standard row (with ellipsis)**: Prev · 1 · 2 · [3 active] · … · 10 · Next.
- **Compact row (5 pages)**: Prev · 1 · 2 · [3 active] · 4 · 5 · Next(생략 없음).
- 전체 행은 `nav` + `role="navigation"` + `aria-label`로 감싼다.

## 주의 / 하드 규칙
- 현재 페이지는 `is-active`와 `aria-current="page"`를 함께 부여한다.
- Ellipsis는 `aria-hidden="true"`로 두고 클릭 동작을 부여하지 않는다.
- Nav 화살표 버튼에는 `aria-label`을 반드시 부여한다.
