"use client";

import { X } from "lucide-react";
import type { LineBreakdown } from "@/lib/tokenExplainer";

interface CodeBreakdownModalProps {
  breakdown: LineBreakdown[];
  onClose: () => void;
}

function shortToken(token: string): string {
  if (token.length <= 42) return token;
  return `${token.slice(0, 20)}…${token.slice(-10)}`;
}

export default function CodeBreakdownModal({ breakdown, onClose }: CodeBreakdownModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="terminal-panel flex max-h-[85vh] w-full max-w-2xl min-w-0 flex-col overflow-hidden">
        <div className="flex shrink-0 items-center justify-between border-b border-hack-border px-4 py-3">
          <span className="font-mono text-sm text-hack-green">
            &gt; ACCESS GRANTED — CODE ANALYSIS
          </span>
          <button onClick={onClose} className="text-hack-dim hover:text-hack-green">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overflow-x-hidden p-4">
          <p className="font-mono text-xs text-hack-dim">
            Each token in the code you wrote, explained. Change the text or numbers next time — the tools stay the same.
          </p>

          {breakdown.map((line) => (
            <div key={line.lineNumber} className="min-w-0 overflow-hidden border border-hack-border bg-hack-bg p-3">
              <div className="mb-2 font-mono text-xs text-hack-amber">
                LINE {line.lineNumber}
              </div>
              <pre className="mb-2 max-w-full whitespace-pre-wrap break-all font-mono text-sm text-hack-green">
                {line.code}
              </pre>
              <p className="mb-2 break-words text-xs text-hack-dim">{line.summary}</p>
              <div className="space-y-1">
                {line.tokens.map((tok, i) => (
                  <div key={i} className="flex min-w-0 gap-2 font-mono text-xs">
                    <span className="max-w-[45%] shrink-0 break-all text-hack-cyan" title={tok.token}>
                      {shortToken(tok.token)}
                    </span>
                    <span className="min-w-0 break-words text-hack-dim">→ {tok.role}</span>
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
