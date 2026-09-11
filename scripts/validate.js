#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const frontmatterPattern = /^---\n([\s\S]*?)\n---\n/;
const markdownLinkPattern = /\[[^\]]+\]\((?!https?:\/\/|#)([^)#]+)(?:#[^)]+)?\)/g;
const validNamePattern = /^[a-z0-9-]{1,64}$/;

function readFrontmatter(text) {
  const match = text.match(frontmatterPattern);
  if (!match) return {};

  return Object.fromEntries(
    match[1]
      .split("\n")
      .filter((line) => line.includes(":") && !/^\s/.test(line))
      .map((line) => {
        const separator = line.indexOf(":");
        const key = line.slice(0, separator).trim();
        const value = line
          .slice(separator + 1)
          .trim()
          .replace(/^["']|["']$/g, "");
        return [key, value];
      }),
  );
}

function validateSkill(directory) {
  const skillPath = join(directory, "SKILL.md");
  const text = readFileSync(skillPath, "utf8");
  const metadata = readFrontmatter(text);
  const errors = [];
  const directoryName = directory.split(/[\\/]/).at(-1);

  if (!validNamePattern.test(metadata.name ?? "")) {
    errors.push(
      "frontmatter name must be 1–64 lowercase letters, numbers, or hyphens",
    );
  }
  if (metadata.name !== directoryName) {
    errors.push(
      `frontmatter name '${metadata.name ?? ""}' must match directory '${directoryName}'`,
    );
  }
  if (!metadata.description) {
    errors.push("frontmatter description is required");
  } else if (metadata.description.length > 1024) {
    errors.push("frontmatter description must not exceed 1024 characters");
  }

  const lineCount = text.split(/\r?\n/).length;
  if (lineCount > 500) {
    errors.push(`SKILL.md has ${lineCount} lines; maximum is 500`);
  }

  for (const match of text.matchAll(markdownLinkPattern)) {
    if (!existsSync(join(directory, match[1]))) {
      errors.push(`broken relative link: ${match[1]}`);
    }
  }

  return errors;
}

const skills = readdirSync(repository, { withFileTypes: true })
  .filter(
    (entry) =>
      entry.isDirectory() &&
      existsSync(join(repository, entry.name, "SKILL.md")),
  )
  .map((entry) => join(repository, entry.name))
  .sort();

if (skills.length === 0) {
  console.error("error: no skills found");
  process.exitCode = 1;
} else {
  let failures = 0;
  for (const skill of skills) {
    const errors = validateSkill(skill);
    const name = skill.split(/[\\/]/).at(-1);
    if (errors.length === 0) {
      console.log(`OK   ${name}`);
      continue;
    }

    failures += 1;
    console.log(`FAIL ${name}`);
    for (const error of errors) console.log(`  - ${error}`);
  }
  if (failures > 0) process.exitCode = 1;
}
