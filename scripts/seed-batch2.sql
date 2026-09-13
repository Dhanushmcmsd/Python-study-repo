INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day2-level1-booleans',
  'True & False',
  1,
  2,
  1,
  'concept',
  'Learn boolean values — the foundation of decisions.',
  '## Booleans

Programs often need to answer yes/no questions. Python uses:
- `True` — yes
- `False` — no

```python
is_logged_in = True
has_permission = False
print(is_logged_in)
```

Comparisons return booleans:
```python
print(5 > 3)   # True
print(10 == 10) # True (== means "equals")
print(4 != 4)   # False (!= means "not equal")
```',
  'print(5 > 3)
print(10 == 10)
print(2 + 2 == 5)
print("Python" == "python")',
  'print(5 > 3)
print(10 == 10)
print(2 + 2 == 5)
print("Python" == "python")',
  NULL,
  'contains',
  'True',
  ARRAY['Run the code first to see the results.', '== checks equality, = assigns values.']
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
  'day2-level2-if',
  'If Statements',
  1,
  2,
  2,
  'run',
  'Make code run only when a condition is true.',
  '## if statements

Run code **only when a condition is true**:

```python
temperature = 35
if temperature > 30:
    print("It''s hot outside!")
```

**Important:** The line after `if` must be **indented** (4 spaces).

### Your task

Run the code, then change the temperature to trigger the message.',
  'temperature = 25

if temperature > 30:
    print("It''s hot outside!")
else:
    print("Nice weather today.")',
  'temperature = 35

if temperature > 30:
    print("It''s hot outside!")
else:
    print("Nice weather today.")',
  NULL,
  'contains',
  'hot',
  ARRAY['Change temperature to 35 to see the hot message.', 'Indentation matters in Python!']
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
  'day2-level3-elif',
  'elif & else',
  1,
  2,
  3,
  'modify',
  'Handle multiple conditions with elif.',
  '## elif and else

```python
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")
```

- `elif` = "else if" — check another condition
- `else` = catch-all when nothing else matched

### Your task

Add an `elif` for grade C (score >= 70) and D (score >= 60).',
  'score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
# Add elif for C and D below
else:
    print("Grade: F")',
  'score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")',
  NULL,
  'contains',
  'Grade: C',
  ARRAY['Add elif score >= 70: before the else.', 'Check conditions from highest to lowest.']
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
  'day2-level4-comparisons',
  'Comparison Practice',
  1,
  2,
  4,
  'exercise',
  'Write conditions for real-world scenarios.',
  '## Real-world conditions

```python
age = 20
if age >= 18:
    print("You can vote.")
```

### Your task

Given a `balance` variable, print:
- "Sufficient funds" if balance >= 100
- "Low balance" if balance >= 10 but less than 100
- "Critical: add funds" otherwise',
  'balance = 50

# Write your if/elif/else here
',
  'balance = 50

if balance >= 100:
    print("Sufficient funds")
elif balance >= 10:
    print("Low balance")
else:
    print("Critical: add funds")',
  NULL,
  'contains',
  'Low balance',
  ARRAY['Start with the highest threshold.', 'Use elif for the middle case.']
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
  'day2-level5-while',
  'While Loops',
  1,
  2,
  5,
  'run',
  'Repeat code while a condition is true.',
  '## while loops

Repeat code until a condition becomes false:

```python
count = 1
while count <= 3:
    print(f"Count: {count}")
    count = count + 1
```

**Watch out for infinite loops!** Always make sure the condition eventually becomes false.',
  'count = 1
while count <= 5:
    print(f"Learning step {count}")
    count = count + 1
print("Done!")',
  'count = 1
while count <= 5:
    print(f"Learning step {count}")
    count = count + 1
print("Done!")',
  NULL,
  'contains',
  'Learning step 5',
  ARRAY['The loop runs while count <= 5.', 'count = count + 1 increases the counter.']
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
  'day2-level6-for',
  'For Loops',
  1,
  2,
  6,
  'exercise',
  'Loop through a sequence of items.',
  '## for loops

Loop through each item in a sequence:

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

You can also loop through a range of numbers:
```python
for i in range(1, 4):
    print(i)  # 1, 2, 3
```

### Your task

Print each task in the list with its number (1. Send email, 2. Update report, etc.)',
  'tasks = ["Send email", "Update report", "Backup files"]

# Loop and print numbered tasks
',
  'tasks = ["Send email", "Update report", "Backup files"]

for i, task in enumerate(tasks, 1):
    print(f"{i}. {task}")',
  NULL,
  'contains',
  '1. Send email',
  ARRAY['Use enumerate(tasks, 1) to get index and item.', 'Or use range(len(tasks)) with manual indexing.']
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
  'day2-level7-lists',
  'Lists Basics',
  1,
  2,
  7,
  'exercise',
  'Store multiple values in a list.',
  '## Lists

A **list** holds multiple values in order:

```python
colors = ["red", "green", "blue"]
print(colors[0])  # red (index starts at 0)
print(len(colors))  # 3
```

### Useful operations

```python
colors.append("yellow")  # add to end
colors.remove("red")     # remove item
```

### Your task

Create a list of 3 expenses, print the total using a loop.',
  'expenses = [1200, 450, 89]

# Calculate total using a for loop
total = 0

print(f"Total expenses: {total}")',
  'expenses = [1200, 450, 89]
total = 0
for expense in expenses:
    total = total + expense
print(f"Total expenses: {total}")',
  NULL,
  'contains',
  '1739',
  ARRAY['Start total at 0.', 'Add each expense inside the loop.']
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
  'day2-level8-debug',
  'Debug: Loop Errors',
  1,
  2,
  8,
  'debug',
  'Fix indentation and loop bugs.',
  '## Debug: Loops

Common loop bugs:
- Wrong indentation
- Forgetting to update the counter in while loops
- Off-by-one errors in range()

### Your task

Fix this code to print numbers 1 through 3.',
  'for i in range(1, 4)
print(i)',
  'for i in range(1, 4):
    print(i)',
  NULL,
  'contains',
  '3',
  ARRAY['Missing colon after range(1, 4)', 'print must be indented inside the for loop.']
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
  'day2-level9-quiz',
  'Day 2 Checkpoint',
  1,
  2,
  9,
  'quiz',
  'Test your decision and loop skills.',
  '## Checkpoint

Write code that:
1. Has a list: `["Mon", "Tue", "Wed", "Thu", "Fri"]`
2. Loops through each day
3. Prints "Work day: Mon" for each (using f-string)',
  'days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

# Your loop here
',
  'days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
for day in days:
    print(f"Work day: {day}")',
  NULL,
  'contains',
  'Work day: Fri',
  ARRAY['Use for day in days:', 'Indent the print statement.']
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
  'day2-level10-project',
  'Day 2 Project — Expense Tracker',
  1,
  2,
  10,
  'project',
  'Build a simple expense tracking script.',
  '## Day 2 Project 🎯

Build an expense tracker that:
1. Has a list of expenses: [500, 1200, 75, 300, 890]
2. Calculates the total
3. Prints how many expenses are over 200
4. Prints a summary

Expected output format:
```
=== Expense Report ===
Total: 2965
Over 200: 3 expenses
Status: Review needed
```',
  'expenses = [500, 1200, 75, 300, 890]

# Your code here
',
  'expenses = [500, 1200, 75, 300, 890]
total = sum(expenses)
over_200 = 0
for e in expenses:
    if e > 200:
        over_200 = over_200 + 1

print("=== Expense Report ===")
print(f"Total: {total}")
print(f"Over 200: {over_200} expenses")
print("Status: Review needed")',
  NULL,
  'contains',
  'Expense Report',
  ARRAY['Use a loop with if e > 200 to count.', 'sum(expenses) gives the total quickly.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;
