import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Trophy, Zap, Calendar } from "lucide-react";
import { COURSE_DAYS, LEVELS } from "@/lib/courseContent";

export default function Home() {
  const totalLevels = LEVELS.length;
  const totalWeeks = 12;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/10 via-slate-950 to-slate-950" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-60 w-60 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-400">
              <Zap className="h-4 w-4" />
              12-week beginner Python course — no experience needed
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn Python{" "}
              <span className="gradient-text">One Day at a Time</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 sm:text-xl">
              60 days of interactive lessons with live coding, line-by-line explanations,
              exercises, and projects. ~1 hour per day over 12 weeks.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/levels"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/20"
              >
                Start Day 1
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/levels/day/1"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-base font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
              >
                Jump to Today&apos;s Lesson
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-800 px-4 py-8 sm:grid-cols-4">
          {[
            { value: COURSE_DAYS.length, label: "Learning Days" },
            { value: totalWeeks, label: "Weeks" },
            { value: totalLevels, label: "Code Challenges" },
            { value: "~1hr", label: "Per Day" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-white">How It Works</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-slate-400">
          Read the lesson, code live, and get instant explanations as you type.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Learn Why", desc: "Every line explained — not just what to type, but why it works." },
            { icon: Code2, title: "Code Live", desc: "Real Python in your browser. Run code instantly with Pyodide." },
            { icon: Trophy, title: "Daily Wins", desc: "Exercises, debug challenges, quizzes, and weekly projects." },
            { icon: Calendar, title: "Track Progress", desc: "2 levels per day. Completion saves automatically." },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-brand-500/30"
            >
              <feature.icon className="h-8 w-8 text-brand-400" />
              <h3 className="mt-4 font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold text-white">12-Week Roadmap</h2>
          <p className="mt-2 text-slate-400">5 study days per week · 2 levels per day · ~1 hour daily</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COURSE_DAYS.filter((d) => d.dayInWeek === 1).map((day) => (
              <Link
                key={day.week}
                href={`/levels/day/${day.day}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-brand-500/40"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{day.emoji}</span>
                  <span className="text-sm font-medium text-brand-400">Week {day.week}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-brand-300">
                  {day.weekTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">{day.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-slate-500">
                  Days {day.day}–{day.day + 4}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-brand-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
