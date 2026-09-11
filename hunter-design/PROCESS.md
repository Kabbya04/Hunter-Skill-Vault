# Hunter Design Process

Use this workflow for substantial creation or redesign work. Compress it for small components; do not skip the decision gates.

## Phase 1: Frame

Write down:

- Product, audience, primary task, and desired outcome.
- Emotional state at entry and desired state at exit.
- Platform, content, technical, brand, accessibility, and time constraints.
- Existing assets and conventions that should survive.
- Required states and supported viewports.

### Gate

Can you explain the experience without describing its appearance? If not, the problem is not framed yet.

## Phase 2: Recon

Inspect the code and rendered product. Inventory:

- Page and flow structure.
- Reusable components, tokens, fonts, icons, and assets.
- Content density and realistic edge cases.
- Established interaction patterns.
- Structural, usability, accessibility, and visual problems.

Separate observations into:

- **Keep:** effective or brand-defining.
- **Correct:** objectively harmful or inconsistent.
- **Explore:** valid but underdeveloped opportunities.

### Gate

Can each proposed change be traced to a user need, product goal, consistency problem, or design thesis?

## Phase 3: Research

Research domain reality before visual fashion. Collect a small reference set across:

1. Real-world domain artifacts.
2. Direct and adjacent products.
3. Current platform guidance.
4. Historical or cultural visual lineage.
5. Contemporary craft and technical capabilities.

For each useful source, write one sentence describing the transferable principle. Discard references that offer only surface decoration.

### Gate

Does the reference set contain more than one visual lineage? If every reference comes from the same trend gallery, broaden it.

## Phase 4: Concept

Generate two or three genuinely different directions. Vary the underlying metaphor, information rhythm, and material language—not merely the accent color.

For each direction define:

- Thesis.
- Three feeling words.
- Signature device.
- Dominant composition.
- Type strategy.
- Color logic.
- Shape/material language.
- Motion character.
- Main risk.

Choose the direction that best fits the user and content, not the one with the most effects.

### Gate

Could a collaborator predict an unshown component from the direction's rules? If not, the direction is a mood board, not a system.

## Phase 5: Structure

Design information architecture and interaction before finish:

- Map the primary path and alternate paths.
- Establish reading order and action priority.
- Decide what is always visible, progressively disclosed, or deferred.
- Write realistic content.
- Place loading, empty, error, success, destructive, and permission states.
- Define responsive transformations.

Use low-fidelity structure until the hierarchy works without color or imagery.

### Gate

Can the main task be completed in grayscale, with motion off and images absent?

## Phase 6: System

Turn the concept into reusable decisions:

- Semantic type roles and scale.
- Primitive and semantic color tokens.
- Spacing rhythm and layout boundaries.
- Radius, border, elevation, and texture rules.
- Icon family and custom-icon construction.
- Image art direction.
- Motion durations, easing, and reduced-motion behavior.

Assign each choice a role. Delete values without a role.

### Gate

Are repeated visual decisions tokenized or componentized without prematurely abstracting one-offs?

## Phase 7: Build

Implement the most representative slice first: the area that exercises hierarchy, content, key controls, and responsive behavior. Render it early.

Then:

1. Correct structure and hierarchy.
2. Correct typography and spacing.
3. Apply color and surfaces.
4. Add icons and imagery.
5. Add purposeful motion.
6. Complete all states.

Do not spend polish on a structure that has not survived realistic content.

## Phase 8: Verify

Inspect the rendered experience:

- Intended scan order and one clear primary action.
- Realistic short, long, missing, and error content.
- Smallest and largest supported viewports.
- 200% zoom and keyboard-only operation.
- Accessible names, semantics, focus, contrast, and reduced motion.
- Theme variants and platform conventions.
- Motion at normal speed and slowed down.

Record anything not verified. Compilation is not visual verification.

## Phase 9: Distinctiveness edit

Run two final passes:

### Remove the generic

Look for default hero layouts, interchangeable feature-card grids, arbitrary gradients, excessive pills, generic copy, decorative dashboards, stock-photo sameness, and predictable centered compositions. Replace only where the result better fits the thesis.

### Remove the costume

Look for theme effects that obscure content, repeated motifs that become gimmicks, illegible display type, texture on every surface, and animation that delays work. Keep the strongest signature; quiet the rest.

## Phase 10: Handoff

Report:

- Outcome and design thesis.
- Major system choices.
- User-facing behavior changed.
- Verification performed.
- Known limitations or unverified states.

The design should be explainable as a coherent set of decisions, not defended as personal taste.
