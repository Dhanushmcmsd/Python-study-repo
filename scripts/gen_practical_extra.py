"""Generate lib/course/practicalTasksExtra.ts with weeks 2-12 specs."""
from pathlib import Path
import textwrap

GIT = """### Git workflow (local)
```bash
git init
git add .
git commit -m "Day implementation"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```
Token stays in this browser only if you use Push below — never commit secrets."""

def ts(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

def spec(**kw):
    return kw

# Compact week definitions: list of 5 day specs per week (weeks 2-12)
WEEKS = []

# Week 2 - expenses.csv focus
WEEKS.append([
  ("Flag overdue expenses", "expenses.csv", "OVERDUE:", True, "expenses.csv",
   'rows = FILE_TEXT.strip().split("\\n")[1:]\nfor row in rows:\n    item, amount = row.split(",")\n    if float(amount) > 100:\n        print(f"OVERDUE: {item}")\nprint("PROCESSED OK")'),
  ("Categorize expense types", "expenses.csv", "PROCESSED OK", True, "expenses.csv",
   'rows = FILE_TEXT.strip().split("\\n")[1:]\nfor row in rows:\n    item, amount = row.split(",")\n    tag = "travel" if "taxi" in item or "flight" in item else "food" if "lunch" in item or "coffee" in item else "other"\n    print(f"{item}: {tag}")\nprint("PROCESSED OK")'),
  ("Sum expenses with a loop", "expenses.csv", "TOTAL:", True, "expenses.csv",
   'total = 0\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    _, amount = row.split(",")\n    total = total + float(amount)\nprint(f"TOTAL: {total:.2f}")\nprint("PROCESSED OK")'),
  ("Filter high-value rows", "expenses.csv", "Matched:", True, "expenses.csv",
   'count = 0\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    item, amount = row.split(",")\n    if float(amount) > 50:\n        print(f"FILTER: {item}")\n        count = count + 1\nprint(f"Matched: {count}")\nprint("PROCESSED OK")'),
  ("Expense tracker from your CSV", "expenses.csv", "HIGHEST:", True, "expenses.csv",
   'total = 0\nbest_item = ""\nbest = 0\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    item, amount = row.split(",")\n    val = float(amount)\n    total = total + val\n    if val > best:\n        best = val\n        best_item = item\nprint(f"TOTAL: {total:.2f}")\nprint(f"HIGHEST: {best_item}")\nprint("PROCESSED OK")', True),
])

# I'll generate remaining weeks in the output file directly with a simpler template loop

lines = ['import type { PracticalTask } from "../practicalTask";', '', 'type DaySpec = Omit<PracticalTask, "day" | "week">;', '', 'function file(name: string): PracticalTask["exampleFile"] {', '  return { name, path: `/examples/${name}` };', '}', '']

def emit_week(specs):
    lines.append('[')
    for i, s in enumerate(specs):
        title, scenario, rwu, reqs, edges, exfile, own, hint, code, val, git = s
        ex = f'file("{exfile}")' if exfile else 'undefined'
        gitline = f'gitNotes: GIT_BASE,' if git else ''
        block = f'''  {{
    title: "{title}",
    scenario: "{scenario}",
    realWorldUse: "{rwu}",
    requirements: {json_reqs(reqs)},
    edgeCases: {json_reqs(edges)},
    exampleFile: {ex},
    acceptsOwnFile: {str(own).lower()},
    ownFileHint: "{hint}",
    starterCode: `{code}`,
    solutionCode: `{code}`,
    validationPattern: "{val}",
    {gitline}
  }}'''
        lines.append(block + (',' if i < len(specs)-1 else ''))
    lines.append('],')

def json_reqs(arr):
    return '[' + ', '.join(f'"{x}"' for x in arr) + ']'

# Build all weeks 2-12 programmatically
extra_weeks = []

# Helper to make a file-based task
def ft(title, scenario, rwu, file_name, val, code, hint, git=False):
    return (title, scenario, rwu,
            ["Use FILE_TEXT from download or upload", f"Print {val.split(':')[0] if ':' in val else val}", "Print PROCESSED OK"],
            ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
            file_name, True, hint, code, val, git)

# Week 2
extra_weeks.append([
  ft("Flag overdue expenses", "Accounting drops expenses.csv.", "Approval workflows flag rows before review.", "expenses.csv", "OVERDUE:",
     'rows = FILE_TEXT.strip().split("\\n")[1:]\nfor row in rows:\n    item, amount = row.split(",")\n    if float(amount) > 100:\n        print(f"OVERDUE: {item}")\nprint("PROCESSED OK")', "Upload expenses.csv with item,amount columns."),
  ft("Categorize expenses", "Tag each row as food, travel, or other.", "Budget dashboards bucket spending.", "expenses.csv", "PROCESSED OK",
     'for row in FILE_TEXT.strip().split("\\n")[1:]:\n    item, amount = row.split(",")\n    tag = "travel" if "taxi" in item or "flight" in item else "food" if "lunch" in item or "coffee" in item else "other"\n    print(f"{item}: {tag}")\nprint("PROCESSED OK")', "Use your own expense names."),
  ft("Sum expenses", "Compute total spend from CSV.", "Monthly close scripts aggregate bank CSVs.", "expenses.csv", "TOTAL:",
     'total = 0\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    _, amount = row.split(",")\n    total = total + float(amount)\nprint(f"TOTAL: {total:.2f}")\nprint("PROCESSED OK")', "Totals follow your amounts."),
  ft("Filter high values", "Print rows over 50.", "Analysts filter extracts before review.", "expenses.csv", "Matched:",
     'count = 0\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    item, amount = row.split(",")\n    if float(amount) > 50:\n        print(f"FILTER: {item}")\n        count += 1\nprint(f"Matched: {count}")\nprint("PROCESSED OK")', "Change threshold in code if needed."),
  ft("Expense tracker", "Report total and highest expense.", "Personal finance scripts use this shape.", "expenses.csv", "HIGHEST:",
     'total=0\nbest_item=""\nbest=0\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    item,amount=row.split(",")\n    val=float(amount)\n    total+=val\n    if val>best:\n        best=val; best_item=item\nprint(f"TOTAL: {total:.2f}")\nprint(f"HIGHEST: {best_item}")\nprint("PROCESSED OK")', "Required: sample or your CSV.", True),
])

# Week 3 functions
extra_weeks.append([
  ft("Greeting function", "Wrap name parsing in greet().", "Functions reuse parsers in CLI and web apps.", "team-notes.txt", "Hello,",
     'def greet(name):\n    return f"Hello, {name}!"\nname="Operator"\nfor line in FILE_TEXT.split("\\n"):\n    if line.startswith("name="):\n        name=line.split("=",1)[1].strip()\nprint(greet(name))\nprint("PROCESSED OK")', "name= line drives output."),
  ft("CSV parse_row", "Return item and amount from a CSV line.", "Parsing functions isolate format changes.", "expenses.csv", "PROCESSED OK",
     'def parse_row(line):\n    item,amount=line.split(",")\n    return item,float(amount)\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    item,amount=parse_row(row)\n    print(f"{item}: {amount}")\nprint("PROCESSED OK")', "Extra columns need parse_row update."),
  ft("Return report string", "format_report(total) for emails.", "Return values feed templates and APIs.", "expenses.csv", "REPORT:",
     'def format_report(total):\n    return f"REPORT: total spend {total:.2f}"\ntotal=sum(float(r.split(",")[1]) for r in FILE_TEXT.strip().split("\\n")[1:])\nprint(format_report(total))\nprint("PROCESSED OK")', "Total from your CSV."),
  ft("Timestamped status", "Prefix each status line with ISO date.", "datetime stamps appear in audit logs.", "status.txt", "PROCESSED OK",
     'from datetime import date\ntoday=date.today().isoformat()\nfor line in FILE_TEXT.strip().split("\\n"):\n    if line.strip():\n        print(f"{today} | {line.strip()}")\nprint("PROCESSED OK")', "One task per line."),
  ft("Daily report", "Executive summary from CSV.", "Scheduled jobs email this each morning.", "expenses.csv", "DAILY REPORT:",
     'def summarize(text):\n    rows=[r for r in text.strip().split("\\n")[1:] if r.strip()]\n    total=sum(float(r.split(",")[1]) for r in rows)\n    return f"DAILY REPORT: {len(rows)} rows, total {total:.2f}"\nprint(summarize(FILE_TEXT))\nprint("PROCESSED OK")', "Run with your CSV.", True),
])

# Week 4 OOP
extra_weeks.append([
  ft("Expense class", "Model one CSV row as a class.", "Classes represent billing records.", "expenses.csv", "Expense:",
     'class Expense:\n    def __init__(self,item,amount):\n        self.item=item; self.amount=float(amount)\nrow=FILE_TEXT.strip().split("\\n")[1]\nitem,amount=row.split(",")\nexp=Expense(item,amount)\nprint(f"Expense: {exp.item} {exp.amount}")\nprint("PROCESSED OK")', "First data row used."),
  ft("BankAccount deposits", "Apply deposit rows to balance.", "Methods encapsulate business rules.", "deposits.csv", "Balance:",
     'class BankAccount:\n    def __init__(self): self.balance=0\n    def deposit(self,amount): self.balance+=float(amount)\nacct=BankAccount()\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    _,amount=row.split(",")\n    acct.deposit(amount)\nprint(f"Balance: {acct.balance}")\nprint("PROCESSED OK")', "label,amount columns."),
  ft("Audit inheritance", "Subclass adds source field.", "Inheritance shares event fields.", "audit.log", "Audit:",
     'class BaseRecord:\n    def __init__(self,msg): self.message=msg\nclass AuditRecord(BaseRecord):\n    def __init__(self,src,msg):\n        super().__init__(msg); self.source=src\nline=FILE_TEXT.strip().split("\\n")[0]\nsrc,msg=line.split("|",1)\nrec=AuditRecord(src,msg)\nprint(f"Audit: {rec.source} -> {rec.message}")\nprint("PROCESSED OK")', "source|message per line."),
  ft("Safe CSV parse", "Skip bad rows with try/except.", "ETL skips bad vendor rows.", "messy-expenses.csv", "SKIPPED:",
     'for row in FILE_TEXT.strip().split("\\n")[1:]:\n    item,amount=row.split(",")\n    try:\n        print(f"OK: {item} {float(amount)}")\n    except ValueError:\n        print(f"SKIPPED: {item}")\nprint("PROCESSED OK")', "Add bad rows to your CSV."),
  ft("Library JSON catalog", "Load books.json titles.", "Services ingest JSON catalog dumps.", "books.json", "PROCESSED OK",
     'import json\nfor book in json.loads(FILE_TEXT):\n    print(book["title"])\nprint("PROCESSED OK")', "JSON array with title field.", True),
])

# Week 5 data
extra_weeks.append([
  ft("Count log errors", "Count ERROR in server.log.", "Log scanners power ops alerts.", "server.log", "Errors:",
     'errors=0\nfor line in FILE_TEXT.split("\\n"):\n    if "ERROR" in line: errors+=1\nprint(f"Errors: {errors}")\nprint("PROCESSED OK")', "Upload .log with ERROR tokens."),
  ft("Inventory totals", "Sum sku,qty CSV.", "Warehouse scripts reconcile stock.", "inventory.csv", "STOCK TOTAL:",
     'total=0\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    _,qty=row.split(",")\n    total+=int(qty)\nprint(f"STOCK TOTAL: {total}")\nprint("PROCESSED OK")', "sku,qty columns."),
  ft("Extract emails", "Regex emails from contacts.txt.", "Regex pulls structured data from exports.", "contacts.txt", "Found:",
     'import re\nemails=re.findall(r"[\\w.+-]+@[\\w.-]+\\.[A-Za-z]{2,}", FILE_TEXT)\nfor e in emails: print(e)\nprint(f"Found: {len(emails)}")\nprint("PROCESSED OK")', "Paste emails in your .txt."),
  ft("Validate contact JSON", "Flag invalid email records.", "Pipelines validate before warehouse load.", "contacts.json", "PROCESSED OK",
     'import json\nfor user in json.loads(FILE_TEXT):\n    if "email" not in user or "@" not in user["email"]:\n        print(f"INVALID: {user.get(\'name\',\'?\')}")\n    else:\n        print(f"OK: {user[\'name\']}")\nprint("PROCESSED OK")', "Break a record to see INVALID."),
  ft("Log analyzer report", "ERROR and INFO counts.", "Mini Splunk summary script.", "server.log", "LOG REPORT:",
     'counts={"ERROR":0,"INFO":0}\nfor line in FILE_TEXT.split("\\n"):\n    for level in counts:\n        if level in line: counts[level]+=1\nprint(f"LOG REPORT: errors={counts[\'ERROR\']} info={counts[\'INFO\']}")\nprint("PROCESSED OK")', "Use your own log file.", True),
])

# Week 6 API - no files
def api_task(title, scenario, rwu, code, val, hint, git=False):
    return (title, scenario, rwu,
            ["Use await fetch_json or fetch_text", f"Print line containing {val.split(':')[0] if ':' in val else val}", "Print PROCESSED OK"],
            ["Live values change", "Fix URL if HTTP error"],
            None, False, hint, code, val, git)

extra_weeks.append([
  api_task("Live weather", "Open-Meteo for your coordinates.", "Ops dashboards pull live weather.", 
     'lat=28.6139\nlon=77.2090\nurl=f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m"\ndata=await fetch_json(url)\nprint(f"LIVE WEATHER: {data[\'current\'][\'temperature_2m\']}C")\nprint("PROCESSED OK")', "LIVE WEATHER:", "Change lat/lon to your city."),
  api_task("User profile API", "JSONPlaceholder user nested fields.", "Clients verify API shape before render.",
     'user=await fetch_json("https://jsonplaceholder.typicode.com/users/1")\nprint(f"User: {user[\'name\']}")\nprint(f"City: {user[\'address\'][\'city\']}")\nprint("PROCESSED OK")', "User:", "Try /users/2 — name changes."),
  api_task("Product average", "DummyJSON price average.", "Pricing monitors competitor APIs.",
     'catalog=await fetch_json("https://dummyjson.com/products?limit=5")\nprices=[p["price"] for p in catalog["products"]]\nprint(f"AVERAGE: {sum(prices)/len(prices):.2f}")\nprint("PROCESSED OK")', "AVERAGE:", "Live catalog — average moves."),
  api_task("HTML title fetch", "Extract h1 from example.com.", "Monitoring checks page titles.",
     'html=await fetch_text("https://example.com")\nstart=html.find("<h1>")+4\nend=html.find("</h1>")\nprint(f"Title: {html[start:end].strip()}")\nprint("PROCESSED OK")', "Title:", "Respect site terms."),
  api_task("Live dashboard", "Weather + posts in one report.", "Teams merge APIs into status blocks.",
     'weather=await fetch_json("https://api.open-meteo.com/v1/forecast?latitude=19.076&longitude=72.8777&current=temperature_2m")\nposts=await fetch_json("https://jsonplaceholder.typicode.com/posts?_limit=2")\nprint(f"DASHBOARD: temp={weather[\'current\'][\'temperature_2m\']} posts={len(posts)}")\nprint("PROCESSED OK")', "DASHBOARD:", "Swap city or post limit.", True),
])

# Week 7 reliability
extra_weeks.append([
  ft("Job log timestamps", "Timestamp each job line.", "Cron logs need timestamps.", "jobs.txt", "JOB LOG:",
     'from datetime import datetime\nnow=datetime.now().isoformat(timespec="seconds")\nfor line in FILE_TEXT.strip().split("\\n"):\n    if line.strip(): print(f"JOB LOG: {now} | {line.strip()}")\nprint("PROCESSED OK")', "One job per line."),
  ft("Schedule runner", "Run tasks from schedule.txt.", "Batch runners iterate config tasks.", "schedule.txt", "DONE:",
     'for task in FILE_TEXT.strip().split("\\n"):\n    name=task.strip()\n    if not name: continue\n    print(f"RUNNING: {name}")\n    print(f"DONE: {name}")\nprint("PROCESSED OK")', "Task names one per line."),
  ft("Retry uploads", "Retry until ok token.", "Production uploads use retries.", "upload-results.txt", "SUCCESS:",
     'for i,status in enumerate([l.strip() for l in FILE_TEXT.split("\\n") if l.strip()],1):\n    if status=="fail": print(f"RETRY: attempt {i}")\n    else:\n        print("SUCCESS: upload complete"); break\nprint("PROCESSED OK")', "Lines: fail or ok."),
  ft("Config-driven job", "Read job-config.json.", "Twelve-factor config from files.", "job-config.json", "CONFIG JOB:",
     'import json\ncfg=json.loads(FILE_TEXT)\nprint(f"CONFIG JOB: {cfg.get(\'job_name\',\'default\')} retries={cfg.get(\'max_retries\',1)}")\nprint("PROCESSED OK")', "JSON with job_name, max_retries."),
  ft("Job runner", "Log tasks from config.", "Nightly ETL orchestration.", "job-config.json", "JOB RUNNER:",
     'import json\ncfg=json.loads(FILE_TEXT)\nprint(f"JOB RUNNER: {cfg.get(\'job_name\',\'sync\')}")\nfor task in cfg.get("tasks",["fetch","load"]): print(f"  task: {task}")\nprint("PROCESSED OK")', "Extend JSON with tasks array.", True),
])

# Week 8 office
extra_weeks.append([
  ft("Report header", "Payroll CSV header row.", "Reports start with CSV metadata.", "payroll.csv", "REPORT HEADER:",
     'rows=FILE_TEXT.strip().split("\\n")\nprint(f"REPORT HEADER: {rows[0]}")\nprint(f"Rows: {len(rows)-1}")\nprint("PROCESSED OK")', "employee,hours,rate"),
  ft("Payroll totals", "hours * rate per row.", "Payroll multiplies CSV columns.", "payroll.csv", "PAY:",
     'for row in FILE_TEXT.strip().split("\\n")[1:]:\n    emp,hours,rate=row.split(",")\n    print(f"PAY: {emp} {float(hours)*float(rate):.2f}")\nprint("PROCESSED OK")', "Your payroll CSV."),
  ft("Email merge", "Merge recipients into template.", "Marketing merges lists into templates.", "recipients.txt", "EMAIL:",
     'tpl="Hello {name}, your report is ready."\nfor name in FILE_TEXT.strip().split("\\n"):\n    if name.strip(): print(f"EMAIL: {tpl.format(name=name.strip())}")\nprint("PROCESSED OK")', "One name per line."),
  ft("Summary email body", "Total payroll in email text.", "Scheduled payroll emails.", "payroll.csv", "SUMMARY EMAIL:",
     'total=0\nfor row in FILE_TEXT.strip().split("\\n")[1:]:\n    _,hours,rate=row.split(",")\n    total+=float(hours)*float(rate)\nprint(f"SUMMARY EMAIL: Total payroll {total:.2f}")\nprint("PROCESSED OK")', "Same or own payroll file."),
  ft("Report pipeline", "Extract transform deliver CSV.", "Office automation pipeline.", "payroll.csv", "PIPELINE:",
     'rows=[r for r in FILE_TEXT.strip().split("\\n")[1:] if r.strip()]\ntotal=sum(float(r.split(",")[1])*float(r.split(",")[2]) for r in rows)\nprint(f"PIPELINE: {len(rows)} employees, total {total:.2f}")\nprint("PROCESSED OK")', "Full pipeline on your file.", True),
])

# Week 9 prompts
extra_weeks.append([
  ft("Classifier prompt", "Wrap ticket.txt in prompt.", "LLM integrations use prompt templates.", "ticket.txt", "PROMPT:",
     'body=FILE_TEXT.strip()\nprompt=f"Classify:\\n{body}"\nprint(f"PROMPT: {prompt[:60]}...")\nprint("PROCESSED OK")', "Paste a real ticket."),
  ft("Ticket router", "Rule-based categories.", "Rules before paid model calls.", "tickets.txt", "ROUTE:",
     'for line in FILE_TEXT.strip().split("\\n"):\n    t=line.lower()\n    cat="billing" if "refund" in t else "support" if "help" in t else "general"\n    print(f"ROUTE: {cat}")\nprint("PROCESSED OK")', "One ticket per line."),
  ft("Ticket JSON export", "Convert lines to JSON.", "APIs expect JSON payloads.", "tickets.txt", "JSON:",
     'import json\nrec=[{"id":i,"text":l.strip()} for i,l in enumerate(FILE_TEXT.split("\\n"),1) if l.strip()]\nprint(f"JSON: {json.dumps(rec)}")\nprint("PROCESSED OK")', "Your tickets as JSON."),
  ft("Batch classify", "Count categories in tickets.json.", "Batch jobs on ticket dumps.", "tickets.json", "BATCH:",
     'import json\ntickets=json.loads(FILE_TEXT)\ncounts={}\nfor t in tickets:\n    cat=t.get("category","general")\n    counts[cat]=counts.get(cat,0)+1\nprint(f"BATCH: {counts}")\nprint("PROCESSED OK")', "JSON list with category."),
  ft("Router report", "Standup route counts.", "Support leads review counts.", "tickets.txt", "ROUTER REPORT:",
     'counts={"billing":0,"support":0,"general":0}\nfor line in FILE_TEXT.strip().split("\\n"):\n    t=line.lower()\n    if "refund" in t: counts["billing"]+=1\n    elif "help" in t: counts["support"]+=1\n    else: counts["general"]+=1\nprint(f"ROUTER REPORT: {counts}")\nprint("PROCESSED OK")', "Real ticket phrases.", True),
])

# Week 10 pipelines
extra_weeks.append([
  ft("Document word count", "Gate docs before LLM cost.", "Pipelines check token limits.", "document.txt", "WORDS:",
     'print(f"WORDS: {len(FILE_TEXT.split())}")\nprint("PROCESSED OK")', "Upload doc excerpt .txt."),
  ft("Memo field extract", "Parse TO: SUBJECT: lines.", "Field extraction before summarization.", "memo.txt", "EXTRACT:",
     'fields={}\nfor line in FILE_TEXT.split("\\n"):\n    if ":" in line:\n        k,v=line.split(":",1); fields[k.strip()]=v.strip()\nprint(f"EXTRACT: {fields}")\nprint("PROCESSED OK")', "Labeled memo lines."),
  ft("Pipeline chain", "clean count report functions.", "Multi-step testable pipelines.", "document.txt", "PIPELINE DONE:",
     'def clean(t): return " ".join(t.split())\ndef count(t): return len(t.split())\ndef report(n): return f"PIPELINE DONE: {n} words"\ntext=clean(FILE_TEXT)\nprint(report(count(text)))\nprint("PROCESSED OK")', "Longer docs change count."),
  ft("Document metadata JSON", "chars and words meta.", "Metadata before storage upload.", "document.txt", "META:",
     'import json\nmeta={"words":len(FILE_TEXT.split()),"chars":len(FILE_TEXT)}\nprint(f"META: {json.dumps(meta)}")\nprint("PROCESSED OK")', "Your document drives meta."),
  ft("Doc pipeline export", "Full memo summary.", "Unit to commit as pipeline.py.", "memo.txt", "DOC PIPELINE:",
     'lines=[l for l in FILE_TEXT.split("\\n") if l.strip()]\nprint(f"DOC PIPELINE: {len(lines)} sections, {len(FILE_TEXT)} chars")\nprint("PROCESSED OK")', "Own labeled memo.", True),
])

# Week 11 agents
extra_weeks.append([
  ft("Tool registry", "List tools from tools.json.", "Agents load tools from config.", "tools.json", "TOOLS:",
     'import json\ncfg=json.loads(FILE_TEXT)\nfor name in cfg.get("tools",[]): print(f"  tool: {name}")\nprint(f"TOOLS: {len(cfg.get(\'tools\',[]))}")\nprint("PROCESSED OK")', "JSON tools array."),
  ft("Tool selection", "Map goal.txt to tool.", "Routers pick tools by intent.", "goal.txt", "SELECTED:",
     'g=FILE_TEXT.lower()\ntool="calculator" if "total" in g or "sum" in g else "search" if "find" in g else "general"\nprint(f"SELECTED: {tool}")\nprint("PROCESSED OK")', "One goal sentence."),
  ft("Agent loop", "Run plan.txt steps.", "Agents execute planned steps.", "plan.txt", "AGENT DONE:",
     'for line in FILE_TEXT.strip().split("\\n"):\n    step=line.strip()\n    if not step: continue\n    print(f"STEP: {step}")\n    if step=="done": break\nprint("AGENT DONE:")\nprint("PROCESSED OK")', "Last line done."),
  ft("Step guardrail", "Cap steps at MAX=5.", "Agents limit cost and runaway loops.", "plan.txt", "GUARD:",
     'MAX=5\nsteps=[l.strip() for l in FILE_TEXT.split("\\n") if l.strip()]\nmsg="too many" if len(steps)>MAX else "ok"\nprint(f"GUARD: {msg} ({len(steps)} steps)")\nprint("PROCESSED OK")', "Add steps to trigger guard."),
  ft("Agent report", "Summarize queued steps.", "Small agents merge plan files.", "plan.txt", "AGENT REPORT:",
     'steps=[l.strip() for l in FILE_TEXT.split("\\n") if l.strip()]\nprint(f"AGENT REPORT: {len(steps)} steps queued")\nprint("PROCESSED OK")', "Your plan.txt.", True),
])

# Week 12 capstone
extra_weeks.append([
  ft("Parser tests", "Assert file non-empty.", "Tests guard parsers before prod.", "intro.txt", "TESTS OK",
     'assert len(FILE_TEXT)>0\nassert len(FILE_TEXT.split())>=1\nprint("TESTS OK")\nprint("PROCESSED OK")', "Empty upload should fail."),
  ft("Compressor modules", "read_docs + report_sizes.", "Separate read and report.", "docs-bundle.json", "MODULE OK",
     'import json\ndef read_docs(t): return json.loads(t)\ndef report_sizes(d): return sum(len(v) for v in d.values())\ndocs=read_docs(FILE_TEXT)\nprint(f"MODULE OK: {report_sizes(docs)} bytes")\nprint("PROCESSED OK")', "JSON filename:content map."),
  ft("Batch doc stats", "Per-file char counts.", "Compression audit trails.", "docs-bundle.json", "STATS:",
     'import json\ndocs=json.loads(FILE_TEXT)\nfor n,b in docs.items(): print(f"  {n}: {len(b)} chars")\nprint(f"STATS: {len(docs)} files")\nprint("PROCESSED OK")', "Add filenames to JSON."),
  ft("Fix size bug", "Correct total byte sum.", "Debug aggregation incidents.", "docs-bundle.json", "TOTAL BYTES:",
     'import json\ndocs=json.loads(FILE_TEXT)\ntotal=sum(len(b) for b in docs.values())\nprint(f"TOTAL BYTES: {total}")\nprint("PROCESSED OK")', "Verify sum of lengths."),
  ft("DocPack ship", "ZIP bundle then GitHub.", "Portfolio: compress, Git, deploy.", "docs-bundle.json", "SHIP READY",
     'import io,json,zipfile\ndocs=json.loads(FILE_TEXT)\norig=sum(len(t.encode("utf-8")) for t in docs.values())\nbuf=io.BytesIO()\nwith zipfile.ZipFile(buf,"w",compression=zipfile.ZIP_DEFLATED) as zf:\n    for n,t in docs.items(): zf.writestr(n,t)\nprint(f"Original: {orig} Compressed: {len(buf.getvalue())}")\nprint("SHIP READY")', "Then use ship panel for GitHub.", True),
])

lines.append('const GIT_BASE = `' + GIT.replace('`', '\\`') + '`;')
lines.append('')
lines.append('export const WEEK_SPECS_EXTRA: DaySpec[][] = [')

for week in extra_weeks:
    lines.append('[')
    for i, s in enumerate(week):
        title, scenario, rwu, reqs, edges, exfile, own, hint, code, val, git = s
        ex = f'file("{exfile}")' if exfile else 'undefined'
        git_fields = '\n    gitNotes: GIT_BASE,' if git else ''
        run_fields = '\n    runLocally: `python script.py`,' if git and val == "SHIP READY" else ''
        block = f'''  {{
    title: "{title}",
    scenario: "{scenario}",
    realWorldUse: "{rwu}",
    requirements: {json_reqs(reqs)},
    edgeCases: {json_reqs(edges)},
    exampleFile: {ex},
    acceptsOwnFile: {str(own).lower()},
    ownFileHint: "{hint}",
    starterCode: `{code}`,
    solutionCode: `{code}`,
    validationPattern: "{val}",{git_fields}{run_fields}
  }}'''
        lines.append(block + (',' if i < len(week)-1 else ''))
    lines.append('],')

lines.append('];')

out = Path(__file__).resolve().parents[1] / 'lib' / 'course' / 'practicalTasksExtra.ts'
out.write_text('\n'.join(lines), encoding='utf-8')
print('wrote', out)
