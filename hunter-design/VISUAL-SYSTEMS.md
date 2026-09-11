# Visual Systems Reference

These are defaults for new work, not reasons to overwrite a sound existing system. Context and project conventions win when they remain usable and coherent.

## Hierarchy

Design a scan path, not a collection of styled objects.

- Choose one visual anchor per view.
- Use four perceptual levels at most.
- Establish order with position and spacing before color.
- Reserve strongest contrast, largest scale, and isolated space for the highest priority.
- Keep peers visually equal; unequal styling implies unequal importance.
- Use whitespace around important elements instead of adding decoration.
- In dense tools, hierarchy can come from alignment, weight, and surface changes rather than large type.

Test by blurring or squinting. Then strip color. The intended order should survive both.

## Typography selection

Choose type by answering:

1. What should the product sound like?
2. Is this interface read, scanned, operated, or all three?
3. What scripts and glyphs are required?
4. Which weights, italics, numerals, and OpenType features are actually available?
5. What are the licensing, hosting, privacy, and performance constraints?

### Pairing

- Start with one family. Add a second only when role contrast earns it.
- Pair by contrast: serif with sans, humanist with geometric, expressive display with quiet body.
- Avoid two families that differ so little the pairing looks accidental.
- Let an expressive face own short headlines; keep controls and body text highly legible.
- Variable fonts are useful when several weights or optical sizes are consumed, not automatically.

### Scale

Use semantic roles such as display, title, section, body, label, caption, and data. A restrained fluid scale is usually enough:

- Display ratio: approximately `1.25–1.333`.
- Interface ratio: approximately `1.125–1.2`.
- Body text: begin around `1rem`; adjust for x-height, density, and audience.
- UI labels: rarely below `0.75rem`; mobile inputs render at least `1rem` to avoid browser zoom.

Use `clamp()` where a size should change continuously. Headings need tighter leading near `1.05–1.2`; body copy usually needs `1.5–1.6`. Long text should land around `60–75ch`.

Negative tracking can tighten large display type. Small uppercase labels need positive tracking. Body text usually needs neither. Use real weights; do not rely on synthesized bold or italics.

## Color selection

Begin with meaning and atmosphere, then choose hue.

### Palette construction

1. Choose a neutral family whose temperature supports the concept.
2. Choose one accent hue with a clear semantic role.
3. Add only status hues the product actually uses.
4. Build each ramp by perceived lightness, not by mechanically changing HSL lightness.
5. Map primitives to semantic roles for background, surface, text, border, accent, focus, and status.
6. Test every rendered foreground/background pair in every theme.

For greenfield web work, OKLCH is a strong authoring default:

```css
:root {
  --neutral-0: oklch(0.99 0.005 80);
  --neutral-950: oklch(0.18 0.012 80);
  --accent-500: oklch(0.65 0.16 35);

  --color-bg: var(--neutral-0);
  --color-text: var(--neutral-950);
  --color-action: var(--accent-500);
}
```

Do not copy these sample values into every product. Select a hue and temperature from the design thesis.

### Color behavior

- Keep hue meaning consistent across the product.
- Color supports hierarchy; it should not carry state alone.
- Filled accent generally belongs to one primary peer action per view.
- Static text in the action hue may look interactive; avoid misleading use.
- Create dark mode by retuning perceived lightness, chroma, surfaces, and elevation.
- Use gradients only when the transition itself reinforces depth, energy, chronology, or atmosphere.
- Prefer `in oklab` for even gradient interpolation; test fallbacks.

Contrast is computed, not guessed. Measure composited colors over the actual rendered background.

## Spacing and layout

Use a small spacing vocabulary, then apply optical correction deliberately.

- Start with a 4px base where no product scale exists.
- Common steps: 4, 8, 12, 16, 24, 32, 48, 64.
- Between-group space should be at least twice within-group space.
- Shared alignment edges create calm; a single unintentional edge creates noise.
- Use logical properties for international layouts.
- Break when content stops fitting, not at a fashionable device number.
- Prefer container queries for reusable modules whose layout depends on available space.
- Test long labels, large values, empty areas, and translated content.

Distinctive composition can use asymmetry, overlap, cropping, scale shifts, or unusual rhythm. Give each device a structural reason and preserve reading order.

## Shape and surface

Define one material model:

- **Flat/editorial:** spacing, rules, and typography carry structure.
- **Tactile:** restrained elevation, inset detail, and press feedback imply physical layers.
- **Technical:** precise grids, compact density, hard edges, and measured status color.
- **Atmospheric:** depth, translucency, light, and texture create place.

These are starting archetypes, not templates. Mix only with a reason.

Rules:

- Radius should have a limited scale and match the product character.
- Nested corners remain concentric.
- Borders describe boundaries or state.
- Shadows describe elevation; use layered low-opacity shadows instead of a dark fuzzy halo.
- Translucency needs a meaningful background and a fallback; do not add glass to empty flat space.
- Texture should survive compression and never reduce text clarity.

## Iconography

Choose a family with:

- Coverage for required concepts.
- Consistent stroke, optical size, caps, joins, and fill behavior.
- Appropriate visual character.
- Accessible licensing and maintainable delivery.

Useful defaults include platform-native symbol sets and established open-source libraries, but inspect the repository before adding anything.

Match stroke to adjacent text: roughly 1.5px beside regular text and 2px beside semibold is a useful optical starting point. Use outline for the default and fill for selected state when the family supports it.

For custom icons:

- Draw to one grid and view box.
- Reuse stroke widths, corner treatment, and negative-space logic.
- Correct optical centering, especially play arrows and asymmetric marks.
- Use `currentColor`.
- Remove decorative layers from pointer and accessibility trees.
- Pair ambiguous symbols with labels.

Avoid generic “AI” signifiers—sparkles, magic wands, orbit marks—unless the product concept specifically supports them and the meaning is clear.

## Imagery and illustration

Write an art-direction sentence before searching:

> [Subject] shown with [composition], [light/material], [palette], and [emotional tone], avoiding [clichés].

Prefer:

1. Real product or user material.
2. Commissioned or generated imagery with consistent art direction.
3. Domain-specific archival or documentary sources.
4. Carefully selected stock with a repeatable crop, grade, and subject rule.

Check rights, attribution, representation, and content accuracy. Keep focal points clear of text and responsive crops. Do not put critical copy directly over a busy image without a robust contrast treatment.

## Motion

Define motion by frequency and meaning:

- Immediate feedback: `80–150ms`.
- Common state transition: `150–300ms`.
- Meaningful spatial transition: `300–500ms`.
- Longer narrative motion only when the user chose to watch.

Values are starting points; nearby product motion should stay consistent.

- Ease-out for elements arriving or settling.
- Ease-in only when departure or acceleration should feel weighted.
- Springs for direct manipulation or responsive reordering, with restrained bounce.
- Opacity, transform, and filter are the safest composited properties.
- Stagger only infrequent sequences where order communicates hierarchy.
- Animate icons contextually through opacity, scale, or path state, not gratuitous spinning.
- Under reduced motion, remove parallax and autoplay and replace spatial motion with an immediate state or quiet crossfade.

Every animation must answer: what relationship, state, or cause becomes clearer because this moves?

## Anti-template test

Before finishing, search for these defaults:

- Centered badge + huge headline + two CTAs + dashboard mockup.
- Repeated three-card feature grid regardless of content.
- Purple/blue glow standing in for a concept.
- Excessive rounded cards nested inside rounded cards.
- Pills for every label and control.
- Bento layouts with arbitrary tile sizes.
- Fake analytics and testimonial logos.
- Generic sans type, gradient orb, and sparkle icon used together.

None is forbidden. Each must be justified by this product's content and thesis. If it cannot be justified, redesign the structure rather than merely changing its colors.
