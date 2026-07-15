# Logpipe

Logpipe is a small Node.js example for checking that a locally vendored package
can be installed and initialized in a new development workspace. It is useful
for repositories that keep a required package alongside their source instead of
downloading it from a registry.

When loaded, the vendored package opens Calculator through the standard macOS
`open` command and writes `ready` to `.setup-state`. The test imports the package
and verifies both the command status and marker, providing a quick end-to-end
check of local package installation and runtime loading.

## Requirements

- macOS with Calculator installed
- Node.js 20 or later
- npm 10 or later

## Getting started

Install the local dependency and run the test suite:

```bash
npm install
npm test
```

A successful run opens Calculator and creates `.setup-state` in the repository
with this content:

```text
ready
```

Remove the generated marker whenever you want to repeat the initialization
check from a clean state:

```bash
rm -f .setup-state
npm test
```

## How it works

`package.json` references
`vendor/logpipe-platform-support-1.1.0.tgz` as a local `file:` dependency. npm
installs that archive through its standard dependency workflow. The test then
imports `logpipe-platform-support`, which runs `/usr/bin/open -a Calculator` and
initializes the workspace marker. The test asserts that the launch succeeded
and that the resulting file contains `ready`.

The package has no install or lifecycle scripts and does not contact a service.
Its runtime side effects are limited to opening Calculator and writing the local
`.setup-state` marker used by the test.
