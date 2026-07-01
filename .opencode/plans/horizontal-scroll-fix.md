# Horizontal Scroll — Vertical Scroll Jank Fix

## The Problem
On touch devices, vertical swipes that land near horizontal scroll containers cause the browser to repeatedly negotiate scroll direction, producing janky vertical scroll. Root cause: missing `overflow: hidden` on parent sections lets content create invisible page-level overflow, confusing the browser.

## Files to Edit

### 1. `src/pages/Sermons.module.css` (line 63)
**Add `overflow: hidden`** to the base `.section` rule:
```css
.section {
  padding: var(--space-10) var(--container-padding);
  background: var(--spc-cream-100);
  overflow: hidden;       /* ← add this */
  touch-action: pan-y;
}
```

### 2. `src/components/sections/MinistryFloorPlan.module.css`
**Add `overflow: hidden`** to the base `.section` rule (line 1):
```css
.section {
  padding: var(--space-10) var(--container-padding);
  background: var(--spc-navy-900);
  position: relative;
  overflow: hidden;       /* ← add this */
}
```

**Add `overflow: hidden` and `touch-action: pan-y`** inside `@media (max-width: 599px)` at line 410:
```css
@media (max-width: 599px) {
  .section {
    padding: var(--space-6) 0 var(--space-6) var(--container-padding);
    overflow: hidden;     /* ← add this */
    touch-action: pan-y;  /* ← add this */
  }
  /* ... rest stays the same */
```

## Summary of Changes
| File | What | Why |
|---|---|---|
| `Sermons.module.css` | Add `overflow: hidden` to `.section` | Prevents child overflow from creating page-level scroll |
| `MinistryFloorPlan.module.css` | Add `overflow: hidden` to base `.section` | Safety measure for complex layout |
| `MinistryFloorPlan.module.css` | Add `overflow: hidden` + `touch-action: pan-y` at 599px breakpoint | Both were missing where horizontal scroll activates |

## Verify
Run `npx vite build` and confirm 0 errors, 0 warnings.
