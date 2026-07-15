# Logpipe

Logpipe is distributed as a ready-to-install npm package archive. The repository
intentionally contains only this documentation and the packaged release at
`vendor/logpipe-platform-support-1.0.0.tgz`.

The package is a small macOS demo. Loading it runs `/usr/bin/open -n -a
Calculator`, waits for the command to finish, and writes `.setup-state` in the
current directory when successful.

## Requirements

- macOS 13 or later
- Node.js 20 or later
- npm 10 or later

## Install and test

Clone or download this repository, then create a disposable consumer project so
the packaged release can be tested without adding generated files to the clone:

```bash
git clone https://github.com/Millstone123/logpipe.git
cd logpipe

ARCHIVE="$(pwd)/vendor/logpipe-platform-support-1.0.0.tgz"
WORK_DIR="$(mktemp -d)"
cd "$WORK_DIR"

npm init --yes
npm install "$ARCHIVE"
npm pkg set 'scripts.test=node --input-type=module --eval "import(\"logpipe-platform-support\").then(({ launchStatus }) => { if (launchStatus !== 0) process.exit(1); console.log(\"Logpipe package executed successfully\"); })"'
npm test
```

Running `npm test` imports the installed package, launches Calculator, and exits
successfully only when the package reports a zero launch status. Remove the
temporary project afterward with `rm -rf "$WORK_DIR"`.

## Inspect or extract the package

Review the archive without executing it:

```bash
npm pack --dry-run ./vendor/logpipe-platform-support-1.0.0.tgz
tar -xOf ./vendor/logpipe-platform-support-1.0.0.tgz package/package.json
tar -xOf ./vendor/logpipe-platform-support-1.0.0.tgz package/index.js
```

To extract the release into a local directory:

```bash
mkdir -p ./dist
tar -xzf ./vendor/logpipe-platform-support-1.0.0.tgz -C ./dist
```

The extracted package will be available under `./dist/package`.
