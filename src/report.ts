import type { PingResult } from "./ping.js"

export function formatReport(result: PingResult): string {
  return JSON.stringify(result)
}
