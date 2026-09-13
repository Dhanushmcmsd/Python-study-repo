import type { Level } from "../types";

export const WEEK9_LEVELS: Level[] = [
  {
    slug: "week9-level1-prompt-structure",
    title: "Prompt Structure Basics",
    phase: 3,
    day: 9,
    index_in_day: 1,
    level_type: "concept",
    summary: "Learn the anatomy of effective AI prompts.",
    lesson_content: `## AI Prompt Engineering

When calling AI APIs, your **prompt** determines the quality of results.

### Prompt anatomy

| Part | Purpose | Example |
|------|---------|---------|
| **Role** | Who the AI should act as | "You are a support classifier." |
| **Task** | What to do | "Classify the message as billing or tech." |
| **Format** | Output shape | "Reply with JSON: {category, confidence}" |
| **Input** | The data to process | "Message: I was charged twice." |

### Good prompt template

\`\`\`python
prompt = f"""Role: {role}
Task: {task}
Format: {output_format}

Input: {user_text}
"""
\`\`\`

In this course we **simulate** AI responses with Python logic — same patterns, no network calls.`,
    starter_code: `role = "You are a helpful classifier."\ntask = "Label the text as positive or negative."\noutput_format = '{"sentiment": "positive|negative"}'\nuser_text = "I love this product!"\n\nprompt = f"""Role: {role}\nTask: {task}\nFormat: {output_format}\n\nInput: {user_text}\n"""\n\nprint("=== Generated Prompt ===")\nprint(prompt)`,
    solution_code: `role = "You are a helpful classifier."\ntask = "Label the text as positive or negative."\noutput_format = '{"sentiment": "positive|negative"}'\nuser_text = "I love this product!"\n\nprompt = f"""Role: {role}\nTask: {task}\nFormat: {output_format}\n\nInput: {user_text}\n"""\n\nprint("=== Generated Prompt ===")\nprint(prompt)`,
    validation_type: "contains",
    validation_pattern: "Generated Prompt",
    hints: ["Run to see the full prompt structure.", "Each section guides the AI clearly."],
  },
  {
    slug: "week9-level2-build-prompt",
    title: "Build a Structured Prompt",
    phase: 3,
    day: 9,
    index_in_day: 2,
    level_type: "run",
    summary: "Assemble a multi-section prompt from variables.",
    lesson_content: `## Building prompts programmatically

Automation builds prompts from data:

\`\`\`python
def build_prompt(role, task, fmt, text):
    return f"Role: {role}\\nTask: {task}\\nFormat: {fmt}\\n\\nInput: {text}"
\`\`\`

Run the example — it builds a support-ticket classifier prompt.`,
    starter_code: `def build_prompt(role, task, fmt, text):\n    return f"""Role: {role}\nTask: {task}\nFormat: {fmt}\n\nInput: {text}\n"""\n\nprompt = build_prompt(\n    role="Support ticket classifier",\n    task="Choose billing, technical, or other",\n    fmt='{"category": "..."}',\n    text="My payment failed but I was charged.",\n)\n\nprint(prompt)`,
    solution_code: `def build_prompt(role, task, fmt, text):\n    return f"""Role: {role}\nTask: {task}\nFormat: {fmt}\n\nInput: {text}\n"""\n\nprompt = build_prompt(\n    role="Support ticket classifier",\n    task="Choose billing, technical, or other",\n    fmt='{"category": "..."}',\n    text="My payment failed but I was charged.",\n)\n\nprint(prompt)`,
    validation_type: "contains",
    validation_pattern: "payment failed",
    hints: ["build_prompt combines all sections.", "Run to inspect the full prompt."],
  },
  {
    slug: "week9-level3-modify-prompt",
    title: "Improve a Weak Prompt",
    phase: 3,
    day: 9,
    index_in_day: 3,
    level_type: "modify",
    summary: "Add role, format, and examples to a minimal prompt.",
    lesson_content: `## Your task

The prompt below is too vague. Improve it by adding:

1. A **Role** line: \`Role: Sentiment analyst\`
2. A **Format** line: \`Format: {"sentiment": "positive|negative"}\`
3. Keep the input text at the end

Print the improved prompt.`,
    starter_code: `text = "The delivery was late and the box was damaged."\n\n# Too vague — improve this prompt\nprompt = f"Classify this: {text}"\n\nprint(prompt)`,
    solution_code: `text = "The delivery was late and the box was damaged."\n\nprompt = f"""Role: Sentiment analyst\nTask: Classify sentiment as positive or negative\nFormat: {{"sentiment": "positive|negative"}}\n\nInput: {text}\n"""\n\nprint(prompt)`,
    validation_type: "contains",
    validation_pattern: "Sentiment analyst",
    hints: ["Use a multi-line f-string.", "Include Role, Task, Format sections.", "End with Input: {text}."],
  },
  {
    slug: "week9-level4-json-parsing",
    title: "Parse JSON Responses",
    phase: 3,
    day: 9,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Parse simulated AI JSON responses with json.loads.",
    lesson_content: `## JSON response parsing

AI APIs often return JSON strings:

\`\`\`python
import json

response = '{"category": "billing", "confidence": 0.92}'
data = json.loads(response)
print(data["category"])
\`\`\`

### Your task

Parse \`ai_response\` and print:
\`\`\`
Category: technical
Confidence: 0.85
\`\`\``,
    starter_code: `import json\n\nai_response = '{"category": "technical", "confidence": 0.85}'\n\n# Parse and print category and confidence\n`,
    solution_code: `import json\n\nai_response = '{"category": "technical", "confidence": 0.85}'\n\ndata = json.loads(ai_response)\nprint(f"Category: {data['category']}")\nprint(f"Confidence: {data['confidence']}")`,
    validation_type: "contains",
    validation_pattern: "Category: technical",
    hints: ["json.loads() converts string to dict.", "Access keys with data['category'].", "Use f-strings for output."],
  },
  {
    slug: "week9-level5-simulated-classifier",
    title: "Simulated AI Classification",
    phase: 3,
    day: 9,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Simulate AI text classification with keyword rules.",
    lesson_content: `## Simulated classifier

Without real API calls, simulate classification with rules:

\`\`\`python
def classify(text):
    text_lower = text.lower()
    if "refund" in text_lower or "charge" in text_lower:
        return "billing"
    if "error" in text_lower or "bug" in text_lower:
        return "technical"
    return "other"
\`\`\`

Return JSON string matching API format:

\`\`\`python
import json
result = json.dumps({"category": classify(text), "confidence": 0.9})
\`\`\`

### Your task

Implement \`classify()\` and print JSON for the sample message.`,
    starter_code: `import json\n\ndef classify(text):\n    # Return billing, technical, or other\n    pass\n\nmessage = "I need a refund for order 4421"\n# Print JSON result\n`,
    solution_code: `import json\n\ndef classify(text):\n    text_lower = text.lower()\n    if "refund" in text_lower or "charge" in text_lower:\n        return "billing"\n    if "error" in text_lower or "bug" in text_lower:\n        return "technical"\n    return "other"\n\nmessage = "I need a refund for order 4421"\nresult = json.dumps({"category": classify(message), "confidence": 0.9})\nprint(result)`,
    validation_type: "contains",
    validation_pattern: '"category": "billing"',
    hints: ["Check for keywords in text.lower().", "json.dumps creates a JSON string.", "refund → billing."],
  },
  {
    slug: "week9-level6-classification-demo",
    title: "Batch Classification Demo",
    phase: 3,
    day: 9,
    index_in_day: 6,
    level_type: "run",
    summary: "Classify multiple messages and collect results.",
    lesson_content: `## Batch processing

Production systems classify many messages in a loop:

\`\`\`python
messages = ["...", "..."]
results = []
for msg in messages:
    results.append(classify(msg))
\`\`\`

Run the demo — it classifies 3 support messages and prints each result.`,
    starter_code: `import json\n\ndef classify(text):\n    t = text.lower()\n    if "refund" in t or "bill" in t:\n        return "billing"\n    if "error" in t or "crash" in t:\n        return "technical"\n    return "other"\n\nmessages = [\n    "Please refund my subscription",\n    "The app crashes on login",\n    "What are your hours?",\n]\n\nfor msg in messages:\n    cat = classify(msg)\n    print(f"{cat}: {msg[:30]}...")`,
    solution_code: `import json\n\ndef classify(text):\n    t = text.lower()\n    if "refund" in t or "bill" in t:\n        return "billing"\n    if "error" in t or "crash" in t:\n        return "technical"\n    return "other"\n\nmessages = [\n    "Please refund my subscription",\n    "The app crashes on login",\n    "What are your hours?",\n]\n\nfor msg in messages:\n    cat = classify(msg)\n    print(f"{cat}: {msg[:30]}...")`,
    validation_type: "contains",
    validation_pattern: "billing: Please refund",
    hints: ["Each message gets a category.", "msg[:30] shows first 30 characters."],
  },
  {
    slug: "week9-level7-prompt-and-classify",
    title: "Prompt + Classify Pipeline",
    phase: 3,
    day: 9,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Build a prompt, simulate classification, and parse the JSON output.",
    lesson_content: `## Full mini-pipeline

1. Build prompt with \`build_prompt()\`
2. Simulate AI with \`simulate_ai(prompt)\` returning JSON string
3. Parse with \`json.loads()\` and print category

### Your task

Complete the pipeline for the given message. Print:
\`Result: billing\``,
    starter_code: `import json\n\ndef build_prompt(text):\n    return f"Role: Classifier\\nInput: {text}"\n\ndef simulate_ai(prompt):\n    text = prompt.split("Input: ")[1]\n    if "refund" in text.lower():\n        return '{"category": "billing"}'\n    return '{"category": "other"}'\n\nmessage = "I want a refund please"\n\n# Build prompt, call simulate_ai, parse, print Result\n`,
    solution_code: `import json\n\ndef build_prompt(text):\n    return f"Role: Classifier\\nInput: {text}"\n\ndef simulate_ai(prompt):\n    text = prompt.split("Input: ")[1]\n    if "refund" in text.lower():\n        return '{"category": "billing"}'\n    return '{"category": "other"}'\n\nmessage = "I want a refund please"\n\nprompt = build_prompt(message)\nresponse = simulate_ai(prompt)\ndata = json.loads(response)\nprint(f"Result: {data['category']}")`,
    validation_type: "contains",
    validation_pattern: "Result: billing",
    hints: ["Chain: build_prompt → simulate_ai → json.loads.", "Extract category from parsed dict.", "Message contains refund → billing."],
  },
  {
    slug: "week9-level8-debug-json",
    title: "Debug: JSON Parsing",
    phase: 3,
    day: 9,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix bugs in JSON response handling.",
    lesson_content: `## Debug JSON parsing

Common JSON bugs:
- Using single quotes in JSON strings (invalid JSON)
- Forgetting \`json.loads()\` — treating string as dict
- Wrong key names

Fix this code to print:
\`\`\`
Label: spam
Score: 0.95
\`\`\``,
    starter_code: `import json\n\nresponse = "{'label': 'spam', 'score': 0.95}"\n\ndata = response\nprint(f"Label: {data['label']}")\nprint(f"Score: {data['score']}")`,
    solution_code: `import json\n\nresponse = '{"label": "spam", "score": 0.95}'\n\ndata = json.loads(response)\nprint(f"Label: {data['label']}")\nprint(f"Score: {data['score']}")`,
    validation_type: "contains",
    validation_pattern: "Label: spam",
    hints: ["JSON requires double quotes.", "Use json.loads(response) not raw string.", "Fix the response string quotes."],
  },
  {
    slug: "week9-level9-quiz",
    title: "Week 9 Checkpoint",
    phase: 3,
    day: 9,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Build a prompt, classify text, and output JSON.",
    lesson_content: `## Week 9 Checkpoint

For message \`"The server returns a 500 error"\`:

1. Build prompt: \`Classify: [message]\`
2. Classify as \`technical\` if "error" in message (case-insensitive)
3. Print JSON: \`{"category": "technical", "prompt_used": true}\``,
    starter_code: `import json\n\nmessage = "The server returns a 500 error"\n\n# Build prompt, classify, print JSON\n`,
    solution_code: `import json\n\nmessage = "The server returns a 500 error"\n\nprompt = f"Classify: {message}"\ncategory = "technical" if "error" in message.lower() else "other"\nresult = json.dumps({"category": category, "prompt_used": True})\nprint(result)`,
    validation_type: "contains",
    validation_pattern: '"category": "technical"',
    hints: ["Check 'error' in message.lower().", "json.dumps for output.", "Include prompt_used: True."],
  },
  {
    slug: "week9-level10-project",
    title: "Week 9 Project — AI Ticket Router",
    phase: 3,
    day: 9,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a support ticket router with prompts, classification, and JSON output.",
    lesson_content: `## Week 9 Project 🎯

Build an **AI Ticket Router** that processes a list of support messages.

### Requirements

1. \`build_prompt(text)\` — returns structured prompt with Role, Task, Format, Input
2. \`classify(text)\` — returns \`billing\`, \`technical\`, or \`other\` using keywords
3. Loop through \`tickets\`, build prompt, classify, collect JSON results
4. Print summary: count per category

### Keywords

- billing: refund, charge, bill, payment
- technical: error, bug, crash, server
- other: everything else

### Expected output includes

\`\`\`
=== Ticket Router ===
billing: 2
technical: 1
other: 1
Done
\`\`\``,
    starter_code: `import json\n\ntickets = [\n    "I was charged twice for my plan",\n    "Login page shows a 500 error",\n    "Can I get a refund?",\n    "What are your business hours?",\n]\n\ndef build_prompt(text):\n    pass\n\ndef classify(text):\n    pass\n\n# Process tickets and print summary\n`,
    solution_code: `import json\n\ntickets = [\n    "I was charged twice for my plan",\n    "Login page shows a 500 error",\n    "Can I get a refund?",\n    "What are your business hours?",\n]\n\ndef build_prompt(text):\n    return f"""Role: Support classifier\nTask: Route to billing, technical, or other\nFormat: {{"category": "..."}}\n\nInput: {text}\n"""\n\ndef classify(text):\n    t = text.lower()\n    if any(w in t for w in ["refund", "charge", "bill", "payment"]):\n        return "billing"\n    if any(w in t for w in ["error", "bug", "crash", "server"]):\n        return "technical"\n    return "other"\n\nprint("=== Ticket Router ===")\ncounts = {"billing": 0, "technical": 0, "other": 0}\n\nfor ticket in tickets:\n    prompt = build_prompt(ticket)\n    category = classify(ticket)\n    counts[category] += 1\n\nfor cat, n in counts.items():\n    print(f"{cat}: {n}")\nprint("Done")`,
    validation_type: "contains",
    validation_pattern: "Done",
    hints: ["Use a counts dict to track categories.", "any(w in t for w in list) checks keywords.", "Print each category count then Done."],
  },
];
