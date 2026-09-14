"use client";

import { useEffect, useState } from "react";
import { LogOut, Terminal } from "lucide-react";
import { COURSE_DAYS } from "@/lib/course/days";
import { LEVELS, getLevelsByDay } from "@/lib/courseContent";
import { getSession, clearSession, type StudentSession } from "@/lib/auth";
import { getDayProgress, isLevelCompleted, areDayLevelsComplete, isDayBugFixed, isDayPracticalComplete } from "@/lib/progress";
import LoginScreen from "./LoginScreen";
import LessonWorkspace from "./LessonWorkspace";

export default function CourseApp() {
  const [session, setSession] = useState<StudentSession | null>(null);
  const [ready, setReady] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  useEffect(() => {
    setSession(getSession());
    setReady(true);
  }, []);

  if (!ready) return null;
  if (!session) return <LoginScreen onLogin={setSession} />;

  const selectedLevel = selectedSlug ? LEVELS.find((l) => l.slug === selectedSlug) : null;
  const dayLevels = selectedDay ? getLevelsByDay(selectedDay) : [];

  function openDay(day: number) {
    setSelectedDay(day);
    const levels = getLevelsByDay(day);
    setSelectedSlug(levels[0]?.slug ?? null);
  }

  function backToRoadmap() {
    setSelectedDay(null);
    setSelectedSlug(null);
  }

  function handleLogout() {
    clearSession();
    setSession(null);
    backToRoadmap();
  }

  if (selectedDay && selectedLevel) {
    return (
      <div className="flex h-screen flex-col bg-hack-bg">
        <header className="flex items-center justify-between border-b border-hack-border px-4 py-2">
          <div className="flex items-center gap-2 font-mono text-sm text-hack-green">
            <Terminal className="h-4 w-4" />
            <span>PY://{session.displayName}</span>
          </div>
          <button onClick={handleLogout} className="hack-btn-ghost text-xs">
            <LogOut className="mr-1 inline h-3 w-3" />LOGOUT
          </button>
        </header>
        <div className="flex-1 overflow-hidden">
          <LessonWorkspace
            level={selectedLevel}
            dayLevels={dayLevels}
            onBack={backToRoadmap}
            onSelectLevel={setSelectedSlug}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hack-bg scanlines">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-hack-border bg-hack-bg/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-hack-green" />
          <span className="font-mono text-sm text-hack-green">PYTHON_AUTOMATION // 12-WEEK ROADMAP</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-hack-dim">OP: {session.displayName}</span>
          <button onClick={handleLogout} className="hack-btn-ghost text-xs">
            <LogOut className="mr-1 inline h-3 w-3" />LOGOUT
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="font-mono text-3xl text-hack-green glow-text">TRAINING ROADMAP</h1>
          <p className="mt-2 font-mono text-xs text-hack-dim">
            12 WEEKS · 60 DAYS · 120 MISSIONS · ALL ACCESS OPEN
          </p>
        </div>

        <div className="space-y-2">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((week) => {
            const weekDays = COURSE_DAYS.filter((d) => d.week === week);
            const isOpen = expandedWeek === week;

            return (
              <div key={week} className="terminal-panel">
                <button
                  onClick={() => setExpandedWeek(isOpen ? null : week)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                >
                  <div>
                    <span className="font-mono text-xs text-hack-amber">WEEK {String(week).padStart(2, "0")}</span>
                    <h2 className="font-mono text-sm text-hack-green">
                      {weekDays[0]?.weekTitle ?? `Week ${week}`}
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-hack-dim">{isOpen ? "[-]" : "[+]"}</span>
                </button>

                {isOpen && (
                  <div className="border-t border-hack-border">
                    {weekDays.map((dayInfo) => {
                      const levels = getLevelsByDay(dayInfo.day);
                      const slugs = levels.map((l) => l.slug);
                      const progress = getDayProgress(dayInfo.day, slugs);

                      return (
                        <div key={dayInfo.day} className="border-b border-hack-border/50 last:border-0">
                          <button
                            onClick={() => openDay(dayInfo.day)}
                            className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-hack-green/5"
                          >
                            <div className="mt-0.5 font-mono text-xs text-hack-amber w-16 shrink-0">
                              D{String(dayInfo.day).padStart(2, "0")}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-mono text-sm text-hack-green">{dayInfo.title}</div>
                              <div className="mt-1 font-mono text-[10px] text-hack-dim line-clamp-1">
                                {dayInfo.description}
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {levels.map((l) => (
                                  <span
                                    key={l.slug}
                                    className={`px-1.5 py-0.5 font-mono text-[10px] border ${
                                      isLevelCompleted(l.slug)
                                        ? "border-hack-green/50 text-hack-green"
                                        : "border-hack-border text-hack-dim"
                                    }`}
                                  >
                                    {isLevelCompleted(l.slug) ? "[done] " : ""}{l.title}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="shrink-0 text-right">
                              {areDayLevelsComplete(slugs) && !isDayPracticalComplete(dayInfo.day) && (
                                <div className="mb-1 font-mono text-[10px] text-hack-amber">BUILD IT</div>
                              )}
                              {areDayLevelsComplete(slugs) && isDayPracticalComplete(dayInfo.day) && !isDayBugFixed(dayInfo.day) && (
                                <div className="mb-1 font-mono text-[10px] text-red-400">BUG FIX</div>
                              )}
                              <div className="font-mono text-xs text-hack-dim">{progress}%</div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
