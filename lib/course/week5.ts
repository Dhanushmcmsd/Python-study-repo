import type { Level } from "../types";

export const WEEK5_LEVELS: Level[] = [
  // ── WEEK 5: File Handling, Regex & Data Formats ────────────────────
  {
    slug: "week5-level1-files-as-strings",
    title: "Files as Strings",
    phase: 2,
    day: 5,
    index_in_day: 1,
    level_type: "concept",
    summary: "Simulate file reading with multiline strings in the browser.",
    lesson_content: `## Working with File Data

In real Python, you use \`open()\` to read files. In this browser playground, we **simulate files** with multiline strings:

\`\`\`python
file_content = —"Line 1
Line 2
Line 3—"

lines = file_content.split("\\n")
for line in lines:
    print(line)
\`\`\`

### Why simulate?

- Pyodide runs in your browser — no access to your computer's files
- The **same logic** applies: read text, split into lines, process data
- When you move to real Python, just swap the string for \`open()\`

### Key string methods

| Method | Purpose |
|--------|---------|
| \`.split("\\n")\` | Split into lines |
| \`.split(",")\` | Split CSV rows |
| \`.strip()\` | Remove whitespace |

> Treat strings as your virtual files — the processing skills transfer directly!`,
    starter_code: `# Simulated file content\nlog_file = —"2026-01-15 INFO User logged in\n2026-01-15 ERROR Connection failed\n2026-01-15 INFO Report generated—"\n\nlines = log_file.split("\\n")\nprint(f"Total lines: {len(lines)}")\nfor line in lines:\n    print(line)`,
    solution_code: `log_file = —"2026-01-15 INFO User logged in\n2026-01-15 ERROR Connection failed\n2026-01-15 INFO Report generated—"\n\nlines = log_file.split("\\n")\nprint(f"Total lines: {len(lines)}")\nfor line in lines:\n    print(line)`,
    expected_output: "Total lines: 3\n2026-01-15 INFO User logged in\n2026-01-15 ERROR Connection failed\n2026-01-15 INFO Report generated",
    validation_type: "contains",
    validation_pattern: "Total lines: 3",
    hints: ["split('\\n') breaks text into lines.", "len(lines) counts how many lines.", "Each line is a string you can process."],
  },
  {
    slug: "week5-level2-read-lines",
    title: "Reading Simulated Files",
    phase: 2,
    day: 5,
    index_in_day: 2,
    level_type: "run",
    summary: "Parse line-by-line data from a multiline string.",
    lesson_content: `## Reading line by line

\`\`\`python
data = —"apple,10
banana,25
cherry,8—"

for line in data.split("\\n"):
    parts = line.split(",")
    fruit = parts[0]
    count = int(parts[1])
    print(f"{fruit}: {count}")
\`\`\`

This is exactly how you'd process a CSV file — one row at a time.

### Your task

Run the code and observe how each line becomes structured data.`,
    starter_code: `inventory = —"apple,10\nbanana,25\ncherry,8\nmango,15—"\n\ntotal_items = 0\nfor line in inventory.split("\\n"):\n    parts = line.split(",")\n    fruit = parts[0]\n    count = int(parts[1])\n    total_items = total_items + count\n    print(f"{fruit}: {count}")\n\nprint(f"---\\nTotal items: {total_items}")`,
    solution_code: `inventory = —"apple,10\nbanana,25\ncherry,8\nmango,15—"\n\ntotal_items = 0\nfor line in inventory.split("\\n"):\n    parts = line.split(",")\n    fruit = parts[0]\n    count = int(parts[1])\n    total_items = total_items + count\n    print(f"{fruit}: {count}")\n\nprint(f"---\\nTotal items: {total_items}")`,
    validation_type: "contains",
    validation_pattern: "Total items: 58",
    hints: ["split(',') separates CSV columns.", "int() converts text numbers to integers.", "Accumulate total_items in the loop."],
  },
  {
    slug: "week5-level3-write-string",
    title: "Writing to String Buffers",
    phase: 2,
    day: 5,
    index_in_day: 3,
    level_type: "modify",
    summary: "Build output text like writing to a file.",
    lesson_content: `## Simulating file writes

Instead of writing to disk, build a string that **represents** file content:

\`\`\`python
output = —
output = output + "Name,Score\\n"
output = output + "Alice,95\\n"
output = output + "Bob,87\\n"
print(output)
\`\`\`

Or use a list and join:
\`\`\`python
lines = ["Name,Score", "Alice,95", "Bob,87"]
output = "\\n".join(lines)
\`\`\`

### Your task

Complete the code to generate a CSV report from the scores dictionary.`,
    starter_code: `scores = {"Alice": 95, "Bob": 87, "Carol": 92}\n\n# Build CSV output\nlines = ["Name,Score"]\nfor name, score in scores.items():\n    # Add each row to lines\n    pass\n\noutput = "\\n".join(lines)\nprint(output)`,
    solution_code: `scores = {"Alice": 95, "Bob": 87, "Carol": 92}\n\nlines = ["Name,Score"]\nfor name, score in scores.items():\n    lines.append(f"{name},{score}")\n\noutput = "\\n".join(lines)\nprint(output)`,
    validation_type: "contains",
    validation_pattern: "Carol,92",
    hints: ["Use lines.append(f'{name},{score}')", "join combines lines with newlines.", "The header row is already in lines."],
  },
  {
    slug: "week5-level4-parse-log",
    title: "Parse a Log File",
    phase: 2,
    day: 5,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Extract and count ERROR lines from simulated log data.",
    lesson_content: `## Log parsing exercise

Given this simulated log file, count how many **ERROR** lines exist:

\`\`\`python
log = —"2026-01-15 INFO Started
2026-01-15 ERROR Disk full
2026-01-15 INFO Retrying
2026-01-15 ERROR Timeout—"
\`\`\`

Check if \`"ERROR"\` is in each line using \`"ERROR" in line\`.

### Your task

Print the error count and list each error message (the part after "ERROR ").`,
    starter_code: `log = —"2026-01-15 INFO Started\n2026-01-15 ERROR Disk full\n2026-01-15 INFO Retrying\n2026-01-15 ERROR Timeout\n2026-01-15 ERROR Network down\n2026-01-15 INFO Done—"\n\nerror_count = 0\n\nfor line in log.split("\\n"):\n    # Check for ERROR and extract message\n    pass\n\nprint(f"Errors found: {error_count}")`,
    solution_code: `log = —"2026-01-15 INFO Started\n2026-01-15 ERROR Disk full\n2026-01-15 INFO Retrying\n2026-01-15 ERROR Timeout\n2026-01-15 ERROR Network down\n2026-01-15 INFO Done—"\n\nerror_count = 0\n\nfor line in log.split("\\n"):\n    if "ERROR" in line:\n        error_count = error_count + 1\n        message = line.split("ERROR")[1].strip()\n        print(f"  - {message}")\n\nprint(f"Errors found: {error_count}")`,
    validation_type: "contains",
    validation_pattern: "Errors found: 3",
    hints: ['Use if "ERROR" in line:', "split('ERROR')[1] gets text after ERROR.", "strip() removes leading spaces."],
  },
  {
    slug: "week5-level5-csv-parsing",
    title: "CSV Parsing with split",
    phase: 2,
    day: 5,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Parse CSV data and calculate totals.",
    lesson_content: `## CSV format

CSV (Comma-Separated Values) is a common data format:

\`\`\`
product,price,quantity
Widget,9.99,100
Gadget,24.50,50
\`\`\`

Parse it with \`.split(",")\` — skip the header row!

### Your task

Calculate the total revenue (price × quantity) for all products.`,
    starter_code: `csv_data = —"product,price,quantity\nWidget,9.99,100\nGadget,24.50,50\nTool,15.00,75—"\n\nlines = csv_data.split("\\n")\nheader = lines[0]  # skip this\n\ntotal_revenue = 0\n\nfor line in lines[1:]:\n    # Parse price and quantity, add to total\n    pass\n\nprint(f"Total revenue: \${total_revenue:.2f}")`,
    solution_code: `csv_data = —"product,price,quantity\nWidget,9.99,100\nGadget,24.50,50\nTool,15.00,75—"\n\nlines = csv_data.split("\\n")\ntotal_revenue = 0\n\nfor line in lines[1:]:\n    parts = line.split(",")\n    price = float(parts[1])\n    quantity = int(parts[2])\n    total_revenue = total_revenue + (price * quantity)\n\nprint(f"Total revenue: \${total_revenue:.2f}")`,
    validation_type: "contains",
    validation_pattern: "Total revenue: $2749.00",
    hints: ["lines[1:] skips the header row.", "float() for prices, int() for quantities.", "Revenue = price * quantity for each row."],
  },
  {
    slug: "week5-level6-json-basics",
    title: "JSON with json Module",
    phase: 2,
    day: 5,
    index_in_day: 6,
    level_type: "run",
    summary: "Parse and create JSON data with json.loads and json.dumps.",
    lesson_content: `## JSON — JavaScript Object Notation

JSON is the standard format for APIs and config files:

\`\`\`python
import json

json_string = '{"name": "Alex", "age": 28}'
data = json.loads(json_string)  # string → Python dict
print(data["name"])

python_dict = {"city": "Mumbai", "country": "India"}
json_output = json.dumps(python_dict, indent=2)  # dict → string
print(json_output)
\`\`\`

| Function | Direction |
|----------|-----------|
| \`json.loads()\` | JSON string → Python |
| \`json.dumps()\` | Python → JSON string |

Run the code to see JSON in action!`,
    starter_code: `import json\n\n# JSON string → Python dict\nuser_json = '{"name": "Alex", "age": 28, "skills": ["Python", "SQL"]}'\nuser = json.loads(user_json)\n\nprint(f"Name: {user['name']}")\nprint(f"Skills: {user['skills']}")\n\n# Python dict → JSON string\nprofile = {"city": "Mumbai", "active": True}\noutput = json.dumps(profile, indent=2)\nprint(output)`,
    solution_code: `import json\n\nuser_json = '{"name": "Alex", "age": 28, "skills": ["Python", "SQL"]}'\nuser = json.loads(user_json)\n\nprint(f"Name: {user['name']}")\nprint(f"Skills: {user['skills']}")\n\nprofile = {"city": "Mumbai", "active": True}\noutput = json.dumps(profile, indent=2)\nprint(output)`,
    validation_type: "contains",
    validation_pattern: "Mumbai",
    hints: ["json.loads() parses a JSON string.", "Access dict values with ['key'].", "json.dumps() converts back to JSON text."],
  },
  {
    slug: "week5-level7-regex-basics",
    title: "Regex with re Module",
    phase: 2,
    day: 5,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Find patterns in text using regular expressions.",
    lesson_content: `## Regular Expressions

Regex finds **patterns** in text — emails, phone numbers, dates:

\`\`\`python
import re

text = "Contact: support@example.com or sales@company.org"
emails = re.findall(r'[\\w.]+@[\\w.]+', text)
print(emails)
\`\`\`

Common patterns:
- \`\\d+\` — one or more digits
- \`\\w+\` — word characters
- \`[\\w.]+@[\\w.]+\` — simple email pattern

### Your task

Find all dates in format YYYY-MM-DD from the log text.`,
    starter_code: `import re\n\nlog = —"2026-01-15 User login\n2026-01-16 Backup complete\n2026-02-01 System update\nNo date here\n2026-03-10 Report sent—"\n\n# Find all dates matching YYYY-MM-DD\n# Pattern hint: \\d{4}-\\d{2}-\\d{2}\ndates = \n\nprint(f"Dates found: {dates}")\nprint(f"Count: {len(dates)}")`,
    solution_code: `import re\n\nlog = —"2026-01-15 User login\n2026-01-16 Backup complete\n2026-02-01 System update\nNo date here\n2026-03-10 Report sent—"\n\ndates = re.findall(r'\\d{4}-\\d{2}-\\d{2}', log)\n\nprint(f"Dates found: {dates}")\nprint(f"Count: {len(dates)}")`,
    validation_type: "contains",
    validation_pattern: "Count: 4",
    hints: ["Use re.findall(pattern, text)", "Pattern \\d{4}-\\d{2}-\\d{2} matches dates.", "findall returns a list of all matches."],
  },
  {
    slug: "week5-level8-debug-data",
    title: "Debug Data Parsing",
    phase: 2,
    day: 5,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix CSV and JSON parsing bugs.",
    lesson_content: `## Debug: Data Formats

Common parsing bugs:
- Forgetting to skip CSV header row
- Using \`split()\` wrong (need comma, not space)
- Mixing up \`json.loads\` (parse) vs \`json.dumps\` (serialize)
- Not converting strings to numbers

### Your task

Fix the code to correctly parse the CSV and print total sales: 450`,
    starter_code: `csv = —"item,sales\nApple,150\nBanana,200\nCherry,100—"\n\ntotal = 0\nfor line in csv.split("\\n"):\n    parts = line.split(" ")\n    total = total + parts[1]\n\nprint(f"Total sales: {total}")`,
    solution_code: `csv = —"item,sales\nApple,150\nBanana,200\nCherry,100—"\n\ntotal = 0\nfor line in csv.split("\\n")[1:]:\n    parts = line.split(",")\n    total = total + int(parts[1])\n\nprint(f"Total sales: {total}")`,
    validation_type: "output",
    validation_pattern: "Total sales: 450",
    hints: ["Split by comma, not space.", "Skip header with [1:]", "Convert parts[1] to int before adding."],
  },
  {
    slug: "week5-level9-quiz",
    title: "Week 5 Checkpoint",
    phase: 2,
    day: 5,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Combine file simulation, JSON, and regex skills.",
    lesson_content: `## Week 5 Checkpoint

Given a JSON string of users, write code that:
1. Parses the JSON with \`json.loads()\`
2. Prints each user's name and email
3. Uses regex to verify emails contain "@"

\`\`\`python
data = '[{"name":"Alice","email":"alice@test.com"},{"name":"Bob","email":"bob@test.com"}]'
\`\`\`

Expected output includes "Alice: alice@test.com" and "Valid: True" for each.`,
    starter_code: `import json\nimport re\n\ndata = '[{"name":"Alice","email":"alice@test.com"},{"name":"Bob","email":"bob@test.com"}]'\n\nusers = json.loads(data)\n\nfor user in users:\n    # Print name and email\n    # Check if email is valid (contains @)\n    pass`,
    solution_code: `import json\nimport re\n\ndata = '[{"name":"Alice","email":"alice@test.com"},{"name":"Bob","email":"bob@test.com"}]'\n\nusers = json.loads(data)\n\nfor user in users:\n    name = user["name"]\n    email = user["email"]\n    valid = "@" in email\n    print(f"{name}: {email}")\n    print(f"Valid: {valid}")`,
    validation_type: "contains",
    validation_pattern: "Bob: bob@test.com",
    hints: ["json.loads(data) gives a list of dicts.", 'Access fields with user["name"].', 'Check "@" in email for validity.'],
  },
  {
    slug: "week5-level10-project",
    title: "Week 5 Project — Log Analyzer",
    phase: 2,
    day: 5,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a log analyzer using CSV, JSON, and regex.",
    lesson_content: `## Week 5 Project 🎯

Build a **Log Analyzer** that processes simulated server logs!

### Requirements

1. Parse the multiline log string (CSV-like: timestamp,level,message)
2. Count INFO, WARNING, and ERROR entries
3. Use regex to extract all IP addresses (pattern: \`\\d+\\.\\d+\\.\\d+\\.\\d+\`)
4. Output a JSON summary with json.dumps()
5. Print a formatted report

### Expected output format

\`\`\`
=== Log Analyzer Report ===
INFO: 2
WARNING: 1
ERROR: 1
IPs found: ['192.168.1.1', '10.0.0.5']
Summary JSON: {"total": 4, "errors": 1}
\`\`\``,
    starter_code: `import json\nimport re\n\nlog_data = —"2026-01-15,INFO,User login from 192.168.1.1\n2026-01-15,WARNING,High memory usage\n2026-01-15,ERROR,Connection refused from 10.0.0.5\n2026-01-15,INFO,Report generated—"\n\n# Count levels\ninfo_count = 0\nwarning_count = 0\nerror_count = 0\n\n# Your parsing logic here\n\n# Extract IPs with regex\n# Build and print JSON summary\n`,
    solution_code: `import json\nimport re\n\nlog_data = —"2026-01-15,INFO,User login from 192.168.1.1\n2026-01-15,WARNING,High memory usage\n2026-01-15,ERROR,Connection refused from 10.0.0.5\n2026-01-15,INFO,Report generated—"\n\ninfo_count = 0\nwarning_count = 0\nerror_count = 0\n\nfor line in log_data.split("\\n"):\n    parts = line.split(",")\n    level = parts[1]\n    if level == "INFO":\n        info_count = info_count + 1\n    elif level == "WARNING":\n        warning_count = warning_count + 1\n    elif level == "ERROR":\n        error_count = error_count + 1\n\nips = re.findall(r'\\d+\\.\\d+\\.\\d+\\.\\d+', log_data)\ntotal = info_count + warning_count + error_count\nsummary = {"total": total, "errors": error_count}\n\nprint("=== Log Analyzer Report ===")\nprint(f"INFO: {info_count}")\nprint(f"WARNING: {warning_count}")\nprint(f"ERROR: {error_count}")\nprint(f"IPs found: {ips}")\nprint(f"Summary JSON: {json.dumps(summary)}")`,
    validation_type: "contains",
    validation_pattern: "Log Analyzer Report",
    hints: ["Split each line by comma — level is parts[1].", "re.findall for IP pattern.", "json.dumps(summary) for the JSON output."],
  },
];
