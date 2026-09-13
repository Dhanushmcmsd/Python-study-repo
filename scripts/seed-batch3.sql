INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level1-functions-intro',
  'What Are Functions?',
  1,
  3,
  1,
  'concept',
  'Understand reusable blocks of code.',
  '## Functions

A **function** is a reusable block of code with a name.

Instead of writing the same code repeatedly, you define it once and **call** it whenever needed.

```python
def greet():
    print("Hello!")

greet()  # calls the function
greet()  # call it again
```

Think of functions like a **blender button** — press it anytime to get the same result.',
  'def say_hello():
    print("Hello from a function!")
    print("Functions save time.")

say_hello()
say_hello()',
  'def say_hello():
    print("Hello from a function!")
    print("Functions save time.")

say_hello()
say_hello()',
  NULL,
  'contains',
  'Hello from a function',
  ARRAY['def starts a function definition.', 'Call it with say_hello() — include parentheses.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level2-define-function',
  'Define Your First Function',
  1,
  3,
  2,
  'exercise',
  'Write and call a custom function.',
  '## Creating functions

```python
def show_menu():
    print("1. New task")
    print("2. View tasks")
    print("3. Exit")

show_menu()
```

### Your task

Create a function `show_status()` that prints 3 lines about a project status.',
  '# Define show_status() below


# Call your function
',
  'def show_status():
    print("Project: Python Automation")
    print("Status: In Progress")
    print("Completion: 30%")

show_status()',
  NULL,
  'contains',
  'Status:',
  ARRAY['Use def show_status(): with indented body.', 'Don''t forget to call the function at the end.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level3-parameters',
  'Function Parameters',
  1,
  3,
  3,
  'exercise',
  'Pass data into functions.',
  '## Parameters

Functions can accept **inputs** (parameters):

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alex")
greet("Sam")
```

### Your task

Create `calculate_tax(price, rate)` that prints the tax amount.',
  '# price = 1000, rate = 0.18 should print 180.0

def calculate_tax(price, rate):
    # Your code here
    pass

calculate_tax(1000, 0.18)',
  'def calculate_tax(price, rate):
    tax = price * rate
    print(tax)

calculate_tax(1000, 0.18)',
  NULL,
  'contains',
  '180',
  ARRAY['tax = price * rate', 'Print the tax value.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level4-return',
  'Return Values',
  1,
  3,
  4,
  'exercise',
  'Get results back from functions.',
  '## return

Functions can **send back** a result:

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
```

`return` stops the function and gives back a value.

### Your task

Write `discount(price, percent)` that returns the discounted price.',
  'def discount(price, percent):
    # Return the discounted price
    pass

final = discount(200, 10)
print(final)',
  'def discount(price, percent):
    return price - (price * percent / 100)

final = discount(200, 10)
print(final)',
  NULL,
  'contains',
  '180',
  ARRAY['discount = price * percent / 100', 'return price - discount_amount']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level5-builtins',
  'Built-in Functions',
  1,
  3,
  5,
  'run',
  'Use Python''s ready-made functions.',
  '## Built-in functions

Python includes many useful functions:

| Function | Purpose |
|----------|---------|
| `len()` | Count items |
| `sum()` | Add numbers |
| `max()` / `min()` | Largest / smallest |
| `round()` | Round decimals |

```python
numbers = [10, 20, 30, 40]
print(sum(numbers))
print(max(numbers))
```',
  'sales = [1200, 890, 2100, 750, 1650]

print(f"Total sales: {sum(sales)}")
print(f"Best day: {max(sales)}")
print(f"Average: {round(sum(sales) / len(sales))}")',
  'sales = [1200, 890, 2100, 750, 1650]
print(f"Total sales: {sum(sales)}")
print(f"Best day: {max(sales)}")
print(f"Average: {round(sum(sales) / len(sales))}")',
  NULL,
  'contains',
  'Total sales',
  ARRAY['Run the code to see built-ins in action.', 'len(sales) gives the count of items.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level6-datetime',
  'Working with Dates',
  1,
  3,
  6,
  'run',
  'Use the datetime module for automation.',
  '## datetime module

Automation often needs dates and times:

```python
from datetime import datetime

now = datetime.now()
print(now.strftime("%Y-%m-%d"))
print(now.strftime("%H:%M"))
```

This is the foundation of **scheduled automation** — reports, reminders, backups.',
  'from datetime import datetime

now = datetime.now()
print("Today''s date:", now.strftime("%Y-%m-%d"))
print("Current time:", now.strftime("%H:%M"))
print("Report generated successfully!")',
  'from datetime import datetime

now = datetime.now()
print("Today''s date:", now.strftime("%Y-%m-%d"))
print("Current time:", now.strftime("%H:%M"))
print("Report generated successfully!")',
  NULL,
  'contains',
  'Report generated',
  ARRAY['Run to see today''s actual date.', 'strftime formats the datetime object.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level7-automation-intro',
  'Your First Automation',
  1,
  3,
  7,
  'exercise',
  'Combine functions to automate a task.',
  '## Mini automation

Real automation = functions + loops + data:

```python
def process_item(item):
    print(f"Processing: {item} ✓")

items = ["email", "invoice", "report"]
for item in items:
    process_item(item)
```

### Your task

Create `send_notification(user)` and loop through 3 users.',
  'users = ["alice@co.com", "bob@co.com", "carol@co.com"]

def send_notification(user):
    # Print: Sending notification to: [user]
    pass

# Loop through users
',
  'users = ["alice@co.com", "bob@co.com", "carol@co.com"]

def send_notification(user):
    print(f"Sending notification to: {user}")

for user in users:
    send_notification(user)',
  NULL,
  'contains',
  'carol@co.com',
  ARRAY['Define the function first, then loop.', 'Use f-string in the print.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level8-debug',
  'Debug: Function Errors',
  1,
  3,
  8,
  'debug',
  'Fix function definition and call errors.',
  '## Debug functions

Common function bugs:
- Missing colon after def line
- Wrong indentation in function body
- Forgetting parentheses when calling

Fix this code to print "Area: 50"',
  'def calculate_area(width, height)
return width * height

result = calculate_area(5, 10)
print(f"Area: {result}")',
  'def calculate_area(width, height):
    return width * height

result = calculate_area(5, 10)
print(f"Area: {result}")',
  NULL,
  'contains',
  'Area: 50',
  ARRAY['Add colon after the def line.', 'Indent return inside the function.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level9-quiz',
  'Day 3 Checkpoint',
  1,
  3,
  9,
  'quiz',
  'Functions quiz before the final project.',
  '## Checkpoint

Write a function `format_report(title, value)` that returns a formatted string:
`"Report: [title] | Value: [value]"`

Then print the result for title="Sales" and value=5000.',
  'def format_report(title, value):
    # Return formatted string
    pass

result = format_report("Sales", 5000)
print(result)',
  'def format_report(title, value):
    return f"Report: {title} | Value: {value}"

result = format_report("Sales", 5000)
print(result)',
  NULL,
  'contains',
  'Report: Sales',
  ARRAY['Use return with an f-string.', 'Call the function and print the result.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level10-project',
  'Day 3 Project — Daily Report Generator',
  1,
  3,
  10,
  'project',
  'Build an automated daily report script.',
  '## Day 3 Project 🎯

Build a **Daily Report Generator** — your first automation tool!

### Requirements

1. Function `generate_header()` — prints report header with today''s date
2. Function `add_metric(name, value)` — prints each metric
3. Function `generate_footer(total)` — prints summary
4. Main code that reports 3 metrics and a total

### Expected format

```
=== DAILY AUTOMATION REPORT ===
Date: 2026-01-15
Metric: Emails sent | Value: 45
Metric: Tasks completed | Value: 12
Metric: Files processed | Value: 8
---
Total activities: 65
Report complete ✓
```',
  'from datetime import datetime

def generate_header():
    pass

def add_metric(name, value):
    pass

def generate_footer(total):
    pass

# Main report logic
metrics = [("Emails sent", 45), ("Tasks completed", 12), ("Files processed", 8)]
',
  'from datetime import datetime

def generate_header():
    print("=== DAILY AUTOMATION REPORT ===")
    print(f"Date: {datetime.now().strftime(''%Y-%m-%d'')}")

def add_metric(name, value):
    print(f"Metric: {name} | Value: {value}")

def generate_footer(total):
    print("---")
    print(f"Total activities: {total}")
    print("Report complete ✓")

metrics = [("Emails sent", 45), ("Tasks completed", 12), ("Files processed", 8)]
generate_header()
total = 0
for name, value in metrics:
    add_metric(name, value)
    total += value
generate_footer(total)',
  NULL,
  'contains',
  'DAILY AUTOMATION REPORT',
  ARRAY['Build one function at a time and test.', 'Use a loop for metrics and accumulate total.', 'datetime.now().strftime(''%Y-%m-%d'') for date.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;