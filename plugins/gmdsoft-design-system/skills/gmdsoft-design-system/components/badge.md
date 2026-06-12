# Badge (배지)

> 출처: index.html `#badge` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 라벨·태그·상태·개수를 보여주는 작은 표시.
- 누르거나 지우는 동작 없이 정보만 전한다(단, Tag의 closable·Filter 칩은 상호작용 있음).
- 색은 의미에 맞는 토큰으로 쓴다.
- 계열은 **Badge · Tag · Status · Filter** 4종.

## 변형 (Variants / Types)
### Badge — Primary blue, md
6 표현: Icon Circle / Icon Rectangle / Text Only / Count / Arrow Icon / icon Arrow.

| 표현 | 마크업 | 규칙 |
|---|---|---|
| Icon Circle | `badge badge-circle` + `.ico` | 원형 아이콘 칩 |
| Icon Rectangle | `badge badge-square` + `.ico` | 사각 아이콘 칩, var(--gmd-radius-sm) |
| Text Only | `badge` | pill 형태 텍스트 칩 |
| Count | `badge` + `.badge-count` | 라벨 + 개수 |
| Arrow Icon | `badge` (arrow-up … home) | 좌 화살표/우 아이콘 |
| icon Arrow | `badge` (home … arrow-right) | 좌 아이콘/우 화살표 |

### Tag — Neutral / Secondary
| 변형 | 클래스 | 규칙 / 토큰 |
|---|---|---|
| Neutral | `tag` | 면 채움 + divider 보더 |
| Secondary | `tag tag-secondary` | 보조 강조 톤 var(--gmd-primary-subtle) |
| Closable | `tag` + `.close`(data-icon="x") | × 버튼 포함, 제거 가능 |

### Status — 제품 연결·작동 상태 7종
dot·텍스트가 같은 의미색을 쓴다.

| 상태 | 클래스 | 의미색 |
|---|---|---|
| Available | `status status-available` | success |
| Busy | `status status-busy` | warning |
| Updating | `status status-updating` | primary |
| Update Failed | `status status-failed` | error |
| Unavailable | `status status-unavailable` | error |
| Disconnected | `status status-disconnected` | tertiary |
| Deactivated | `status status-deactivated` | tertiary |

### Filter — 검색·필터 적용 칩
| 상태 | 클래스 | 규칙 |
|---|---|---|
| Default | `fchip` | chevron-down |
| Active (Hover/Press) | `fchip is-active` | chevron-down |
| Visible | `fchip is-visible` | chevron-up (펼침) |

상세 칩은 Filter Labels(`#filter-labels`) 참고.

## 상태 (States)
- Tag: Default / Hover(`is-hover`) / Pressed(`is-pressed`) / Disabled(`is-disabled`).
- Filter: Default / Hover / Press / Visible.
- Badge·Status: 정보 표시용으로 별도 상호작용 상태 없음.

## Anatomy (구성 요소)
1. Container — badge/tag/filter의 외곽 면. 정보 밀도에 따라 pill 또는 var(--gmd-radius-sm) 사용.
2. Label — 상태·분류·필터명 텍스트. 12px 기본.
3. Indicator — count, dot, icon, close처럼 의미를 보강하는 보조 요소.

## 조합 예시 (Composition)
- 한 줄에 계열 혼합 사용 가능: `Connected`(status-available) + `검토 필요 3`(badge + badge-count) + `정책 ×`(tag-secondary closable) + `최신순`(fchip is-visible).

## 주의 / 하드 규칙
- 색은 반드시 의미 토큰으로 매핑(예: 실패=error, 경고=warning). 임의 색 금지.
- 텍스트 칩은 pill, 아이콘 사각 칩은 var(--gmd-radius-sm).
- Status는 dot과 텍스트 색을 동일 의미색으로 일치시킨다.
- 라벨 기본 크기 12px.
