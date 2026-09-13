import type { Level } from "../types";

export const RAW_WEEK1_3_LEVELS: Level[] = [
  // â”€â”€ DAY 1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "day1-level1-welcome",
    title: "Welcome to Python",
    phase: 1,
    day: 1,
    index_in_day: 1,
    level_type: "concept",
    summary: "Understand what Python is and why it powers automation.",
    lesson_content: `## What is Python?

Python is a **programming language**  -  a way to give step-by-step instructions to a computer.

Think of it like writing a recipe:
1. Gather ingredients (data)
2. Follow steps (code)
3. Get a result (output)

### Why Python for automation?

- **Readable**  -  looks almost like English
- **Powerful**  -  used by Google, Netflix, NASA
- **Perfect for beginners**  -  you can see results immediately

### Your learning path

Each day has **10 levels**. You will:
- Read a short lesson
- Run live code examples
- Complete hands-on exercises
- Track your progress

> No prior coding experience needed. Take your time on each level.`,
    starter_code: `# Welcome! This is a comment  -  Python ignores it.\n# Click "Run code" to see what happens below.\n\nprint("Welcome to Python Automation!")\nprint("You are on Level 1  -  great start!")`,
    solution_code: `print("Welcome to Python Automation!")\nprint("You are on Level 1  -  great start!")`,
    expected_output: "Welcome to Python Automation!\nYou are on Level 1  -  great start!",
    validation_type: "contains",
    validation_pattern: "Welcome to Python",
    hints: ["Click the green Run button to execute your code.", "Comments start with # and are ignored by Python."],
  },
  {
    slug: "day1-level2-hello",
    title: "Your First Print",
    phase: 1,
    day: 1,
    index_in_day: 2,
    level_type: "run",
    summary: "Use print() to display text on screen.",
    lesson_content: `## The print() function

\`print()\` is the most common Python command. It **shows text on screen**.

\`\`\`python
print("Hello, World!")
\`\`\`

### Rules to remember

- Text goes inside **quotes** ("like this" or 'like this')
- Parentheses \`()\` are required
- Python runs top to bottom, one line at a time

**Try it:** Run the code, then change the message to your name!`,
    starter_code: `print("Hello, World!")\nprint("I am learning Python today.")`,
    solution_code: `print("Hello, World!")\nprint("I am learning Python today.")`,
    expected_output: "Hello, World!\nI am learning Python today.",
    validation_type: "contains",
    validation_pattern: "Hello",
    hints: ["Make sure your text is inside quotes.", "Each print() shows on its own line."],
  },
  {
    slug: "day1-level3-comments",
    title: "Comments & Clean Code",
    phase: 1,
    day: 1,
    index_in_day: 3,
    level_type: "modify",
    summary: "Add comments to explain your code.",
    lesson_content: `## Comments

Comments help **you and others** understand code. Python ignores them completely.

\`\`\`python
# This is a comment
print("This runs")  # This comment is on the same line
\`\`\`

### Your task

Add a comment above each \`print()\` line explaining what it does.`,
    starter_code: `print("Step 1: Open your editor")\nprint("Step 2: Write Python code")\nprint("Step 3: Run and celebrate!")`,
    solution_code: `# Step 1\nprint("Step 1: Open your editor")\n# Step 2\nprint("Step 2: Write Python code")\n# Step 3\nprint("Step 3: Run and celebrate!")`,
    expected_output: "Step 1: Open your editor\nStep 2: Write Python code\nStep 3: Run and celebrate!",
    validation_type: "contains",
    validation_pattern: "Step 3",
    hints: ["Start a comment with the # symbol.", "Comments can be on their own line or after code."],
  },
  {
    slug: "day1-level4-variables",
    title: "Variables  -  Storing Data",
    phase: 1,
    day: 1,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Store information in named containers called variables.",
    lesson_content: `## Variables

A **variable** is a named box that stores a value.

\`\`\`python
name = "Alex"
age = 25
\`\`\`

- Use \`=\` to assign a value
- Variable names should be descriptive (use \`user_name\`, not \`x\`)
- No spaces in names  -  use underscores

### Your task

Create variables for your name, age, and city. Print all three.`,
    starter_code: `# Create your variables below\nname = \nage = \ncity = \n\n# Print them\nprint(name)\nprint(age)\nprint(city)`,
    solution_code: `name = "Alex"\nage = 28\ncity = "Mumbai"\nprint(name)\nprint(age)\nprint(city)`,
    validation_type: "contains",
    validation_pattern: "print",
    hints: ["Text values need quotes: name = \"Your Name\"", "Numbers don't need quotes: age = 30"],
  },
  {
    slug: "day1-level5-numbers",
    title: "Numbers & Math",
    phase: 1,
    day: 1,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Perform calculations with Python.",
    lesson_content: `## Numbers in Python

Python can do math instantly:

| Operator | Meaning   | Example    |
|----------|-----------|------------|
| \`+\`      | Add       | \`5 + 3 = 8\`  |
| \`-\`      | Subtract  | \`10 - 4 = 6\` |
| \`*\`      | Multiply  | \`6 * 7 = 42\` |
| \`/\`      | Divide    | \`20 / 4 = 5\` |

\`\`\`python
price = 100
tax = price * 0.18
total = price + tax
print(total)
\`\`\`

### Your task

Calculate the total cost of 3 items priced at 250, 180, and 95. Print the total.`,
    starter_code: `item1 = 250\nitem2 = 180\nitem3 = 95\n\n# Calculate and print the total\ntotal = \nprint(total)`,
    solution_code: `item1 = 250\nitem2 = 180\nitem3 = 95\ntotal = item1 + item2 + item3\nprint(total)`,
    expected_output: "525",
    validation_type: "output",
    validation_pattern: "525",
    hints: ["Add all three variables together.", "Use + to add numbers."],
  },
  {
    slug: "day1-level6-strings",
    title: "Working with Text",
    phase: 1,
    day: 1,
    index_in_day: 6,
    level_type: "exercise",
    summary: "Combine and format text strings.",
    lesson_content: `## Strings

Strings are text values in quotes.

### Combining strings

\`\`\`python
first = "Hello"
second = "Python"
message = first +  - + second
print(message)  # Hello Python
\`\`\`

### f-strings (modern way)

\`\`\`python
name = "Sam"
print(f"Welcome, {name}!")
\`\`\`

### Your task

Create a greeting that says: \`Hello, my name is [name] and I live in [city].\``,
    starter_code: `name = "Priya"\ncity = "Delhi"\n\n# Use an f-string to create your greeting\ngreeting = f - \nprint(greeting)`,
    solution_code: `name = "Priya"\ncity = "Delhi"\ngreeting = f"Hello, my name is {name} and I live in {city}."\nprint(greeting)`,
    validation_type: "contains",
    validation_pattern: "Hello, my name is",
    hints: ['Use f"text {variable} more text" format.', "Curly braces {} insert variable values."],
  },
  {
    slug: "day1-level7-input-sim",
    title: "Getting User Input",
    phase: 1,
    day: 1,
    index_in_day: 7,
    level_type: "modify",
    summary: "Simulate user input with variables.",
    lesson_content: `## Input (simulated)

In real programs, \`input()\` asks the user for data. In this playground, we simulate it with variables.

\`\`\`python
user_name = "Jordan"  # Simulating: input("Your name? ")
print(f"Nice to meet you, {user_name}!")
\`\`\`

### Your task

Change the simulated inputs to your own name and favorite hobby. Print a friendly message.`,
    starter_code: `user_name = "Student"\nhobby = "reading"\n\nprint(f"Hi {user_name}! I heard you love {hobby}.")`,
    solution_code: `user_name = "Alex"\nhobby = "coding"\nprint(f"Hi {user_name}! I heard you love {hobby}.")`,
    validation_type: "contains",
    validation_pattern: "Hi",
    hints: ["Change the values of user_name and hobby.", "Keep the f-string format the same."],
  },
  {
    slug: "day1-level8-debug",
    title: "Debug Challenge",
    phase: 1,
    day: 1,
    index_in_day: 8,
    level_type: "debug",
    summary: "Find and fix errors in broken code.",
    lesson_content: `## Debugging

**Bugs** are mistakes in code. Reading error messages helps you fix them.

Common mistakes:
- Missing quotes around text
- Wrong capitalization (\`Print\` vs \`print\`)
- Missing parentheses

### Your task

This code has **3 bugs**. Fix them so it prints:
\`\`\`
Python is fun!
I am a developer.
\`\`\``,
    starter_code: `Print("Python is fun!")\nprint(I am a developer.)`,
    solution_code: `print("Python is fun!")\nprint("I am a developer.")`,
    expected_output: "Python is fun!\nI am a developer.",
    validation_type: "output",
    validation_pattern: "Python is fun!\nI am a developer.",
    hints: ["Python is lowercase: print not Print.", "Text needs quotes on both sides.", "Check the second print line carefully."],
  },
  {
    slug: "day1-level9-quiz",
    title: "Checkpoint Quiz",
    phase: 1,
    day: 1,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Predict the output and write code from memory.",
    lesson_content: `## Day 1 Checkpoint

Before the project, let's verify your skills.

### Quick review

1. \`print()\` displays output
2. Variables store data with \`=\`
3. f-strings format text: \`f"Hello {name}"\`
4. \`#\` creates comments

### Your task

Write code that:
1. Creates a variable \`language\` set to \`"Python"\`
2. Creates a variable \`rating\` set to \`5\`
3. Prints: \`Python gets 5 stars!\``,
    starter_code: `# Write your solution here\n`,
    solution_code: `language = "Python"\nrating = 5\nprint(f"{language} gets {rating} stars!")`,
    validation_type: "contains",
    validation_pattern: "stars",
    hints: ["Use an f-string for the final print.", 'language = "Python" with quotes.'],
  },
  {
    slug: "day1-level10-project",
    title: "Day 1 Project  -  Personal Intro",
    phase: 1,
    day: 1,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a personal introduction script.",
    lesson_content: `## Day 1 Project ðŸŽ¯

Combine everything you learned today!

### Requirements

Create a script that prints a personal introduction with:
- Your name
- Your city
- One goal for learning Python
- A calculated "days until goal" (use a variable set to 90)

### Example output

\`\`\`
=== My Python Journey ===
Name: Alex
City: Mumbai
Goal: Automate my daily reports
Days to achieve: 90
Let's go!
\`\`\`

This is your first real mini-program. Take pride in it!`,
    starter_code: `# Day 1 Project  -  Personal Introduction\n\nname = "Your Name"\ncity = "Your City"\ngoal = "Your goal here"\ndays = 90\n\n# Print your introduction below\n`,
    solution_code: `name = "Alex"\ncity = "Mumbai"\ngoal = "Automate my daily reports"\ndays = 90\n\nprint("=== My Python Journey ===")\nprint(f"Name: {name}")\nprint(f"City: {city}")\nprint(f"Goal: {goal}")\nprint(f"Days to achieve: {days}")\nprint("Let's go!")`,
    validation_type: "contains",
    validation_pattern: "My Python Journey",
    hints: ["Use multiple print() statements.", "Use f-strings for lines with variables.", "Include the header line exactly."],
  },

  // â”€â”€ DAY 2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "day2-level1-booleans",
    title: "True & False",
    phase: 1,
    day: 2,
    index_in_day: 1,
    level_type: "concept",
    summary: "Learn boolean values  -  the foundation of decisions.",
    lesson_content: `## Booleans

Programs often need to answer yes/no questions. Python uses:
- \`True\`  -  yes
- \`False\`  -  no

\`\`\`python
is_logged_in = True
has_permission = False
print(is_logged_in)
\`\`\`

Comparisons return booleans:
\`\`\`python
print(5 > 3)   # True
print(10 == 10) # True (== means "equals")
print(4 != 4)   # False (!= means "not equal")
\`\`\``,
    starter_code: `print(5 > 3)\nprint(10 == 10)\nprint(2 + 2 == 5)\nprint("Python" == "python")`,
    solution_code: `print(5 > 3)\nprint(10 == 10)\nprint(2 + 2 == 5)\nprint("Python" == "python")`,
    validation_type: "contains",
    validation_pattern: "True",
    hints: ["Run the code first to see the results.", "== checks equality, = assigns values."],
  },
  {
    slug: "day2-level2-if",
    title: "If Statements",
    phase: 1,
    day: 2,
    index_in_day: 2,
    level_type: "run",
    summary: "Make code run only when a condition is true.",
    lesson_content: `## if statements

Run code **only when a condition is true**:

\`\`\`python
temperature = 35
if temperature > 30:
    print("It's hot outside!")
\`\`\`

**Important:** The line after \`if\` must be **indented** (4 spaces).

### Your task

Run the code, then change the temperature to trigger the message.`,
    starter_code: `temperature = 25\n\nif temperature > 30:\n    print("It's hot outside!")\nelse:\n    print("Nice weather today.")`,
    solution_code: `temperature = 35\n\nif temperature > 30:\n    print("It's hot outside!")\nelse:\n    print("Nice weather today.")`,
    validation_type: "contains",
    validation_pattern: "hot",
    hints: ["Change temperature to 35 to see the hot message.", "Indentation matters in Python!"],
  },
  {
    slug: "day2-level3-elif",
    title: "elif & else",
    phase: 1,
    day: 2,
    index_in_day: 3,
    level_type: "modify",
    summary: "Handle multiple conditions with elif.",
    lesson_content: `## elif and else

\`\`\`python
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")
\`\`\`

- \`elif\` = "else if"  -  check another condition
- \`else\` = catch-all when nothing else matched

### Your task

Add an \`elif\` for grade C (score >= 70) and D (score >= 60).`,
    starter_code: `score = 75\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\n# Add elif for C and D below\nelse:\n    print("Grade: F")`,
    solution_code: `score = 75\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelif score >= 70:\n    print("Grade: C")\nelif score >= 60:\n    print("Grade: D")\nelse:\n    print("Grade: F")`,
    validation_type: "contains",
    validation_pattern: "Grade: C",
    hints: ["Add elif score >= 70: before the else.", "Check conditions from highest to lowest."],
  },
  {
    slug: "day2-level4-comparisons",
    title: "Comparison Practice",
    phase: 1,
    day: 2,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Write conditions for real-world scenarios.",
    lesson_content: `## Real-world conditions

\`\`\`python
age = 20
if age >= 18:
    print("You can vote.")
\`\`\`

### Your task

Given a \`balance\` variable, print:
- "Sufficient funds" if balance >= 100
- "Low balance" if balance >= 10 but less than 100
- "Critical: add funds" otherwise`,
    starter_code: `balance = 50\n\n# Write your if/elif/else here\n`,
    solution_code: `balance = 50\n\nif balance >= 100:\n    print("Sufficient funds")\nelif balance >= 10:\n    print("Low balance")\nelse:\n    print("Critical: add funds")`,
    validation_type: "contains",
    validation_pattern: "Low balance",
    hints: ["Start with the highest threshold.", "Use elif for the middle case."],
  },
  {
    slug: "day2-level5-while",
    title: "While Loops",
    phase: 1,
    day: 2,
    index_in_day: 5,
    level_type: "run",
    summary: "Repeat code while a condition is true.",
    lesson_content: `## while loops

Repeat code until a condition becomes false:

\`\`\`python
count = 1
while count <= 3:
    print(f"Count: {count}")
    count = count + 1
\`\`\`

**Watch out for infinite loops!** Always make sure the condition eventually becomes false.`,
    starter_code: `count = 1\nwhile count <= 5:\n    print(f"Learning step {count}")\n    count = count + 1\nprint("Done!")`,
    solution_code: `count = 1\nwhile count <= 5:\n    print(f"Learning step {count}")\n    count = count + 1\nprint("Done!")`,
    validation_type: "contains",
    validation_pattern: "Learning step 5",
    hints: ["The loop runs while count <= 5.", "count = count + 1 increases the counter."],
  },
  {
    slug: "day2-level6-for",
    title: "For Loops",
    phase: 1,
    day: 2,
    index_in_day: 6,
    level_type: "exercise",
    summary: "Loop through a sequence of items.",
    lesson_content: `## for loops

Loop through each item in a sequence:

\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\`

You can also loop through a range of numbers:
\`\`\`python
for i in range(1, 4):
    print(i)  # 1, 2, 3
\`\`\`

### Your task

Print each task in the list with its number (1. Send email, 2. Update report, etc.)`,
    starter_code: `tasks = ["Send email", "Update report", "Backup files"]\n\n# Loop and print numbered tasks\n`,
    solution_code: `tasks = ["Send email", "Update report", "Backup files"]\n\nfor i, task in enumerate(tasks, 1):\n    print(f"{i}. {task}")`,
    validation_type: "contains",
    validation_pattern: "1. Send email",
    hints: ["Use enumerate(tasks, 1) to get index and item.", "Or use range(len(tasks)) with manual indexing."],
  },
  {
    slug: "day2-level7-lists",
    title: "Lists Basics",
    phase: 1,
    day: 2,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Store multiple values in a list.",
    lesson_content: `## Lists

A **list** holds multiple values in order:

\`\`\`python
colors = ["red", "green", "blue"]
print(colors[0])  # red (index starts at 0)
print(len(colors))  # 3
\`\`\`

### Useful operations

\`\`\`python
colors.append("yellow")  # add to end
colors.remove("red")     # remove item
\`\`\`

### Your task

Create a list of 3 expenses, print the total using a loop.`,
    starter_code: `expenses = [1200, 450, 89]\n\n# Calculate total using a for loop\ntotal = 0\n\nprint(f"Total expenses: {total}")`,
    solution_code: `expenses = [1200, 450, 89]\ntotal = 0\nfor expense in expenses:\n    total = total + expense\nprint(f"Total expenses: {total}")`,
    validation_type: "contains",
    validation_pattern: "1739",
    hints: ["Start total at 0.", "Add each expense inside the loop."],
  },
  {
    slug: "day2-level8-debug",
    title: "Debug: Loop Errors",
    phase: 1,
    day: 2,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix indentation and loop bugs.",
    lesson_content: `## Debug: Loops

Common loop bugs:
- Wrong indentation
- Forgetting to update the counter in while loops
- Off-by-one errors in range()

### Your task

Fix this code to print numbers 1 through 3.`,
    starter_code: `for i in range(1, 4)\nprint(i)`,
    solution_code: `for i in range(1, 4):\n    print(i)`,
    validation_type: "contains",
    validation_pattern: "3",
    hints: ["Missing colon after range(1, 4)", "print must be indented inside the for loop."],
  },
  {
    slug: "day2-level9-quiz",
    title: "Day 2 Checkpoint",
    phase: 1,
    day: 2,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Test your decision and loop skills.",
    lesson_content: `## Checkpoint

Write code that:
1. Has a list: \`["Mon", "Tue", "Wed", "Thu", "Fri"]\`
2. Loops through each day
3. Prints "Work day: Mon" for each (using f-string)`,
    starter_code: `days = ["Mon", "Tue", "Wed", "Thu", "Fri"]\n\n# Your loop here\n`,
    solution_code: `days = ["Mon", "Tue", "Wed", "Thu", "Fri"]\nfor day in days:\n    print(f"Work day: {day}")`,
    validation_type: "contains",
    validation_pattern: "Work day: Fri",
    hints: ["Use for day in days:", "Indent the print statement."],
  },
  {
    slug: "day2-level10-project",
    title: "Day 2 Project  -  Expense Tracker",
    phase: 1,
    day: 2,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a simple expense tracking script.",
    lesson_content: `## Day 2 Project ðŸŽ¯

Build an expense tracker that:
1. Has a list of expenses: [500, 1200, 75, 300, 890]
2. Calculates the total
3. Prints how many expenses are over 200
4. Prints a summary

Expected output format:
\`\`\`
=== Expense Report ===
Total: 2965
Over 200: 3 expenses
Status: Review needed
\`\`\``,
    starter_code: `expenses = [500, 1200, 75, 300, 890]\n\n# Your code here\n`,
    solution_code: `expenses = [500, 1200, 75, 300, 890]\ntotal = sum(expenses)\nover_200 = 0\nfor e in expenses:\n    if e > 200:\n        over_200 = over_200 + 1\n\nprint("=== Expense Report ===")\nprint(f"Total: {total}")\nprint(f"Over 200: {over_200} expenses")\nprint("Status: Review needed")`,
    validation_type: "contains",
    validation_pattern: "Expense Report",
    hints: ["Use a loop with if e > 200 to count.", "sum(expenses) gives the total quickly."],
  },

  // â”€â”€ DAY 3 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "day3-level1-functions-intro",
    title: "What Are Functions?",
    phase: 1,
    day: 3,
    index_in_day: 1,
    level_type: "concept",
    summary: "Understand reusable blocks of code.",
    lesson_content: `## Functions

A **function** is a reusable block of code with a name.

Instead of writing the same code repeatedly, you define it once and **call** it whenever needed.

\`\`\`python
def greet():
    print("Hello!")

greet()  # calls the function
greet()  # call it again
\`\`\`

Think of functions like a **blender button**  -  press it anytime to get the same result.`,
    starter_code: `def say_hello():\n    print("Hello from a function!")\n    print("Functions save time.")\n\nsay_hello()\nsay_hello()`,
    solution_code: `def say_hello():\n    print("Hello from a function!")\n    print("Functions save time.")\n\nsay_hello()\nsay_hello()`,
    validation_type: "contains",
    validation_pattern: "Hello from a function",
    hints: ["def starts a function definition.", "Call it with say_hello()  -  include parentheses."],
  },
  {
    slug: "day3-level2-define-function",
    title: "Define Your First Function",
    phase: 1,
    day: 3,
    index_in_day: 2,
    level_type: "exercise",
    summary: "Write and call a custom function.",
    lesson_content: `## Creating functions

\`\`\`python
def show_menu():
    print("1. New task")
    print("2. View tasks")
    print("3. Exit")

show_menu()
\`\`\`

### Your task

Create a function \`show_status()\` that prints 3 lines about a project status.`,
    starter_code: `# Define show_status() below\n\n\n# Call your function\n`,
    solution_code: `def show_status():\n    print("Project: Python Automation")\n    print("Status: In Progress")\n    print("Completion: 30%")\n\nshow_status()`,
    validation_type: "contains",
    validation_pattern: "Status:",
    hints: ["Use def show_status(): with indented body.", "Don't forget to call the function at the end."],
  },
  {
    slug: "day3-level3-parameters",
    title: "Function Parameters",
    phase: 1,
    day: 3,
    index_in_day: 3,
    level_type: "exercise",
    summary: "Pass data into functions.",
    lesson_content: `## Parameters

Functions can accept **inputs** (parameters):

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("Alex")
greet("Sam")
\`\`\`

### Your task

Create \`calculate_tax(price, rate)\` that prints the tax amount.`,
    starter_code: `# price = 1000, rate = 0.18 should print 180.0\n\ndef calculate_tax(price, rate):\n    # Your code here\n    pass\n\ncalculate_tax(1000, 0.18)`,
    solution_code: `def calculate_tax(price, rate):\n    tax = price * rate\n    print(tax)\n\ncalculate_tax(1000, 0.18)`,
    validation_type: "contains",
    validation_pattern: "180",
    hints: ["tax = price * rate", "Print the tax value."],
  },
  {
    slug: "day3-level4-return",
    title: "Return Values",
    phase: 1,
    day: 3,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Get results back from functions.",
    lesson_content: `## return

Functions can **send back** a result:

\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
\`\`\`

\`return\` stops the function and gives back a value.

### Your task

Write \`discount(price, percent)\` that returns the discounted price.`,
    starter_code: `def discount(price, percent):\n    # Return the discounted price\n    pass\n\nfinal = discount(200, 10)\nprint(final)`,
    solution_code: `def discount(price, percent):\n    return price - (price * percent / 100)\n\nfinal = discount(200, 10)\nprint(final)`,
    validation_type: "contains",
    validation_pattern: "180",
    hints: ["discount = price * percent / 100", "return price - discount_amount"],
  },
  {
    slug: "day3-level5-builtins",
    title: "Built-in Functions",
    phase: 1,
    day: 3,
    index_in_day: 5,
    level_type: "run",
    summary: "Use Python's ready-made functions.",
    lesson_content: `## Built-in functions

Python includes many useful functions:

| Function | Purpose |
|----------|---------|
| \`len()\` | Count items |
| \`sum()\` | Add numbers |
| \`max()\` / \`min()\` | Largest / smallest |
| \`round()\` | Round decimals |

\`\`\`python
numbers = [10, 20, 30, 40]
print(sum(numbers))
print(max(numbers))
\`\`\``,
    starter_code: `sales = [1200, 890, 2100, 750, 1650]\n\nprint(f"Total sales: {sum(sales)}")\nprint(f"Best day: {max(sales)}")\nprint(f"Average: {round(sum(sales) / len(sales))}")`,
    solution_code: `sales = [1200, 890, 2100, 750, 1650]\nprint(f"Total sales: {sum(sales)}")\nprint(f"Best day: {max(sales)}")\nprint(f"Average: {round(sum(sales) / len(sales))}")`,
    validation_type: "contains",
    validation_pattern: "Total sales",
    hints: ["Run the code to see built-ins in action.", "len(sales) gives the count of items."],
  },
  {
    slug: "day3-level6-datetime",
    title: "Working with Dates",
    phase: 1,
    day: 3,
    index_in_day: 6,
    level_type: "run",
    summary: "Use the datetime module for automation.",
    lesson_content: `## datetime module

Automation often needs dates and times:

\`\`\`python
from datetime import datetime

now = datetime.now()
print(now.strftime("%Y-%m-%d"))
print(now.strftime("%H:%M"))
\`\`\`

This is the foundation of **scheduled automation**  -  reports, reminders, backups.`,
    starter_code: `from datetime import datetime\n\nnow = datetime.now()\nprint("Today's date:", now.strftime("%Y-%m-%d"))\nprint("Current time:", now.strftime("%H:%M"))\nprint("Report generated successfully!")`,
    solution_code: `from datetime import datetime\n\nnow = datetime.now()\nprint("Today's date:", now.strftime("%Y-%m-%d"))\nprint("Current time:", now.strftime("%H:%M"))\nprint("Report generated successfully!")`,
    validation_type: "contains",
    validation_pattern: "Report generated",
    hints: ["Run to see today's actual date.", "strftime formats the datetime object."],
  },
  {
    slug: "day3-level7-automation-intro",
    title: "Your First Automation",
    phase: 1,
    day: 3,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Combine functions to automate a task.",
    lesson_content: `## Mini automation

Real automation = functions + loops + data:

\`\`\`python
def process_item(item):
    print(f"Processing: {item} âœ“")

items = ["email", "invoice", "report"]
for item in items:
    process_item(item)
\`\`\`

### Your task

Create \`send_notification(user)\` and loop through 3 users.`,
    starter_code: `users = ["alice@co.com", "bob@co.com", "carol@co.com"]\n\ndef send_notification(user):\n    # Print: Sending notification to: [user]\n    pass\n\n# Loop through users\n`,
    solution_code: `users = ["alice@co.com", "bob@co.com", "carol@co.com"]\n\ndef send_notification(user):\n    print(f"Sending notification to: {user}")\n\nfor user in users:\n    send_notification(user)`,
    validation_type: "contains",
    validation_pattern: "carol@co.com",
    hints: ["Define the function first, then loop.", "Use f-string in the print."],
  },
  {
    slug: "day3-level8-debug",
    title: "Debug: Function Errors",
    phase: 1,
    day: 3,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix function definition and call errors.",
    lesson_content: `## Debug functions

Common function bugs:
- Missing colon after def line
- Wrong indentation in function body
- Forgetting parentheses when calling

Fix this code to print "Area: 50"`,
    starter_code: `def calculate_area(width, height)\nreturn width * height\n\nresult = calculate_area(5, 10)\nprint(f"Area: {result}")`,
    solution_code: `def calculate_area(width, height):\n    return width * height\n\nresult = calculate_area(5, 10)\nprint(f"Area: {result}")`,
    validation_type: "contains",
    validation_pattern: "Area: 50",
    hints: ["Add colon after the def line.", "Indent return inside the function."],
  },
  {
    slug: "day3-level9-quiz",
    title: "Day 3 Checkpoint",
    phase: 1,
    day: 3,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Functions quiz before the final project.",
    lesson_content: `## Checkpoint

Write a function \`format_report(title, value)\` that returns a formatted string:
\`"Report: [title] | Value: [value]"\`

Then print the result for title="Sales" and value=5000.`,
    starter_code: `def format_report(title, value):\n    # Return formatted string\n    pass\n\nresult = format_report("Sales", 5000)\nprint(result)`,
    solution_code: `def format_report(title, value):\n    return f"Report: {title} | Value: {value}"\n\nresult = format_report("Sales", 5000)\nprint(result)`,
    validation_type: "contains",
    validation_pattern: "Report: Sales",
    hints: ["Use return with an f-string.", "Call the function and print the result."],
  },
  {
    slug: "day3-level10-project",
    title: "Day 3 Project  -  Daily Report Generator",
    phase: 1,
    day: 3,
    index_in_day: 10,
    level_type: "project",
    summary: "Build an automated daily report script.",
    lesson_content: `## Day 3 Project ðŸŽ¯

Build a **Daily Report Generator**  -  your first automation tool!

### Requirements

1. Function \`generate_header()\`  -  prints report header with today's date
2. Function \`add_metric(name, value)\`  -  prints each metric
3. Function \`generate_footer(total)\`  -  prints summary
4. Main code that reports 3 metrics and a total

### Expected format

\`\`\`
=== DAILY AUTOMATION REPORT ===
Date: 2026-01-15
Metric: Emails sent | Value: 45
Metric: Tasks completed | Value: 12
Metric: Files processed | Value: 8
---
Total activities: 65
Report complete âœ“
\`\`\``,
    starter_code: `from datetime import datetime\n\ndef generate_header():\n    pass\n\ndef add_metric(name, value):\n    pass\n\ndef generate_footer(total):\n    pass\n\n# Main report logic\nmetrics = [("Emails sent", 45), ("Tasks completed", 12), ("Files processed", 8)]\n`,
    solution_code: `from datetime import datetime\n\ndef generate_header():\n    print("=== DAILY AUTOMATION REPORT ===")\n    print(f"Date: {datetime.now().strftime('%Y-%m-%d')}")\n\ndef add_metric(name, value):\n    print(f"Metric: {name} | Value: {value}")\n\ndef generate_footer(total):\n    print("---")\n    print(f"Total activities: {total}")\n    print("Report complete âœ“")\n\nmetrics = [("Emails sent", 45), ("Tasks completed", 12), ("Files processed", 8)]\ngenerate_header()\ntotal = 0\nfor name, value in metrics:\n    add_metric(name, value)\n    total += value\ngenerate_footer(total)`,
    validation_type: "contains",
    validation_pattern: "DAILY AUTOMATION REPORT",
    hints: ["Build one function at a time and test.", "Use a loop for metrics and accumulate total.", "datetime.now().strftime('%Y-%m-%d') for date."],
  },
];
