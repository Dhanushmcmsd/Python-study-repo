"use client";

import { useMemo, useState } from "react";
import Editor from "@monaco-editor/react";
import { Loader2, Play, ShieldAlert, X } from "lucide-react";
import type { BugChallenge } from "@/lib/bugChallenge";
import { breakdownCode } from "@/lib/tokenExplainer";
import { validateAgainstReference } from "@/lib/validateOutput";

interface BugFixModalProps {
  challenge: BugChallenge;
  executing: boolean;
  onExecute: (code: string) => Promise<{ output: string; error?: string }>;
  onPatched: (code: string) => void;
  onClose: () => void;
}

export default function BugFixModal({
  challenge,
  executing,
  onExecute,
  onPatched,
  onClose,
}: BugFixModalProps) {
  const [code, setCode] = useState(challenge.buggyCode);
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [passed, setPassed] = useState(false);

  const breakdown = useMemo(() => breakdownCode(code), [code]);

  async function handleExecute() {
    setFeedback("");
    const result = await onExecute(code);
    if (result.error) {
      setOutput(result.error);
      setFeedback("Hostile payload still crashing. Patch the syntax / name fault.");
      setPassed(false);
      return;
    }
    setOutput(result.output || "(no output)");
    const validation = validateAgainstReference(challenge.referenceCode, result.output, code, {
      requireOutput: /\bprint\s*\(/.test(challenge.referenceCode),
    });
    setFeedback(validation.message);
    if (validation.passed) {
      setPassed(true);
    }
  }

  return (
    <div className="bug-overlay fixed inset-0 z-[60] flex items-center justify-center p-3">
      <div className="bug-panel flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-red-600/60 bg-red-950/80 px-4 py-3">
          <div>
            <div className="font-mono text-sm tracking-widest text-red-400 bug-glitch">
              BUG FIX // CRITICAL INCIDENT
            </div>
            <div className="font-mono text-[10px] text-red-300/80">
              {challenge.incidentId} · DAY {challenge.day} BOSS ENCOUNTER
            </div>
          </div>
          <button onClick={onClose} className="text-red-400 hover:text-red-200" aria-label="Close bug fix">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 overflow-hidden lg:grid-cols-2">
          <div className="overflow-y-auto border-b border-red-900/60 p-4 lg:border-b-0 lg:border-r">
            <div className="mb-3 flex items-start gap-2 text-red-300">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <p className="font-mono text-xs leading-relaxed">
                A unique hostile payload was generated for your operator ID. Restore executable Python
                that still uses today&apos;s functions. Strings and numbers may stay yours.
              </p>
            </div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-red-500">
              Captured payload
            </div>
            <pre className="max-h-48 overflow-auto border border-red-800/70 bg-black/60 p-3 font-mono text-[11px] text-red-300 whitespace-pre-wrap">
              {challenge.buggyCode}
            </pre>
            {passed && breakdown.length > 0 && (
              <div className="mt-4 space-y-2">
                <div className="font-mono text-[10px] text-red-400">PATCH ANALYSIS — YOUR CODE</div>
                {breakdown.slice(0, 8).map((line) => (
                  <div key={line.lineNumber} className="border border-red-900/50 p-2">
                    <div className="font-mono text-[10px] text-red-400">LINE {line.lineNumber}</div>
                    <pre className="font-mono text-xs text-red-200">{line.code}</pre>
                    <p className="font-mono text-[10px] text-red-400/80">{line.summary}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex min-h-[280px] flex-col">
            <div className="flex items-center justify-between border-b border-red-900/60 px-3 py-2">
              <span className="font-mono text-[10px] text-red-400">patch ~/incident.py</span>
              <button
                onClick={handleExecute}
                disabled={executing}
                className="border border-red-500 bg-red-600/20 px-3 py-1 font-mono text-xs text-red-200 hover:bg-red-600/40 disabled:opacity-40"
              >
                {executing ? (
                  <Loader2 className="mr-1 inline h-3 w-3 animate-spin" />
                ) : (
                  <Play className="mr-1 inline h-3 w-3" />
                )}
                DEPLOY PATCH
              </button>
            </div>
            <div className="flex-1 min-h-[180px]">
              <Editor
                height="100%"
                defaultLanguage="python"
                theme="vs-dark"
                value={code}
                onChange={(v) => setCode(v ?? "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  fontFamily: "var(--font-mono)",
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  padding: { top: 8 },
                  wordWrap: "on",
                }}
              />
            </div>
            <div className="border-t border-red-900/60 px-3 py-2">
              <div className="font-mono text-[10px] text-red-500">TRACE</div>
              <pre className="max-h-24 overflow-auto font-mono text-xs text-red-200 whitespace-pre-wrap">
                {output || "$ awaiting patch..."}
              </pre>
              {feedback && (
                <p className={`mt-1 font-mono text-xs ${passed ? "text-hack-green" : "text-red-400"}`}>
                  {passed ? "[PATCHED] " : "[FAULT] "}
                  {feedback}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-red-800/70 p-3">
          <button
            disabled={!passed}
            onClick={() => onPatched(code)}
            className="w-full border border-red-500 bg-red-600/30 py-2 font-mono text-sm text-red-100 hover:bg-red-600/50 disabled:opacity-30"
          >
            {passed ? "THREAT NEUTRALIZED — COMPLETE DAY" : "PATCH THE INCIDENT TO COMPLETE THE DAY"}
          </button>
        </div>
      </div>
    </div>
  );
}
