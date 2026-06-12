# Info Bar (인포 바)

> 출처: index.html `#infobar` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 특정 영역이나 입력란에 바로 붙는 인라인 안내가 필요할 때.
- 페이지 전체를 가리키는 Banner보다 가볍고 국소적인 안내.
- 관련 내용 바로 옆에 둔다 — 무엇에 대한 안내인지 분명해야 한다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Two line · Default | l1(라벨/보조색) + l2(볼드 메시지) 2줄 + 액션 | 아이콘 `info-circle` |
| One line · Default | l1 + l2를 한 줄에 + 액션 | 아이콘 `info-circle` |
| Same line · One button | 메시지(`grow`)와 버튼을 한 줄에, 버튼 우측 정렬 | `info-bar same-line` + `btn btn-primary btn-sm` |
| Link on right | 메시지 + 우측 텍스트 링크 | `same-line` + `a.link` |
| Success | 완료 안내 | `info-bar-success`, 아이콘 `check-circle` |
| Warning | 주의 안내 | `info-bar-warning`, 아이콘 `exclamation-triangle` |
| Error | 오류 안내 | `info-bar-error`, 아이콘 `exclamation-circle` |

- line1(`l1`)은 보조색 / "안내" 라벨, line2(`l2`)는 볼드 메시지.
- 액션은 링크형 버튼(`link-btn`, 라벨 뒤 `→`). Same line은 우측 정렬.
- 색상 의미는 아이콘 모양으로 구분: success = `check-circle` · warning = `exclamation-triangle` · error = `exclamation-circle`.
- warning 텍스트는 on-warning(= `--gmd-text-primary` `#212529`).

## Anatomy (구성 요소)
- Container: 관련 영역에 붙는 인라인 안내 표면. 배경·radius·padding으로 주변 입력과 구분.
- Icon: 의미를 빠르게 식별하는 16px 아이콘. semantic variant에 따라 모양·색이 바뀜.
- Message: 라벨(`l1`)과 본문 메시지(`l2`). 짧은 문장으로 관련 영역의 상태 설명.
- Action: 텍스트 링크 또는 버튼. 안내와 직접 관련된 동작만 둔다.

## 조합 예시 (Composition)
- 폼 필드 하단 인라인 안내: `field` 안에 label + input + `info-bar same-line`(아이콘 + "브라우저 권한이 필요합니다." + `a.link` "설정 열기").

## 주의 / 하드 규칙
- 안내는 반드시 관련 영역 바로 옆/아래에 배치.
- 의미 구분은 색이 아니라 아이콘 모양으로도 식별 가능해야 한다(success/warning/error 각각 다른 아이콘).
- warning 변형의 텍스트 색은 `--gmd-text-primary` `#212529` 고정(틴트 배경 위 대비 확보).
- 액션은 안내와 직접 관련된 것만. 무관한 동작은 두지 않는다.
- 아이콘 크기 16px 고정. 임의 HEX·px 금지.
