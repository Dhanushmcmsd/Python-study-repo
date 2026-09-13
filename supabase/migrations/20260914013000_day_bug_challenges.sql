-- Unique per-student daily BUG FIX boss encounters

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

CREATE INDEX IF NOT EXISTS idx_day_bug_challenges_user ON public.day_bug_challenges (user_key, day);

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
