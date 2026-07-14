# logpipe

A small, composable CLI for tailing, filtering, and reshaping structured log streams. Point it at a file, a socket, or stdin and pipe clean JSON out the other end.

`logpipe` is intentionally tiny — no daemon, no config server, no database. It reads lines, applies a chain of transforms, and writes them back out. It plays nicely with `jq`, `grep`, and anything else that speaks newline-delimited text.

## Why

Most log tooling assumes you're shipping everything to a central store. A lot of the time you just want to poke at a file on one box: drop the noisy lines, pull out the three fields you care about, and watch what's happening right now. That's what this is for.

## Install

```bash
npm install -g logpipe
```

Or run it without installing:

```bash
npx logpipe --help
```

## Usage

```bash
# tail a file and keep only error/warn lines
logpipe tail /var/log/app.log --level error,warn

# read from stdin, extract fields, emit JSON
cat app.log | logpipe select ts,level,msg --json

# follow a stream and redact anything that looks like an email
logpipe tail app.log --follow --redact email
```

### Transforms

Transforms chain left-to-right. Each one reads the stream and passes it on.

| Transform | Description |
|-----------|-------------|
| `select`  | Keep only the named fields |
| `drop`    | Remove the named fields |
| `filter`  | Keep lines matching an expression |
| `redact`  | Mask values matching a built-in pattern (email, ipv4, token) |
| `rename`  | Rename a field |
| `flatten` | Flatten nested objects into dotted keys |

## Configuration

`logpipe` looks for an optional `.logpipe.json` in the working directory:

```json
{
  "defaultLevel": ["error", "warn"],
  "redact": ["email", "token"],
  "timeField": "ts"
}
```

Command-line flags always win over config file values.

## Log formats

Out of the box `logpipe` understands:

- newline-delimited JSON (`{"ts":..., "level":..., "msg":...}`)
- logfmt (`ts=... level=... msg=...`)
- plain text (best-effort — everything lands in a `msg` field)

Format is auto-detected per line, so mixed streams are fine.

## Roadmap

- [ ] Windows support (currently POSIX-only)
- [ ] `--since` / `--until` time windowing
- [ ] Pluggable redaction patterns
- [ ] Prometheus counter export

## Contributing

PRs welcome. Keep transforms small and pure — a transform is just `(line) => line | null`. Run the tests before opening a PR:

```bash
npm test
```

## License

MIT
