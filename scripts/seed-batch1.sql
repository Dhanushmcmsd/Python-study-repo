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

Python is a **programming language** — a way to give step-by-step instructions to a computer.

Think of it like writing a recipe:
1. Gather ingredients (data)
2. Follow steps (code)
3. Get a result (output)

### Why Python for automation?

- **Readable** — looks almost like English
- **Powerful** — used by Google, Netflix, NASA
- **Perfect for beginners** — you can see results immediately

### Your learning path

Each day has **10 levels**. You will:
- Read a short lesson
- Run live code examples
- Complete hands-on exercises
- Track your progress

> No prior coding experience needed. Take your time on each level.',
  '# Welcome! This is a comment — Python ignores it.
# Click "Run code" to see what happens below.

print("Welcome to Python Automation!")
print("You are on Level 1 — great start!")',
  'print("Welcome to Python Automation!")
print("You are on Level 1 — great start!")',
  'Welcome to Python Automation!
You are on Level 1 — great start!',
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
  1,
  3,
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
  'Variables — Storing Data',
  1,
  1,
  4,
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
- No spaces in names — use underscores

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
  1,
  5,
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
  1,
  6,
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
  1,
  7,
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
  1,
  8,
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
  1,
  9,
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
  'Day 1 Project — Personal Intro',
  1,
  1,
  10,
  'project',
  'Build a personal introduction script.',
  '## Day 1 Project 🎯

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
  '# Day 1 Project — Personal Introduction

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
