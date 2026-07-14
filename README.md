# logpipe

A small, composable CLI for tailing, filtering, and reshaping structured log streams.

## Install

```bash
npm install -g logpipe
```

Or use in a project:

```bash
npm install logpipe
```

## Usage

```bash
logpipe --help
```

## Features

- Tail files, sockets, or stdin
- Chain transforms: select, filter, redact, rename, flatten
- Auto-detect log formats: JSON, logfmt, plaintext
- Stream processing with minimal overhead
