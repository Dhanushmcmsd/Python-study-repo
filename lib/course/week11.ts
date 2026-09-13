import type { Level } from "../types";

export const WEEK11_LEVELS: Level[] = [
  {
    slug: "week11-level1-agentic-intro",
    title: "Introduction to Agentic Automation",
    phase: 3,
    day: 11,
    index_in_day: 1,
    level_type: "concept",
    summary: "Learn how AI agents choose tools and loop until a task is done.",
    lesson_content: `## Agentic Automation

An **agent** is a program that:
1. Receives a **goal**
2. **Chooses a tool** to make progress
3. **Observes** the result
4. **Repeats** until done

\`\`\`
Goal → Think → Pick Tool → Execute → Check → (repeat or finish)
\`\`\`

### Simulated agents

We simulate agents with Python functions and dicts — no real AI or network needed. The patterns you learn here apply directly to production agent frameworks.`,
    starter_code: `# Agent loop preview\n\ndef run_tool(name, args):\n    tools = {"search": lambda q: f"Found: {q}", "done": lambda _: "Complete"}\n    return tools.get(name, lambda _: "Unknown")(args)\n\ngoal = "Find Python tutorials"\nstep1 = run_tool("search", goal)\nprint(step1)\nprint("Agent ready ✓")`,
    solution_code: `def run_tool(name, args):\n    tools = {"search": lambda q: f"Found: {q}", "done": lambda _: "Complete"}\n    return tools.get(name, lambda _: "Unknown")(args)\n\ngoal = "Find Python tutorials"\nstep1 = run_tool("search", goal)\nprint(step1)\nprint("Agent ready ✓")`,
    validation_type: "contains",
    validation_pattern: "Agent ready",
    hints: ["Agents loop: pick tool → run → check goal.", "Tools are just functions the agent can call."],
  },
  {
    slug: "week11-level2-tool-registry",
    title: "Tool Registry Pattern",
    phase: 3,
    day: 11,
    index_in_day: 2,
    level_type: "run",
    summary: "Register tools in a dictionary for agent access.",
    lesson_content: `## Tool Registry

Agents need a **registry** — a dict mapping tool names to functions:

\`\`\`python
def tool_search(query):
    return {"results": [query + " result"]}

def tool_calculate(expr):
    return {"value": eval(expr)}  # simplified

TOOLS = {
    "search": tool_search,
    "calculate": tool_calculate,
}
\`\`\`

The agent picks a name, looks it up, and calls the function.`,
    starter_code: `def tool_summarize(text):\n    return {"summary": text[:20] + "..."}\n\ndef tool_count_words(text):\n    return {"count": len(text.split())}\n\nTOOLS = {\n    "summarize": tool_summarize,\n    "count_words": tool_count_words,\n}\n\ntext = "Automation agents process tasks step by step"\nresult = TOOLS["count_words"](text)\nprint(f"Words: {result['count']}")`,
    solution_code: `def tool_summarize(text):\n    return {"summary": text[:20] + "..."}\n\ndef tool_count_words(text):\n    return {"count": len(text.split())}\n\nTOOLS = {\n    "summarize": tool_summarize,\n    "count_words": tool_count_words,\n}\n\ntext = "Automation agents process tasks step by step"\nresult = TOOLS["count_words"](text)\nprint(f"Words: {result['count']}")`,
    validation_type: "contains",
    validation_pattern: "Words:",
    hints: ["TOOLS is a dict of name → function.", "Call TOOLS['count_words'](text) to run a tool."],
  },
  {
    slug: "week11-level3-tool-selection",
    title: "Tool Selection Pattern",
    phase: 3,
    day: 11,
    index_in_day: 3,
    level_type: "modify",
    summary: "Implement logic that picks the right tool for a task.",
    lesson_content: `## Tool Selection

A simple **selector** maps task types to tools:

\`\`\`python
def select_tool(task_type):
    mapping = {
        "search": "search",
        "math": "calculate",
        "finish": "done",
    }
    return mapping.get(task_type, "unknown")
\`\`\`

In real agents, an LLM decides. Here we use rules to learn the pattern.`,
    starter_code: `def select_tool(goal):\n    if "calculate" in goal.lower() or "sum" in goal.lower():\n        return "calculate"\n    if "search" in goal.lower() or "find" in goal.lower():\n        return "search"\n    return "done"\n\ngoals = ["Calculate sum of sales", "Find customer records", "All done"]\n\n# Print selected tool for each goal\nfor goal in goals:\n    tool = select_tool(goal)\n    print(f"{goal} → {tool}")`,
    solution_code: `def select_tool(goal):\n    if "calculate" in goal.lower() or "sum" in goal.lower():\n        return "calculate"\n    if "search" in goal.lower() or "find" in goal.lower():\n        return "search"\n    return "done"\n\ngoals = ["Calculate sum of sales", "Find customer records", "All done"]\n\nfor goal in goals:\n    tool = select_tool(goal)\n    print(f"{goal} → {tool}")`,
    validation_type: "contains",
    validation_pattern: "calculate",
    hints: ["Loop through goals and call select_tool.", "Print goal and selected tool name."],
  },
  {
    slug: "week11-level4-agent-loop",
    title: "Agent Loop Simulation",
    phase: 3,
    day: 11,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Simulate an agent that loops until the task is complete.",
    lesson_content: `## The Agent Loop

\`\`\`python
def agent_loop(goal, max_steps=5):
    steps = 0
    state = {"goal": goal, "done": False}
    while not state["done"] and steps < max_steps:
        tool = select_tool(state)
        result = run_tool(tool, state)
        state = update_state(state, result)
        steps += 1
    return state
\`\`\`

The loop continues until \`done\` is True or max steps reached.`,
    starter_code: `def agent_step(state):\n    remaining = state["tasks"]\n    if not remaining:\n        return {"done": True, "tasks": [], "log": "All tasks complete"}\n    current = remaining[0]\n    return {"done": False, "tasks": remaining[1:], "log": f"Completed: {current}"}\n\ndef agent_loop(tasks, max_steps=10):\n    state = {"done": False, "tasks": tasks, "log": ""}\n    steps = 0\n    while not state["done"] and steps < max_steps:\n        state = agent_step(state)\n        print(state["log"])\n        steps += 1\n    return state\n\ntask_list = ["email", "report", "backup"]\nagent_loop(task_list)`,
    solution_code: `def agent_step(state):\n    remaining = state["tasks"]\n    if not remaining:\n        return {"done": True, "tasks": [], "log": "All tasks complete"}\n    current = remaining[0]\n    return {"done": False, "tasks": remaining[1:], "log": f"Completed: {current}"}\n\ndef agent_loop(tasks, max_steps=10):\n    state = {"done": False, "tasks": tasks, "log": ""}\n    steps = 0\n    while not state["done"] and steps < max_steps:\n        state = agent_step(state)\n        print(state["log"])\n        steps += 1\n    return state\n\ntask_list = ["email", "report", "backup"]\nagent_loop(task_list)`,
    validation_type: "contains",
    validation_pattern: "All tasks complete",
    hints: ["The loop runs agent_step until done or max_steps.", "Each step processes one task from the list."],
  },
  {
    slug: "week11-level5-multi-step-agent",
    title: "Multi-Step Agent",
    phase: 3,
    day: 11,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Build an agent that uses different tools across multiple steps.",
    lesson_content: `## Multi-Step Agents

Each step may use a **different tool**:

\`\`\`python
plan = [
    {"tool": "fetch", "args": "data.csv"},
    {"tool": "analyze", "args": None},
    {"tool": "report", "args": None},
]

for step in plan:
    result = TOOLS[step["tool"]](step["args"])
\`\`\`

The agent follows a plan or decides dynamically each step.`,
    starter_code: `TOOLS = {\n    "fetch": lambda _: {"data": [10, 20, 30]},\n    "sum": lambda d: {"total": sum(d["data"])},\n    "report": lambda r: {"message": f"Total: {r['total']}"},\n}\n\nplan = [\n    {"tool": "fetch", "input": None},\n    {"tool": "sum", "input": "prev"},\n    {"tool": "report", "input": "prev"},\n]\n\n# Execute plan: each step uses previous result\nresult = None\nfor step in plan:\n    inp = result if step["input"] == "prev" else step["input"]\n    result = TOOLS[step["tool"]](inp)\n\nprint(result["message"])`,
    solution_code: `TOOLS = {\n    "fetch": lambda _: {"data": [10, 20, 30]},\n    "sum": lambda d: {"total": sum(d["data"])},\n    "report": lambda r: {"message": f"Total: {r['total']}"},\n}\n\nplan = [\n    {"tool": "fetch", "input": None},\n    {"tool": "sum", "input": "prev"},\n    {"tool": "report", "input": "prev"},\n]\n\nresult = None\nfor step in plan:\n    inp = result if step["input"] == "prev" else step["input"]\n    result = TOOLS[step["tool"]](inp)\n\nprint(result["message"])`,
    validation_type: "contains",
    validation_pattern: "Total: 60",
    hints: ["Pass None to fetch, then pass previous result to sum and report.", "The final message should show Total: 60."],
  },
  {
    slug: "week11-level6-guardrails",
    title: "Output Guardrails",
    phase: 3,
    day: 11,
    index_in_day: 6,
    level_type: "exercise",
    summary: "Validate agent output before accepting it.",
    lesson_content: `## Guardrails

**Guardrails** prevent bad agent output:

\`\`\`python
def validate_output(result):
    if "error" in result:
        return False, "Agent returned an error"
    if result.get("confidence", 0) < 0.5:
        return False, "Low confidence"
    return True, "OK"
\`\`\`

Always validate before acting on agent decisions.`,
    starter_code: `def validate_action(action):\n    allowed = ["search", "summarize", "done"]\n    if action not in allowed:\n        return False, f"Blocked: {action} not allowed"\n    return True, "Approved"\n\nagent_actions = ["search", "delete_all", "summarize", "done"]\n\nfor action in agent_actions:\n    ok, msg = validate_action(action)\n    print(f"{action}: {msg}")`,
    solution_code: `def validate_action(action):\n    allowed = ["search", "summarize", "done"]\n    if action not in allowed:\n        return False, f"Blocked: {action} not allowed"\n    return True, "Approved"\n\nagent_actions = ["search", "delete_all", "summarize", "done"]\n\nfor action in agent_actions:\n    ok, msg = validate_action(action)\n    print(f"{action}: {msg}")`,
    validation_type: "contains",
    validation_pattern: "Blocked: delete_all",
    hints: ["validate_action checks against an allowed list.", "Blocked actions should print 'Blocked:'."],
  },
  {
    slug: "week11-level7-max-iterations",
    title: "Max Iterations Guardrail",
    phase: 3,
    day: 11,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Limit agent loops to prevent infinite execution.",
    lesson_content: `## Max Iterations

Always cap agent loops:

\`\`\`python
MAX_STEPS = 10

for step in range(MAX_STEPS):
    if task_complete(state):
        break
    state = agent_step(state)
else:
    print("Warning: max steps reached")
\`\`\`

This prevents runaway agents from looping forever.`,
    starter_code: `MAX_STEPS = 5\n\ndef agent_tick(step):\n    return {"step": step, "done": step >= 3}\n\nstate = {"step": 0, "done": False}\n\nfor i in range(MAX_STEPS):\n    state = agent_tick(i)\n    print(f"Step {i + 1}")\n    if state["done"]:\n        print("Goal reached ✓")\n        break\nelse:\n    print("Max steps reached ⚠")`,
    solution_code: `MAX_STEPS = 5\n\ndef agent_tick(step):\n    return {"step": step, "done": step >= 3}\n\nstate = {"step": 0, "done": False}\n\nfor i in range(MAX_STEPS):\n    state = agent_tick(i)\n    print(f"Step {i + 1}")\n    if state["done"]:\n        print("Goal reached ✓")\n        break\nelse:\n    print("Max steps reached ⚠")`,
    validation_type: "contains",
    validation_pattern: "Goal reached",
    hints: ["The for-else runs else block only if loop wasn't broken.", "Agent finishes at step 4 (i=3)."],
  },
  {
    slug: "week11-level8-debug-agent",
    title: "Debug: Agent Loop",
    phase: 3,
    day: 11,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix an agent loop that never terminates.",
    lesson_content: `## Debug Agent Loops

Common agent bugs:
- Never setting \`done\` to True
- Wrong condition in while loop
- Not incrementing step counter

Fix this agent so it prints \`Finished in 3 steps\``,
    starter_code: `def run_agent():\n    steps = 0\n    done = False\n    while not done:\n        steps += 1\n        if steps >= 3:\n            done = True\n        # Bug: steps never increments past first check properly\n    return steps\n\ntotal = run_agent()\nprint(f"Finished in {total} steps")`,
    solution_code: `def run_agent():\n    steps = 0\n    done = False\n    while not done:\n        steps += 1\n        if steps >= 3:\n            done = True\n    return steps\n\ntotal = run_agent()\nprint(f"Finished in {total} steps")`,
    validation_type: "contains",
    validation_pattern: "Finished in 3 steps",
    hints: ["steps += 1 must run each iteration.", "Set done = True when steps reaches 3."],
  },
  {
    slug: "week11-level9-quiz",
    title: "Week 11 Checkpoint",
    phase: 3,
    day: 11,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Quiz on tool selection and agent guardrails.",
    lesson_content: `## Checkpoint

Implement \`safe_agent_run(action)\`:
- If action is in \`["read", "write", "done"]\`, return \`"Executed: [action]"\`
- Otherwise return \`"Blocked: [action]"\`

Test with actions: \`"read"\`, \`"shutdown"\`, \`"done"\` and print each result.`,
    starter_code: `ALLOWED = ["read", "write", "done"]\n\ndef safe_agent_run(action):\n    # Return Executed or Blocked message\n    pass\n\nfor action in ["read", "shutdown", "done"]:\n    print(safe_agent_run(action))`,
    solution_code: `ALLOWED = ["read", "write", "done"]\n\ndef safe_agent_run(action):\n    if action in ALLOWED:\n        return f"Executed: {action}"\n    return f"Blocked: {action}"\n\nfor action in ["read", "shutdown", "done"]:\n    print(safe_agent_run(action))`,
    validation_type: "contains",
    validation_pattern: "Blocked: shutdown",
    hints: ["Check if action in ALLOWED.", "Return different strings for allowed vs blocked."],
  },
  {
    slug: "week11-level10-project",
    title: "Week 11 Project — Task Automation Agent",
    phase: 3,
    day: 11,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a guarded agent that processes a task queue with tools.",
    lesson_content: `## Week 11 Project 🎯

Build a **Task Automation Agent** with tools and guardrails.

### Requirements

1. **TOOLS** dict with \`"log"\` (prints task) and \`"done"\` (marks complete)
2. \`select_tool(task)\` — returns \`"log"\` for normal tasks, \`"done"\` when task is \`"finish"\`
3. \`validate(task)\` — block tasks containing \`"danger"\`
4. \`run_agent(tasks)\` — loop through tasks, validate, select tool, execute (max 10 steps)
5. Print \`"Agent complete"\` at end

### Test queue

\`["send email", "danger: delete db", "generate report", "finish"]\`

### Expected

Blocked danger task, other tasks logged, ends with "Agent complete"`,
    starter_code: `TOOLS = {\n    "log": lambda t: f"Logged: {t}",\n    "done": lambda _: "Finishing",\n}\n\ndef select_tool(task):\n    pass\n\ndef validate(task):\n    pass\n\ndef run_agent(tasks):\n    pass\n\nqueue = ["send email", "danger: delete db", "generate report", "finish"]\nrun_agent(queue)`,
    solution_code: `TOOLS = {\n    "log": lambda t: f"Logged: {t}",\n    "done": lambda _: "Finishing",\n}\n\ndef select_tool(task):\n    if task == "finish":\n        return "done"\n    return "log"\n\ndef validate(task):\n    if "danger" in task:\n        return False\n    return True\n\ndef run_agent(tasks):\n    for i, task in enumerate(tasks):\n        if i >= 10:\n            break\n        if not validate(task):\n            print(f"Blocked: {task}")\n            continue\n        tool = select_tool(task)\n        print(TOOLS[tool](task))\n    print("Agent complete")\n\nqueue = ["send email", "danger: delete db", "generate report", "finish"]\nrun_agent(queue)`,
    validation_type: "contains",
    validation_pattern: "Agent complete",
    hints: ["validate blocks 'danger' tasks.", "select_tool returns 'done' only for 'finish'.", "Cap loop at 10 iterations."],
  },
];
