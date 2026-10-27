import Rox from "rox-node"

export const flags = {
  // Retries a failed ping up to 3 times before reporting it down.
  enableRetries: new Rox.Flag(false),
}

export async function initFlags(sdkKey: string): Promise<void> {
  Rox.register("", flags)
  await Rox.setup(sdkKey)
}
