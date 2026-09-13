import type { Level } from "../types";

const EXTRA_BLOCKS: Record<Level["level_type"], string> = {
  concept: `

## Deep Dive
Take a moment to read each line in the code challenge below. Understanding *why* each word exists matters more than memorizing syntax.

## Practice Mindset
- Read the challenge code in the box below
- Type it character by character in the editor
- Run it and compare your output
- If it fails, read the error — errors tell you exactly what went wrong

## Stretch Goal
After completing the challenge, change one string or number and run again. Notice how the output changes.`,
  run: `

## Your Mission
Type the code below exactly into the editor. Do not copy-paste — typing builds muscle memory.

## Debugging Tip
If you get an error, check: quotes closed? Parentheses matched? Spelling correct?

## Real-World Use
This pattern appears in almost every Python script you'll write. Master it here.`,
  modify: `

## Modify & Learn
Start by typing the base code, then make the required changes. Small edits teach big concepts.

## Checklist
- [ ] Typed the full code yourself
- [ ] Made the required modification
- [ ] Output matches the expected result
- [ ] You can explain what each line does`,
  exercise: `

## Exercise Protocol
1. Read the lesson above carefully
2. Study the code challenge in the box
3. Type it in the editor from memory as much as possible
4. Run and verify output

## Common Mistakes
Watch for indentation (Python cares about spaces), missing colons after if/for/def, and quote types.`,
  debug: `

## Debug Like a Pro
Broken code is normal. Professionals spend 40% of their time fixing bugs.

## Strategy
1. Read the error message — it points to the line
2. Check the line above too — errors often cascade
3. Fix one bug at a time, then re-run`,
  quiz: `

## Quiz Mode
No hints until you try. Write the code from what you remember from earlier lessons.

## Recall Practice
Saying concepts out loud while typing helps memory stick.`,
  project: `

## Project Build
Combine everything from this week. Take your time — projects are where learning solidifies.

## Deliverable
Type the full solution, run it, and verify every line of output matches the spec.`,
};

export function enrichLevel(level: Level): Level {
  const extra = EXTRA_BLOCKS[level.level_type] ?? "";
  const challengeBlock = `

---

## ⌨ Code Challenge — Type This

\`\`\`python
${level.solution_code}
\`\`\`

**Expected output:**
\`\`\`
${level.expected_output ?? level.validation_pattern ?? "Run your code to see output"}
\`\`\`
`;

  return {
    ...level,
    lesson_content: level.lesson_content + extra + challengeBlock,
    starter_code: "",
  };
}

export function enrichLevels(levels: Level[]): Level[] {
  return levels.map(enrichLevel);
}
