export async function githubRequest(token: string, path: string, init?: RequestInit) {
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

export function toBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

export async function pushFilesToGithub(
  token: string,
  repoName: string,
  files: { name: string; content: string }[],
  description: string
): Promise<string> {
  const name = repoName.trim().replace(/[^a-zA-Z0-9._-]/g, "-");
  if (!name || !token.trim()) {
    throw new Error("Enter a repo name and a GitHub token with the repo scope.");
  }

  const me = await githubRequest(token.trim(), "/user");
  const login = me.login as string;
  let htmlUrl = "";
  try {
    const created = await githubRequest(token.trim(), "/user/repos", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
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

  for (const file of files) {
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

  return htmlUrl;
}
