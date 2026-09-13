"use client";
import { useState } from "react";
import LevelPlayground from "../components/LevelPlayground";

const INITIAL_CODE = "print('Hello from Python automation course')";

export default function SampleLevelPage() {
  const [showPlayground, setShowPlayground] = useState(true);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-2xl font-bold">Sample Level — Hello Python</h1>
        <p className="text-slate-300">
          This sample level shows how students will run code, see output, and iterate. We will later connect
          this to real course content and Supabase-stored levels.
        </p>
        {showPlayground && <LevelPlayground initialCode={INITIAL_CODE} />}
      </div>
    </main>
  );
}
