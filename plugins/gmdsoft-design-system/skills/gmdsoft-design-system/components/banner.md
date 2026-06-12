# Banner (배너)

> 출처: index.html `#banner` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 페이지 전체에 걸리는 중요한 소식을 위쪽에 크게 띄울 때.
- 닫거나 조치하기 전까지 화면에 남아야 하는 알림.
- 한 화면에 하나만 둔다 — 여러 개 띄우면 중요도가 묻힌다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Fill (채움) | 의미색 틴트 배경으로 채운 기본 스타일 | 각 의미색의 `--gmd-semantic-*-bg` 배경 |
| Outline (외곽선) | Fill과 동일(틴트 배경·padding·버튼 그대로)하되 좌측에 의미색 3px 라인 추가. 본문 영역에서 더 가볍게 사용 | `banner-outline` + 좌측 3px 의미색 라인 |
| Default (중립) | 아이콘 없이 본문 + 어두운 액션 버튼 | `banner-default` |
| Info | 정보 안내 (아이콘 `info-i`) | `--gmd-semantic-info` `#0288D1` / `--gmd-semantic-info-bg` `#E1F5FE` |
| Success | 성공·완료 (아이콘 `check`) | `--gmd-semantic-success` `#2E8544` / `--gmd-semantic-success-bg` `#E8F5EC` |
| Warning | 주의 (아이콘 `exclamation`) | `--gmd-semantic-warning` `#D97706` / `--gmd-semantic-warning-bg` `#FFFBEB` |
| Danger | 오류·위험 (아이콘 `x`) | `--gmd-semantic-error` `#D42A34` / `--gmd-semantic-error-bg` `#FCEBED` |

- 컨테이너 radius는 Banner 전용 예외값 `--gmd-radius-6px` (6px).
- Info·Success·Warning·Danger는 아이콘(색 원)·heading·액션 버튼이 모두 같은 의미색을 쓴다.

## Anatomy (구성 요소)
- Container: 페이지 폭으로 놓이는 알림 면. 의미색 배경 또는 outline line으로 중요도를 전달.
- Title row: 아이콘 + 제목(`h`) + 닫기 버튼(`close`, `x` 아이콘)이 놓이는 헤더 행. 아이콘은 의미색 원형 슬롯.
- Body: 사용자가 읽어야 할 핵심 안내(`t`). 긴 문장도 줄바꿈되는 본문 영역.
- Action: 후속 작업 버튼(`ba`). 주 액션은 하나만 둔다.

## 조합 예시 (Composition)
- Info 배너: `info-i` 아이콘 + 제목("새 정책이 적용됩니다") + 본문 + 단일 액션 버튼("정책 보기" + `arrow-right`).
- 액션 버튼은 좌측 선행 아이콘(예: `home`) + 라벨 + 후행 `arrow-right` 조합 가능.

## 주의 / 하드 규칙
- 한 화면에 Banner는 하나만. 여러 알림이 필요하면 우선순위가 가장 높은 하나만 남긴다.
- 임의 HEX·px 금지. 의미색은 반드시 `--gmd-semantic-*` / `--gmd-semantic-*-bg` 토큰 사용.
- Outline의 좌측 라인 두께는 3px 고정(의미색).
- Default는 아이콘을 두지 않는다(중립).
