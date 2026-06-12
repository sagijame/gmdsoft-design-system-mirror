---
description: GMDSOFT 디자인 토큰(tokens.json/COLOR_TOKENS)을 WPF/WinUI XAML ResourceDictionary로 변환한다
argument-hint: "[light|dark|both] [색상|전체]"
---

`gmdsoft-design-system` 토큰을 WPF/WinUI XAML 리소스로 변환한다: $ARGUMENTS

## 절차

1. 스킬의 `tokens.json`(기계 판독 정본) 또는 `COLOR_TOKENS.md`를 Read한다.
2. 매핑:
   - 색상 → `<Color>` + `<SolidColorBrush>`
   - 간격·폰트 크기 → `<sys:Double>`
   - radius → `<CornerRadius>`, padding → `<Thickness>`
3. 키 이름은 토큰 경로 기반으로 짓는다 (예: `Gmd.Primary.Default`, `Gmd.Text.Primary`, `Gmd.Radius.Sm`).
4. Light/Dark는 **별도 ResourceDictionary**로 분리한다. 인자가 `both`면 둘 다, 미지정 시 Light + Dark 둘 다 출력.
5. 임의 값 생성 금지 — 토큰에 있는 값만 변환한다. 토큰에 없어 변환 불가한 항목은 따로 보고한다.
6. 완성된 ResourceDictionary XAML 전문을 출력한다. (WPF는 `xmlns:sys="clr-namespace:System;assembly=mscorlib"` 등 필요한 네임스페이스 포함)
