# Operating Model

## Purpose

이 문서는 GMDSOFT 디자인 시스템 저장소를 어떤 기준으로 평가하고, 언제 변경하고, 무엇을 버전 대상으로 볼지 정리한 운영 문서다.

## Repository Position

- 이 저장소는 디자인 시스템 산출물 저장소다.
- 기획 원문은 저장소 기준 산출물이 아니다.
- 외부 기획/요구사항 문서는 디자인 시스템 변경 필요성을 판단하기 위한 입력이다.

## Core Flow

변경 흐름은 아래 순서를 기본으로 한다.

1. 외부 입력 문서를 읽는다.
2. 현재 디자인 시스템 관점에서 평가한다.
3. 갭과 영향 범위를 정리한다.
4. 버전 영향도를 판단한다.
5. 필요한 산출물만 수정한다.
6. 검토 후 커밋한다.

핵심은 "기획 입력 -> 바로 마일스톤"이 아니라 "기획 입력 -> 평가 -> 버전 판단"이다.

## Evaluation Axes

평가는 최소 아래 축으로 본다.

### 1. Token Coverage

- 필요한 색상 역할이 이미 정의돼 있는가
- 타이포 계층이 충분한가
- spacing, radius, border, elevation 체계가 부족하지 않은가

### 2. Component Coverage

- 실제 필요한 UI 패턴을 현재 규칙으로 커버하는가
- 신규 패턴이 필요한가, 기존 패턴 조합으로 해결 가능한가

### 3. Consistency

- 같은 역할 요소가 다른 규칙으로 표현되고 있지 않은가
- Light/Dark에서 의미 체계가 유지되는가

### 4. Extensibility

- 이번 변경이 이후 제품군에도 재사용 가능한가
- 특정 화면 예외를 시스템 규칙처럼 넣고 있지 않은가

### 5. Index Catalog Fitness

- `index.html` 카탈로그가 변경 내용을 충분히 보여주는가
- 문서 변경만 있고 시각 검토 수단이 비어 있지 않은가

### 6. Operational Clarity

- 무엇이 바뀌었는지 설명 가능한가
- 이번 변경이 시스템 수준 변경인지 단순 보정인지 구분 가능한가

## Change Classification

평가 후 변경은 아래처럼 분류한다.

### A. No System Change

- 기획 요구는 있었지만 현행 시스템으로 충분히 대응 가능
- 저장소 변경 없음 또는 설명 보강만 수행

### B. Minor System Adjustment

- 기존 체계 안에서 토큰/`index.html` 카탈로그/문구 보정 수준
- 규칙 파괴 없이 세부 보완

### C. System Extension

- 신규 토큰 역할, 신규 패턴, 신규 컴포넌트 규칙 추가
- 기존 구조는 유지하되 커버 범위가 넓어짐

### D. System Revision

- 핵심 토큰 구조, 기본 컴포넌트 규칙, Light/Dark 전략 같은 기반 변경
- 하위 산출물에 연쇄 영향 발생 가능

## Versioning Principle

버전은 입력 문서 차수가 아니라 디자인 시스템 변경 강도로 판단한다.

- 공유 레포 릴리스 버전은 `MAJOR.MINOR.PATCH` 형식으로 `VERSION` 파일에 기록한다.
- Figma 원본 컬렉션 버전(`v2.12`)은 출처 표기이고, 공유 레포 릴리스 버전(`2.12.x`)과 섞지 않는다.
- 커밋마다 `PATCH`를 1씩 올린다. 예: `2.12.0` → `2.12.1` → `2.12.2`.
- 버전 변경 커밋에는 `VERSION`, 사람이 보는 대표 문서, 기계 판독용 토큰 메타를 함께 맞춘다.
- patch: 오탈자, 설명 보정, `index.html` 미세 수정, 기존 규칙 내 경미한 조정
- minor: 신규 토큰 추가, 신규 컴포넌트 패턴 추가, 기존 체계 확장
- major: 토큰 구조 개편, 핵심 규칙 변경, 하위 호환 영향이 큰 시스템 수정

## Commit Rule

커밋은 기획 차수명이 아니라 시스템 변경 단위로 자른다.

좋은 예:

- `refine button disabled index catalog`
- `add semantic badge color mapping`
- `revise dark surface hierarchy`

피해야 할 예:

- `apply ai work v1.3`
- `update planning`

## Output Rule

이 저장소에서 주로 변경되는 산출물은 아래다.

- `DESIGN.md`
- `COLOR_TOKENS.md`
- `index.html`
- 운영 규칙 문서

기획 원문, 기능 요구사항 서술, 업무 메모는 저장소의 기본 산출물이 아니다.

## Review Questions

변경 전후에 최소 아래를 확인한다.

- 이번 변경이 시스템 수준 변경인가, 특정 화면 대응인가
- 새 토큰 없이 해결 가능한가
- 새 규칙이 기존 규칙과 충돌하지 않는가
- Light/Dark 양쪽에 일관되게 반영됐는가
- `index.html`에서 검토 가능한가
- 버전 영향도를 설명할 수 있는가
