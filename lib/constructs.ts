const KEYWORD_CHECKS: { id: string; re: RegExp; label: string }[] = [
  { id: "def", re: /\bdef\s+\w+/, label: "def (function)" },
  { id: "class", re: /\bclass\s+\w+/, label: "class" },
  { id: "__init__", re: /\b__init__\b/, label: "__init__" },
  { id: "if", re: /\bif\b/, label: "if" },
  { id: "elif", re: /\belif\b/, label: "elif" },
  { id: "else", re: /\belse\s*:/, label: "else" },
  { id: "for", re: /\bfor\s+\w+\s+in\b/, label: "for" },
  { id: "while", re: /\bwhile\b/, label: "while" },
  { id: "return", re: /\breturn\b/, label: "return" },
  { id: "try", re: /\btry\s*:/, label: "try" },
  { id: "except", re: /\bexcept\b/, label: "except" },
  { id: "with", re: /\bwith\b/, label: "with" },
  { id: "lambda", re: /\blambda\b/, label: "lambda" },
  { id: "f-string", re: /f["']/, label: "f-string" },
];

const BUILTIN_CHECKS = [
  "print",
  "len",
  "range",
  "enumerate",
  "zip",
  "sorted",
  "sum",
  "min",
  "max",
  "int",
  "str",
  "float",
  "list",
  "dict",
  "set",
  "tuple",
  "input",
  "open",
  "isinstance",
  "type",
  "abs",
  "round",
  "map",
  "filter",
  "any",
  "all",
];

const METHOD_CHECKS = [
  "append",
  "extend",
  "split",
  "join",
  "strip",
  "replace",
  "format",
  "items",
  "keys",
  "values",
  "get",
  "lower",
  "upper",
  "startswith",
  "endswith",
  "find",
  "count",
  "sort",
  "pop",
  "update",
];

export interface CodeConstructs {
  keywords: string[];
  builtins: string[];
  methods: string[];
  imports: string[];
  labels: string[];
}

function stripComments(code: string): string {
  return code
    .split("\n")
    .map((line) => {
      const comment = line.indexOf("#");
      return comment >= 0 ? line.slice(0, comment) : line;
    })
    .join("\n");
}

function maskStrings(code: string): string {
  return code
    .replace(/f"""[\s\S]*?"""/g, '""')
    .replace(/f'''[\s\S]*?'''/g, "''")
    .replace(/"""[\s\S]*?"""/g, '""')
    .replace(/'''[\s\S]*?'''/g, "''")
    .replace(/f"[^"\\]*(?:\\.[^"\\]*)*"/g, '""')
    .replace(/f'[^'\\]*(?:\\.[^'\\]*)*'/g, "''")
    .replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g, '""')
    .replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g, "''");
}

function extractImports(code: string): string[] {
  const found = new Set<string>();
  const re = /(?:^|\n)\s*(?:import\s+(\w+)|from\s+(\w+)\s+import)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(code)) !== null) {
    const name = match[1] || match[2];
    if (name) found.add(name);
  }
  return [...found];
}

export function extractConstructs(code: string): CodeConstructs {
  const withoutComments = stripComments(code);
  const source = maskStrings(withoutComments);
  const keywords: string[] = [];
  const labels: string[] = [];

  for (const check of KEYWORD_CHECKS) {
    const haystack = check.id === "f-string" ? withoutComments : source;
    if (check.re.test(haystack)) {
      keywords.push(check.id);
      labels.push(check.label);
    }
  }

  const builtins = BUILTIN_CHECKS.filter((name) => new RegExp(`\\b${name}\\s*\\(`).test(source));
  const methods = METHOD_CHECKS.filter((name) => new RegExp(`\\.${name}\\s*\\(`).test(source));
  const imports = extractImports(source);

  labels.push(...builtins.map((b) => `${b}()`));
  labels.push(...methods.map((m) => `.${m}()`));
  labels.push(...imports.map((m) => `import ${m}`));

  return { keywords, builtins, methods, imports, labels };
}

export function missingConstructs(required: CodeConstructs, student: CodeConstructs): string[] {
  const missing: string[] = [];

  for (const id of required.keywords) {
    if (!student.keywords.includes(id)) {
      const label = KEYWORD_CHECKS.find((c) => c.id === id)?.label ?? id;
      missing.push(label);
    }
  }
  for (const name of required.builtins) {
    if (!student.builtins.includes(name)) missing.push(`${name}()`);
  }
  for (const name of required.methods) {
    if (!student.methods.includes(name)) missing.push(`.${name}()`);
  }
  for (const name of required.imports) {
    if (!student.imports.includes(name)) missing.push(`import ${name}`);
  }

  return missing;
}
