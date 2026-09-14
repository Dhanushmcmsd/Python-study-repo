import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { createClient } from "@supabase/supabase-js";
import { LEVELS } from "../lib/courseContent";

function loadEnvLocal() {
  const envPath = join(__dirname, "..", ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

if (!url || !key) {
  console.error("Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  process.exit(1);
}

const supabase = createClient(url, key);

async function main() {
  console.log(`Seeding ${LEVELS.length} levels to Supabase...`);

  for (const level of LEVELS) {
    const { error } = await supabase.from("levels").upsert(
      {
        slug: level.slug,
        title: level.title,
        phase: level.phase,
        week: level.week ?? null,
        day: level.day,
        index_in_day: level.index_in_day,
        level_type: level.level_type,
        summary: level.summary,
        lesson_content: level.lesson_content,
        starter_code: level.starter_code,
        solution_code: level.solution_code,
        expected_output: level.expected_output ?? null,
        validation_type: level.validation_type,
        validation_pattern: level.validation_pattern ?? null,
        hints: level.hints,
      },
      { onConflict: "slug" }
    );

    if (error) {
      console.error(`fail ${level.slug}:`, error.message);
    } else {
      console.log(`ok ${level.slug}`);
    }
  }

  console.log("Seed complete!");
}

main();
