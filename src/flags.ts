import Rox from "rox-node"

export const flags = {
  // Output format for the report printed to stdout.
  outputFormat: new Rox.RoxString("text", ["text", "json"]),
}

export async function initFlags(sdkKey: string): Promise<void> {
  Rox.register("", flags)
  await Rox.setup(sdkKey)
}
