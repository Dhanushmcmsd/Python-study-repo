import type { Level } from "../types";

export const WEEK12_LEVELS: Level[] = [
  {
    slug: "week12-level1-capstone-intro",
    title: "Capstone Project Overview",
    phase: 3,
    day: 12,
    index_in_day: 1,
    level_type: "concept",
    summary: "Preview tests and structure before the DocPack compressor.",
    lesson_content: `## Week 12 Capstone

You already practiced pipelines, tests, and agent-style functions. The **shippable** project is **DocPack**: a small app that compresses many documents into one ZIP, then goes to GitHub and a public URL.

### What you will ship

1. Core logic in this editor (\`zipfile\` + size report)
2. A Streamlit app (\`compress_app.py\`) downloaded or pushed from this course
3. A GitHub repo created from the ship panel
4. Deploy on Streamlit Community Cloud (or Render)

Earlier levels this week still train testing and structure — those skills keep DocPack from breaking.`,
    starter_code: `# Capstone preview — feedback analyzer skeleton\n\ndef analyze_feedback(text):\n    sentiment = "positive" if "great" in text.lower() else "negative"\n    return {"text": text, "sentiment": sentiment}\n\nfeedback = "The app is great but slow sometimes"\nresult = analyze_feedback(feedback)\nprint(f"Sentiment: {result['sentiment']}")\nprint("Capstone project begins")`,
    solution_code: `def analyze_feedback(text):\n    sentiment = "positive" if "great" in text.lower() else "negative"\n    return {"text": text, "sentiment": sentiment}\n\nfeedback = "The app is great but slow sometimes"\nresult = analyze_feedback(feedback)\nprint(f"Sentiment: {result['sentiment']}")\nprint("Capstone project begins")`,
    validation_type: "contains",
    validation_pattern: "Capstone project begins",
    hints: ["The capstone combines pipelines, AI simulation, and reporting.", "Run the preview to see basic sentiment detection."],
  },
  {
    slug: "week12-level2-testing-concepts",
    title: "Testing Concepts",
    phase: 3,
    day: 12,
    index_in_day: 2,
    level_type: "run",
    summary: "Use assert statements to verify function behavior.",
    lesson_content: `## Testing with assert

Before shipping automation, **verify it works**:

\`\`\`python
def add(a, b):
    return a + b

assert add(2, 3) == 5, "add failed"
assert add(-1, 1) == 0, "add failed"
print("All tests passed")
\`\`\`

\`assert\` stops execution if the condition is False — catching bugs early.`,
    starter_code: `def classify_sentiment(text):\n    if "love" in text.lower() or "great" in text.lower():\n        return "positive"\n    if "hate" in text.lower() or "terrible" in text.lower():\n        return "negative"\n    return "neutral"\n\n# Tests\nassert classify_sentiment("I love this") == "positive"\nassert classify_sentiment("This is terrible") == "negative"\nassert classify_sentiment("It works") == "neutral"\nprint("All tests passed")`,
    solution_code: `def classify_sentiment(text):\n    if "love" in text.lower() or "great" in text.lower():\n        return "positive"\n    if "hate" in text.lower() or "terrible" in text.lower():\n        return "negative"\n    return "neutral"\n\nassert classify_sentiment("I love this") == "positive"\nassert classify_sentiment("This is terrible") == "negative"\nassert classify_sentiment("It works") == "neutral"\nprint("All tests passed")`,
    validation_type: "contains",
    validation_pattern: "All tests passed",
    hints: ["assert condition, 'message' fails if condition is False.", "Run to verify all three test cases pass."],
  },
  {
    slug: "week12-level3-project-structure",
    title: "Project Structure",
    phase: 3,
    day: 12,
    index_in_day: 3,
    level_type: "modify",
    summary: "Organize code into logical modules using functions.",
    lesson_content: `## Project Structure

Split code by **responsibility**:

| Module | Role |
|--------|------|
| \`clean()\` | Data prep |
| \`analyze()\` | Core logic |
| \`report()\` | Output formatting |

\`\`\`python
def clean(text): ...
def analyze(text): ...
def report(data): ...

def main():
    data = clean(raw)
    result = analyze(data)
    print(report(result))
\`\`\`

### Your task

Fill in \`main()\` to run the full pipeline.`,
    starter_code: `def clean(text):\n    return text.strip()\n\ndef analyze(text):\n    return {"words": len(text.split()), "chars": len(text)}\n\ndef report(data):\n    return f"Analysis: {data['words']} words, {data['chars']} chars"\n\ndef main():\n    raw = "  Hello automation world  "\n    # Run clean → analyze → report and print\n    pass\n\nmain()`,
    solution_code: `def clean(text):\n    return text.strip()\n\ndef analyze(text):\n    return {"words": len(text.split()), "chars": len(text)}\n\ndef report(data):\n    return f"Analysis: {data['words']} words, {data['chars']} chars"\n\ndef main():\n    raw = "  Hello automation world  "\n    cleaned = clean(raw)\n    data = analyze(cleaned)\n    print(report(data))\n\nmain()`,
    validation_type: "contains",
    validation_pattern: "3 words",
    hints: ["Chain: cleaned = clean(raw), data = analyze(cleaned), print(report(data)).", "main() orchestrates the pipeline."],
  },
  {
    slug: "week12-level4-unit-tests",
    title: "Unit Test Simulation",
    phase: 3,
    day: 12,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Write a test runner that validates multiple functions.",
    lesson_content: `## Test Runner Pattern

\`\`\`python
def run_tests():
    passed = 0
    failed = 0
    tests = [
        ("add", lambda: add(1, 1) == 2),
        ("double", lambda: double(3) == 6),
    ]
    for name, test_fn in tests:
        if test_fn():
            passed += 1
        else:
            failed += 1
    return passed, failed
\`\`\`

A simple test runner helps validate your capstone before submission.`,
    starter_code: `def extract_topic(text):\n    topics = {"billing": "refund", "support": "help", "product": "feature"}\n    for topic, keyword in topics.items():\n        if keyword in text.lower():\n            return topic\n    return "general"\n\ndef run_tests():\n    tests = [\n        ("billing", lambda: extract_topic("I want a refund") == "billing"),\n        ("support", lambda: extract_topic("I need help") == "support"),\n        ("general", lambda: extract_topic("Hello") == "general"),\n    ]\n    passed = sum(1 for _, t in tests if t())\n    return passed, len(tests) - passed\n\np, f = run_tests()\nprint(f"Passed: {p}, Failed: {f}")`,
    solution_code: `def extract_topic(text):\n    topics = {"billing": "refund", "support": "help", "product": "feature"}\n    for topic, keyword in topics.items():\n        if keyword in text.lower():\n            return topic\n    return "general"\n\ndef run_tests():\n    tests = [\n        ("billing", lambda: extract_topic("I want a refund") == "billing"),\n        ("support", lambda: extract_topic("I need help") == "support"),\n        ("general", lambda: extract_topic("Hello") == "general"),\n    ]\n    passed = sum(1 for _, t in tests if t())\n    return passed, len(tests) - passed\n\np, f = run_tests()\nprint(f"Passed: {p}, Failed: {f}")`,
    validation_type: "contains",
    validation_pattern: "Passed: 3",
    hints: ["Each lambda returns True if the test passes.", "All three tests should pass."],
  },
  {
    slug: "week12-level5-analyzer-helper",
    title: "Analyzer Helper Functions",
    phase: 3,
    day: 12,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Build helper functions for the feedback analyzer.",
    lesson_content: `## Helper Functions

Break the analyzer into small, testable pieces:

\`\`\`python
def normalize_feedback(text):
    return " ".join(text.split()).lower()

def word_count(text):
    return len(text.split())
\`\`\`

Helpers make the capstone easier to build and test.`,
    starter_code: `def normalize_feedback(text):\n    return " ".join(text.split()).lower()\n\ndef detect_urgency(text):\n    urgent_words = ["urgent", "asap", "immediately"]\n    return any(w in text.lower() for w in urgent_words)\n\ndef analyze_entry(text):\n    normalized = normalize_feedback(text)\n    return {\n        "text": normalized,\n        "urgent": detect_urgency(normalized),\n        "length": len(normalized),\n    }\n\nentry = analyze_entry("  URGENT: Need help ASAP  ")\nprint(f"Urgent: {entry['urgent']}, Length: {entry['length']}")`,
    solution_code: `def normalize_feedback(text):\n    return " ".join(text.split()).lower()\n\ndef detect_urgency(text):\n    urgent_words = ["urgent", "asap", "immediately"]\n    return any(w in text.lower() for w in urgent_words)\n\ndef analyze_entry(text):\n    normalized = normalize_feedback(text)\n    return {\n        "text": normalized,\n        "urgent": detect_urgency(normalized),\n        "length": len(normalized),\n    }\n\nentry = analyze_entry("  URGENT: Need help ASAP  ")\nprint(f"Urgent: {entry['urgent']}, Length: {entry['length']}")`,
    validation_type: "contains",
    validation_pattern: "Urgent: True",
    hints: ["normalize_feedback strips extra spaces.", "detect_urgency checks for urgent keywords."],
  },
  {
    slug: "week12-level6-sentiment-simulation",
    title: "Simulated Sentiment Analysis",
    phase: 3,
    day: 12,
    index_in_day: 6,
    level_type: "exercise",
    summary: "Simulate AI sentiment classification for feedback entries.",
    lesson_content: `## Simulated Sentiment AI

\`\`\`python
def simulate_sentiment_ai(text):
    positive = ["great", "love", "excellent", "thank"]
    negative = ["bad", "hate", "slow", "broken"]
    score = 0
    for w in positive:
        if w in text.lower(): score += 1
    for w in negative:
        if w in text.lower(): score -= 1
    if score > 0: return {"sentiment": "positive", "score": score}
    if score < 0: return {"sentiment": "negative", "score": score}
    return {"sentiment": "neutral", "score": 0}
\`\`\`

Word-based scoring simulates what a real AI model does.`,
    starter_code: `def simulate_sentiment_ai(text):\n    positive = ["great", "love", "excellent", "thank"]\n    negative = ["bad", "hate", "slow", "broken"]\n    score = 0\n    for w in positive:\n        if w in text.lower():\n            score += 1\n    for w in negative:\n        if w in text.lower():\n            score -= 1\n    if score > 0:\n        return {"sentiment": "positive", "score": score}\n    if score < 0:\n        return {"sentiment": "negative", "score": score}\n    return {"sentiment": "neutral", "score": 0}\n\nentries = ["Great product, thank you!", "App is slow and broken"]\nfor e in entries:\n    r = simulate_sentiment_ai(e)\n    print(f"{r['sentiment']} ({r['score']})")`,
    solution_code: `def simulate_sentiment_ai(text):\n    positive = ["great", "love", "excellent", "thank"]\n    negative = ["bad", "hate", "slow", "broken"]\n    score = 0\n    for w in positive:\n        if w in text.lower():\n            score += 1\n    for w in negative:\n        if w in text.lower():\n            score -= 1\n    if score > 0:\n        return {"sentiment": "positive", "score": score}\n    if score < 0:\n        return {"sentiment": "negative", "score": score}\n    return {"sentiment": "neutral", "score": 0}\n\nentries = ["Great product, thank you!", "App is slow and broken"]\nfor e in entries:\n    r = simulate_sentiment_ai(e)\n    print(f"{r['sentiment']} ({r['score']})")`,
    validation_type: "contains",
    validation_pattern: "negative",
    hints: ["Positive words increase score, negative decrease.", "Second entry should classify as negative."],
  },
  {
    slug: "week12-level7-aggregate-stats",
    title: "Aggregate Feedback Stats",
    phase: 3,
    day: 12,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Compute summary statistics from analyzed feedback.",
    lesson_content: `## Aggregation

After analyzing each entry, **aggregate** results:

\`\`\`python
def aggregate(analyses):
    return {
        "total": len(analyses),
        "positive": sum(1 for a in analyses if a["sentiment"] == "positive"),
        "negative": sum(1 for a in analyses if a["sentiment"] == "negative"),
    }
\`\`\`

Reports need totals, averages, and breakdowns.`,
    starter_code: `def aggregate(analyses):\n    stats = {"total": len(analyses), "positive": 0, "negative": 0, "neutral": 0}\n    for a in analyses:\n        stats[a["sentiment"]] += 1\n    return stats\n\ndef format_summary(stats):\n    return f"Total: {stats['total']} | +{stats['positive']} -{stats['negative']} ~{stats['neutral']}"\n\nanalyses = [\n    {"sentiment": "positive"},\n    {"sentiment": "negative"},\n    {"sentiment": "positive"},\n    {"sentiment": "neutral"},\n]\nprint(format_summary(aggregate(analyses)))`,
    solution_code: `def aggregate(analyses):\n    stats = {"total": len(analyses), "positive": 0, "negative": 0, "neutral": 0}\n    for a in analyses:\n        stats[a["sentiment"]] += 1\n    return stats\n\ndef format_summary(stats):\n    return f"Total: {stats['total']} | +{stats['positive']} -{stats['negative']} ~{stats['neutral']}"\n\nanalyses = [\n    {"sentiment": "positive"},\n    {"sentiment": "negative"},\n    {"sentiment": "positive"},\n    {"sentiment": "neutral"},\n]\nprint(format_summary(aggregate(analyses)))`,
    validation_type: "contains",
    validation_pattern: "Total: 4",
    hints: ["aggregate counts each sentiment type.", "format_summary builds the display string."],
  },
  {
    slug: "week12-level8-debug-capstone",
    title: "Debug: Capstone Logic",
    phase: 3,
    day: 12,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix a bug in the feedback analyzer aggregation.",
    lesson_content: `## Debug the Analyzer

Common capstone bugs:
- Off-by-one in counters
- Wrong dict key access
- Forgetting to handle empty input

Fix this code to print \`Average score: 2.5\``,
    starter_code: `def average_score(scores):\n    if not scores:\n        return 0\n    total = 0\n    for s in scores:\n        total += s\n    # Bug: dividing by wrong value\n    return total / len(scores) - 1\n\nscores = [3, 2, 4, 1]\nprint(f"Average score: {average_score(scores)}")`,
    solution_code: `def average_score(scores):\n    if not scores:\n        return 0\n    total = 0\n    for s in scores:\n        total += s\n    return total / len(scores)\n\nscores = [3, 2, 4, 1]\nprint(f"Average score: {average_score(scores)}")`,
    validation_type: "contains",
    validation_pattern: "Average score: 2.5",
    hints: ["Average = total / len(scores).", "Remove the erroneous - 1."],
  },
  {
    slug: "week12-level9-quiz",
    title: "Week 12 Checkpoint",
    phase: 3,
    day: 12,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Report how many documents a compressor will pack.",
    lesson_content: `## Checkpoint

Write \`build_pack_report(filenames)\` that:
1. Counts how many document names you were given
2. Returns \`"DocPack: [n] files ready to compress"\`

Test with 3 file names.`,
    starter_code: `def build_pack_report(filenames):\n    # Return formatted report string\n    pass\n\nfiles = ["invoice.pdf", "notes.txt", "photo.jpg"]\nprint(build_pack_report(files))`,
    solution_code: `def build_pack_report(filenames):\n    count = len(filenames)\n    return f"DocPack: {count} files ready to compress"\n\nfiles = ["invoice.pdf", "notes.txt", "photo.jpg"]\nprint(build_pack_report(files))`,
    validation_type: "contains",
    validation_pattern: "3 files ready",
    hints: ["Use len(filenames) for count.", "Return an f-string with the count."],
  },
  {
    slug: "week12-level10-project",
    title: "Week 12 Capstone — DocPack Compressor",
    phase: 3,
    day: 12,
    index_in_day: 10,
    level_type: "project",
    summary: "Compress several in-memory documents, then ship the Streamlit app to GitHub.",
    lesson_content: `## Week 12 Capstone

Build **DocPack** — compress multiple documents so they take less space.

### In this editor

1. Put at least three documents in a dict: filename → text
2. Write them into a ZIP with \`zipfile.ZipFile\` and \`ZIP_DEFLATED\`
3. Print original byte size vs ZIP size
4. Print \`SHIP READY\`

The browser cannot read files from your disk. Pretend the dict **is** the upload folder. The shipped Streamlit app uses a real multi-file uploader.

### After it runs

Use the **SHIP THIS PROJECT** panel:

1. **Download ZIP** or **Push to my GitHub** (paste a token with \`repo\` scope — it is not stored)
2. On [Streamlit Community Cloud](https://share.streamlit.io) create an app: repo → \`compress_app.py\`
3. Upload real PDFs/photos and confirm the ZIP is smaller

### Laptop equivalent

\`\`\`python
with zipfile.ZipFile("docpack.zip", "w", compression=zipfile.ZIP_DEFLATED) as zf:
    for path in Path("inbox").iterdir():
        zf.write(path, arcname=path.name)
\`\`\``,
    starter_code: `import io\nimport zipfile\n\ndocs = {\n    "notes.txt": "Meeting notes\\n" * 40,\n    "report.txt": "Quarterly report draft\\n" * 80,\n    "todo.txt": "- invoice\\n- compress files\\n" * 20,\n}\n\n# Pack docs into an in-memory ZIP and compare sizes\n`,
    solution_code: `import io\nimport zipfile\n\ndocs = {\n    "notes.txt": "Meeting notes\\n" * 40,\n    "report.txt": "Quarterly report draft\\n" * 80,\n    "todo.txt": "- invoice\\n- compress files\\n" * 20,\n}\n\noriginal = sum(len(text.encode("utf-8")) for text in docs.values())\nbuf = io.BytesIO()\nwith zipfile.ZipFile(buf, "w", compression=zipfile.ZIP_DEFLATED) as archive:\n    for name, text in docs.items():\n        archive.writestr(name, text)\n\npacked = len(buf.getvalue())\nprint(f"Files: {len(docs)}")\nprint(f"Original: {original} bytes")\nprint(f"Compressed ZIP: {packed} bytes")\nprint("SHIP READY")`,
    validation_type: "contains",
    validation_pattern: "SHIP READY",
    hints: ["import io and zipfile.", "zipfile.ZipFile(buf, 'w', compression=zipfile.ZIP_DEFLATED).", "archive.writestr(name, text) for each document.", "Print SHIP READY when the size report is done."],
  },
];
