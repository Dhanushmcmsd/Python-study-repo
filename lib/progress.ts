"use client";

import type { UserProgress } from "./types";
import { getSession } from "./auth";

function progressKey(): string {
  const session = getSession();
  return session ? `python-course-progress-${session.id}` : "python-course-progress-guest";
}

export function getUserKey(): string {
  const session = getSession();
  return session?.id ?? "guest";
}

export function getLocalProgress(): Record<string, UserProgress> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(progressKey());
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveLocalProgress(levelSlug: string, progress: UserProgress): void {
  const all = getLocalProgress();
  all[levelSlug] = progress;
  localStorage.setItem(progressKey(), JSON.stringify(all));
}

export function markLevelComplete(levelSlug: string, code: string): void {
  saveLocalProgress(levelSlug, {
    level_id: levelSlug,
    status: "completed",
    submitted_code: code,
    completed_at: new Date().toISOString(),
  });
}

export function getDayProgress(day: number, levelSlugs: string[]): number {
  const progress = getLocalProgress();
  const completed = levelSlugs.filter((slug) => progress[slug]?.status === "completed").length;
  return Math.round((completed / levelSlugs.length) * 100);
}

export function isLevelCompleted(slug: string): boolean {
  return getLocalProgress()[slug]?.status === "completed";
}
