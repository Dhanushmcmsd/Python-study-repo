import type { Level } from "../types";

export const WEEK8_LEVELS: Level[] = [
  {
    slug: "week8-level1-office-automation",
    title: "Office Automation Overview",
    phase: 2,
    day: 8,
    index_in_day: 1,
    level_type: "concept",
    summary: "Learn how Python automates spreadsheets, PDFs, and email.",
    lesson_content: `## Office Automation

Python can automate repetitive office work:

| Area | Real-world tool | Our approach (Pyodide) |
|------|-----------------|------------------------|
| Spreadsheets | openpyxl, pandas | **CSV strings** |
| PDFs | PyPDF2, pdfplumber | **Simulated text blocks** |
| Email | smtplib | **Template strings** |

### Why simulate?

In the browser we cannot read/write real files or send email. Instead we build the **same logic** with strings and data structures — skills transfer directly to desktop Python.

### Typical pipeline

1. **Extract** data (from CSV string or simulated PDF text)
2. **Transform** into a report
3. **Deliver** via formatted email template

Run the overview below.`,
    starter_code: `pipeline = ["extract_csv", "build_report", "send_email"]\n\nprint("=== Office Automation Pipeline ===")\nfor i, step in enumerate(pipeline, 1):\n    print(f"{i}. {step}")\nprint("Ready to automate!")`,
    solution_code: `pipeline = ["extract_csv", "build_report", "send_email"]\n\nprint("=== Office Automation Pipeline ===")\nfor i, step in enumerate(pipeline, 1):\n    print(f"{i}. {step}")\nprint("Ready to automate!")`,
    validation_type: "contains",
    validation_pattern: "Office Automation Pipeline",
    hints: ["Run to see the pipeline steps.", "enumerate(pipeline, 1) numbers from 1."],
  },
  {
    slug: "week8-level2-csv-strings",
    title: "CSV Reports as Strings",
    phase: 2,
    day: 8,
    index_in_day: 2,
    level_type: "run",
    summary: "Generate CSV-formatted reports using string building.",
    lesson_content: `## CSV as strings

A CSV (Comma-Separated Values) file is just text:

\`\`\`
name,department,sales
Alice,East,1200
Bob,West,980
\`\`\`

Build it in Python:

\`\`\`python
header = "name,department,sales"
row = f"{name},{dept},{sales}"
csv = header + "\\n" + row
\`\`\`

No file needed — the string **is** the report. Run the example.`,
    starter_code: `rows = [\n    {"name": "Alice", "dept": "East", "sales": 1200},\n    {"name": "Bob", "dept": "West", "sales": 980},\n]\n\nlines = ["name,department,sales"]\nfor r in rows:\n    lines.append(f"{r['name']},{r['dept']},{r['sales']}")\n\ncsv_report = "\\n".join(lines)\nprint(csv_report)`,
    solution_code: `rows = [\n    {"name": "Alice", "dept": "East", "sales": 1200},\n    {"name": "Bob", "dept": "West", "sales": 980},\n]\n\nlines = ["name,department,sales"]\nfor r in rows:\n    lines.append(f"{r['name']},{r['dept']},{r['sales']}")\n\ncsv_report = "\\n".join(lines)\nprint(csv_report)`,
    expected_output: "name,department,sales\nAlice,East,1200\nBob,West,980",
    validation_type: "contains",
    validation_pattern: "Alice,East,1200",
    hints: ["join(lines) combines rows with newlines.", "First line is the header."],
  },
  {
    slug: "week8-level3-modify-csv",
    title: "Modify CSV Headers",
    phase: 2,
    day: 8,
    index_in_day: 3,
    level_type: "modify",
    summary: "Add a totals row and fix CSV column headers.",
    lesson_content: `## Your task

The script builds a CSV but has wrong headers and no total.

Fix it to output:
\`\`\`
product,qty,price
Pen,10,15
Notebook,5,80
TOTAL,15,950
\`\`\`

- Change headers to \`product,qty,price\`
- Add a TOTAL row (qty=15, price=950)`,
    starter_code: `items = [\n    {"product": "Pen", "qty": 10, "price": 15},\n    {"product": "Notebook", "qty": 5, "price": 80},\n]\n\nlines = ["item,quantity,cost"]  # fix header\nfor item in items:\n    lines.append(f"{item['product']},{item['qty']},{item['price']}")\n# add TOTAL row\n\nprint("\\n".join(lines))`,
    solution_code: `items = [\n    {"product": "Pen", "qty": 10, "price": 15},\n    {"product": "Notebook", "qty": 5, "price": 80},\n]\n\nlines = ["product,qty,price"]\nfor item in items:\n    lines.append(f"{item['product']},{item['qty']},{item['price']}")\nlines.append("TOTAL,15,950")\n\nprint("\\n".join(lines))`,
    validation_type: "contains",
    validation_pattern: "TOTAL,15,950",
    hints: ["Fix the header string.", "Append TOTAL,15,950 as the last line.", "Use join to print."],
  },
  {
    slug: "week8-level4-csv-report",
    title: "Build a Sales CSV Report",
    phase: 2,
    day: 8,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Generate a complete CSV sales report from a list of records.",
    lesson_content: `## Sales CSV report

Given sales data, produce a CSV string and print it.

### Your task

1. Header: \`date,product,amount\`
2. Loop through \`sales\` and add each row
3. Append a summary line: \`SUMMARY,,2180\` (total of amounts)
4. Print the full CSV`,
    starter_code: `sales = [\n    {"date": "2026-01-10", "product": "Widget", "amount": 450},\n    {"date": "2026-01-11", "product": "Gadget", "amount": 730},\n    {"date": "2026-01-12", "product": "Widget", "amount": 1000},\n]\n\n# Build and print CSV report\n`,
    solution_code: `sales = [\n    {"date": "2026-01-10", "product": "Widget", "amount": 450},\n    {"date": "2026-01-11", "product": "Gadget", "amount": 730},\n    {"date": "2026-01-12", "product": "Widget", "amount": 1000},\n]\n\nlines = ["date,product,amount"]\nfor s in sales:\n    lines.append(f"{s['date']},{s['product']},{s['amount']}")\nlines.append("SUMMARY,,2180")\nprint("\\n".join(lines))`,
    validation_type: "contains",
    validation_pattern: "SUMMARY,,2180",
    hints: ["Start with lines = ['date,product,amount'].", "Loop sales and append formatted rows.", "Add SUMMARY line at the end."],
  },
  {
    slug: "week8-level5-pdf-simulation",
    title: "Simulated PDF Text Extraction",
    phase: 2,
    day: 8,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Parse text from a simulated PDF document string.",
    lesson_content: `## PDF extraction (simulated)

Real PDF tools extract text from binary files. We simulate with a multi-line string:

\`\`\`python
pdf_text = """
INVOICE #1042
Customer: Acme Corp
Amount: 1500.00
Due: 2026-02-01
"""
\`\`\`

Parse key fields by searching lines:

\`\`\`python
for line in pdf_text.strip().split("\\n"):
    if line.startswith("Amount:"):
        amount = line.split(":")[1].strip()
\`\`\`

### Your task

Extract \`customer\` and \`amount\` from \`pdf_text\` and print:
\`Customer: Acme Corp | Amount: 1500.00\``,
    starter_code: `pdf_text = """\nINVOICE #1042\nCustomer: Acme Corp\nAmount: 1500.00\nDue: 2026-02-01\n"""\n\ncustomer = ""\namount = ""\n\n# Parse pdf_text\n\nprint(f"Customer: {customer} | Amount: {amount}")`,
    solution_code: `pdf_text = """\nINVOICE #1042\nCustomer: Acme Corp\nAmount: 1500.00\nDue: 2026-02-01\n"""\n\ncustomer = ""\namount = ""\n\nfor line in pdf_text.strip().split("\\n"):\n    if line.startswith("Customer:"):\n        customer = line.split(":", 1)[1].strip()\n    elif line.startswith("Amount:"):\n        amount = line.split(":", 1)[1].strip()\n\nprint(f"Customer: {customer} | Amount: {amount}")`,
    validation_type: "contains",
    validation_pattern: "Customer: Acme Corp | Amount: 1500.00",
    hints: ["Split pdf_text by newlines.", "Check line.startswith('Customer:').", "Use split(':', 1)[1].strip() for the value."],
  },
  {
    slug: "week8-level6-email-templates",
    title: "Email Template Building",
    phase: 2,
    day: 8,
    index_in_day: 6,
    level_type: "run",
    summary: "Build professional emails from reusable templates.",
    lesson_content: `## Email templates

Automated emails use templates with placeholders:

\`\`\`python
template = """Subject: {subject}

Hi {name},

{body}

Regards,
{sender}
"""

email = template.format(
    subject="Weekly Report",
    name="Team",
    body="Sales are up 12%.",
    sender="ReportBot",
)
print(email)
\`\`\`

Run the example to see a filled template.`,
    starter_code: `template = """Subject: {subject}\n\nHi {name},\n\n{body}\n\nRegards,\n{sender}\n"""\n\nemail = template.format(\n    subject="Weekly Report",\n    name="Team",\n    body="Sales are up 12% this week.",\n    sender="ReportBot",\n)\n\nprint(email)`,
    solution_code: `template = """Subject: {subject}\n\nHi {name},\n\n{body}\n\nRegards,\n{sender}\n"""\n\nemail = template.format(\n    subject="Weekly Report",\n    name="Team",\n    body="Sales are up 12% this week.",\n    sender="ReportBot",\n)\n\nprint(email)`,
    validation_type: "contains",
    validation_pattern: "Subject: Weekly Report",
    hints: ["template.format() fills placeholders.", "Curly braces {name} are replaced with values."],
  },
  {
    slug: "week8-level7-email-with-report",
    title: "Email + CSV Summary",
    phase: 2,
    day: 8,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Combine CSV data into an email body template.",
    lesson_content: `## Report email

Build an email body that includes CSV summary stats.

### Your task

1. Calculate \`total\` from \`amounts\` list
2. Build \`body\` string: \`Total sales: [total] across [count] records.\`
3. Fill the template and print the email`,
    starter_code: `amounts = [450, 730, 1000]\n\ntemplate = """Subject: {subject}\n\nHi {name},\n\n{body}\n\nRegards,\n{sender}\n"""\n\n# Calculate total, build body, print email\n`,
    solution_code: `amounts = [450, 730, 1000]\n\ntemplate = """Subject: {subject}\n\nHi {name},\n\n{body}\n\nRegards,\n{sender}\n"""\n\ntotal = sum(amounts)\ncount = len(amounts)\nbody = f"Total sales: {total} across {count} records."\n\nemail = template.format(\n    subject="Sales Summary",\n    name="Manager",\n    body=body,\n    sender="ReportBot",\n)\nprint(email)`,
    validation_type: "contains",
    validation_pattern: "Total sales: 2180",
    hints: ["sum(amounts) for total.", "len(amounts) for count.", "Pass body into template.format()."],
  },
  {
    slug: "week8-level8-debug-csv",
    title: "Debug: CSV Formatting",
    phase: 2,
    day: 8,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix bugs in CSV row generation.",
    lesson_content: `## Debug CSV

Common CSV bugs:
- Wrong separator (semicolon vs comma)
- Missing newline between rows
- Forgetting to convert numbers to strings in f-strings (usually fine in Python)

Fix this code to print:
\`\`\`
id,name
1,Alpha
2,Beta
\`\`\``,
    starter_code: `records = [{"id": 1, "name": "Alpha"}, {"id": 2, "name": "Beta"}]\n\nlines = ["id;name"]\nfor r in records:\n    lines.append(f"{r['id']}-{r['name']}")\nprint("".join(lines))`,
    solution_code: `records = [{"id": 1, "name": "Alpha"}, {"id": 2, "name": "Beta"}]\n\nlines = ["id,name"]\nfor r in records:\n    lines.append(f"{r['id']},{r['name']}")\nprint("\\n".join(lines))`,
    expected_output: "id,name\n1,Alpha\n2,Beta",
    validation_type: "contains",
    validation_pattern: "2,Beta",
    hints: ["Header should use commas not semicolons.", "Rows need comma separator.", "join with \\n not empty string."],
  },
  {
    slug: "week8-level9-quiz",
    title: "Week 8 Checkpoint",
    phase: 2,
    day: 8,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Combine CSV, PDF parsing, and email templates.",
    lesson_content: `## Week 8 Checkpoint

Given simulated PDF text, extract the invoice ID and build a one-line CSV + email subject.

1. Parse \`Invoice ID: 99\` from \`doc\`
2. Print CSV: \`invoice_id,status\\n99,processed\`
3. Print subject line: \`Subject: Invoice 99 Processed\``,
    starter_code: `doc = "Invoice ID: 99\\nCustomer: TestCo\\nStatus: Paid"\n\n# Extract ID, print CSV and subject\n`,
    solution_code: `doc = "Invoice ID: 99\\nCustomer: TestCo\\nStatus: Paid"\n\ninvoice_id = ""\nfor line in doc.split("\\n"):\n    if line.startswith("Invoice ID:"):\n        invoice_id = line.split(":", 1)[1].strip()\n\nprint(f"invoice_id,status\\n{invoice_id},processed")\nprint(f"Subject: Invoice {invoice_id} Processed")`,
    validation_type: "contains",
    validation_pattern: "Subject: Invoice 99 Processed",
    hints: ["Parse Invoice ID like earlier PDF exercise.", "Use f-string for CSV second row.", "Print subject on its own line."],
  },
  {
    slug: "week8-level10-project",
    title: "Week 8 Project — Report Pipeline",
    phase: 2,
    day: 8,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a full office automation pipeline: extract, report, email.",
    lesson_content: `## Week 8 Project 🎯

Build an **Office Report Pipeline** that:

1. Parses simulated PDF invoice text for customer and amount
2. Builds a CSV report string with header + one data row
3. Sends a formatted email (print the email, don't actually send)

### Input

\`\`\`python
pdf_text = "Invoice\\nCustomer: Globex\\nAmount: 2400"
\`\`\`

### Expected output includes

\`\`\`
=== CSV Report ===
customer,amount
Globex,2400
=== Email ===
Subject: Invoice Report for Globex
...
Total billed: 2400
\`\`\``,
    starter_code: `pdf_text = "Invoice\\nCustomer: Globex\\nAmount: 2400"\n\ntemplate = """Subject: {subject}\n\nDear {name},\n\n{body}\n\nRegards,\\nFinance Bot\n"""\n\n# 1. Parse PDF text\n# 2. Build CSV\n# 3. Build and print email\n`,
    solution_code: `pdf_text = "Invoice\\nCustomer: Globex\\nAmount: 2400"\n\ntemplate = """Subject: {subject}\n\nDear {name},\n\n{body}\n\nRegards,\\nFinance Bot\n"""\n\ncustomer = ""\namount = ""\nfor line in pdf_text.split("\\n"):\n    if line.startswith("Customer:"):\n        customer = line.split(":", 1)[1].strip()\n    elif line.startswith("Amount:"):\n        amount = line.split(":", 1)[1].strip()\n\ncsv_lines = ["customer,amount", f"{customer},{amount}"]\nprint("=== CSV Report ===")\nprint("\\n".join(csv_lines))\n\nbody = f"Please find your invoice summary.\\nTotal billed: {amount}"\nemail = template.format(\n    subject=f"Invoice Report for {customer}",\n    name=customer,\n    body=body,\n)\nprint("=== Email ===")\nprint(email)`,
    validation_type: "contains",
    validation_pattern: "Total billed: 2400",
    hints: ["Parse customer and amount first.", "Build csv_lines list then join.", "Use template.format for the email."],
  },
];
