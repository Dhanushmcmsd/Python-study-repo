import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-50">
      <div className="max-w-xl px-4 text-center space-y-4">
        <h1 className="text-3xl font-bold">Python Automation Course App</h1>
        <p className="text-slate-300">
          Start learning Python fundamentals, automation, and AI-powered automation through structured
          levels with runnable examples and exercises.
        </p>
        <Link
          href="/levels"
          className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400"
        >
          Go to levels
        </Link>
      </div>
    </main>
  );
}
