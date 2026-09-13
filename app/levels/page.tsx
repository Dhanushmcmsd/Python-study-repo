import Link from "next/link";
import { supabase } from "../lib/supabaseClient";

// Very simple static levels page for now.
export default async function LevelsPage() {
  // Later: fetch levels from Supabase.
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-2xl font-bold">Course Levels</h1>
        <p className="text-slate-300">
          This is the starting point for your interactive levels. We will connect this to Supabase to load
          real course content and progress.
        </p>
        <ul className="space-y-3">
          <li className="rounded-md border border-slate-700 p-4">
            <h2 className="font-semibold">Phase 1 — Week 1: Python Basics</h2>
            <p className="text-sm text-slate-400">Intro levels for syntax, variables, and data types.</p>
          </li>
        </ul>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-100 hover:bg-slate-700"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
