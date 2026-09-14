"use client";

import { useCallback, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import { Download, Github, Loader2, Play, Upload, X } from "lucide-react";
import type { PracticalTask } from "@/lib/practicalTask";
import { validateAgainstReference } from "@/lib/validateOutput";
import { pushFilesToGithub } from "@/lib/githubShip";
import { DOCPACK_FILES } from "@/lib/capstoneFiles";
import { buildZipBlob } from "@/lib/zipStore";
import ProjectShipPanel from "./ProjectShipPanel";

interface PracticalTaskModalProps {
  task: PracticalTask;
  executing: boolean;
  onExecute: (code: string, fileText: string) => Promise<{ output: string; error?: string }>;
  onComplete: (code: string) => void;
  onClose: () => void;
}

async function loadExampleText(path: string): Promise<string> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Could not load ${path}`);
  return res.text();
}

export default function PracticalTaskModal({
  task,
  executing,
  onExecute,
  onComplete,
  onClose,
}: PracticalTaskModalProps) {
  const [code, setCode] = useState(task.starterCode);
  const [fileText, setFileText] = useState("");
  const [fileLabel, setFileLabel] = useState("example file not loaded");
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [passed, setPassed] = useState(false);
  const [repoName, setRepoName] = useState(`python-day-${task.day}`);
  const [token, setToken] = useState("");
  const [gitMsg, setGitMsg] = useState("");
  const [gitUrl, setGitUrl] = useState("");
  const [gitBusy, setGitBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function loadDefault() {
      if (!task.exampleFile) {
        setFileText("");
        setFileLabel("No file required — edit code only");
        return;
      }
      try {
        const text = await loadExampleText(task.exampleFile.path);
        if (!cancelled) {
          setFileText(text);
          setFileLabel(task.exampleFile.name);
        }
      } catch {
        if (!cancelled) setFileLabel("Download the example file below");
      }
    }
    void loadDefault();
    return () => {
      cancelled = true;
    };
  }, [task]);

  const handleUpload = useCallback(async (file: File) => {
    const text = await file.text();
    setFileText(text);
    setFileLabel(file.name);
    setFeedback(`Loaded your file: ${file.name}`);
    setPassed(false);
  }, []);

  async function handleRun() {
    setFeedback("");
    const result = await onExecute(code, fileText);
    if (result.error) {
      setOutput(result.error);
      setFeedback("Fix the error, then run again.");
      setPassed(false);
      return;
    }
    setOutput(result.output || "(no output)");
    const validation = validateAgainstReference(task.solutionCode, result.output, code, {
      requireOutput: /\bprint\s*\(/.test(task.solutionCode),
    });
    setFeedback(validation.message);
    if (validation.passed) setPassed(true);
  }

  async function pushScript() {
    setGitBusy(true);
    setGitMsg("");
    setGitUrl("");
    try {
      const files =
        task.day === 60
          ? DOCPACK_FILES
          : [
              {
                name: `day${task.day}_script.py`,
                content: `# Day ${task.day} — ${task.title}\n${code}\n`,
              },
              {
                name: "README.md",
                content: `# Day ${task.day}\n\n${task.scenario}\n\n## Run\n\n${task.runLocally ?? "python day" + task.day + "_script.py"}\n`,
              },
            ];
      const url = await pushFilesToGithub(
        token,
        repoName,
        files,
        `Day ${task.day}: ${task.title}`
      );
      setGitUrl(url);
      setGitMsg("Repository updated. Clone it locally and run using the README steps.");
    } catch (err) {
      setGitMsg(err instanceof Error ? err.message : "GitHub upload failed.");
    } finally {
      setGitBusy(false);
    }
  }

  function downloadExample() {
    if (!task.exampleFile) return;
    const a = document.createElement("a");
    a.href = task.exampleFile.path;
    a.download = task.exampleFile.name;
    a.click();
  }

  function downloadDayZip() {
    const blob = buildZipBlob([
      { name: `day${task.day}_script.py`, content: code },
      ...(task.exampleFile ? [{ name: task.exampleFile.name, content: fileText }] : []),
    ]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `day-${task.day}-project.zip`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="fixed inset-0 z-[55] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm">
      <div className="terminal-panel flex max-h-[94vh] w-full max-w-6xl min-w-0 flex-col overflow-hidden">
        <div className="flex shrink-0 items-center justify-between border-b border-hack-border px-4 py-3">
          <div>
            <div className="font-mono text-sm text-hack-green">BUILD IT // DAY {task.day}</div>
            <div className="font-mono text-[10px] text-hack-dim">{task.title}</div>
          </div>
          <button onClick={onClose} className="text-hack-dim hover:text-hack-green" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 overflow-hidden lg:grid-cols-2">
          <div className="min-w-0 overflow-y-auto overflow-x-hidden border-b border-hack-border p-4 lg:border-b-0 lg:border-r">
            <article className="prose-hack mb-4">
              <ReactMarkdown>{`## Real-world implementation\n\n**Scenario:** ${task.scenario}\n\n**Where you'd use this:** ${task.realWorldUse}\n\n### Requirements\n${task.requirements.map((r) => `- ${r}`).join("\n")}\n\n### Edge cases\n${task.edgeCases.map((e) => `- ${e}`).join("\n")}\n\n${task.acceptsOwnFile ? `**Your own input:** ${task.ownFileHint}` : task.ownFileHint}`}</ReactMarkdown>
            </article>

            <div className="terminal-panel mb-3 p-3">
              <div className="mb-2 font-mono text-xs text-hack-amber"># INPUT FILE</div>
              <p className="mb-2 font-mono text-[10px] text-hack-dim">Loaded: {fileLabel}</p>
              <div className="flex flex-wrap gap-2">
                {task.exampleFile && (
                  <button type="button" onClick={downloadExample} className="hack-btn-ghost text-xs">
                    <Download className="mr-1 inline h-3 w-3" />
                    DOWNLOAD EXAMPLE
                  </button>
                )}
                {task.acceptsOwnFile && (
                  <label className="hack-btn-ghost cursor-pointer text-xs">
                    <Upload className="mr-1 inline h-3 w-3" />
                    USE YOUR FILE
                    <input
                      type="file"
                      accept=".txt,.csv,.json,.log,.md"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) void handleUpload(f);
                      }}
                    />
                  </label>
                )}
                <button type="button" onClick={downloadDayZip} className="hack-btn-ghost text-xs">
                  DOWNLOAD PROJECT ZIP
                </button>
              </div>
            </div>

            {task.gitNotes && (
              <div className="terminal-panel mb-3 p-3">
                <div className="mb-2 font-mono text-xs text-hack-amber"># GIT + RUN</div>
                <article className="prose-hack">
                  <ReactMarkdown>{task.gitNotes}</ReactMarkdown>
                  {task.runLocally && <ReactMarkdown>{`### Run locally\n${task.runLocally}`}</ReactMarkdown>}
                </article>
                {task.day !== 60 && (
                  <>
                    <label className="mb-1 mt-2 block font-mono text-[10px] text-hack-dim">REPO NAME</label>
                    <input
                      className="hack-input mb-2 w-full"
                      value={repoName}
                      onChange={(e) => setRepoName(e.target.value)}
                    />
                    <label className="mb-1 block font-mono text-[10px] text-hack-dim">GITHUB TOKEN (repo scope)</label>
                    <input
                      className="hack-input mb-2 w-full"
                      type="password"
                      autoComplete="off"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                    <button type="button" onClick={pushScript} disabled={gitBusy} className="hack-btn w-full text-xs">
                      {gitBusy ? (
                        <Loader2 className="mr-1 inline h-3 w-3 animate-spin" />
                      ) : (
                        <Github className="mr-1 inline h-3 w-3" />
                      )}
                      PUSH SCRIPT TO GITHUB
                    </button>
                    {gitMsg && <p className="mt-2 break-words font-mono text-[10px] text-hack-dim">{gitMsg}</p>}
                    {gitUrl && (
                      <a className="mt-1 block font-mono text-[10px] text-hack-cyan underline" href={gitUrl} target="_blank" rel="noreferrer">
                        {gitUrl}
                      </a>
                    )}
                  </>
                )}
              </div>
            )}

            {task.day === 60 && <ProjectShipPanel />}
          </div>

          <div className="flex min-h-0 min-w-0 flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b border-hack-border px-3 py-2">
              <span className="font-mono text-xs text-hack-dim">python3 ~/day_{task.day}.py</span>
              <button onClick={handleRun} disabled={executing} className="hack-btn text-xs">
                {executing ? (
                  <Loader2 className="mr-1 inline h-3 w-3 animate-spin" />
                ) : (
                  <Play className="mr-1 inline h-3 w-3" />
                )}
                RUN
              </button>
            </div>
            <div className="min-h-[200px] flex-1">
              <Editor
                height="100%"
                defaultLanguage="python"
                theme="vs-dark"
                value={code}
                onChange={(v) => {
                  setCode(v ?? "");
                  setPassed(false);
                }}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  wordWrap: "on",
                  scrollBeyondLastLine: false,
                }}
              />
            </div>
            <div className="border-t border-hack-border">
              <div className="px-3 py-1 font-mono text-xs text-hack-dim">OUTPUT</div>
              <pre className="max-h-32 overflow-y-auto whitespace-pre-wrap break-all px-3 pb-2 font-mono text-xs text-hack-green">
                {output || "$ run your implementation..."}
              </pre>
            </div>
            {feedback && (
              <div
                className={`border-t px-3 py-2 font-mono text-xs ${passed ? "border-hack-green/30 bg-hack-green/5 text-hack-green" : "border-hack-border text-hack-dim"}`}
              >
                {passed ? "[OK] " : "[INFO] "}
                {feedback}
              </div>
            )}
            <div className="border-t border-hack-border p-3">
              <button
                type="button"
                disabled={!passed}
                onClick={() => onComplete(code)}
                className="hack-btn w-full text-xs disabled:opacity-40"
              >
                COMPLETE BUILD IT → BUG FIX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
