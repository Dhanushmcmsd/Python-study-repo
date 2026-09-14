import type { Level } from "../types";

const TYPE_NOTE: Record<Level["level_type"], string> = {
  concept: `\nType the example in the editor and run it.`,
  run: `\nType the example in the editor and run it.`,
  modify: `\nType the example, then make the change described above.`,
  exercise: `\nWatch indentation, colons after if/for/def, and matching quotes.`,
  debug: `\nRead the error, fix one issue, then run again.`,
  quiz: `\nWrite this from earlier lessons. Exact wording is not required.`,
  project: `\nCombine this week's tools. Exact wording is not required.`,
};

export function enrichLevel(level: Level): Level {
  const liveNote =
    level.week === 6
      ? `\n\nThis lesson uses live HTTPS. \`fetch_json(url)\` / \`fetch_text(url)\` are provided. On a laptop, use \`requests.get(url).json()\`.`
      : level.slug === "week12-level10-project"
        ? `\n\nAfter the compressor runs, use the ship panel to download or push the Streamlit app.`
        : "";

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
    lesson_content: `${level.lesson_content}${liveNote}${TYPE_NOTE[level.level_type] ?? ""}${challengeBlock}`,
    starter_code: "",
  };
}

export function enrichLevels(levels: Level[]): Level[] {
  return levels.map(enrichLevel);
}
