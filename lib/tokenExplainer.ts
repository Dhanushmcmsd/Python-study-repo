export interface TokenExplanation {
  token: string;
  role: string;
}

export interface LineBreakdown {
  lineNumber: number;
  code: string;
  tokens: TokenExplanation[];
  summary: string;
}

const KEYWORDS: Record<string, string> = {
  def: "Defines a new function",
  class: "Creates a class blueprint",
  if: "Starts a conditional check",
  elif: "Another condition to test",
  else: "Runs when no condition matched",
  for: "Loops over a sequence",
  while: "Repeats while condition is true",
  return: "Sends a value back from a function",
  import: "Loads a module/library",
  from: "Imports specific items from a module",
  try: "Starts error-handling block",
  except: "Catches errors",
  finally: "Always runs after try/except",
  with: "Opens a resource safely",
  as: "Gives an alias name",
  in: "Checks membership or loops",
  not: "Negates a condition",
  and: "Both conditions must be true",
  or: "Either condition can be true",
  True: "Boolean true value",
  False: "Boolean false value",
  None: "Represents no value",
  pass: "Placeholder — does nothing",
  break: "Exits a loop early",
  continue: "Skips to next loop iteration",
  lambda: "Creates a small anonymous function",
  yield: "Produces a value in a generator",
  raise: "Throws an exception",
  global: "Uses a global variable",
};

function explainToken(token: string, context: string): TokenExplanation {
  const clean = token.trim();
  if (!clean) return { token: "(space)", role: "Separates words so Python can read them" };

  if (KEYWORDS[clean]) return { token: clean, role: KEYWORDS[clean] };
  if (clean === "print") return { token: clean, role: "Built-in function that displays output on screen" };
  if (clean === "=") return { token: clean, role: "Assigns a value to a variable" };
  if (clean === "==") return { token: clean, role: "Checks if two values are equal" };
  if (clean === "!=") return { token: clean, role: "Checks if two values are different" };
  if (clean === "+") return { token: clean, role: "Adds values or joins strings" };
  if (clean === "-") return { token: clean, role: "Subtracts values" };
  if (clean === "*") return { token: clean, role: "Multiplies or repeats strings" };
  if (clean === "/") return { token: clean, role: "Divides values" };
  if (clean === "%") return { token: clean, role: "Modulo — remainder after division" };
  if (clean === ":") return { token: clean, role: "Ends a statement header (if, for, def, class)" };
  if (clean === "(") return { token: clean, role: "Opens a group — function call or grouping" };
  if (clean === ")") return { token: clean, role: "Closes a group" };
  if (clean === "[") return { token: clean, role: "Starts a list" };
  if (clean === "]") return { token: clean, role: "Ends a list" };
  if (clean === "{") return { token: clean, role: "Starts a dictionary or set" };
  if (clean === "}") return { token: clean, role: "Ends a dictionary or set" };
  if (clean === ",") return { token: clean, role: "Separates items in a list or function arguments" };
  if (clean === ".") return { token: clean, role: "Accesses an attribute or method on an object" };
  if (clean === "#") return { token: clean, role: "Starts a comment — Python ignores the rest of the line" };
  if (clean === 'f"' || clean === "f'") return { token: clean, role: "Starts an f-string — embeds variables inside text" };
  if (/^["']/.test(clean) || /["']$/.test(clean))
    return { token: clean, role: "A string (text) value" };
  if (/^\d/.test(clean)) return { token: clean, role: "A number value" };
  if (/^[a-zA-Z_]\w*$/.test(clean)) {
    if (context.includes("=") && context.indexOf(clean) < context.indexOf("="))
      return { token: clean, role: "Variable name — stores data for later use" };
    return { token: clean, role: "Identifier — a name referring to data or a function" };
  }

  return { token: clean, role: "Part of the Python expression" };
}

function tokenizeLine(line: string): string[] {
  const tokens: string[] = [];
  const regex = /(f?"[^"]*"|f?'[^']*'|#.*|\w+|[^\s\w])/g;
  let match;
  while ((match = regex.exec(line)) !== null) {
    if (match[0].trim()) tokens.push(match[0]);
  }
  return tokens;
}

export function breakdownCode(code: string): LineBreakdown[] {
  const lines = code.split("\n").filter((l) => l.trim() && !l.trim().startsWith("#"));

  return lines.map((line, i) => {
    const tokens = tokenizeLine(line).map((t) => explainToken(t, line));
    const trimmed = line.trim();

    let summary = "Python executes this line in order.";
    if (trimmed.startsWith("print")) summary = "Displays a message to the output panel.";
    else if (trimmed.startsWith("def ")) summary = "Creates a reusable function you can call later.";
    else if (trimmed.startsWith("if ")) summary = "Makes a decision — only runs code when the condition is true.";
    else if (trimmed.startsWith("for ") || trimmed.startsWith("while "))
      summary = "Repeats code — automation's best friend.";
    else if (trimmed.includes("=") && !trimmed.includes("=="))
      summary = "Stores a value in memory so you can use it later.";
    else if (trimmed.startsWith("import") || trimmed.startsWith("from"))
      summary = "Brings in extra Python tools for this script.";

    return { lineNumber: i + 1, code: line, tokens, summary };
  });
}
