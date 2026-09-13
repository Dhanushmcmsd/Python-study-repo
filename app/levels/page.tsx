"use client";

import Link from "next/link";
import { ArrowRight, Clock, Target } from "lucide-react";
import { COURSE_DAYS, getWeekDays } from "@/lib/course/days";
import { getLevelsByDay } from "@/lib/courseContent";
import DayProgressClient from "../components/DayProgressClient";

const WEEK_LABELS = [
  "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6",
  "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12",
];

export default function LevelsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white">
            12-Week Python Journey
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            60 learning days · 2 levels per day · ~1 hour daily.
            Complete each day to unlock the next. Your progress saves automatically.
          </p>
        </div>

        {WEEK_LABELS.map((weekLabel, weekIndex) => {
          const week = weekIndex + 1;
          const weekDays = getWeekDays(week);
          const theme = weekDays[0];

          return (
            <section key={week} className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{theme?.emoji}</span>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    {weekLabel} — {theme?.weekTitle}
                  </h2>
                  <p className="text-sm text-slate-500">Days {(week - 1) * 5 + 1}–{week * 5}</p>
                </div>
              </div>

              <div className="space-y-3">
                {weekDays.map((dayInfo) => {
                  const dayLevels = getLevelsByDay(dayInfo.day);
                  const slugs = dayLevels.map((l) => l.slug);
                  const levelTitles = dayLevels.map((l) => l.title);

                  return (
                    <Link
                      key={dayInfo.day}
                      href={`/levels/day/${dayInfo.day}`}
                      className="group flex gap-5 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/80 to-slate-900/40 p-5 transition hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/5"
                    >
                      <DayProgressClient day={dayInfo.day} levelSlugs={slugs} />

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-brand-500/15 px-2.5 py-0.5 text-xs font-semibold text-brand-400">
                            Day {dayInfo.day}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="h-3 w-3" />
                            {dayInfo.estimatedMinutes} min
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Target className="h-3 w-3" />
                            {dayLevels.length} levels
                          </span>
                        </div>

                        <h3 className="mt-1.5 text-lg font-semibold text-white group-hover:text-brand-300">
                          {dayInfo.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                          {dayInfo.description}
                        </p>

                        <ul className="mt-3 flex flex-wrap gap-2">
                          {levelTitles.map((title) => (
                            <li
                              key={title}
                              className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300"
                            >
                              {title}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-slate-600 transition group-hover:translate-x-1 group-hover:text-brand-400" />
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
