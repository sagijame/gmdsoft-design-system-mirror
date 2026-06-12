# Tab (탭)

> 출처: index.html `#tab` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 한 화면 안에서 관련된 콘텐츠 묶음을 갈아끼울 때.
- 흐름을 벗어나지 않고 여러 보기를 오갈 때.
- 단순 페이지 넘김(다음/이전) 용도로는 쓰지 않는다.

## 변형 (Variants / Types)
| 변형 | 용도 | 핵심 토큰 / 규칙 |
|---|---|---|
| Pills | 알약형 배경 강조 | 활성 = 블루 필(`--gmd-primary-default` `#135DB5` 배경 + `--gmd-text-on-primary` 텍스트), `tabs-pills` |
| Underline | 하단 밑줄 강조 | 활성 = 블루 텍스트 + 밑줄(`--gmd-primary-default`), `tabs-underline` |

- 탭 라벨 앞 아이콘(`ico`)과 카운트 뱃지(`tab-count`)를 더해 상태·수량을 함께 표현 가능.
- 컨테이너는 `role="tablist"`, 각 탭은 `role="tab"` + `aria-selected`.

## 크기 (Sizes)
| 크기 | 치수 | 텍스트 토큰 |
|---|---|---|
| sm | 높이 10px | 조밀한 영역 |
| md (기본) | 높이 12px | 기본값 |
| lg | 높이 14px | 강조 영역 |
| xl | 높이 16px | 강조 영역 |

- class: `tab-sm` / `tab-md` / `tab-lg` / `tab-xl`. 기본은 md.

## 상태 (States)
| 상태 | 규칙 / 토큰 |
|---|---|
| Default (base) | 비활성 탭. `aria-selected="false"` |
| Hover | 포인터 올림 — 블루(`--gmd-primary-default`). class `is-hover` |
| Active | 현재 탭 — 블루 + 밑줄(underline) 또는 블루 필(pills). `aria-selected="true"` |
| Disabled | 선택 불가 — tertiary(`--gmd-text-tertiary` `#868E96`). `disabled` 속성 |

## Anatomy (구성 요소)
- Tab item: 각 보기로 전환하는 버튼. `role="tab"`과 selected 상태를 가짐.
- Label: 보기 이름. 짧고 병렬적인 명사 사용.
- Active indicator: pills 배경 또는 underline으로 현재 보기 표시.

## 조합 예시 (Composition)
- Underline 탭 묶음(요약 / 활동 `tab-count` 12 / 설정) + 하단 탭 패널(`card card-outline`). 선택된 탭의 콘텐츠가 같은 화면 안에서 전환.

## 주의 / 하드 규칙
- 페이지 단순 이동이 아니라 같은 화면 내 보기 전환에만 사용.
- 높이는 10/12/14/16px 네 단계만. 임의 px 금지.
- 활성 강조색은 `--gmd-primary-default` `#135DB5` 고정, disabled는 `--gmd-text-tertiary`.
- 라벨은 짧고 병렬적인 명사로.
- 접근성: `role=tablist`/`role=tab`/`aria-selected` 필수.
