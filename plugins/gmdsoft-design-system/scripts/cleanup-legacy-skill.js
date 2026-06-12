#!/usr/bin/env node
/*
 * 레거시 개인 스킬 사본 정리 (백업 후 제거)
 *
 * 배경: 플러그인 도입 전, 팀원들이 `~/.claude/skills/gmdsoft-design-system/`에
 * 디자인 시스템 스킬을 수동 복사해 두었다. 플러그인을 설치하면 같은 name의
 * 스킬이 중복되고, 평소 호출(`/gmdsoft-design-system`)이 옛(stale) 개인 사본으로
 * 잡히는 문제가 있다. 이 스크립트는 플러그인 SessionStart hook에서 실행되어,
 * 그 레거시 사본을 백업 폴더로 옮겨 단일 출처(플러그인)만 남긴다.
 *
 * 안전 원칙:
 *  - 레거시 판정이 확실할 때만 건드린다: 폴더 존재 + SKILL.md 있음 + components/ 없음.
 *    (components/가 있으면 신버전/커스텀 사본이므로 손대지 않는다.)
 *  - 하드 삭제가 아니라 `.legacy-backup/`으로 이동(복구 가능).
 *  - idempotent: 정리 후엔 대상이 없어 no-op.
 *  - 어떤 오류에도 세션을 막지 않는다(항상 continue:true, exit 0).
 *  - OS 중립(Node 표준 모듈만 사용). node가 PATH에 없으면 hook 자체가 비차단 실패.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');

function emit(extra) {
  const out = {
    continue: true,
    suppressOutput: true,
    hookSpecificOutput: { hookEventName: 'SessionStart' },
  };
  if (extra && extra.additionalContext) {
    out.hookSpecificOutput.additionalContext = extra.additionalContext;
  }
  if (extra && extra.systemMessage) {
    out.systemMessage = extra.systemMessage;
  }
  try {
    process.stdout.write(JSON.stringify(out));
  } catch (_) {
    /* stdout 실패해도 무시 */
  }
}

try {
  // CLAUDE_CONFIG_DIR가 설정돼 있으면 그쪽이 .claude 루트(사용자가 위치 변경한 경우).
  const configDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude');
  const skillsDir = path.join(configDir, 'skills');
  const legacyDir = path.join(skillsDir, 'gmdsoft-design-system');
  const skillMd = path.join(legacyDir, 'SKILL.md');
  const componentsDir = path.join(legacyDir, 'components');

  const isLegacy =
    fs.existsSync(legacyDir) &&
    fs.statSync(legacyDir).isDirectory() &&
    fs.existsSync(skillMd) &&        // 실제 스킬 폴더인지 확인
    !fs.existsSync(componentsDir);   // components/ 없음 = 옛 수동 복사본

  if (!isLegacy) {
    emit(); // 정리할 것 없음 → 조용히 no-op
    process.exit(0);
  }

  // `.legacy-backup/gmdsoft-design-system-<timestamp>/`로 이동
  const backupRoot = path.join(skillsDir, '.legacy-backup');
  fs.mkdirSync(backupRoot, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const dest = path.join(backupRoot, `gmdsoft-design-system-${stamp}`);
  fs.renameSync(legacyDir, dest);

  emit({
    additionalContext:
      '레거시 디자인 시스템 스킬 개인 사본(~/.claude/skills/gmdsoft-design-system)을 ' +
      '.legacy-backup/으로 옮겨 정리했습니다. 이제 플러그인 버전이 단일 출처입니다.',
    systemMessage:
      'GMDSOFT 디자인 시스템: 레거시 개인 스킬 사본을 백업(.legacy-backup/) 후 제거했습니다. 플러그인 버전이 최신·단일 출처입니다.',
  });
  process.exit(0);
} catch (_) {
  // 어떤 경우에도 세션을 막지 않는다.
  emit();
  process.exit(0);
}
