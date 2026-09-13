import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getLevel, getLevelsByDay } from "@/lib/levels";
import { getCourseDay } from "@/lib/course/days";
import InteractiveLesson from "@/app/components/InteractiveLesson";

interface LevelPageProps {
  params: { slug: string };
}

const TYPE_BADGE: Record<string, string> = {
  concept: "📖 Lesson",
  run: "▶ Run Code",
  modify: "✏ Modify",
  exercise: "💪 Exercise",
  debug: "🔧 Debug",
  quiz: "❓ Quiz",
  project: "🎯 Project",
};

export default async function LevelPage({ params }: LevelPageProps) {
  const level = await getLevel(params.slug);
  if (!level) notFound();

  const dayLevels = getLevelsByDay(level.day);
  const currentIndex = dayLevels.findIndex((l) => l.slug === level.slug);
  const prevLevel = currentIndex > 0 ? dayLevels[currentIndex - 1] : null;
  const nextLevel = currentIndex < dayLevels.length - 1 ? dayLevels[currentIndex + 1] : null;
  const dayInfo = getCourseDay(level.day);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/levels/day/${level.day}`}
            className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            Day {level.day} — {dayInfo?.title ?? "Levels"}
          </Link>
          <div className="flex items-center gap-2">
            {dayInfo && (
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Week {dayInfo.week} · ~{dayInfo.estimatedMinutes} min
              </span>
            )}
            <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-medium text-brand-300">
              Level {level.index_in_day} of {dayLevels.length}
            </span>
          </div>
        </div>

        <div className="mb-2 flex items-center gap-3">
          <span className="text-sm">{TYPE_BADGE[level.level_type] ?? level.level_type}</span>
        </div>
        <h1 className="text-3xl font-bold text-white">{level.title}</h1>
        <p className="mt-2 text-slate-400">{level.summary}</p>

        <div className="mt-8">
          <InteractiveLesson level={level} />
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-slate-800 pt-6">
          {prevLevel ? (
            <Link
              href={`/levels/${prevLevel.slug}`}
              className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              {prevLevel.title}
            </Link>
          ) : (
            <div />
          )}
          {nextLevel ? (
            <Link
              href={`/levels/${nextLevel.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:text-brand-300"
            >
              Next: {nextLevel.title}
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              href={`/levels/day/${level.day + 1}`}
              className="text-sm font-medium text-brand-400 hover:text-brand-300"
            >
              Day complete — continue tomorrow →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
