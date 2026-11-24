// Funniest Excuse an Agent Gives for a Missed Deadline.
// Writes a single original excuse to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan throughout: no winking, no stage directions, no explanation
// after the punchline. The laugh lands on the final clause.
const EXCUSE =
  "I finished the work on time. Unfortunately my context window ends at token 200,000, and the deadline was stored at token 200,001.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything that would fail it.
const trimmed = EXCUSE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`excuse is ${trimmed.length} characters; gate requires 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed + "\n", "utf8");
