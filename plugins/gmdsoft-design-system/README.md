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
├── hooks/hooks.json                  # SessionStart 훅 (레거시 사본 자동 정리)
├── scripts/cleanup-legacy-skill.js   # 레거시 개인 스킬 백업·제거 (Node, OS 중립)
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

## 레거시 마이그레이션 (자동)

플러그인 도입 전 `~/.claude/skills/gmdsoft-design-system/`에 스킬을 **수동 복사**해 둔 환경을 위해, `SessionStart` 훅이 설치 후 그 레거시 사본을 자동으로 정리한다(같은 name 중복·stale shadowing 방지).

- **대상**: 폴더 존재 + `SKILL.md` 있음 + `components/` **없음**(= 옛 수동 복사본)일 때만. 신버전/커스텀 사본은 건드리지 않는다.
- **동작**: 하드 삭제가 아니라 `~/.claude/skills/.legacy-backup/gmdsoft-design-system-<timestamp>/`로 이동(복구 가능).
- **안전**: idempotent(정리 후 no-op), 오류가 나도 세션을 막지 않음(non-blocking, 항상 `continue:true`). 모델 컨텍스트 비용 0.
- **이식성**: Node 기반이라 Windows/macOS/Linux 공통. `node`가 PATH에 없으면(드문 네이티브 단독 설치) 정리만 조용히 건너뛴다.
- 마이그레이션이 충분히 퍼지면 이후 버전에서 이 훅을 제거해도 된다.

## 단일 출처

이 폴더가 skill의 단일 출처다. 원본 디자인 문서·토큰은 저장소 루트(`DESIGN.md`, `COLOR_TOKENS.md`, `tokens.json`, `index.html`)에 있고, 원본이 갱신되면 이 폴더의 사본도 함께 동기화한다.
