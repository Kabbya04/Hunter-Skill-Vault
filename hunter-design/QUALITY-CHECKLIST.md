# Design Quality Checklist

Use the relevant sections. Mark unavailable runtime checks as not verified rather than claiming coverage.

## Intent and identity

- [ ] A design thesis names the audience, desired feeling, visual idea, and outcome.
- [ ] One signature choice gives the work identity without becoming a gimmick.
- [ ] Type, color, composition, imagery, icons, copy, and motion reinforce the same theme.
- [ ] The result could not be relabeled for an unrelated product without substantial changes.
- [ ] Trends serve the concept and do not replace it.
- [ ] Generic copy, fake metrics, decorative dashboards, and stock clichés are absent.

## Structure and hierarchy

- [ ] The primary task and visual anchor are immediately clear.
- [ ] The scan order matches importance.
- [ ] One peer action owns primary emphasis.
- [ ] Related elements group through spacing and alignment.
- [ ] Separators and surfaces communicate real structure.
- [ ] Progressive disclosure has a visible cue.
- [ ] DOM order, visual order, focus order, and reading order agree.

## Typography

- [ ] Families fit the voice, roles, scripts, license, and performance constraints.
- [ ] Required weights and styles are loaded rather than synthesized.
- [ ] A compact semantic scale controls size and hierarchy.
- [ ] Heading levels descend visually and semantically.
- [ ] Body copy has comfortable leading and a `60–75ch` measure where appropriate.
- [ ] Headings and descriptions wrap deliberately at real widths.
- [ ] Dynamic numbers use tabular figures.
- [ ] Truncated content remains reachable.
- [ ] Mobile input text does not trigger unwanted browser zoom.

## Color and themes

- [ ] Components consume role-based semantic tokens.
- [ ] Each hue has one consistent meaning.
- [ ] Neutral, accent, and status ramps contain only useful steps.
- [ ] Actual rendered foreground/background contrast is measured.
- [ ] State and meaning never rely on color alone.
- [ ] Focus indicators remain visible against adjacent colors.
- [ ] Dark mode is retuned and tested rather than mechanically inverted.
- [ ] Gradients, transparency, and wide-gamut colors have appropriate fallbacks.

## Layout and responsiveness

- [ ] Breakpoints occur where content stops fitting.
- [ ] Smallest and largest supported widths are tested.
- [ ] Layout survives 200% zoom and 320px reflow where applicable.
- [ ] Long labels, localization growth, large values, and empty content are tested.
- [ ] Critical controls cannot be clipped or hidden past an unmarked scroll edge.
- [ ] Touch and viewport safe areas are respected.
- [ ] Direction-dependent spacing uses logical properties.
- [ ] RTL behavior is tested when supported.

## Interaction and states

- [ ] Native controls and platform conventions are used where appropriate.
- [ ] Hover, focus, active, selected, disabled, loading, empty, error, success, offline, and permission states are handled as relevant.
- [ ] Every pointer path has a keyboard path.
- [ ] Focus is visible, ordered, trapped in modals, and restored afterward.
- [ ] Destructive actions have confirmation, undo, or clear distinct treatment.
- [ ] Errors name a specific recovery action and appear near the cause.
- [ ] Dynamic updates are announced appropriately.
- [ ] Touch targets are large enough and extended targets do not overlap.

## Icons and imagery

- [ ] One coherent icon family is used per surface.
- [ ] Icon stroke/fill weight matches nearby content.
- [ ] Ambiguous icons have labels; icon-only controls have accessible names.
- [ ] No emoji, random glyphs, or sloppy mixed icon packs substitute for designed icons.
- [ ] Custom SVGs share grid, view box, stroke, cap, join, and color behavior.
- [ ] Imagery follows a written art direction and has verified usage rights.
- [ ] Responsive crops preserve the subject and text readability.
- [ ] Decorative media is removed from pointer and accessibility trees.

## Motion

- [ ] Every motion choice clarifies state, cause, continuity, hierarchy, or feedback.
- [ ] High-frequency feedback is fast and restrained.
- [ ] Entrances are used selectively; exits are subtler.
- [ ] Transitions name specific properties instead of using `all`.
- [ ] Motion is interruptible where interaction can reverse.
- [ ] Reduced motion removes parallax, autoplay, and unnecessary spatial movement.
- [ ] Every animated state retains a static cue.
- [ ] Motion has been replayed slowly to inspect timing and alignment.

## Accessibility

- [ ] Semantic elements and landmarks are used before ARIA.
- [ ] Every control has an accessible name, role, and state.
- [ ] Forms have visible labels and useful input metadata.
- [ ] Keyboard-only completion is possible.
- [ ] Heading structure is coherent and one primary main landmark exists.
- [ ] Images have purpose-appropriate alternative text.
- [ ] Automated checks run, followed by manual keyboard and visual inspection.
- [ ] Screen-reader behavior is tested for the primary flow when possible.

## Engineering quality

- [ ] The implementation uses the project's framework, styling, tokens, and components.
- [ ] New dependencies have a clear benefit, compatible license, and acceptable cost.
- [ ] Repeated patterns are reusable; one-offs are not abstracted prematurely.
- [ ] Experimental capabilities use progressive enhancement.
- [ ] Performance is checked for fonts, images, animation, and visual effects.
- [ ] Console, type, lint, and relevant test errors are resolved.

## Final edits

- [ ] Squint test: hierarchy remains clear.
- [ ] Grayscale test: structure survives without color.
- [ ] No-image test: the task still works.
- [ ] No-motion test: every state remains understandable.
- [ ] Anti-template test: generic patterns are justified or replaced.
- [ ] Restraint test: every effect has a job.
- [ ] Product test: at least one detail could only belong to this experience.

## Delivery

- [ ] Outcome and major design choices are stated clearly.
- [ ] Visual evidence is included when available.
- [ ] Verification names exact viewports, states, tools, or interactions checked.
- [ ] Unverified states and trade-offs are disclosed.
