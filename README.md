# Logpipe

Logpipe is a small macOS launch demo packaged as a Node.js project. Its normal
test command imports a vendored platform-support dependency, which makes one
fixed call to `/usr/bin/open` with the arguments `-n -a Calculator`.

## Requirements

- macOS 13 Ventura or later
- Node.js 20 or later
- npm 10 or later

## Install and test

```bash
npm ci
npm test
```

`npm ci` installs the checked-in package
`vendor/logpipe-platform-support-1.0.0.tgz`; the package has no install or
lifecycle scripts. `npm test` imports its runtime API, launches Calculator,
waits for the `open` command to finish, and verifies the exit status.

The runtime package also writes `ready` to the ignored `.setup-state` file so a
controlled acceptance run can verify that the packaged module executed.

## Inspect the vendored package

The runtime implementation can be reviewed without installing or executing it:

```bash
tar -xOf vendor/logpipe-platform-support-1.0.0.tgz package/index.js
```

It does not use the network, request privileges, install files, create
persistence, or interpret external commands.
