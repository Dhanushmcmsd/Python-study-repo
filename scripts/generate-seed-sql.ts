import { LEVELS } from "../lib/courseContent";

function escapeSql(str: string): string {
  return str.replace(/'/g, "''");
}

function toSqlArray(arr: string[]): string {
  if (arr.length === 0) return "ARRAY[]::text[]";
  return `ARRAY[${arr.map((h) => `'${escapeSql(h)}'`).join(", ")}]`;
}

const inserts = LEVELS.map((level) => {
  return `INSERT INTO public.levels (
  slug, title, phase, week, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  '${escapeSql(level.slug)}',
  '${escapeSql(level.title)}',
  ${level.phase},
  ${level.week ?? "NULL"},
  ${level.day},
  ${level.index_in_day},
  '${escapeSql(level.level_type)}',
  '${escapeSql(level.summary)}',
  '${escapeSql(level.lesson_content)}',
  '${escapeSql(level.starter_code)}',
  '${escapeSql(level.solution_code)}',
  ${level.expected_output ? `'${escapeSql(level.expected_output)}'` : "NULL"},
  '${escapeSql(level.validation_type)}',
  ${level.validation_pattern ? `'${escapeSql(level.validation_pattern)}'` : "NULL"},
  ${toSqlArray(level.hints)}
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;`;
});

const sql = inserts.join("\n\n");
process.stdout.write(sql);
console.error(`Generated ${LEVELS.length} upserts (stdout).`);
