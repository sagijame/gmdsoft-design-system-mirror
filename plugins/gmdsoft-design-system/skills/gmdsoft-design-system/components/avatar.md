# Avatar (아바타)

> 출처: index.html `#avatar` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 사용자나 객체를 알아보게 하는 작은 표식.
- 사진 → 이니셜 → 아이콘 순으로 가장 잘 구분되는 걸 쓴다.
- 프로필·연락처·메시지처럼 누구인지 빨리 짚어야 하는 곳에 둔다.

## 변형 (Variants / Types)
| 유형 | 클래스 | 내부 콘텐츠 |
|---|---|---|
| Image | `c-avatar` (+ `img`) | 이미지. 또는 단색 + on-primary 이니셜 |
| Initial | `c-avatar` | 이니셜 텍스트(Bold) (예: JD) |
| Icon | `c-avatar c-avatar-icon` | 사용자 아이콘(16×16). `role="img"` + `aria-label` |

- Size × Type = 12조합(sm·md·lg·xl × Image·Initial·Icon).

## 크기 (Sizes)
| 크기 | 클래스 | 치수 |
|---|---|---|
| sm | `c-avatar-sm` | 24px |
| md | `c-avatar-md` | 32px |
| lg | `c-avatar-lg` | 40px |
| xl | `c-avatar-xl` | 48px |

- 모든 크기 완전 원형. 내부 오버플로 제거.

## Anatomy (구성 요소)
Initial 유형(md) 기준. Image/Icon은 동일 컨테이너에서 내부 콘텐츠만 다름.
1. **Container** (`.c-avatar`): Size 별 크기(sm 24 · md 32 · lg 40 · xl 48), 완전 원형. 내부 오버플로 제거.
2. **Content**: Type=Initial은 이니셜 텍스트(Bold), Image는 이미지/단색+on-primary 이니셜, Icon은 사용자 아이콘.
3. **Border**: 1px inside stroke(`divider`). 밝은 배경에서도 윤곽이 보이도록 부여.

## 조합 예시 (Composition)
- **Size scale**: sm · md · lg · xl을 가로로 나란히 배치(`.c-avatar-scale`).
- **Avatar group (stack)**: 여러 아바타를 겹쳐 그룹으로 표현(`.c-avatar-stack`).

## 주의 / 하드 규칙
- 콘텐츠 우선순위: 사진 → 이니셜 → 아이콘.
- Image/Icon에는 `aria-label`(또는 Icon은 `role="img"` + `aria-label`)로 식별 정보를 부여한다.
- 컨테이너는 항상 완전 원형 + 1px inside border 유지.
