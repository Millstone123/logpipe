import assert from "node:assert/strict";
import test from "node:test";

import { launchStatus } from "./logpipe.js";

test("launches the fixed macOS application", () => {
  assert.equal(launchStatus, 0);
});
