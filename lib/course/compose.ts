import type { Level } from "../types";
import { WEEK4_LEVELS } from "./week4";
import { WEEK5_LEVELS } from "./week5";
import { WEEK6_LEVELS } from "./week6";
import { WEEK7_LEVELS } from "./week7";
import { WEEK8_LEVELS } from "./week8";
import { WEEK9_LEVELS } from "./week9";
import { WEEK10_LEVELS } from "./week10";
import { WEEK11_LEVELS } from "./week11";
import { WEEK12_LEVELS } from "./week12";
import { RAW_WEEK1_3_LEVELS } from "./week1-3";

/** Raw levels use `day` as week number (1–12) with 10 levels each. */
const RAW_LEVELS: Level[] = [
  ...RAW_WEEK1_3_LEVELS,
  ...WEEK4_LEVELS,
  ...WEEK5_LEVELS,
  ...WEEK6_LEVELS,
  ...WEEK7_LEVELS,
  ...WEEK8_LEVELS,
  ...WEEK9_LEVELS,
  ...WEEK10_LEVELS,
  ...WEEK11_LEVELS,
  ...WEEK12_LEVELS,
];

/**
 * Remap 12 weeks × 10 levels into 60 learning days × 2 levels.
 * Week 1 levels 1–2 → Day 1, levels 3–4 → Day 2, etc.
 */
export function composeLevels(): Level[] {
  return RAW_LEVELS.map((level) => {
    const week = level.day;
    const sessionIndex = Math.floor((level.index_in_day - 1) / 2);
    const globalDay = (week - 1) * 5 + sessionIndex + 1;
    const indexInDay = ((level.index_in_day - 1) % 2) + 1;

    return {
      ...level,
      week,
      day: globalDay,
      index_in_day: indexInDay,
    };
  });
}
