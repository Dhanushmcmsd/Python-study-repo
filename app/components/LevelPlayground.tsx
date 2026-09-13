"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function LevelPlayground({
  initialCode,
}: {
  initialCode: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");

  const runCode = async () => {
    const res = await fetch("/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    setOutput(data.output ?? data.error ?? "No output");
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="border border-slate-700 rounded-md overflow-hidden">
        <Editor
          height="300px"
          defaultLanguage="python"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? "")}
        />
      </div>
      <div className="space-y-2">
        <button
          onClick={runCode}
          className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-3 py-1 text-sm font-semibold text-slate-900 hover:bg-emerald-400"
        >
          Run code
        </button>
        <pre className="min-h-[120px] rounded-md bg-slate-900 p-3 text-xs text-emerald-200 overflow-auto">
{output}
        </pre>
      </div>
    </div>
  );
}
