"use client";

import { useState } from "react";
import { Download, Github, Loader2 } from "lucide-react";
import { DOCPACK_FILES } from "@/lib/capstoneFiles";
import { buildZipBlob } from "@/lib/zipStore";

async function githubRequest(token: string, path: string, init?: RequestInit) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = typeof body.message === "string" ? body.message : `GitHub HTTP ${res.status}`;
    throw new Error(message);
  }
  return body;
}

function toBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

export default function ProjectShipPanel() {
  const [repoName, setRepoName] = useState("docpack-compressor");
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [repoUrl, setRepoUrl] = useState("");

  function downloadZip() {
    const blob = buildZipBlob(DOCPACK_FILES);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "docpack-compressor.zip";
    a.click();
    URL.revokeObjectURL(url);
    setMessage("ZIP downloaded. Unzip, then git init or use Push to GitHub below.");
  }

  async function pushToGithub() {
    const name = repoName.trim().replace(/[^a-zA-Z0-9._-]/g, "-");
    if (!name || !token.trim()) {
      setMessage("Enter a repo name and a GitHub token with the repo scope.");
      return;
    }
    setBusy(true);
    setMessage("");
    setRepoUrl("");
    try {
      const me = await githubRequest(token.trim(), "/user");
      const login = me.login as string;
      let htmlUrl = "";
      try {
        const created = await githubRequest(token.trim(), "/user/repos", {
          method: "POST",
          body: JSON.stringify({
            name,
            description: "DocPack — compress multiple documents into one ZIP",
            private: true,
            auto_init: false,
          }),
        });
        htmlUrl = created.html_url as string;
      } catch (err) {
        const text = err instanceof Error ? err.message : "";
        if (!/already exists|name already exists/i.test(text)) throw err;
        htmlUrl = `https://github.com/${login}/${name}`;
      }

      for (const file of DOCPACK_FILES) {
        const encodedPath = file.name
          .split("/")
          .map((part) => encodeURIComponent(part))
          .join("/");
        const apiPath = `/repos/${login}/${name}/contents/${encodedPath}`;
        let sha: string | undefined;
        const existing = await fetch(`https://api.github.com${apiPath}`, {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${token.trim()}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
        if (existing.ok) {
          const body = await existing.json();
          if (typeof body.sha === "string") sha = body.sha;
        }
        await githubRequest(token.trim(), apiPath, {
          method: "PUT",
          body: JSON.stringify({
            message: `Add ${file.name}`,
            content: toBase64(file.content),
            ...(sha ? { sha } : {}),
          }),
        });
      }

      setRepoUrl(htmlUrl);
      setMessage("Files uploaded. Open the repo, then deploy on Streamlit Cloud.");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "GitHub upload failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="terminal-panel mt-4 p-3">
      <div className="mb-2 font-mono text-xs text-hack-amber"># SHIP THIS PROJECT</div>
      <p className="mb-3 font-mono text-xs text-hack-dim">
        Download the full DocPack app, or push it to your GitHub from this screen. Token stays in this browser tab only.
      </p>
      <div className="mb-2 flex flex-wrap gap-2">
        <button type="button" onClick={downloadZip} className="hack-btn-ghost text-xs">
          <Download className="mr-1 inline h-3 w-3" />
          DOWNLOAD ZIP
        </button>
        <a
          className="hack-btn-ghost text-xs"
          href="https://github.com/settings/tokens?type=beta"
          target="_blank"
          rel="noreferrer"
        >
          CREATE TOKEN
        </a>
      </div>
      <label className="mb-1 block font-mono text-[10px] text-hack-dim">REPO NAME</label>
      <input
        className="hack-input mb-2 w-full"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />
      <label className="mb-1 block font-mono text-[10px] text-hack-dim">GITHUB TOKEN (repo scope)</label>
      <input
        className="hack-input mb-3 w-full"
        type="password"
        autoComplete="off"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="github_pat_…"
      />
      <button type="button" onClick={pushToGithub} disabled={busy} className="hack-btn w-full text-xs">
        {busy ? <Loader2 className="mr-1 inline h-3 w-3 animate-spin" /> : <Github className="mr-1 inline h-3 w-3" />}
        PUSH TO MY GITHUB
      </button>
      {message && <p className="mt-3 break-words font-mono text-xs text-hack-dim">{message}</p>}
      {repoUrl && (
        <a className="mt-2 block font-mono text-xs text-hack-cyan underline" href={repoUrl} target="_blank" rel="noreferrer">
          {repoUrl}
        </a>
      )}
      <p className="mt-3 font-mono text-[10px] leading-relaxed text-hack-dim">
        Deploy: share.streamlit.io → New app → this repo → Main file compress_app.py. Or Render with
        streamlit run compress_app.py --server.port $PORT --server.address 0.0.0.0
      </p>
    </div>
  );
}
