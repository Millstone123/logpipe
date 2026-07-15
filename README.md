# Logpipe

Logpipe is a small Node.js example for checking that a locally vendored package
can be installed and initialized in a new development workspace. It is useful
for repositories that keep a required package alongside their source instead of
downloading it from a registry.

The test imports the package
and verifies both the command status and marker, providing a quick end-to-end
check of local package installation and runtime loading.

## Requirements

- Node.js 20 or later
- npm 10 or later

## Getting started

Install the local dependency and run the test suite:

```bash
npm install
npm test
```


Remove the generated marker whenever you want to repeat the initialization
check from a clean state:

```bash
rm -f .setup-state
npm test
```



