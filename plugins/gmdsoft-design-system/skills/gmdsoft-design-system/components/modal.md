# Modal (모달)

> 출처: index.html `#modal` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 뒤를 가리고 흐름을 막아 한 가지에 집중시켜야 할 때.
- 처리하거나 닫기 전까지 다른 곳을 못 쓰므로, 흐름을 끊을 만큼 꼭 필요할 때만 절제해 사용.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Alert | 경고·상태 확인 (헤더에 의미색 아이콘 강조) | `alert-icon` + 의미색, 5유형(아래) |
| Basic | 일반 콘텐츠를 담는 기본 모달 | 아이콘 없는 헤더 |
| Dialog | 폼·상호작용을 담음 | 다단계 입력은 Stepper(`#stepper`)와 함께 구성 |

- 컨테이너 기준 치수: min-width 400px, min-height 200px.

## Alert 5유형 (Alert Types)
| 유형 | 아이콘 | 색 토큰 | 버튼 구성 |
|---|---|---|---|
| information | `info-circle` (파랑 i) | `--gmd-semantic-info` `#0288D1` / 배경 `--gmd-semantic-info-bg` | 닫기(secondary) + 확인(primary) |
| confirmation | `info-circle` (파랑 i) | `--gmd-semantic-info` `#0288D1` / `--gmd-semantic-info-bg` | 닫기(secondary) + 확인(primary) |
| warning | `exclamation-triangle` (노랑 △) | `--gmd-semantic-warning` `#D97706` / `--gmd-semantic-warning-bg` | 취소(`btn-text`) + 주요(`btn-danger`) |
| error | `x` (빨강 ✕) | `--gmd-semantic-error` `#D42A34` / `--gmd-semantic-error-bg` | 닫기(secondary) + 주요(`btn-danger`) |
| Done | `check` (녹색 ✓) | `--gmd-semantic-success` `#2E8544` / `--gmd-semantic-success-bg` | 폴더 열기(secondary) + 완료(primary) |

- 헤더 = 원형 subtle 배경의 의미색 아이콘(`alert-icon alert-*`) + 제목(Bold 20) + 닫기 X.

## 버튼 구성 (Buttons)
| 버튼 수 | 규칙 |
|---|---|
| 1버튼 | 단일 확인(primary). 보조 옵션(예: "Remember Me" 체크박스)은 좌측 정렬(`actions between`) |
| 2버튼 | 취소(secondary) + 확인(primary) |

- 액션은 디자인 시스템 Button을 재사용한다.

## Anatomy (구성 요소)
- Container: 모달 표면. radius `--gmd-radius-lg` (12px), modal shadow, scrim 위에 놓이는 레이어.
- Heading: 제목. Bold `--gmd-font-size-20` (20px), `--gmd-text-primary`. 대화상자의 목적을 먼저 전달.
- Body: 본문. Regular `--gmd-font-size-14` (14px), `--gmd-text-secondary`. 결정에 필요한 정보 제공.
- Icon: Alert 유형의 상태 아이콘(`alert-icon`).
- 닫기 버튼(`x`, `aria-label="닫기"`)은 헤더 우측.

## 조합 예시 (Composition)
- confirmation Alert(max-width 480px): `alert-confirm` `info-circle` 아이콘 + 제목("프로젝트 권한 변경") + 본문 + 액션 취소(secondary) + 변경 적용(primary).

## 주의 / 하드 규칙
- 오버레이 scrim, ESC 닫기, focus trap은 구현 시 함께 적용한다.
- 흐름을 끊을 만큼 꼭 필요할 때만 절제해 사용.
- 컨테이너 min-width 400px / min-height 200px, radius lg(12px) 고정.
- 의미색은 반드시 `--gmd-semantic-*` / `--gmd-semantic-*-bg` 토큰. 임의 HEX·px 금지.
- warning·error의 주요 액션은 `btn-danger`(파괴적 동작 강조). info/confirmation/Done의 주요 액션은 `btn-primary`.
- 다단계 입력 Dialog는 Stepper와 함께 구성.
