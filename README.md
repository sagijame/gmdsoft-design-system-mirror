# GMDSOFT Design System

GMDSOFT 사내 공유 디자인 시스템 저장소. AI 도구로 UI나 프로토타입을 만들 때 참고 기준으로 쓴다. 내부 디자인 시스템 v2.12(Figma 변수 컬렉션 `01_GMD_Theme_v2.12`)에서 추출한 디자인 언어를 문서·토큰·컴포넌트 카탈로그로 제공한다.

현재 공유 버전은 `VERSION` 파일의 `2.12.4`다. Figma 원본 컬렉션 버전(`v2.12`)과 공유 레포 릴리스 버전(`2.12.x`)은 분리해서 기록한다.

## 빠른 시작

| 하려는 일 | 여는 파일 |
|-----------|-----------|
| 디자인 시스템을 눈으로 확인 | **`index.html`** — 28개 컴포넌트 카탈로그, 라이트/다크 토글 내장 |
| AI 도구(Claude·Cursor·Codex)로 UI 생성 | `DESIGN.md` 를 참조 문서로 지정 |
| 색상 값 찾기 | `COLOR_TOKENS.md` (토큰 경로 + HEX, Light/Dark) |
| 컴포넌트 구현 스펙 확인 | `COMPONENT_SPECS.md` + `tokens.json` |
| Claude Code 프로젝트에 규칙 자동 적용 | `skill/` 패키지를 프로젝트에 복사 |

## 토큰 체계

모든 CSS 토큰은 `--gmd-` 접두사로 통일돼 있다. 파일은 용도별 두 세트다.

| 세트 | 파일 | 네이밍 | 용도 |
|------|------|--------|------|
| 카탈로그 | `tokens.css` | 플랫 (`--gmd-primary-default`) | `index.html` 전용 단일 출처, 변수 179개 |
| 구현 export | `tokens-light.css` / `tokens-dark.css` | 도메인 구조 (`--gmd-color-foundation-primary-base`) | HTML 프로토타입·웹 산출물 |

값의 플랫폼 무관 정본은 `tokens.json`과 `COLOR_TOKENS.md`다.

- **Windows 네이티브 앱 (WPF/WinUI)**: CSS·레퍼런스 구현 파일은 직접 사용할 수 없고 스타일 참고용이다. 실제 적용 시에는 `tokens.json`/`COLOR_TOKENS.md` 값을 XAML 리소스(ResourceDictionary) 등 플랫폼 형식으로 옮긴다.
- **HTML 프로토타입·웹 검토 산출물**: CSS export를 그대로 링크한다.

```html
<link rel="stylesheet" href="./tokens-light.css">
<link rel="stylesheet" href="./tokens-dark.css">
<link rel="stylesheet" href="./button.css">
<link rel="stylesheet" href="./input.css">
<link rel="stylesheet" href="./table.css">
```

다크 모드는 `<html data-theme="dark">` 로 전환한다. 색상 토큰만 교체되고 간격·구조 값은 동일하다.

## 파일 구성

| 파일 | 설명 |
|------|------|
| `index.html` | **통합 컴포넌트 카탈로그** — 28개 컴포넌트, 라이트/다크 토글, Figma v2.12 Docs/* 1:1 미러링 |
| `tokens.css` | `index.html` 단일 토큰 출처 — 색상·타이포·간격·그리드·아이콘 크기 |
| `VERSION` | 공유 레포 릴리스 버전 — 커밋 단위로 patch 증가 |
| `DESIGN.md` | 디자인 시스템 전체 문서 (9개 섹션, Google DESIGN.md alpha front matter 포함) |
| `COLOR_TOKENS.md` | 색상 토큰 전체 레퍼런스 — 토큰 경로 + HEX (Light/Dark) |
| `COMPONENT_SPECS.md` | Button·Input·Table 구현 스펙 — 변형/사이즈/상태 규칙과 토큰 바인딩 |
| `tokens.json` | 기계 판독용 토큰 정본 export (색상·타이포·간격·라운드·엘리베이션) |
| `tokens-light.css` / `tokens-dark.css` | 구현용 CSS 변수 (Light 기본 + Dark override) |
| `button.css` / `input.css` / `table.css` | 토큰 기반 레퍼런스 구현 (HTML 프로토타입용) |
| `color-chart.html` | Figma 전사용 색상 토큰 차트 (WinUI 스타일) |
| `gmd-logo-*.png`, `assets/` | `index.html` 렌더링 자산 |
| `skill/` | Claude Code 프로젝트 skill 배포 패키지 |

## 핵심 특성

- **플랫폼**: Windows 데스크톱 애플리케이션 (1920x1080 FHD 기준, 최소 1280x720)
- **앱 셸**: Title Bar (32px) + Side Navigation (240px/56px) + Content Area
- **Seed 색상**: `#4681DB` — 블루-그레이 팔레트 전체의 기준
- **간격**: 엄격한 4px 그리드 (예외 없음)
- **타이포**: 8개 크기만 사용 — 10, 12, 14, 16, 18, 20, 22, 28px
- **폰트**: Inter (기본), Pretendard (폴백)
- **굵기**: Regular (400), Bold (700) 두 가지만
- **듀얼 모드**: Light (기본·작업 기준) + Dark (모니터링 환경, 색상만 override)

## Google DESIGN.md Alpha 포맷

`DESIGN.md` 상단의 YAML front matter는 기계 판독용 토큰, Markdown 본문은 설계 의도와 상세 규칙이다. Stitch의 디자인 시스템 소스, CLI 에이전트의 선독 규칙, Google CLI 검증·export 입력으로 모두 쓸 수 있다.

```bash
npx --yes @google/design.md lint DESIGN.md
npx --yes @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json
npx --yes @google/design.md export --format dtcg DESIGN.md > tokens.json
```

## 토큰 출처

| 토큰 종류 | 출처 |
|-----------|------|
| Light 색상 | `01_GMD_Theme_v2.12/Light.tokens.json` |
| Dark 색상 | `01_GMD_Theme_v2.12/Dark.tokens.json` |
| 간격 | `00_GMD Foundations/light.tokens.json` |
| 타이포 | `desktop.tokens.json` |
