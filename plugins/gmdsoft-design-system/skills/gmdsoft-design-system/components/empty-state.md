# Empty State (빈 상태)

> 출처: index.html `#empty-state`. **Figma 미보유 — classic 이 선행 정의한 컴포넌트다**(다른 28종은 Figma v2.12 / MD-UX Docs 미러링, 이 컴포넌트만 방향이 반대). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 목록·표·카드 본문에 표시할 내용이 없어 그 **자리를 대신할** 안내가 필요할 때.
- Info Bar 와 헷갈리지 않는다 — Info Bar 는 관련 내용 **옆**에 붙고, Empty State 는 그 **자리**를 차지한다.
- 자리를 비워 두고 위에 안내만 붙이지 않는다. 로딩 중인지 없는 것인지 구분되지 않는다.

## 크기 (Sizes)
| 변형 | padding | 용도 |
|---|---|---|
| `c-empty-state-sm` | `--gmd-space-6` / `--gmd-space-4` (24/16) | 패널·목록 일부 영역 |
| 기본 (md) | `--gmd-space-8` / `--gmd-space-4` (32/16) | 카드·섹션 본문 |
| `c-empty-state-lg` | `--gmd-space-12` / `--gmd-space-6` (48/24) | 화면 전체 본문 |

## 구성 요소 (Anatomy)
| # | 요소 | 클래스 | 필수 | 규칙 |
|---|---|---|---|---|
| 1 | Container | `c-empty-state` | 필수 | 배경·테두리 없음. 세로·가로 중앙 정렬. 자리를 대신하는 것이지 새 표면을 얹는 게 아니다 |
| 2 | Icon | `c-empty-state-icon` | 선택 | 48px 원형 `--gmd-background-section`, 내부 글리프 `--gmd-icon-lg`(24px), 색 `--gmd-text-secondary`. 의미는 텍스트가 지므로 `aria-hidden="true"` |
| 3 | Title | `c-empty-state-title` | 선택 | `--gmd-font-size-16` Bold `--gmd-text-primary`. **문단이 아니라 heading**(`h2`~`h6`, 호스트 위계에 맞춰) |
| 4 | Description | `c-empty-state-desc` | **필수** | `--gmd-font-size-14`, `--gmd-line-body-md`, 최대 폭 480px. 원인과 다음 행동을 함께 |
| 5 | Action | `c-empty-state-action` | 선택 | 빈 상태를 그 자리에서 해소하는 동작 하나만. 버튼은 Button 컴포넌트 계약을 따른다 |

## 상태
**4상태를 갖지 않는다.** 상호작용 요소가 아니라 콘텐츠 자리를 채우는 표시다. hover·pressed·disabled 는 내부 Action(Button·링크)이 각자 자기 정의대로 가진다.

## 규칙
- 본문 한 줄이 기본이다. 제목·아이콘·액션은 없어도 성립한다 — 빈 화면을 채우려고 넣지 않는다.
- 액션은 그 자리에서 해소되는 동작일 때만 둔다(필터 초기화, 항목 추가). 다른 화면으로 보내야 하면 본문 문장으로 경로를 적는다.
- **dashed 테두리를 쓰지 않는다** — 파일 끌어놓기 영역(드롭존) 은유다.
- 간격 출처는 `gap` 한 곳으로 고정한다. 호스트 문서의 `p`/heading 여백을 물려받으면 제목·본문 사이가 아이콘·제목 사이보다 벌어져 묶음이 뒤집힌다.

## 마크업
`snippets/empty-state.html` 참조. CSS 는 `empty-state.css`(이 저장소에는 `components.css` 가 없어 `.gmd-component` 스코프 리셋을 동봉).

## 신설 근거
정본이 없는 사이 제품 프로토타입이 각자 그려 빈 상태 클래스가 갈렸다 — 테두리(solid/dashed/없음)·정렬(좌/중앙)·패딩·본문 크기가 제각각이었고, 이를 축별 다수로 수렴했다. 조사 이력 전문은 `design-system/classic/components.md` 변경 이력 2026-08-10 항목에 있다.
