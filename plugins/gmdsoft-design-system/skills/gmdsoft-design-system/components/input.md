# Input (입력 필드)

> 출처: index.html `#input` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 한 줄짜리 짧은 값을 받는 필드(이름·이메일·숫자 등).
- 입력 중·오류·완료를 색으로 보여주고 아이콘·검색·카운터·도움말로 거든다.
- 긴 글(여러 줄)은 Input이 아니라 TextBox(`#textbox`)로 넘긴다.

## 변형 (Variants / Types)
| 변형 | 클래스 / 마크업 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|---|
| Basic | `input` | 기본 단일 입력 | — |
| Icon | `input-wrap has-trail` + `.ico.trail` | 보조 정보 아이콘(info-circle 등) | trailing 아이콘 슬롯 |
| Search | `input-wrap has-lead has-trail` + `.ico.lead`(search) | 검색 입력 | leading search 아이콘 + trailing 아이콘 |
| Counter | `input-wrap` + `.input-counter` (예: `0 / 20`) | 글자수 표시 | input에 `padding-right:var(--gmd-space-12)` |
| Helper-text | `input` + `.input-help` | 도움말 텍스트 | 필드 아래 안내문 |
| Textarea | `textarea` | 여러 줄 입력 | 상세는 TextBox 참고 |

## 크기 (Sizes)
높이 세 단계. 기본은 Medium.

| 크기 | 클래스 | 용도 |
|---|---|---|
| Large | `input input-lg` | 강조 영역 |
| Medium | `input` (기본) | 기본값 |
| Small | `input input-sm` | 조밀한 영역 |

## 상태 (States)
| 상태 | 클래스 | 규칙 / 토큰 |
|---|---|---|
| Default (base) | `input` | 보더 var(--gmd-border-subtle) |
| Hover | `input is-hover` | 보더 var(--gmd-border-base) |
| Focused (focus) | `input is-focus` | 보더 var(--gmd-primary-default) + subtle ring |
| Filled | `input` (value 있음) | 입력값 채워진 상태 |
| Error | `input is-error` + `.input-help.is-error` | 보더 var(--gmd-semantic-error), helper도 의미색 |
| Success | `input is-success` | 보더 var(--gmd-semantic-success) |
| Disabled | `input` + `disabled` | 배경 var(--gmd-background-section) |

## Anatomy (구성 요소)
1. Label — 입력값 의미를 설명하는 텍스트. 필드 위에 둔다. (Inter Regular 14px)
2. Control — 값을 입력하는 1줄 컨트롤. 상태별 보더·배경이 바뀐다.
3. Icon / Counter — 검색·정보 아이콘 또는 글자수 카운터. 보조 요소이며 필수 구조 아님.
4. Helper text — 도움말·검증 메시지. 오류·성공 상태에서는 의미 색 토큰으로 상태 보강.

## 조합 예시 (Composition)
- label + input + helper-text 구성. 예: 라벨 `이메일`, leading info-circle 아이콘, placeholder `name@example.com`, helper `로그인에 사용할 이메일 주소`.
- Two-field row: `성` / `이름` 필드를 `flex:1`로 가로 나란히 배치, 간격 var(--gmd-space-4), max-width 520px.
- 폼 그리드 데모는 `repeat(3,1fr)` / `repeat(2,1fr)` 그리드에 var(--gmd-space-4) 간격 사용.

## 주의 / 하드 규칙
- 여러 줄 입력에는 Input을 쓰지 않는다 — TextBox 사용.
- Counter 사용 시 카운터 자리 확보 위해 input에 `padding-right:var(--gmd-space-12)`.
- label 폰트는 Inter Regular 14px.
