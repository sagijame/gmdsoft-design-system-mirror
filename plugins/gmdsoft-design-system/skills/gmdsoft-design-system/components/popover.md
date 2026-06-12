# Popover (팝오버)

> 출처: index.html `#popover` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 특정 요소(트리거)에 앵커링되어 정보·동작을 띄우는 부유 패널.
- 제목·본문·버튼까지 담을 수 있어 Tooltip보다 풍부하다.
- 보통 클릭으로 연다. 설명이 두 문장을 넘거나 버튼이 들어가면 Tooltip 대신 Popover를 쓴다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| PopOver | 기본형. 제목 + 키-값 본문 행 | `.c-popover-pop` `role="dialog"` + `aria-label` |
| PopOver + Banner | 상태 배지·경고 배너 포함형. 오류/실패 상황 안내 | 상태 배지 `.c-popover-badge`, 경고 `.c-popover-banner` `role="alert"`, 구분선 `.c-popover-divider` |

## Anatomy (구성 요소)
1. **Container** (`.c-popover-pop`): 팝오버 표면. 배경 + 1px 테두리 + 코너 라디우스 + 내부 padding + 그림자. 트리거에 앵커링되는 컨테이너.
2. **Label** (`.c-popover-title`): 주요 텍스트(제목). 토큰 바인딩으로 색·굵기 정의.
3. **Body** (`.c-popover-rows` / `.c-popover-row`): 보조 텍스트(키-값 행). `--gmd-text-secondary` 톤. 라벨(`.c-popover-label`) + 값(`.c-popover-value`).
4. **Action** (`.c-popover-actions` / `.c-popover-action`): 선택 동작 영역. 단순 설명을 넘어 후속 조치를 요구할 때만 배치(예: "자세히 보기").

## 조합 예시 (Composition)
- 앵커 + caret(`.c-popover-caret`) 조합으로 트리거 요소를 가리킨다(`.c-popover-anchorwrap`).
- 무대(`.c-popover-stage`) 위에 띄워 실제 배치 맥락을 보여준다.
- PopOver + Banner: 제목 → 상태 배지 → 경고 배너 → 구분선 → 키-값 본문 순으로 쌓는다.

## 주의 / 하드 규칙
- 두 문장 이하의 단순 설명은 Tooltip을 쓰고, 버튼·키값 등 풍부한 내용일 때만 Popover를 쓴다.
- Action 영역은 필수가 아님 — 후속 조치가 필요할 때만 둔다.
- `role="dialog"` + `aria-label`로 접근성 상태를 명시한다. 경고 배너는 `role="alert"`.
