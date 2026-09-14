import type { Level } from "../types";
import { getPracticalTask } from "./practicalTasks";

const TYPE_NOTE: Record<Level["level_type"], string> = {
  concept: `\nType the example in the editor and run it.`,
  run: `\nType the example in the editor and run it.`,
  modify: `\nType the example, then make the change described above.`,
  exercise: `\nWatch indentation, colons after if/for/def, and matching quotes.`,
  debug: `\nRead the error, fix one issue, then run again.`,
  quiz: `\nWrite this from earlier lessons. Exact wording is not required.`,
  project: `\nCombine this week's tools. Exact wording is not required.`,
};

const REAL_WORLD: Record<number, string> = {
  1: "Onboarding scripts, Slack bots, and one-off formatters at work.",
  2: "Expense reports, approval rules, and spreadsheet exports.",
  3: "Reusable functions in cron jobs, email reports, and CLIs.",
  4: "Domain models (customers, tickets) and safe ETL rows.",
  5: "Log analysis, CSV ingestion, and regex cleanup pipelines.",
  6: "Live HTTP clients — weather, CRM, catalog, and monitoring.",
  7: "Scheduled jobs with retries, config files, and audit logs.",
  8: "Payroll CSV, mail-merge, and report delivery.",
  9: "Ticket routing and prompt templates before LLM calls.",
  10: "Document ingestion pipelines with metadata and summaries.",
  11: "Tool-using agents with plans, guardrails, and registries.",
  12: "Tested utilities you ship to GitHub and deploy.",
};

export function enrichLevel(level: Level): Level {
  const week = level.week ?? 1;
  const liveNote =
    week === 6
      ? `\n\nThis lesson uses live HTTPS. \`fetch_json(url)\` / \`fetch_text(url)\` are provided. On a laptop, use \`requests.get(url).json()\`.`
      : level.slug === "week12-level10-project"
        ? `\n\nAfter the compressor runs, complete **BUILD IT** to push the Streamlit app.`
        : "";

  const realWorld = REAL_WORLD[week]
    ? `\n\n**Where you'd use this:** ${REAL_WORLD[week]}`
    : "";

  let practicalPreview = "";
  if (level.index_in_day === 2) {
    const task = getPracticalTask(level.day);
    if (task) {
      practicalPreview = `\n\n---\n\n## After these two levels — BUILD IT\n\n**${task.title}** — ${task.scenario}\n\nDownload the example file (or use your own), implement the script, push to Git when ready, then complete **BUG FIX** to finish the day.`;
    }
  }

  const challengeBlock = `

---

## Code to type

\`\`\`python
${level.solution_code}
\`\`\`

Sample output (text, numbers, and live API values can differ):
\`\`\`
${level.expected_output ?? level.validation_pattern ?? "Run your code to see output"}
\`\`\`
`;

  return {
    ...level,
    lesson_content: `${level.lesson_content}${realWorld}${liveNote}${TYPE_NOTE[level.level_type] ?? ""}${practicalPreview}${challengeBlock}`,
    starter_code: "",
  };
}

export function enrichLevels(levels: Level[]): Level[] {
  return levels.map(enrichLevel);
}
