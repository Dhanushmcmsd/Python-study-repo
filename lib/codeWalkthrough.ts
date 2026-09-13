import type { Level } from "./types";

export interface LineNote {
  line: number;
  text: string;
  why: string;
}

function explainLine(line: string): { text: string; why: string } {
  const trimmed = line.trim();

  if (!trimmed) {
    return { text: "Blank line", why: "Python ignores empty lines — they just make code easier to read." };
  }

  if (trimmed.startsWith("#")) {
    return {
      text: "Comment",
      why: "Comments document your thinking. Python skips them — they're for humans, not the computer.",
    };
  }

  if (trimmed.startsWith("def ")) {
    return {
      text: "Function definition",
      why: "Functions bundle reusable steps. Define once, call many times — the heart of automation.",
    };
  }

  if (trimmed.startsWith("class ")) {
    return {
      text: "Class definition",
      why: "Classes are blueprints for objects. They group data and behavior together.",
    };
  }

  if (trimmed.startsWith("if ") || trimmed.startsWith("elif ")) {
    return {
      text: "Conditional branch",
      why: "Programs make decisions here. Only the matching branch runs — like a choose-your-path moment.",
    };
  }

  if (trimmed.startsWith("else:")) {
    return {
      text: "Else branch",
      why: "Runs when no other condition matched — your fallback plan.",
    };
  }

  if (trimmed.startsWith("for ") || trimmed.startsWith("while ")) {
    return {
      text: "Loop",
      why: "Loops repeat work automatically. Essential for processing lists, files, and API data.",
    };
  }

  if (trimmed.startsWith("try:")) {
    return {
      text: "Error handler",
      why: "try/except catches crashes gracefully so your automation keeps running.",
    };
  }

  if (trimmed.startsWith("except")) {
    return {
      text: "Exception catch",
      why: "Handles specific errors without stopping the whole program.",
    };
  }

  if (trimmed.startsWith("return ")) {
    return {
      text: "Return value",
      why: "Sends a result back to whoever called the function — like handing back an answer.",
    };
  }

  if (trimmed.startsWith("import ") || trimmed.startsWith("from ")) {
    return {
      text: "Import module",
      why: "Pulls in extra tools (datetime, json, re) so you don't reinvent the wheel.",
    };
  }

  if (trimmed.includes("print(")) {
    return {
      text: "Print output",
      why: "Shows results on screen. Your first debugging superpower — see what the code actually does.",
    };
  }

  if (/^[a-zA-Z_]\w*\s*=/.test(trimmed) && !trimmed.startsWith("if ")) {
    return {
      text: "Variable assignment",
      why: "Stores data in a named box. Use descriptive names so future-you understands the code.",
    };
  }

  if (trimmed.endsWith("()") && !trimmed.startsWith("print")) {
    return {
      text: "Function call",
      why: "Runs a function. Parentheses () mean 'execute this now'.",
    };
  }

  return {
    text: "Python statement",
    why: "Python runs lines top to bottom. Each line is one instruction the computer follows.",
  };
}

export function buildWalkthrough(code: string, level: Level): LineNote[] {
  const lines = code.split("\n");
  const hints = level.hints ?? [];

  return lines.map((line, index) => {
    const lineNum = index + 1;
    const base = explainLine(line);
    const hint = hints[Math.min(index, hints.length - 1)];

    return {
      line: lineNum,
      text: base.text,
      why: line.trim().startsWith("#") ? base.why : `${base.why}${hint ? ` Tip: ${hint}` : ""}`,
    };
  });
}

export function getLineNote(walkthrough: LineNote[], lineNumber: number): LineNote | undefined {
  return walkthrough.find((n) => n.line === lineNumber);
}
