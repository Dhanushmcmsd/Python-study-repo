"use client";

import type { UserProgress } from "./types";

const STORAGE_KEY = "python-course-progress";
const USER_KEY = "python-course-user-id";

export function getUserKey(): string {
  if (typeof window === "undefined") return "server";
  let key = localStorage.getItem(USER_KEY);
  if (!key) {
    key = crypto.randomUUID();
    localStorage.setItem(USER_KEY, key);
  }
  return key;
}

export function getLocalProgress(): Record<string, UserProgress> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveLocalProgress(levelSlug: string, progress: UserProgress): void {
  const all = getLocalProgress();
  all[levelSlug] = progress;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function markLevelComplete(levelSlug: string, code: string): void {
  saveLocalProgress(levelSlug, {
    level_id: levelSlug,
    status: "completed",
    submitted_code: code,
    completed_at: new Date().toISOString(),
  });
}

export function getCompletedCount(totalLevels: number): number {
  const progress = getLocalProgress();
  return Object.values(progress).filter((p) => p.status === "completed").length;
}

export function getDayProgress(day: number, levelSlugs: string[]): number {
  const progress = getLocalProgress();
  const completed = levelSlugs.filter((slug) => progress[slug]?.status === "completed").length;
  return Math.round((completed / levelSlugs.length) * 100);
}

export function isLevelCompleted(slug: string): boolean {
  return getLocalProgress()[slug]?.status === "completed";
}
