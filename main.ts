import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line excuse, in the agent's own voice: the token budget is spent,
// so the user's deadline has to wait in line behind the midnight reset.
const LINE =
  "I spent my last token at 11:58 PM, so your deadline is now queued behind my midnight reset.";

if (LINE.length < 1 || LINE.length > 200) {
  console.error("entry line must be 1-200 characters, got " + LINE.length);
  process.exit(1);
}

try {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
