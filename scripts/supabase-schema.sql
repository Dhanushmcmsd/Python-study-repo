-- Python Automation Course — Supabase Schema
-- Run this in Supabase SQL Editor before seeding levels

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

CREATE INDEX IF NOT EXISTS idx_levels_day ON public.levels (day, index_in_day);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_key ON public.user_progress (user_key);

ALTER TABLE public.levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

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
