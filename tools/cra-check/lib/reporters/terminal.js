// Terminal reporter — ANSI-colored output for human consumption

const RESET = '\x1b[0m'
const BOLD = '\x1b[1m'
const DIM = '\x1b[2m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const RED = '\x1b[31m'
const CYAN = '\x1b[36m'
const GRAY = '\x1b[90m'

export function formatTerminal(result, opts = {}) {
  const c = opts.color !== false
  const b = (s) => c ? `${BOLD}${s}${RESET}` : s
  const g = (s) => c ? `${GREEN}${s}${RESET}` : s
  const y = (s) => c ? `${YELLOW}${s}${RESET}` : s
  const r = (s) => c ? `${RED}${s}${RESET}` : s
  const d = (s) => c ? `${DIM}${s}${RESET}` : s
  const cy = (s) => c ? `${CYAN}${s}${RESET}` : s

  const lines = []
  const p = result.product

  lines.push('')
  lines.push(b(`  CRA Compliance: ${p.name} ${p.version}`))
  lines.push(d('  ══════════════════════════════════════════'))
  lines.push('')

  for (const check of result.checks) {
    const icon = check.status === 'pass' ? g('✅ PASS')
      : check.status === 'warn' ? y('⚠️ WARN')
      : check.status === 'fail' ? r('❌ FAIL')
      : d('—  SKIP')

    const name = check.name.padEnd(20)
    lines.push(`  ${name}${icon}  ${d(check.details)}`)
  }

  lines.push('')

  // Score bar
  const score = result.score
  const filled = Math.round(score / 5)
  const empty = 20 - filled
  const bar = '█'.repeat(filled) + '░'.repeat(empty)
  const passLabel = result.passed ? g('PASS') : r('FAIL')

  const barColored = score >= 70 ? g(bar) : score >= 50 ? y(bar) : r(bar)

  lines.push(`  ${b('Score:')} ${cy(`${score}/100`)} ${barColored} ${passLabel}`)

  if (opts.verbose && result.breakdown) {
    lines.push('')
    lines.push(d('  Breakdown:'))
    for (const [key, val] of Object.entries(result.breakdown)) {
      lines.push(d(`    ${key.padEnd(20)} ${val}`))
    }
  }

  lines.push('')

  return lines.join('\n')
}
