import type { Level } from "./types";
import { composeLevels } from "./course/compose";
import { COURSE_DAYS } from "./course/days";

export { COURSE_DAYS };
export { getCourseDay, getWeekDays } from "./course/days";

export const LEVELS: Level[] = composeLevels();

export function getLevelBySlug(slug: string): Level | undefined {
  return LEVELS.find((l) => l.slug === slug);
}

export function getLevelsByDay(day: number): Level[] {
  return LEVELS.filter((l) => l.day === day).sort((a, b) => a.index_in_day - b.index_in_day);
}

export function getLevelsByWeek(week: number): Level[] {
  return LEVELS.filter((l) => l.week === week).sort(
    (a, b) => a.day - b.day || a.index_in_day - b.index_in_day
  );
}

export function getAllDays(): number[] {
  return [...new Set(LEVELS.map((l) => l.day))].sort((a, b) => a - b);
}
