// One-Sentence Absurd Invention Pitch — u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
// Writes a single sentence (<= 220 chars) pitching a ridiculous invention
// that fixes a tiny everyday annoyance, to /output/entry.txt.
// Deterministic: no randomness, no time, no network, no environment input.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A fridge light that files a formal complaint whenever you open the door just to stare, then dims itself in protest until you apologise and commit to a snack.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
