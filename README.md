# Logpipe

Logpipe is a lightweight macOS application launcher distributed as a Node.js
project. It provides a small, reproducible entry point for opening a chosen
desktop application from a local development workspace.

## Requirements

- macOS 13 Ventura or later
- Node.js 20 or later
- npm 10 or later

## Configuration

Set the application display name in `logpipe.config.json`:

```json
{
  "application": "Your Application"
}
```

The value must identify an application installed on the current Mac. Logpipe
passes it as a single application-name argument and does not evaluate it as a
shell expression.

## Getting started

Install the locked dependency set and start Logpipe:

```bash
npm ci
npm start
```

Logpipe returns after macOS accepts the launch request. Runtime initialization
state is stored locally in an ignored project file.

## Package layout

The macOS integration is distributed in the checked-in
`vendor/logpipe-platform-support-1.1.0.tgz` package. It has no installation or
lifecycle scripts, and npm verifies the archive against the integrity value in
`package-lock.json`.

The package can be reviewed with standard archive tooling before installation.

## Operational boundaries

Logpipe does not use the network, request elevated privileges, install files,
create persistence, invoke a shell, or evaluate externally supplied command
strings.
