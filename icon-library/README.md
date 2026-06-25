# GMDSOFT Icon Library

GMDSOFT 디자인 시스템 아이콘 2,144종. 단일 출처는 Figma **MD-UX** 파일의 `Icon Export` 프레임(`zt8aRVV4gt9tNwjeyjOu1b`, node `1824:5`).

## 구성
| 폴더 | 스타일 | 개수 |
|---|---|---|
| `24/outline/` | 24px 아웃라인 | 132 |
| `16/outline/` | 16px 아웃라인 | 1,273 |
| `16/fill/` | 16px 채움 | 731 |
| `other/` | 기타 사이즈(17px 등) | 8 |

- `icons.html` — 전체 갤러리(이름 검색·16/24 사이즈·다크 토글).
- 각 SVG는 `viewBox`로 좌표계를 갖고, 크기는 마크업의 `width/height`로 제어한다.

## 색 규칙 — currentColor
- 모든 글리프 색·stroke는 `fill="currentColor"` / `stroke="currentColor"`로 정규화됨. SVG 안에 색을 박지 않는다.
- 부모 요소의 `color`(의미색 토큰 `--gmd-semantic-*`, `--gmd-text-*`)를 상속해 라이트/다크·상태색에 자동 대응.
- 루트 `<svg fill="none">`은 보존(채우기 없음을 의미).

### 투톤 → 단색 플랫화 (10종)
원본에 보조색(`#4681db`)이 있던 아래 아이콘은 단색 시스템에 맞춰 `currentColor`로 통일했다. 투톤이 필요하면 Figma 원본을 참조해 별도 처리한다.
`alert-manage-on`, `alert-manage-on2`, `date-range`, `email-icon163`, `log-error`, `messageto-chat-icon16`, `report-icon`, `setting-icon`, `table-optimal-view-icon`, `table-status-icon`

## 네이밍
- Figma 컴포넌트명(PascalCase) → kebab-case. 예: `ActionsToolsAdvancedImageEditor` → `actions-tools-advanced-image-editor`.
- outline/fill는 폴더로 구분. fill 변형은 원본명 그대로 `*-fill` 접미사를 유지.

## 사용 예
```html
<span style="color: var(--gmd-text-primary); display:inline-flex">
  <!-- icon-library/24/outline/search.svg 의 내용 -->
</span>
```

## 갱신
- 출처가 Figma `Icon Export` 프레임이므로, 추가/변경은 Figma에서 한 뒤 REST(`/v1/images?format=svg`)로 재추출 → currentColor 정규화 → 본 폴더 + `icons.html` 갱신.
