import Link from "next/link";
import { supabase } from "../lib/supabaseClient";

export default async function LevelsPage() {
  // Load a few demo levels from Supabase.
  const { data: levels } = await supabase
    .from("levels")
    .select("id, title, phase, week, index_in_week")
    .order("week")
    .order("index_in_week");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-2xl font-bold">Course Levels</h1>
        <p className="text-slate-300">
          This page lists levels from Supabase. Once you seed Week 1 in the database, they will appear below.
        </p>
        <ul className="space-y-3">
          {levels?.map((level) => (
            <li key={level.id} className="rounded-md border border-slate-700 p-4">
              <h2 className="font-semibold">
                {level.title} — Phase {level.phase}, Week {level.week}, Level {level.index_in_week}
              </h2>
            </li>
          )) ?? (
            <li className="rounded-md border border-slate-700 p-4 text-sm text-slate-400">
              No levels found yet. Seed Week 1 into the `levels` table.
            </li>
          )}
        </ul>
        <Link
          href="/levels/sample"
          className="inline-flex items-center justify-center rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-100 hover:bg-slate-700"
        >
          Open sample level
        </Link>
      </div>
    </main>
  );
}
