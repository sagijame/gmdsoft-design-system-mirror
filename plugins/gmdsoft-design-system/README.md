# gmdsoft-design-system (Claude Code 플러그인)

GMDSOFT 사내 디자인 시스템 v2.12을 Claude Code에 적용하는 플러그인. 마켓플레이스 `gmd-design-system`에서 설치한다.

## 설치

```bash
/plugin marketplace add http://172.16.254.18:8081/gmd/gmdsoft-design-system.git
/plugin install gmdsoft-design-system@gmd-design-system
```

GitLab 프로젝트가 Public이라 토큰·계정 없이 설치된다. 자세한 전제·팀 자동 배포는 저장소 루트 `README.md` 참고.

## 구성

```
plugins/gmdsoft-design-system/
├── .claude-plugin/plugin.json        # 플러그인 매니페스트
├── commands/                         # 슬래시 커맨드 3종
│   ├── gmd-audit.md                  # /gmd-audit — UI를 디자인 규칙 대비 검수
│   ├── gmd-component.md              # /gmd-component — 컴포넌트 스캐폴딩
│   └── gmd-tokens-to-xaml.md         # /gmd-tokens-to-xaml — 토큰→WPF/WinUI XAML
└── skills/gmdsoft-design-system/     # 디자인 시스템 스킬
    ├── SKILL.md                      # 라우터: 절대 규칙 10개 + 참조 파일 인덱스 (always-on ~310토큰)
    ├── components/*.md               # 컴포넌트 29종 구현 스펙 (on-demand Read)
    ├── DESIGN.md                     # 설계 의도·foundations·Do/Don't (9개 섹션)
    ├── COLOR_TOKENS.md               # 색상 토큰 전체 (token-path + Light/Dark HEX + CSS 변수)
    ├── tokens.json                   # 기계 판독 토큰 정본
    ├── guidelines.md                 # 다국어 잘림 등 운영 가이드라인
    └── preview.html / preview-dark.html  # 시각 카탈로그
```

## 동작 방식 (progressive disclosure)

- `SKILL.md`만 항상 로드(설명 + 라우터). 컴포넌트 29종 스펙은 **필요할 때만** `components/<name>.md`로 읽혀 컨텍스트 비용을 통제한다.
- 컴포넌트 구현의 **정본은 `components/<name>.md`**. `DESIGN.md §4`는 설계 의도 요약이다.

## 단일 출처

이 폴더가 skill의 단일 출처다. 원본 디자인 문서·토큰은 저장소 루트(`DESIGN.md`, `COLOR_TOKENS.md`, `tokens.json`, `index.html`)에 있고, 원본이 갱신되면 이 폴더의 사본도 함께 동기화한다.
