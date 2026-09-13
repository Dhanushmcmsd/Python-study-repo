"use client";

import { useState } from "react";
import { login, register, type StudentSession } from "@/lib/auth";

interface LoginScreenProps {
  onLogin: (session: StudentSession) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const session = mode === "login" ? await login(name) : await register(name);
      onLogin(session);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 scanlines">
      <div className="terminal-panel w-full max-w-md p-6">
        <div className="mb-6 text-center">
          <div className="mb-2 font-mono text-xs text-hack-dim">SYSTEM://PYTHON_AUTOMATION</div>
          <h1 className="font-mono text-2xl text-hack-green glow-text">ACCESS TERMINAL</h1>
        </div>

        <div className="mb-4 flex border border-hack-border">
          <button
            type="button"
            onClick={() => { setMode("login"); setError(""); }}
            className={`flex-1 py-2 font-mono text-xs ${mode === "login" ? "bg-hack-green/10 text-hack-green" : "text-hack-dim"}`}
          >
            LOGIN
          </button>
          <button
            type="button"
            onClick={() => { setMode("register"); setError(""); }}
            className={`flex-1 py-2 font-mono text-xs ${mode === "register" ? "bg-hack-green/10 text-hack-green" : "text-hack-dim"}`}
          >
            NEW ACCOUNT
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-mono text-xs text-hack-amber">OPERATOR ID</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. alex_dev"
              className="hack-input w-full"
              autoFocus
              maxLength={24}
            />
          </div>

          {error && (
            <div className="border border-red-500/50 bg-red-500/10 px-3 py-2 font-mono text-xs text-red-400">
              [ERR] {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="hack-btn w-full">
            {loading ? "PROCESSING..." : mode === "login" ? "> LOGIN" : "> CREATE ACCOUNT"}
          </button>
        </form>

        <p className="mt-4 text-center font-mono text-[10px] text-hack-dim">
          No password. Names are unique — pick one you&apos;ll remember.
        </p>
      </div>
    </div>
  );
}
