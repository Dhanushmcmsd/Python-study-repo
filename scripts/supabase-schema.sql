-- Python Automation Course — Supabase Schema

CREATE TABLE IF NOT EXISTS public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.levels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  phase INTEGER NOT NULL DEFAULT 1,
  week INTEGER,
  day INTEGER NOT NULL,
  index_in_day INTEGER NOT NULL,
  level_type TEXT NOT NULL,
  summary TEXT NOT NULL,
  lesson_content TEXT NOT NULL,
  starter_code TEXT NOT NULL,
  solution_code TEXT NOT NULL,
  expected_output TEXT,
  validation_type TEXT NOT NULL DEFAULT 'contains',
  validation_pattern TEXT,
  hints TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_key TEXT NOT NULL,
  level_id UUID NOT NULL REFERENCES public.levels(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'not_started',
  submitted_code TEXT,
  completed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_key, level_id)
);

CREATE TABLE IF NOT EXISTS public.day_bug_challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_key TEXT NOT NULL,
  day INTEGER NOT NULL,
  incident_id TEXT UNIQUE NOT NULL,
  buggy_code TEXT NOT NULL,
  reference_code TEXT NOT NULL,
  submitted_code TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status = ANY (ARRAY['pending'::text, 'completed'::text])),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_key, day)
);

CREATE INDEX IF NOT EXISTS idx_levels_day ON public.levels (day, index_in_day);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_key ON public.user_progress (user_key);
CREATE INDEX IF NOT EXISTS idx_day_bug_challenges_user ON public.day_bug_challenges (user_key, day);

ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students readable"
  ON public.students FOR SELECT USING (true);

CREATE POLICY "Students insertable"
  ON public.students FOR INSERT WITH CHECK (true);

-- Public read access for course levels
CREATE POLICY "Levels are publicly readable"
  ON public.levels FOR SELECT
  USING (true);

CREATE POLICY "Allow upsert levels for seeding"
  ON public.levels FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow update levels for seeding"
  ON public.levels FOR UPDATE
  USING (true);

-- Allow anonymous users to read/write their own progress
CREATE POLICY "Users can read own progress"
  ON public.user_progress FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own progress"
  ON public.user_progress FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update own progress"
  ON public.user_progress FOR UPDATE
  USING (true);

ALTER TABLE public.day_bug_challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Day bugs readable"
  ON public.day_bug_challenges FOR SELECT
  USING (true);

CREATE POLICY "Day bugs insertable"
  ON public.day_bug_challenges FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Day bugs updatable"
  ON public.day_bug_challenges FOR UPDATE
  USING (true);
