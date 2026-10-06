import { flags } from "./flags.js"

export interface PingResult {
  url: string
  ok: boolean
  latencyMs: number
  attempts: number
}

async function tryOnce(url: string): Promise<{ ok: boolean; latencyMs: number }> {
  const start = Date.now()
  try {
    const res = await fetch(url, { method: "HEAD" })
    return { ok: res.ok, latencyMs: Date.now() - start }
  } catch {
    return { ok: false, latencyMs: Date.now() - start }
  }
}

export async function ping(url: string): Promise<PingResult> {
  const maxAttempts = 3

  let attempts = 0
  let last = { ok: false, latencyMs: 0 }

  for (attempts = 1; attempts <= maxAttempts; attempts++) {
    last = await tryOnce(url)
    if (last.ok) break
  }

  return { url, ok: last.ok, latencyMs: last.latencyMs, attempts }
}
