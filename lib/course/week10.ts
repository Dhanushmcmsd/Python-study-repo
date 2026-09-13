import type { Level } from "../types";

export const WEEK10_LEVELS: Level[] = [
  {
    slug: "week10-level1-ai-pipelines",
    title: "AI-Driven Automation Pipelines",
    phase: 3,
    day: 10,
    index_in_day: 1,
    level_type: "concept",
    summary: "Understand how to chain steps into AI automation pipelines.",
    lesson_content: `## AI-Driven Automation

Real automation often follows a **pipeline** — data flows through steps, each transforming it:

\`\`\`
Document → Clean → Analyze → Extract → Report
\`\`\`

### Why simulate AI?

In this course we run Python in the browser (Pyodide). We **simulate** AI responses using dictionaries and strings — no network calls needed.

\`\`\`python
def simulate_ai(prompt):
    return {"response": "Summary: Meeting notes processed."}
\`\`\`

### Pipeline mindset

Each step is a **pure function**: input in, output out. Chain them together for powerful automation scripts.`,
    starter_code: `# AI pipeline preview — run to see the flow\n\ndef simulate_ai(text):\n    return {"summary": f"Processed {len(text)} chars"}\n\ndocument = "Quarterly sales report for Q3."\nresult = simulate_ai(document)\nprint(result["summary"])\nprint("Pipeline step complete ✓")`,
    solution_code: `def simulate_ai(text):\n    return {"summary": f"Processed {len(text)} chars"}\n\ndocument = "Quarterly sales report for Q3."\nresult = simulate_ai(document)\nprint(result["summary"])\nprint("Pipeline step complete ✓")`,
    expected_output: "Processed 32 chars\nPipeline step complete ✓",
    validation_type: "contains",
    validation_pattern: "Pipeline step complete",
    hints: ["Click Run to execute the pipeline preview.", "Each step returns data the next step can use."],
  },
  {
    slug: "week10-level2-simulated-ai",
    title: "Simulated AI Responses",
    phase: 3,
    day: 10,
    index_in_day: 2,
    level_type: "run",
    summary: "Return structured AI-like responses from a simulated function.",
    lesson_content: `## Simulating AI

Instead of calling a real API, we return **predictable dicts** that mimic AI output:

\`\`\`python
def ask_ai(question):
    responses = {
        "summarize": {"text": "Three key points found."},
        "extract": {"entities": ["Alice", "Project X"]},
    }
    return responses.get(question, {"text": "Unknown task"})
\`\`\`

This lets you build and test pipelines **offline** — the same pattern works when you swap in a real API later.`,
    starter_code: `def ask_ai(task, content):\n    if task == "summarize":\n        return {"summary": content[:30] + "..."}\n    return {"error": "Unknown task"}\n\ndoc = "Customer feedback: product quality improved significantly this quarter."\nresponse = ask_ai("summarize", doc)\nprint(response["summary"])\nprint("AI simulation ready")`,
    solution_code: `def ask_ai(task, content):\n    if task == "summarize":\n        return {"summary": content[:30] + "..."}\n    return {"error": "Unknown task"}\n\ndoc = "Customer feedback: product quality improved significantly this quarter."\nresponse = ask_ai("summarize", doc)\nprint(response["summary"])\nprint("AI simulation ready")`,
    validation_type: "contains",
    validation_pattern: "AI simulation ready",
    hints: ["Run the code to see the simulated summary.", "Dict keys let you access structured AI output."],
  },
  {
    slug: "week10-level3-pipeline-chaining",
    title: "Chaining Pipeline Steps",
    phase: 3,
    day: 10,
    index_in_day: 3,
    level_type: "modify",
    summary: "Connect two pipeline functions so output flows to input.",
    lesson_content: `## Chaining Steps

Pass the **output of step 1** into **step 2**:

\`\`\`python
def clean(text):
    return text.strip().lower()

def analyze(text):
    return {"word_count": len(text.split())}

raw = "  Hello World  "
cleaned = clean(raw)
result = analyze(cleaned)
\`\`\`

### Your task

Complete the chain: \`clean()\` → \`extract_keywords()\` → print the keywords list.`,
    starter_code: `def clean(text):\n    return text.strip().lower()\n\ndef extract_keywords(text):\n    words = text.split()\n    return [w for w in words if len(w) > 4]\n\nraw_doc = "  AUTOMATION scripts PROCESS documents efficiently  "\n\n# Chain: clean then extract keywords\nkeywords = \nprint(keywords)`,
    solution_code: `def clean(text):\n    return text.strip().lower()\n\ndef extract_keywords(text):\n    words = text.split()\n    return [w for w in words if len(w) > 4]\n\nraw_doc = "  AUTOMATION scripts PROCESS documents efficiently  "\ncleaned = clean(raw_doc)\nkeywords = extract_keywords(cleaned)\nprint(keywords)`,
    validation_type: "contains",
    validation_pattern: "automation",
    hints: ["First call clean(raw_doc), then pass result to extract_keywords.", "Store the final list in keywords."],
  },
  {
    slug: "week10-level4-feed-documents",
    title: "Feeding Documents to AI",
    phase: 3,
    day: 10,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Loop through documents and send each to a simulated AI.",
    lesson_content: `## Batch Document Processing

Automation scripts often process **many documents**:

\`\`\`python
documents = ["Report A", "Report B", "Report C"]

for doc in documents:
    result = simulate_ai(doc)
    print(result["status"])
\`\`\`

### Your task

Loop through 3 documents, call \`process_document()\` on each, and print the status.`,
    starter_code: `def process_document(text):\n    return {"status": "processed", "id": text[:8]}\n\ndocuments = [\n    "Invoice #1042 - Acme Corp",\n    "Invoice #1043 - Beta Ltd",\n    "Invoice #1044 - Gamma Inc",\n]\n\n# Process each document and print status\n`,
    solution_code: `def process_document(text):\n    return {"status": "processed", "id": text[:8]}\n\ndocuments = [\n    "Invoice #1042 - Acme Corp",\n    "Invoice #1043 - Beta Ltd",\n    "Invoice #1044 - Gamma Inc",\n]\n\nfor doc in documents:\n    result = process_document(doc)\n    print(f"{result['id']}: {result['status']}")`,
    validation_type: "contains",
    validation_pattern: "Gamma Inc",
    hints: ["Use a for loop over documents.", "Access result['status'] and result['id'] in your print."],
  },
  {
    slug: "week10-level5-structured-extraction",
    title: "Structured Extraction",
    phase: 3,
    day: 10,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Parse simulated AI output into structured fields.",
    lesson_content: `## Structured Extraction

AI responses often return **structured data** you can parse:

\`\`\`python
ai_response = {
    "title": "Bug Report",
    "priority": "high",
    "assignee": "dev-team"
}

print(f"Priority: {ai_response['priority']}")
\`\`\`

### Your task

Write \`extract_fields()\` that takes a simulated AI dict and returns a formatted string:
\`"Title: [title] | Priority: [priority]"\``,
    starter_code: `def simulate_extract(text):\n    return {"title": "Login issue", "priority": "high", "source": text}\n\ndef extract_fields(ai_response):\n    # Return formatted string\n    pass\n\nresponse = simulate_extract("User cannot log in after update")\nprint(extract_fields(response))`,
    solution_code: `def simulate_extract(text):\n    return {"title": "Login issue", "priority": "high", "source": text}\n\ndef extract_fields(ai_response):\n    return f"Title: {ai_response['title']} | Priority: {ai_response['priority']}"\n\nresponse = simulate_extract("User cannot log in after update")\nprint(extract_fields(response))`,
    validation_type: "contains",
    validation_pattern: "Title: Login issue",
    hints: ["Use an f-string with ai_response['title'] and ai_response['priority'].", "Return the string from extract_fields."],
  },
  {
    slug: "week10-level6-multi-step-pipeline",
    title: "Multi-Step Pipeline",
    phase: 3,
    day: 10,
    index_in_day: 6,
    level_type: "exercise",
    summary: "Build a three-step document processing pipeline.",
    lesson_content: `## Multi-Step Pipelines

Combine cleaning, AI analysis, and formatting:

\`\`\`python
def pipeline(doc):
    cleaned = clean(doc)
    analyzed = simulate_ai(cleaned)
    return format_report(analyzed)
\`\`\`

Each step has one job. The pipeline orchestrates them.`,
    starter_code: `def clean(text):\n    return " ".join(text.split())\n\ndef simulate_ai(text):\n    return {"sentiment": "positive" if "great" in text.lower() else "neutral"}\n\ndef format_report(data):\n    return f"Sentiment: {data['sentiment']}"\n\ndef run_pipeline(document):\n    # Chain all three steps and return final report\n    pass\n\ndoc = "This product is great and works well"\nprint(run_pipeline(doc))`,
    solution_code: `def clean(text):\n    return " ".join(text.split())\n\ndef simulate_ai(text):\n    return {"sentiment": "positive" if "great" in text.lower() else "neutral"}\n\ndef format_report(data):\n    return f"Sentiment: {data['sentiment']}"\n\ndef run_pipeline(document):\n    cleaned = clean(document)\n    analyzed = simulate_ai(cleaned)\n    return format_report(analyzed)\n\ndoc = "This product is great and works well"\nprint(run_pipeline(doc))`,
    validation_type: "contains",
    validation_pattern: "Sentiment: positive",
    hints: ["Call clean, then simulate_ai, then format_report in order.", "Return the string from format_report."],
  },
  {
    slug: "week10-level7-prompt-templates",
    title: "Prompt Templates",
    phase: 3,
    day: 10,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Use reusable prompt templates for consistent AI requests.",
    lesson_content: `## Prompt Templates

Templates keep prompts **consistent and reusable**:

\`\`\`python
TEMPLATE = "Summarize the following in {max_words} words:\\n{text}"

def build_prompt(text, max_words=50):
    return TEMPLATE.format(text=text, max_words=max_words)
\`\`\`

In production, this template goes to a real AI API. Here we simulate the response.`,
    starter_code: `TEMPLATE = "Extract action items from:\\n{text}"\n\ndef build_prompt(text):\n    return TEMPLATE.format(text=text)\n\ndef simulate_ai(prompt):\n    if "meeting" in prompt.lower():\n        return {"actions": ["Send recap", "Schedule follow-up"]}\n    return {"actions": []}\n\nnotes = "Team meeting: finalize budget and send recap email"\nprompt = build_prompt(notes)\nresult = simulate_ai(prompt)\nprint(result["actions"])`,
    solution_code: `TEMPLATE = "Extract action items from:\\n{text}"\n\ndef build_prompt(text):\n    return TEMPLATE.format(text=text)\n\ndef simulate_ai(prompt):\n    if "meeting" in prompt.lower():\n        return {"actions": ["Send recap", "Schedule follow-up"]}\n    return {"actions": []}\n\nnotes = "Team meeting: finalize budget and send recap email"\nprompt = build_prompt(notes)\nresult = simulate_ai(prompt)\nprint(result["actions"])`,
    validation_type: "contains",
    validation_pattern: "Send recap",
    hints: ["build_prompt uses TEMPLATE.format.", "The simulated AI returns a list under 'actions'."],
  },
  {
    slug: "week10-level8-debug-pipeline",
    title: "Debug: Pipeline Errors",
    phase: 3,
    day: 10,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix a broken pipeline chain that drops data between steps.",
    lesson_content: `## Debug Pipelines

Common pipeline bugs:
- Forgetting to **return** values from a step
- Passing wrong variable between steps
- Accessing wrong dict key from AI response

Fix this code so it prints \`Extracted: 3 items\``,
    starter_code: `def simulate_ai(text):\n    return {"items": text.split(",")}\n\ndef count_items(ai_result):\n    items = ai_result["items"]\n    # Bug: missing return\n    len(items)\n\ndata = "apple,banana,cherry"\nresult = simulate_ai(data)\ncount = count_items(result)\nprint(f"Extracted: {count} items")`,
    solution_code: `def simulate_ai(text):\n    return {"items": text.split(",")}\n\ndef count_items(ai_result):\n    items = ai_result["items"]\n    return len(items)\n\ndata = "apple,banana,cherry"\nresult = simulate_ai(data)\ncount = count_items(result)\nprint(f"Extracted: {count} items")`,
    validation_type: "contains",
    validation_pattern: "Extracted: 3 items",
    hints: ["count_items must return the length.", "Without return, count will be None."],
  },
  {
    slug: "week10-level9-quiz",
    title: "Week 10 Checkpoint",
    phase: 3,
    day: 10,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Quiz on pipelines and structured AI extraction.",
    lesson_content: `## Checkpoint

Build a mini pipeline:
1. \`normalize(text)\` — strip whitespace and lowercase
2. \`classify(text)\` — return \`{"category": "urgent"}\` if "urgent" in text, else \`{"category": "normal"}\`
3. Print the category for: \`"  URGENT: Server down  "\``,
    starter_code: `def normalize(text):\n    return text.strip().lower()\n\ndef classify(text):\n    if "urgent" in text:\n        return {"category": "urgent"}\n    return {"category": "normal"}\n\nmessage = "  URGENT: Server down  "\n# Run pipeline and print category\n`,
    solution_code: `def normalize(text):\n    return text.strip().lower()\n\ndef classify(text):\n    if "urgent" in text:\n        return {"category": "urgent"}\n    return {"category": "normal"}\n\nmessage = "  URGENT: Server down  "\ncleaned = normalize(message)\nresult = classify(cleaned)\nprint(result["category"])`,
    validation_type: "output",
    validation_pattern: "urgent",
    hints: ["Normalize first, then classify.", "Print result['category']."],
  },
  {
    slug: "week10-level10-project",
    title: "Week 10 Project — Document AI Pipeline",
    phase: 3,
    day: 10,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a complete document-to-report AI automation pipeline.",
    lesson_content: `## Week 10 Project 🎯

Build a **Document AI Pipeline** that processes feedback documents.

### Requirements

1. \`clean_document(text)\` — normalize whitespace
2. \`simulate_ai_analyze(text)\` — return \`{"topic": "billing", "sentiment": "negative"}\` if "refund" in text, else \`{"topic": "general", "sentiment": "positive"}\`
3. \`generate_report(doc_id, analysis)\` — return \`"Doc [id]: [topic] | [sentiment]"\`
4. Process 2 documents and print each report

### Test documents

- \`"Doc1: I need a refund for my order"\`
- \`"Doc2: Great service, thank you"\`

### Expected output contains

\`Doc 1: billing | negative\` and \`Doc 2: general | positive\``,
    starter_code: `def clean_document(text):\n    pass\n\ndef simulate_ai_analyze(text):\n    pass\n\ndef generate_report(doc_id, analysis):\n    pass\n\ndocuments = [\n    (1, "Doc1: I need a refund for my order"),\n    (2, "Doc2: Great service, thank you"),\n]\n\n# Process all documents\n`,
    solution_code: `def clean_document(text):\n    return " ".join(text.split())\n\ndef simulate_ai_analyze(text):\n    if "refund" in text.lower():\n        return {"topic": "billing", "sentiment": "negative"}\n    return {"topic": "general", "sentiment": "positive"}\n\ndef generate_report(doc_id, analysis):\n    return f"Doc {doc_id}: {analysis['topic']} | {analysis['sentiment']}"\n\ndocuments = [\n    (1, "Doc1: I need a refund for my order"),\n    (2, "Doc2: Great service, thank you"),\n]\n\nfor doc_id, text in documents:\n    cleaned = clean_document(text)\n    analysis = simulate_ai_analyze(cleaned)\n    print(generate_report(doc_id, analysis))`,
    validation_type: "contains",
    validation_pattern: "billing | negative",
    hints: ["Build each function separately and test.", "Loop over documents tuple (id, text).", "Check for 'refund' to detect billing topic."],
  },
];
