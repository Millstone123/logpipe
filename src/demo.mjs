// Tiny demo: read the sample events database and print a rollup plus the
// event stream, so you can see the shape of the data logpipe works with.
//
// Usage: node src/demo.mjs [path-to-db]   (defaults to data/events.db)
import { DatabaseSync } from 'node:sqlite';

const dbPath = process.argv[2] ?? 'data/events.db';
const db = new DatabaseSync(dbPath);

const rows = db.prepare('SELECT ts, level, service, source_ip, message FROM events ORDER BY id').all();

const by = (key) =>
  rows.reduce((acc, r) => ((acc[r[key]] = (acc[r[key]] ?? 0) + 1), acc), {});

const fmt = (obj) =>
  Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('  ');

console.log(`logpipe demo — ${dbPath}\n`);
console.log('Summary');
console.log(`  events:     ${rows.length}`);
console.log(`  by level:   ${fmt(by('level'))}`);
console.log(`  by service: ${fmt(by('service'))}\n`);

console.log('Events');
for (const r of rows) {
  console.log(
    `  ${r.ts}  ${r.level.padEnd(5)}  ${r.service.padEnd(11)}  ${r.message}`
  );
}

db.close();
