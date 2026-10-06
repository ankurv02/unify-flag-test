#!/usr/bin/env node
import { betaExportEnabled } from "./dynamic-feature.js"
import { initFlags } from "./flags.js"
import { ping } from "./ping.js"
import { formatReport, helpFormatLabel } from "./report.js"

async function main(): Promise<void> {
  const sdkKey = process.env.PULSE_FM_SDK_KEY
  if (sdkKey) {
    await initFlags(sdkKey)
  }

  const url = process.argv[2]
  if (!url) {
    console.log(`Usage: pulse <url>  (report format controlled by flag: ${helpFormatLabel()})`)
    process.exit(1)
  }

  const result = await ping(url)
  console.log(formatReport(result))

  if (betaExportEnabled()) {
    console.log("[beta] export feature is enabled for this run")
  }

  process.exit(result.ok ? 0 : 1)
}

main()
