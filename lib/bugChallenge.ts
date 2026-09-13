import type { Level } from "./types";

export interface BugChallenge {
  day: number;
  incidentId: string;
  buggyCode: string;
  referenceCode: string;
}

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function pick<T>(rand: () => number, items: T[]): T {
  return items[Math.floor(rand() * items.length) % items.length];
}

type Mutator = (lines: string[], rand: () => number, tag: string) => boolean;

function isCodeLine(line: string): boolean {
  const t = line.trim();
  return Boolean(t) && !t.startsWith("#");
}

const MUTATORS: Mutator[] = [
  function dropColon(lines) {
    const idx = lines.findIndex((l) => isCodeLine(l) && /:\s*$/.test(l.trimEnd()));
    if (idx < 0) return false;
    lines[idx] = lines[idx].replace(/:\s*$/, "");
    return true;
  },
  function misspellPrint(lines) {
    const idx = lines.findIndex((l) => /\bprint\s*\(/.test(l));
    if (idx < 0) return false;
    const typo = ["prnt", "pirnt", "pint", "priint"][idx % 4];
    lines[idx] = lines[idx].replace(/\bprint\s*\(/, `${typo}(`);
    return true;
  },
  function unclosedString(lines) {
    const idx = lines.findIndex((l) => /["']/.test(l) && isCodeLine(l));
    if (idx < 0) return false;
    lines[idx] = lines[idx].replace(/"([^"]*)"/, '"$1').replace(/'([^']*)'/, "'$1");
    return true;
  },
  function missingParen(lines) {
    const idx = lines.findIndex((l) => isCodeLine(l) && l.includes("(") && l.includes(")"));
    if (idx < 0) return false;
    lines[idx] = lines[idx].replace(/\)(?=[^)]*$)/, "");
    return true;
  },
  function indentBreak(lines) {
    const idx = lines.findIndex((l, i) => i > 0 && /^\s+/.test(l) && isCodeLine(l));
    if (idx < 0) return false;
    lines[idx] = lines[idx].trimStart();
    return true;
  },
  function keywordTypo(lines) {
    const map: [RegExp, string][] = [
      [/\bif\b/, "iff"],
      [/\bfor\b/, "fro"],
      [/\bdef\b/, "dfn"],
      [/\bclass\b/, "clas"],
      [/\breturn\b/, "retrun"],
      [/\bwhile\b/, "whle"],
      [/\bexcept\b/, "exceptt"],
      [/\bTrue\b/, "Treu"],
      [/\bFalse\b/, "Flase"],
      [/\bNone\b/, "Non"],
    ];
    for (const [re, to] of map) {
      const idx = lines.findIndex((l) => isCodeLine(l) && re.test(l));
      if (idx >= 0) {
        lines[idx] = lines[idx].replace(re, to);
        return true;
      }
    }
    return false;
  },
  function uniqueNameError(lines, _rand, tag) {
    const idx = lines.findIndex((l) => /^\s*[a-zA-Z_]\w*\s*=/.test(l) && isCodeLine(l));
    if (idx < 0) return false;
    lines[idx] = lines[idx].replace(
      /^(\s*)([a-zA-Z_]\w*)(\s*=)/,
      `$1$2_${tag.slice(0, 4)}$3`
    );
    return true;
  },
];

export function generateDayBugChallenge(userKey: string, day: number, levels: Level[]): BugChallenge {
  const seed = hashString(`${userKey}::day-${day}::bugfix-v1`);
  const rand = rng(seed);
  const incidentId = `BF${String(day).padStart(2, "0")}-${seed.toString(16).toUpperCase().padStart(8, "0")}-${hashString(userKey + ":id").toString(16).toUpperCase().slice(0, 6)}`;
  const tag = seed.toString(36).toUpperCase().slice(0, 6);

  const referenceCode = levels
    .slice()
    .sort((a, b) => a.index_in_day - b.index_in_day)
    .map((l) => l.solution_code.trim())
    .filter(Boolean)
    .join("\n\n");

  const lines = referenceCode.split("\n");
  const used = new Set<number>();
  const attempts = 2 + Math.floor(rand() * 2);

  for (let n = 0; n < attempts; n++) {
    let applied = false;
    for (let t = 0; t < MUTATORS.length; t++) {
      const index = Math.floor(rand() * MUTATORS.length) % MUTATORS.length;
      if (used.has(index)) continue;
      used.add(index);
      if (MUTATORS[index](lines, rand, tag)) {
        applied = true;
        break;
      }
    }
    if (!applied) {
      const fallback = lines.findIndex(isCodeLine);
      if (fallback >= 0 && !lines[fallback].includes("# BROKEN")) {
        lines[fallback] = lines[fallback].replace(/:\s*$/, "") + (lines[fallback].includes("(") ? "" : "(");
        applied = true;
      }
    }
  }

  const decoyCrash = `crash_probe_${tag}(`;
  const decoyBind = pick(rand, [
    `# fingerprint ${tag} — remove crash_probe and repair syntax`,
    `# operator ${tag} — neutralize the injected fault`,
    `# payload ${tag} — restore a runnable script`,
  ]);

  const buggyCode = [
    `# INCIDENT ${incidentId}`,
    `# HOSTILE PAYLOAD — unique fault for this operator`,
    decoyBind,
    decoyCrash,
    ...lines,
  ].join("\n");

  return { day, incidentId, buggyCode, referenceCode };
}

export function dayBugSlug(day: number): string {
  return `day-${day}-bugfix`;
}
