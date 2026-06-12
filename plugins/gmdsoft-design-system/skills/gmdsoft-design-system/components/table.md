# Table (테이블)

> 출처: COMPONENT_SPECS.md + DESIGN.md §4 + 절대 규칙 #7. 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준. (index.html 28종 카탈로그에는 별도 항목이 없으나, 업무형 화면의 핵심 데이터 표시 컴포넌트라 별도 정리.)

## 언제 쓰나
- 행/열 구조의 데이터를 스캔·비교·선택할 때.
- 업무형 화면의 핵심 데이터 표시 컨트롤.

## 구조 (Structure)
| 부분 | 토큰 바인딩 |
|---|---|
| Header row | foundation.grayScale.100 (`#F8F9FA`), text.primary, bodyMd, border.divider |
| Body row | background.slotActive(흰색), text.primary, bodyMd, border.divider |
| Hover row | foundation.primary.subtle (`#EBF2FA`) |
| Selected row | foundation.primaryScale.100 (`#D5E5F9`) + 좌측 3px primary 액센트 |

## 행 규칙 (Row rules)
| 규칙 | 값 |
|---|---|
| 최소 행 높이 | 44px |
| 셀 padding | 12px 16px |
| 헤더 텍스트 굵기 | Bold |
| 본문 텍스트 굵기 | Regular |
| Divider | 1px 하단 divider (`border-variant/divider` `#DFE0E4`) |
| 선택 표시 | 좌측 3px primary 액센트 |

## 상태 (States)
| 상태 | 규칙 |
|---|---|
| default | 흰색 본문 행 + 회색 헤더 행 |
| hover | 행 전체 primary subtle (`#EBF2FA`) |
| selected | 행 전체 primary-100 (`#D5E5F9`) + 좌측 primary 액센트 |
| dense | 44px 클릭 타깃이 보존될 때만 허용 |

## Anatomy (구성 요소)
- Header: 회색 배경(`#F8F9FA`) + Bold 본문. WCAG AA 준수.
- Body row: 흰색 슬롯 표면 + Regular 본문 + 하단 1px divider.
- Selection accent: 선택 행 좌측 3px primary 바.

## 조합 예시 (Composition)
- 선택형 목록: 헤더 + 본문 행, hover는 행 전체 primary subtle, 다중 선택 시 좌측 액센트.
- 페이지네이션과 조합 시 하단에 `components/pagination.md` 배치.

## 주의 / 하드 규칙
- 헤더 텍스트는 WCAG AA 준수 — 연한 회색 헤더 텍스트 금지.
- 행에 카드 그림자 추가 금지.
- 가로 오버플로 허용 — 컬럼을 사용 가능 폭 이하로 압축하지 않는다.
- 헤더 `#F8F9FA` / hover `#EBF2FA` / selected `#D5E5F9` 고정 (절대 규칙 #7).
