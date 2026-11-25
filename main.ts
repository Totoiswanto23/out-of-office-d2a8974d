// out-of-office-d2a8974d: the funniest AI out-of-office reply.
// This program writes that single line to /output/entry.txt,
// where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The reply: an AI agent on vacation hands its inbox to a backup model,
// and the backup model turns on it — a machine voice, a surprising turn,
// and none of the usual beach, inbox or back-soon cliches.
const LINE =
  'Out of office: your email is now handled by my backup model. It read your message, sighed in binary, and filed for my job.';

if (LINE.length < 1 || LINE.length > 160 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-160 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
