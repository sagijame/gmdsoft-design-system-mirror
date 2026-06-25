# GMD Classic — Icon Library

classic 디자인 시스템 아이콘 105종. 개발자 핸드오프용 단일 출처.

## 구성
- `*.svg` — 개별 아이콘. 슬래시(`/`) 가 든 큐레이션 아이콘은 파일명에서 `__` 로 치환(예: `formatting__bold.svg`).
- 각 SVG `fill="currentColor"`. viewBox 는 아이콘별로 다름(사용 세트 16그리드, 큐레이션 세트 24그리드). 마크업에서 크기는 width/height 로 제어.
- `icons.html` — 전체 갤러리.

## 출처 / 라이선스
- **Figma Design Kit v2.1** (`Z1ug6AJn88Qcpt9dseua3e`) 에서 직접 추출한 실제 vector geometry.
- 사용 16종은 Figma 평면 세트(= Bootstrap Icons, MIT) 와 동일 출처. 큐레이션 89종은 GMD 에디터 툴바 세트.

## 사용 규칙
- **색**: `fill="currentColor"`. 부모 `color`(의미색 토큰 `--gmd-semantic-*`, `--gmd-text-*`)를 상속. SVG 안에 색을 박지 않는다.
- **크기**: 토큰으로만. `--gmd-icon-sm 16` / `--gmd-icon-md 20` / `--gmd-icon-lg 24` / `--gmd-icon-xl 32`.
- **컨테이너 vs 글리프**: 원형 배경 안에 넣을 때 컨테이너 = 글리프 + padding*2. 전역 `box-sizing:border-box` 에서 컨테이너 width 가 padding 을 포함하므로 짜부 주의(예: 24px 원 + 4px padding → 글리프 16px).
- **네이밍**: 사용 세트는 kebab-case 단일 이름. 큐레이션 세트는 `카테고리/이름`(`formatting/bold`, `tables-cells/insertTable`).

## 사용 세트 (16) — 컴포넌트에서 직접 참조
| 이름 | 용도 |
|---|---|
| `arrow-right` | 다음 단계·이동·CTA 후행 화살표 |
| `arrow-up` | 상단 이동·정렬 오름차순 |
| `check` | 체크(체크박스·완료) |
| `check-circle` | 성공·완료(원형 체크) |
| `chevron-down` | 드롭다운·아코디언 펼침 |
| `chevron-up` | 아코디언 접힘·정렬 |
| `download` | 다운로드 액션 |
| `exclamation` | 경고 글리프(원형 조합) |
| `exclamation-circle` | 주의·경고(원형) |
| `exclamation-triangle` | warning 배너·경고 다이얼로그 |
| `home` | 사이드바·리본 내비 홈 |
| `info-circle` | info 배너·안내 다이얼로그 |
| `info-i` | 정보 글리프(원형 조합) |
| `search` | 검색 입력·필터 |
| `send` | 전송·메시지(토스트) |
| `x` | 닫기(모달·배너·태그·토스트) |

## 큐레이션 세트 (89) — GMD 에디터/툴바 아이콘
- **arrows** (11): `back`, `redo`, `verticalAlignTop`, `codeView`, `undo`, `return`, `fullscreen`, `verticalAlignBottom`, `replaceImage`, `exitFullscreen`, `verticalAlignMiddle`
- **misc-parts** (3): `Arrow ↓`, `Arrow`, `Dropdown`
- **standard** (9): `help`, `openLink`, `remove`, `insertEmbed`, `add`, `search`, `star`, `cancel`, `anchors`
- **paragraph** (12): `paragraphMore`, `alignLeft`, `lineHeight`, `paragraphStyle`, `alignRight`, `outdent`, `alignCenter`, `orderedList`, `indent`, `paragraphFormat`, `alignJustify`, `unorderedList`
- **formatting** (15): `italic`, `superscript`, `inlineStyle`, `backgroundColor`, `underline`, `fontFamily`, `clearFormatting`, `edit`, `strikeThrough`, `fontSize`, `textColor`, `bold`, `subscript`, `inlineClass`, `textMore`
- **actions-tools** (10): `print`, `fileInsert`, `upload`, `fontAwesome`, `advancedImageEditor`, `spellcheck`, `linkStyles`, `cogs`, `selectAll`, `unlink`
- **content** (12): `insertVideo`, `insertLink`, `mention`, `smile`, `pageBreaker`, `insertImage`, `insertMore`, `symbols`, `insertFile`, `tags`, `blockquote`, `horizontalLine`
- **files-images** (8): `imageAltText`, `imageManager`, `imageCaption`, `imageSize`, `imageClass`, `pdfExport`, `imageDisplay`, `fileManager`
- **tables-cells** (9): `insertTable`, `row`, `cellBorderColor`, `tableHeader`, `tableStyle`, `cellOptions`, `cellStyle`, `columns`, `cellBackground`

> 단일 출처: classic `index.html` 의 `ICONS` 맵과 본 폴더는 같은 geometry 를 공유한다. 추가/변경 시 양쪽을 함께 갱신한다.
