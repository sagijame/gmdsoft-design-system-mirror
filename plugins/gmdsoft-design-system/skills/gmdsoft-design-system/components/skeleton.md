# Skeleton (자리표시 판)

> 출처: index.html `#skeleton`. **Figma 미보유 — classic 이 선행 정의한 컴포넌트다**(Empty State 에 이어 둘째). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 화면이 아직 그려지지 않은 **최초 진입**에 콘텐츠가 들어올 자리를 미리 잡을 때.
- 진행률 개념이 없다. 수치도 라벨도 붙이지 않는다.
- 이미 그려진 화면에서 도는 작업은 쓰지 않는다 — 사용자가 방금 읽던 내용을 잃는다.

## 어느 로더를 쓰는가
| 무엇을 기다리는가 | 쓰는 것 | 화면에 뜨는 것 |
|---|---|---|
| 최초 진입 — 아직 아무것도 안 그려졌다 | **Skeleton** | 자리만 잡는다. 수치도 라벨도 없다 |
| 끝이 보이는 작업 — 업로드처럼 총량을 안다 | `progress` determinate | 채움 비율 + 퍼센트 |
| 끝을 모르는 작업 — 서버 응답을 기다린다 | `progress` indeterminate 또는 `spinner` | 동작 라벨(`등록 중…`) |
| 누른 버튼 하나가 처리 중이다 | `button` Processing | 버튼 안 스피너 + 입력 차단 |

가르는 기준은 **걸리는 시간이 아니라 기다리는 대상**이다. 최초 진입에 스피너를 쓰면 빈 화면이 멈춘 것처럼 보인다.

## 유형 (Type)
| 유형 | 클래스 | 대체하는 것 | radius |
|---|---|---|---|
| Line | `c-skeleton-line` | 글줄 | `--gmd-radius-sm` |
| Block | `c-skeleton-block` | 카드·이미지 등 면 | `--gmd-radius-md` (카드와 같게) |
| Circle | `c-skeleton-circle` | Avatar 자리 | `50%` |

## 크기 (Size)
| 변형 | 높이 | 용도 |
|---|---|---|
| `c-skeleton-line.is-sm` | 12px | 보조 문구 |
| `c-skeleton-line` (기본) | 16px | 본문 14px 한 줄 |
| `c-skeleton-line.is-lg` | 20px | 제목 |
| `c-skeleton-block` | 72px | 카드·이미지 자리 |
| `c-skeleton-circle` | 40×40px | 아바타 자리 |

높이는 대체할 글자의 크기가 아니라 **줄 높이**에 맞춘다. 폭은 콘텐츠마다 달라 클래스로 정하지 않고 그 자리에서 지정한다.

## 구성 요소 (Anatomy)
| # | 요소 | 클래스 | 필수 | 규칙 |
|---|---|---|---|---|
| 1 | Placeholder | `c-skeleton` | **필수** | 들어올 요소의 자리. `--gmd-background-section` 으로 면을 채우고 대체할 요소의 크기와 radius 를 그대로 쓴다. 카드나 섹션 위에 올려야 읽힌다 — Dark 에서 `--gmd-surface-base` 와 값이 같아 맨 표면에 그대로 놓으면 판이 사라진다 |
| 2 | Sheen | `c-skeleton::after` | 선택 | 판 위를 한 방향으로 훑는 빛줄기. 아직 살아 있다는 표시이며 진행률을 뜻하지 않는다. `c-skeleton.is-static` 으로 끈다 |

## 상태
**4상태를 갖지 않는다.** 상호작용 요소가 아니라 콘텐츠가 도착할 때까지 자리를 지키는 표시다. hover·pressed·disabled 는 없다.

## 규칙
- 실제로 들어올 화면과 **같은 골격, 같은 여백**으로 놓는다. 자리가 어긋나면 콘텐츠 도착 시 레이아웃이 튀어 스켈레톤을 쓴 이유가 없어진다.
- 묶음 컨테이너에 `aria-busy="true"` 를 걸고, 판 하나하나에는 이름을 주지 않는다.
- 빛줄기는 장식이라 빼도 뜻이 남는다. `prefers-reduced-motion: reduce` 에서 자동으로 꺼지고, 판이 여러 개라 산만하면 `is-static` 으로 직접 끈다. 회전 자체가 뜻인 `spinner` 와 다른 점이다.
- 배치(gap·padding·배경)는 Skeleton 소유가 아니라 호스트 화면 몫이다.

## 마크업
`snippets/skeleton.html` 참조. CSS 는 `skeleton.css`(이 저장소에는 `components.css` 가 없다). 판에 padding·border·글자가 없어 `empty-state.css` 의 `.gmd-component` 스코프 리셋에 기대지 않는다.

## 신설 근거
정본에 최초 진입용 로더가 없어 Progress 와 Spinner 가 그 자리까지 대신 쓰이고 있었다. 부재 확인: `search_design_system`(파일 `Z1ug6AJn88Qcpt9dseua3e`)으로 `Skeleton`·`Loading placeholder`·`Shimmer` 3개 검색어 조회 → Design Kit v2 계열에서 스켈레톤·자리표시 계열 0건(2026-08-27). 조사 이력 전문은 `design-system/classic/components.md` 변경 이력 2026-08-27 항목에 있다.
