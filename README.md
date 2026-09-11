# Hunt3r's Skill Vault

A portable collection of agent skills. Every skill is self-contained, can be installed independently, and follows the common `SKILL.md` directory convention used by many coding assistants.

## Available skills

- [`hunter-design`](hunter-design/) — creates distinctive, theme-coherent, accessible, production-ready visual experiences.

## Install

Node.js 18 or newer is required. From this checkout, `npx .` runs the package's installer without a global install.

### One skill

```bash
npx . hunter-design --agent cursor
```

### Every skill

```bash
npx . all --agent cursor
```

Install every skill for all recognized agents:

```bash
npx . all --agent all
```

After this package is published to npm, the equivalent command is:

```bash
npx hunt3r-skill-vault hunter-design --agent cursor
```

Recognized agent destinations:

- `cursor` → `~/.cursor/skills`
- `claude` → `~/.claude/skills`
- `codex` → `~/.codex/skills`
- `agents` → `~/.agents/skills`
- `gemini` → `~/.gemini/skills`

Use a custom directory for any assistant that loads folder-based Markdown skills:

```bash
npx . hunter-design --target /path/to/assistant/skills
```

Repeat `--target` to install to several custom locations. Add `--mode symlink` during development so edits in this checkout take effect immediately. Copy mode is the default.

The installer refuses to overwrite an existing skill unless `--force` is supplied. Preview operations with `--dry-run`, and list discoverable skills with:

```bash
npx . --list
```

Validate every skill's metadata, line limit, directory name, and relative links with:

```bash
npm run validate
```

## Manual installation

Copy the complete skill folder into an assistant's skills directory:

```text
<assistant-skills-directory>/
└── hunter-design/
    ├── SKILL.md
    └── supporting references
```

If an assistant does not support discoverable skills, attach or reference `hunter-design/SKILL.md` in its project instructions. Keep the supporting files beside it so relative links continue to work.

## Library convention

Each top-level directory containing `SKILL.md` is treated as an installable skill. The root installer discovers these folders automatically, so adding a future skill requires no installer changes.

A skill should contain:

```text
skill-name/
├── SKILL.md
└── optional supporting files
```

Keep essential instructions in `SKILL.md`. Put detailed references one level deep and link them directly from the main skill file.

## Compatibility

`SKILL.md` with YAML frontmatter is the portable source format. Agent products differ in discovery paths and invocation behavior, so no installer can guarantee automatic activation in every tool. The `--target` option and manual-instructions fallback cover assistants with custom conventions.

## License

MIT
