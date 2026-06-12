# TextBox (텍스트박스 / 여러 줄 입력)

> 출처: index.html `#textbox` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 댓글·설명처럼 여러 줄 긴 글을 받는 필드(`<textarea>`).
- 라벨·힌트로 무엇을 적을지 안내하고, 검증 상태로 오류를 알린다.
- 한 줄이면 충분한 값은 TextBox 대신 Input을 쓴다.

## 크기 (Sizes)
필드 단위 클래스(`c-textbox-field c-textbox-{sm|lg}`)와 영역 클래스(`c-textbox-area c-textbox-{sm|md|lg}`)를 함께 둔다. md가 기본.

| 크기 | 클래스 | 텍스트 토큰 |
|---|---|---|
| sm | `c-textbox-sm` | Label Bold 12px / Body Regular 12px |
| md | `c-textbox-md` (기본) | Label Bold 12px / Body Regular 12px |
| lg | `c-textbox-lg` | Label Bold 12px / Body Regular 12px |

- Label: Bold 12px, text/primary 토큰.
- Hint/Body: Regular 12px, var(--gmd-text-secondary).

## 상태 (States)
입력 상태(`c-textbox-area`에 상태 클래스 부가).

| 상태 | 클래스 / 속성 | 규칙 / 토큰 |
|---|---|---|
| Default (base) | `c-textbox-area` | 배경 + 1px 테두리 + 코너 라디우스 + 좌우 padding |
| Focus | `c-textbox-focus` | 포커스 링/테두리 강조 (var(--gmd-primary-default) 계열) |
| Active (입력 완료) | `c-textbox-active` | 값이 채워진 상태, 테두리 유지 |
| Disabled | `c-textbox-disabled` + `disabled` + `aria-disabled="true"` | 조정 불가, 흐린 배경·테두리 |

## 검증 (Semantic / States)
검증 결과는 영역 테두리 색과 힌트 텍스트 색·아이콘을 함께 바꾼다.

| 검증 | 클래스 / 속성 | 규칙 / 토큰 |
|---|---|---|
| Default | `c-textbox-area` | 중립, `aria-invalid` 미설정 |
| Success | `c-textbox-success` + `aria-invalid="false"` | 테두리·힌트 var(--gmd-success-*), check-circle 아이콘(16px) |
| Error | `c-textbox-error` + `aria-invalid="true"` | 테두리·힌트 var(--gmd-error-*), 경고 삼각형 아이콘(16px) |

## Anatomy (구성 요소)
1. Container — 입력 필드(`c-textbox-area`). 배경·1px 테두리·코너 라디우스·좌우 padding. Focus·Error·Disabled에서 테두리·배경 전환.
2. Label — `c-textbox-label`. Bold 12px, 주요 텍스트, 토큰 바인딩.
3. Body / Hint — `c-textbox-hint`. Regular 12px, var(--gmd-text-secondary).
4. Icon — 검증 아이콘(16px). 의미·상태 시각화, 교체 가능.
- 부가: `c-textbox-caption` 캡션(글자 수 안내 등).

## 조합 예시 (Composition)
- 의견 작성 필드: `c-textbox-label`(의견 작성) + `c-textbox-area c-textbox-md` + `c-textbox-caption`(최대 500자까지 입력 가능).
- 힌트 안에 아이콘: `c-textbox-hint` 끝에 `c-textbox-hint-ico`(예: check-circle).

## 주의 / 하드 규칙
- 한 줄 값은 Input을 쓰고, 여러 줄 긴 글에만 TextBox 사용.
- Label·Hint·Body 텍스트는 모두 12px(Label만 Bold).
- 검증 시 테두리 색·힌트 색·아이콘을 동시에 바꾼다(아이콘만 또는 색만 바꾸지 않음).
- Disabled는 `disabled` 속성과 `aria-disabled="true"`를 함께 둔다.
- 검증 상태에는 `aria-invalid`(success=false, error=true)를 명시한다.
