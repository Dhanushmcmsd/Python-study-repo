import type { Level } from "./types";

export function validateSubmission(level: Level, output: string, code: string): {
  passed: boolean;
  message: string;
} {
  const trimmedOutput = output.trim();
  const trimmedCode = code.trim();

  if (!trimmedCode) {
    return { passed: false, message: "Type the code from the lesson challenge first." };
  }

  const type = level.validation_type;

  if (type === "none") {
    return { passed: true, message: "[OK] Code executed without errors." };
  }

  const pattern = level.validation_pattern ?? level.expected_output ?? "";

  if (type === "output") {
    const expected = pattern.trim();
    if (trimmedOutput === expected) {
      return { passed: true, message: "[OK] Output matches exactly. Access granted." };
    }
    return {
      passed: false,
      message: `Expected:\n${expected}\n\nGot:\n${trimmedOutput || "(empty)"}`,
    };
  }

  if (type === "contains") {
    if (pattern && trimmedOutput.includes(pattern)) {
      return { passed: true, message: "[OK] Output verified. Mission complete." };
    }
    return {
      passed: false,
      message: `Output should contain: "${pattern}"`,
    };
  }

  return { passed: true, message: "[OK] Code executed." };
}
