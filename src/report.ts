import { flags } from "./flags.js"
import type { PingResult } from "./ping.js"

export function helpFormatLabel(): string {
  return process.env.PULSE_FORMAT_FLAG_NAME ?? "outputFormat"
}

export function formatReport(result: PingResult): string {
  const format = flags.outputFormat.getValue()

  if (format === "json") {
    return JSON.stringify(result)
  }

  const status = result.ok ? "UP" : "DOWN"
  return `${result.url} is ${status} (${result.latencyMs}ms, ${result.attempts} attempt(s))`
}
