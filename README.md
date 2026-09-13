# Python Automation Course App

Interactive learning app for adults with zero coding experience. Learn Python through **10 structured levels per day** with live coding, exercises, and progress tracking.

## Features

- **30 interactive levels** across 3 course days (expandable)
- **In-browser Python** — write and run code instantly (Pyodide)
- **Progress tracking** — saved locally and synced to Supabase
- **Exercise validation** — automatic feedback on your output
- **Professional UI** — designed for adult beginners

## Tech Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Monaco Editor** — VS Code-style Python editor
- **Pyodide** — Python runtime in the browser
- **Supabase** — levels database and progress sync
- **Vercel** — deployment

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add your Supabase URL and publishable key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable (anon) key |

## Seeding Supabase

After setting env vars, seed course levels:

```bash
npx tsx scripts/generate-seed-sql.ts
# Then apply scripts/seed-levels.sql via Supabase SQL editor or MCP
```

Or run directly:

```bash
npx tsx scripts/seed-supabase.ts
```

## Course Structure

| Day | Topic | Levels |
|-----|-------|--------|
| 1 | Python Foundations | 10 |
| 2 | Decisions & Loops | 10 |
| 3 | Functions & Automation | 10 |

Each day follows: Concept → Run → Modify → Exercise → Debug → Quiz → Project

## Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

```bash
npx vercel --prod
```
