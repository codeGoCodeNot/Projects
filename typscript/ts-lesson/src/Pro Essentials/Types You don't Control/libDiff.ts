import { diffChars, diffWords, diffLines } from "diff";
import type { Change } from "diff";

const a = "Hello world!\nThis is line 2.\n";
const b = "Hallo world!\nThis is line 2 changed.\n";

// character diff
const charChanges: Change[] = diffChars(a, b);
console.log("char diff:");
for (const c of charChanges) {
  if (c.added) console.log("+", JSON.stringify(c.value));
  else if (c.removed) console.log("-", JSON.stringify(c.value));
  else console.log("=", JSON.stringify(c.value));
}

// word diff
console.log("\nword diff:");
const wordChanges = diffWords(a, b);
for (const c of wordChanges) {
  if (c.added) console.log("+", c.value);
  else if (c.removed) console.log("-", c.value);
  else console.log(" ", c.value);
}

// line diff
console.log("\nline diff:");
const lineChanges = diffLines(a, b);
for (const c of lineChanges) {
  if (c.added) console.log("+", c.value.trimEnd());
  else if (c.removed) console.log("-", c.value.trimEnd());
  else console.log(" ", c.value.trimEnd());
}
