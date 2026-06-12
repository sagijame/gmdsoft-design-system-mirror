# Context Menu (맥락 메뉴)

> 출처: index.html `#context-menu` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 우클릭·더보기로 부르는 맥락 메뉴.
- 지금 가리킨 대상에 쓸 수 있는 동작만 모아 대상 근처에 띄운다.
- 항목은 텍스트·아이콘·하위메뉴·선택됨으로 구성된다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Default | 기본 메뉴(`c-context-menu-menu`, `role="menu"`) | `min-width:164px` |
| Wide / Extensions | 넓은 메뉴 + 하위메뉴 포함 | `c-context-menu-menu--wide` |

- 컨테이너: 배경 `var(--gmd-surface-base)`, 1px `var(--gmd-border-subtle)` 테두리, `var(--gmd-radius-md)`, `box-shadow:var(--gmd-shadow-lift)`, padding `var(--gmd-space-2x)`, 항목 간 gap `var(--gmd-space-1)`, 폰트 `var(--gmd-font-body)`.

## 항목 유형 (Item Type)
| 유형 | 규칙 / 토큰 |
|---|---|
| Text | 라벨만(`c-context-menu-label`). 12px |
| Icon | 16px 선행 아이콘(`c-context-menu-icon`) + 라벨 |
| Submenu | 우측 caret(`c-context-menu-caret`, `aria-haspopup="true"`). caret 색 `var(--gmd-text-tertiary)`, `margin-left:var(--gmd-space-2x)` |
| Selected | 체크 아이콘 + 라벨(`c-context-menu-item--selected`, `role="menuitemradio"`, `aria-checked="true"`). 텍스트·아이콘 `var(--gmd-primary-default)` |
| Danger | 파괴적 동작(`c-context-menu-item--danger`). 텍스트 `var(--gmd-semantic-error)` |

- 항목 기본(`c-context-menu-item`): padding `var(--gmd-space-2x)`, `min-height:24px`, `var(--gmd-radius-sm)`, `var(--gmd-font-size-12)`, `var(--gmd-weight-regular)`, 텍스트 `var(--gmd-text-primary)`, 배경 transparent, gap `var(--gmd-space-2x)`.

## 상태 (States)
| 상태 | 규칙 / 토큰 |
|---|---|
| Default (base) | 배경 transparent, 텍스트 `var(--gmd-text-primary)` |
| Hover (`:hover` / `c-context-menu-item--hover`) | 배경 `var(--gmd-surface-hover)` |
| Pressed (`c-context-menu-item--pressed`) | 배경 `var(--gmd-primary-subtle)`, 텍스트 `var(--gmd-primary-default)` |
| Disabled (`c-context-menu-item--disabled`, `aria-disabled="true"`) | 텍스트 `var(--gmd-text-disabled)`, `cursor:not-allowed`, `pointer-events:none` |

## Anatomy (구성 요소)
1. Container — 메뉴 표면. 배경·1px 테두리·코너 라디우스·내부 padding으로 항목 스택을 감싼다.
2. Label — 텍스트(12px). 주요 텍스트, 토큰 바인딩.
- 보조 요소: Divider(`c-context-menu-divider`, `role="separator"`) — 높이 1px, 색 `var(--gmd-divider)`, `margin:var(--gmd-space-1) 0`. Caret/Icon은 항목 유형 참조.

## 조합 예시 (Composition)
- Default 메뉴: 동작 그룹(Retry Task / Generate Report / Manual Device Recovery / Extraction Association) → divider → Pause / Cancel → divider → Delete Task(danger).
- Extensions 메뉴: 상단 항목 → divider → submenu 항목(caret) 반복 → 일반 항목 → divider → danger 항목 묶음.
- 그룹은 divider로 분리하고, 파괴 동작(danger)은 맨 아래 별도 그룹에 둔다.

## 주의 / 하드 규칙
- HEX 발명 금지 — 색은 위 토큰만 사용. (참고 Light: primary-default ≈ #135DB5, semantic-error ≈ #D42A34, divider #DFE0E4)
- 컨테이너 테두리는 `var(--gmd-border-subtle)`(항목·필드의 border-base와 다름).
- 라벨 기본 텍스트는 12px(`var(--gmd-font-size-12)`).
- danger 항목은 파괴적 동작 전용. 일반 동작에 빨강 사용 금지.
- 접근성: 메뉴 `role="menu"`+`aria-label`, 항목 `role="menuitem"`(선택형은 `menuitemradio`+`aria-checked`), 하위메뉴 `aria-haspopup`+`aria-expanded`.
