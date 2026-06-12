# Toast (토스트)

> 출처: index.html `#toast` (Figma v2.12 / MD-UX Docs 미러). 색·치수·간격은 tokens.css `--gmd-*` 토큰 기준.

## 언제 쓰나
- 작업 결과를 화면 모서리에 잠깐 띄웠다 스스로 사라지는 알림.
- 흐름을 막지 않아 '저장됨' 같은 가벼운 통지에 적합.
- 반드시 사용자에게 확인시켜야 하는 내용에는 쓰지 않는다(Dialog 사용).

## 변형 (Variants / Types)
### 카드형 토스트 (toast-card) 5종
| 유형 | 마크업 | 용도 |
|---|---|---|
| Default | `toast-card` + `.tc-icon`(check-circle) | 기본 알림 |
| Avatar | `toast-card` + `.tc-avatar` | 사용자 활동 알림 |
| Interactive | `toast-card` + `.tc-actions`(Button) | 액션 버튼 포함 알림 |
| Push Notification | `toast-card` + `.tc-nested` + `.tc-time` | 시스템/중첩 알림 |
| Simple | `toast-card simple` | 한 줄 알림 (닫기 없음) |

- 컨테이너: 흰 면 + soft 그림자 + 닫기(`.tc-close`, x 아이콘).
- 액션은 디자인 시스템 Button 재사용(`btn btn-secondary btn-sm`, `btn btn-primary btn-sm`).

### Semantic 상태 토스트 (toast, Figma `Toast_semantic`)
색 텍스트 + 동색 1px 보더 + 틴트 배경, **아이콘 없음**.

| 상태 | 클래스 | 글자색 규칙 |
|---|---|---|
| Error | `toast toast-error` | 의미색(error) 글자 |
| Success | `toast toast-success` | 의미색(success) 글자 |
| Warning | `toast toast-warning` | 가독성 위해 본문색 var(--gmd-text-primary) |
| Info | `toast toast-info` | 가독성 위해 본문색 var(--gmd-text-primary) |

## 상태 (States)
- 카드형: Close 버튼으로 수동 닫기 + 자동 소멸.
- Semantic형: 위 4색 상태로 의미 전달, 별도 hover/pressed 없음.

## Anatomy (구성 요소)
1. Container / Icon — 외곽 컨테이너와 의미 아이콘. 카드형은 흰 면·soft shadow, semantic형은 틴트 배경·동색 보더.
2. Title — 알림 제목. Bold 14px, var(--gmd-text-primary). 한 줄 토스트에서는 생략 가능.
3. Body — 알림 본문. Regular 14px, text/secondary 톤으로 변경 내용 설명.
4. Action / Close — 선택 액션(Button 재사용)과 닫기 버튼. 닫기는 우상단 14px 아이콘 슬롯.

## 조합 예시 (Composition)
- 카드형 Interactive: info-circle 아이콘 + 제목 `설정이 저장되었습니다` + 본문 `변경 사항은 다음 로그인부터 적용됩니다.` + 우상단 닫기.
- 카드형 미리보기 행 간격 var(--gmd-space-4).

## 주의 / 하드 규칙
- 반드시 확인이 필요한 내용에는 토스트를 쓰지 않는다.
- Semantic 토스트에는 아이콘을 넣지 않는다.
- warning·info는 의미색이 흐려 가독성 떨어지므로 본문색 var(--gmd-text-primary)로 표기(error·success만 의미색 글자).
- 액션 버튼은 새로 만들지 말고 Button 컴포넌트 재사용. 닫기 아이콘은 14px.
