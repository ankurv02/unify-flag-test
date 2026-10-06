import Rox from "rox-node"

export const flags = {
  // Retries a failed ping up to 3 times before reporting it down.
  enableRetries: new Rox.Flag(false),
  // Output format for the report printed to stdout.
  outputFormat: new Rox.RoxString("text", ["text", "json"]),
}

export async function initFlags(sdkKey: string): Promise<void> {
  Rox.register("", flags)
  await Rox.setup(sdkKey)
}
