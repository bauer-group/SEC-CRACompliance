#!/usr/bin/env node

// =============================================================================
// cra-check — CRA Compliance Checker
// =============================================================================
// Checks a GitHub repository or local directory for CRA compliance artifacts.
//
// Usage:
//   cra-check [target]              # owner/repo or local path (default: .)
//   cra-check --format json         # JSON output
//   cra-check --ci --min-score 70   # CI mode with threshold
//
// Environment:
//   GITHUB_TOKEN — GitHub token for API access (or --github-token)
// =============================================================================

import { parseArgs } from '../lib/args.js'
import { runChecks } from '../lib/index.js'
import { formatTerminal } from '../lib/reporters/terminal.js'
import { formatJson } from '../lib/reporters/json.js'

const args = parseArgs(process.argv.slice(2))

if (args.help) {
  console.log(`
  cra-check — CRA Compliance Checker (BAUER GROUP)

  Usage:
    cra-check [target]                GitHub repo (owner/repo) or local path
                                      Default: current directory (.)

  Options:
    --format <terminal|json>          Output format (default: terminal)
    --ci                              CI mode: exit 1 if below min-score
    --min-score <n>                   Minimum score to pass (default: 70)
    --github-token <token>            GitHub token (or GITHUB_TOKEN env)
    --release <tag>                   Check specific release (default: latest)
    --no-color                        Disable terminal colors
    --verbose                         Show detailed output
    -h, --help                        Show this help
    -v, --version                     Show version
  `)
  process.exit(0)
}

if (args.version) {
  const { readFileSync } = await import('node:fs')
  const { fileURLToPath } = await import('node:url')
  const { dirname, join } = await import('node:path')
  const dir = dirname(fileURLToPath(import.meta.url))
  const pkg = JSON.parse(readFileSync(join(dir, '..', 'package.json'), 'utf8'))
  console.log(`cra-check v${pkg.version}`)
  process.exit(0)
}

try {
  const result = await runChecks(args)

  if (args.format === 'json') {
    console.log(formatJson(result))
  } else {
    console.log(formatTerminal(result, { color: args.color, verbose: args.verbose }))
  }

  if (args.ci && !result.passed) {
    process.exit(1)
  }
} catch (err) {
  console.error(`Error: ${err.message}`)
  if (args.verbose) console.error(err.stack)
  process.exit(2)
}
