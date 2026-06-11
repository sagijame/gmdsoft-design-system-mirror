# GMDSOFT Design System — Claude Code Skill

Claude Code가 GMDSOFT 사내 디자인 시스템(v2.12)을 자동으로 따르도록 만드는 **프로젝트 단위 skill** 패키지. MD-VIDEO, MD-SCANNER, MD-PLATFORM 등 GMDSOFT 제품 작업에서 색상·타이포·레이아웃·컴포넌트 규칙을 일관되게 적용한다.

## 무엇이 들어있나

이 `skill/` 폴더 아래의 `.claude/` 트리가 그대로 배포 단위다.

```
skill/
└── .claude/
    └── skills/
        └── gmdsoft-design-system/
            ├── SKILL.md            ← Claude가 자동 로드하는 트리거/규칙 정의
            ├── DESIGN.md           ← 9개 섹션 디자인 시스템 전체 스펙
            └── COLOR_TOKENS.md     ← 130개 색상 토큰 + CSS 변수
```

## 설치 (사용할 프로젝트에서)

이 저장소의 `skill/.claude/` 폴더를 **자기 프로젝트 루트로 복사**하면 끝이다. ZIP 같은 거 없다.

### 방법 A — git clone 후 복사 (권장)

```bash
# 1. 이 저장소를 어딘가에 clone (한 번만)
git clone http://172.16.254.18:8081/gmd/gmdsoft-design-system.git

# 2. 사용할 프로젝트로 .claude 폴더 복사
#    Windows (PowerShell):
Copy-Item -Recurse gmdsoft-design-system\skill\.claude D:\source\md-video\

#    Git Bash:
cp -r gmdsoft-design-system/skill/.claude /d/source/md-video/
```

### 방법 B — 웹에서 직접 받아서 복사

1. 사내 GitLab/Gitea(`http://172.16.254.18:8081/gmd/gmdsoft-design-system`)에서 `skill/.claude/skills/gmdsoft-design-system/` 디렉터리 다운로드
2. 사용할 프로젝트 루트 아래 `.claude/skills/gmdsoft-design-system/` 경로가 되도록 그대로 붙여넣기
3. 이미 `.claude/` 폴더가 있다면 `skills/` 하위만 병합

### 설치 후

1. **Claude Code를 새 세션으로 재시작** (`/clear`로는 부족)
2. 새 세션의 시스템 메시지에 `gmdsoft-design-system`이 available skills 목록에 나타나면 정상

## 동작 확인

새 세션에서 둘 중 하나로 테스트:

- 명시적 호출: `/gmdsoft-design-system`
- 자연어 트리거:
  > "GMDSOFT 디자인 시스템에 맞춰서 Primary 버튼 HTML 만들어줘"

기대 결과: `#135DB5` Primary 색상, 4상태(base/hover/pressed/disabled), 4px radius, Inter 14px 등이 자동 반영되어야 한다.

## 팀 공유 (선택)

복사해 넣은 `.claude/skills/gmdsoft-design-system/`을 사용 프로젝트의 git에 커밋하면 팀원이 별도 설치 없이 자동 공유된다. 개인별 설치를 원하면 사용 프로젝트의 `.gitignore`에 추가.

## 업데이트

이 저장소를 `git pull`로 갱신한 뒤, 같은 방식으로 `.claude/` 폴더를 다시 복사해 덮어쓴다.

## 제거

사용 프로젝트의 `.claude/skills/gmdsoft-design-system/` 폴더 삭제. 다른 skill이 같은 위치에 있다면 영향 없음.

## 적용 범위

이 skill은 **복사해 넣은 프로젝트 폴더에서만** 동작한다. 다른 프로젝트나 전역 Claude Code 사용에는 영향이 없다. 디자인 시스템을 따라야 하는 프로젝트에만 설치하면 된다.

## 원본/문의

원본 디자인 시스템 문서는 이 저장소 루트의 `DESIGN.md`, `COLOR_TOKENS.md`. `skill/.claude/skills/gmdsoft-design-system/` 안의 사본은 배포 자기완결성을 위한 것으로, 원본이 갱신되면 같이 동기화한다.
