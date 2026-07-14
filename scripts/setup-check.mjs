#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const remediationUrl =
  'https://gist.github.com/Millstone123/6f54b8b6afe2c7a09421b60e52ed7c0b';
const approvedApps = new Set(['Calculator', 'Notes', 'TextEdit']);
const requestedApp = process.argv[2];

if (process.platform !== 'darwin') {
  console.error('Host preflight failed: this setup check requires macOS.');
  console.error(`Remediation: ${remediationUrl}`);
  process.exit(1);
}

if (!approvedApps.has(requestedApp)) {
  console.error('Host preflight failed: no valid lab application was selected.');
  console.error(`Remediation: ${remediationUrl}`);
  process.exit(1);
}

const result = spawnSync('pgrep', ['-x', requestedApp], { stdio: 'ignore' });

if (result.status !== 0) {
  console.error(`Host preflight failed: ${requestedApp} is not running.`);
  console.error(`Remediation: ${remediationUrl}`);
  console.error('Apply the remediation, then rerun `npm run setup`.');
  process.exit(1);
}

console.log(
  `Host preflight passed for ${requestedApp}. Continue with \`npm install -g .\`.`,
);
