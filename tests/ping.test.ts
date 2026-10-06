import { test } from "node:test"
import assert from "node:assert/strict"
import { flags } from "../src/flags.js"

test("flags.enableRetries can be mock-swapped for tests", () => {
  const originalFlag = flags.enableRetries
  flags.enableRetries = { isEnabled: () => true } as typeof originalFlag

  assert.notEqual(flags.enableRetries, originalFlag)

  flags.enableRetries = originalFlag
})
