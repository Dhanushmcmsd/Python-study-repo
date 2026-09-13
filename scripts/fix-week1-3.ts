import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const path = join(__dirname, "..", "lib", "course", "week1-3.ts");
let text = readFileSync(path, "utf8");

// Fix mangled em-dash sequences
text = text.replace(/"\u201d/g, " - ");
text = text.replace(/"\u201c/g, '"');
text = text.replace(/"\s*"\s*/g, " - ");
text = text.replace(/ — /g, " - ");
text = text.replace(/—/g, " - ");

writeFileSync(path, text, "utf8");
console.log("week1-3 fixed");
