import type { Level } from "../types";

export const WEEK4_LEVELS: Level[] = [
  // ── WEEK 4: OOP & Error Handling ───────────────────────────────────
  {
    slug: "week4-level1-oop-intro",
    title: "Object-Oriented Programming",
    phase: 1,
    day: 4,
    index_in_day: 1,
    level_type: "concept",
    summary: "Understand classes, objects, and why OOP organizes code.",
    lesson_content: `## What is OOP?

**Object-Oriented Programming (OOP)** organizes code around **objects** — bundles of data and behavior.

Think of a real object:
- A **car** has data (color, speed) and actions (accelerate, brake)
- In Python, a **class** is the blueprint; an **object** is one instance

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Buddy")
print(my_dog.bark())
\`\`\`

### Key terms

| Term | Meaning |
|------|---------|
| \`class\` | Blueprint for objects |
| \`__init__\` | Constructor — runs when object is created |
| \`self\` | Reference to the current object |
| \`method\` | Function inside a class |

> OOP helps you model real-world things and reuse code across projects.`,
    starter_code: `class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Buddy")\nprint(my_dog.bark())\nprint(f"Dog name: {my_dog.name}")`,
    solution_code: `class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Buddy")\nprint(my_dog.bark())\nprint(f"Dog name: {my_dog.name}")`,
    expected_output: "Buddy says Woof!\nDog name: Buddy",
    validation_type: "contains",
    validation_pattern: "Woof",
    hints: ["Run the code to see how objects work.", "self.name stores data on each object.", "Methods are called with dot notation: my_dog.bark()"],
  },
  {
    slug: "week4-level2-class-init",
    title: "Classes & __init__",
    phase: 1,
    day: 4,
    index_in_day: 2,
    level_type: "run",
    summary: "Create objects with __init__ and instance attributes.",
    lesson_content: `## The __init__ method

\`__init__\` runs automatically when you create an object. Use it to set up initial data:

\`\`\`python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

book = Book("1984", "George Orwell")
print(book.title)
\`\`\`

- \`self\` is always the first parameter
- \`self.title\` creates an **attribute** on the object
- Each object gets its own copy of the attributes

### Your task

Run the code, then create a second book and print its details.`,
    starter_code: `class Book:\n    def __init__(self, title, author, pages):\n        self.title = title\n        self.author = author\n        self.pages = pages\n\nbook1 = Book("Python Crash Course", "Eric Matthes", 544)\nprint(f"{book1.title} by {book1.author} ({book1.pages} pages)")\n\n# Create book2 below\nbook2 = Book("Automate the Boring Stuff", "Al Sweigart", 592)\nprint(f"{book2.title} by {book2.author} ({book2.pages} pages)")`,
    solution_code: `class Book:\n    def __init__(self, title, author, pages):\n        self.title = title\n        self.author = author\n        self.pages = pages\n\nbook1 = Book("Python Crash Course", "Eric Matthes", 544)\nprint(f"{book1.title} by {book1.author} ({book1.pages} pages)")\n\nbook2 = Book("Automate the Boring Stuff", "Al Sweigart", 592)\nprint(f"{book2.title} by {book2.author} ({book2.pages} pages)")`,
    validation_type: "contains",
    validation_pattern: "Automate the Boring Stuff",
    hints: ["Use Book(title, author, pages) to create a new object.", "Access attributes with book2.title.", "Each object stores its own values."],
  },
  {
    slug: "week4-level3-methods",
    title: "Adding Methods",
    phase: 1,
    day: 4,
    index_in_day: 3,
    level_type: "modify",
    summary: "Define methods that use object attributes.",
    lesson_content: `## Methods

Methods are functions defined inside a class. They can read and change \`self\` attributes:

\`\`\`python
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count = self.count + 1

    def get_count(self):
        return self.count
\`\`\`

### Your task

Add a \`decrement\` method that subtracts 1 from \`self.count\`, and a \`reset\` method that sets count back to 0.`,
    starter_code: `class Counter:\n    def __init__(self):\n        self.count = 0\n\n    def increment(self):\n        self.count = self.count + 1\n\n    def get_count(self):\n        return self.count\n\n    # Add decrement and reset methods here\n\nc = Counter()\nc.increment()\nc.increment()\nc.increment()\nprint(f"Count: {c.get_count()}")`,
    solution_code: `class Counter:\n    def __init__(self):\n        self.count = 0\n\n    def increment(self):\n        self.count = self.count + 1\n\n    def decrement(self):\n        self.count = self.count - 1\n\n    def reset(self):\n        self.count = 0\n\n    def get_count(self):\n        return self.count\n\nc = Counter()\nc.increment()\nc.increment()\nc.increment()\nprint(f"Count: {c.get_count()}")`,
    validation_type: "contains",
    validation_pattern: "Count: 3",
    hints: ["decrement should do self.count = self.count - 1", "reset should set self.count = 0", "Methods need self as the first parameter."],
  },
  {
    slug: "week4-level4-bank-account",
    title: "Build a BankAccount Class",
    phase: 1,
    day: 4,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Create a class with deposit and get_balance methods.",
    lesson_content: `## Your first OOP exercise

Build a \`BankAccount\` class that:
- Takes an \`owner\` name and starting \`balance\` in \`__init__\`
- Has a \`deposit(amount)\` method that adds to balance
- Has a \`get_balance()\` method that returns the balance

\`\`\`python
account = BankAccount("Alex", 1000)
account.deposit(250)
print(account.get_balance())  # 1250
\`\`\`

### Your task

Complete the class and test it with the provided code.`,
    starter_code: `class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        # Add amount to balance\n        pass\n\n    def get_balance(self):\n        # Return the balance\n        pass\n\naccount = BankAccount("Alex", 1000)\naccount.deposit(250)\nprint(f"{account.owner}: \${account.get_balance()}")`,
    solution_code: `class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance = self.balance + amount\n\n    def get_balance(self):\n        return self.balance\n\naccount = BankAccount("Alex", 1000)\naccount.deposit(250)\nprint(f"{account.owner}: \${account.get_balance()}")`,
    validation_type: "contains",
    validation_pattern: "Alex: $1250",
    hints: ["deposit adds to self.balance.", "get_balance returns self.balance.", "Use self.balance inside methods."],
  },
  {
    slug: "week4-level5-person-class",
    title: "Person Class Practice",
    phase: 1,
    day: 4,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Build a Person class with intro and birthday methods.",
    lesson_content: `## Modeling people with classes

Create a \`Person\` class with:
- \`__init__(self, name, age)\` — store name and age
- \`introduce(self)\` — return \`"Hi, I'm [name] and I'm [age] years old."\`
- \`have_birthday(self)\` — increase age by 1

\`\`\`python
person = Person("Sam", 25)
print(person.introduce())
person.have_birthday()
print(person.introduce())
\`\`\``,
    starter_code: `class Person:\n    def __init__(self, name, age):\n        pass\n\n    def introduce(self):\n        pass\n\n    def have_birthday(self):\n        pass\n\nperson = Person("Sam", 25)\nprint(person.introduce())\nperson.have_birthday()\nprint(person.introduce())`,
    solution_code: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def introduce(self):\n        return f"Hi, I'm {self.name} and I'm {self.age} years old."\n\n    def have_birthday(self):\n        self.age = self.age + 1\n\nperson = Person("Sam", 25)\nprint(person.introduce())\nperson.have_birthday()\nprint(person.introduce())`,
    validation_type: "contains",
    validation_pattern: "26 years old",
    hints: ["Store name and age in __init__.", "introduce returns an f-string.", "have_birthday adds 1 to self.age."],
  },
  {
    slug: "week4-level6-inheritance",
    title: "Inheritance Basics",
    phase: 1,
    day: 4,
    index_in_day: 6,
    level_type: "run",
    summary: "Create child classes that inherit from a parent.",
    lesson_content: `## Inheritance

A **child class** inherits attributes and methods from a **parent class**:

\`\`\`python
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
\`\`\`

- \`Dog(Animal)\` means Dog inherits from Animal
- Child classes can **override** parent methods
- \`super().__init__(name)\` calls the parent's __init__

Run the code and observe how each animal speaks differently!`,
    starter_code: `class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} says Meow!"\n\nanimals = [Dog("Buddy"), Cat("Whiskers"), Dog("Max")]\nfor animal in animals:\n    print(animal.speak())`,
    solution_code: `class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} says Meow!"\n\nanimals = [Dog("Buddy"), Cat("Whiskers"), Dog("Max")]\nfor animal in animals:\n    print(animal.speak())`,
    validation_type: "contains",
    validation_pattern: "Whiskers says Meow",
    hints: ["Each subclass overrides speak().", "All animals share the name attribute from Animal.", "Polymorphism: same method, different behavior."],
  },
  {
    slug: "week4-level7-try-except",
    title: "Try & Except",
    phase: 1,
    day: 4,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Handle errors gracefully with try/except.",
    lesson_content: `## Error Handling

Programs crash when errors occur. \`try/except\` lets you **catch** errors and respond gracefully:

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

Common pattern:
\`\`\`python
try:
    value = int("abc")
except ValueError:
    print("Not a valid number")
\`\`\`

### Your task

Write a \`safe_divide(a, b)\` function that returns the result, or \`"Error: division by zero"\` if b is 0.`,
    starter_code: `def safe_divide(a, b):\n    # Use try/except to handle division by zero\n    pass\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\nprint(safe_divide(7, 3))`,
    solution_code: `def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Error: division by zero"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\nprint(safe_divide(7, 3))`,
    validation_type: "contains",
    validation_pattern: "Error: division by zero",
    hints: ["Wrap a / b in a try block.", "Catch ZeroDivisionError in except.", "Return a friendly message instead of crashing."],
  },
  {
    slug: "week4-level8-debug-oop",
    title: "Debug OOP Code",
    phase: 1,
    day: 4,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix class definition and inheritance bugs.",
    lesson_content: `## Debug: Classes

Common OOP bugs:
- Missing \`self\` in method definitions
- Forgetting colon after \`class\` or \`def\`
- Wrong indentation in class body
- Not calling \`__init__\` with \`super()\` in subclasses

### Your task

Fix this code so it prints:
\`\`\`
Rectangle: 12
Square area: 16
\`\`\``,
    starter_code: `class Shape:\n    def __init__(self, name)\n        self.name = name\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        super().__init__("Rectangle")\n        self.width = width\n        self.height = height\n\n    def area(self):\n    return self.width * self.height\n\nclass Square(Rectangle):\n    def __init__(self, side):\n        super().__init__(side, side)\n        self.name = "Square"\n\nrect = Rectangle(3, 4)\nprint(f"{rect.name}: {rect.area()}")\nsq = Square(4)\nprint(f"{sq.name} area: {sq.area()}")`,
    solution_code: `class Shape:\n    def __init__(self, name):\n        self.name = name\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        super().__init__("Rectangle")\n        self.width = width\n        self.height = height\n\n    def area(self):\n        return self.width * self.height\n\nclass Square(Rectangle):\n    def __init__(self, side):\n        super().__init__(side, side)\n        self.name = "Square"\n\nrect = Rectangle(3, 4)\nprint(f"{rect.name}: {rect.area()}")\nsq = Square(4)\nprint(f"{sq.name} area: {sq.area()}")`,
    validation_type: "contains",
    validation_pattern: "Square area: 16",
    hints: ["Add colon after __init__(self, name)", "Indent return inside area()", "Check all def lines have colons."],
  },
  {
    slug: "week4-level9-quiz",
    title: "Week 4 Checkpoint",
    phase: 1,
    day: 4,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Test OOP and error handling skills.",
    lesson_content: `## Week 4 Checkpoint

Write a \`Temperature\` class with:
1. \`__init__(self, celsius)\` — store temperature
2. \`to_fahrenheit(self)\` — return \`celsius * 9/5 + 32\`
3. \`is_freezing(self)\` — return \`True\` if celsius <= 0

Then create temp = Temperature(-5) and print:
- The Fahrenheit value (should be 23.0)
- Whether it's freezing

Use try/except is not needed here — focus on the class!`,
    starter_code: `class Temperature:\n    def __init__(self, celsius):\n        pass\n\n    def to_fahrenheit(self):\n        pass\n\n    def is_freezing(self):\n        pass\n\ntemp = Temperature(-5)\nprint(f"Fahrenheit: {temp.to_fahrenheit()}")\nprint(f"Freezing: {temp.is_freezing()}")`,
    solution_code: `class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n\n    def to_fahrenheit(self):\n        return self.celsius * 9/5 + 32\n\n    def is_freezing(self):\n        return self.celsius <= 0\n\ntemp = Temperature(-5)\nprint(f"Fahrenheit: {temp.to_fahrenheit()}")\nprint(f"Freezing: {temp.is_freezing()}")`,
    validation_type: "contains",
    validation_pattern: "Freezing: True",
    hints: ["Store celsius in __init__.", "Formula: celsius * 9/5 + 32", "is_freezing returns True when celsius <= 0."],
  },
  {
    slug: "week4-level10-project",
    title: "Week 4 Project — Library System",
    phase: 1,
    day: 4,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a library system with classes and custom exceptions.",
    lesson_content: `## Week 4 Project

Build a mini **Library System** using OOP and error handling!

### Requirements

1. Custom exception \`BookNotAvailableError\` (inherits from \`Exception\`)
2. Class \`Book\` with \`title\`, \`available\` (True/False), and \`check_out()\` method
3. \`check_out()\` raises \`BookNotAvailableError\` if book is not available
4. Class \`Library\` with \`books\` list and \`find_book(title)\` method
5. Main code that checks out a book and handles the error

### Expected output

\`\`\`
=== Library System ===
Checked out: Python Basics
Error: Book already checked out
Available books: 1
\`\`\`

> In the browser playground we simulate everything — no real files needed!`,
    starter_code: `class BookNotAvailableError(Exception):\n    pass\n\nclass Book:\n    def __init__(self, title, available=True):\n        self.title = title\n        self.available = available\n\n    def check_out(self):\n        pass\n\nclass Library:\n    def __init__(self, books):\n        self.books = books\n\n    def find_book(self, title):\n        for book in self.books:\n            if book.title == title:\n                return book\n        return None\n\n# Setup\nbooks = [Book("Python Basics"), Book("Data Science 101", available=False)]\nlibrary = Library(books)\n\n# Your checkout logic with try/except\n`,
    solution_code: `class BookNotAvailableError(Exception):\n    pass\n\nclass Book:\n    def __init__(self, title, available=True):\n        self.title = title\n        self.available = available\n\n    def check_out(self):\n        if not self.available:\n            raise BookNotAvailableError("Book already checked out")\n        self.available = False\n        return self.title\n\nclass Library:\n    def __init__(self, books):\n        self.books = books\n\n    def find_book(self, title):\n        for book in self.books:\n            if book.title == title:\n                return book\n        return None\n\n    def count_available(self):\n        return sum(1 for b in self.books if b.available)\n\nbooks = [Book("Python Basics"), Book("Data Science 101", available=False)]\nlibrary = Library(books)\n\nprint("=== Library System ===")\ntry:\n    book = library.find_book("Python Basics")\n    title = book.check_out()\n    print(f"Checked out: {title}")\nexcept BookNotAvailableError as e:\n    print(f"Error: {e}")\n\ntry:\n    book = library.find_book("Data Science 101")\n    book.check_out()\nexcept BookNotAvailableError as e:\n    print(f"Error: {e}")\n\nprint(f"Available books: {library.count_available()}")`,
    validation_type: "contains",
    validation_pattern: "Library System",
    hints: ["Raise BookNotAvailableError when available is False.", "Use try/except when calling check_out().", "Set available = False after successful checkout."],
  },
];
