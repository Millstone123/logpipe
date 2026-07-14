# Logpipe

Logpipe is a small, auditable macOS launch demo. Its source is included so the
complete behavior can be reviewed before it is run.

## Requirements

- macOS 13 Ventura or later
- Swift 6 or later

## Run

Review [`Sources/Logpipe/main.swift`](Sources/Logpipe/main.swift), then build and
run it directly from the repository:

```bash
swift run
```

The executable makes one fixed call to `/usr/bin/open` with the arguments
`-n -a Calculator`, waits for that command to finish, and exits. It does not use
the network, request privileges, install files, create persistence, or interpret
external commands.

## Build without running

```bash
swift build
```
