import type { Level } from "./types";
import { extractConstructs, missingConstructs } from "./constructs";

export function validateSubmission(level: Level, output: string, code: string): {
  passed: boolean;
  message: string;
} {
  return validateAgainstReference(level.solution_code, output, code, {
    requireOutput: Boolean((level.expected_output ?? level.validation_pattern ?? "").trim())
      || /\bprint\s*\(/.test(level.solution_code),
  });
}

export function validateAgainstReference(
  referenceCode: string,
  output: string,
  code: string,
  options?: { requireOutput?: boolean }
): { passed: boolean; message: string } {
  const trimmedCode = code.trim();
  const trimmedOutput = output.trim();

  if (!trimmedCode) {
    return { passed: false, message: "Type working Python that uses today's tools first." };
  }

  const required = extractConstructs(referenceCode);
  const student = extractConstructs(trimmedCode);
  const missing = missingConstructs(required, student);

  if (missing.length > 0) {
    return {
      passed: false,
      message: `Use the same Python tools as the lesson (strings and numbers can change): ${missing.join(", ")}`,
    };
  }

  if (options?.requireOutput && !trimmedOutput) {
    return {
      passed: false,
      message: "Your code ran, but printed nothing. Use print() so you can see the result.",
    };
  }

  return {
    passed: true,
    message: "Required functions and structures ran correctly. Strings and numbers can differ.",
  };
}
