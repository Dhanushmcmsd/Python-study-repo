"use client";

import { X } from "lucide-react";
import type { LineBreakdown } from "@/lib/tokenExplainer";

interface CodeBreakdownModalProps {
  breakdown: LineBreakdown[];
  onClose: () => void;
}

export default function CodeBreakdownModal({ breakdown, onClose }: CodeBreakdownModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="terminal-panel max-h-[85vh] w-full max-w-2xl overflow-y-auto">
        <div className="flex items-center justify-between border-b border-hack-border px-4 py-3">
          <span className="font-mono text-sm text-hack-green">
            &gt; ACCESS GRANTED — CODE ANALYSIS
          </span>
          <button onClick={onClose} className="text-hack-dim hover:text-hack-green">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-4">
          <p className="font-mono text-xs text-hack-dim">
            Each token in your code explained. Study this to remember what you typed.
          </p>

          {breakdown.map((line) => (
            <div key={line.lineNumber} className="border border-hack-border bg-hack-bg p-3">
              <div className="mb-2 font-mono text-xs text-hack-amber">
                LINE {line.lineNumber}
              </div>
              <pre className="mb-2 font-mono text-sm text-hack-green">{line.code}</pre>
              <p className="mb-2 text-xs text-hack-dim">{line.summary}</p>
              <div className="space-y-1">
                {line.tokens.map((tok, i) => (
                  <div key={i} className="flex gap-2 font-mono text-xs">
                    <span className="shrink-0 text-hack-cyan">{tok.token}</span>
                    <span className="text-hack-dim">→ {tok.role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button onClick={onClose} className="hack-btn w-full">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}
