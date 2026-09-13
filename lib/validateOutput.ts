import type { Level } from "./types";

export function validateSubmission(level: Level, output: string, code: string): {
  passed: boolean;
  message: string;
} {
  const trimmedOutput = output.trim();
  const type = level.validation_type;

  if (type === "none") {
    return { passed: true, message: "Code ran successfully!" };
  }

  const pattern = level.validation_pattern ?? level.expected_output ?? "";

  if (type === "output") {
    const expected = pattern.trim();
    if (trimmedOutput === expected) {
      return { passed: true, message: "Perfect! Output matches exactly." };
    }
    return {
      passed: false,
      message: `Expected output:\n${expected}\n\nYour output:\n${trimmedOutput || "(empty)"}`,
    };
  }

  if (type === "contains") {
    if (pattern && trimmedOutput.includes(pattern)) {
      return { passed: true, message: "Great job! Your output looks correct." };
    }
    if (pattern && code.includes(pattern.split(" ")[0])) {
      // Also check code contains key elements for concept levels
      return { passed: true, message: "Nice work!" };
    }
    return {
      passed: false,
      message: `Your output should contain: "${pattern}"`,
    };
  }

  return { passed: true, message: "Code executed." };
}
