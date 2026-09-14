# Python Automation Course App

Interactive 12-week Python course in the browser: 60 days, 2 coding levels per day, live execution, and progress tracking.

## Features

- 120 coding levels with in-browser Python (Pyodide)
- Live HTTPS APIs from week 6 (`fetch_json` / `fetch_text`)
- Progress saved locally and synced to Supabase
- Final project: DocPack document compressor, GitHub push, deploy

## Tech Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Monaco Editor
- Pyodide
- Supabase
- Vercel

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

```bash
npx tsx scripts/seed-supabase.ts
```

## Course Structure

12 weeks. Each weekday session has 2 levels. Week 12 ends with DocPack (compress files, push to GitHub, deploy).

## Deploy to Vercel

1. Push to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy
