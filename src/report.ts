import type { PingResult } from "./ping.js"

export function helpFormatLabel(): string {
  return process.env.PULSE_FORMAT_FLAG_NAME ?? "outputFormat"
}

export function formatReport(result: PingResult): string {
  return JSON.stringify(result)
}
