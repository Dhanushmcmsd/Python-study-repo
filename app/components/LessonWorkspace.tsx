"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Editor, { type OnMount } from "@monaco-editor/react";
import type { editor as MonacoEditor } from "monaco-editor";
import ReactMarkdown from "react-markdown";
import { Play, Loader2, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import type { Level } from "@/lib/types";
import { buildWalkthrough, getLineNote } from "@/lib/codeWalkthrough";
import { breakdownCode } from "@/lib/tokenExplainer";
import { validateSubmission } from "@/lib/validateOutput";
import {
  markLevelComplete,
  getUserKey,
  areDayLevelsComplete,
  isDayBugFixed,
  getStoredDayBug,
  saveStoredDayBug,
  markDayBugComplete,
} from "@/lib/progress";
import {
  syncProgressToSupabase,
  loadDayBugFromSupabase,
  upsertDayBugToSupabase,
  completeDayBugInSupabase,
} from "@/lib/levels";
import { generateDayBugChallenge, type BugChallenge } from "@/lib/bugChallenge";
import CodeBreakdownModal from "./CodeBreakdownModal";
import BugFixModal from "./BugFixModal";

declare global {
  interface Window {
    loadPyodide?: (config?: { indexURL?: string }) => Promise<PyodideInterface>;
  }
}

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
  runPython: (code: string) => unknown;
}

interface LessonWorkspaceProps {
  level: Level;
  dayLevels: Level[];
  onBack: () => void;
  onSelectLevel: (slug: string) => void;
}

export default function LessonWorkspace({
  level,
  dayLevels,
  onBack,
  onSelectLevel,
}: LessonWorkspaceProps) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "running" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [activeLine, setActiveLine] = useState(1);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showBugFix, setShowBugFix] = useState(false);
  const [bugChallenge, setBugChallenge] = useState<BugChallenge | null>(null);
  const [bugBusy, setBugBusy] = useState(false);
  const [dayGateMessage, setDayGateMessage] = useState("");
  const [pyodideReady, setPyodideReady] = useState(false);
  const pyodideRef = useRef<PyodideInterface | null>(null);
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null);
  const decorationRef = useRef<string[]>([]);

  const walkthrough = useMemo(() => buildWalkthrough(code || level.solution_code, level), [code, level]);
  const currentNote = getLineNote(walkthrough, activeLine);
  const breakdown = useMemo(() => breakdownCode(code), [code]);

  const currentIndex = dayLevels.findIndex((l) => l.slug === level.slug);
  const prevLevel = currentIndex > 0 ? dayLevels[currentIndex - 1] : null;
  const nextLevel = currentIndex < dayLevels.length - 1 ? dayLevels[currentIndex + 1] : null;

  useEffect(() => {
    setCode("");
    setOutput("");
    setFeedback("");
    setStatus("idle");
    setActiveLine(1);
    setShowBreakdown(false);
    setShowBugFix(false);
    setDayGateMessage("");
  }, [level.slug]);

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
          setOutput(`Runtime error: ${err}`);
        }
      }
    }
    initPyodide();
    return () => { cancelled = true; };
  }, []);

  const highlightLine = useCallback((lineNumber: number) => {
    const ed = editorRef.current;
    if (!ed) return;
    decorationRef.current = ed.deltaDecorations(decorationRef.current, [
      {
        range: { startLineNumber: lineNumber, startColumn: 1, endLineNumber: lineNumber, endColumn: 1 },
        options: { isWholeLine: true, className: "active-line-highlight" },
      },
    ]);
  }, []);

  const handleEditorMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.onDidChangeCursorPosition((e) => {
      setActiveLine(e.position.lineNumber);
      highlightLine(e.position.lineNumber);
    });
  };

  const runCode = useCallback(async () => {
    const pyodide = pyodideRef.current;
    if (!pyodideReady || !pyodide) return;
    if (!code.trim()) {
      setFeedback("Type the code from the lesson box first.");
      return;
    }

    setStatus("running");
    setFeedback("");
    setOutput("");

    try {
      await pyodide.runPythonAsync(`import sys\nfrom io import StringIO\nsys.stdout = StringIO()\nsys.stderr = sys.stdout`);
      await pyodide.runPythonAsync(code);
      const result = pyodide.runPython("sys.stdout.getvalue()") as string;
      setOutput(result || "(no output)");

      const validation = validateSubmission(level, result, code);
      setFeedback(validation.message);

      if (validation.passed) {
        setStatus("success");
        markLevelComplete(level.slug, code);
        setShowBreakdown(true);
        void syncProgressToSupabase(getUserKey(), level.slug, code);
      } else {
        setStatus("idle");
      }
    } catch (err) {
      setStatus("error");
      setOutput(String(err));
      setFeedback("Fix the error and try again.");
    }
  }, [code, level, pyodideReady]);

  const executePython = useCallback(async (source: string): Promise<{ output: string; error?: string }> => {
    const pyodide = pyodideRef.current;
    if (!pyodideReady || !pyodide) return { output: "", error: "Python runtime is not ready." };
    try {
      await pyodide.runPythonAsync(`import sys\nfrom io import StringIO\nsys.stdout = StringIO()\nsys.stderr = sys.stdout`);
      await pyodide.runPythonAsync(source);
      const result = (pyodide.runPython("sys.stdout.getvalue()") as string) || "";
      return { output: result };
    } catch (err) {
      return { output: "", error: String(err) };
    }
  }, [pyodideReady]);

  const openDayBoss = useCallback(() => {
    const slugs = dayLevels.map((l) => l.slug);
    if (!areDayLevelsComplete(slugs)) {
      setDayGateMessage("Finish every mission today before the BUG FIX encounter.");
      return;
    }
    if (isDayBugFixed(level.day)) {
      onBack();
      return;
    }

    const userKey = getUserKey();
    let challenge = getStoredDayBug(level.day);
    if (!challenge) {
      challenge = generateDayBugChallenge(userKey, level.day, dayLevels);
      saveStoredDayBug(challenge);
    }
    setBugChallenge(challenge);
    setShowBugFix(true);

    void (async () => {
      const remote = await loadDayBugFromSupabase(userKey, level.day);
      if (remote?.status === "completed") {
        markDayBugComplete(level.day, "");
        setShowBugFix(false);
        onBack();
        return;
      }
      if (remote) {
        const synced = {
          day: level.day,
          incidentId: remote.incident_id,
          buggyCode: remote.buggy_code,
          referenceCode: remote.reference_code,
        };
        saveStoredDayBug(synced);
        setBugChallenge(synced);
      } else if (challenge) {
        await upsertDayBugToSupabase(userKey, challenge);
      }
    })();
  }, [dayLevels, level.day, onBack]);

  const finishDayBoss = useCallback(async (patchedCode: string) => {
    const userKey = getUserKey();
    markDayBugComplete(level.day, patchedCode);
    setShowBugFix(false);
    void completeDayBugInSupabase(userKey, level.day, patchedCode);
    onBack();
  }, [level.day, onBack]);

  return (
    <div className="flex h-full flex-col">
      {showBreakdown && (
        <CodeBreakdownModal breakdown={breakdown} onClose={() => setShowBreakdown(false)} />
      )}
      {showBugFix && bugChallenge && (
        <BugFixModal
          challenge={bugChallenge}
          executing={bugBusy}
          onExecute={async (src) => {
            setBugBusy(true);
            try {
              return await executePython(src);
            } finally {
              setBugBusy(false);
            }
          }}
          onPatched={finishDayBoss}
          onClose={() => setShowBugFix(false)}
        />
      )}

      <div className="flex items-center justify-between border-b border-hack-border px-4 py-2">
        <button onClick={onBack} className="font-mono text-xs text-hack-dim hover:text-hack-green">
          &lt; BACK TO ROADMAP
        </button>
        <span className="font-mono text-xs text-hack-amber">
          DAY {level.day} // LEVEL {level.index_in_day}/{dayLevels.length}
        </span>
      </div>

      <div className="grid flex-1 gap-0 overflow-hidden lg:grid-cols-2">
        {/* LEFT: all explanations */}
        <div className="overflow-y-auto border-r border-hack-border p-4">
          <h2 className="mb-1 font-mono text-lg text-hack-green">{level.title}</h2>
          <p className="mb-4 font-mono text-xs text-hack-dim">{level.summary}</p>

          <article className="prose-hack mb-6">
            <ReactMarkdown>{level.lesson_content}</ReactMarkdown>
          </article>

          <div className="terminal-panel mb-4 p-3">
            <div className="mb-2 font-mono text-xs text-hack-amber">
              # LINE {activeLine} ANALYSIS
            </div>
            {currentNote ? (
              <>
                <p className="font-mono text-sm text-hack-green">{currentNote.text}</p>
                <p className="mt-1 font-mono text-xs text-hack-dim">{currentNote.why}</p>
              </>
            ) : (
              <p className="font-mono text-xs text-hack-dim">Type in the editor to see line explanations.</p>
            )}
          </div>

          {level.hints.length > 0 && (
            <div className="terminal-panel p-3">
              <div className="mb-2 font-mono text-xs text-hack-amber"># HINTS</div>
              <ul className="space-y-1">
                {level.hints.map((h, i) => (
                  <li key={i} className="font-mono text-xs text-hack-dim">→ {h}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT: editor + output */}
        <div className="flex flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-hack-border px-3 py-2">
            <span className="font-mono text-xs text-hack-dim">python3 ~/student.py</span>
            <div className="flex gap-2">
              <button onClick={() => setCode("")} className="hack-btn-ghost text-xs">
                <RotateCcw className="mr-1 inline h-3 w-3" />CLEAR
              </button>
              <button
                onClick={runCode}
                disabled={!pyodideReady || status === "running" || status === "loading"}
                className="hack-btn text-xs"
              >
                {status === "running" || status === "loading" ? (
                  <Loader2 className="mr-1 inline h-3 w-3 animate-spin" />
                ) : (
                  <Play className="mr-1 inline h-3 w-3" />
                )}
                EXECUTE
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-[200px]">
            <Editor
              height="100%"
              defaultLanguage="python"
              theme="vs-dark"
              value={code}
              onChange={(v) => setCode(v ?? "")}
              onMount={handleEditorMount}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "var(--font-mono)",
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                padding: { top: 12 },
                wordWrap: "on",
              }}
            />
          </div>

          <div className="border-t border-hack-border">
            <div className="px-3 py-1.5 font-mono text-xs text-hack-dim">OUTPUT</div>
            <pre className="max-h-40 overflow-y-auto px-3 pb-3 font-mono text-sm text-hack-green whitespace-pre-wrap">
              {output || (status === "loading" ? "Initializing Python runtime..." : "$ awaiting execution...")}
            </pre>
          </div>

          {feedback && (
            <div className={`border-t px-3 py-2 font-mono text-xs ${status === "success" ? "text-hack-green border-hack-green/30 bg-hack-green/5" : status === "error" ? "text-red-400 border-red-500/30" : "text-hack-dim border-hack-border"}`}>
              {status === "success" ? "[OK] " : status === "error" ? "[ERR] " : "[INFO] "}{feedback}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-hack-border px-4 py-2">
        {prevLevel ? (
          <button onClick={() => onSelectLevel(prevLevel.slug)} className="font-mono text-xs text-hack-dim hover:text-hack-green">
            <ChevronLeft className="inline h-3 w-3" /> {prevLevel.title}
          </button>
        ) : <span />}
        {nextLevel ? (
          <button onClick={() => onSelectLevel(nextLevel.slug)} className="font-mono text-xs text-hack-green hover:underline">
            {nextLevel.title} <ChevronRight className="inline h-3 w-3" />
          </button>
        ) : (
          <div className="flex flex-col items-end gap-1">
            {dayGateMessage && (
              <span className="font-mono text-[10px] text-red-400">{dayGateMessage}</span>
            )}
            <button onClick={openDayBoss} className="font-mono text-xs text-hack-green hover:underline">
              {isDayBugFixed(level.day) ? "DAY COMPLETE →" : "DAY COMPLETE → BUG FIX"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
