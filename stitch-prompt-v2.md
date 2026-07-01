# Stitch Prompt — The Significant Peoples Church
## Concept: "Blueprint of a Vision"

This is a church website built around a single ownable concept: the founder,
Pastor Wisdom Adeyemo, trained as an architect before planting this church.
The entire visual system treats the church's 19-year growth as a building
that was designed and constructed — told through the literal visual language
of architectural drawings: thin ink linework, elevation drawings, dimension
lines, annotation marks, blueprint grid paper. This is the core idea the
whole design must serve. Do not default to a generic "regal church" template
with crests and laurels — that has been done by every competitor and is
explicitly what we are avoiding.

## Hard Constraints (do not violate any of these)
- NO rounded corners anywhere. All corners sharp (0px radius), like drafted
  technical drawings. Exception: none.
- NO drop shadows with blur greater than 4px. Prefer hard 1px offset shadows
  or none.
- NO icon-pack icons (no Material Design, no Font Awesome, no generic line
  icons). Every icon/mark must be custom hand-drawn linework in the
  blueprint style — annotation ticks, dimension arrows, compass marks.
- NO gradient fills. Flat color only, except a single subtle radial paper-
  texture/grain overlay on background sections.
- NO centered-symmetric section stacking. Layout must be asymmetric —
  off-center headlines, varied column widths, content that bleeds to one
  edge, intentional negative space that is NOT evenly distributed.
- NO laurel branches, no circular crest/seal badges, no generic "church
  emblem" iconography. Replace entirely with architectural drawing marks
  (see Ornament System below).
- Gold is used ONLY as: hairline rule weight (0.5-1px), dimension/annotation
  line color, numeral color, and outline-only button borders. Gold must
  never exceed roughly 8% of any given screen's visual area. If in doubt,
  use less gold, not more.

## Color Palette
- Blueprint navy (dominant ground): #0c1228 — almost-black with a cold blue
  undertone, like aged blueprint paper, NOT a bright corporate blue.
- Drafting gold/ochre (accent, line-weight only): #b8902f
- Paper cream (alternate ground, light sections): #f6f1e4 — should read as
  aged technical drawing paper, with a very subtle grain texture, not flat
  white.
- Ink black (text on cream): #15171c
- All text on navy: warm off-white #ede6d3, never pure white.

## Typography
- Display: a serif with slight architectural/engraved character — Fraunces
  or Cormorant Garamond. Headlines set in a STRICT type scale: hero
  headline at 96-120px desktop (genuinely oversized, dramatically larger
  than anything else on the page), section headlines at 40-48px, body never
  above 18px. The ratio between hero and body should feel almost extreme —
  this scale contrast is a primary luxury signal, do not soften it.
- Labels/annotations: a monospace or technical-feeling sans (e.g. JetBrains
  Mono or IBM Plex Mono) for anything mimicking drawing annotations —
  measurements, dates, coordinates, small caps labels. This monospace
  layer is what sells the "blueprint" concept; use it deliberately for
  stat numerals, dates in the timeline, and section eyebrow labels.

## Ornament System (replaces crest/laurel entirely)
- Dimension lines: thin gold lines with small perpendicular end-ticks,
  used to underline headlines or bracket statistics, like architectural
  measurement annotations.
- Elevation marks: simple line-drawing silhouette of a building/structure
  forming progressively across the page as the user scrolls through the
  history timeline — by the final timeline waypoint (today), the building
  line-drawing is fully "constructed." This is the signature interaction
  of the site.
- Compass/north marks: small technical compass rose glyph used sparingly as
  a section-break device instead of a centered divider.
- Annotation typography: numerals and short labels set in monospace,
  rotated -90° along margins in places, mimicking margin notes on a
  technical drawing (e.g. "EST. 2007" running vertically along the hero
  edge).

## Layout: Asymmetric Editorial, NOT Centered Stack

1. **Header**: minimal, left-aligned wordmark (no badge/crest icon — just
   precise serif type), nav links right-aligned and small, monospace style.
   No centered logo.

2. **Hero**: headline is NOT centered. Set large, oversized serif headline
   "Raising Significant People" bleeding off the left or top edge of the
   viewport, asymmetric — like a magazine cover, not a hero-banner
   template. A single thin elevation-drawing line of a simple
   building/structure sits to the right, mostly empty space around it.
   Vertical monospace annotation along the right margin reads "EST. 2007 —
   IGARRA, EDO STATE." Subhead set small, off to one side, NOT directly
   centered under the headline. CTA buttons: outline-only, sharp corners,
   bottom-left of the hero block, not centered.

3. **Welcome + Service Times**: two unequal columns (e.g. 60/40 split, not
   50/50). Service times displayed as a literal annotated schedule —
   monospace times with dimension-line separators, like a building
   schedule sheet, not a card.

4. **Stats band**: NOT four equal symmetric badges in a row. Instead,
   present as a horizontal "drawing scale" — a single long dimension line
   across the section with four tick-marks at uneven intervals, each tick
   annotated with a stat (500+ Members / 17 Fellowships / 5 Branches / 19
   Years) in monospace numerals above the line, label below. Reads like a
   measured drawing, not a stat card grid.

5. **History — "Blueprint of a Vision" timeline**: the signature section.
   Full-width, paper-cream background with subtle grid lines (like graph
   paper). As the user scrolls, a single continuous line-drawing of a
   simple building/structure progressively draws itself, with 4 waypoints
   (2007 Founded / 2008 Commissioned / Growth — Fellowships & Branches /
   Today) appearing as annotation call-outs at points along the line, each
   with a short text block and a hand-drawn-style dimension arrow pointing
   to its place on the structure. This must NOT be a generic vertical
   timeline with dots and cards — it is literally a building being drawn.

6. **Leadership**: asymmetric two-up — one profile large and one smaller,
   not equal-weight twin cards. Photo/placeholder framed with a thin
   corner-bracket drafting mark (like a technical drawing crop mark), not a
   decorative gold frame. Pull-quote set large serif italic, off to one
   side.

7. **Ministries**: NOT a uniform grid. Present as an asymmetric "floor
   plan" layout — varied-size blocks (some wide, some narrow) like rooms on
   an architectural floor plan, each labeled with the ministry name in the
   monospace annotation style plus a thin room-label dimension line.

8. **Scripture callout**: full-bleed navy band, single line of scripture
   set very large, off-center, with one small monospace citation in the
   corner — minimal, confident, lots of empty space.

9. **Events**: two events presented as "construction phase" cards — framed
   like blueprint detail call-outs (a zoomed detail circle/rectangle
   pulled from a larger drawing), with countdown shown in monospace.

10. **Final CTA**: full-bleed, oversized serif text "Come As You Are" set
    asymmetrically, single outline button, vast empty space around it —
    confidence through restraint.

11. **Footer**: dark, left-aligned columns (not centered), thin dimension
    line as the top border instead of a solid rule. Social icons as simple
    monospace bracketed text links [FB] [IG] [YT] [TT] rather than icon
    badges — consistent with the technical-drawing language throughout.

## Reference Anchors
Think: an architecture firm's portfolio site, a technical drawing exhibit,
a fine letterpress print shop's catalog — NOT a typical church/ministry
template, NOT a generic "elegant navy and gold" website.

## Mobile
On narrow viewports, the asymmetry compresses to left-aligned single column
but must retain: oversized hero type, monospace annotation labels, the
scroll-construction timeline (simplified to a single vertical line), and
sharp corners throughout. Do not let mobile fallback revert to a centered
generic layout.
