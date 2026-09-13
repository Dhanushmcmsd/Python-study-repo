import type { Level } from "../types";

export const WEEK7_LEVELS: Level[] = [
  {
    slug: "week7-level1-scheduling-concepts",
    title: "Scheduling & Automation Concepts",
    phase: 2,
    day: 7,
    index_in_day: 1,
    level_type: "concept",
    summary: "Understand how scheduled tasks and automation jobs work.",
    lesson_content: `## Desktop & System Automation

Automation scripts often run **on a schedule** — daily reports, hourly syncs, weekly backups.

### Key concepts

| Concept | Meaning |
|---------|---------|
| **Task** | A unit of work (send email, copy files) |
| **Schedule** | When the task runs (every hour, at 9 AM) |
| **Job** | Task + schedule combined |
| **Log** | Record of what happened and when |

### Cron-style thinking

Even without real schedulers, you design jobs as data:

\`\`\`python
jobs = [
    {"name": "backup", "interval_minutes": 60},
    {"name": "report", "interval_minutes": 1440},
]
\`\`\`

### Pyodide note

In the browser we **simulate** scheduling with lists and loops — no real OS timers or file access.`,
    starter_code: `# Explore a simple job registry\njobs = [\n    {"name": "daily_report", "interval_minutes": 1440},\n    {"name": "health_check", "interval_minutes": 15},\n]\n\nprint("=== Registered Jobs ===")\nfor job in jobs:\n    print(f"{job['name']}: every {job['interval_minutes']} min")`,
    solution_code: `jobs = [\n    {"name": "daily_report", "interval_minutes": 1440},\n    {"name": "health_check", "interval_minutes": 15},\n]\n\nprint("=== Registered Jobs ===")\nfor job in jobs:\n    print(f"{job['name']}: every {job['interval_minutes']} min")`,
    expected_output: "=== Registered Jobs ===\ndaily_report: every 1440 min\nhealth_check: every 15 min",
    validation_type: "contains",
    validation_pattern: "Registered Jobs",
    hints: ["Run the code to see the job list.", "Each job is a dictionary with name and interval."],
  },
  {
    slug: "week7-level2-logging-timestamps",
    title: "Logging with Timestamps",
    phase: 2,
    day: 7,
    index_in_day: 2,
    level_type: "run",
    summary: "Print timestamped log messages for automation scripts.",
    lesson_content: `## Timestamped logging

Good automation scripts **log what they do**. A simple pattern:

\`\`\`python
from datetime import datetime

def log(message):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{ts}] {message}")
\`\`\`

Log levels help you filter output:

- \`INFO\` — normal progress
- \`WARN\` — something unusual
- \`ERROR\` — something failed

Run the example below to see timestamped logs in action.`,
    starter_code: `from datetime import datetime\n\ndef log(level, message):\n    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    print(f"[{ts}] {level}: {message}")\n\nlog("INFO", "Job started")\nlog("INFO", "Processing 3 records")\nlog("INFO", "Job finished")`,
    solution_code: `from datetime import datetime\n\ndef log(level, message):\n    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    print(f"[{ts}] {level}: {message}")\n\nlog("INFO", "Job started")\nlog("INFO", "Processing 3 records")\nlog("INFO", "Job finished")`,
    validation_type: "contains",
    validation_pattern: "Job finished",
    hints: ["Run to see live timestamps.", "strftime formats the datetime object."],
  },
  {
    slug: "week7-level3-modify-logs",
    title: "Improve Log Messages",
    phase: 2,
    day: 7,
    index_in_day: 3,
    level_type: "modify",
    summary: "Add timestamps and log levels to plain print statements.",
    lesson_content: `## Your task

The script below uses plain \`print()\` — hard to tell **when** things happened.

Modify it to use the \`log()\` helper so every line includes a timestamp and level.

Expected output format:
\`\`\`
[2026-01-15 09:00:00] INFO: Connecting to service
[2026-01-15 09:00:01] INFO: Connected
[2026-01-15 09:00:02] WARN: Retrying slow response
\`\`\`

(Your timestamps will show the actual current time.)`,
    starter_code: `from datetime import datetime\n\n# TODO: define log(level, message) here\n\nprint("Connecting to service")\nprint("Connected")\nprint("Retrying slow response")`,
    solution_code: `from datetime import datetime\n\ndef log(level, message):\n    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    print(f"[{ts}] {level}: {message}")\n\nlog("INFO", "Connecting to service")\nlog("INFO", "Connected")\nlog("WARN", "Retrying slow response")`,
    validation_type: "contains",
    validation_pattern: "WARN: Retrying",
    hints: ["Create log() with strftime for timestamps.", "Replace each print with log(level, message).", "Use INFO for normal lines, WARN for the retry."],
  },
  {
    slug: "week7-level4-task-schedule",
    title: "Build a Task Schedule",
    phase: 2,
    day: 7,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Create a list of scheduled tasks and print a run order.",
    lesson_content: `## Task schedules as data

Represent a day's automation plan as a list of dictionaries:

\`\`\`python
tasks = [
    {"time": "09:00", "action": "send_report"},
    {"time": "12:00", "action": "sync_data"},
]
\`\`\`

### Your task

1. Create a \`tasks\` list with 3 entries (times: 09:00, 12:00, 17:00)
2. Loop and print: \`Run at [time]: [action]\`
3. Use actions: \`backup_db\`, \`send_digest\`, \`cleanup_temp\``,
    starter_code: `# Create tasks list and print schedule\n\n`,
    solution_code: `tasks = [\n    {"time": "09:00", "action": "backup_db"},\n    {"time": "12:00", "action": "send_digest"},\n    {"time": "17:00", "action": "cleanup_temp"},\n]\n\nfor task in tasks:\n    print(f"Run at {task['time']}: {task['action']}")`,
    validation_type: "contains",
    validation_pattern: "Run at 17:00: cleanup_temp",
    hints: ["Each task is a dict with 'time' and 'action' keys.", "Use a for loop to iterate tasks.", "f-string: f\"Run at {task['time']}: {task['action']}\""],
  },
  {
    slug: "week7-level5-retry-loops",
    title: "Retry Loops for Reliability",
    phase: 2,
    day: 7,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Simulate retries when an operation fails.",
    lesson_content: `## Retry pattern

Network and system calls can fail. A **retry loop** tries again:

\`\`\`python
max_attempts = 3
for attempt in range(1, max_attempts + 1):
    success = simulate_call()  # returns True/False
    if success:
        break
\`\`\`

### Simulated failure

We simulate success on attempt 3:

\`\`\`python
def try_connect(attempt):
    return attempt >= 3
\`\`\`

### Your task

Loop up to 3 attempts. Print \`Attempt N: failed\` or \`Attempt N: success\`. Stop on success.`,
    starter_code: `def try_connect(attempt):\n    return attempt >= 3\n\nmax_attempts = 3\n# Write retry loop here\n`,
    solution_code: `def try_connect(attempt):\n    return attempt >= 3\n\nmax_attempts = 3\nfor attempt in range(1, max_attempts + 1):\n    if try_connect(attempt):\n        print(f"Attempt {attempt}: success")\n        break\n    else:\n        print(f"Attempt {attempt}: failed")`,
    expected_output: "Attempt 1: failed\nAttempt 2: failed\nAttempt 3: success",
    validation_type: "contains",
    validation_pattern: "Attempt 3: success",
    hints: ["Use range(1, max_attempts + 1).", "Call try_connect(attempt) inside the loop.", "break after printing success."],
  },
  {
    slug: "week7-level6-config-dicts",
    title: "Configuration Dictionaries",
    phase: 2,
    day: 7,
    index_in_day: 6,
    level_type: "run",
    summary: "Store automation settings in config dicts instead of hardcoding.",
    lesson_content: `## Config-driven automation

Hardcoding values makes scripts hard to change. Use a **config dict**:

\`\`\`python
config = {
    "app_name": "ReportBot",
    "max_retries": 3,
    "timeout_seconds": 30,
    "enabled": True,
}
\`\`\`

Access values with \`config["key"]\` or \`config.get("key", default)\`.

Run the example — it reads settings from config and prints a summary.`,
    starter_code: `config = {\n    "app_name": "ReportBot",\n    "max_retries": 3,\n    "timeout_seconds": 30,\n    "enabled": True,\n}\n\nprint(f"App: {config['app_name']}")\nprint(f"Retries: {config['max_retries']}")\nprint(f"Timeout: {config['timeout_seconds']}s")\nprint(f"Active: {config['enabled']}")`,
    solution_code: `config = {\n    "app_name": "ReportBot",\n    "max_retries": 3,\n    "timeout_seconds": 30,\n    "enabled": True,\n}\n\nprint(f"App: {config['app_name']}")\nprint(f"Retries: {config['max_retries']}")\nprint(f"Timeout: {config['timeout_seconds']}s")\nprint(f"Active: {config['enabled']}")`,
    validation_type: "contains",
    validation_pattern: "App: ReportBot",
    hints: ["Config keeps settings in one place.", "Change config values without editing logic."],
  },
  {
    slug: "week7-level7-config-and-retry",
    title: "Config + Retry Combined",
    phase: 2,
    day: 7,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Use config dict values to control a retry loop.",
    lesson_content: `## Config-driven retries

Read \`max_retries\` from config instead of hardcoding:

\`\`\`python
config = {"max_retries": 4, "job_name": "sync_files"}
\`\`\`

Simulate: operation succeeds when \`attempt >= 2\`.

### Your task

1. Loop using \`config["max_retries"]\`
2. Log each attempt with the job name from config
3. Print \`[job_name] Attempt N: OK\` on success, \`FAIL\` otherwise`,
    starter_code: `config = {"max_retries": 4, "job_name": "sync_files"}\n\ndef run_step(attempt):\n    return attempt >= 2\n\n# Your retry loop using config\n`,
    solution_code: `config = {"max_retries": 4, "job_name": "sync_files"}\n\ndef run_step(attempt):\n    return attempt >= 2\n\nfor attempt in range(1, config["max_retries"] + 1):\n    if run_step(attempt):\n        print(f"[{config['job_name']}] Attempt {attempt}: OK")\n        break\n    else:\n        print(f"[{config['job_name']}] Attempt {attempt}: FAIL")`,
    validation_type: "contains",
    validation_pattern: "[sync_files] Attempt 2: OK",
    hints: ["Use config['max_retries'] in range().", "Include config['job_name'] in each print.", "Break on OK."],
  },
  {
    slug: "week7-level8-debug-retry",
    title: "Debug: Retry Loop Errors",
    phase: 2,
    day: 7,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix bugs in a broken retry loop.",
    lesson_content: `## Debug: retry loops

Common retry bugs:
- Off-by-one in \`range()\`
- Forgetting \`break\` on success
- Wrong comparison operator

### Your task

Fix this code so it prints:
\`\`\`
try 1: no
try 2: no
try 3: yes
done
\`\`\``,
    starter_code: `def works(n):\n    return n == 3\n\nfor i in range(1, 3)\n    if works(i)\n        print(f"try {i}: yes")\n    else\n        print(f"try {i}: no")\nprint("done")`,
    solution_code: `def works(n):\n    return n == 3\n\nfor i in range(1, 4):\n    if works(i):\n        print(f"try {i}: yes")\n    else:\n        print(f"try {i}: no")\nprint("done")`,
    expected_output: "try 1: no\ntry 2: no\ntry 3: yes\ndone",
    validation_type: "contains",
    validation_pattern: "try 3: yes",
    hints: ["range(1, 4) gives 1, 2, 3.", "Add colons after for and if.", "Add colons after else."],
  },
  {
    slug: "week7-level9-quiz",
    title: "Week 7 Checkpoint",
    phase: 2,
    day: 7,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Combine logging, config, and scheduling concepts.",
    lesson_content: `## Week 7 Checkpoint

Write a script that:

1. Has \`config = {"job": "nightly_backup", "retries": 2}\`
2. Defines \`log(msg)\` that prints \`[LOG] msg\`
3. Loops \`retries\` times, logging \`Running [job] attempt N\`
4. After the loop, logs \`Complete\``,
    starter_code: `config = {"job": "nightly_backup", "retries": 2}\n\n# Define log() and run the job loop\n`,
    solution_code: `config = {"job": "nightly_backup", "retries": 2}\n\ndef log(msg):\n    print(f"[LOG] {msg}")\n\nfor attempt in range(1, config["retries"] + 1):\n    log(f"Running {config['job']} attempt {attempt}")\nlog("Complete")`,
    validation_type: "contains",
    validation_pattern: "[LOG] Complete",
    hints: ["log() wraps print with [LOG] prefix.", "Use config['retries'] for the loop range.", "Log Complete after the loop finishes."],
  },
  {
    slug: "week7-level10-project",
    title: "Week 7 Project — Job Runner",
    phase: 2,
    day: 7,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a mini automation job runner with config, logging, and retries.",
    lesson_content: `## Week 7 Project 🎯

Build a **Job Runner** that simulates desktop automation.

### Requirements

1. \`config\` dict: \`job_name\`, \`max_retries\`, \`tasks\` (list of 3 task names)
2. \`log(level, msg)\` — timestamped logs with INFO/WARN/ERROR
3. \`run_task(name)\` — returns \`False\` for \`"upload"\`, \`True\` otherwise
4. Retry loop for \`upload\` using \`max_retries\`
5. Run all tasks in order, logging each step

### Expected output includes

\`\`\`
=== Job Runner: daily_sync ===
[INFO] Starting task: fetch
[INFO] Starting task: upload
[WARN] upload failed, retrying...
[INFO] upload succeeded on attempt 2
[INFO] Starting task: notify
[INFO] All tasks complete
\`\`\``,
    starter_code: `from datetime import datetime\n\nconfig = {\n    "job_name": "daily_sync",\n    "max_retries": 3,\n    "tasks": ["fetch", "upload", "notify"],\n}\n\ndef log(level, msg):\n    pass\n\ndef run_task(name):\n    return name != "upload"\n\n# Build the job runner below\n`,
    solution_code: `from datetime import datetime\n\nconfig = {\n    "job_name": "daily_sync",\n    "max_retries": 3,\n    "tasks": ["fetch", "upload", "notify"],\n}\n\nupload_attempts = {"count": 0}\n\ndef log(level, msg):\n    ts = datetime.now().strftime("%H:%M:%S")\n    print(f"[{level}] {msg}")\n\ndef run_task(name):\n    if name == "upload":\n        upload_attempts["count"] += 1\n        return upload_attempts["count"] >= 2\n    return True\n\nprint(f"=== Job Runner: {config['job_name']} ===")\n\nfor task in config["tasks"]:\n    log("INFO", f"Starting task: {task}")\n    if task == "upload":\n        for attempt in range(1, config["max_retries"] + 1):\n            if run_task(task):\n                log("INFO", f"upload succeeded on attempt {attempt}")\n                break\n            else:\n                log("WARN", "upload failed, retrying...")\n    else:\n        run_task(task)\n\nlog("INFO", "All tasks complete")`,
    validation_type: "contains",
    validation_pattern: "All tasks complete",
    hints: ["Start with log() and the header print.", "Handle upload separately with a retry loop.", "Other tasks just call run_task once."],
  },
];
