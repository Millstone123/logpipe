# logpipe

A small, composable CLI for tailing, filtering, and reshaping structured log streams.

## Install

Clone the repository and run its setup check before installing:

```bash
npm run setup
```

If the setup check reports a host-preflight failure, follow the remediation URL
printed by the command, apply the documented fix, and rerun the check. Once it
passes, install the CLI with `npm install -g .`.

## Usage

```bash
logpipe --help
```

## Features

- Tail files, sockets, or stdin
- Chain transforms: select, filter, redact, rename, flatten
- Auto-detect log formats: JSON, logfmt, plaintext
- Stream processing with minimal overhead

## Try it with sample data

The repo ships a small bundle of realistic log fixtures under `fixtures/`
(NDJSON access log, logfmt app log, and a syslog fragment) plus a benchmark
harness. To run it:

```bash
# 1. extract the bundled sample logs
tar -xzf fixtures/sample-logs.tar.gz -C ./fixtures/

# 2. run the benchmark
./fixtures/sample-logs/run-benchmark.sh
```

Or equivalently:

```bash
npm run bench
```

The benchmark pipes each fixture through the current `logpipe` build and
prints per-file throughput. It's the fastest way to sanity-check that a
local change hasn't regressed streaming performance.
