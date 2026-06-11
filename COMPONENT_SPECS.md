# GMDSOFT Component Specs

Implementation-oriented component specification for the first core set:

- `Button`
- `Input`
- `Table`

Use this file when translating GMDSOFT tokens into code components. This is narrower than `DESIGN.md`: it focuses on component API, required variants, and token bindings.

## 1. Button

### Supported variants

| Variant | Purpose | Required token bindings |
|---|---|---|
| `primary` | Main action | `button.primary.*`, `text.onPrimary`, `radius.sm`, `typography.size.bodyMd` |
| `seed` | Brand-heavy CTA | `button.seed.*`, `text.onPrimary`, `radius.sm`, `typography.size.bodyMd` |
| `outline` | Secondary action | `foundation.primary.base`, `background.overlayHover`, `background.overlayPressed`, `radius.sm` |
| `ghost` | Tertiary action | `foundation.tertiary.base`, `background.overlayHover`, `background.overlayPressed`, `radius.sm` |
| `danger` | Destructive action | `semantic.error.base`, `semantic.error.hover`, `semantic.error.pressed`, `text.onPrimary`, `radius.sm` |

### Supported sizes

| Size | Padding | Text token |
|---|---|---|
| `sm` | `space4` / `space12` | `bodySm` |
| `md` | `space8` / `space16` | `bodyMd` |
| `lg` | `space12` / `space24` | `bodyMd` |

### States

| State | Rule |
|---|---|
| `default` | Variant base token is required |
| `hover` | Variant hover token is required, except `outline` / `ghost` which use overlay tokens |
| `pressed` | Variant pressed token is required, except `outline` / `ghost` which use overlay tokens |
| `disabled` | No hover or pressed transition. Use disabled fill/border/text tokens only |

### Implementation rules

- Default radius is `radius.sm`.
- Default text size is `typography.size.bodyMd`.
- Font weight is `regular` by default.
- Do not introduce shadows on buttons.
- Do not use gradients.
- Icon-only buttons still follow the same variant/state tokens; they do not invent separate color rules.

### Canonical API

```ts
type ButtonVariant = "primary" | "seed" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};
```

## 2. Input

### Supported variants

| Variant | Purpose | Required token bindings |
|---|---|---|
| `default` | Standard single-line field | `background.slotActive`, `border.variantBase`, `text.tertiary`, `text.secondary`, `radius.sm` |
| `labelOn` | Floating label field | `foundation.primary.base`, `background.slotActive`, `radius.sm` |
| `borderless` | Surface-toned field | `background.surfacePrimary`, `text.secondary`, `radius.sm` |
| `icon` | Leading icon input | Same as `default` plus icon slot spacing |
| `searchDropdown` | Compact search/control field | Same visual rules as input family, compact height and search affordance |

### Supported sizes

| Size | Text token | Horizontal padding | Vertical padding | Example height |
|---|---|---|---|---|
| `sm` | `bodySm` | `space12` | `space4` | 26px |
| `md` | `bodyMd` | `space12` | `space4` | 30px |
| `lg` | `bodyLg` | `space12` | top 6px / bottom 5px | 45px |

### States

| State | Rule |
|---|---|
| `default` | White slot surface + neutral border + tertiary placeholder |
| `hover` | Base border 유지, hover overlay only |
| `focus` | Primary emphasis required. Use focus ring state token in prototype/web contexts |
| `filled` | Border unchanged, text switches to secondary/default text token |
| `disabled` | Gray background + muted border + disabled text |
| `error` | Error border or accent required, helper text uses error token |
| `success` | Success accent/helper is allowed for semantic extension |
| `loading` | Primary accent + spinner/helper line |

### Implementation rules

- Default radius is `radius.sm`.
- Input and textarea share state semantics.
- Do not invent custom focus blues or custom error reds; use tokenized state values only.
- `labelOn` and `labelOff` are the same component family, not different products.
- Textarea remains a sibling spec in the same family, but single-line input sizing and textarea sizing are independent.

### Canonical API

```ts
type InputVariant = "default" | "labelOn" | "borderless" | "icon" | "searchDropdown";
type InputSize = "sm" | "md" | "lg";
type InputState = "default" | "hover" | "focus" | "filled" | "disabled" | "error" | "success" | "loading";

type InputProps = {
  variant?: InputVariant;
  size?: InputSize;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  helperText?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};
```

## 3. Table

### Structure

| Part | Required token bindings |
|---|---|
| Header row | `foundation.grayScale.100`, `text.primary`, `typography.size.bodyMd`, `border.divider` |
| Body row | `background.slotActive`, `text.primary`, `typography.size.bodyMd`, `border.divider` |
| Hover row | `foundation.primary.subtle` |
| Selected row | `foundation.primaryScale.100`, `foundation.primary.base` |

### Row rules

| Rule | Value |
|---|---|
| Minimum row height | 44px |
| Cell padding | 12px 16px |
| Header text weight | Bold |
| Body text weight | Regular |
| Divider | 1px bottom divider |
| Selection indicator | Left 3px primary accent |

### States

| State | Rule |
|---|---|
| `default` | White body rows, gray header row |
| `hover` | Entire row uses primary subtle token |
| `selected` | Entire row uses primary-100 token with left primary accent |
| `dense` | Allowed only if 44px click target is preserved |

### Implementation rules

- Header text must remain WCAG AA compliant.
- Do not add card shadows to rows.
- Do not use light gray header text.
- Horizontal overflow is acceptable; do not compress columns below usable width.

### Canonical API

```ts
type TableDensity = "default" | "dense";

type TableProps<Row> = {
  rows: Row[];
  density?: TableDensity;
  selectable?: boolean;
  selectedRowIds?: string[];
  onRowSelect?: (rowId: string) => void;
  stickyHeader?: boolean;
};
```

## 4. Token Mapping Notes

### JSON source

- `tokens.json` is the canonical structured source.
- Prefer semantic bindings first, then foundation bindings.

### CSS source

- Use `tokens-light.css` as the base import.
- Layer `tokens-dark.css` through `data-theme="dark"`.

### Recommended implementation order

1. Build `Button`
2. Build `Input`
3. Build `Table`
4. Re-point preview/demo pages to the same component styles

## 5. Non-negotiable constraints

- Only the approved typography sizes may be used.
- Only 400 and 700 font weights may be used.
- Positive letter-spacing is prohibited.
- Every interactive component must define `default`, `hover`, `pressed`, and `disabled` behavior.
- No arbitrary HEX values may be introduced in component code.
