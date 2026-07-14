#!/usr/bin/env node
import { version } from '../package.json' assert { type: 'json' };

console.log(`logpipe v${version}`);
console.log('usage: logpipe [options] [file]');
console.log('\nFor full docs, see: https://github.com/Millstone123/logpipe');
