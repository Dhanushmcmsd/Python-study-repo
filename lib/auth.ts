"use client";

import { supabase, isSupabaseConfigured } from "./supabaseClient";

const SESSION_KEY = "py-course-student";

export interface StudentSession {
  id: string;
  displayName: string;
}

export function getSession(): StudentSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveSession(session: StudentSession): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY);
}

function validateName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) throw new Error("Enter a name to continue.");
  if (trimmed.length < 2) throw new Error("Name must be at least 2 characters.");
  if (trimmed.length > 24) throw new Error("Name must be 24 characters or less.");
  if (!/^[a-zA-Z0-9_-]+$/.test(trimmed))
    throw new Error("Use only letters, numbers, underscore, or hyphen.");
  return trimmed;
}

export async function login(displayName: string): Promise<StudentSession> {
  const name = validateName(displayName);

  if (!isSupabaseConfigured) {
    const session = { id: name.toLowerCase(), displayName: name };
    saveSession(session);
    return session;
  }

  const { data: existing, error } = await supabase
    .from("students")
    .select("id, display_name")
    .eq("display_name", name)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!existing) throw new Error(`"${name}" not found. Create a new account instead.`);

  const session = { id: existing.id, displayName: existing.display_name };
  saveSession(session);
  return session;
}

export async function register(displayName: string): Promise<StudentSession> {
  const name = validateName(displayName);

  if (!isSupabaseConfigured) {
    const session = { id: name.toLowerCase(), displayName: name };
    saveSession(session);
    return session;
  }

  const { data: existing } = await supabase
    .from("students")
    .select("id")
    .eq("display_name", name)
    .maybeSingle();

  if (existing) throw new Error(`"${name}" is already taken. Choose a different name.`);

  const { data: created, error } = await supabase
    .from("students")
    .insert({ display_name: name })
    .select("id, display_name")
    .single();

  if (error) {
    if (error.code === "23505") throw new Error(`"${name}" is already taken. Choose a different name.`);
    throw new Error(error.message);
  }

  const session = { id: created.id, displayName: created.display_name };
  saveSession(session);
  return session;
}
