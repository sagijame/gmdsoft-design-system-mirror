# Breadcrumb (브레드크럼)

> 출처: index.html `#breadcrumb` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 지금 페이지까지 온 경로를 단계로 보여주는 보조 내비.
- 중간 항목은 링크, 마지막은 현재 위치.
- 깊은 계층에서 상위로 빨리 돌아갈 때 쓴다. 작업 단계 표시는 Stepper로 한다.

## 상태 (States)
Default · Hover · Pressed · Focused · Current 5가지. Current는 분리자(>) 없이 마지막 항목에만 사용.

| 상태 | 클래스 / 토큰 | 규칙 |
|---|---|---|
| Default (base) | `.c-breadcrumb-link` | `text/secondary` |
| Hover | `--gmd-text-primary` + 배경 `--gmd-surface-hover` | primary로 강조 |
| Pressed | `.c-breadcrumb-link.is-pressed` | primary 강조 |
| Focused | `.c-breadcrumb-link.is-focused` | 포커스 링 표시 |
| Current | `.c-breadcrumb-current` + `aria-current="page"` | 링크 아님. 분리자 없음 |

## Anatomy (구성 요소)
단일 항목(Item) 기준. 여러 개를 가로로 이어 붙여 전체 경로를 구성.
1. **Label** (`.c-breadcrumb-link`): 경로 항목 텍스트. 비현재 항목은 `text/secondary`, Hover·Pressed·Focused에서 primary로 강조.
2. **Separator** (`.c-breadcrumb-sep`): 12×12 chevron-right. `text/disabled`. State=Current에서는 자동 숨김 — 마지막 항목 표식. `aria-hidden="true"`.
3. **Current page** (`.c-breadcrumb-current`): 현재 위치. 링크가 아니며 `aria-current="page"`로 접근성 상태를 명시한다.

## 조합 예시 (Composition)
- **Short path (3 items)**: Home > Settings > [Profile current].
- **Long path (5 items)**: Resources > Library > Components > Accordion > [Anatomy current].
- 전체 경로는 `nav` + `ol.c-breadcrumb-list` + `li.c-breadcrumb-item` 구조로 구성, `nav`에 `aria-label="breadcrumb"`.

## 주의 / 하드 규칙
- 마지막 항목(Current)은 링크로 만들지 않고 `aria-current="page"`만 부여한다.
- Current 항목 뒤에는 분리자를 두지 않는다.
- Separator는 장식이므로 `aria-hidden="true"`.
