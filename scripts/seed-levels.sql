INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day1-level1-welcome',
  'Welcome to Python',
  1,
  1,
  1,
  'concept',
  'Understand what Python is and why it powers automation.',
  '## What is Python?

Python is a **programming language** â€” a way to give step-by-step instructions to a computer.

Think of it like writing a recipe:
1. Gather ingredients (data)
2. Follow steps (code)
3. Get a result (output)

### Why Python for automation?

- **Readable** â€” looks almost like English
- **Powerful** â€” used by Google, Netflix, NASA
- **Perfect for beginners** â€” you can see results immediately

### Your learning path

Each day has **10 levels**. You will:
- Read a short lesson
- Run live code examples
- Complete hands-on exercises
- Track your progress

> No prior coding experience needed. Take your time on each level.',
  '# Welcome! This is a comment â€” Python ignores it.
# Click "Run code" to see what happens below.

print("Welcome to Python Automation!")
print("You are on Level 1 â€” great start!")',
  'print("Welcome to Python Automation!")
print("You are on Level 1 â€” great start!")',
  'Welcome to Python Automation!
You are on Level 1 â€” great start!',
  'contains',
  'Welcome to Python',
  ARRAY['Click the green Run button to execute your code.', 'Comments start with # and are ignored by Python.']
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
  'day1-level2-hello',
  'Your First Print',
  1,
  1,
  2,
  'run',
  'Use print() to display text on screen.',
  '## The print() function

`print()` is the most common Python command. It **shows text on screen**.

```python
print("Hello, World!")
```

### Rules to remember

- Text goes inside **quotes** ("like this" or ''like this'')
- Parentheses `()` are required
- Python runs top to bottom, one line at a time

**Try it:** Run the code, then change the message to your name!',
  'print("Hello, World!")
print("I am learning Python today.")',
  'print("Hello, World!")
print("I am learning Python today.")',
  'Hello, World!
I am learning Python today.',
  'contains',
  'Hello',
  ARRAY['Make sure your text is inside quotes.', 'Each print() shows on its own line.']
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
  'day1-level3-comments',
  'Comments & Clean Code',
  1,
  2,
  1,
  'modify',
  'Add comments to explain your code.',
  '## Comments

Comments help **you and others** understand code. Python ignores them completely.

```python
# This is a comment
print("This runs")  # This comment is on the same line
```

### Your task

Add a comment above each `print()` line explaining what it does.',
  'print("Step 1: Open your editor")
print("Step 2: Write Python code")
print("Step 3: Run and celebrate!")',
  '# Step 1
print("Step 1: Open your editor")
# Step 2
print("Step 2: Write Python code")
# Step 3
print("Step 3: Run and celebrate!")',
  'Step 1: Open your editor
Step 2: Write Python code
Step 3: Run and celebrate!',
  'contains',
  'Step 3',
  ARRAY['Start a comment with the # symbol.', 'Comments can be on their own line or after code.']
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
  'day1-level4-variables',
  'Variables â€” Storing Data',
  1,
  2,
  2,
  'exercise',
  'Store information in named containers called variables.',
  '## Variables

A **variable** is a named box that stores a value.

```python
name = "Alex"
age = 25
```

- Use `=` to assign a value
- Variable names should be descriptive (use `user_name`, not `x`)
- No spaces in names â€” use underscores

### Your task

Create variables for your name, age, and city. Print all three.',
  '# Create your variables below
name = 
age = 
city = 

# Print them
print(name)
print(age)
print(city)',
  'name = "Alex"
age = 28
city = "Mumbai"
print(name)
print(age)
print(city)',
  NULL,
  'contains',
  'print',
  ARRAY['Text values need quotes: name = "Your Name"', 'Numbers don''t need quotes: age = 30']
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
  'day1-level5-numbers',
  'Numbers & Math',
  1,
  3,
  1,
  'exercise',
  'Perform calculations with Python.',
  '## Numbers in Python

Python can do math instantly:

| Operator | Meaning   | Example    |
|----------|-----------|------------|
| `+`      | Add       | `5 + 3 = 8`  |
| `-`      | Subtract  | `10 - 4 = 6` |
| `*`      | Multiply  | `6 * 7 = 42` |
| `/`      | Divide    | `20 / 4 = 5` |

```python
price = 100
tax = price * 0.18
total = price + tax
print(total)
```

### Your task

Calculate the total cost of 3 items priced at 250, 180, and 95. Print the total.',
  'item1 = 250
item2 = 180
item3 = 95

# Calculate and print the total
total = 
print(total)',
  'item1 = 250
item2 = 180
item3 = 95
total = item1 + item2 + item3
print(total)',
  '525',
  'output',
  '525',
  ARRAY['Add all three variables together.', 'Use + to add numbers.']
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
  'day1-level6-strings',
  'Working with Text',
  1,
  3,
  2,
  'exercise',
  'Combine and format text strings.',
  '## Strings

Strings are text values in quotes.

### Combining strings

```python
first = "Hello"
second = "Python"
message = first + " " + second
print(message)  # Hello Python
```

### f-strings (modern way)

```python
name = "Sam"
print(f"Welcome, {name}!")
```

### Your task

Create a greeting that says: `Hello, my name is [name] and I live in [city].`',
  'name = "Priya"
city = "Delhi"

# Use an f-string to create your greeting
greeting = f""
print(greeting)',
  'name = "Priya"
city = "Delhi"
greeting = f"Hello, my name is {name} and I live in {city}."
print(greeting)',
  NULL,
  'contains',
  'Hello, my name is',
  ARRAY['Use f"text {variable} more text" format.', 'Curly braces {} insert variable values.']
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
  'day1-level7-input-sim',
  'Getting User Input',
  1,
  4,
  1,
  'modify',
  'Simulate user input with variables.',
  '## Input (simulated)

In real programs, `input()` asks the user for data. In this playground, we simulate it with variables.

```python
user_name = "Jordan"  # Simulating: input("Your name? ")
print(f"Nice to meet you, {user_name}!")
```

### Your task

Change the simulated inputs to your own name and favorite hobby. Print a friendly message.',
  'user_name = "Student"
hobby = "reading"

print(f"Hi {user_name}! I heard you love {hobby}.")',
  'user_name = "Alex"
hobby = "coding"
print(f"Hi {user_name}! I heard you love {hobby}.")',
  NULL,
  'contains',
  'Hi',
  ARRAY['Change the values of user_name and hobby.', 'Keep the f-string format the same.']
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
  'day1-level8-debug',
  'Debug Challenge',
  1,
  4,
  2,
  'debug',
  'Find and fix errors in broken code.',
  '## Debugging

**Bugs** are mistakes in code. Reading error messages helps you fix them.

Common mistakes:
- Missing quotes around text
- Wrong capitalization (`Print` vs `print`)
- Missing parentheses

### Your task

This code has **3 bugs**. Fix them so it prints:
```
Python is fun!
I am a developer.
```',
  'Print("Python is fun!")
print(I am a developer.)',
  'print("Python is fun!")
print("I am a developer.")',
  'Python is fun!
I am a developer.',
  'output',
  'Python is fun!
I am a developer.',
  ARRAY['Python is lowercase: print not Print.', 'Text needs quotes on both sides.', 'Check the second print line carefully.']
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
  'day1-level9-quiz',
  'Checkpoint Quiz',
  1,
  5,
  1,
  'quiz',
  'Predict the output and write code from memory.',
  '## Day 1 Checkpoint

Before the project, let''s verify your skills.

### Quick review

1. `print()` displays output
2. Variables store data with `=`
3. f-strings format text: `f"Hello {name}"`
4. `#` creates comments

### Your task

Write code that:
1. Creates a variable `language` set to `"Python"`
2. Creates a variable `rating` set to `5`
3. Prints: `Python gets 5 stars!`',
  '# Write your solution here
',
  'language = "Python"
rating = 5
print(f"{language} gets {rating} stars!")',
  NULL,
  'contains',
  'stars',
  ARRAY['Use an f-string for the final print.', 'language = "Python" with quotes.']
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
  'day1-level10-project',
  'Day 1 Project â€” Personal Intro',
  1,
  5,
  2,
  'project',
  'Build a personal introduction script.',
  '## Day 1 Project ðŸŽ¯

Combine everything you learned today!

### Requirements

Create a script that prints a personal introduction with:
- Your name
- Your city
- One goal for learning Python
- A calculated "days until goal" (use a variable set to 90)

### Example output

```
=== My Python Journey ===
Name: Alex
City: Mumbai
Goal: Automate my daily reports
Days to achieve: 90
Let''s go!
```

This is your first real mini-program. Take pride in it!',
  '# Day 1 Project â€” Personal Introduction

name = "Your Name"
city = "Your City"
goal = "Your goal here"
days = 90

# Print your introduction below
',
  'name = "Alex"
city = "Mumbai"
goal = "Automate my daily reports"
days = 90

print("=== My Python Journey ===")
print(f"Name: {name}")
print(f"City: {city}")
print(f"Goal: {goal}")
print(f"Days to achieve: {days}")
print("Let''s go!")',
  NULL,
  'contains',
  'My Python Journey',
  ARRAY['Use multiple print() statements.', 'Use f-strings for lines with variables.', 'Include the header line exactly.']
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
  'day2-level1-booleans',
  'True & False',
  1,
  6,
  1,
  'concept',
  'Learn boolean values â€” the foundation of decisions.',
  '## Booleans

Programs often need to answer yes/no questions. Python uses:
- `True` â€” yes
- `False` â€” no

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
  6,
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
  7,
  1,
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

- `elif` = "else if" â€” check another condition
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
  7,
  2,
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
  8,
  1,
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
  8,
  2,
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
  9,
  1,
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
  9,
  2,
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
  10,
  1,
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
  'Day 2 Project â€” Expense Tracker',
  1,
  10,
  2,
  'project',
  'Build a simple expense tracking script.',
  '## Day 2 Project ðŸŽ¯

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

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'day3-level1-functions-intro',
  'What Are Functions?',
  1,
  11,
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

Think of functions like a **blender button** â€” press it anytime to get the same result.',
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
  ARRAY['def starts a function definition.', 'Call it with say_hello() â€” include parentheses.']
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
  11,
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
  12,
  1,
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
  12,
  2,
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
  13,
  1,
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
  13,
  2,
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

This is the foundation of **scheduled automation** â€” reports, reminders, backups.',
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
  14,
  1,
  'exercise',
  'Combine functions to automate a task.',
  '## Mini automation

Real automation = functions + loops + data:

```python
def process_item(item):
    print(f"Processing: {item} âœ“")

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
  14,
  2,
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
  15,
  1,
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
  'Day 3 Project â€” Daily Report Generator',
  1,
  15,
  2,
  'project',
  'Build an automated daily report script.',
  '## Day 3 Project ðŸŽ¯

Build a **Daily Report Generator** â€” your first automation tool!

### Requirements

1. Function `generate_header()` â€” prints report header with today''s date
2. Function `add_metric(name, value)` â€” prints each metric
3. Function `generate_footer(total)` â€” prints summary
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
Report complete âœ“
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
    print("Report complete âœ“")

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

INSERT INTO public.levels (
  slug, title, phase, day, index_in_day, level_type, summary,
  lesson_content, starter_code, solution_code, expected_output,
  validation_type, validation_pattern, hints
) VALUES (
  'week4-level1-oop-intro',
  'Object-Oriented Programming',
  1,
  16,
  1,
  'concept',
  'Understand classes, objects, and why OOP organizes code.',
  '## What is OOP?

**Object-Oriented Programming (OOP)** organizes code around **objects** — bundles of data and behavior.

Think of a real object:
- A **car** has data (color, speed) and actions (accelerate, brake)
- In Python, a **class** is the blueprint; an **object** is one instance

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Buddy")
print(my_dog.bark())
```

### Key terms

| Term | Meaning |
|------|---------|
| `class` | Blueprint for objects |
| `__init__` | Constructor — runs when object is created |
| `self` | Reference to the current object |
| `method` | Function inside a class |

> OOP helps you model real-world things and reuse code across projects.',
  'class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Buddy")
print(my_dog.bark())
print(f"Dog name: {my_dog.name}")',
  'class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Buddy")
print(my_dog.bark())
print(f"Dog name: {my_dog.name}")',
  'Buddy says Woof!
Dog name: Buddy',
  'contains',
  'Woof',
  ARRAY['Run the code to see how objects work.', 'self.name stores data on each object.', 'Methods are called with dot notation: my_dog.bark()']
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
  'week4-level2-class-init',
  'Classes & __init__',
  1,
  16,
  2,
  'run',
  'Create objects with __init__ and instance attributes.',
  '## The __init__ method

`__init__` runs automatically when you create an object. Use it to set up initial data:

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

book = Book("1984", "George Orwell")
print(book.title)
```

- `self` is always the first parameter
- `self.title` creates an **attribute** on the object
- Each object gets its own copy of the attributes

### Your task

Run the code, then create a second book and print its details.',
  'class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

book1 = Book("Python Crash Course", "Eric Matthes", 544)
print(f"{book1.title} by {book1.author} ({book1.pages} pages)")

# Create book2 below
book2 = Book("Automate the Boring Stuff", "Al Sweigart", 592)
print(f"{book2.title} by {book2.author} ({book2.pages} pages)")',
  'class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

book1 = Book("Python Crash Course", "Eric Matthes", 544)
print(f"{book1.title} by {book1.author} ({book1.pages} pages)")

book2 = Book("Automate the Boring Stuff", "Al Sweigart", 592)
print(f"{book2.title} by {book2.author} ({book2.pages} pages)")',
  NULL,
  'contains',
  'Automate the Boring Stuff',
  ARRAY['Use Book(title, author, pages) to create a new object.', 'Access attributes with book2.title.', 'Each object stores its own values.']
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
  'week4-level3-methods',
  'Adding Methods',
  1,
  17,
  1,
  'modify',
  'Define methods that use object attributes.',
  '## Methods

Methods are functions defined inside a class. They can read and change `self` attributes:

```python
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count = self.count + 1

    def get_count(self):
        return self.count
```

### Your task

Add a `decrement` method that subtracts 1 from `self.count`, and a `reset` method that sets count back to 0.',
  'class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count = self.count + 1

    def get_count(self):
        return self.count

    # Add decrement and reset methods here

c = Counter()
c.increment()
c.increment()
c.increment()
print(f"Count: {c.get_count()}")',
  'class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count = self.count + 1

    def decrement(self):
        self.count = self.count - 1

    def reset(self):
        self.count = 0

    def get_count(self):
        return self.count

c = Counter()
c.increment()
c.increment()
c.increment()
print(f"Count: {c.get_count()}")',
  NULL,
  'contains',
  'Count: 3',
  ARRAY['decrement should do self.count = self.count - 1', 'reset should set self.count = 0', 'Methods need self as the first parameter.']
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
  'week4-level4-bank-account',
  'Build a BankAccount Class',
  1,
  17,
  2,
  'exercise',
  'Create a class with deposit and get_balance methods.',
  '## Your first OOP exercise

Build a `BankAccount` class that:
- Takes an `owner` name and starting `balance` in `__init__`
- Has a `deposit(amount)` method that adds to balance
- Has a `get_balance()` method that returns the balance

```python
account = BankAccount("Alex", 1000)
account.deposit(250)
print(account.get_balance())  # 1250
```

### Your task

Complete the class and test it with the provided code.',
  'class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        # Add amount to balance
        pass

    def get_balance(self):
        # Return the balance
        pass

account = BankAccount("Alex", 1000)
account.deposit(250)
print(f"{account.owner}: ${account.get_balance()}")',
  'class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance = self.balance + amount

    def get_balance(self):
        return self.balance

account = BankAccount("Alex", 1000)
account.deposit(250)
print(f"{account.owner}: ${account.get_balance()}")',
  NULL,
  'contains',
  'Alex: $1250',
  ARRAY['deposit adds to self.balance.', 'get_balance returns self.balance.', 'Use self.balance inside methods.']
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
  'week4-level5-person-class',
  'Person Class Practice',
  1,
  18,
  1,
  'exercise',
  'Build a Person class with intro and birthday methods.',
  '## Modeling people with classes

Create a `Person` class with:
- `__init__(self, name, age)` — store name and age
- `introduce(self)` — return `"Hi, I''m [name] and I''m [age] years old."`
- `have_birthday(self)` — increase age by 1

```python
person = Person("Sam", 25)
print(person.introduce())
person.have_birthday()
print(person.introduce())
```',
  'class Person:
    def __init__(self, name, age):
        pass

    def introduce(self):
        pass

    def have_birthday(self):
        pass

person = Person("Sam", 25)
print(person.introduce())
person.have_birthday()
print(person.introduce())',
  'class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"Hi, I''m {self.name} and I''m {self.age} years old."

    def have_birthday(self):
        self.age = self.age + 1

person = Person("Sam", 25)
print(person.introduce())
person.have_birthday()
print(person.introduce())',
  NULL,
  'contains',
  '26 years old',
  ARRAY['Store name and age in __init__.', 'introduce returns an f-string.', 'have_birthday adds 1 to self.age.']
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
  'week4-level6-inheritance',
  'Inheritance Basics',
  1,
  18,
  2,
  'run',
  'Create child classes that inherit from a parent.',
  '## Inheritance

A **child class** inherits attributes and methods from a **parent class**:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
```

- `Dog(Animal)` means Dog inherits from Animal
- Child classes can **override** parent methods
- `super().__init__(name)` calls the parent''s __init__

Run the code and observe how each animal speaks differently!',
  'class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

animals = [Dog("Buddy"), Cat("Whiskers"), Dog("Max")]
for animal in animals:
    print(animal.speak())',
  'class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

animals = [Dog("Buddy"), Cat("Whiskers"), Dog("Max")]
for animal in animals:
    print(animal.speak())',
  NULL,
  'contains',
  'Whiskers says Meow',
  ARRAY['Each subclass overrides speak().', 'All animals share the name attribute from Animal.', 'Polymorphism: same method, different behavior.']
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
  'week4-level7-try-except',
  'Try & Except',
  1,
  19,
  1,
  'exercise',
  'Handle errors gracefully with try/except.',
  '## Error Handling

Programs crash when errors occur. `try/except` lets you **catch** errors and respond gracefully:

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

Common pattern:
```python
try:
    value = int("abc")
except ValueError:
    print("Not a valid number")
```

### Your task

Write a `safe_divide(a, b)` function that returns the result, or `"Error: division by zero"` if b is 0.',
  'def safe_divide(a, b):
    # Use try/except to handle division by zero
    pass

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide(7, 3))',
  'def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: division by zero"

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide(7, 3))',
  NULL,
  'contains',
  'Error: division by zero',
  ARRAY['Wrap a / b in a try block.', 'Catch ZeroDivisionError in except.', 'Return a friendly message instead of crashing.']
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
  'week4-level8-debug-oop',
  'Debug OOP Code',
  1,
  19,
  2,
  'debug',
  'Fix class definition and inheritance bugs.',
  '## Debug: Classes

Common OOP bugs:
- Missing `self` in method definitions
- Forgetting colon after `class` or `def`
- Wrong indentation in class body
- Not calling `__init__` with `super()` in subclasses

### Your task

Fix this code so it prints:
```
Rectangle: 12
Square area: 16
```',
  'class Shape:
    def __init__(self, name)
        self.name = name

class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__("Rectangle")
        self.width = width
        self.height = height

    def area(self):
    return self.width * self.height

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)
        self.name = "Square"

rect = Rectangle(3, 4)
print(f"{rect.name}: {rect.area()}")
sq = Square(4)
print(f"{sq.name} area: {sq.area()}")',
  'class Shape:
    def __init__(self, name):
        self.name = name

class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__("Rectangle")
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)
        self.name = "Square"

rect = Rectangle(3, 4)
print(f"{rect.name}: {rect.area()}")
sq = Square(4)
print(f"{sq.name} area: {sq.area()}")',
  NULL,
  'contains',
  'Square area: 16',
  ARRAY['Add colon after __init__(self, name)', 'Indent return inside area()', 'Check all def lines have colons.']
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
  'week4-level9-quiz',
  'Week 4 Checkpoint',
  1,
  20,
  1,
  'quiz',
  'Test OOP and error handling skills.',
  '## Week 4 Checkpoint

Write a `Temperature` class with:
1. `__init__(self, celsius)` — store temperature
2. `to_fahrenheit(self)` — return `celsius * 9/5 + 32`
3. `is_freezing(self)` — return `True` if celsius <= 0

Then create temp = Temperature(-5) and print:
- The Fahrenheit value (should be 23.0)
- Whether it''s freezing

Use try/except is not needed here — focus on the class!',
  'class Temperature:
    def __init__(self, celsius):
        pass

    def to_fahrenheit(self):
        pass

    def is_freezing(self):
        pass

temp = Temperature(-5)
print(f"Fahrenheit: {temp.to_fahrenheit()}")
print(f"Freezing: {temp.is_freezing()}")',
  'class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    def to_fahrenheit(self):
        return self.celsius * 9/5 + 32

    def is_freezing(self):
        return self.celsius <= 0

temp = Temperature(-5)
print(f"Fahrenheit: {temp.to_fahrenheit()}")
print(f"Freezing: {temp.is_freezing()}")',
  NULL,
  'contains',
  'Freezing: True',
  ARRAY['Store celsius in __init__.', 'Formula: celsius * 9/5 + 32', 'is_freezing returns True when celsius <= 0.']
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
  'week4-level10-project',
  'Week 4 Project — Library System',
  1,
  20,
  2,
  'project',
  'Build a library system with classes and custom exceptions.',
  '## Week 4 Project 🎯

Build a mini **Library System** using OOP and error handling!

### Requirements

1. Custom exception `BookNotAvailableError` (inherits from `Exception`)
2. Class `Book` with `title`, `available` (True/False), and `check_out()` method
3. `check_out()` raises `BookNotAvailableError` if book is not available
4. Class `Library` with `books` list and `find_book(title)` method
5. Main code that checks out a book and handles the error

### Expected output

```
=== Library System ===
Checked out: Python Basics
Error: Book already checked out
Available books: 1
```

> In the browser playground we simulate everything — no real files needed!',
  'class BookNotAvailableError(Exception):
    pass

class Book:
    def __init__(self, title, available=True):
        self.title = title
        self.available = available

    def check_out(self):
        pass

class Library:
    def __init__(self, books):
        self.books = books

    def find_book(self, title):
        for book in self.books:
            if book.title == title:
                return book
        return None

# Setup
books = [Book("Python Basics"), Book("Data Science 101", available=False)]
library = Library(books)

# Your checkout logic with try/except
',
  'class BookNotAvailableError(Exception):
    pass

class Book:
    def __init__(self, title, available=True):
        self.title = title
        self.available = available

    def check_out(self):
        if not self.available:
            raise BookNotAvailableError("Book already checked out")
        self.available = False
        return self.title

class Library:
    def __init__(self, books):
        self.books = books

    def find_book(self, title):
        for book in self.books:
            if book.title == title:
                return book
        return None

    def count_available(self):
        return sum(1 for b in self.books if b.available)

books = [Book("Python Basics"), Book("Data Science 101", available=False)]
library = Library(books)

print("=== Library System ===")
try:
    book = library.find_book("Python Basics")
    title = book.check_out()
    print(f"Checked out: {title}")
except BookNotAvailableError as e:
    print(f"Error: {e}")

try:
    book = library.find_book("Data Science 101")
    book.check_out()
except BookNotAvailableError as e:
    print(f"Error: {e}")

print(f"Available books: {library.count_available()}")',
  NULL,
  'contains',
  'Library System',
  ARRAY['Raise BookNotAvailableError when available is False.', 'Use try/except when calling check_out().', 'Set available = False after successful checkout.']
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
  'week5-level1-files-as-strings',
  'Files as Strings',
  2,
  21,
  1,
  'concept',
  'Simulate file reading with multiline strings in the browser.',
  '## Working with File Data

In real Python, you use `open()` to read files. In this browser playground, we **simulate files** with multiline strings:

```python
file_content = """Line 1
Line 2
Line 3"""

lines = file_content.split("\n")
for line in lines:
    print(line)
```

### Why simulate?

- Pyodide runs in your browser — no access to your computer''s files
- The **same logic** applies: read text, split into lines, process data
- When you move to real Python, just swap the string for `open()`

### Key string methods

| Method | Purpose |
|--------|---------|
| `.split("\n")` | Split into lines |
| `.split(",")` | Split CSV rows |
| `.strip()` | Remove whitespace |

> Treat strings as your virtual files — the processing skills transfer directly!',
  '# Simulated file content
log_file = """2026-01-15 INFO User logged in
2026-01-15 ERROR Connection failed
2026-01-15 INFO Report generated"""

lines = log_file.split("\n")
print(f"Total lines: {len(lines)}")
for line in lines:
    print(line)',
  'log_file = """2026-01-15 INFO User logged in
2026-01-15 ERROR Connection failed
2026-01-15 INFO Report generated"""

lines = log_file.split("\n")
print(f"Total lines: {len(lines)}")
for line in lines:
    print(line)',
  'Total lines: 3
2026-01-15 INFO User logged in
2026-01-15 ERROR Connection failed
2026-01-15 INFO Report generated',
  'contains',
  'Total lines: 3',
  ARRAY['split(''\n'') breaks text into lines.', 'len(lines) counts how many lines.', 'Each line is a string you can process.']
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
  'week5-level2-read-lines',
  'Reading Simulated Files',
  2,
  21,
  2,
  'run',
  'Parse line-by-line data from a multiline string.',
  '## Reading line by line

```python
data = """apple,10
banana,25
cherry,8"""

for line in data.split("\n"):
    parts = line.split(",")
    fruit = parts[0]
    count = int(parts[1])
    print(f"{fruit}: {count}")
```

This is exactly how you''d process a CSV file — one row at a time.

### Your task

Run the code and observe how each line becomes structured data.',
  'inventory = """apple,10
banana,25
cherry,8
mango,15"""

total_items = 0
for line in inventory.split("\n"):
    parts = line.split(",")
    fruit = parts[0]
    count = int(parts[1])
    total_items = total_items + count
    print(f"{fruit}: {count}")

print(f"---\nTotal items: {total_items}")',
  'inventory = """apple,10
banana,25
cherry,8
mango,15"""

total_items = 0
for line in inventory.split("\n"):
    parts = line.split(",")
    fruit = parts[0]
    count = int(parts[1])
    total_items = total_items + count
    print(f"{fruit}: {count}")

print(f"---\nTotal items: {total_items}")',
  NULL,
  'contains',
  'Total items: 58',
  ARRAY['split('','') separates CSV columns.', 'int() converts text numbers to integers.', 'Accumulate total_items in the loop.']
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
  'week5-level3-write-string',
  'Writing to String Buffers',
  2,
  22,
  1,
  'modify',
  'Build output text like writing to a file.',
  '## Simulating file writes

Instead of writing to disk, build a string that **represents** file content:

```python
output = ""
output = output + "Name,Score\n"
output = output + "Alice,95\n"
output = output + "Bob,87\n"
print(output)
```

Or use a list and join:
```python
lines = ["Name,Score", "Alice,95", "Bob,87"]
output = "\n".join(lines)
```

### Your task

Complete the code to generate a CSV report from the scores dictionary.',
  'scores = {"Alice": 95, "Bob": 87, "Carol": 92}

# Build CSV output
lines = ["Name,Score"]
for name, score in scores.items():
    # Add each row to lines
    pass

output = "\n".join(lines)
print(output)',
  'scores = {"Alice": 95, "Bob": 87, "Carol": 92}

lines = ["Name,Score"]
for name, score in scores.items():
    lines.append(f"{name},{score}")

output = "\n".join(lines)
print(output)',
  NULL,
  'contains',
  'Carol,92',
  ARRAY['Use lines.append(f''{name},{score}'')', 'join combines lines with newlines.', 'The header row is already in lines.']
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
  'week5-level4-parse-log',
  'Parse a Log File',
  2,
  22,
  2,
  'exercise',
  'Extract and count ERROR lines from simulated log data.',
  '## Log parsing exercise

Given this simulated log file, count how many **ERROR** lines exist:

```python
log = """2026-01-15 INFO Started
2026-01-15 ERROR Disk full
2026-01-15 INFO Retrying
2026-01-15 ERROR Timeout"""
```

Check if `"ERROR"` is in each line using `"ERROR" in line`.

### Your task

Print the error count and list each error message (the part after "ERROR ").',
  'log = """2026-01-15 INFO Started
2026-01-15 ERROR Disk full
2026-01-15 INFO Retrying
2026-01-15 ERROR Timeout
2026-01-15 ERROR Network down
2026-01-15 INFO Done"""

error_count = 0

for line in log.split("\n"):
    # Check for ERROR and extract message
    pass

print(f"Errors found: {error_count}")',
  'log = """2026-01-15 INFO Started
2026-01-15 ERROR Disk full
2026-01-15 INFO Retrying
2026-01-15 ERROR Timeout
2026-01-15 ERROR Network down
2026-01-15 INFO Done"""

error_count = 0

for line in log.split("\n"):
    if "ERROR" in line:
        error_count = error_count + 1
        message = line.split("ERROR")[1].strip()
        print(f"  - {message}")

print(f"Errors found: {error_count}")',
  NULL,
  'contains',
  'Errors found: 3',
  ARRAY['Use if "ERROR" in line:', 'split(''ERROR'')[1] gets text after ERROR.', 'strip() removes leading spaces.']
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
  'week5-level5-csv-parsing',
  'CSV Parsing with split',
  2,
  23,
  1,
  'exercise',
  'Parse CSV data and calculate totals.',
  '## CSV format

CSV (Comma-Separated Values) is a common data format:

```
product,price,quantity
Widget,9.99,100
Gadget,24.50,50
```

Parse it with `.split(",")` — skip the header row!

### Your task

Calculate the total revenue (price × quantity) for all products.',
  'csv_data = """product,price,quantity
Widget,9.99,100
Gadget,24.50,50
Tool,15.00,75"""

lines = csv_data.split("\n")
header = lines[0]  # skip this

total_revenue = 0

for line in lines[1:]:
    # Parse price and quantity, add to total
    pass

print(f"Total revenue: ${total_revenue:.2f}")',
  'csv_data = """product,price,quantity
Widget,9.99,100
Gadget,24.50,50
Tool,15.00,75"""

lines = csv_data.split("\n")
total_revenue = 0

for line in lines[1:]:
    parts = line.split(",")
    price = float(parts[1])
    quantity = int(parts[2])
    total_revenue = total_revenue + (price * quantity)

print(f"Total revenue: ${total_revenue:.2f}")',
  NULL,
  'contains',
  'Total revenue: $2749.00',
  ARRAY['lines[1:] skips the header row.', 'float() for prices, int() for quantities.', 'Revenue = price * quantity for each row.']
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
  'week5-level6-json-basics',
  'JSON with json Module',
  2,
  23,
  2,
  'run',
  'Parse and create JSON data with json.loads and json.dumps.',
  '## JSON — JavaScript Object Notation

JSON is the standard format for APIs and config files:

```python
import json

json_string = ''{"name": "Alex", "age": 28}''
data = json.loads(json_string)  # string → Python dict
print(data["name"])

python_dict = {"city": "Mumbai", "country": "India"}
json_output = json.dumps(python_dict, indent=2)  # dict → string
print(json_output)
```

| Function | Direction |
|----------|-----------|
| `json.loads()` | JSON string → Python |
| `json.dumps()` | Python → JSON string |

Run the code to see JSON in action!',
  'import json

# JSON string → Python dict
user_json = ''{"name": "Alex", "age": 28, "skills": ["Python", "SQL"]}''
user = json.loads(user_json)

print(f"Name: {user[''name'']}")
print(f"Skills: {user[''skills'']}")

# Python dict → JSON string
profile = {"city": "Mumbai", "active": True}
output = json.dumps(profile, indent=2)
print(output)',
  'import json

user_json = ''{"name": "Alex", "age": 28, "skills": ["Python", "SQL"]}''
user = json.loads(user_json)

print(f"Name: {user[''name'']}")
print(f"Skills: {user[''skills'']}")

profile = {"city": "Mumbai", "active": True}
output = json.dumps(profile, indent=2)
print(output)',
  NULL,
  'contains',
  'Mumbai',
  ARRAY['json.loads() parses a JSON string.', 'Access dict values with [''key''].', 'json.dumps() converts back to JSON text.']
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
  'week5-level7-regex-basics',
  'Regex with re Module',
  2,
  24,
  1,
  'exercise',
  'Find patterns in text using regular expressions.',
  '## Regular Expressions

Regex finds **patterns** in text — emails, phone numbers, dates:

```python
import re

text = "Contact: support@example.com or sales@company.org"
emails = re.findall(r''[\w.]+@[\w.]+'', text)
print(emails)
```

Common patterns:
- `\d+` — one or more digits
- `\w+` — word characters
- `[\w.]+@[\w.]+` — simple email pattern

### Your task

Find all dates in format YYYY-MM-DD from the log text.',
  'import re

log = """2026-01-15 User login
2026-01-16 Backup complete
2026-02-01 System update
No date here
2026-03-10 Report sent"""

# Find all dates matching YYYY-MM-DD
# Pattern hint: \d{4}-\d{2}-\d{2}
dates = 

print(f"Dates found: {dates}")
print(f"Count: {len(dates)}")',
  'import re

log = """2026-01-15 User login
2026-01-16 Backup complete
2026-02-01 System update
No date here
2026-03-10 Report sent"""

dates = re.findall(r''\d{4}-\d{2}-\d{2}'', log)

print(f"Dates found: {dates}")
print(f"Count: {len(dates)}")',
  NULL,
  'contains',
  'Count: 4',
  ARRAY['Use re.findall(pattern, text)', 'Pattern \d{4}-\d{2}-\d{2} matches dates.', 'findall returns a list of all matches.']
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
  'week5-level8-debug-data',
  'Debug Data Parsing',
  2,
  24,
  2,
  'debug',
  'Fix CSV and JSON parsing bugs.',
  '## Debug: Data Formats

Common parsing bugs:
- Forgetting to skip CSV header row
- Using `split()` wrong (need comma, not space)
- Mixing up `json.loads` (parse) vs `json.dumps` (serialize)
- Not converting strings to numbers

### Your task

Fix the code to correctly parse the CSV and print total sales: 450',
  'csv = """item,sales
Apple,150
Banana,200
Cherry,100"""

total = 0
for line in csv.split("\n"):
    parts = line.split(" ")
    total = total + parts[1]

print(f"Total sales: {total}")',
  'csv = """item,sales
Apple,150
Banana,200
Cherry,100"""

total = 0
for line in csv.split("\n")[1:]:
    parts = line.split(",")
    total = total + int(parts[1])

print(f"Total sales: {total}")',
  NULL,
  'output',
  'Total sales: 450',
  ARRAY['Split by comma, not space.', 'Skip header with [1:]', 'Convert parts[1] to int before adding.']
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
  'week5-level9-quiz',
  'Week 5 Checkpoint',
  2,
  25,
  1,
  'quiz',
  'Combine file simulation, JSON, and regex skills.',
  '## Week 5 Checkpoint

Given a JSON string of users, write code that:
1. Parses the JSON with `json.loads()`
2. Prints each user''s name and email
3. Uses regex to verify emails contain "@"

```python
data = ''[{"name":"Alice","email":"alice@test.com"},{"name":"Bob","email":"bob@test.com"}]''
```

Expected output includes "Alice: alice@test.com" and "Valid: True" for each.',
  'import json
import re

data = ''[{"name":"Alice","email":"alice@test.com"},{"name":"Bob","email":"bob@test.com"}]''

users = json.loads(data)

for user in users:
    # Print name and email
    # Check if email is valid (contains @)
    pass',
  'import json
import re

data = ''[{"name":"Alice","email":"alice@test.com"},{"name":"Bob","email":"bob@test.com"}]''

users = json.loads(data)

for user in users:
    name = user["name"]
    email = user["email"]
    valid = "@" in email
    print(f"{name}: {email}")
    print(f"Valid: {valid}")',
  NULL,
  'contains',
  'Bob: bob@test.com',
  ARRAY['json.loads(data) gives a list of dicts.', 'Access fields with user["name"].', 'Check "@" in email for validity.']
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
  'week5-level10-project',
  'Week 5 Project — Log Analyzer',
  2,
  25,
  2,
  'project',
  'Build a log analyzer using CSV, JSON, and regex.',
  '## Week 5 Project 🎯

Build a **Log Analyzer** that processes simulated server logs!

### Requirements

1. Parse the multiline log string (CSV-like: timestamp,level,message)
2. Count INFO, WARNING, and ERROR entries
3. Use regex to extract all IP addresses (pattern: `\d+\.\d+\.\d+\.\d+`)
4. Output a JSON summary with json.dumps()
5. Print a formatted report

### Expected output format

```
=== Log Analyzer Report ===
INFO: 2
WARNING: 1
ERROR: 1
IPs found: [''192.168.1.1'', ''10.0.0.5'']
Summary JSON: {"total": 4, "errors": 1}
```',
  'import json
import re

log_data = """2026-01-15,INFO,User login from 192.168.1.1
2026-01-15,WARNING,High memory usage
2026-01-15,ERROR,Connection refused from 10.0.0.5
2026-01-15,INFO,Report generated"""

# Count levels
info_count = 0
warning_count = 0
error_count = 0

# Your parsing logic here

# Extract IPs with regex
# Build and print JSON summary
',
  'import json
import re

log_data = """2026-01-15,INFO,User login from 192.168.1.1
2026-01-15,WARNING,High memory usage
2026-01-15,ERROR,Connection refused from 10.0.0.5
2026-01-15,INFO,Report generated"""

info_count = 0
warning_count = 0
error_count = 0

for line in log_data.split("\n"):
    parts = line.split(",")
    level = parts[1]
    if level == "INFO":
        info_count = info_count + 1
    elif level == "WARNING":
        warning_count = warning_count + 1
    elif level == "ERROR":
        error_count = error_count + 1

ips = re.findall(r''\d+\.\d+\.\d+\.\d+'', log_data)
total = info_count + warning_count + error_count
summary = {"total": total, "errors": error_count}

print("=== Log Analyzer Report ===")
print(f"INFO: {info_count}")
print(f"WARNING: {warning_count}")
print(f"ERROR: {error_count}")
print(f"IPs found: {ips}")
print(f"Summary JSON: {json.dumps(summary)}")',
  NULL,
  'contains',
  'Log Analyzer Report',
  ARRAY['Split each line by comma — level is parts[1].', 're.findall for IP pattern.', 'json.dumps(summary) for the JSON output.']
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
  'week6-level1-api-intro',
  'APIs & JSON Responses',
  2,
  26,
  1,
  'concept',
  'Understand APIs and how JSON carries data over the web.',
  '## What is an API?

An **API** (Application Programming Interface) lets programs talk to each other. When you check the weather on your phone, an API fetches data from a server.

APIs usually return **JSON** — structured text that''s easy to parse:

```json
{
  "city": "Mumbai",
  "temperature": 32,
  "humidity": 75
}
```

In Python:
```python
import json

# Simulated API response (normally from requests.get())
api_response = ''{"city": "Mumbai", "temperature": 32}''
data = json.loads(api_response)
print(data["city"])
```

> In this course we **simulate** API responses with JSON strings — no network needed!',
  'import json

# Simulated weather API response
api_response = ''{"city": "Mumbai", "temperature": 32, "humidity": 75, "condition": "Sunny"}''

data = json.loads(api_response)
print(f"Weather in {data[''city'']}")
print(f"Temperature: {data[''temperature'']}°C")
print(f"Condition: {data[''condition'']}")',
  'import json

api_response = ''{"city": "Mumbai", "temperature": 32, "humidity": 75, "condition": "Sunny"}''

data = json.loads(api_response)
print(f"Weather in {data[''city'']}")
print(f"Temperature: {data[''temperature'']}°C")
print(f"Condition: {data[''condition'']}")',
  'Weather in Mumbai
Temperature: 32°C
Condition: Sunny',
  'contains',
  'Weather in Mumbai',
  ARRAY['json.loads() converts JSON string to a dict.', 'Access values with data[''key''].', 'Real APIs return similar JSON structures.']
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
  'week6-level2-parse-api',
  'Parsing API Responses',
  2,
  26,
  2,
  'run',
  'Extract fields from a simulated API JSON response.',
  '## Parsing API data

API responses often nest data inside objects:

```python
response = ''{"status": "ok", "data": {"user": "alex", "score": 950}}''
parsed = json.loads(response)
user = parsed["data"]["user"]
```

Access nested data with chained brackets: `parsed["data"]["user"]`

### Your task

Run the code and explore the user profile API response.',
  'import json

api_response = ''{"status": "success", "data": {"id": 42, "username": "alex_dev", "email": "alex@example.com", "stats": {"posts": 15, "followers": 230}}}''

parsed = json.loads(api_response)
user = parsed["data"]

print(f"Status: {parsed[''status'']}")
print(f"User: {user[''username'']}")
print(f"Email: {user[''email'']}")
print(f"Followers: {user[''stats''][''followers'']}")',
  'import json

api_response = ''{"status": "success", "data": {"id": 42, "username": "alex_dev", "email": "alex@example.com", "stats": {"posts": 15, "followers": 230}}}''

parsed = json.loads(api_response)
user = parsed["data"]

print(f"Status: {parsed[''status'']}")
print(f"User: {user[''username'']}")
print(f"Email: {user[''email'']}")
print(f"Followers: {user[''stats''][''followers'']}")',
  NULL,
  'contains',
  'Followers: 230',
  ARRAY['parsed[''data''] gets the inner object.', 'user[''stats''][''followers''] accesses nested data.', 'Always check parsed[''status''] first in real apps.']
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
  'week6-level3-nested-json',
  'Nested JSON Data',
  2,
  27,
  1,
  'modify',
  'Navigate nested JSON structures and extract lists.',
  '## Lists inside JSON

APIs often return **arrays** of items:

```python
response = ''{"products": [{"name": "Widget", "price": 9.99}, {"name": "Gadget", "price": 24.50}]}''
data = json.loads(response)

for product in data["products"]:
    print(product["name"], product["price"])
```

### Your task

Complete the code to print each product name and calculate the total price.',
  'import json

api_response = ''{"store": "TechShop", "products": [{"name": "Mouse", "price": 29.99}, {"name": "Keyboard", "price": 79.99}, {"name": "Monitor", "price": 299.99}]}''

data = json.loads(api_response)
print(f"Store: {data[''store'']}")

total = 0
for product in data["products"]:
    # Print name and price, add to total
    pass

print(f"Total: ${total:.2f}")',
  'import json

api_response = ''{"store": "TechShop", "products": [{"name": "Mouse", "price": 29.99}, {"name": "Keyboard", "price": 79.99}, {"name": "Monitor", "price": 299.99}]}''

data = json.loads(api_response)
print(f"Store: {data[''store'']}")

total = 0
for product in data["products"]:
    print(f"  {product[''name'']}: ${product[''price'']}")
    total = total + product["price"]

print(f"Total: ${total:.2f}")',
  NULL,
  'contains',
  'Total: $409.97',
  ARRAY['Loop through data[''products''].', 'Each product is a dict with name and price.', 'Accumulate total in the loop.']
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
  'week6-level4-api-list',
  'Loop Through API Results',
  2,
  27,
  2,
  'exercise',
  'Process a list of users from a simulated API.',
  '## Processing API lists

Many APIs return paginated lists. Here''s a simulated "users" endpoint:

```python
users_json = ''[{"name":"Alice","role":"admin"},{"name":"Bob","role":"user"}]''
users = json.loads(users_json)
```

### Your task

Parse the users API response and print only users with role "admin". Count total users.',
  'import json

users_api = ''[{"name":"Alice","role":"admin","active":true},{"name":"Bob","role":"user","active":true},{"name":"Carol","role":"admin","active":false},{"name":"Dave","role":"user","active":true}]''

users = json.loads(users_api)

admin_count = 0
print("Admins:")
for user in users:
    # Check role and print admin names
    pass

print(f"Total users: {len(users)}")',
  'import json

users_api = ''[{"name":"Alice","role":"admin","active":true},{"name":"Bob","role":"user","active":true},{"name":"Carol","role":"admin","active":false},{"name":"Dave","role":"user","active":true}]''

users = json.loads(users_api)

admin_count = 0
print("Admins:")
for user in users:
    if user["role"] == "admin":
        print(f"  - {user[''name'']}")
        admin_count = admin_count + 1

print(f"Total users: {len(users)}")
print(f"Admin count: {admin_count}")',
  NULL,
  'contains',
  'Admin count: 2',
  ARRAY['Check user["role"] == "admin".', 'Print user[''name''] for each admin.', 'len(users) gives total count.']
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
  'week6-level5-deep-nested',
  'Deep Nested Parsing',
  2,
  28,
  1,
  'exercise',
  'Extract data from deeply nested JSON structures.',
  '## Deep nesting

Real API responses can be deeply nested:

```python
data = {
  "response": {
    "results": [
      {"location": {"city": "Delhi", "temp": 28}}
    ]
  }
}
city = data["response"]["results"][0]["location"]["city"]
```

### Your task

Extract the city name and temperature from the weather API response.',
  'import json

weather_api = ''{"response": {"status": 200, "results": [{"location": {"city": "Delhi", "country": "India"}, "current": {"temp_c": 28, "condition": "Partly cloudy"}}, {"location": {"city": "Mumbai", "country": "India"}, "current": {"temp_c": 32, "condition": "Sunny"}}]}}''

data = json.loads(weather_api)
results = data["response"]["results"]

for result in results:
    # Extract city, temp, and condition for each
    pass',
  'import json

weather_api = ''{"response": {"status": 200, "results": [{"location": {"city": "Delhi", "country": "India"}, "current": {"temp_c": 28, "condition": "Partly cloudy"}}, {"location": {"city": "Mumbai", "country": "India"}, "current": {"temp_c": 32, "condition": "Sunny"}}]}}''

data = json.loads(weather_api)
results = data["response"]["results"]

for result in results:
    city = result["location"]["city"]
    temp = result["current"]["temp_c"]
    condition = result["current"]["condition"]
    print(f"{city}: {temp}°C, {condition}")',
  NULL,
  'contains',
  'Mumbai: 32°C',
  ARRAY['result[''location''][''city''] for city name.', 'result[''current''][''temp_c''] for temperature.', 'Chain brackets to go deeper.']
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
  'week6-level6-html-intro',
  'Web Scraping Concepts',
  2,
  28,
  2,
  'run',
  'Extract data from simulated HTML strings.',
  '## Web Scraping Basics

**Web scraping** extracts data from web pages. HTML is just text with tags:

```html
<h1>Product List</h1>
<div class="product">Widget - $9.99</div>
<div class="product">Gadget - $24.50</div>
```

In the browser playground, we simulate HTML as a string and extract data with string methods or regex:

```python
html = ''<div class="price">$29.99</div>''
start = html.find(">") + 1
end = html.find("<", start)
price = html[start:end]
```

> Real scraping uses libraries like BeautifulSoup — here we learn the concepts!',
  'html = """<html>
<body>
  <h1>Store Products</h1>
  <div class="product">Widget - $9.99</div>
  <div class="product">Gadget - $24.50</div>
  <div class="product">Tool - $15.00</div>
</body>
</html>"""

lines = html.split("\n")
for line in lines:
    if "product" in line and "$" in line:
        # Extract text between > and <
        start = line.find(">") + 1
        end = line.find("<", start)
        product = line[start:end]
        print(product)',
  'html = """<html>
<body>
  <h1>Store Products</h1>
  <div class="product">Widget - $9.99</div>
  <div class="product">Gadget - $24.50</div>
  <div class="product">Tool - $15.00</div>
</body>
</html>"""

lines = html.split("\n")
for line in lines:
    if "product" in line and "$" in line:
        start = line.find(">") + 1
        end = line.find("<", start)
        product = line[start:end]
        print(product)',
  NULL,
  'contains',
  'Gadget - $24.50',
  ARRAY['find(''>'') locates the end of opening tag.', 'Text is between > and the next <.', 'Check for ''product'' in line to filter.']
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
  'week6-level7-scrape-prices',
  'Extract Prices from HTML',
  2,
  29,
  1,
  'exercise',
  'Use regex to extract prices from simulated HTML.',
  '## Extracting with regex

Regex is powerful for scraping patterns like prices:

```python
import re
html = ''<span class="price">$29.99</span><span class="price">$49.99</span>''
prices = re.findall(r''\$[\d.]+'', html)
```

### Your task

Extract all prices from the HTML page and calculate the average.',
  'import re

html = """<div class="listing">
  <h2>Laptop Pro</h2><span class="price">$999.99</span>
  <h2>Tablet Mini</h2><span class="price">$349.99</span>
  <h2>Phone X</h2><span class="price">$799.99</span>
  <h2>Earbuds</h2><span class="price">$79.99</span>
</div>"""

# Find all prices like $999.99
prices = re.findall(r''\$[\d.]+'', html)

# Convert to floats and calculate average
',
  'import re

html = """<div class="listing">
  <h2>Laptop Pro</h2><span class="price">$999.99</span>
  <h2>Tablet Mini</h2><span class="price">$349.99</span>
  <h2>Phone X</h2><span class="price">$799.99</span>
  <h2>Earbuds</h2><span class="price">$79.99</span>
</div>"""

prices = re.findall(r''\$[\d.]+'', html)

price_values = []
for p in prices:
    value = float(p.replace("$", ""))
    price_values.append(value)
    print(f"Found: {p}")

average = sum(price_values) / len(price_values)
print(f"Average price: ${average:.2f}")',
  NULL,
  'contains',
  'Average price: $557.49',
  ARRAY['re.findall(r''\$[\d.]+'', html) finds all prices.', 'Remove $ with .replace(''$'', '''') before float().', 'sum(price_values) / len(price_values) for average.']
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
  'week6-level8-debug-api',
  'Debug API & HTML Parsing',
  2,
  29,
  2,
  'debug',
  'Fix JSON parsing and HTML extraction bugs.',
  '## Debug: API & Scraping

Common bugs:
- Forgetting `json.loads()` on API strings
- Using wrong key names (typo in dict access)
- Off-by-one in string slicing
- Regex pattern missing escape characters

### Your task

Fix the code to print: `Title: Python Course | Price: $49.99`',
  'import json
import re

api = ''{"title": "Python Course", "details": {"price": 49.99, "rating": 4.8}}''
html = ''<div id="course"><h1>Python Course</h1><p class="price">$49.99</p></div>''

# Buggy parsing
data = api
price = data["details"]["price"]

match = re.findall(r''\d+.\d+'', html)
html_price = "$" + match[0]

print(f"Title: {data[''title'']} | Price: {html_price}")',
  'import json
import re

api = ''{"title": "Python Course", "details": {"price": 49.99, "rating": 4.8}}''
html = ''<div id="course"><h1>Python Course</h1><p class="price">$49.99</p></div>''

data = json.loads(api)
price = data["details"]["price"]

match = re.findall(r''\$[\d.]+'', html)
html_price = match[0]

print(f"Title: {data[''title'']} | Price: {html_price}")',
  NULL,
  'contains',
  'Price: $49.99',
  ARRAY['Use json.loads(api) not just api.', 'Regex should include the $ sign.', 'match[0] gets the first price found.']
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
  'week6-level9-quiz',
  'Week 6 Checkpoint',
  2,
  30,
  1,
  'quiz',
  'Combine API parsing and HTML extraction.',
  '## Week 6 Checkpoint

Given a simulated API response with articles, write code that:
1. Parses the JSON
2. Prints each article title
3. Extracts the tag names from the simulated HTML snippet for each article

Use the provided api_response string. Print "Articles: 3" at the end.',
  'import json
import re

api_response = ''{"articles": [{"title": "Python Tips", "html": "<div><span class=\"tag\">python</span><span class=\"tag\">tutorial</span></div>"}, {"title": "API Guide", "html": "<div><span class=\"tag\">api</span><span class=\"tag\">json</span></div>"}, {"title": "Web Scraping", "html": "<div><span class=\"tag\">scraping</span><span class=\"tag\">html</span></div>"}]}''

data = json.loads(api_response)

for article in data["articles"]:
    # Print title and extract tags from html
    pass

print(f"Articles: {len(data[''articles''])}")',
  'import json
import re

api_response = ''{"articles": [{"title": "Python Tips", "html": "<div><span class=\"tag\">python</span><span class=\"tag\">tutorial</span></div>"}, {"title": "API Guide", "html": "<div><span class=\"tag\">api</span><span class=\"tag\">json</span></div>"}, {"title": "Web Scraping", "html": "<div><span class=\"tag\">scraping</span><span class=\"tag\">html</span></div>"}]}''

data = json.loads(api_response)

for article in data["articles"]:
    title = article["title"]
    tags = re.findall(r''class=\"tag\">([^<]+)'', article["html"])
    print(f"{title}: {tags}")

print(f"Articles: {len(data[''articles''])}")',
  NULL,
  'contains',
  'Articles: 3',
  ARRAY['Loop through data[''articles''].', 're.findall with a capture group extracts tag text.', 'len(data[''articles'']) for the count.']
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
  'week6-level10-project',
  'Week 6 Project — Data Dashboard',
  2,
  30,
  2,
  'project',
  'Build a dashboard from simulated API and HTML data.',
  '## Week 6 Project 🎯

Build a **Data Dashboard** that combines API parsing and web scraping!

### Requirements

1. Parse the simulated weather API JSON
2. Parse the simulated news HTML
3. Extract city temperatures and news headlines
4. Print a formatted dashboard report
5. Output a JSON summary with json.dumps()

### Expected output format

```
=== Data Dashboard ===
WEATHER:
  Delhi: 28°C
  Mumbai: 32°C
NEWS:
  - Python 3.13 Released
  - AI Tools for Developers
  - Web Scraping Best Practices
Summary: {"cities": 2, "articles": 3}
```

All data is simulated — no network or file access needed!',
  'import json
import re

weather_api = ''{"cities": [{"name": "Delhi", "temp": 28}, {"name": "Mumbai", "temp": 32}, {"name": "Chennai", "temp": 30}]}''

news_html = """<html><body>
<article><h2>Python 3.13 Released</h2></article>
<article><h2>AI Tools for Developers</h2></article>
<article><h2>Web Scraping Best Practices</h2></article>
</body></html>"""

# Parse weather API
# Extract headlines from HTML
# Print dashboard
',
  'import json
import re

weather_api = ''{"cities": [{"name": "Delhi", "temp": 28}, {"name": "Mumbai", "temp": 32}, {"name": "Chennai", "temp": 30}]}''

news_html = """<html><body>
<article><h2>Python 3.13 Released</h2></article>
<article><h2>AI Tools for Developers</h2></article>
<article><h2>Web Scraping Best Practices</h2></article>
</body></html>"""

weather = json.loads(weather_api)
headlines = re.findall(r''<h2>([^<]+)</h2>'', news_html)

print("=== Data Dashboard ===")
print("WEATHER:")
for city in weather["cities"][:2]:
    print(f"  {city[''name'']}: {city[''temp'']}°C")

print("NEWS:")
for headline in headlines:
    print(f"  - {headline}")

summary = {"cities": len(weather["cities"]), "articles": len(headlines)}
print(f"Summary: {json.dumps(summary)}")',
  NULL,
  'contains',
  'Data Dashboard',
  ARRAY['json.loads(weather_api) for weather data.', 're.findall(r''<h2>([^<]+)</h2>'', news_html) for headlines.', 'Build summary dict and use json.dumps().']
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
  'week7-level1-scheduling-concepts',
  'Scheduling & Automation Concepts',
  2,
  31,
  1,
  'concept',
  'Understand how scheduled tasks and automation jobs work.',
  '## Desktop & System Automation

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

```python
jobs = [
    {"name": "backup", "interval_minutes": 60},
    {"name": "report", "interval_minutes": 1440},
]
```

### Pyodide note

In the browser we **simulate** scheduling with lists and loops — no real OS timers or file access.',
  '# Explore a simple job registry
jobs = [
    {"name": "daily_report", "interval_minutes": 1440},
    {"name": "health_check", "interval_minutes": 15},
]

print("=== Registered Jobs ===")
for job in jobs:
    print(f"{job[''name'']}: every {job[''interval_minutes'']} min")',
  'jobs = [
    {"name": "daily_report", "interval_minutes": 1440},
    {"name": "health_check", "interval_minutes": 15},
]

print("=== Registered Jobs ===")
for job in jobs:
    print(f"{job[''name'']}: every {job[''interval_minutes'']} min")',
  '=== Registered Jobs ===
daily_report: every 1440 min
health_check: every 15 min',
  'contains',
  'Registered Jobs',
  ARRAY['Run the code to see the job list.', 'Each job is a dictionary with name and interval.']
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
  'week7-level2-logging-timestamps',
  'Logging with Timestamps',
  2,
  31,
  2,
  'run',
  'Print timestamped log messages for automation scripts.',
  '## Timestamped logging

Good automation scripts **log what they do**. A simple pattern:

```python
from datetime import datetime

def log(message):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{ts}] {message}")
```

Log levels help you filter output:

- `INFO` — normal progress
- `WARN` — something unusual
- `ERROR` — something failed

Run the example below to see timestamped logs in action.',
  'from datetime import datetime

def log(level, message):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{ts}] {level}: {message}")

log("INFO", "Job started")
log("INFO", "Processing 3 records")
log("INFO", "Job finished")',
  'from datetime import datetime

def log(level, message):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{ts}] {level}: {message}")

log("INFO", "Job started")
log("INFO", "Processing 3 records")
log("INFO", "Job finished")',
  NULL,
  'contains',
  'Job finished',
  ARRAY['Run to see live timestamps.', 'strftime formats the datetime object.']
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
  'week7-level3-modify-logs',
  'Improve Log Messages',
  2,
  32,
  1,
  'modify',
  'Add timestamps and log levels to plain print statements.',
  '## Your task

The script below uses plain `print()` — hard to tell **when** things happened.

Modify it to use the `log()` helper so every line includes a timestamp and level.

Expected output format:
```
[2026-01-15 09:00:00] INFO: Connecting to service
[2026-01-15 09:00:01] INFO: Connected
[2026-01-15 09:00:02] WARN: Retrying slow response
```

(Your timestamps will show the actual current time.)',
  'from datetime import datetime

# TODO: define log(level, message) here

print("Connecting to service")
print("Connected")
print("Retrying slow response")',
  'from datetime import datetime

def log(level, message):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{ts}] {level}: {message}")

log("INFO", "Connecting to service")
log("INFO", "Connected")
log("WARN", "Retrying slow response")',
  NULL,
  'contains',
  'WARN: Retrying',
  ARRAY['Create log() with strftime for timestamps.', 'Replace each print with log(level, message).', 'Use INFO for normal lines, WARN for the retry.']
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
  'week7-level4-task-schedule',
  'Build a Task Schedule',
  2,
  32,
  2,
  'exercise',
  'Create a list of scheduled tasks and print a run order.',
  '## Task schedules as data

Represent a day''s automation plan as a list of dictionaries:

```python
tasks = [
    {"time": "09:00", "action": "send_report"},
    {"time": "12:00", "action": "sync_data"},
]
```

### Your task

1. Create a `tasks` list with 3 entries (times: 09:00, 12:00, 17:00)
2. Loop and print: `Run at [time]: [action]`
3. Use actions: `backup_db`, `send_digest`, `cleanup_temp`',
  '# Create tasks list and print schedule

',
  'tasks = [
    {"time": "09:00", "action": "backup_db"},
    {"time": "12:00", "action": "send_digest"},
    {"time": "17:00", "action": "cleanup_temp"},
]

for task in tasks:
    print(f"Run at {task[''time'']}: {task[''action'']}")',
  NULL,
  'contains',
  'Run at 17:00: cleanup_temp',
  ARRAY['Each task is a dict with ''time'' and ''action'' keys.', 'Use a for loop to iterate tasks.', 'f-string: f"Run at {task[''time'']}: {task[''action'']}"']
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
  'week7-level5-retry-loops',
  'Retry Loops for Reliability',
  2,
  33,
  1,
  'exercise',
  'Simulate retries when an operation fails.',
  '## Retry pattern

Network and system calls can fail. A **retry loop** tries again:

```python
max_attempts = 3
for attempt in range(1, max_attempts + 1):
    success = simulate_call()  # returns True/False
    if success:
        break
```

### Simulated failure

We simulate success on attempt 3:

```python
def try_connect(attempt):
    return attempt >= 3
```

### Your task

Loop up to 3 attempts. Print `Attempt N: failed` or `Attempt N: success`. Stop on success.',
  'def try_connect(attempt):
    return attempt >= 3

max_attempts = 3
# Write retry loop here
',
  'def try_connect(attempt):
    return attempt >= 3

max_attempts = 3
for attempt in range(1, max_attempts + 1):
    if try_connect(attempt):
        print(f"Attempt {attempt}: success")
        break
    else:
        print(f"Attempt {attempt}: failed")',
  'Attempt 1: failed
Attempt 2: failed
Attempt 3: success',
  'contains',
  'Attempt 3: success',
  ARRAY['Use range(1, max_attempts + 1).', 'Call try_connect(attempt) inside the loop.', 'break after printing success.']
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
  'week7-level6-config-dicts',
  'Configuration Dictionaries',
  2,
  33,
  2,
  'run',
  'Store automation settings in config dicts instead of hardcoding.',
  '## Config-driven automation

Hardcoding values makes scripts hard to change. Use a **config dict**:

```python
config = {
    "app_name": "ReportBot",
    "max_retries": 3,
    "timeout_seconds": 30,
    "enabled": True,
}
```

Access values with `config["key"]` or `config.get("key", default)`.

Run the example — it reads settings from config and prints a summary.',
  'config = {
    "app_name": "ReportBot",
    "max_retries": 3,
    "timeout_seconds": 30,
    "enabled": True,
}

print(f"App: {config[''app_name'']}")
print(f"Retries: {config[''max_retries'']}")
print(f"Timeout: {config[''timeout_seconds'']}s")
print(f"Active: {config[''enabled'']}")',
  'config = {
    "app_name": "ReportBot",
    "max_retries": 3,
    "timeout_seconds": 30,
    "enabled": True,
}

print(f"App: {config[''app_name'']}")
print(f"Retries: {config[''max_retries'']}")
print(f"Timeout: {config[''timeout_seconds'']}s")
print(f"Active: {config[''enabled'']}")',
  NULL,
  'contains',
  'App: ReportBot',
  ARRAY['Config keeps settings in one place.', 'Change config values without editing logic.']
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
  'week7-level7-config-and-retry',
  'Config + Retry Combined',
  2,
  34,
  1,
  'exercise',
  'Use config dict values to control a retry loop.',
  '## Config-driven retries

Read `max_retries` from config instead of hardcoding:

```python
config = {"max_retries": 4, "job_name": "sync_files"}
```

Simulate: operation succeeds when `attempt >= 2`.

### Your task

1. Loop using `config["max_retries"]`
2. Log each attempt with the job name from config
3. Print `[job_name] Attempt N: OK` on success, `FAIL` otherwise',
  'config = {"max_retries": 4, "job_name": "sync_files"}

def run_step(attempt):
    return attempt >= 2

# Your retry loop using config
',
  'config = {"max_retries": 4, "job_name": "sync_files"}

def run_step(attempt):
    return attempt >= 2

for attempt in range(1, config["max_retries"] + 1):
    if run_step(attempt):
        print(f"[{config[''job_name'']}] Attempt {attempt}: OK")
        break
    else:
        print(f"[{config[''job_name'']}] Attempt {attempt}: FAIL")',
  NULL,
  'contains',
  '[sync_files] Attempt 2: OK',
  ARRAY['Use config[''max_retries''] in range().', 'Include config[''job_name''] in each print.', 'Break on OK.']
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
  'week7-level8-debug-retry',
  'Debug: Retry Loop Errors',
  2,
  34,
  2,
  'debug',
  'Fix bugs in a broken retry loop.',
  '## Debug: retry loops

Common retry bugs:
- Off-by-one in `range()`
- Forgetting `break` on success
- Wrong comparison operator

### Your task

Fix this code so it prints:
```
try 1: no
try 2: no
try 3: yes
done
```',
  'def works(n):
    return n == 3

for i in range(1, 3)
    if works(i)
        print(f"try {i}: yes")
    else
        print(f"try {i}: no")
print("done")',
  'def works(n):
    return n == 3

for i in range(1, 4):
    if works(i):
        print(f"try {i}: yes")
    else:
        print(f"try {i}: no")
print("done")',
  'try 1: no
try 2: no
try 3: yes
done',
  'contains',
  'try 3: yes',
  ARRAY['range(1, 4) gives 1, 2, 3.', 'Add colons after for and if.', 'Add colons after else.']
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
  'week7-level9-quiz',
  'Week 7 Checkpoint',
  2,
  35,
  1,
  'quiz',
  'Combine logging, config, and scheduling concepts.',
  '## Week 7 Checkpoint

Write a script that:

1. Has `config = {"job": "nightly_backup", "retries": 2}`
2. Defines `log(msg)` that prints `[LOG] msg`
3. Loops `retries` times, logging `Running [job] attempt N`
4. After the loop, logs `Complete`',
  'config = {"job": "nightly_backup", "retries": 2}

# Define log() and run the job loop
',
  'config = {"job": "nightly_backup", "retries": 2}

def log(msg):
    print(f"[LOG] {msg}")

for attempt in range(1, config["retries"] + 1):
    log(f"Running {config[''job'']} attempt {attempt}")
log("Complete")',
  NULL,
  'contains',
  '[LOG] Complete',
  ARRAY['log() wraps print with [LOG] prefix.', 'Use config[''retries''] for the loop range.', 'Log Complete after the loop finishes.']
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
  'week7-level10-project',
  'Week 7 Project — Job Runner',
  2,
  35,
  2,
  'project',
  'Build a mini automation job runner with config, logging, and retries.',
  '## Week 7 Project 🎯

Build a **Job Runner** that simulates desktop automation.

### Requirements

1. `config` dict: `job_name`, `max_retries`, `tasks` (list of 3 task names)
2. `log(level, msg)` — timestamped logs with INFO/WARN/ERROR
3. `run_task(name)` — returns `False` for `"upload"`, `True` otherwise
4. Retry loop for `upload` using `max_retries`
5. Run all tasks in order, logging each step

### Expected output includes

```
=== Job Runner: daily_sync ===
[INFO] Starting task: fetch
[INFO] Starting task: upload
[WARN] upload failed, retrying...
[INFO] upload succeeded on attempt 2
[INFO] Starting task: notify
[INFO] All tasks complete
```',
  'from datetime import datetime

config = {
    "job_name": "daily_sync",
    "max_retries": 3,
    "tasks": ["fetch", "upload", "notify"],
}

def log(level, msg):
    pass

def run_task(name):
    return name != "upload"

# Build the job runner below
',
  'from datetime import datetime

config = {
    "job_name": "daily_sync",
    "max_retries": 3,
    "tasks": ["fetch", "upload", "notify"],
}

upload_attempts = {"count": 0}

def log(level, msg):
    ts = datetime.now().strftime("%H:%M:%S")
    print(f"[{level}] {msg}")

def run_task(name):
    if name == "upload":
        upload_attempts["count"] += 1
        return upload_attempts["count"] >= 2
    return True

print(f"=== Job Runner: {config[''job_name'']} ===")

for task in config["tasks"]:
    log("INFO", f"Starting task: {task}")
    if task == "upload":
        for attempt in range(1, config["max_retries"] + 1):
            if run_task(task):
                log("INFO", f"upload succeeded on attempt {attempt}")
                break
            else:
                log("WARN", "upload failed, retrying...")
    else:
        run_task(task)

log("INFO", "All tasks complete")',
  NULL,
  'contains',
  'All tasks complete',
  ARRAY['Start with log() and the header print.', 'Handle upload separately with a retry loop.', 'Other tasks just call run_task once.']
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
  'week8-level1-office-automation',
  'Office Automation Overview',
  2,
  36,
  1,
  'concept',
  'Learn how Python automates spreadsheets, PDFs, and email.',
  '## Office Automation

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

Run the overview below.',
  'pipeline = ["extract_csv", "build_report", "send_email"]

print("=== Office Automation Pipeline ===")
for i, step in enumerate(pipeline, 1):
    print(f"{i}. {step}")
print("Ready to automate!")',
  'pipeline = ["extract_csv", "build_report", "send_email"]

print("=== Office Automation Pipeline ===")
for i, step in enumerate(pipeline, 1):
    print(f"{i}. {step}")
print("Ready to automate!")',
  NULL,
  'contains',
  'Office Automation Pipeline',
  ARRAY['Run to see the pipeline steps.', 'enumerate(pipeline, 1) numbers from 1.']
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
  'week8-level2-csv-strings',
  'CSV Reports as Strings',
  2,
  36,
  2,
  'run',
  'Generate CSV-formatted reports using string building.',
  '## CSV as strings

A CSV (Comma-Separated Values) file is just text:

```
name,department,sales
Alice,East,1200
Bob,West,980
```

Build it in Python:

```python
header = "name,department,sales"
row = f"{name},{dept},{sales}"
csv = header + "\n" + row
```

No file needed — the string **is** the report. Run the example.',
  'rows = [
    {"name": "Alice", "dept": "East", "sales": 1200},
    {"name": "Bob", "dept": "West", "sales": 980},
]

lines = ["name,department,sales"]
for r in rows:
    lines.append(f"{r[''name'']},{r[''dept'']},{r[''sales'']}")

csv_report = "\n".join(lines)
print(csv_report)',
  'rows = [
    {"name": "Alice", "dept": "East", "sales": 1200},
    {"name": "Bob", "dept": "West", "sales": 980},
]

lines = ["name,department,sales"]
for r in rows:
    lines.append(f"{r[''name'']},{r[''dept'']},{r[''sales'']}")

csv_report = "\n".join(lines)
print(csv_report)',
  'name,department,sales
Alice,East,1200
Bob,West,980',
  'contains',
  'Alice,East,1200',
  ARRAY['join(lines) combines rows with newlines.', 'First line is the header.']
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
  'week8-level3-modify-csv',
  'Modify CSV Headers',
  2,
  37,
  1,
  'modify',
  'Add a totals row and fix CSV column headers.',
  '## Your task

The script builds a CSV but has wrong headers and no total.

Fix it to output:
```
product,qty,price
Pen,10,15
Notebook,5,80
TOTAL,15,950
```

- Change headers to `product,qty,price`
- Add a TOTAL row (qty=15, price=950)',
  'items = [
    {"product": "Pen", "qty": 10, "price": 15},
    {"product": "Notebook", "qty": 5, "price": 80},
]

lines = ["item,quantity,cost"]  # fix header
for item in items:
    lines.append(f"{item[''product'']},{item[''qty'']},{item[''price'']}")
# add TOTAL row

print("\n".join(lines))',
  'items = [
    {"product": "Pen", "qty": 10, "price": 15},
    {"product": "Notebook", "qty": 5, "price": 80},
]

lines = ["product,qty,price"]
for item in items:
    lines.append(f"{item[''product'']},{item[''qty'']},{item[''price'']}")
lines.append("TOTAL,15,950")

print("\n".join(lines))',
  NULL,
  'contains',
  'TOTAL,15,950',
  ARRAY['Fix the header string.', 'Append TOTAL,15,950 as the last line.', 'Use join to print.']
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
  'week8-level4-csv-report',
  'Build a Sales CSV Report',
  2,
  37,
  2,
  'exercise',
  'Generate a complete CSV sales report from a list of records.',
  '## Sales CSV report

Given sales data, produce a CSV string and print it.

### Your task

1. Header: `date,product,amount`
2. Loop through `sales` and add each row
3. Append a summary line: `SUMMARY,,2180` (total of amounts)
4. Print the full CSV',
  'sales = [
    {"date": "2026-01-10", "product": "Widget", "amount": 450},
    {"date": "2026-01-11", "product": "Gadget", "amount": 730},
    {"date": "2026-01-12", "product": "Widget", "amount": 1000},
]

# Build and print CSV report
',
  'sales = [
    {"date": "2026-01-10", "product": "Widget", "amount": 450},
    {"date": "2026-01-11", "product": "Gadget", "amount": 730},
    {"date": "2026-01-12", "product": "Widget", "amount": 1000},
]

lines = ["date,product,amount"]
for s in sales:
    lines.append(f"{s[''date'']},{s[''product'']},{s[''amount'']}")
lines.append("SUMMARY,,2180")
print("\n".join(lines))',
  NULL,
  'contains',
  'SUMMARY,,2180',
  ARRAY['Start with lines = [''date,product,amount''].', 'Loop sales and append formatted rows.', 'Add SUMMARY line at the end.']
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
  'week8-level5-pdf-simulation',
  'Simulated PDF Text Extraction',
  2,
  38,
  1,
  'exercise',
  'Parse text from a simulated PDF document string.',
  '## PDF extraction (simulated)

Real PDF tools extract text from binary files. We simulate with a multi-line string:

```python
pdf_text = """
INVOICE #1042
Customer: Acme Corp
Amount: 1500.00
Due: 2026-02-01
"""
```

Parse key fields by searching lines:

```python
for line in pdf_text.strip().split("\n"):
    if line.startswith("Amount:"):
        amount = line.split(":")[1].strip()
```

### Your task

Extract `customer` and `amount` from `pdf_text` and print:
`Customer: Acme Corp | Amount: 1500.00`',
  'pdf_text = """
INVOICE #1042
Customer: Acme Corp
Amount: 1500.00
Due: 2026-02-01
"""

customer = ""
amount = ""

# Parse pdf_text

print(f"Customer: {customer} | Amount: {amount}")',
  'pdf_text = """
INVOICE #1042
Customer: Acme Corp
Amount: 1500.00
Due: 2026-02-01
"""

customer = ""
amount = ""

for line in pdf_text.strip().split("\n"):
    if line.startswith("Customer:"):
        customer = line.split(":", 1)[1].strip()
    elif line.startswith("Amount:"):
        amount = line.split(":", 1)[1].strip()

print(f"Customer: {customer} | Amount: {amount}")',
  NULL,
  'contains',
  'Customer: Acme Corp | Amount: 1500.00',
  ARRAY['Split pdf_text by newlines.', 'Check line.startswith(''Customer:'').', 'Use split('':'', 1)[1].strip() for the value.']
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
  'week8-level6-email-templates',
  'Email Template Building',
  2,
  38,
  2,
  'run',
  'Build professional emails from reusable templates.',
  '## Email templates

Automated emails use templates with placeholders:

```python
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
```

Run the example to see a filled template.',
  'template = """Subject: {subject}

Hi {name},

{body}

Regards,
{sender}
"""

email = template.format(
    subject="Weekly Report",
    name="Team",
    body="Sales are up 12% this week.",
    sender="ReportBot",
)

print(email)',
  'template = """Subject: {subject}

Hi {name},

{body}

Regards,
{sender}
"""

email = template.format(
    subject="Weekly Report",
    name="Team",
    body="Sales are up 12% this week.",
    sender="ReportBot",
)

print(email)',
  NULL,
  'contains',
  'Subject: Weekly Report',
  ARRAY['template.format() fills placeholders.', 'Curly braces {name} are replaced with values.']
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
  'week8-level7-email-with-report',
  'Email + CSV Summary',
  2,
  39,
  1,
  'exercise',
  'Combine CSV data into an email body template.',
  '## Report email

Build an email body that includes CSV summary stats.

### Your task

1. Calculate `total` from `amounts` list
2. Build `body` string: `Total sales: [total] across [count] records.`
3. Fill the template and print the email',
  'amounts = [450, 730, 1000]

template = """Subject: {subject}

Hi {name},

{body}

Regards,
{sender}
"""

# Calculate total, build body, print email
',
  'amounts = [450, 730, 1000]

template = """Subject: {subject}

Hi {name},

{body}

Regards,
{sender}
"""

total = sum(amounts)
count = len(amounts)
body = f"Total sales: {total} across {count} records."

email = template.format(
    subject="Sales Summary",
    name="Manager",
    body=body,
    sender="ReportBot",
)
print(email)',
  NULL,
  'contains',
  'Total sales: 2180',
  ARRAY['sum(amounts) for total.', 'len(amounts) for count.', 'Pass body into template.format().']
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
  'week8-level8-debug-csv',
  'Debug: CSV Formatting',
  2,
  39,
  2,
  'debug',
  'Fix bugs in CSV row generation.',
  '## Debug CSV

Common CSV bugs:
- Wrong separator (semicolon vs comma)
- Missing newline between rows
- Forgetting to convert numbers to strings in f-strings (usually fine in Python)

Fix this code to print:
```
id,name
1,Alpha
2,Beta
```',
  'records = [{"id": 1, "name": "Alpha"}, {"id": 2, "name": "Beta"}]

lines = ["id;name"]
for r in records:
    lines.append(f"{r[''id'']}-{r[''name'']}")
print("".join(lines))',
  'records = [{"id": 1, "name": "Alpha"}, {"id": 2, "name": "Beta"}]

lines = ["id,name"]
for r in records:
    lines.append(f"{r[''id'']},{r[''name'']}")
print("\n".join(lines))',
  'id,name
1,Alpha
2,Beta',
  'contains',
  '2,Beta',
  ARRAY['Header should use commas not semicolons.', 'Rows need comma separator.', 'join with \n not empty string.']
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
  'week8-level9-quiz',
  'Week 8 Checkpoint',
  2,
  40,
  1,
  'quiz',
  'Combine CSV, PDF parsing, and email templates.',
  '## Week 8 Checkpoint

Given simulated PDF text, extract the invoice ID and build a one-line CSV + email subject.

1. Parse `Invoice ID: 99` from `doc`
2. Print CSV: `invoice_id,status\n99,processed`
3. Print subject line: `Subject: Invoice 99 Processed`',
  'doc = "Invoice ID: 99\nCustomer: TestCo\nStatus: Paid"

# Extract ID, print CSV and subject
',
  'doc = "Invoice ID: 99\nCustomer: TestCo\nStatus: Paid"

invoice_id = ""
for line in doc.split("\n"):
    if line.startswith("Invoice ID:"):
        invoice_id = line.split(":", 1)[1].strip()

print(f"invoice_id,status\n{invoice_id},processed")
print(f"Subject: Invoice {invoice_id} Processed")',
  NULL,
  'contains',
  'Subject: Invoice 99 Processed',
  ARRAY['Parse Invoice ID like earlier PDF exercise.', 'Use f-string for CSV second row.', 'Print subject on its own line.']
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
  'week8-level10-project',
  'Week 8 Project — Report Pipeline',
  2,
  40,
  2,
  'project',
  'Build a full office automation pipeline: extract, report, email.',
  '## Week 8 Project 🎯

Build an **Office Report Pipeline** that:

1. Parses simulated PDF invoice text for customer and amount
2. Builds a CSV report string with header + one data row
3. Sends a formatted email (print the email, don''t actually send)

### Input

```python
pdf_text = "Invoice\nCustomer: Globex\nAmount: 2400"
```

### Expected output includes

```
=== CSV Report ===
customer,amount
Globex,2400
=== Email ===
Subject: Invoice Report for Globex
...
Total billed: 2400
```',
  'pdf_text = "Invoice\nCustomer: Globex\nAmount: 2400"

template = """Subject: {subject}

Dear {name},

{body}

Regards,\nFinance Bot
"""

# 1. Parse PDF text
# 2. Build CSV
# 3. Build and print email
',
  'pdf_text = "Invoice\nCustomer: Globex\nAmount: 2400"

template = """Subject: {subject}

Dear {name},

{body}

Regards,\nFinance Bot
"""

customer = ""
amount = ""
for line in pdf_text.split("\n"):
    if line.startswith("Customer:"):
        customer = line.split(":", 1)[1].strip()
    elif line.startswith("Amount:"):
        amount = line.split(":", 1)[1].strip()

csv_lines = ["customer,amount", f"{customer},{amount}"]
print("=== CSV Report ===")
print("\n".join(csv_lines))

body = f"Please find your invoice summary.\nTotal billed: {amount}"
email = template.format(
    subject=f"Invoice Report for {customer}",
    name=customer,
    body=body,
)
print("=== Email ===")
print(email)',
  NULL,
  'contains',
  'Total billed: 2400',
  ARRAY['Parse customer and amount first.', 'Build csv_lines list then join.', 'Use template.format for the email.']
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
  'week9-level1-prompt-structure',
  'Prompt Structure Basics',
  3,
  41,
  1,
  'concept',
  'Learn the anatomy of effective AI prompts.',
  '## AI Prompt Engineering

When calling AI APIs, your **prompt** determines the quality of results.

### Prompt anatomy

| Part | Purpose | Example |
|------|---------|---------|
| **Role** | Who the AI should act as | "You are a support classifier." |
| **Task** | What to do | "Classify the message as billing or tech." |
| **Format** | Output shape | "Reply with JSON: {category, confidence}" |
| **Input** | The data to process | "Message: I was charged twice." |

### Good prompt template

```python
prompt = f"""Role: {role}
Task: {task}
Format: {output_format}

Input: {user_text}
"""
```

In this course we **simulate** AI responses with Python logic — same patterns, no network calls.',
  'role = "You are a helpful classifier."
task = "Label the text as positive or negative."
output_format = ''{"sentiment": "positive|negative"}''
user_text = "I love this product!"

prompt = f"""Role: {role}
Task: {task}
Format: {output_format}

Input: {user_text}
"""

print("=== Generated Prompt ===")
print(prompt)',
  'role = "You are a helpful classifier."
task = "Label the text as positive or negative."
output_format = ''{"sentiment": "positive|negative"}''
user_text = "I love this product!"

prompt = f"""Role: {role}
Task: {task}
Format: {output_format}

Input: {user_text}
"""

print("=== Generated Prompt ===")
print(prompt)',
  NULL,
  'contains',
  'Generated Prompt',
  ARRAY['Run to see the full prompt structure.', 'Each section guides the AI clearly.']
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
  'week9-level2-build-prompt',
  'Build a Structured Prompt',
  3,
  41,
  2,
  'run',
  'Assemble a multi-section prompt from variables.',
  '## Building prompts programmatically

Automation builds prompts from data:

```python
def build_prompt(role, task, fmt, text):
    return f"Role: {role}\nTask: {task}\nFormat: {fmt}\n\nInput: {text}"
```

Run the example — it builds a support-ticket classifier prompt.',
  'def build_prompt(role, task, fmt, text):
    return f"""Role: {role}
Task: {task}
Format: {fmt}

Input: {text}
"""

prompt = build_prompt(
    role="Support ticket classifier",
    task="Choose billing, technical, or other",
    fmt=''{"category": "..."}'',
    text="My payment failed but I was charged.",
)

print(prompt)',
  'def build_prompt(role, task, fmt, text):
    return f"""Role: {role}
Task: {task}
Format: {fmt}

Input: {text}
"""

prompt = build_prompt(
    role="Support ticket classifier",
    task="Choose billing, technical, or other",
    fmt=''{"category": "..."}'',
    text="My payment failed but I was charged.",
)

print(prompt)',
  NULL,
  'contains',
  'payment failed',
  ARRAY['build_prompt combines all sections.', 'Run to inspect the full prompt.']
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
  'week9-level3-modify-prompt',
  'Improve a Weak Prompt',
  3,
  42,
  1,
  'modify',
  'Add role, format, and examples to a minimal prompt.',
  '## Your task

The prompt below is too vague. Improve it by adding:

1. A **Role** line: `Role: Sentiment analyst`
2. A **Format** line: `Format: {"sentiment": "positive|negative"}`
3. Keep the input text at the end

Print the improved prompt.',
  'text = "The delivery was late and the box was damaged."

# Too vague — improve this prompt
prompt = f"Classify this: {text}"

print(prompt)',
  'text = "The delivery was late and the box was damaged."

prompt = f"""Role: Sentiment analyst
Task: Classify sentiment as positive or negative
Format: {{"sentiment": "positive|negative"}}

Input: {text}
"""

print(prompt)',
  NULL,
  'contains',
  'Sentiment analyst',
  ARRAY['Use a multi-line f-string.', 'Include Role, Task, Format sections.', 'End with Input: {text}.']
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
  'week9-level4-json-parsing',
  'Parse JSON Responses',
  3,
  42,
  2,
  'exercise',
  'Parse simulated AI JSON responses with json.loads.',
  '## JSON response parsing

AI APIs often return JSON strings:

```python
import json

response = ''{"category": "billing", "confidence": 0.92}''
data = json.loads(response)
print(data["category"])
```

### Your task

Parse `ai_response` and print:
```
Category: technical
Confidence: 0.85
```',
  'import json

ai_response = ''{"category": "technical", "confidence": 0.85}''

# Parse and print category and confidence
',
  'import json

ai_response = ''{"category": "technical", "confidence": 0.85}''

data = json.loads(ai_response)
print(f"Category: {data[''category'']}")
print(f"Confidence: {data[''confidence'']}")',
  NULL,
  'contains',
  'Category: technical',
  ARRAY['json.loads() converts string to dict.', 'Access keys with data[''category''].', 'Use f-strings for output.']
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
  'week9-level5-simulated-classifier',
  'Simulated AI Classification',
  3,
  43,
  1,
  'exercise',
  'Simulate AI text classification with keyword rules.',
  '## Simulated classifier

Without real API calls, simulate classification with rules:

```python
def classify(text):
    text_lower = text.lower()
    if "refund" in text_lower or "charge" in text_lower:
        return "billing"
    if "error" in text_lower or "bug" in text_lower:
        return "technical"
    return "other"
```

Return JSON string matching API format:

```python
import json
result = json.dumps({"category": classify(text), "confidence": 0.9})
```

### Your task

Implement `classify()` and print JSON for the sample message.',
  'import json

def classify(text):
    # Return billing, technical, or other
    pass

message = "I need a refund for order 4421"
# Print JSON result
',
  'import json

def classify(text):
    text_lower = text.lower()
    if "refund" in text_lower or "charge" in text_lower:
        return "billing"
    if "error" in text_lower or "bug" in text_lower:
        return "technical"
    return "other"

message = "I need a refund for order 4421"
result = json.dumps({"category": classify(message), "confidence": 0.9})
print(result)',
  NULL,
  'contains',
  '"category": "billing"',
  ARRAY['Check for keywords in text.lower().', 'json.dumps creates a JSON string.', 'refund → billing.']
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
  'week9-level6-classification-demo',
  'Batch Classification Demo',
  3,
  43,
  2,
  'run',
  'Classify multiple messages and collect results.',
  '## Batch processing

Production systems classify many messages in a loop:

```python
messages = ["...", "..."]
results = []
for msg in messages:
    results.append(classify(msg))
```

Run the demo — it classifies 3 support messages and prints each result.',
  'import json

def classify(text):
    t = text.lower()
    if "refund" in t or "bill" in t:
        return "billing"
    if "error" in t or "crash" in t:
        return "technical"
    return "other"

messages = [
    "Please refund my subscription",
    "The app crashes on login",
    "What are your hours?",
]

for msg in messages:
    cat = classify(msg)
    print(f"{cat}: {msg[:30]}...")',
  'import json

def classify(text):
    t = text.lower()
    if "refund" in t or "bill" in t:
        return "billing"
    if "error" in t or "crash" in t:
        return "technical"
    return "other"

messages = [
    "Please refund my subscription",
    "The app crashes on login",
    "What are your hours?",
]

for msg in messages:
    cat = classify(msg)
    print(f"{cat}: {msg[:30]}...")',
  NULL,
  'contains',
  'billing: Please refund',
  ARRAY['Each message gets a category.', 'msg[:30] shows first 30 characters.']
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
  'week9-level7-prompt-and-classify',
  'Prompt + Classify Pipeline',
  3,
  44,
  1,
  'exercise',
  'Build a prompt, simulate classification, and parse the JSON output.',
  '## Full mini-pipeline

1. Build prompt with `build_prompt()`
2. Simulate AI with `simulate_ai(prompt)` returning JSON string
3. Parse with `json.loads()` and print category

### Your task

Complete the pipeline for the given message. Print:
`Result: billing`',
  'import json

def build_prompt(text):
    return f"Role: Classifier\nInput: {text}"

def simulate_ai(prompt):
    text = prompt.split("Input: ")[1]
    if "refund" in text.lower():
        return ''{"category": "billing"}''
    return ''{"category": "other"}''

message = "I want a refund please"

# Build prompt, call simulate_ai, parse, print Result
',
  'import json

def build_prompt(text):
    return f"Role: Classifier\nInput: {text}"

def simulate_ai(prompt):
    text = prompt.split("Input: ")[1]
    if "refund" in text.lower():
        return ''{"category": "billing"}''
    return ''{"category": "other"}''

message = "I want a refund please"

prompt = build_prompt(message)
response = simulate_ai(prompt)
data = json.loads(response)
print(f"Result: {data[''category'']}")',
  NULL,
  'contains',
  'Result: billing',
  ARRAY['Chain: build_prompt → simulate_ai → json.loads.', 'Extract category from parsed dict.', 'Message contains refund → billing.']
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
  'week9-level8-debug-json',
  'Debug: JSON Parsing',
  3,
  44,
  2,
  'debug',
  'Fix bugs in JSON response handling.',
  '## Debug JSON parsing

Common JSON bugs:
- Using single quotes in JSON strings (invalid JSON)
- Forgetting `json.loads()` — treating string as dict
- Wrong key names

Fix this code to print:
```
Label: spam
Score: 0.95
```',
  'import json

response = "{''label'': ''spam'', ''score'': 0.95}"

data = response
print(f"Label: {data[''label'']}")
print(f"Score: {data[''score'']}")',
  'import json

response = ''{"label": "spam", "score": 0.95}''

data = json.loads(response)
print(f"Label: {data[''label'']}")
print(f"Score: {data[''score'']}")',
  NULL,
  'contains',
  'Label: spam',
  ARRAY['JSON requires double quotes.', 'Use json.loads(response) not raw string.', 'Fix the response string quotes.']
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
  'week9-level9-quiz',
  'Week 9 Checkpoint',
  3,
  45,
  1,
  'quiz',
  'Build a prompt, classify text, and output JSON.',
  '## Week 9 Checkpoint

For message `"The server returns a 500 error"`:

1. Build prompt: `Classify: [message]`
2. Classify as `technical` if "error" in message (case-insensitive)
3. Print JSON: `{"category": "technical", "prompt_used": true}`',
  'import json

message = "The server returns a 500 error"

# Build prompt, classify, print JSON
',
  'import json

message = "The server returns a 500 error"

prompt = f"Classify: {message}"
category = "technical" if "error" in message.lower() else "other"
result = json.dumps({"category": category, "prompt_used": True})
print(result)',
  NULL,
  'contains',
  '"category": "technical"',
  ARRAY['Check ''error'' in message.lower().', 'json.dumps for output.', 'Include prompt_used: True.']
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
  'week9-level10-project',
  'Week 9 Project — AI Ticket Router',
  3,
  45,
  2,
  'project',
  'Build a support ticket router with prompts, classification, and JSON output.',
  '## Week 9 Project 🎯

Build an **AI Ticket Router** that processes a list of support messages.

### Requirements

1. `build_prompt(text)` — returns structured prompt with Role, Task, Format, Input
2. `classify(text)` — returns `billing`, `technical`, or `other` using keywords
3. Loop through `tickets`, build prompt, classify, collect JSON results
4. Print summary: count per category

### Keywords

- billing: refund, charge, bill, payment
- technical: error, bug, crash, server
- other: everything else

### Expected output includes

```
=== Ticket Router ===
billing: 2
technical: 1
other: 1
Done
```',
  'import json

tickets = [
    "I was charged twice for my plan",
    "Login page shows a 500 error",
    "Can I get a refund?",
    "What are your business hours?",
]

def build_prompt(text):
    pass

def classify(text):
    pass

# Process tickets and print summary
',
  'import json

tickets = [
    "I was charged twice for my plan",
    "Login page shows a 500 error",
    "Can I get a refund?",
    "What are your business hours?",
]

def build_prompt(text):
    return f"""Role: Support classifier
Task: Route to billing, technical, or other
Format: {{"category": "..."}}

Input: {text}
"""

def classify(text):
    t = text.lower()
    if any(w in t for w in ["refund", "charge", "bill", "payment"]):
        return "billing"
    if any(w in t for w in ["error", "bug", "crash", "server"]):
        return "technical"
    return "other"

print("=== Ticket Router ===")
counts = {"billing": 0, "technical": 0, "other": 0}

for ticket in tickets:
    prompt = build_prompt(ticket)
    category = classify(ticket)
    counts[category] += 1

for cat, n in counts.items():
    print(f"{cat}: {n}")
print("Done")',
  NULL,
  'contains',
  'Done',
  ARRAY['Use a counts dict to track categories.', 'any(w in t for w in list) checks keywords.', 'Print each category count then Done.']
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
  'week10-level1-ai-pipelines',
  'AI-Driven Automation Pipelines',
  3,
  46,
  1,
  'concept',
  'Understand how to chain steps into AI automation pipelines.',
  '## AI-Driven Automation

Real automation often follows a **pipeline** — data flows through steps, each transforming it:

```
Document → Clean → Analyze → Extract → Report
```

### Why simulate AI?

In this course we run Python in the browser (Pyodide). We **simulate** AI responses using dictionaries and strings — no network calls needed.

```python
def simulate_ai(prompt):
    return {"response": "Summary: Meeting notes processed."}
```

### Pipeline mindset

Each step is a **pure function**: input in, output out. Chain them together for powerful automation scripts.',
  '# AI pipeline preview — run to see the flow

def simulate_ai(text):
    return {"summary": f"Processed {len(text)} chars"}

document = "Quarterly sales report for Q3."
result = simulate_ai(document)
print(result["summary"])
print("Pipeline step complete ✓")',
  'def simulate_ai(text):
    return {"summary": f"Processed {len(text)} chars"}

document = "Quarterly sales report for Q3."
result = simulate_ai(document)
print(result["summary"])
print("Pipeline step complete ✓")',
  'Processed 32 chars
Pipeline step complete ✓',
  'contains',
  'Pipeline step complete',
  ARRAY['Click Run to execute the pipeline preview.', 'Each step returns data the next step can use.']
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
  'week10-level2-simulated-ai',
  'Simulated AI Responses',
  3,
  46,
  2,
  'run',
  'Return structured AI-like responses from a simulated function.',
  '## Simulating AI

Instead of calling a real API, we return **predictable dicts** that mimic AI output:

```python
def ask_ai(question):
    responses = {
        "summarize": {"text": "Three key points found."},
        "extract": {"entities": ["Alice", "Project X"]},
    }
    return responses.get(question, {"text": "Unknown task"})
```

This lets you build and test pipelines **offline** — the same pattern works when you swap in a real API later.',
  'def ask_ai(task, content):
    if task == "summarize":
        return {"summary": content[:30] + "..."}
    return {"error": "Unknown task"}

doc = "Customer feedback: product quality improved significantly this quarter."
response = ask_ai("summarize", doc)
print(response["summary"])
print("AI simulation ready")',
  'def ask_ai(task, content):
    if task == "summarize":
        return {"summary": content[:30] + "..."}
    return {"error": "Unknown task"}

doc = "Customer feedback: product quality improved significantly this quarter."
response = ask_ai("summarize", doc)
print(response["summary"])
print("AI simulation ready")',
  NULL,
  'contains',
  'AI simulation ready',
  ARRAY['Run the code to see the simulated summary.', 'Dict keys let you access structured AI output.']
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
  'week10-level3-pipeline-chaining',
  'Chaining Pipeline Steps',
  3,
  47,
  1,
  'modify',
  'Connect two pipeline functions so output flows to input.',
  '## Chaining Steps

Pass the **output of step 1** into **step 2**:

```python
def clean(text):
    return text.strip().lower()

def analyze(text):
    return {"word_count": len(text.split())}

raw = "  Hello World  "
cleaned = clean(raw)
result = analyze(cleaned)
```

### Your task

Complete the chain: `clean()` → `extract_keywords()` → print the keywords list.',
  'def clean(text):
    return text.strip().lower()

def extract_keywords(text):
    words = text.split()
    return [w for w in words if len(w) > 4]

raw_doc = "  AUTOMATION scripts PROCESS documents efficiently  "

# Chain: clean then extract keywords
keywords = 
print(keywords)',
  'def clean(text):
    return text.strip().lower()

def extract_keywords(text):
    words = text.split()
    return [w for w in words if len(w) > 4]

raw_doc = "  AUTOMATION scripts PROCESS documents efficiently  "
cleaned = clean(raw_doc)
keywords = extract_keywords(cleaned)
print(keywords)',
  NULL,
  'contains',
  'automation',
  ARRAY['First call clean(raw_doc), then pass result to extract_keywords.', 'Store the final list in keywords.']
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
  'week10-level4-feed-documents',
  'Feeding Documents to AI',
  3,
  47,
  2,
  'exercise',
  'Loop through documents and send each to a simulated AI.',
  '## Batch Document Processing

Automation scripts often process **many documents**:

```python
documents = ["Report A", "Report B", "Report C"]

for doc in documents:
    result = simulate_ai(doc)
    print(result["status"])
```

### Your task

Loop through 3 documents, call `process_document()` on each, and print the status.',
  'def process_document(text):
    return {"status": "processed", "id": text[:8]}

documents = [
    "Invoice #1042 - Acme Corp",
    "Invoice #1043 - Beta Ltd",
    "Invoice #1044 - Gamma Inc",
]

# Process each document and print status
',
  'def process_document(text):
    return {"status": "processed", "id": text[:8]}

documents = [
    "Invoice #1042 - Acme Corp",
    "Invoice #1043 - Beta Ltd",
    "Invoice #1044 - Gamma Inc",
]

for doc in documents:
    result = process_document(doc)
    print(f"{result[''id'']}: {result[''status'']}")',
  NULL,
  'contains',
  'Gamma Inc',
  ARRAY['Use a for loop over documents.', 'Access result[''status''] and result[''id''] in your print.']
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
  'week10-level5-structured-extraction',
  'Structured Extraction',
  3,
  48,
  1,
  'exercise',
  'Parse simulated AI output into structured fields.',
  '## Structured Extraction

AI responses often return **structured data** you can parse:

```python
ai_response = {
    "title": "Bug Report",
    "priority": "high",
    "assignee": "dev-team"
}

print(f"Priority: {ai_response[''priority'']}")
```

### Your task

Write `extract_fields()` that takes a simulated AI dict and returns a formatted string:
`"Title: [title] | Priority: [priority]"`',
  'def simulate_extract(text):
    return {"title": "Login issue", "priority": "high", "source": text}

def extract_fields(ai_response):
    # Return formatted string
    pass

response = simulate_extract("User cannot log in after update")
print(extract_fields(response))',
  'def simulate_extract(text):
    return {"title": "Login issue", "priority": "high", "source": text}

def extract_fields(ai_response):
    return f"Title: {ai_response[''title'']} | Priority: {ai_response[''priority'']}"

response = simulate_extract("User cannot log in after update")
print(extract_fields(response))',
  NULL,
  'contains',
  'Title: Login issue',
  ARRAY['Use an f-string with ai_response[''title''] and ai_response[''priority''].', 'Return the string from extract_fields.']
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
  'week10-level6-multi-step-pipeline',
  'Multi-Step Pipeline',
  3,
  48,
  2,
  'exercise',
  'Build a three-step document processing pipeline.',
  '## Multi-Step Pipelines

Combine cleaning, AI analysis, and formatting:

```python
def pipeline(doc):
    cleaned = clean(doc)
    analyzed = simulate_ai(cleaned)
    return format_report(analyzed)
```

Each step has one job. The pipeline orchestrates them.',
  'def clean(text):
    return " ".join(text.split())

def simulate_ai(text):
    return {"sentiment": "positive" if "great" in text.lower() else "neutral"}

def format_report(data):
    return f"Sentiment: {data[''sentiment'']}"

def run_pipeline(document):
    # Chain all three steps and return final report
    pass

doc = "This product is great and works well"
print(run_pipeline(doc))',
  'def clean(text):
    return " ".join(text.split())

def simulate_ai(text):
    return {"sentiment": "positive" if "great" in text.lower() else "neutral"}

def format_report(data):
    return f"Sentiment: {data[''sentiment'']}"

def run_pipeline(document):
    cleaned = clean(document)
    analyzed = simulate_ai(cleaned)
    return format_report(analyzed)

doc = "This product is great and works well"
print(run_pipeline(doc))',
  NULL,
  'contains',
  'Sentiment: positive',
  ARRAY['Call clean, then simulate_ai, then format_report in order.', 'Return the string from format_report.']
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
  'week10-level7-prompt-templates',
  'Prompt Templates',
  3,
  49,
  1,
  'exercise',
  'Use reusable prompt templates for consistent AI requests.',
  '## Prompt Templates

Templates keep prompts **consistent and reusable**:

```python
TEMPLATE = "Summarize the following in {max_words} words:\n{text}"

def build_prompt(text, max_words=50):
    return TEMPLATE.format(text=text, max_words=max_words)
```

In production, this template goes to a real AI API. Here we simulate the response.',
  'TEMPLATE = "Extract action items from:\n{text}"

def build_prompt(text):
    return TEMPLATE.format(text=text)

def simulate_ai(prompt):
    if "meeting" in prompt.lower():
        return {"actions": ["Send recap", "Schedule follow-up"]}
    return {"actions": []}

notes = "Team meeting: finalize budget and send recap email"
prompt = build_prompt(notes)
result = simulate_ai(prompt)
print(result["actions"])',
  'TEMPLATE = "Extract action items from:\n{text}"

def build_prompt(text):
    return TEMPLATE.format(text=text)

def simulate_ai(prompt):
    if "meeting" in prompt.lower():
        return {"actions": ["Send recap", "Schedule follow-up"]}
    return {"actions": []}

notes = "Team meeting: finalize budget and send recap email"
prompt = build_prompt(notes)
result = simulate_ai(prompt)
print(result["actions"])',
  NULL,
  'contains',
  'Send recap',
  ARRAY['build_prompt uses TEMPLATE.format.', 'The simulated AI returns a list under ''actions''.']
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
  'week10-level8-debug-pipeline',
  'Debug: Pipeline Errors',
  3,
  49,
  2,
  'debug',
  'Fix a broken pipeline chain that drops data between steps.',
  '## Debug Pipelines

Common pipeline bugs:
- Forgetting to **return** values from a step
- Passing wrong variable between steps
- Accessing wrong dict key from AI response

Fix this code so it prints `Extracted: 3 items`',
  'def simulate_ai(text):
    return {"items": text.split(",")}

def count_items(ai_result):
    items = ai_result["items"]
    # Bug: missing return
    len(items)

data = "apple,banana,cherry"
result = simulate_ai(data)
count = count_items(result)
print(f"Extracted: {count} items")',
  'def simulate_ai(text):
    return {"items": text.split(",")}

def count_items(ai_result):
    items = ai_result["items"]
    return len(items)

data = "apple,banana,cherry"
result = simulate_ai(data)
count = count_items(result)
print(f"Extracted: {count} items")',
  NULL,
  'contains',
  'Extracted: 3 items',
  ARRAY['count_items must return the length.', 'Without return, count will be None.']
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
  'week10-level9-quiz',
  'Week 10 Checkpoint',
  3,
  50,
  1,
  'quiz',
  'Quiz on pipelines and structured AI extraction.',
  '## Checkpoint

Build a mini pipeline:
1. `normalize(text)` — strip whitespace and lowercase
2. `classify(text)` — return `{"category": "urgent"}` if "urgent" in text, else `{"category": "normal"}`
3. Print the category for: `"  URGENT: Server down  "`',
  'def normalize(text):
    return text.strip().lower()

def classify(text):
    if "urgent" in text:
        return {"category": "urgent"}
    return {"category": "normal"}

message = "  URGENT: Server down  "
# Run pipeline and print category
',
  'def normalize(text):
    return text.strip().lower()

def classify(text):
    if "urgent" in text:
        return {"category": "urgent"}
    return {"category": "normal"}

message = "  URGENT: Server down  "
cleaned = normalize(message)
result = classify(cleaned)
print(result["category"])',
  NULL,
  'output',
  'urgent',
  ARRAY['Normalize first, then classify.', 'Print result[''category''].']
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
  'week10-level10-project',
  'Week 10 Project — Document AI Pipeline',
  3,
  50,
  2,
  'project',
  'Build a complete document-to-report AI automation pipeline.',
  '## Week 10 Project 🎯

Build a **Document AI Pipeline** that processes feedback documents.

### Requirements

1. `clean_document(text)` — normalize whitespace
2. `simulate_ai_analyze(text)` — return `{"topic": "billing", "sentiment": "negative"}` if "refund" in text, else `{"topic": "general", "sentiment": "positive"}`
3. `generate_report(doc_id, analysis)` — return `"Doc [id]: [topic] | [sentiment]"`
4. Process 2 documents and print each report

### Test documents

- `"Doc1: I need a refund for my order"`
- `"Doc2: Great service, thank you"`

### Expected output contains

`Doc 1: billing | negative` and `Doc 2: general | positive`',
  'def clean_document(text):
    pass

def simulate_ai_analyze(text):
    pass

def generate_report(doc_id, analysis):
    pass

documents = [
    (1, "Doc1: I need a refund for my order"),
    (2, "Doc2: Great service, thank you"),
]

# Process all documents
',
  'def clean_document(text):
    return " ".join(text.split())

def simulate_ai_analyze(text):
    if "refund" in text.lower():
        return {"topic": "billing", "sentiment": "negative"}
    return {"topic": "general", "sentiment": "positive"}

def generate_report(doc_id, analysis):
    return f"Doc {doc_id}: {analysis[''topic'']} | {analysis[''sentiment'']}"

documents = [
    (1, "Doc1: I need a refund for my order"),
    (2, "Doc2: Great service, thank you"),
]

for doc_id, text in documents:
    cleaned = clean_document(text)
    analysis = simulate_ai_analyze(cleaned)
    print(generate_report(doc_id, analysis))',
  NULL,
  'contains',
  'billing | negative',
  ARRAY['Build each function separately and test.', 'Loop over documents tuple (id, text).', 'Check for ''refund'' to detect billing topic.']
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
  'week11-level1-agentic-intro',
  'Introduction to Agentic Automation',
  3,
  51,
  1,
  'concept',
  'Learn how AI agents choose tools and loop until a task is done.',
  '## Agentic Automation

An **agent** is a program that:
1. Receives a **goal**
2. **Chooses a tool** to make progress
3. **Observes** the result
4. **Repeats** until done

```
Goal → Think → Pick Tool → Execute → Check → (repeat or finish)
```

### Simulated agents

We simulate agents with Python functions and dicts — no real AI or network needed. The patterns you learn here apply directly to production agent frameworks.',
  '# Agent loop preview

def run_tool(name, args):
    tools = {"search": lambda q: f"Found: {q}", "done": lambda _: "Complete"}
    return tools.get(name, lambda _: "Unknown")(args)

goal = "Find Python tutorials"
step1 = run_tool("search", goal)
print(step1)
print("Agent ready ✓")',
  'def run_tool(name, args):
    tools = {"search": lambda q: f"Found: {q}", "done": lambda _: "Complete"}
    return tools.get(name, lambda _: "Unknown")(args)

goal = "Find Python tutorials"
step1 = run_tool("search", goal)
print(step1)
print("Agent ready ✓")',
  NULL,
  'contains',
  'Agent ready',
  ARRAY['Agents loop: pick tool → run → check goal.', 'Tools are just functions the agent can call.']
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
  'week11-level2-tool-registry',
  'Tool Registry Pattern',
  3,
  51,
  2,
  'run',
  'Register tools in a dictionary for agent access.',
  '## Tool Registry

Agents need a **registry** — a dict mapping tool names to functions:

```python
def tool_search(query):
    return {"results": [query + " result"]}

def tool_calculate(expr):
    return {"value": eval(expr)}  # simplified

TOOLS = {
    "search": tool_search,
    "calculate": tool_calculate,
}
```

The agent picks a name, looks it up, and calls the function.',
  'def tool_summarize(text):
    return {"summary": text[:20] + "..."}

def tool_count_words(text):
    return {"count": len(text.split())}

TOOLS = {
    "summarize": tool_summarize,
    "count_words": tool_count_words,
}

text = "Automation agents process tasks step by step"
result = TOOLS["count_words"](text)
print(f"Words: {result[''count'']}")',
  'def tool_summarize(text):
    return {"summary": text[:20] + "..."}

def tool_count_words(text):
    return {"count": len(text.split())}

TOOLS = {
    "summarize": tool_summarize,
    "count_words": tool_count_words,
}

text = "Automation agents process tasks step by step"
result = TOOLS["count_words"](text)
print(f"Words: {result[''count'']}")',
  NULL,
  'contains',
  'Words:',
  ARRAY['TOOLS is a dict of name → function.', 'Call TOOLS[''count_words''](text) to run a tool.']
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
  'week11-level3-tool-selection',
  'Tool Selection Pattern',
  3,
  52,
  1,
  'modify',
  'Implement logic that picks the right tool for a task.',
  '## Tool Selection

A simple **selector** maps task types to tools:

```python
def select_tool(task_type):
    mapping = {
        "search": "search",
        "math": "calculate",
        "finish": "done",
    }
    return mapping.get(task_type, "unknown")
```

In real agents, an LLM decides. Here we use rules to learn the pattern.',
  'def select_tool(goal):
    if "calculate" in goal.lower() or "sum" in goal.lower():
        return "calculate"
    if "search" in goal.lower() or "find" in goal.lower():
        return "search"
    return "done"

goals = ["Calculate sum of sales", "Find customer records", "All done"]

# Print selected tool for each goal
for goal in goals:
    tool = select_tool(goal)
    print(f"{goal} → {tool}")',
  'def select_tool(goal):
    if "calculate" in goal.lower() or "sum" in goal.lower():
        return "calculate"
    if "search" in goal.lower() or "find" in goal.lower():
        return "search"
    return "done"

goals = ["Calculate sum of sales", "Find customer records", "All done"]

for goal in goals:
    tool = select_tool(goal)
    print(f"{goal} → {tool}")',
  NULL,
  'contains',
  'calculate',
  ARRAY['Loop through goals and call select_tool.', 'Print goal and selected tool name.']
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
  'week11-level4-agent-loop',
  'Agent Loop Simulation',
  3,
  52,
  2,
  'exercise',
  'Simulate an agent that loops until the task is complete.',
  '## The Agent Loop

```python
def agent_loop(goal, max_steps=5):
    steps = 0
    state = {"goal": goal, "done": False}
    while not state["done"] and steps < max_steps:
        tool = select_tool(state)
        result = run_tool(tool, state)
        state = update_state(state, result)
        steps += 1
    return state
```

The loop continues until `done` is True or max steps reached.',
  'def agent_step(state):
    remaining = state["tasks"]
    if not remaining:
        return {"done": True, "tasks": [], "log": "All tasks complete"}
    current = remaining[0]
    return {"done": False, "tasks": remaining[1:], "log": f"Completed: {current}"}

def agent_loop(tasks, max_steps=10):
    state = {"done": False, "tasks": tasks, "log": ""}
    steps = 0
    while not state["done"] and steps < max_steps:
        state = agent_step(state)
        print(state["log"])
        steps += 1
    return state

task_list = ["email", "report", "backup"]
agent_loop(task_list)',
  'def agent_step(state):
    remaining = state["tasks"]
    if not remaining:
        return {"done": True, "tasks": [], "log": "All tasks complete"}
    current = remaining[0]
    return {"done": False, "tasks": remaining[1:], "log": f"Completed: {current}"}

def agent_loop(tasks, max_steps=10):
    state = {"done": False, "tasks": tasks, "log": ""}
    steps = 0
    while not state["done"] and steps < max_steps:
        state = agent_step(state)
        print(state["log"])
        steps += 1
    return state

task_list = ["email", "report", "backup"]
agent_loop(task_list)',
  NULL,
  'contains',
  'All tasks complete',
  ARRAY['The loop runs agent_step until done or max_steps.', 'Each step processes one task from the list.']
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
  'week11-level5-multi-step-agent',
  'Multi-Step Agent',
  3,
  53,
  1,
  'exercise',
  'Build an agent that uses different tools across multiple steps.',
  '## Multi-Step Agents

Each step may use a **different tool**:

```python
plan = [
    {"tool": "fetch", "args": "data.csv"},
    {"tool": "analyze", "args": None},
    {"tool": "report", "args": None},
]

for step in plan:
    result = TOOLS[step["tool"]](step["args"])
```

The agent follows a plan or decides dynamically each step.',
  'TOOLS = {
    "fetch": lambda _: {"data": [10, 20, 30]},
    "sum": lambda d: {"total": sum(d["data"])},
    "report": lambda r: {"message": f"Total: {r[''total'']}"},
}

plan = [
    {"tool": "fetch", "input": None},
    {"tool": "sum", "input": "prev"},
    {"tool": "report", "input": "prev"},
]

# Execute plan: each step uses previous result
result = None
for step in plan:
    inp = result if step["input"] == "prev" else step["input"]
    result = TOOLS[step["tool"]](inp)

print(result["message"])',
  'TOOLS = {
    "fetch": lambda _: {"data": [10, 20, 30]},
    "sum": lambda d: {"total": sum(d["data"])},
    "report": lambda r: {"message": f"Total: {r[''total'']}"},
}

plan = [
    {"tool": "fetch", "input": None},
    {"tool": "sum", "input": "prev"},
    {"tool": "report", "input": "prev"},
]

result = None
for step in plan:
    inp = result if step["input"] == "prev" else step["input"]
    result = TOOLS[step["tool"]](inp)

print(result["message"])',
  NULL,
  'contains',
  'Total: 60',
  ARRAY['Pass None to fetch, then pass previous result to sum and report.', 'The final message should show Total: 60.']
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
  'week11-level6-guardrails',
  'Output Guardrails',
  3,
  53,
  2,
  'exercise',
  'Validate agent output before accepting it.',
  '## Guardrails

**Guardrails** prevent bad agent output:

```python
def validate_output(result):
    if "error" in result:
        return False, "Agent returned an error"
    if result.get("confidence", 0) < 0.5:
        return False, "Low confidence"
    return True, "OK"
```

Always validate before acting on agent decisions.',
  'def validate_action(action):
    allowed = ["search", "summarize", "done"]
    if action not in allowed:
        return False, f"Blocked: {action} not allowed"
    return True, "Approved"

agent_actions = ["search", "delete_all", "summarize", "done"]

for action in agent_actions:
    ok, msg = validate_action(action)
    print(f"{action}: {msg}")',
  'def validate_action(action):
    allowed = ["search", "summarize", "done"]
    if action not in allowed:
        return False, f"Blocked: {action} not allowed"
    return True, "Approved"

agent_actions = ["search", "delete_all", "summarize", "done"]

for action in agent_actions:
    ok, msg = validate_action(action)
    print(f"{action}: {msg}")',
  NULL,
  'contains',
  'Blocked: delete_all',
  ARRAY['validate_action checks against an allowed list.', 'Blocked actions should print ''Blocked:''.']
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
  'week11-level7-max-iterations',
  'Max Iterations Guardrail',
  3,
  54,
  1,
  'exercise',
  'Limit agent loops to prevent infinite execution.',
  '## Max Iterations

Always cap agent loops:

```python
MAX_STEPS = 10

for step in range(MAX_STEPS):
    if task_complete(state):
        break
    state = agent_step(state)
else:
    print("Warning: max steps reached")
```

This prevents runaway agents from looping forever.',
  'MAX_STEPS = 5

def agent_tick(step):
    return {"step": step, "done": step >= 3}

state = {"step": 0, "done": False}

for i in range(MAX_STEPS):
    state = agent_tick(i)
    print(f"Step {i + 1}")
    if state["done"]:
        print("Goal reached ✓")
        break
else:
    print("Max steps reached ⚠")',
  'MAX_STEPS = 5

def agent_tick(step):
    return {"step": step, "done": step >= 3}

state = {"step": 0, "done": False}

for i in range(MAX_STEPS):
    state = agent_tick(i)
    print(f"Step {i + 1}")
    if state["done"]:
        print("Goal reached ✓")
        break
else:
    print("Max steps reached ⚠")',
  NULL,
  'contains',
  'Goal reached',
  ARRAY['The for-else runs else block only if loop wasn''t broken.', 'Agent finishes at step 4 (i=3).']
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
  'week11-level8-debug-agent',
  'Debug: Agent Loop',
  3,
  54,
  2,
  'debug',
  'Fix an agent loop that never terminates.',
  '## Debug Agent Loops

Common agent bugs:
- Never setting `done` to True
- Wrong condition in while loop
- Not incrementing step counter

Fix this agent so it prints `Finished in 3 steps`',
  'def run_agent():
    steps = 0
    done = False
    while not done:
        steps += 1
        if steps >= 3:
            done = True
        # Bug: steps never increments past first check properly
    return steps

total = run_agent()
print(f"Finished in {total} steps")',
  'def run_agent():
    steps = 0
    done = False
    while not done:
        steps += 1
        if steps >= 3:
            done = True
    return steps

total = run_agent()
print(f"Finished in {total} steps")',
  NULL,
  'contains',
  'Finished in 3 steps',
  ARRAY['steps += 1 must run each iteration.', 'Set done = True when steps reaches 3.']
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
  'week11-level9-quiz',
  'Week 11 Checkpoint',
  3,
  55,
  1,
  'quiz',
  'Quiz on tool selection and agent guardrails.',
  '## Checkpoint

Implement `safe_agent_run(action)`:
- If action is in `["read", "write", "done"]`, return `"Executed: [action]"`
- Otherwise return `"Blocked: [action]"`

Test with actions: `"read"`, `"shutdown"`, `"done"` and print each result.',
  'ALLOWED = ["read", "write", "done"]

def safe_agent_run(action):
    # Return Executed or Blocked message
    pass

for action in ["read", "shutdown", "done"]:
    print(safe_agent_run(action))',
  'ALLOWED = ["read", "write", "done"]

def safe_agent_run(action):
    if action in ALLOWED:
        return f"Executed: {action}"
    return f"Blocked: {action}"

for action in ["read", "shutdown", "done"]:
    print(safe_agent_run(action))',
  NULL,
  'contains',
  'Blocked: shutdown',
  ARRAY['Check if action in ALLOWED.', 'Return different strings for allowed vs blocked.']
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
  'week11-level10-project',
  'Week 11 Project — Task Automation Agent',
  3,
  55,
  2,
  'project',
  'Build a guarded agent that processes a task queue with tools.',
  '## Week 11 Project 🎯

Build a **Task Automation Agent** with tools and guardrails.

### Requirements

1. **TOOLS** dict with `"log"` (prints task) and `"done"` (marks complete)
2. `select_tool(task)` — returns `"log"` for normal tasks, `"done"` when task is `"finish"`
3. `validate(task)` — block tasks containing `"danger"`
4. `run_agent(tasks)` — loop through tasks, validate, select tool, execute (max 10 steps)
5. Print `"Agent complete"` at end

### Test queue

`["send email", "danger: delete db", "generate report", "finish"]`

### Expected

Blocked danger task, other tasks logged, ends with "Agent complete"',
  'TOOLS = {
    "log": lambda t: f"Logged: {t}",
    "done": lambda _: "Finishing",
}

def select_tool(task):
    pass

def validate(task):
    pass

def run_agent(tasks):
    pass

queue = ["send email", "danger: delete db", "generate report", "finish"]
run_agent(queue)',
  'TOOLS = {
    "log": lambda t: f"Logged: {t}",
    "done": lambda _: "Finishing",
}

def select_tool(task):
    if task == "finish":
        return "done"
    return "log"

def validate(task):
    if "danger" in task:
        return False
    return True

def run_agent(tasks):
    for i, task in enumerate(tasks):
        if i >= 10:
            break
        if not validate(task):
            print(f"Blocked: {task}")
            continue
        tool = select_tool(task)
        print(TOOLS[tool](task))
    print("Agent complete")

queue = ["send email", "danger: delete db", "generate report", "finish"]
run_agent(queue)',
  NULL,
  'contains',
  'Agent complete',
  ARRAY['validate blocks ''danger'' tasks.', 'select_tool returns ''done'' only for ''finish''.', 'Cap loop at 10 iterations.']
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
  'week12-level1-capstone-intro',
  'Capstone Project Overview',
  3,
  56,
  1,
  'concept',
  'Plan your final capstone: an AI Feedback Analyzer.',
  '## Week 12 Capstone

You''ve learned pipelines, simulated AI, and agent patterns. Now combine them into a **real project**.

### AI Feedback Analyzer

A tool that:
1. Accepts customer feedback (strings)
2. Classifies sentiment (simulated AI)
3. Extracts topics and priorities
4. Generates a summary report

### Project structure

```
helpers/     → utility functions
analyzer/    → core logic
tests/       → validation checks
main         → orchestration
```

We simulate this structure with functions in one script — the same organization applies to larger projects.',
  '# Capstone preview — feedback analyzer skeleton

def analyze_feedback(text):
    sentiment = "positive" if "great" in text.lower() else "negative"
    return {"text": text, "sentiment": sentiment}

feedback = "The app is great but slow sometimes"
result = analyze_feedback(feedback)
print(f"Sentiment: {result[''sentiment'']}")
print("Capstone project begins ✓")',
  'def analyze_feedback(text):
    sentiment = "positive" if "great" in text.lower() else "negative"
    return {"text": text, "sentiment": sentiment}

feedback = "The app is great but slow sometimes"
result = analyze_feedback(feedback)
print(f"Sentiment: {result[''sentiment'']}")
print("Capstone project begins ✓")',
  NULL,
  'contains',
  'Capstone project begins',
  ARRAY['The capstone combines pipelines, AI simulation, and reporting.', 'Run the preview to see basic sentiment detection.']
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
  'week12-level2-testing-concepts',
  'Testing Concepts',
  3,
  56,
  2,
  'run',
  'Use assert statements to verify function behavior.',
  '## Testing with assert

Before shipping automation, **verify it works**:

```python
def add(a, b):
    return a + b

assert add(2, 3) == 5, "add failed"
assert add(-1, 1) == 0, "add failed"
print("All tests passed ✓")
```

`assert` stops execution if the condition is False — catching bugs early.',
  'def classify_sentiment(text):
    if "love" in text.lower() or "great" in text.lower():
        return "positive"
    if "hate" in text.lower() or "terrible" in text.lower():
        return "negative"
    return "neutral"

# Tests
assert classify_sentiment("I love this") == "positive"
assert classify_sentiment("This is terrible") == "negative"
assert classify_sentiment("It works") == "neutral"
print("All tests passed ✓")',
  'def classify_sentiment(text):
    if "love" in text.lower() or "great" in text.lower():
        return "positive"
    if "hate" in text.lower() or "terrible" in text.lower():
        return "negative"
    return "neutral"

assert classify_sentiment("I love this") == "positive"
assert classify_sentiment("This is terrible") == "negative"
assert classify_sentiment("It works") == "neutral"
print("All tests passed ✓")',
  NULL,
  'contains',
  'All tests passed',
  ARRAY['assert condition, ''message'' fails if condition is False.', 'Run to verify all three test cases pass.']
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
  'week12-level3-project-structure',
  'Project Structure',
  3,
  57,
  1,
  'modify',
  'Organize code into logical modules using functions.',
  '## Project Structure

Split code by **responsibility**:

| Module | Role |
|--------|------|
| `clean()` | Data prep |
| `analyze()` | Core logic |
| `report()` | Output formatting |

```python
def clean(text): ...
def analyze(text): ...
def report(data): ...

def main():
    data = clean(raw)
    result = analyze(data)
    print(report(result))
```

### Your task

Fill in `main()` to run the full pipeline.',
  'def clean(text):
    return text.strip()

def analyze(text):
    return {"words": len(text.split()), "chars": len(text)}

def report(data):
    return f"Analysis: {data[''words'']} words, {data[''chars'']} chars"

def main():
    raw = "  Hello automation world  "
    # Run clean → analyze → report and print
    pass

main()',
  'def clean(text):
    return text.strip()

def analyze(text):
    return {"words": len(text.split()), "chars": len(text)}

def report(data):
    return f"Analysis: {data[''words'']} words, {data[''chars'']} chars"

def main():
    raw = "  Hello automation world  "
    cleaned = clean(raw)
    data = analyze(cleaned)
    print(report(data))

main()',
  NULL,
  'contains',
  '3 words',
  ARRAY['Chain: cleaned = clean(raw), data = analyze(cleaned), print(report(data)).', 'main() orchestrates the pipeline.']
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
  'week12-level4-unit-tests',
  'Unit Test Simulation',
  3,
  57,
  2,
  'exercise',
  'Write a test runner that validates multiple functions.',
  '## Test Runner Pattern

```python
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
```

A simple test runner helps validate your capstone before submission.',
  'def extract_topic(text):
    topics = {"billing": "refund", "support": "help", "product": "feature"}
    for topic, keyword in topics.items():
        if keyword in text.lower():
            return topic
    return "general"

def run_tests():
    tests = [
        ("billing", lambda: extract_topic("I want a refund") == "billing"),
        ("support", lambda: extract_topic("I need help") == "support"),
        ("general", lambda: extract_topic("Hello") == "general"),
    ]
    passed = sum(1 for _, t in tests if t())
    return passed, len(tests) - passed

p, f = run_tests()
print(f"Passed: {p}, Failed: {f}")',
  'def extract_topic(text):
    topics = {"billing": "refund", "support": "help", "product": "feature"}
    for topic, keyword in topics.items():
        if keyword in text.lower():
            return topic
    return "general"

def run_tests():
    tests = [
        ("billing", lambda: extract_topic("I want a refund") == "billing"),
        ("support", lambda: extract_topic("I need help") == "support"),
        ("general", lambda: extract_topic("Hello") == "general"),
    ]
    passed = sum(1 for _, t in tests if t())
    return passed, len(tests) - passed

p, f = run_tests()
print(f"Passed: {p}, Failed: {f}")',
  NULL,
  'contains',
  'Passed: 3',
  ARRAY['Each lambda returns True if the test passes.', 'All three tests should pass.']
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
  'week12-level5-analyzer-helper',
  'Analyzer Helper Functions',
  3,
  58,
  1,
  'exercise',
  'Build helper functions for the feedback analyzer.',
  '## Helper Functions

Break the analyzer into small, testable pieces:

```python
def normalize_feedback(text):
    return " ".join(text.split()).lower()

def word_count(text):
    return len(text.split())
```

Helpers make the capstone easier to build and test.',
  'def normalize_feedback(text):
    return " ".join(text.split()).lower()

def detect_urgency(text):
    urgent_words = ["urgent", "asap", "immediately"]
    return any(w in text.lower() for w in urgent_words)

def analyze_entry(text):
    normalized = normalize_feedback(text)
    return {
        "text": normalized,
        "urgent": detect_urgency(normalized),
        "length": len(normalized),
    }

entry = analyze_entry("  URGENT: Need help ASAP  ")
print(f"Urgent: {entry[''urgent'']}, Length: {entry[''length'']}")',
  'def normalize_feedback(text):
    return " ".join(text.split()).lower()

def detect_urgency(text):
    urgent_words = ["urgent", "asap", "immediately"]
    return any(w in text.lower() for w in urgent_words)

def analyze_entry(text):
    normalized = normalize_feedback(text)
    return {
        "text": normalized,
        "urgent": detect_urgency(normalized),
        "length": len(normalized),
    }

entry = analyze_entry("  URGENT: Need help ASAP  ")
print(f"Urgent: {entry[''urgent'']}, Length: {entry[''length'']}")',
  NULL,
  'contains',
  'Urgent: True',
  ARRAY['normalize_feedback strips extra spaces.', 'detect_urgency checks for urgent keywords.']
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
  'week12-level6-sentiment-simulation',
  'Simulated Sentiment Analysis',
  3,
  58,
  2,
  'exercise',
  'Simulate AI sentiment classification for feedback entries.',
  '## Simulated Sentiment AI

```python
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
```

Word-based scoring simulates what a real AI model does.',
  'def simulate_sentiment_ai(text):
    positive = ["great", "love", "excellent", "thank"]
    negative = ["bad", "hate", "slow", "broken"]
    score = 0
    for w in positive:
        if w in text.lower():
            score += 1
    for w in negative:
        if w in text.lower():
            score -= 1
    if score > 0:
        return {"sentiment": "positive", "score": score}
    if score < 0:
        return {"sentiment": "negative", "score": score}
    return {"sentiment": "neutral", "score": 0}

entries = ["Great product, thank you!", "App is slow and broken"]
for e in entries:
    r = simulate_sentiment_ai(e)
    print(f"{r[''sentiment'']} ({r[''score'']})")',
  'def simulate_sentiment_ai(text):
    positive = ["great", "love", "excellent", "thank"]
    negative = ["bad", "hate", "slow", "broken"]
    score = 0
    for w in positive:
        if w in text.lower():
            score += 1
    for w in negative:
        if w in text.lower():
            score -= 1
    if score > 0:
        return {"sentiment": "positive", "score": score}
    if score < 0:
        return {"sentiment": "negative", "score": score}
    return {"sentiment": "neutral", "score": 0}

entries = ["Great product, thank you!", "App is slow and broken"]
for e in entries:
    r = simulate_sentiment_ai(e)
    print(f"{r[''sentiment'']} ({r[''score'']})")',
  NULL,
  'contains',
  'negative',
  ARRAY['Positive words increase score, negative decrease.', 'Second entry should classify as negative.']
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
  'week12-level7-aggregate-stats',
  'Aggregate Feedback Stats',
  3,
  59,
  1,
  'exercise',
  'Compute summary statistics from analyzed feedback.',
  '## Aggregation

After analyzing each entry, **aggregate** results:

```python
def aggregate(analyses):
    return {
        "total": len(analyses),
        "positive": sum(1 for a in analyses if a["sentiment"] == "positive"),
        "negative": sum(1 for a in analyses if a["sentiment"] == "negative"),
    }
```

Reports need totals, averages, and breakdowns.',
  'def aggregate(analyses):
    stats = {"total": len(analyses), "positive": 0, "negative": 0, "neutral": 0}
    for a in analyses:
        stats[a["sentiment"]] += 1
    return stats

def format_summary(stats):
    return f"Total: {stats[''total'']} | +{stats[''positive'']} -{stats[''negative'']} ~{stats[''neutral'']}"

analyses = [
    {"sentiment": "positive"},
    {"sentiment": "negative"},
    {"sentiment": "positive"},
    {"sentiment": "neutral"},
]
print(format_summary(aggregate(analyses)))',
  'def aggregate(analyses):
    stats = {"total": len(analyses), "positive": 0, "negative": 0, "neutral": 0}
    for a in analyses:
        stats[a["sentiment"]] += 1
    return stats

def format_summary(stats):
    return f"Total: {stats[''total'']} | +{stats[''positive'']} -{stats[''negative'']} ~{stats[''neutral'']}"

analyses = [
    {"sentiment": "positive"},
    {"sentiment": "negative"},
    {"sentiment": "positive"},
    {"sentiment": "neutral"},
]
print(format_summary(aggregate(analyses)))',
  NULL,
  'contains',
  'Total: 4',
  ARRAY['aggregate counts each sentiment type.', 'format_summary builds the display string.']
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
  'week12-level8-debug-capstone',
  'Debug: Capstone Logic',
  3,
  59,
  2,
  'debug',
  'Fix a bug in the feedback analyzer aggregation.',
  '## Debug the Analyzer

Common capstone bugs:
- Off-by-one in counters
- Wrong dict key access
- Forgetting to handle empty input

Fix this code to print `Average score: 2.5`',
  'def average_score(scores):
    if not scores:
        return 0
    total = 0
    for s in scores:
        total += s
    # Bug: dividing by wrong value
    return total / len(scores) - 1

scores = [3, 2, 4, 1]
print(f"Average score: {average_score(scores)}")',
  'def average_score(scores):
    if not scores:
        return 0
    total = 0
    for s in scores:
        total += s
    return total / len(scores)

scores = [3, 2, 4, 1]
print(f"Average score: {average_score(scores)}")',
  NULL,
  'contains',
  'Average score: 2.5',
  ARRAY['Average = total / len(scores).', 'Remove the erroneous - 1.']
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
  'week12-level9-quiz',
  'Week 12 Checkpoint',
  3,
  60,
  1,
  'quiz',
  'Quiz before the final capstone project.',
  '## Checkpoint

Write `build_feedback_report(feedback_list)` that:
1. Counts total entries
2. Returns `"Feedback Report: [n] entries analyzed"`

Test with a list of 3 feedback strings.',
  'def build_feedback_report(feedback_list):
    # Return formatted report string
    pass

feedback = ["Great app", "Needs improvement", "Love the design"]
print(build_feedback_report(feedback))',
  'def build_feedback_report(feedback_list):
    count = len(feedback_list)
    return f"Feedback Report: {count} entries analyzed"

feedback = ["Great app", "Needs improvement", "Love the design"]
print(build_feedback_report(feedback))',
  NULL,
  'contains',
  '3 entries analyzed',
  ARRAY['Use len(feedback_list) for count.', 'Return an f-string with the count.']
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
  'week12-level10-project',
  'Week 12 Capstone — AI Feedback Analyzer',
  3,
  60,
  2,
  'project',
  'Build the complete AI Feedback Analyzer capstone project.',
  '## Week 12 Capstone 🎯

Build the **AI Feedback Analyzer** — your final project!

### Requirements

1. `normalize(text)` — clean whitespace, lowercase
2. `simulate_ai_analyze(text)` — return `{"sentiment": "positive"|"negative"|"neutral", "topic": "billing"|"support"|"general"}`
   - "refund"/"billing" → topic billing
   - "help"/"support" → topic support
   - "great"/"love" → positive; "bad"/"hate" → negative
3. `process_batch(feedback_list)` — analyze all, return list of results
4. `generate_report(results)` — print summary with totals per sentiment
5. Run on 4 sample feedback entries

### Sample data

```python
feedback = [
    "Great product, love it!",
    "Need help with my account",
    "I want a refund please",
    "The UI is bad and confusing",
]
```

### Expected output contains

`FEEDBACK ANALYZER REPORT`, sentiment counts, and `Analysis complete ✓`',
  'def normalize(text):
    pass

def simulate_ai_analyze(text):
    pass

def process_batch(feedback_list):
    pass

def generate_report(results):
    pass

feedback = [
    "Great product, love it!",
    "Need help with my account",
    "I want a refund please",
    "The UI is bad and confusing",
]

# Run the full analyzer
',
  'def normalize(text):
    return " ".join(text.split()).lower()

def simulate_ai_analyze(text):
    t = text.lower()
    if "refund" in t or "billing" in t:
        topic = "billing"
    elif "help" in t or "support" in t:
        topic = "support"
    else:
        topic = "general"
    if any(w in t for w in ["great", "love", "excellent"]):
        sentiment = "positive"
    elif any(w in t for w in ["bad", "hate", "terrible"]):
        sentiment = "negative"
    else:
        sentiment = "neutral"
    return {"sentiment": sentiment, "topic": topic}

def process_batch(feedback_list):
    results = []
    for fb in feedback_list:
        cleaned = normalize(fb)
        analysis = simulate_ai_analyze(cleaned)
        results.append({"original": fb, **analysis})
    return results

def generate_report(results):
    print("=== FEEDBACK ANALYZER REPORT ===")
    stats = {"positive": 0, "negative": 0, "neutral": 0}
    for r in results:
        stats[r["sentiment"]] += 1
        print(f"  [{r[''topic'']}] {r[''sentiment'']}: {r[''original''][:30]}")
    print(f"---\nPositive: {stats[''positive'']} | Negative: {stats[''negative'']} | Neutral: {stats[''neutral'']}")
    print("Analysis complete ✓")

feedback = [
    "Great product, love it!",
    "Need help with my account",
    "I want a refund please",
    "The UI is bad and confusing",
]

results = process_batch(feedback)
generate_report(results)',
  NULL,
  'contains',
  'FEEDBACK ANALYZER REPORT',
  ARRAY['Build normalize and simulate_ai_analyze first, test each.', 'process_batch loops and collects results.', 'generate_report counts sentiments and prints each entry.']
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  lesson_content = EXCLUDED.lesson_content,
  starter_code = EXCLUDED.starter_code,
  solution_code = EXCLUDED.solution_code,
  expected_output = EXCLUDED.expected_output,
  validation_type = EXCLUDED.validation_type,
  validation_pattern = EXCLUDED.validation_pattern,
  hints = EXCLUDED.hints;