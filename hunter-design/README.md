# Hunter Design

An agent-agnostic design skill for creating and implementing distinctive interfaces, visual systems, and design artifacts.

## What it teaches

- Product-specific design concepts instead of template styling.
- Current-resource research and ethical reference synthesis.
- Typography, color, hierarchy, composition, iconography, imagery, and motion decisions.
- Responsive, accessible, state-complete implementation.
- Rendered verification and a final anti-template quality pass.

`SKILL.md` contains the core behavior. The adjacent references provide progressive detail and should remain in the same folder.

## Install this skill

From the repository root:

```bash
npx . hunter-design --agent cursor
```

Replace `cursor` with `claude`, `codex`, `agents`, or `gemini`, or use a custom destination:

```bash
npx . hunter-design --target /path/to/assistant/skills
```

Once published to npm, use `npx hunt3r-skill-vault hunter-design --agent cursor`.

For assistants without skill discovery, add `SKILL.md` to the assistant's project or custom instructions and preserve the relative reference files.

## Invoke

Invocation syntax varies by assistant. Name `hunter-design` explicitly or ask the assistant to use the Hunter Design skill while creating, redesigning, implementing, or critiquing visual work.
