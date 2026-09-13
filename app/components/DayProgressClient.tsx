"use client";

import { useEffect, useState } from "react";
import ProgressRing from "./ProgressRing";
import { getDayProgress } from "@/lib/progress";

interface DayProgressClientProps {
  day: number;
  levelSlugs: string[];
}

export default function DayProgressClient({ day, levelSlugs }: DayProgressClientProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(getDayProgress(day, levelSlugs));
  }, [day, levelSlugs]);

  return (
    <div className="relative flex items-center justify-center">
      <ProgressRing percent={percent} size={52} />
      <span className="absolute text-xs font-semibold text-white">{percent}%</span>
    </div>
  );
}
