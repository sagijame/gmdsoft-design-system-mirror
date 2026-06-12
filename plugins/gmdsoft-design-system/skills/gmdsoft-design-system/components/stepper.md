# Stepper (스텝퍼)

> 출처: index.html `#stepper` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 여러 단계 작업·온보딩에서 완료·현재·남은 단계를 보여줄 때.
- 세 단계 이상이거나 긴 폼에서 전체 흐름과 현재 위치를 잡아준다.
- 각 단계 상태(완료·현재·대기·오류)를 분명히 드러낸다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Horizontal (가로형) | 단계를 가로로 나열. Number/Checklist/Arrow 스타일 | `.c-stepper-h`, `.c-stepper-row`, 연결 `.c-stepper-connector` |
| Progress Bar (프로그레스바) | 노드를 라인으로 이어 진행률 강조. Icon/Fill/Checklist | `.c-stepper-bar`, 라인 `.c-stepper-bar-line`(채움 `-line-fill`), `role="list"` |
| Vertical (세로형) | 단계를 세로로 쌓고 제목+설명 노출. Icon/Fill/Border/Checklist | `.c-stepper-v` / `.c-stepper-v-rail` / `.c-stepper-v-line` / `.c-stepper-v-body` |
| Input (입력) | 단일 입력형 단계 표시(`1. 이름` + 화살표) | `.c-stepper-input` |
| Labeled (라벨 Stepper) | Step 머리말(eyebrow) + 타이틀 동시 노출. 가로·세로 모두 | `.c-stepper-lbl-h` / `.c-stepper-lbl-col`, `.c-stepper-eyebrow` + `.c-stepper-title` |

## 상태 (States)
| 상태 | 규칙 / 토큰 |
|---|---|
| Default | 미진행. 번호 배지 `.c-stepper-badge-num` + 정보 아이콘, 래퍼 `.c-stepper-state-default` |
| Active | 현재 단계. `.c-stepper-badge-active`, 래퍼 `.c-stepper-state-active` |
| Success | 완료. `.c-stepper-badge-success` + 체크 아이콘, 래퍼 `.c-stepper-state-success` |
| Pending | 대기. `.c-stepper-badge-pending`, 래퍼 `.c-stepper-state-pending` |
| Error | 오류. `.c-stepper-badge-error` + X 아이콘, 래퍼 `.c-stepper-state-error` |

- 배지 안 아이콘/번호: 완료는 체크, 진행·사용자 단계는 상태 아이콘, 미진행은 번호.
- 데모 상태 셀 폭은 `160px` 고정.

## Anatomy (구성 요소)
1. **Node** (`.c-stepper-badge`): 단계 번호/체크를 담는 원형 인디케이터. 상태(대기·진행·완료·오류)에 따라 배경·테두리·아이콘이 전환.
2. **Node icon** (`.c-stepper-node-icon`): 노드 내부 아이콘. 완료는 체크, 진행·사용자 단계는 상태 아이콘.
3. **Label** (`.c-stepper-title`): 주요 텍스트. `--gmd-text-primary`.
4. **Body** (`.c-stepper-v-desc` / 보조문): 보조 텍스트. `--gmd-text-secondary`.
5. **Connector** (`.c-stepper-connector`, 활성 `-connector-active`): 단계 사이를 잇는 선. 이전 완료·현재 진행을 색·두께로 보조.
6. **Eyebrow** (`.c-stepper-eyebrow`, 약화 `-eyebrow-muted`): 라벨형의 "Step" 머리말.

## 조합 예시 (Composition)
- 라벨형 가로 배치: 라벨 → connector → 라벨 → connector 순으로 done→active→default를 라인으로 연결.
- 세로 배치: `.c-stepper-v-rail`(배지 + 라인) + `.c-stepper-v-body`(eyebrow/제목/설명).
- Step progress(3 steps) 트랙: dot(완료) → 라인(`-light-line-blue`/`-line-green`) → dot 반복으로 다단계 진행 표시.

## 주의 / 하드 규칙
- 세 단계 이상 또는 긴 폼에서만 사용한다.
- 단계 상태(완료·현재·대기·오류)를 반드시 시각적으로 구분한다.
- 간격은 토큰 사용: 행 간 `--gmd-space-2x`, 라벨군 `--gmd-space-3`/`--gmd-space-8`/`--gmd-space-12`. 보조문 크기 `--gmd-font-size-12`, 색 `--gmd-text-tertiary`.
- 프로그레스바·세로형 컨테이너는 `role="list"` 등으로 진행 단계임을 명시한다.
