import { LEVELS, getLevelBySlug, getLevelsByDay, getAllDays, COURSE_DAYS } from "./courseContent";
import type { Level } from "./types";
import { isSupabaseConfigured, supabase } from "./supabaseClient";

export { getLevelBySlug, getLevelsByDay, getAllDays, COURSE_DAYS };

export async function getAllLevels(): Promise<Level[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from("levels")
        .select("*")
        .order("day")
        .order("index_in_day");

      if (!error && data && data.length > 0) {
        return data as Level[];
      }
    } catch {
      // fall through to local content
    }
  }
  return LEVELS;
}

export async function getLevel(slug: string): Promise<Level | undefined> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from("levels")
        .select("*")
        .eq("slug", slug)
        .single();

      if (!error && data) return data as Level;
    } catch {
      // fall through
    }
  }
  return getLevelBySlug(slug);
}

export async function syncProgressToSupabase(
  userKey: string,
  levelSlug: string,
  code: string
): Promise<void> {
  if (!isSupabaseConfigured) return;

  try {
    const { data: levelRow } = await supabase
      .from("levels")
      .select("id")
      .eq("slug", levelSlug)
      .single();

    if (!levelRow?.id) return;

    await supabase.from("user_progress").upsert(
      {
        user_key: userKey,
        level_id: levelRow.id,
        status: "completed",
        submitted_code: code,
        completed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_key,level_id" }
    );
  } catch {
    // Progress still saved locally
  }
}
