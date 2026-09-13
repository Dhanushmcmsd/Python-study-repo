"use client";

import type { UserProgress } from "./types";
import { getSession } from "./auth";
import { dayBugSlug, type BugChallenge } from "./bugChallenge";

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
  const tracked = [...levelSlugs, dayBugSlug(day)];
  const completed = tracked.filter((slug) => progress[slug]?.status === "completed").length;
  return Math.round((completed / tracked.length) * 100);
}

export function isLevelCompleted(slug: string): boolean {
  return getLocalProgress()[slug]?.status === "completed";
}

export function areDayLevelsComplete(levelSlugs: string[]): boolean {
  return levelSlugs.length > 0 && levelSlugs.every((slug) => isLevelCompleted(slug));
}

export function isDayBugFixed(day: number): boolean {
  return isLevelCompleted(dayBugSlug(day));
}

function bugStoreKey(): string {
  return `${progressKey()}-day-bugs`;
}

export function getStoredDayBug(day: number): BugChallenge | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(bugStoreKey());
    const all = raw ? (JSON.parse(raw) as Record<string, BugChallenge>) : {};
    return all[String(day)] ?? null;
  } catch {
    return null;
  }
}

export function saveStoredDayBug(challenge: BugChallenge): void {
  if (typeof window === "undefined") return;
  const raw = localStorage.getItem(bugStoreKey());
  const all = raw ? (JSON.parse(raw) as Record<string, BugChallenge>) : {};
  all[String(challenge.day)] = challenge;
  localStorage.setItem(bugStoreKey(), JSON.stringify(all));
}

export function markDayBugComplete(day: number, code: string): void {
  markLevelComplete(dayBugSlug(day), code);
}
