# Tooltip (툴팁)

> 출처: index.html `#tooltip` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 포인터를 올리거나 포커스하면 뜨는 짧은 보조 설명 말풍선.
- 아이콘 버튼 이름처럼 화면을 어지르지 않고 정보를 보탤 때.
- 버튼이 필요하거나 설명이 길면(두 문장 초과) Tooltip 대신 Popover로 간다.

## 변형 (Variants / Types)
| 변형 | 클래스 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|---|
| Minimal Style 1 | `c-tooltip-minimal` + `c-tooltip-body` | 본문 텍스트만 있는 단순 말풍선 | 배경 tertiary, 텍스트만 |
| Rich Style 2 | `c-tooltip-rich` (`c-tooltip-img` + `c-tooltip-content`) | 아이콘·제목·본문·액션 포함 | `c-tooltip-title` + `c-tooltip-text` + `c-tooltip-action` |

## 방향 (Position)
말풍선 꼬리(tail)가 대상을 가리키는 방향. 버블에 방향 클래스 부가.

| 방향 | 클래스 |
|---|---|
| Top | `c-tooltip-top` |
| Bottom | `c-tooltip-bottom` |
| Left | `c-tooltip-left` |
| Right | `c-tooltip-right` |

## 상태 (States)
트리거 버튼(`c-tooltip-trigger`) 기준.

| 상태 | 클래스 / 속성 | 규칙 / 토큰 |
|---|---|---|
| Default (base) | `c-tooltip-trigger` | 버블 숨김, `aria-label` + `aria-describedby` |
| Hover | (`c-tooltip-hoverdemo` 컨텍스트) | 버블 노출 |
| Focus | `is-focus` | 포커스 시 버블 노출 |
| Disabled | `is-disabled` + `disabled` | 버블 비노출, 조정 불가 |

## Anatomy (구성 요소)
1. Container — 말풍선(`c-tooltip-bubble`). 배경(tertiary)·코너 라디우스·padding·그림자, 꼬리(tail)로 대상 가리킴. 테두리 없음.
2. Label — 주요 텍스트(`c-tooltip-title`). 10px, 토큰 바인딩.
3. Body — 보조 텍스트(`c-tooltip-text`). 10px, var(--gmd-text-secondary) 톤.
4. Icon — 내부 아이콘(`c-tooltip-img`). 의미·상태 시각화, 교체 가능.
- 부가: 액션 버튼 `c-tooltip-action`(Rich 변형, 예: "Find out more" + 화살표).

## 조합 예시 (Composition)
- 아이콘 버튼 보조: `c-tooltip-anchor` 안에 `c-tooltip-bubble c-tooltip-top`(도움말 보기) + 호버 대상 라벨.
- 트리거는 `aria-label`(접근성 이름) + `aria-describedby`(버블 id 연결)로 연결.

## 주의 / 하드 규칙
- Label·Body 텍스트는 10px.
- Container에는 테두리를 두지 않는다(배경·그림자·꼬리로만 분리).
- 두 문장을 넘거나 버튼이 들어가면 Tooltip이 아니라 Popover를 사용.
- 트리거는 `role="tooltip"` 버블을 `aria-describedby`로 연결하고, 아이콘 전용 버튼엔 `aria-label`을 둔다.
- Disabled 트리거는 버블을 띄우지 않는다.
