import Link from "next/link";
import { ChevronLeft, Clock, Target } from "lucide-react";
import { notFound } from "next/navigation";
import { getCourseDay } from "@/lib/course/days";
import { getLevelsByDay } from "@/lib/courseContent";
import LevelCard from "@/app/components/LevelCard";

interface DayPageProps {
  params: { day: string };
}

export default function DayPage({ params }: DayPageProps) {
  const dayNum = parseInt(params.day, 10);
  if (isNaN(dayNum)) notFound();

  const dayInfo = getCourseDay(dayNum);
  const dayLevels = getLevelsByDay(dayNum);

  if (!dayInfo || dayLevels.length === 0) notFound();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Link
          href="/levels"
          className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
          All days
        </Link>

        <div className="mb-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/50 p-6">
          <div className="flex items-start gap-4">
            <span className="text-4xl">{dayInfo.emoji}</span>
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-brand-400">
                <span>Day {dayNum}</span>
                <span>·</span>
                <span>Week {dayInfo.week}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {dayInfo.estimatedMinutes} min
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Target className="h-3.5 w-3.5" />
                  {dayLevels.length} levels
                </span>
              </div>
              <h1 className="mt-1 text-3xl font-bold text-white">{dayInfo.title}</h1>
              <p className="mt-2 text-slate-400">{dayInfo.description}</p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Today you will learn
                </p>
                <ul className="mt-2 space-y-1">
                  {dayInfo.learningGoals.map((goal) => (
                    <li key={goal} className="text-sm text-slate-300">✓ {goal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {dayLevels.map((level, index) => (
            <LevelCard
              key={level.slug}
              level={level}
              unlocked={true}
              prevSlug={index > 0 ? dayLevels[index - 1].slug : undefined}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
