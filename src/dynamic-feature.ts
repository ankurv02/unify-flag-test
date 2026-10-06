import Rox from "rox-node"

// The full flag key is assembled at runtime from the caller's argument —
// no literal string in this file equals the full key any dynamic-API call
// site evaluates. Deliberately unresolvable by mechanical substitution.
export function isFeatureEnabled(featureName: string): boolean {
  const flagKey = `feature.${featureName}`
  return Rox.dynamicApi().isEnabled(flagKey, false)
}

export function betaExportEnabled(): boolean {
  return isFeatureEnabled("betaExport")
}
