#!/usr/bin/env node

import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  realpathSync,
  rmSync,
  symlinkSync,
} from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const agentPaths = {
  cursor: join(homedir(), ".cursor", "skills"),
  claude: join(homedir(), ".claude", "skills"),
  codex: join(homedir(), ".codex", "skills"),
  agents: join(homedir(), ".agents", "skills"),
  gemini: join(homedir(), ".gemini", "skills"),
};

function usage() {
  console.log(`Hunt3r's Skill Vault

Usage:
  hunt3r-skills [skills...] --agent <name> [options]
  hunt3r-skills [skills...] --target <directory> [options]

Skills:
  One or more skill names, or "all" (default).

Options:
  --agent <name>       cursor, claude, codex, agents, gemini, or all
  --target <directory> custom skills directory; may be repeated
  --mode <mode>        copy or symlink (default: copy)
  --force              replace an existing skill
  --dry-run            print operations without changing files
  --list               list available skills
  --help               show this help
`);
}

function fail(message) {
  console.error(`error: ${message}`);
  process.exitCode = 1;
}

function parseArguments(argv) {
  const options = {
    skills: [],
    targets: [],
    agent: null,
    mode: "copy",
    force: false,
    dryRun: false,
    list: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    const next = () => {
      index += 1;
      if (index >= argv.length || argv[index].startsWith("--")) {
        throw new Error(`${argument} requires a value`);
      }
      return argv[index];
    };

    switch (argument) {
      case "--agent":
        options.agent = next();
        break;
      case "--target":
        options.targets.push(resolve(next()));
        break;
      case "--mode":
        options.mode = next();
        break;
      case "--force":
        options.force = true;
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--list":
        options.list = true;
        break;
      case "--help":
      case "-h":
        options.help = true;
        break;
      default:
        if (argument.startsWith("-")) {
          throw new Error(`unknown option: ${argument}`);
        }
        options.skills.push(argument);
    }
  }

  if (options.skills.length === 0) options.skills.push("all");
  return options;
}

function discoverSkills() {
  return new Map(
    readdirSync(repository, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          existsSync(join(repository, entry.name, "SKILL.md")),
      )
      .map((entry) => [entry.name, join(repository, entry.name)])
      .sort(([left], [right]) => left.localeCompare(right)),
  );
}

function selectSkills(requested, available) {
  if (requested.includes("all")) {
    if (requested.length !== 1) {
      throw new Error('"all" cannot be combined with named skills');
    }
    return [...available.entries()];
  }

  const unique = [...new Set(requested)];
  const missing = unique.filter((name) => !available.has(name));
  if (missing.length > 0) {
    throw new Error(
      `unknown skill(s): ${missing.join(", ")}. Available: ${
        [...available.keys()].join(", ") || "none"
      }`,
    );
  }
  return unique.map((name) => [name, available.get(name)]);
}

function selectTargets(agent, customTargets) {
  const targets = [...customTargets];

  if (agent === "all") {
    targets.push(...Object.values(agentPaths));
  } else if (agent) {
    if (!(agent in agentPaths)) {
      throw new Error(
        `unknown agent: ${agent}. Available: ${Object.keys(agentPaths).join(", ")}, all`,
      );
    }
    targets.push(agentPaths[agent]);
  }

  return [...new Set(targets.map((target) => resolve(target)))];
}

function installSkill(name, source, targetRoot, options) {
  const destination = join(targetRoot, name);
  const action = options.mode === "symlink" ? "link" : "copy";

  if (existsSync(destination)) {
    if (!options.force) {
      throw new Error(
        `${destination} already exists; pass --force to replace it`,
      );
    }
    if (!options.dryRun) rmSync(destination, { recursive: true, force: true });
  }

  console.log(`${action}: ${source} -> ${destination}`);
  if (options.dryRun) return;

  mkdirSync(targetRoot, { recursive: true });
  if (options.mode === "symlink") {
    symlinkSync(
      realpathSync(source),
      destination,
      process.platform === "win32" ? "junction" : "dir",
    );
  } else {
    cpSync(source, destination, {
      recursive: true,
      filter: (path) => ![".DS_Store", "__pycache__"].includes(basename(path)),
    });
  }
}

function main() {
  let options;
  try {
    options = parseArguments(process.argv.slice(2));
  } catch (error) {
    fail(error.message);
    usage();
    return;
  }

  if (options.help) {
    usage();
    return;
  }

  const available = discoverSkills();
  if (options.list) {
    console.log([...available.keys()].join("\n"));
    return;
  }

  if (!options.agent && options.targets.length === 0) {
    fail("choose --agent or provide --target");
    return;
  }
  if (!["copy", "symlink"].includes(options.mode)) {
    fail("--mode must be copy or symlink");
    return;
  }

  try {
    const skills = selectSkills(options.skills, available);
    const targets = selectTargets(options.agent, options.targets);
    for (const target of targets) {
      for (const [name, source] of skills) {
        installSkill(name, source, target, options);
      }
    }
  } catch (error) {
    fail(error.message);
  }
}

main();
