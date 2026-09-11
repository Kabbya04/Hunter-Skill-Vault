# npm Publication Guide

This package is already set up for `npx` and global CLI use. Publishing to npm is what makes those commands work for other users without cloning the repo.

Package name: `hunt3r-skill-vault`  
CLI binaries: `hunt3r-skills`, `hunt3r-skill-vault`

## Prerequisites

- Node.js 18 or newer
- An [npmjs.com](https://www.npmjs.com/) account
- Permission to publish the `hunt3r-skill-vault` package (first publish claims the name)
- This repository checked out on `main`, clean and up to date

## One-time setup

1. Log in to npm:

```bash
npm login
```

2. Confirm you are logged in:

```bash
npm whoami
```

3. Confirm the package name is still available (404 means available):

```bash
npm view hunt3r-skill-vault
```

4. Validate the skills and preview the publish tarball:

```bash
npm run validate
npm pack --dry-run
```

Confirm the dry-run includes `bin/`, `scripts/`, `hunter-*/`, `README.md`, and `LICENSE`.

## First publish

From the repository root:

```bash
npm run validate
npm publish --access public
```

`--access public` is required for scoped packages and is safe to use for this unscoped public package as well.

After a successful publish, users can install with:

```bash
npx hunt3r-skill-vault hunter-design --agent cursor
```

Or install the CLI globally:

```bash
npm install -g hunt3r-skill-vault
hunt3r-skills hunter-design --agent cursor
hunt3r-skill-vault --list
```

## Before every release

1. Make sure `main` is clean and pushed.
2. Run validation:

```bash
npm run validate
```

3. Preview package contents:

```bash
npm pack --dry-run
```

4. Update `README.md` if install commands, agents, or skills changed.
5. Decide the version bump:
   - **patch** (`0.1.0` → `0.1.1`): bug fixes, docs, no skill behavior change
   - **minor** (`0.1.0` → `0.2.0`): new skills, installer features, compatible enhancements
   - **major** (`0.1.0` → `1.0.0`): breaking CLI or install behavior changes

## Publish a new release

Bump the version, push the tag, then publish:

```bash
npm version patch
# or: npm version minor
# or: npm version major

git push --follow-tags
npm publish --access public
```

`npm version` updates `package.json`, creates a git commit, and creates a matching git tag (for example `v0.1.1`).

Verify the published version:

```bash
npm view hunt3r-skill-vault version
npx hunt3r-skill-vault@latest --list
```

## Pre-npm / GitHub-only install

Until the package is on npm, or for testing an unreleased commit, users can run from GitHub:

```bash
npx github:Kabbya04/Hunter-Skill-Vault hunter-design --agent cursor
```

From a local checkout:

```bash
npx . hunter-design --agent cursor
```

## Troubleshooting

| Problem | What to do |
| --- | --- |
| `npm publish` says you must be logged in | Run `npm login`, then `npm whoami` |
| `403` / permission denied | Confirm the npm account owns the package name, or ask the owner for access |
| Package name already taken | Change `"name"` in `package.json` and update README / docs to match |
| Users get an old CLI | They may be on a cached `npx` copy; ask them to run `npx hunt3r-skill-vault@latest ...` |
| Tarball missing a skill | Ensure the skill folder is named `hunter-*` (or update the `"files"` field in `package.json`) and contains `SKILL.md` |
| Validation fails | Fix reported skill issues before publishing |

## Checklist

- [ ] `npm run validate` passes
- [ ] `npm pack --dry-run` includes the expected files
- [ ] Version bumped with `npm version …`
- [ ] Git tag pushed with `git push --follow-tags`
- [ ] `npm publish --access public` succeeded
- [ ] `npm view hunt3r-skill-vault version` matches the intended release
- [ ] README install examples still match the published package name
