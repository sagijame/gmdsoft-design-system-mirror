---
description: GMDSOFT 디자인 시스템 토큰·규칙을 준수하는 컴포넌트(버튼·모달·테이블 등)를 스캐폴딩한다
argument-hint: "<컴포넌트명> [light|dark|both] [추가 요구사항]"
---

`gmdsoft-design-system` 디자인 시스템에 맞춰 다음 컴포넌트를 생성한다: $ARGUMENTS

## 절차

1. 대상 컴포넌트의 `components/<name>.md`를 Read한다 (예: button → `components/button.md`). 이름이 모호하면 스킬의 components 목록에서 가장 가까운 것을 고르고 사용자에게 확인.
2. 스펙의 **변형·크기·상태(base/hover/pressed/disabled)·Anatomy**를 그대로 반영한다.
3. 모든 색·간격·radius·폰트는 `--gmd-*` 토큰(또는 `tokens.json` 값)만 사용한다. 임의 HEX/px 금지.
4. Light/Dark 둘 다 동작하도록 CSS 변수 기반으로 작성한다. 인자에 모드 지정이 없으면 Light 기본 + Dark 토큰도 함께 정의.
5. 출력 형식은 요청을 따른다(HTML/CSS, WPF/WinUI XAML 등). 미지정 시 HTML/CSS.
6. 절대 규칙 10개를 위반하지 않는다. 생성 후 위반이 없는지 스스로 점검한다.
