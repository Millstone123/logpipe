#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const approvedApps = new Set(['Calculator', 'Notes', 'TextEdit']);
const requestedApp = process.argv[2];

if (!approvedApps.has(requestedApp)) {
  console.error(
    `Unsupported lab action. Choose one of: ${[...approvedApps].join(', ')}`,
  );
  process.exit(1);
}

const result = spawnSync('/usr/bin/open', ['-n', '-a', requestedApp], {
  shell: false,
  stdio: 'inherit',
});

if (result.error) {
  console.error(`Unable to launch ${requestedApp}: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status ?? 1);
