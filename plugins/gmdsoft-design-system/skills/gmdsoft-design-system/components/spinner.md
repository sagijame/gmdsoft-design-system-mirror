# Spinner (스피너)

> 출처: index.html `#spinner` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 처리 중임을 알리는 원형 회전 표시.
- 얼마나 걸릴지 모르는 짧은 대기에 맞는다.
- 끝이 분명하면 Progress를 쓴다.
- 너무 짧은 처리엔 깜빡임처럼 보여 쓰지 않는다.

## 크기 (Sizes)
링(`c-spinner-ring`)은 트랙 색 `var(--gmd-primary-subtle)` + 상단 강조 `var(--gmd-primary-default)`로 구성, `c-spinner-rotate 0.9s linear infinite` 회전.

| 크기 | 클래스 | 치수 | 테두리 두께 |
|---|---|---|---|
| 16 | `c-spinner-16` | 16×16px | 2px |
| 24 | `c-spinner-24` | 24×24px | 2px |
| 32 | `c-spinner-32` | 32×32px | 3px |
| 48 | `c-spinner-48` | 48×48px | 4px |

## 상태 (States)
- 단일 로딩 상태만 존재(무한 회전). hover/pressed/disabled 없음.
- 정적 프레임(`c-spinner-static`, 32px·3px)으로 회전 4단계 표현: f1 상단(top), f2 우측(right), f3 하단(bottom), f4 좌측(left) 강조 색 `var(--gmd-primary-default)`.

## Anatomy (구성 요소)
1. Container — 외곽 컨테이너. 트랙 색(`var(--gmd-primary-subtle)`)·상단 강조 색(`var(--gmd-primary-default)`)·테두리 두께·코너 라디우스(`border-radius:50%`)를 정의하며 State variant로 자동 전환.

## 조합 예시 (Composition)
- 로딩 표면(`c-spinner-surface`): 24px 스피너 + 메시지 텍스트(`c-spinner-msg`, 예 "불러오는 중…")를 함께 배치.

## 주의 / 하드 규칙
- HEX 발명 금지 — 색은 `var(--gmd-primary-default)`(≈ #135DB5) / `var(--gmd-primary-subtle)`(#EBF2FA)만 사용.
- 진행 정도를 알 수 있으면 Spinner 대신 Progress 사용.
- 매우 짧은 처리엔 사용 금지(깜빡임).
- 접근성: `role="status"` + `aria-label`(예 "로딩 중", "불러오는 중") 부여.
