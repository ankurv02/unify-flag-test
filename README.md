# pulse-cli

A tiny CLI that pings a URL and reports latency/status.

```
pulse https://example.com
```

## Why this repo exists

This is an original, from-scratch test fixture for the CloudBees Unify
AI **flag-cleanup agent**. It deliberately includes a small variety of
CloudBees Feature Management (Rox) flag patterns:

| Flag | Pattern | File |
| --- | --- | --- |
| `enableRetries` | static container, boolean | `src/flags.ts`, used in `src/ping.ts` |
| `outputFormat` | static container, string/enum | `src/flags.ts`, used in `src/report.ts`; also referenced by name in `.env.example` |
| `feature.betaExport` | dynamic API, runtime-constructed key | `src/dynamic-feature.ts` — not mechanically removable; the agent should defer this one for manual review |

Not wired to a real Feature Management backend — flags evaluate to
their default values unless `PULSE_FM_SDK_KEY` is set.
