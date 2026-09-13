"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Editor, { type OnMount } from "@monaco-editor/react";
import type { editor as MonacoEditor } from "monaco-editor";
import ReactMarkdown from "react-markdown";
import { Play, CheckCircle2, Lightbulb, Loader2, RotateCcw, Sparkles } from "lucide-react";
import type { Level } from "@/lib/types";
import { buildWalkthrough, getLineNote } from "@/lib/codeWalkthrough";
import { validateSubmission } from "@/lib/validateOutput";
import { markLevelComplete, getUserKey } from "@/lib/progress";
import { syncProgressToSupabase } from "@/lib/levels";

declare global {
  interface Window {
    loadPyodide?: (config?: { indexURL?: string }) => Promise<PyodideInterface>;
  }
}

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
  runPython: (code: string) => unknown;
}

interface InteractiveLessonProps {
  level: Level;
  onComplete?: () => void;
}

export default function InteractiveLesson({ level, onComplete }: InteractiveLessonProps) {
  const [code, setCode] = useState(level.starter_code);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "running" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(0);
  const [activeLine, setActiveLine] = useState(1);
  const [pyodideReady, setPyodideReady] = useState(false);
  const pyodideRef = useRef<PyodideInterface | null>(null);
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null);
  const decorationRef = useRef<string[]>([]);

  const walkthrough = useMemo(() => buildWalkthrough(code, level), [code, level]);
  const currentNote = getLineNote(walkthrough, activeLine);

  useEffect(() => {
    setCode(level.starter_code);
    setOutput("");
    setFeedback("");
    setShowHint(0);
    setStatus("idle");
    setActiveLine(1);
  }, [level.slug, level.starter_code]);

  useEffect(() => {
    let cancelled = false;

    async function initPyodide() {
      setStatus("loading");
      try {
        if (!window.loadPyodide) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Failed to load Pyodide"));
            document.head.appendChild(script);
          });
        }

        const pyodide = await window.loadPyodide!({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
        });

        if (!cancelled) {
          pyodideRef.current = pyodide;
          setPyodideReady(true);
          setStatus("idle");
        }
      } catch (err) {
        if (!cancelled) {
          setStatus("error");
          setOutput(`Failed to load Python runtime: ${err}`);
        }
      }
    }

    initPyodide();
    return () => {
      cancelled = true;
    };
  }, []);

  const highlightLine = useCallback((lineNumber: number) => {
    const ed = editorRef.current;
    if (!ed) return;
    decorationRef.current = ed.deltaDecorations(decorationRef.current, [
      {
        range: {
          startLineNumber: lineNumber,
          startColumn: 1,
          endLineNumber: lineNumber,
          endColumn: 1,
        },
        options: {
          isWholeLine: true,
          className: "active-line-highlight",
          glyphMarginClassName: "active-line-glyph",
        },
      },
    ]);
  }, []);

  const handleEditorMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.onDidChangeCursorPosition((e) => {
      setActiveLine(e.position.lineNumber);
      highlightLine(e.position.lineNumber);
    });
    highlightLine(1);
  };

  const runCode = useCallback(async () => {
    const pyodide = pyodideRef.current;
    if (!pyodideReady || !pyodide) return;

    setStatus("running");
    setFeedback("");
    setOutput("");

    try {
      await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = sys.stdout
      `);

      await pyodide.runPythonAsync(code);
      const result = pyodide.runPython("sys.stdout.getvalue()") as string;
      setOutput(result || "(no output)");

      const validation = validateSubmission(level, result, code);
      setFeedback(validation.message);

      if (validation.passed) {
        setStatus("success");
        markLevelComplete(level.slug, code);
        await syncProgressToSupabase(getUserKey(), level.slug, code);
        onComplete?.();
      } else {
        setStatus("idle");
      }
    } catch (err) {
      setStatus("error");
      setOutput(String(err));
      setFeedback("Fix the error above and try again.");
    }
  }, [code, level, onComplete, pyodideReady]);

  const resetCode = () => {
    setCode(level.starter_code);
    setOutput("");
    setFeedback("");
    setStatus("idle");
    setActiveLine(1);
    highlightLine(1);
  };

  const hints = level.hints ?? [];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Lesson panel */}
        <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900 to-slate-900/60 p-5">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
            <Sparkles className="h-3.5 w-3.5" />
            Lesson
          </div>
          <article className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-code:text-brand-300 prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-700 prose-li:text-slate-300">
            <ReactMarkdown>{level.lesson_content}</ReactMarkdown>
          </article>
        </div>

        {/* Code + live explanation */}
        <div className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-700 px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Python Editor
              </span>
              <div className="flex gap-2">
                <button
                  onClick={resetCode}
                  className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-slate-400 transition hover:bg-slate-800 hover:text-white"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset
                </button>
                <button
                  onClick={runCode}
                  disabled={!pyodideReady || status === "running" || status === "loading"}
                  className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-bold text-slate-900 transition hover:bg-brand-400 disabled:opacity-50"
                >
                  {status === "running" || status === "loading" ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Play className="h-3.5 w-3.5" />
                  )}
                  {status === "loading" ? "Loading..." : "Run code"}
                </button>
              </div>
            </div>
            <Editor
              height="280px"
              defaultLanguage="python"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value ?? "")}
              onMount={handleEditorMount}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                padding: { top: 12 },
                glyphMargin: true,
              }}
            />
          </div>

          {/* Live line explanation — linked to cursor */}
          <div className="rounded-2xl border border-brand-500/30 bg-brand-500/5 p-4">
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
              <Sparkles className="h-3.5 w-3.5" />
              Line {activeLine} — Why this code?
            </div>
            {currentNote ? (
              <>
                <p className="font-medium text-white">{currentNote.text}</p>
                <p className="mt-1 text-sm text-slate-300">{currentNote.why}</p>
              </>
            ) : (
              <p className="text-sm text-slate-400">Click a line in the editor to see what it does.</p>
            )}
          </div>
        </div>
      </div>

      {/* Output + feedback */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Output</h3>
          <pre className="min-h-[80px] whitespace-pre-wrap font-mono text-sm text-emerald-300">
            {output || (status === "loading" ? "Loading Python environment..." : "Click Run code to see output")}
          </pre>
        </div>

        <div className="space-y-3">
          {feedback && (
            <div
              className={`rounded-2xl border p-4 ${
                status === "success"
                  ? "border-brand-500/50 bg-brand-500/10 text-brand-100"
                  : "border-slate-700 bg-slate-900 text-slate-300"
              }`}
            >
              <div className="flex items-start gap-2">
                {status === "success" && (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                )}
                <p className="text-sm whitespace-pre-wrap">{feedback}</p>
              </div>
            </div>
          )}

          {hints.length > 0 && (
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
              <button
                onClick={() => setShowHint((h) => Math.min(h + 1, hints.length))}
                className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300"
              >
                <Lightbulb className="h-4 w-4" />
                {showHint === 0 ? "Need a hint?" : `Hint ${showHint}/${hints.length}`}
              </button>
              {showHint > 0 && (
                <ul className="mt-3 space-y-2">
                  {hints.slice(0, showHint).map((hint, i) => (
                    <li key={i} className="text-sm text-slate-400">• {hint}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
