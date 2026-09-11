---
name: hunter-design
description: Designs and implements distinctive, production-ready interfaces and visual artifacts with strong concepts, intentional typography, coherent color systems, clear hierarchy, responsive behavior, accessibility, and polished interaction. Use when creating, redesigning, styling, or critiquing websites, apps, components, dashboards, landing pages, design systems, presentations, or other visual experiences.
license: MIT
---

# Hunter Design

Create work that has a point of view and works in the real world. Do not produce interchangeable template UI. Learn the product, choose a fitting visual idea, and carry that idea through type, color, composition, imagery, icons, copy, and motion.

## Non-negotiables

1. **Make it specific.** The interface must belong to this product, audience, and moment. If swapping the logo would make it fit a dozen unrelated products, the design is unfinished.
2. **Follow the theme all the way down.** A theme is not a hero gradient. It affects geometry, spacing rhythm, type, color temperature, icon treatment, imagery, surfaces, motion, and voice.
3. **Solve the task before decorating it.** Information architecture, content, states, and interaction come before polish.
4. **Use evidence, not taste alone.** Inspect the product, constraints, real content, platform conventions, and current sources. Measure what can be measured.
5. **Prefer coherent restraint.** One strong concept executed consistently beats many fashionable effects.
6. **Treat accessibility as design quality.** Keyboard use, semantics, contrast, zoom, reduced motion, and readable content are baseline requirements.
7. **Avoid generic iconography.** Do not use emoji, random glyphs, generic sparkle/wand icons, or mixed icon packs as product UI. Use one reputable icon family, platform-native symbols, or purpose-built SVGs whose metaphor and stroke match the interface.
8. **Never hide weak structure behind polish.** Gradients, glass, shadows, illustrations, and animation must have a job.

## Working mode

Adapt to the request:

- **Create:** research, establish a concept and system, implement, then verify.
- **Improve:** preserve the product's useful conventions; diagnose the highest-leverage problems before changing style.
- **Critique:** inspect without mutating unless implementation was requested. Separate evidence from preference.
- **Design system:** define reusable decisions by role, not a gallery of disconnected components.

If the task is ambiguous, infer sensible defaults from the repository and user context. Ask only when a missing choice would materially alter the result.

## 1. Reconnaissance before design

Inspect the existing product before proposing a direction:

- Framework, styling method, component library, tokens, assets, fonts, and icon packages.
- Product purpose, primary audience, core task, content density, and emotional stakes.
- Existing design language worth preserving and inconsistencies worth correcting.
- Supported devices, breakpoints, themes, localization, and accessibility expectations.
- Every relevant state: default, hover, focus, active, selected, disabled, loading, empty, error, success, and destructive.

For redesigns, identify what is structurally wrong versus merely unfashionable. Do not erase deliberate brand character just because another aesthetic is trending.

## 2. Write a design thesis

Before implementation, form a one- or two-sentence thesis:

> For [audience and context], the experience should feel [2–3 qualities], using [specific visual/interaction idea] so that [desired effect].

Then name:

- **Signature:** the one memorable device or behavior that gives the work identity.
- **Anchor:** the dominant visual or content element.
- **Rules:** 3–5 constraints that make decisions coherent.
- **Anti-goals:** 2–3 tempting but inappropriate styles to avoid.

Examples of specific directions: field notebook for ecological data; nocturnal broadcast console for live audio; quiet editorial archive for legal research. “Clean and modern” is not a direction.

## 3. Research without copying

Use current online research when the design depends on trends, a domain convention, cultural context, unfamiliar visual language, or newly available platform capability. Follow [RESEARCH.md](RESEARCH.md).

Research in layers:

1. **Domain reality:** real products, artifacts, terminology, workflows, and user expectations.
2. **Platform behavior:** current official guidelines and native conventions.
3. **Visual lineage:** editorial, industrial, architectural, artistic, or historical references that fit the concept.
4. **Contemporary execution:** recent high-quality work, current browser capabilities, font releases, motion techniques, and relevant trends.

Extract principles, not screenshots. Record what each reference contributes—rhythm, palette logic, composition, interaction, material, or tone. Synthesize multiple sources so the result is not a clone.

Treat trends as ingredients, never defaults. Use a trend only when it strengthens the thesis, works with the content, degrades safely, and will not make the core task harder.

## 4. Build the visual system

Use [VISUAL-SYSTEMS.md](VISUAL-SYSTEMS.md) for detailed decisions.

### Hierarchy

Decide the intended scan order before styling. Create no more than four perceptual levels:

1. Primary purpose or action.
2. Section structure and key content.
3. Supporting content and controls.
4. Metadata and tertiary details.

Use position, scale, weight, contrast, spacing, and density together. Do not make everything prominent. Perform a squint test: the intended order should remain visible when details blur.

### Typography

Choose type for voice and function, not novelty:

- Start with content roles, then choose families and a compact semantic scale.
- Usually use one family or a contrasting display/body pair; avoid near-identical pairings.
- Verify required weights, italics, numerals, language coverage, licensing, and web formats.
- Use tighter leading for short display text and `1.5–1.6` for reading text.
- Cap long-form measure around `60–75ch`.
- Balance headings, pretty-wrap descriptions, and use tabular numbers for changing values.
- Avoid defaulting to ubiquitous “startup sans” typography when the concept calls for a more distinct voice.

### Color

Build a small role-based system:

- One neutral ramp, one accent ramp, and only the semantic ramps the product uses.
- Define primitives by hue/value and semantic tokens by role; components consume semantic tokens.
- For a new system, prefer OKLCH for predictable perceived-lightness ramps, with suitable fallbacks where needed.
- Give each hue one consistent meaning. Color must never be the only state cue.
- Let one action per view own the strongest filled emphasis.
- Measure actual rendered foreground/background contrast; never estimate it.
- Design dark mode intentionally rather than mechanically reversing light mode.

### Layout and composition

- Group with space first, surfaces second, separators last.
- Make between-group spacing visibly larger than within-group spacing.
- Align to shared edges, then use deliberate asymmetry only to reinforce the thesis.
- Let content determine breakpoints. Test smallest and largest supported widths first.
- Keep text and controls inside safe margins; media and background treatments may bleed.
- Design with realistic long content, empty content, localization growth, and 200% zoom.
- Use a spacing rhythm, but correct optical misalignment where geometry looks wrong.

### Shape, surfaces, and imagery

- Make radius, border, shadow, and texture express the same material language.
- Use shadows for elevation and borders for structure; avoid stacking both without purpose.
- Keep nested radii concentric: outer radius equals inner radius plus inset.
- Prefer meaningful product imagery, custom diagrams, art direction, or domain artifacts over generic stock scenes.
- Do not use decoration to fill empty space. Empty space is a compositional tool.

### Icons

- Use one icon family per surface and match stroke weight to nearby text.
- Choose icons by semantic clarity in context, not by visual novelty.
- Use text labels where an icon is ambiguous. Icon-only controls require accessible names.
- Prefer existing project icons, then platform-native sets, then a reputable consistent library, then custom SVG.
- Never substitute emoji or Unicode symbols for interface icons.
- Custom SVGs should use a consistent view box, stroke/fill logic, cap/join style, optical size, and `currentColor`.

### Motion

- Motion must clarify state, causality, hierarchy, continuity, or feedback.
- Keep frequent feedback fast and quiet; reserve staged motion for infrequent meaningful transitions.
- Prefer interruptible transitions. Animate compositable properties when possible.
- Specify properties instead of `transition: all`.
- Make exits subtler than entrances and avoid decorative bounce by default.
- Honor `prefers-reduced-motion`; every state change also needs a static cue.

## 5. Design the whole experience

Do not stop at the ideal screenshot. Design:

- Clear navigation and reading order.
- Native controls and semantic elements before custom recreations.
- Visible focus and complete keyboard paths.
- Useful loading, empty, error, success, offline, and permission states.
- Error copy that explains recovery without blame.
- Destructive actions with confirmation or undo.
- Touch targets that meet platform expectations without overlapping.
- Responsive transformations, not merely shrinking.
- Honest data displays, realistic content, and reachable truncated values.

Copy is part of the interface. Use clear, compact, consistent language. Buttons begin with verbs; errors name a next step; empty states orient and offer one action. Match warmth to the emotional stakes.

## 6. Implement in the project's language

- Reuse the established framework, component primitives, tokens, and dependency set.
- Do not introduce a new UI library, font service, icon package, or motion dependency unless it materially improves the result and fits project constraints.
- Create reusable components for repeated structures, but do not abstract a one-off composition before its pattern is known.
- Keep styling values tokenized by role where reuse or theming warrants it.
- Preserve behavior while redesigning unless behavior changes were requested.
- Use progressive enhancement for experimental CSS or browser capabilities.
- Prefer deletion, native platform behavior, and existing primitives before adding machinery.

When generating a new interface, use real or domain-plausible content. Placeholder names, repetitive cards, fake metrics, and generic “Transform your workflow” copy weaken design decisions.

## 7. Critique, test, and refine

Use [QUALITY-CHECKLIST.md](QUALITY-CHECKLIST.md). At minimum:

1. Render the work; visual claims cannot be verified from source alone.
2. Test representative desktop and mobile sizes, plus the narrowest supported width.
3. Walk keyboard focus and inspect accessible names, roles, labels, and heading structure.
4. Check light/dark themes where present, reduced motion, loading, empty, error, and long-content states.
5. Measure contrast and inspect text wrapping, clipping, hit areas, and interaction feedback.
6. Compare against the design thesis. Remove effects that do not reinforce it.
7. Slow motion down when debugging it; small timing and alignment defects become obvious.

Fix root causes at tokens or shared components before patching individual symptoms. After each pass, ask:

- What is the first thing the eye sees? Is that correct?
- Which detail could only belong to this product?
- Does every visual choice reinforce the same world?
- Is anything present only because it is fashionable?
- What can be removed without losing meaning?

## Output standard

When delivering design work:

- Lead with what changed and the resulting experience.
- Briefly name the thesis and signature choice when they explain the outcome.
- Mention meaningful trade-offs and any unverified states.
- Show visual evidence when available.
- Do not narrate every implementation step.

The work is complete only when it is distinctive, coherent, usable, responsive, accessible, and verified—not merely when the code compiles.

## References

- [PROCESS.md](PROCESS.md) — expanded end-to-end workflow and decision gates.
- [VISUAL-SYSTEMS.md](VISUAL-SYSTEMS.md) — practical guidance for type, color, hierarchy, layout, icons, imagery, and motion.
- [RESEARCH.md](RESEARCH.md) — source strategy for current trends, resources, and ethical synthesis.
- [QUALITY-CHECKLIST.md](QUALITY-CHECKLIST.md) — creation and review checks across states and disciplines.
