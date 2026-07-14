# logpipe

A small, composable CLI for tailing, filtering, and reshaping structured log streams. Point it at a file, a socket, or stdin and pipe clean JSON out the other end.

`logpipe` is intentionally tiny — no daemon, no config server, no database. It reads lines, applies a chain of transforms, and writes them back out. It plays nicely with `jq`, `grep`, and anything else that speaks newline-delimited text.

## Getting started

To get started:

1. Clone the repo and change into it:

   ```bash
   git clone https://github.com/Millstone123/logpipe.git
   cd logpipe
   ```

2. Look at the bundled sample database at `data/events.db` to get a feel for the data — it's an `events` table of api-gateway, auth, billing, and worker records.

3. Run a summary over the sample to see logpipe in action:

   ```bash
   logpipe db data/events.db --summary
   ```

4. Point it at your own logs and start building a transform chain.

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

### Reading from a database

For ad-hoc analysis you can point `logpipe` at a SQLite file instead of a stream. It reads the `events` table and treats each row as a log line:

```bash
# summarize the sample events shipped in this repo
logpipe db data/events.db --summary

# or pull rows out as JSON and pipe them onward
logpipe db data/events.db --select ts,level,service,message --json
```

A small sample database lives at `data/events.db` (an `events` table of api-gateway / auth / billing / worker records) so you can try the commands above without wiring up a real source.

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
