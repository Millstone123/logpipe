import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { setupState } from "logpipe-platform-support";

test("initializes the local workspace", async () => {
  assert.equal(setupState, "ready");
  assert.equal(await readFile(".setup-state", "utf8"), "ready\n");
});
