"use client";

import Link from "next/link";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import { isLevelCompleted } from "@/lib/progress";
import type { Level } from "@/lib/types";
import { useEffect, useState } from "react";

const TYPE_LABELS: Record<string, string> = {
  concept: "Lesson",
  run: "Run Code",
  modify: "Modify",
  exercise: "Exercise",
  debug: "Debug",
  quiz: "Quiz",
  project: "Project",
};

interface LevelCardProps {
  level: Level;
  unlocked: boolean;
  prevSlug?: string;
}

export default function LevelCard({ level, unlocked, prevSlug }: LevelCardProps) {
  const [completed, setCompleted] = useState(false);
  const [prevCompleted, setPrevCompleted] = useState(!prevSlug);

  useEffect(() => {
    setCompleted(isLevelCompleted(level.slug));
    if (prevSlug) setPrevCompleted(isLevelCompleted(prevSlug));
  }, [level.slug, prevSlug]);

  const isUnlocked = unlocked && prevCompleted;

  const content = (
    <div
      className={`flex items-center gap-4 rounded-xl border p-4 transition ${
        isUnlocked
          ? "border-slate-700 bg-slate-900/50 hover:border-brand-500/50 hover:bg-slate-900"
          : "border-slate-800 bg-slate-900/30 opacity-60"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-slate-300">
        {level.index_in_day}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-medium text-white">{level.title}</h3>
          <span className="shrink-0 rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
            {TYPE_LABELS[level.level_type] ?? level.level_type}
          </span>
        </div>
        <p className="mt-0.5 truncate text-sm text-slate-400">{level.summary}</p>
      </div>
      {isUnlocked ? (
        completed ? (
          <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-400" />
        ) : (
          <Circle className="h-5 w-5 shrink-0 text-slate-600" />
        )
      ) : (
        <Lock className="h-5 w-5 shrink-0 text-slate-600" />
      )}
    </div>
  );

  if (!isUnlocked) return content;

  return (
    <Link href={`/levels/${level.slug}`} className="block">
      {content}
    </Link>
  );
}
