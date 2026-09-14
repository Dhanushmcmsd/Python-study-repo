import type { PracticalTask } from "../practicalTask";

type DaySpec = Omit<PracticalTask, "day" | "week">;

function file(name: string): PracticalTask["exampleFile"] {
  return { name, path: `/examples/${name}` };
}

const GIT_BASE = `### Git workflow (local)
\`\`\`bash
git init
git add .
git commit -m "Day implementation"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
\`\`\`
Token stays in this browser only if you use Push below — never commit secrets.`;

export const WEEK_SPECS_EXTRA: DaySpec[][] = [
[
  {
    title: "Flag overdue expenses",
    scenario: "Accounting drops expenses.csv.",
    realWorldUse: "Approval workflows flag rows before review.",
    requirements: ["Use FILE_TEXT from download or upload", "Print OVERDUE", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Upload expenses.csv with item,amount columns.",
    starterCode: `rows = FILE_TEXT.strip().split("\n")[1:]
for row in rows:
    item, amount = row.split(",")
    if float(amount) > 100:
        print(f"OVERDUE: {item}")
print("PROCESSED OK")`,
    solutionCode: `rows = FILE_TEXT.strip().split("\n")[1:]
for row in rows:
    item, amount = row.split(",")
    if float(amount) > 100:
        print(f"OVERDUE: {item}")
print("PROCESSED OK")`,
    validationPattern: "OVERDUE:",
  },
  {
    title: "Categorize expenses",
    scenario: "Tag each row as food, travel, or other.",
    realWorldUse: "Budget dashboards bucket spending.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PROCESSED OK", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Use your own expense names.",
    starterCode: `for row in FILE_TEXT.strip().split("\n")[1:]:
    item, amount = row.split(",")
    tag = "travel" if "taxi" in item or "flight" in item else "food" if "lunch" in item or "coffee" in item else "other"
    print(f"{item}: {tag}")
print("PROCESSED OK")`,
    solutionCode: `for row in FILE_TEXT.strip().split("\n")[1:]:
    item, amount = row.split(",")
    tag = "travel" if "taxi" in item or "flight" in item else "food" if "lunch" in item or "coffee" in item else "other"
    print(f"{item}: {tag}")
print("PROCESSED OK")`,
    validationPattern: "PROCESSED OK",
  },
  {
    title: "Sum expenses",
    scenario: "Compute total spend from CSV.",
    realWorldUse: "Monthly close scripts aggregate bank CSVs.",
    requirements: ["Use FILE_TEXT from download or upload", "Print TOTAL", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Totals follow your amounts.",
    starterCode: `total = 0
for row in FILE_TEXT.strip().split("\n")[1:]:
    _, amount = row.split(",")
    total = total + float(amount)
print(f"TOTAL: {total:.2f}")
print("PROCESSED OK")`,
    solutionCode: `total = 0
for row in FILE_TEXT.strip().split("\n")[1:]:
    _, amount = row.split(",")
    total = total + float(amount)
print(f"TOTAL: {total:.2f}")
print("PROCESSED OK")`,
    validationPattern: "TOTAL:",
  },
  {
    title: "Filter high values",
    scenario: "Print rows over 50.",
    realWorldUse: "Analysts filter extracts before review.",
    requirements: ["Use FILE_TEXT from download or upload", "Print Matched", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Change threshold in code if needed.",
    starterCode: `count = 0
for row in FILE_TEXT.strip().split("\n")[1:]:
    item, amount = row.split(",")
    if float(amount) > 50:
        print(f"FILTER: {item}")
        count += 1
print(f"Matched: {count}")
print("PROCESSED OK")`,
    solutionCode: `count = 0
for row in FILE_TEXT.strip().split("\n")[1:]:
    item, amount = row.split(",")
    if float(amount) > 50:
        print(f"FILTER: {item}")
        count += 1
print(f"Matched: {count}")
print("PROCESSED OK")`,
    validationPattern: "Matched:",
  },
  {
    title: "Expense tracker",
    scenario: "Report total and highest expense.",
    realWorldUse: "Personal finance scripts use this shape.",
    requirements: ["Use FILE_TEXT from download or upload", "Print HIGHEST", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Required: sample or your CSV.",
    starterCode: `total=0
best_item=""
best=0
for row in FILE_TEXT.strip().split("\n")[1:]:
    item,amount=row.split(",")
    val=float(amount)
    total+=val
    if val>best:
        best=val; best_item=item
print(f"TOTAL: {total:.2f}")
print(f"HIGHEST: {best_item}")
print("PROCESSED OK")`,
    solutionCode: `total=0
best_item=""
best=0
for row in FILE_TEXT.strip().split("\n")[1:]:
    item,amount=row.split(",")
    val=float(amount)
    total+=val
    if val>best:
        best=val; best_item=item
print(f"TOTAL: {total:.2f}")
print(f"HIGHEST: {best_item}")
print("PROCESSED OK")`,
    validationPattern: "HIGHEST:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Greeting function",
    scenario: "Wrap name parsing in greet().",
    realWorldUse: "Functions reuse parsers in CLI and web apps.",
    requirements: ["Use FILE_TEXT from download or upload", "Print Hello,", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("team-notes.txt"),
    acceptsOwnFile: true,
    ownFileHint: "name= line drives output.",
    starterCode: `def greet(name):
    return f"Hello, {name}!"
name="Operator"
for line in FILE_TEXT.split("\n"):
    if line.startswith("name="):
        name=line.split("=",1)[1].strip()
print(greet(name))
print("PROCESSED OK")`,
    solutionCode: `def greet(name):
    return f"Hello, {name}!"
name="Operator"
for line in FILE_TEXT.split("\n"):
    if line.startswith("name="):
        name=line.split("=",1)[1].strip()
print(greet(name))
print("PROCESSED OK")`,
    validationPattern: "Hello,",
  },
  {
    title: "CSV parse_row",
    scenario: "Return item and amount from a CSV line.",
    realWorldUse: "Parsing functions isolate format changes.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PROCESSED OK", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Extra columns need parse_row update.",
    starterCode: `def parse_row(line):
    item,amount=line.split(",")
    return item,float(amount)
for row in FILE_TEXT.strip().split("\n")[1:]:
    item,amount=parse_row(row)
    print(f"{item}: {amount}")
print("PROCESSED OK")`,
    solutionCode: `def parse_row(line):
    item,amount=line.split(",")
    return item,float(amount)
for row in FILE_TEXT.strip().split("\n")[1:]:
    item,amount=parse_row(row)
    print(f"{item}: {amount}")
print("PROCESSED OK")`,
    validationPattern: "PROCESSED OK",
  },
  {
    title: "Return report string",
    scenario: "format_report(total) for emails.",
    realWorldUse: "Return values feed templates and APIs.",
    requirements: ["Use FILE_TEXT from download or upload", "Print REPORT", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Total from your CSV.",
    starterCode: `def format_report(total):
    return f"REPORT: total spend {total:.2f}"
total=sum(float(r.split(",")[1]) for r in FILE_TEXT.strip().split("\n")[1:])
print(format_report(total))
print("PROCESSED OK")`,
    solutionCode: `def format_report(total):
    return f"REPORT: total spend {total:.2f}"
total=sum(float(r.split(",")[1]) for r in FILE_TEXT.strip().split("\n")[1:])
print(format_report(total))
print("PROCESSED OK")`,
    validationPattern: "REPORT:",
  },
  {
    title: "Timestamped status",
    scenario: "Prefix each status line with ISO date.",
    realWorldUse: "datetime stamps appear in audit logs.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PROCESSED OK", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("status.txt"),
    acceptsOwnFile: true,
    ownFileHint: "One task per line.",
    starterCode: `from datetime import date
today=date.today().isoformat()
for line in FILE_TEXT.strip().split("\n"):
    if line.strip():
        print(f"{today} | {line.strip()}")
print("PROCESSED OK")`,
    solutionCode: `from datetime import date
today=date.today().isoformat()
for line in FILE_TEXT.strip().split("\n"):
    if line.strip():
        print(f"{today} | {line.strip()}")
print("PROCESSED OK")`,
    validationPattern: "PROCESSED OK",
  },
  {
    title: "Daily report",
    scenario: "Executive summary from CSV.",
    realWorldUse: "Scheduled jobs email this each morning.",
    requirements: ["Use FILE_TEXT from download or upload", "Print DAILY REPORT", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Run with your CSV.",
    starterCode: `def summarize(text):
    rows=[r for r in text.strip().split("\n")[1:] if r.strip()]
    total=sum(float(r.split(",")[1]) for r in rows)
    return f"DAILY REPORT: {len(rows)} rows, total {total:.2f}"
print(summarize(FILE_TEXT))
print("PROCESSED OK")`,
    solutionCode: `def summarize(text):
    rows=[r for r in text.strip().split("\n")[1:] if r.strip()]
    total=sum(float(r.split(",")[1]) for r in rows)
    return f"DAILY REPORT: {len(rows)} rows, total {total:.2f}"
print(summarize(FILE_TEXT))
print("PROCESSED OK")`,
    validationPattern: "DAILY REPORT:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Expense class",
    scenario: "Model one CSV row as a class.",
    realWorldUse: "Classes represent billing records.",
    requirements: ["Use FILE_TEXT from download or upload", "Print Expense", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "First data row used.",
    starterCode: `class Expense:
    def __init__(self,item,amount):
        self.item=item; self.amount=float(amount)
row=FILE_TEXT.strip().split("\n")[1]
item,amount=row.split(",")
exp=Expense(item,amount)
print(f"Expense: {exp.item} {exp.amount}")
print("PROCESSED OK")`,
    solutionCode: `class Expense:
    def __init__(self,item,amount):
        self.item=item; self.amount=float(amount)
row=FILE_TEXT.strip().split("\n")[1]
item,amount=row.split(",")
exp=Expense(item,amount)
print(f"Expense: {exp.item} {exp.amount}")
print("PROCESSED OK")`,
    validationPattern: "Expense:",
  },
  {
    title: "BankAccount deposits",
    scenario: "Apply deposit rows to balance.",
    realWorldUse: "Methods encapsulate business rules.",
    requirements: ["Use FILE_TEXT from download or upload", "Print Balance", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("deposits.csv"),
    acceptsOwnFile: true,
    ownFileHint: "label,amount columns.",
    starterCode: `class BankAccount:
    def __init__(self): self.balance=0
    def deposit(self,amount): self.balance+=float(amount)
acct=BankAccount()
for row in FILE_TEXT.strip().split("\n")[1:]:
    _,amount=row.split(",")
    acct.deposit(amount)
print(f"Balance: {acct.balance}")
print("PROCESSED OK")`,
    solutionCode: `class BankAccount:
    def __init__(self): self.balance=0
    def deposit(self,amount): self.balance+=float(amount)
acct=BankAccount()
for row in FILE_TEXT.strip().split("\n")[1:]:
    _,amount=row.split(",")
    acct.deposit(amount)
print(f"Balance: {acct.balance}")
print("PROCESSED OK")`,
    validationPattern: "Balance:",
  },
  {
    title: "Audit inheritance",
    scenario: "Subclass adds source field.",
    realWorldUse: "Inheritance shares event fields.",
    requirements: ["Use FILE_TEXT from download or upload", "Print Audit", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("audit.log"),
    acceptsOwnFile: true,
    ownFileHint: "source|message per line.",
    starterCode: `class BaseRecord:
    def __init__(self,msg): self.message=msg
class AuditRecord(BaseRecord):
    def __init__(self,src,msg):
        super().__init__(msg); self.source=src
line=FILE_TEXT.strip().split("\n")[0]
src,msg=line.split("|",1)
rec=AuditRecord(src,msg)
print(f"Audit: {rec.source} -> {rec.message}")
print("PROCESSED OK")`,
    solutionCode: `class BaseRecord:
    def __init__(self,msg): self.message=msg
class AuditRecord(BaseRecord):
    def __init__(self,src,msg):
        super().__init__(msg); self.source=src
line=FILE_TEXT.strip().split("\n")[0]
src,msg=line.split("|",1)
rec=AuditRecord(src,msg)
print(f"Audit: {rec.source} -> {rec.message}")
print("PROCESSED OK")`,
    validationPattern: "Audit:",
  },
  {
    title: "Safe CSV parse",
    scenario: "Skip bad rows with try/except.",
    realWorldUse: "ETL skips bad vendor rows.",
    requirements: ["Use FILE_TEXT from download or upload", "Print SKIPPED", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("messy-expenses.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Add bad rows to your CSV.",
    starterCode: `for row in FILE_TEXT.strip().split("\n")[1:]:
    item,amount=row.split(",")
    try:
        print(f"OK: {item} {float(amount)}")
    except ValueError:
        print(f"SKIPPED: {item}")
print("PROCESSED OK")`,
    solutionCode: `for row in FILE_TEXT.strip().split("\n")[1:]:
    item,amount=row.split(",")
    try:
        print(f"OK: {item} {float(amount)}")
    except ValueError:
        print(f"SKIPPED: {item}")
print("PROCESSED OK")`,
    validationPattern: "SKIPPED:",
  },
  {
    title: "Library JSON catalog",
    scenario: "Load books.json titles.",
    realWorldUse: "Services ingest JSON catalog dumps.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PROCESSED OK", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("books.json"),
    acceptsOwnFile: true,
    ownFileHint: "JSON array with title field.",
    starterCode: `import json
for book in json.loads(FILE_TEXT):
    print(book["title"])
print("PROCESSED OK")`,
    solutionCode: `import json
for book in json.loads(FILE_TEXT):
    print(book["title"])
print("PROCESSED OK")`,
    validationPattern: "PROCESSED OK",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Count log errors",
    scenario: "Count ERROR in server.log.",
    realWorldUse: "Log scanners power ops alerts.",
    requirements: ["Use FILE_TEXT from download or upload", "Print Errors", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("server.log"),
    acceptsOwnFile: true,
    ownFileHint: "Upload .log with ERROR tokens.",
    starterCode: `errors=0
for line in FILE_TEXT.split("\n"):
    if "ERROR" in line: errors+=1
print(f"Errors: {errors}")
print("PROCESSED OK")`,
    solutionCode: `errors=0
for line in FILE_TEXT.split("\n"):
    if "ERROR" in line: errors+=1
print(f"Errors: {errors}")
print("PROCESSED OK")`,
    validationPattern: "Errors:",
  },
  {
    title: "Inventory totals",
    scenario: "Sum sku,qty CSV.",
    realWorldUse: "Warehouse scripts reconcile stock.",
    requirements: ["Use FILE_TEXT from download or upload", "Print STOCK TOTAL", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("inventory.csv"),
    acceptsOwnFile: true,
    ownFileHint: "sku,qty columns.",
    starterCode: `total=0
for row in FILE_TEXT.strip().split("\n")[1:]:
    _,qty=row.split(",")
    total+=int(qty)
print(f"STOCK TOTAL: {total}")
print("PROCESSED OK")`,
    solutionCode: `total=0
for row in FILE_TEXT.strip().split("\n")[1:]:
    _,qty=row.split(",")
    total+=int(qty)
print(f"STOCK TOTAL: {total}")
print("PROCESSED OK")`,
    validationPattern: "STOCK TOTAL:",
  },
  {
    title: "Extract emails",
    scenario: "Regex emails from contacts.txt.",
    realWorldUse: "Regex pulls structured data from exports.",
    requirements: ["Use FILE_TEXT from download or upload", "Print Found", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("contacts.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Paste emails in your .txt.",
    starterCode: `import re
emails=re.findall(r"[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}", FILE_TEXT)
for e in emails: print(e)
print(f"Found: {len(emails)}")
print("PROCESSED OK")`,
    solutionCode: `import re
emails=re.findall(r"[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}", FILE_TEXT)
for e in emails: print(e)
print(f"Found: {len(emails)}")
print("PROCESSED OK")`,
    validationPattern: "Found:",
  },
  {
    title: "Validate contact JSON",
    scenario: "Flag invalid email records.",
    realWorldUse: "Pipelines validate before warehouse load.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PROCESSED OK", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("contacts.json"),
    acceptsOwnFile: true,
    ownFileHint: "Break a record to see INVALID.",
    starterCode: `import json
for user in json.loads(FILE_TEXT):
    if "email" not in user or "@" not in user["email"]:
        print(f"INVALID: {user.get('name','?')}")
    else:
        print(f"OK: {user['name']}")
print("PROCESSED OK")`,
    solutionCode: `import json
for user in json.loads(FILE_TEXT):
    if "email" not in user or "@" not in user["email"]:
        print(f"INVALID: {user.get('name','?')}")
    else:
        print(f"OK: {user['name']}")
print("PROCESSED OK")`,
    validationPattern: "PROCESSED OK",
  },
  {
    title: "Log analyzer report",
    scenario: "ERROR and INFO counts.",
    realWorldUse: "Mini Splunk summary script.",
    requirements: ["Use FILE_TEXT from download or upload", "Print LOG REPORT", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("server.log"),
    acceptsOwnFile: true,
    ownFileHint: "Use your own log file.",
    starterCode: `counts={"ERROR":0,"INFO":0}
for line in FILE_TEXT.split("\n"):
    for level in counts:
        if level in line: counts[level]+=1
print(f"LOG REPORT: errors={counts['ERROR']} info={counts['INFO']}")
print("PROCESSED OK")`,
    solutionCode: `counts={"ERROR":0,"INFO":0}
for line in FILE_TEXT.split("\n"):
    for level in counts:
        if level in line: counts[level]+=1
print(f"LOG REPORT: errors={counts['ERROR']} info={counts['INFO']}")
print("PROCESSED OK")`,
    validationPattern: "LOG REPORT:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Live weather",
    scenario: "Open-Meteo for your coordinates.",
    realWorldUse: "Ops dashboards pull live weather.",
    requirements: ["Use await fetch_json or fetch_text", "Print line containing LIVE WEATHER", "Print PROCESSED OK"],
    edgeCases: ["Live values change", "Fix URL if HTTP error"],
    exampleFile: undefined,
    acceptsOwnFile: false,
    ownFileHint: "Change lat/lon to your city.",
    starterCode: `lat=28.6139
lon=77.2090
url=f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m"
data=await fetch_json(url)
print(f"LIVE WEATHER: {data['current']['temperature_2m']}C")
print("PROCESSED OK")`,
    solutionCode: `lat=28.6139
lon=77.2090
url=f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m"
data=await fetch_json(url)
print(f"LIVE WEATHER: {data['current']['temperature_2m']}C")
print("PROCESSED OK")`,
    validationPattern: "LIVE WEATHER:",
  },
  {
    title: "User profile API",
    scenario: "JSONPlaceholder user nested fields.",
    realWorldUse: "Clients verify API shape before render.",
    requirements: ["Use await fetch_json or fetch_text", "Print line containing User", "Print PROCESSED OK"],
    edgeCases: ["Live values change", "Fix URL if HTTP error"],
    exampleFile: undefined,
    acceptsOwnFile: false,
    ownFileHint: "Try /users/2 — name changes.",
    starterCode: `user=await fetch_json("https://jsonplaceholder.typicode.com/users/1")
print(f"User: {user['name']}")
print(f"City: {user['address']['city']}")
print("PROCESSED OK")`,
    solutionCode: `user=await fetch_json("https://jsonplaceholder.typicode.com/users/1")
print(f"User: {user['name']}")
print(f"City: {user['address']['city']}")
print("PROCESSED OK")`,
    validationPattern: "User:",
  },
  {
    title: "Product average",
    scenario: "DummyJSON price average.",
    realWorldUse: "Pricing monitors competitor APIs.",
    requirements: ["Use await fetch_json or fetch_text", "Print line containing AVERAGE", "Print PROCESSED OK"],
    edgeCases: ["Live values change", "Fix URL if HTTP error"],
    exampleFile: undefined,
    acceptsOwnFile: false,
    ownFileHint: "Live catalog — average moves.",
    starterCode: `catalog=await fetch_json("https://dummyjson.com/products?limit=5")
prices=[p["price"] for p in catalog["products"]]
print(f"AVERAGE: {sum(prices)/len(prices):.2f}")
print("PROCESSED OK")`,
    solutionCode: `catalog=await fetch_json("https://dummyjson.com/products?limit=5")
prices=[p["price"] for p in catalog["products"]]
print(f"AVERAGE: {sum(prices)/len(prices):.2f}")
print("PROCESSED OK")`,
    validationPattern: "AVERAGE:",
  },
  {
    title: "HTML title fetch",
    scenario: "Extract h1 from example.com.",
    realWorldUse: "Monitoring checks page titles.",
    requirements: ["Use await fetch_json or fetch_text", "Print line containing Title", "Print PROCESSED OK"],
    edgeCases: ["Live values change", "Fix URL if HTTP error"],
    exampleFile: undefined,
    acceptsOwnFile: false,
    ownFileHint: "Respect site terms.",
    starterCode: `html=await fetch_text("https://example.com")
start=html.find("<h1>")+4
end=html.find("</h1>")
print(f"Title: {html[start:end].strip()}")
print("PROCESSED OK")`,
    solutionCode: `html=await fetch_text("https://example.com")
start=html.find("<h1>")+4
end=html.find("</h1>")
print(f"Title: {html[start:end].strip()}")
print("PROCESSED OK")`,
    validationPattern: "Title:",
  },
  {
    title: "Live dashboard",
    scenario: "Weather + posts in one report.",
    realWorldUse: "Teams merge APIs into status blocks.",
    requirements: ["Use await fetch_json or fetch_text", "Print line containing DASHBOARD", "Print PROCESSED OK"],
    edgeCases: ["Live values change", "Fix URL if HTTP error"],
    exampleFile: undefined,
    acceptsOwnFile: false,
    ownFileHint: "Swap city or post limit.",
    starterCode: `weather=await fetch_json("https://api.open-meteo.com/v1/forecast?latitude=19.076&longitude=72.8777&current=temperature_2m")
posts=await fetch_json("https://jsonplaceholder.typicode.com/posts?_limit=2")
print(f"DASHBOARD: temp={weather['current']['temperature_2m']} posts={len(posts)}")
print("PROCESSED OK")`,
    solutionCode: `weather=await fetch_json("https://api.open-meteo.com/v1/forecast?latitude=19.076&longitude=72.8777&current=temperature_2m")
posts=await fetch_json("https://jsonplaceholder.typicode.com/posts?_limit=2")
print(f"DASHBOARD: temp={weather['current']['temperature_2m']} posts={len(posts)}")
print("PROCESSED OK")`,
    validationPattern: "DASHBOARD:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Job log timestamps",
    scenario: "Timestamp each job line.",
    realWorldUse: "Cron logs need timestamps.",
    requirements: ["Use FILE_TEXT from download or upload", "Print JOB LOG", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("jobs.txt"),
    acceptsOwnFile: true,
    ownFileHint: "One job per line.",
    starterCode: `from datetime import datetime
now=datetime.now().isoformat(timespec="seconds")
for line in FILE_TEXT.strip().split("\n"):
    if line.strip(): print(f"JOB LOG: {now} | {line.strip()}")
print("PROCESSED OK")`,
    solutionCode: `from datetime import datetime
now=datetime.now().isoformat(timespec="seconds")
for line in FILE_TEXT.strip().split("\n"):
    if line.strip(): print(f"JOB LOG: {now} | {line.strip()}")
print("PROCESSED OK")`,
    validationPattern: "JOB LOG:",
  },
  {
    title: "Schedule runner",
    scenario: "Run tasks from schedule.txt.",
    realWorldUse: "Batch runners iterate config tasks.",
    requirements: ["Use FILE_TEXT from download or upload", "Print DONE", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("schedule.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Task names one per line.",
    starterCode: `for task in FILE_TEXT.strip().split("\n"):
    name=task.strip()
    if not name: continue
    print(f"RUNNING: {name}")
    print(f"DONE: {name}")
print("PROCESSED OK")`,
    solutionCode: `for task in FILE_TEXT.strip().split("\n"):
    name=task.strip()
    if not name: continue
    print(f"RUNNING: {name}")
    print(f"DONE: {name}")
print("PROCESSED OK")`,
    validationPattern: "DONE:",
  },
  {
    title: "Retry uploads",
    scenario: "Retry until ok token.",
    realWorldUse: "Production uploads use retries.",
    requirements: ["Use FILE_TEXT from download or upload", "Print SUCCESS", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("upload-results.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Lines: fail or ok.",
    starterCode: `for i,status in enumerate([l.strip() for l in FILE_TEXT.split("\n") if l.strip()],1):
    if status=="fail": print(f"RETRY: attempt {i}")
    else:
        print("SUCCESS: upload complete"); break
print("PROCESSED OK")`,
    solutionCode: `for i,status in enumerate([l.strip() for l in FILE_TEXT.split("\n") if l.strip()],1):
    if status=="fail": print(f"RETRY: attempt {i}")
    else:
        print("SUCCESS: upload complete"); break
print("PROCESSED OK")`,
    validationPattern: "SUCCESS:",
  },
  {
    title: "Config-driven job",
    scenario: "Read job-config.json.",
    realWorldUse: "Twelve-factor config from files.",
    requirements: ["Use FILE_TEXT from download or upload", "Print CONFIG JOB", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("job-config.json"),
    acceptsOwnFile: true,
    ownFileHint: "JSON with job_name, max_retries.",
    starterCode: `import json
cfg=json.loads(FILE_TEXT)
print(f"CONFIG JOB: {cfg.get('job_name','default')} retries={cfg.get('max_retries',1)}")
print("PROCESSED OK")`,
    solutionCode: `import json
cfg=json.loads(FILE_TEXT)
print(f"CONFIG JOB: {cfg.get('job_name','default')} retries={cfg.get('max_retries',1)}")
print("PROCESSED OK")`,
    validationPattern: "CONFIG JOB:",
  },
  {
    title: "Job runner",
    scenario: "Log tasks from config.",
    realWorldUse: "Nightly ETL orchestration.",
    requirements: ["Use FILE_TEXT from download or upload", "Print JOB RUNNER", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("job-config.json"),
    acceptsOwnFile: true,
    ownFileHint: "Extend JSON with tasks array.",
    starterCode: `import json
cfg=json.loads(FILE_TEXT)
print(f"JOB RUNNER: {cfg.get('job_name','sync')}")
for task in cfg.get("tasks",["fetch","load"]): print(f"  task: {task}")
print("PROCESSED OK")`,
    solutionCode: `import json
cfg=json.loads(FILE_TEXT)
print(f"JOB RUNNER: {cfg.get('job_name','sync')}")
for task in cfg.get("tasks",["fetch","load"]): print(f"  task: {task}")
print("PROCESSED OK")`,
    validationPattern: "JOB RUNNER:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Report header",
    scenario: "Payroll CSV header row.",
    realWorldUse: "Reports start with CSV metadata.",
    requirements: ["Use FILE_TEXT from download or upload", "Print REPORT HEADER", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("payroll.csv"),
    acceptsOwnFile: true,
    ownFileHint: "employee,hours,rate",
    starterCode: `rows=FILE_TEXT.strip().split("\n")
print(f"REPORT HEADER: {rows[0]}")
print(f"Rows: {len(rows)-1}")
print("PROCESSED OK")`,
    solutionCode: `rows=FILE_TEXT.strip().split("\n")
print(f"REPORT HEADER: {rows[0]}")
print(f"Rows: {len(rows)-1}")
print("PROCESSED OK")`,
    validationPattern: "REPORT HEADER:",
  },
  {
    title: "Payroll totals",
    scenario: "hours * rate per row.",
    realWorldUse: "Payroll multiplies CSV columns.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PAY", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("payroll.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Your payroll CSV.",
    starterCode: `for row in FILE_TEXT.strip().split("\n")[1:]:
    emp,hours,rate=row.split(",")
    print(f"PAY: {emp} {float(hours)*float(rate):.2f}")
print("PROCESSED OK")`,
    solutionCode: `for row in FILE_TEXT.strip().split("\n")[1:]:
    emp,hours,rate=row.split(",")
    print(f"PAY: {emp} {float(hours)*float(rate):.2f}")
print("PROCESSED OK")`,
    validationPattern: "PAY:",
  },
  {
    title: "Email merge",
    scenario: "Merge recipients into template.",
    realWorldUse: "Marketing merges lists into templates.",
    requirements: ["Use FILE_TEXT from download or upload", "Print EMAIL", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("recipients.txt"),
    acceptsOwnFile: true,
    ownFileHint: "One name per line.",
    starterCode: `tpl="Hello {name}, your report is ready."
for name in FILE_TEXT.strip().split("\n"):
    if name.strip(): print(f"EMAIL: {tpl.format(name=name.strip())}")
print("PROCESSED OK")`,
    solutionCode: `tpl="Hello {name}, your report is ready."
for name in FILE_TEXT.strip().split("\n"):
    if name.strip(): print(f"EMAIL: {tpl.format(name=name.strip())}")
print("PROCESSED OK")`,
    validationPattern: "EMAIL:",
  },
  {
    title: "Summary email body",
    scenario: "Total payroll in email text.",
    realWorldUse: "Scheduled payroll emails.",
    requirements: ["Use FILE_TEXT from download or upload", "Print SUMMARY EMAIL", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("payroll.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Same or own payroll file.",
    starterCode: `total=0
for row in FILE_TEXT.strip().split("\n")[1:]:
    _,hours,rate=row.split(",")
    total+=float(hours)*float(rate)
print(f"SUMMARY EMAIL: Total payroll {total:.2f}")
print("PROCESSED OK")`,
    solutionCode: `total=0
for row in FILE_TEXT.strip().split("\n")[1:]:
    _,hours,rate=row.split(",")
    total+=float(hours)*float(rate)
print(f"SUMMARY EMAIL: Total payroll {total:.2f}")
print("PROCESSED OK")`,
    validationPattern: "SUMMARY EMAIL:",
  },
  {
    title: "Report pipeline",
    scenario: "Extract transform deliver CSV.",
    realWorldUse: "Office automation pipeline.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PIPELINE", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("payroll.csv"),
    acceptsOwnFile: true,
    ownFileHint: "Full pipeline on your file.",
    starterCode: `rows=[r for r in FILE_TEXT.strip().split("\n")[1:] if r.strip()]
total=sum(float(r.split(",")[1])*float(r.split(",")[2]) for r in rows)
print(f"PIPELINE: {len(rows)} employees, total {total:.2f}")
print("PROCESSED OK")`,
    solutionCode: `rows=[r for r in FILE_TEXT.strip().split("\n")[1:] if r.strip()]
total=sum(float(r.split(",")[1])*float(r.split(",")[2]) for r in rows)
print(f"PIPELINE: {len(rows)} employees, total {total:.2f}")
print("PROCESSED OK")`,
    validationPattern: "PIPELINE:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Classifier prompt",
    scenario: "Wrap ticket.txt in prompt.",
    realWorldUse: "LLM integrations use prompt templates.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PROMPT", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("ticket.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Paste a real ticket.",
    starterCode: `body=FILE_TEXT.strip()
prompt=f"Classify:\n{body}"
print(f"PROMPT: {prompt[:60]}...")
print("PROCESSED OK")`,
    solutionCode: `body=FILE_TEXT.strip()
prompt=f"Classify:\n{body}"
print(f"PROMPT: {prompt[:60]}...")
print("PROCESSED OK")`,
    validationPattern: "PROMPT:",
  },
  {
    title: "Ticket router",
    scenario: "Rule-based categories.",
    realWorldUse: "Rules before paid model calls.",
    requirements: ["Use FILE_TEXT from download or upload", "Print ROUTE", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("tickets.txt"),
    acceptsOwnFile: true,
    ownFileHint: "One ticket per line.",
    starterCode: `for line in FILE_TEXT.strip().split("\n"):
    t=line.lower()
    cat="billing" if "refund" in t else "support" if "help" in t else "general"
    print(f"ROUTE: {cat}")
print("PROCESSED OK")`,
    solutionCode: `for line in FILE_TEXT.strip().split("\n"):
    t=line.lower()
    cat="billing" if "refund" in t else "support" if "help" in t else "general"
    print(f"ROUTE: {cat}")
print("PROCESSED OK")`,
    validationPattern: "ROUTE:",
  },
  {
    title: "Ticket JSON export",
    scenario: "Convert lines to JSON.",
    realWorldUse: "APIs expect JSON payloads.",
    requirements: ["Use FILE_TEXT from download or upload", "Print JSON", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("tickets.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Your tickets as JSON.",
    starterCode: `import json
rec=[{"id":i,"text":l.strip()} for i,l in enumerate(FILE_TEXT.split("\n"),1) if l.strip()]
print(f"JSON: {json.dumps(rec)}")
print("PROCESSED OK")`,
    solutionCode: `import json
rec=[{"id":i,"text":l.strip()} for i,l in enumerate(FILE_TEXT.split("\n"),1) if l.strip()]
print(f"JSON: {json.dumps(rec)}")
print("PROCESSED OK")`,
    validationPattern: "JSON:",
  },
  {
    title: "Batch classify",
    scenario: "Count categories in tickets.json.",
    realWorldUse: "Batch jobs on ticket dumps.",
    requirements: ["Use FILE_TEXT from download or upload", "Print BATCH", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("tickets.json"),
    acceptsOwnFile: true,
    ownFileHint: "JSON list with category.",
    starterCode: `import json
tickets=json.loads(FILE_TEXT)
counts={}
for t in tickets:
    cat=t.get("category","general")
    counts[cat]=counts.get(cat,0)+1
print(f"BATCH: {counts}")
print("PROCESSED OK")`,
    solutionCode: `import json
tickets=json.loads(FILE_TEXT)
counts={}
for t in tickets:
    cat=t.get("category","general")
    counts[cat]=counts.get(cat,0)+1
print(f"BATCH: {counts}")
print("PROCESSED OK")`,
    validationPattern: "BATCH:",
  },
  {
    title: "Router report",
    scenario: "Standup route counts.",
    realWorldUse: "Support leads review counts.",
    requirements: ["Use FILE_TEXT from download or upload", "Print ROUTER REPORT", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("tickets.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Real ticket phrases.",
    starterCode: `counts={"billing":0,"support":0,"general":0}
for line in FILE_TEXT.strip().split("\n"):
    t=line.lower()
    if "refund" in t: counts["billing"]+=1
    elif "help" in t: counts["support"]+=1
    else: counts["general"]+=1
print(f"ROUTER REPORT: {counts}")
print("PROCESSED OK")`,
    solutionCode: `counts={"billing":0,"support":0,"general":0}
for line in FILE_TEXT.strip().split("\n"):
    t=line.lower()
    if "refund" in t: counts["billing"]+=1
    elif "help" in t: counts["support"]+=1
    else: counts["general"]+=1
print(f"ROUTER REPORT: {counts}")
print("PROCESSED OK")`,
    validationPattern: "ROUTER REPORT:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Document word count",
    scenario: "Gate docs before LLM cost.",
    realWorldUse: "Pipelines check token limits.",
    requirements: ["Use FILE_TEXT from download or upload", "Print WORDS", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("document.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Upload doc excerpt .txt.",
    starterCode: `print(f"WORDS: {len(FILE_TEXT.split())}")
print("PROCESSED OK")`,
    solutionCode: `print(f"WORDS: {len(FILE_TEXT.split())}")
print("PROCESSED OK")`,
    validationPattern: "WORDS:",
  },
  {
    title: "Memo field extract",
    scenario: "Parse TO: SUBJECT: lines.",
    realWorldUse: "Field extraction before summarization.",
    requirements: ["Use FILE_TEXT from download or upload", "Print EXTRACT", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("memo.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Labeled memo lines.",
    starterCode: `fields={}
for line in FILE_TEXT.split("\n"):
    if ":" in line:
        k,v=line.split(":",1); fields[k.strip()]=v.strip()
print(f"EXTRACT: {fields}")
print("PROCESSED OK")`,
    solutionCode: `fields={}
for line in FILE_TEXT.split("\n"):
    if ":" in line:
        k,v=line.split(":",1); fields[k.strip()]=v.strip()
print(f"EXTRACT: {fields}")
print("PROCESSED OK")`,
    validationPattern: "EXTRACT:",
  },
  {
    title: "Pipeline chain",
    scenario: "clean count report functions.",
    realWorldUse: "Multi-step testable pipelines.",
    requirements: ["Use FILE_TEXT from download or upload", "Print PIPELINE DONE", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("document.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Longer docs change count.",
    starterCode: `def clean(t): return " ".join(t.split())
def count(t): return len(t.split())
def report(n): return f"PIPELINE DONE: {n} words"
text=clean(FILE_TEXT)
print(report(count(text)))
print("PROCESSED OK")`,
    solutionCode: `def clean(t): return " ".join(t.split())
def count(t): return len(t.split())
def report(n): return f"PIPELINE DONE: {n} words"
text=clean(FILE_TEXT)
print(report(count(text)))
print("PROCESSED OK")`,
    validationPattern: "PIPELINE DONE:",
  },
  {
    title: "Document metadata JSON",
    scenario: "chars and words meta.",
    realWorldUse: "Metadata before storage upload.",
    requirements: ["Use FILE_TEXT from download or upload", "Print META", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("document.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Your document drives meta.",
    starterCode: `import json
meta={"words":len(FILE_TEXT.split()),"chars":len(FILE_TEXT)}
print(f"META: {json.dumps(meta)}")
print("PROCESSED OK")`,
    solutionCode: `import json
meta={"words":len(FILE_TEXT.split()),"chars":len(FILE_TEXT)}
print(f"META: {json.dumps(meta)}")
print("PROCESSED OK")`,
    validationPattern: "META:",
  },
  {
    title: "Doc pipeline export",
    scenario: "Full memo summary.",
    realWorldUse: "Unit to commit as pipeline.py.",
    requirements: ["Use FILE_TEXT from download or upload", "Print DOC PIPELINE", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("memo.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Own labeled memo.",
    starterCode: `lines=[l for l in FILE_TEXT.split("\n") if l.strip()]
print(f"DOC PIPELINE: {len(lines)} sections, {len(FILE_TEXT)} chars")
print("PROCESSED OK")`,
    solutionCode: `lines=[l for l in FILE_TEXT.split("\n") if l.strip()]
print(f"DOC PIPELINE: {len(lines)} sections, {len(FILE_TEXT)} chars")
print("PROCESSED OK")`,
    validationPattern: "DOC PIPELINE:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Tool registry",
    scenario: "List tools from tools.json.",
    realWorldUse: "Agents load tools from config.",
    requirements: ["Use FILE_TEXT from download or upload", "Print TOOLS", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("tools.json"),
    acceptsOwnFile: true,
    ownFileHint: "JSON tools array.",
    starterCode: `import json
cfg=json.loads(FILE_TEXT)
for name in cfg.get("tools",[]): print(f"  tool: {name}")
print(f"TOOLS: {len(cfg.get('tools',[]))}")
print("PROCESSED OK")`,
    solutionCode: `import json
cfg=json.loads(FILE_TEXT)
for name in cfg.get("tools",[]): print(f"  tool: {name}")
print(f"TOOLS: {len(cfg.get('tools',[]))}")
print("PROCESSED OK")`,
    validationPattern: "TOOLS:",
  },
  {
    title: "Tool selection",
    scenario: "Map goal.txt to tool.",
    realWorldUse: "Routers pick tools by intent.",
    requirements: ["Use FILE_TEXT from download or upload", "Print SELECTED", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("goal.txt"),
    acceptsOwnFile: true,
    ownFileHint: "One goal sentence.",
    starterCode: `g=FILE_TEXT.lower()
tool="calculator" if "total" in g or "sum" in g else "search" if "find" in g else "general"
print(f"SELECTED: {tool}")
print("PROCESSED OK")`,
    solutionCode: `g=FILE_TEXT.lower()
tool="calculator" if "total" in g or "sum" in g else "search" if "find" in g else "general"
print(f"SELECTED: {tool}")
print("PROCESSED OK")`,
    validationPattern: "SELECTED:",
  },
  {
    title: "Agent loop",
    scenario: "Run plan.txt steps.",
    realWorldUse: "Agents execute planned steps.",
    requirements: ["Use FILE_TEXT from download or upload", "Print AGENT DONE", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("plan.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Last line done.",
    starterCode: `for line in FILE_TEXT.strip().split("\n"):
    step=line.strip()
    if not step: continue
    print(f"STEP: {step}")
    if step=="done": break
print("AGENT DONE:")
print("PROCESSED OK")`,
    solutionCode: `for line in FILE_TEXT.strip().split("\n"):
    step=line.strip()
    if not step: continue
    print(f"STEP: {step}")
    if step=="done": break
print("AGENT DONE:")
print("PROCESSED OK")`,
    validationPattern: "AGENT DONE:",
  },
  {
    title: "Step guardrail",
    scenario: "Cap steps at MAX=5.",
    realWorldUse: "Agents limit cost and runaway loops.",
    requirements: ["Use FILE_TEXT from download or upload", "Print GUARD", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("plan.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Add steps to trigger guard.",
    starterCode: `MAX=5
steps=[l.strip() for l in FILE_TEXT.split("\n") if l.strip()]
msg="too many" if len(steps)>MAX else "ok"
print(f"GUARD: {msg} ({len(steps)} steps)")
print("PROCESSED OK")`,
    solutionCode: `MAX=5
steps=[l.strip() for l in FILE_TEXT.split("\n") if l.strip()]
msg="too many" if len(steps)>MAX else "ok"
print(f"GUARD: {msg} ({len(steps)} steps)")
print("PROCESSED OK")`,
    validationPattern: "GUARD:",
  },
  {
    title: "Agent report",
    scenario: "Summarize queued steps.",
    realWorldUse: "Small agents merge plan files.",
    requirements: ["Use FILE_TEXT from download or upload", "Print AGENT REPORT", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("plan.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Your plan.txt.",
    starterCode: `steps=[l.strip() for l in FILE_TEXT.split("\n") if l.strip()]
print(f"AGENT REPORT: {len(steps)} steps queued")
print("PROCESSED OK")`,
    solutionCode: `steps=[l.strip() for l in FILE_TEXT.split("\n") if l.strip()]
print(f"AGENT REPORT: {len(steps)} steps queued")
print("PROCESSED OK")`,
    validationPattern: "AGENT REPORT:",
    gitNotes: GIT_BASE,
  }
],
[
  {
    title: "Parser tests",
    scenario: "Assert file non-empty.",
    realWorldUse: "Tests guard parsers before prod.",
    requirements: ["Use FILE_TEXT from download or upload", "Print TESTS OK", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("intro.txt"),
    acceptsOwnFile: true,
    ownFileHint: "Empty upload should fail.",
    starterCode: `assert len(FILE_TEXT)>0
assert len(FILE_TEXT.split())>=1
print("TESTS OK")
print("PROCESSED OK")`,
    solutionCode: `assert len(FILE_TEXT)>0
assert len(FILE_TEXT.split())>=1
print("TESTS OK")
print("PROCESSED OK")`,
    validationPattern: "TESTS OK",
  },
  {
    title: "Compressor modules",
    scenario: "read_docs + report_sizes.",
    realWorldUse: "Separate read and report.",
    requirements: ["Use FILE_TEXT from download or upload", "Print MODULE OK", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("docs-bundle.json"),
    acceptsOwnFile: true,
    ownFileHint: "JSON filename:content map.",
    starterCode: `import json
def read_docs(t): return json.loads(t)
def report_sizes(d): return sum(len(v) for v in d.values())
docs=read_docs(FILE_TEXT)
print(f"MODULE OK: {report_sizes(docs)} bytes")
print("PROCESSED OK")`,
    solutionCode: `import json
def read_docs(t): return json.loads(t)
def report_sizes(d): return sum(len(v) for v in d.values())
docs=read_docs(FILE_TEXT)
print(f"MODULE OK: {report_sizes(docs)} bytes")
print("PROCESSED OK")`,
    validationPattern: "MODULE OK",
  },
  {
    title: "Batch doc stats",
    scenario: "Per-file char counts.",
    realWorldUse: "Compression audit trails.",
    requirements: ["Use FILE_TEXT from download or upload", "Print STATS", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("docs-bundle.json"),
    acceptsOwnFile: true,
    ownFileHint: "Add filenames to JSON.",
    starterCode: `import json
docs=json.loads(FILE_TEXT)
for n,b in docs.items(): print(f"  {n}: {len(b)} chars")
print(f"STATS: {len(docs)} files")
print("PROCESSED OK")`,
    solutionCode: `import json
docs=json.loads(FILE_TEXT)
for n,b in docs.items(): print(f"  {n}: {len(b)} chars")
print(f"STATS: {len(docs)} files")
print("PROCESSED OK")`,
    validationPattern: "STATS:",
  },
  {
    title: "Fix size bug",
    scenario: "Correct total byte sum.",
    realWorldUse: "Debug aggregation incidents.",
    requirements: ["Use FILE_TEXT from download or upload", "Print TOTAL BYTES", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("docs-bundle.json"),
    acceptsOwnFile: true,
    ownFileHint: "Verify sum of lengths.",
    starterCode: `import json
docs=json.loads(FILE_TEXT)
total=sum(len(b) for b in docs.values())
print(f"TOTAL BYTES: {total}")
print("PROCESSED OK")`,
    solutionCode: `import json
docs=json.loads(FILE_TEXT)
total=sum(len(b) for b in docs.values())
print(f"TOTAL BYTES: {total}")
print("PROCESSED OK")`,
    validationPattern: "TOTAL BYTES:",
  },
  {
    title: "DocPack ship",
    scenario: "ZIP bundle then GitHub.",
    realWorldUse: "Portfolio: compress, Git, deploy.",
    requirements: ["Use FILE_TEXT from download or upload", "Print SHIP READY", "Print PROCESSED OK"],
    edgeCases: ["Skip blank lines where relevant", "Your file may differ from sample — output should follow your data"],
    exampleFile: file("docs-bundle.json"),
    acceptsOwnFile: true,
    ownFileHint: "Then use ship panel for GitHub.",
    starterCode: `import io,json,zipfile
docs=json.loads(FILE_TEXT)
orig=sum(len(t.encode("utf-8")) for t in docs.values())
buf=io.BytesIO()
with zipfile.ZipFile(buf,"w",compression=zipfile.ZIP_DEFLATED) as zf:
    for n,t in docs.items(): zf.writestr(n,t)
print(f"Original: {orig} Compressed: {len(buf.getvalue())}")
print("SHIP READY")`,
    solutionCode: `import io,json,zipfile
docs=json.loads(FILE_TEXT)
orig=sum(len(t.encode("utf-8")) for t in docs.values())
buf=io.BytesIO()
with zipfile.ZipFile(buf,"w",compression=zipfile.ZIP_DEFLATED) as zf:
    for n,t in docs.items(): zf.writestr(n,t)
print(f"Original: {orig} Compressed: {len(buf.getvalue())}")
print("SHIP READY")`,
    validationPattern: "SHIP READY",
    gitNotes: GIT_BASE,
    runLocally: `python script.py`,
  }
],
];