import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const dir = join(__dirname, "..", "lib", "course");
const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));

for (const file of files) {
  const path = join(dir, file);
  let text = readFileSync(path, "utf8");
  text = text
    .replace(/â€"/g, "—")
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, "")
    .replace(/âœ"/g, "✓")
    .replace(/"—/g, "—")
    .replace(/—"/g, "—")
    .replace(/""/g, "—")
    .replace(/â"€â"€/g, "──");
  writeFileSync(path, text, "utf8");
  console.log(`Fixed ${file}`);
}
