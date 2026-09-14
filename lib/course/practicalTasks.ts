import type { PracticalTask } from "../practicalTask";

const GIT_BASE = `### Git workflow (local)
\`\`\`bash
git init
git add .
git commit -m "Day implementation"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
\`\`\`
Token stays in this browser only if you use Push below — never commit secrets.`;

const RUN_PY = `\`\`\`bash
python -m venv .venv
# Windows: .venv\\Scripts\\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python script.py
\`\`\``;

type DaySpec = Omit<PracticalTask, "day" | "week">;

function file(name: string): PracticalTask["exampleFile"] {
  return { name, path: `/examples/${name}` };
}

function buildAllPracticalTasks(): PracticalTask[] {
  const tasks: PracticalTask[] = [];
  for (let week = 0; week < WEEK_SPECS.length; week++) {
    for (let i = 0; i < WEEK_SPECS[week].length; i++) {
      const day = week * 5 + i + 1;
      tasks.push({ day, week: week + 1, ...WEEK_SPECS[week][i] });
    }
  }
  return tasks;
}

const WEEK_SPECS: DaySpec[][] = [
  [
    {
      title: "Process a welcome document",
      scenario: "HR sends a plain-text onboarding file. Your script reports how much text arrived.",
      realWorldUse: "Every automation starts by reading a file and proving the pipeline ran.",
      requirements: ["Use FILE_TEXT from the example or your upload", "Print line count and word count", "Print PROCESSED OK"],
      edgeCases: ["Empty file should print zero counts", "Extra blank lines still count as lines"],
      exampleFile: file("intro.txt"),
      acceptsOwnFile: true,
      ownFileHint: "Upload any .txt file — counts should reflect your file, not the sample.",
      starterCode: `lines = FILE_TEXT.split("\\n")\nwords = len(FILE_TEXT.split())\nprint(f"Lines: {len(lines)}")\nprint(f"Words: {words}")\nprint("PROCESSED OK")`,
      solutionCode: `lines = FILE_TEXT.split("\\n")\nwords = len(FILE_TEXT.split())\nprint(f"Lines: {len(lines)}")\nprint(f"Words: {words}")\nprint("PROCESSED OK")`,
      validationPattern: "PROCESSED OK",
      runLocally: RUN_PY,
    },
    {
      title: "Extract fields from a team roster",
      scenario: "A manager stores name and city as key=value lines in a text file.",
      realWorldUse: "Config files and exports often use simple line formats before JSON.",
      requirements: ["Parse name= and city= from FILE_TEXT", "Print both values", "Print PROCESSED OK"],
      edgeCases: ["Missing city= should not crash — use a default"],
      exampleFile: file("team-notes.txt"),
      acceptsOwnFile: true,
      ownFileHint: "Try your own .txt with name= and city= lines.",
      starterCode: `name = "unknown"\ncity = "unknown"\nfor line in FILE_TEXT.split("\\n"):\n    if line.startswith("name="):\n        name = line.split("=", 1)[1].strip()\n    if line.startswith("city="):\n        city = line.split("=", 1)[1].strip()\nprint(f"Name: {name}")\nprint(f"City: {city}")\nprint("PROCESSED OK")`,
      solutionCode: `name = "unknown"\ncity = "unknown"\nfor line in FILE_TEXT.split("\\n"):\n    if line.startswith("name="):\n        name = line.split("=", 1)[1].strip()\n    if line.startswith("city="):\n        city = line.split("=", 1)[1].strip()\nprint(f"Name: {name}")\nprint(f"City: {city}")\nprint("PROCESSED OK")`,
      validationPattern: "PROCESSED OK",
    },
    {
      title: "Total a CSV sales row",
      scenario: "Finance exports one product row as CSV. Compute quantity times price.",
      realWorldUse: "Spreadsheet exports land as CSV — scripts validate totals before payroll.",
      requirements: ["Skip header row", "Parse quantity and price from CSV", "Print REVENUE: with total", "Print PROCESSED OK"],
      edgeCases: ["Non-numeric price should be caught with try/except or validation"],
      exampleFile: file("sales-line.csv"),
      acceptsOwnFile: true,
      ownFileHint: "Upload a CSV with product,quantity,price columns.",
      starterCode: `rows = FILE_TEXT.strip().split("\\n")\ndata = rows[1].split(",")\nproduct = data[0]\nqty = int(data[1])\nprice = float(data[2])\nprint(f"Product: {product}")\nprint(f"REVENUE: {qty * price:.2f}")\nprint("PROCESSED OK")`,
      solutionCode: `rows = FILE_TEXT.strip().split("\\n")\ndata = rows[1].split(",")\nproduct = data[0]\nqty = int(data[1])\nprice = float(data[2])\nprint(f"Product: {product}")\nprint(f"REVENUE: {qty * price:.2f}")\nprint("PROCESSED OK")`,
      validationPattern: "REVENUE:",
    },
    {
      title: "Validate a user profile file",
      scenario: "Support receives profile.txt with email and age before creating an account.",
      realWorldUse: "Input validation scripts run before data hits a database.",
      requirements: ["Read email= and age= lines", "Check @ in email", "Print Valid: True or False", "Print PROCESSED OK"],
      edgeCases: ["Age must be digits", "Missing email should print Valid: False"],
      exampleFile: file("user-profile.txt"),
      acceptsOwnFile: true,
      ownFileHint: "Upload a profile.txt with email= and age= lines.",
      starterCode: `email = ""\nage = ""\nfor line in FILE_TEXT.split("\\n"):\n    if line.startswith("email="):\n        email = line.split("=", 1)[1].strip()\n    if line.startswith("age="):\n        age = line.split("=", 1)[1].strip()\nvalid = "@" in email and age.isdigit()\nprint(f"Email: {email}")\nprint(f"Valid: {valid}")\nprint("PROCESSED OK")`,
      solutionCode: `email = ""\nage = ""\nfor line in FILE_TEXT.split("\\n"):\n    if line.startswith("email="):\n        email = line.split("=", 1)[1].strip()\n    if line.startswith("age="):\n        age = line.split("=", 1)[1].strip()\nvalid = "@" in email and age.isdigit()\nprint(f"Email: {email}")\nprint(f"Valid: {valid}")\nprint("PROCESSED OK")`,
      validationPattern: "Valid:",
    },
    {
      title: "Ship a personal intro from a file",
      scenario: "Build a script that turns a text file into a formatted intro for Slack or email.",
      realWorldUse: "Small formatters are the first scripts developers deploy to teams.",
      requirements: ["Read FILE_TEXT", "Print at least two lines of output", "Print PROCESSED OK"],
      edgeCases: ["Trim leading/trailing whitespace on each line"],
      exampleFile: file("intro.txt"),
      acceptsOwnFile: true,
      ownFileHint: "Use your own intro .txt — output should reflect your content.",
      starterCode: `for line in FILE_TEXT.strip().split("\\n"):\n    if line.strip():\n        print(f"-> {line.strip()}")\nprint("PROCESSED OK")`,
      solutionCode: `for line in FILE_TEXT.strip().split("\\n"):\n    if line.strip():\n        print(f"-> {line.strip()}")\nprint("PROCESSED OK")`,
      validationPattern: "PROCESSED OK",
      gitNotes: GIT_BASE,
    },
  ],
];

// Remaining weeks loaded from generated data file
import { WEEK_SPECS_EXTRA } from "./practicalTasksExtra";

WEEK_SPECS.push(...WEEK_SPECS_EXTRA);

export const PRACTICAL_TASKS: PracticalTask[] = buildAllPracticalTasks();

export function getPracticalTask(day: number): PracticalTask | undefined {
  return PRACTICAL_TASKS.find((t) => t.day === day);
}
