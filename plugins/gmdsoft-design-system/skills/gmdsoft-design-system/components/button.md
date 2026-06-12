# Button (버튼)

> 출처: index.html `#button` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 눌러서 작업을 실행하는 컨트롤.
- 한 화면의 주 동작은 채움형 Primary 하나만 둔다.
- 덜 중요한 동작은 외곽선·텍스트로 위계를 낮춘다.

## 변형 (Variants / Types)
Figma 위계는 **Primary / Secondary / Neutral / Text Link** 4단. 클래스명은 사용처 보존을 위해 일부 다르게 매핑한다.

| 변형 | 클래스 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|---|
| Primary | `btn btn-primary` | 주 동작(채움형). 화면당 1개 권장 | 배경 var(--gmd-primary-default) |
| Secondary | `btn btn-secondary` | 보조 동작 | 외곽선 강조 |
| Neutral | `btn btn-tertiary` | 위계가 낮은 중립 동작 | var(--gmd-tertiary-*) |
| Text Link | `btn btn-text` | 가장 낮은 위계. 상태 전환 라벨(Download/Downloading/Failed)에도 사용 | hover·pressed 시 var(--gmd-primary-subtle) pill 배경 |
| Destructive | `btn btn-danger` | 위계 아님(semantic destructive). warning/error Dialog 확인 버튼 전용 | 삭제·파괴적 동작에만 |

## 크기 (Sizes)
Figma 크기 6단. 클래스 없이 `btn`만 쓰면 md(36px)가 기본.

| 크기 | 클래스 | 높이 | 비고 |
|---|---|---|---|
| xm | `btn-xm` | 24px | 조밀 영역 |
| sm | `btn-sm` | 32px | 조밀 영역 |
| md | `btn-md` | 36px | 기본값 |
| lg | `btn-lg` | 40px | 강조 영역 |
| xl | `btn-xl` | 48px | 강조 영역 |
| 2lg | `btn-2lg` | 52px | 강조 영역 |

- Label 텍스트: Bold 14px.

## 상태 (States)
각 위계는 default / hover / pressed / disabled 4단을 가진다.

| 상태 | 규칙 / 토큰 |
|---|---|
| Default (base) | 위계별 기본 배경 (예: Primary = var(--gmd-primary-default)) |
| Hover | Primary = var(--gmd-primary-hover) / Neutral = var(--gmd-tertiary-hover) |
| Pressed | Primary = var(--gmd-primary-pressed) / Neutral = var(--gmd-tertiary-pressed) |
| Disabled | Primary = var(--gmd-primary-disabled), `disabled` 속성 |
| Text Link hover/pressed | var(--gmd-primary-subtle) pill 배경 생성 |

## Anatomy (구성 요소)
1. Container — 버튼 외곽. 높이·padding·radius·상태 배경 담당.
2. Label — 동작 설명 텍스트. Bold 14px, 위계별 텍스트 토큰 사용.
3. Icon — 선택 구성 요소. leading은 동작 의미, trailing은 이동·다음 단계 의미 보강.

## 조합 예시 (Composition)
- 아이콘 배치: leading 아이콘은 동작 보강(예: download + Download), trailing 화살표는 다음 단계 이동(예: Next + arrow-right). 아이콘과 라벨 사이 `gap` 4px.
- 다이얼로그 액션 행: `취소`(btn-tertiary) + `임시 저장`(btn-secondary) + `저장`(btn-primary), 버튼 간격 var(--gmd-space-2x).
- 파괴 동작 행: `내보내기`(btn-text + download 아이콘) + `삭제`(btn-danger).

## 주의 / 하드 규칙
- 주 동작(Primary)은 한 화면에 하나만 둔다.
- `btn-danger`는 위계 토큰이 아니라 semantic destructive다. warning/error Dialog의 확인 버튼에만 사용.
- 아이콘-라벨 간격은 4px 고정.
- 클래스 매핑 주의: `btn-tertiary`=Neutral, `btn-text`=Text Link.
