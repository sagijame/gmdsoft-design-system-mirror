# Accordion (아코디언)

> 출처: index.html `#accordion` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 헤더를 눌러 본문을 펼치거나 접어 좁은 공간에 많은 내용을 담는다.
- 헤더 제목만으로 안을 짐작할 수 있어야 한다.
- 전부 읽어야 하는 내용이면 그냥 펼쳐둔 페이지가 낫다.

## 상태 (States)
Default · Hover · Pressed · Focused · Expanded · Disabled 6가지.

| 상태 | 규칙 / 토큰 |
|---|---|
| Default (base) | `.c-accordion-item` 기본. `aria-expanded="false"`, chevron 닫힘 |
| Hover | `.c-accordion-hover`. 헤더 배경 강조 |
| Pressed | `.c-accordion-pressed`. 눌림 표면 |
| Focused | `.c-accordion-focused`. 포커스 링 표시 |
| Expanded | `.c-accordion-open` + `aria-expanded="true"`. chevron 아래로 회전, `.c-accordion-panel` 본문 노출 |
| Disabled | `.c-accordion-disabled` + `disabled` + `aria-disabled="true"`. 상호작용 차단 |

## Anatomy (구성 요소)
펼친 상태(Expanded) 기준.
1. **Chevron icon** (`.c-accordion-chevron`, 16×16): 펼침·접힘 상태 시각화. State=Expanded일 때 아래 방향으로 회전.
2. **Title** (`.c-accordion-title`): 섹션 제목. Inter Bold 14. `text/default/primary`.
3. **Content** (`.c-accordion-panel`): 펼친 본문 영역. 좌측 padding 40으로 타이틀과 시각 정렬. `text/default/secondary`.
4. **Divider**: 항목 간 1px 구분선. `border-variant/divider` 바인딩. 항목 스택 시 자동 정돈.

## 조합 예시 (Composition)
- 여러 `.c-accordion-item`을 `.c-accordion-stack`에 쌓아 FAQ 패턴 구성(첫 항목 open, 나머지 closed).
- 항목 간 1px 구분선으로 정돈된다.

## 주의 / 하드 규칙
- 헤더는 `button` 요소로 만들고 `aria-expanded`로 펼침 상태를 명시한다.
- Disabled는 `disabled` + `aria-disabled="true"` 동시 적용.
- 전부 읽어야 하는 필수 내용은 접지 말고 펼쳐둔 페이지로 제공한다.
