// Argument parser — zero dependencies, uses process.argv directly

export function parseArgs(argv) {
  const args = {
    target: '.',
    format: 'terminal',
    ci: false,
    minScore: 70,
    githubToken: process.env.GITHUB_TOKEN || '',
    release: 'latest',
    color: true,
    verbose: false,
    help: false,
    version: false,
  }

  let i = 0
  while (i < argv.length) {
    const arg = argv[i]

    if (arg === '-h' || arg === '--help') {
      args.help = true
    } else if (arg === '-v' || arg === '--version') {
      args.version = true
    } else if (arg === '--ci') {
      args.ci = true
    } else if (arg === '--verbose') {
      args.verbose = true
    } else if (arg === '--no-color') {
      args.color = false
    } else if (arg === '--format' && argv[i + 1]) {
      args.format = argv[++i]
    } else if (arg === '--min-score' && argv[i + 1]) {
      args.minScore = parseInt(argv[++i], 10)
    } else if (arg === '--github-token' && argv[i + 1]) {
      args.githubToken = argv[++i]
    } else if (arg === '--release' && argv[i + 1]) {
      args.release = argv[++i]
    } else if (!arg.startsWith('-')) {
      args.target = arg
    }

    i++
  }

  // Detect remote mode: target contains '/' but is not a local path
  args.remote = args.target.includes('/') && !args.target.startsWith('.') && !args.target.startsWith('/')
    && !args.target.includes('\\')

  return args
}
