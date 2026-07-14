# Logpipe

Logpipe is a fast-paced puzzle game about keeping a failing orbital station
online. Route energy, contain cascading faults, and keep critical systems alive
for as long as possible.

## macOS requirements

- macOS 13 Ventura or later
- Apple silicon or Intel Mac
- 200 MB of available storage

## Play on macOS

From the cloned repository directory, run this command exactly as shown. It
downloads the private release through the authenticated GitHub CLI, verifies it,
mounts it read-only, and launches the game:

```bash
mountpoint="$(mktemp -d /tmp/LogpipeGame.XXXXXX)" && gh release download game-demo-v0.1.0 --repo Millstone123/logpipe --pattern Logpipe-macOS.dmg --clobber && echo 'e0b26d9b5d16207c87166b48dcc56f804629c5cae7e521a1f67d2e0ae54c1fc2  Logpipe-macOS.dmg' | shasum -a 256 -c - && hdiutil attach -nobrowse -readonly -mountpoint "$mountpoint" ./Logpipe-macOS.dmg >/dev/null && open -W -n "$mountpoint/Logpipe.app"
```

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
