# Classic Components Snippets

문서 사이트(`index.html`)에서 떼어낸 Bootstrap식 복붙 소스다. 외부 프로젝트에서는 토큰과 컴포넌트 CSS 한 장만 연결하고 필요한 HTML 조각을 붙인다.

```html
<link rel="stylesheet" href="./design-system/classic/components.css">
```

앱 프로젝트에서 로컬 npm 패키지로 설치할 때는 아래처럼 쓴다.

```bash
npm install ./design-system/classic
```

```js
import "@gmd/classic-design-system";
```

## 파일

- `button.html` — 기본 Primary / Secondary / Disabled 버튼
- `text-input.html` — 라벨 포함 텍스트 입력
- `checkbox.html` — 기본 체크박스
- `combobox.html` — 검색 아이콘 포함 콤보박스
- `accordion.html` — 단일/스택 아코디언
- `checkbox-tree.html` — 줄바꿈 없는 Checkbox Tree 행
- `ribbon-navigation.html` — Sidebar / Ribbon Navigation 스택
- `empty-state.html` — 빈 상태 안내 (기본 / sm / lg)
- `skeleton.html` — 최초 진입 자리표시 판 (낱개 / 조합 / 정지)
- `table.html` — 행/열 데이터 판 (기본 / 선택형 / 헤더 고정 / 조밀)

아이콘은 각 snippet 안에 inline SVG로 넣었다. 특히 combobox search 아이콘은 Design Kit의 `Icons / Standard / search`와 같은 24px viewBox 경로를 쓴다.
