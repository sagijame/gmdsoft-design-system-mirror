# Tree (트리)

> 출처: index.html `#tree` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 여러 단계로 겹친 계층을 들여쓰기와 펼침/접힘으로 보여주는 목록.
- 폴더-파일·분류·중첩 메뉴처럼 레벨이 깊은 정보를 한 화면에서 탐색할 때.

## 변형 (Variants / Types)
| 변형 | 클래스 / 마크업 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|---|
| Folder List (아이콘) | `c-tree` + `c-tree-ico` | 폴더 아이콘이 붙은 기본 트리 | `role="tree"`, 자식은 `role="group"` |
| Without Icons | `c-tree` (아이콘 생략) | 라벨만 표시 | `c-tree-twig`(펼침 화살표)만 유지 |
| With Icons | `c-tree-ico`에 leaf 아이콘 | 폴더+파일(이미지 등) 혼합 | leaf 행은 `c-tree-twig c-tree-leaf`(빈 트윅) |
| Checkbox Tree | `c-tree-cbrow` + `c-tree-cb` | 다중 선택 계층 | `aria-checked`, 체크 시 `c-tree-cb is-on` + 체크 아이콘(12px) |

- 펼침/접힘: 행 `aria-expanded="true|false"`. 펼침 트윅은 아래 화살표, 접힘은 오른쪽 화살표 SVG.
- 들여쓰기: `c-tree-indent-1`, `c-tree-indent-2` 등 depth별 클래스.

## 상태 (States)
항목 행(`c-tree-row`) 기준.

| 상태 | 클래스 / 속성 | 규칙 / 토큰 |
|---|---|---|
| Default (base) | `c-tree-row` | 좌우 padding, 배경 없음 |
| Hover | `is-hover` | 배경 전환(hover 레이어) |
| Pressed | `is-pressed` | 누름 피드백 배경 |
| Active (선택) | `is-active` + `aria-selected="true"` | 선택 강조 배경 |
| Disabled | `is-disabled` + `aria-disabled="true"` | 조정 불가, 흐린 톤 |

## Anatomy (구성 요소)
1. Container — 행(row, `c-tree-row`). 좌우 padding, hover·selected 배경 전환, depth에 따라 들여쓰기. 테두리·라디우스 없음.
2. Label — 텍스트(`c-tree-lbl`). Regular 14px, var(--gmd-text-primary).
3. Icon — 내부 아이콘(`c-tree-ico`). 의미·상태 시각화, INSTANCE_SWAP으로 교체 가능.
- 부가: `c-tree-twig`(펼침/접힘 화살표 또는 leaf 빈칸), 체크박스 변형의 `c-tree-cb`.

## 조합 예시 (Composition)
- 폴더 트리 패널(`c-tree-panel` > `c-tree`): depth별 `c-tree-indent-1/2`로 중첩, 선택 행은 `c-tree-row is-active` + `aria-selected="true"`.
- 캡션은 `c-tree-cap`(예: Folder List / With Icons)로 패널 하단에 표시.

## 주의 / 하드 규칙
- 라벨은 Regular 14px, text/primary 고정.
- 행에는 테두리·라디우스를 두지 않는다(배경 전환과 들여쓰기로만 위계 표현).
- 펼침/접힘 노드는 `aria-expanded`, leaf 노드는 트윅을 `c-tree-leaf`(빈 칸)로 둔다.
- 선택 항목은 `is-active`와 `aria-selected="true"`를 함께 둔다.
- 트리 루트는 `role="tree"`, 자식 묶음은 `role="group"`, 각 항목은 `role="treeitem"`.
- 체크박스 트리는 `aria-checked`로 체크 상태를 노출하고, 체크 표시는 `c-tree-cb is-on` + 12px 체크 아이콘.
