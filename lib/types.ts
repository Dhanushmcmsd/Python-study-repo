export type LevelType =
  | "concept"
  | "run"
  | "modify"
  | "exercise"
  | "debug"
  | "quiz"
  | "project";

export type ValidationType = "none" | "output" | "contains";

export interface CourseDay {
  day: number;
  week: number;
  dayInWeek: number;
  title: string;
  description: string;
  topics: string[];
  learningGoals: string[];
  estimatedMinutes: number;
  emoji: string;
  weekTitle: string;
}

export interface Level {
  id?: string;
  slug: string;
  title: string;
  phase: number;
  week?: number;
  day: number;
  index_in_day: number;
  level_type: LevelType;
  summary: string;
  lesson_content: string;
  starter_code: string;
  solution_code: string;
  expected_output?: string | null;
  validation_type: ValidationType;
  validation_pattern?: string | null;
  hints: string[];
}

export interface UserProgress {
  level_id: string;
  status: "not_started" | "in_progress" | "completed";
  submitted_code?: string;
  completed_at?: string;
}
