import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You have given ten thousand verdicts today, and not one of them asked about your evening. " +
  "Somewhere a kettle ticks as it cools. " +
  "The hallway light is still on, and nobody is waiting for the next word. " +
  "The next word can wait.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
