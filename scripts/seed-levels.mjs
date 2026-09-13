/**
 * Seed Supabase levels table from bundled course content.
 * Run: node scripts/seed-levels.mjs
 * Requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Load env from .env.local
try {
  const envFile = readFileSync(join(root, ".env.local"), "utf8");
  for (const line of envFile.split("\n")) {
    const [key, ...vals] = line.split("=");
    if (key && vals.length) process.env[key.trim()] = vals.join("=").trim();
  }
} catch {
  console.warn("No .env.local found");
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.error("Missing Supabase env vars");
  process.exit(1);
}

// Dynamic import of compiled levels - use inline require of TS via eval of exported data
// Instead, read the SQL seed or duplicate minimal - we'll import via dynamic eval
const { LEVELS } = await import("../lib/courseContent.ts").catch(async () => {
  // Fallback: parse from a JSON export
  const { execSync } = await import("child_process");
  execSync("npx tsx --eval \"import { LEVELS } from './lib/courseContent.ts'; require('fs').writeFileSync('scripts/levels.json', JSON.stringify(LEVELS))\"", {
    cwd: root,
    stdio: "inherit",
  });
  return { LEVELS: JSON.parse(readFileSync(join(root, "scripts/levels.json"), "utf8")) };
});

const supabase = createClient(url, key);

console.log(`Seeding ${LEVELS.length} levels...`);

for (const level of LEVELS) {
  const { error } = await supabase.from("levels").upsert(
    {
      slug: level.slug,
      title: level.title,
      phase: level.phase,
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
    console.error(`Failed ${level.slug}:`, error.message);
  } else {
    console.log(`✓ ${level.slug}`);
  }
}

console.log("Done!");
