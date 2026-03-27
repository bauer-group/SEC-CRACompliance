// Main orchestrator — runs all checks and computes score

import { checkLocal } from './local.js'
import { checkRemote } from './github.js'
import { calculateScore } from './scorer.js'

export async function runChecks(args) {
  const artifacts = args.remote
    ? await checkRemote(args.target, args)
    : await checkLocal(args.target)

  const score = calculateScore(artifacts)

  return {
    product: artifacts.product,
    checks: artifacts.checks,
    score: score.score,
    maxScore: 100,
    breakdown: score.breakdown,
    passed: score.score >= args.minScore,
    minScore: args.minScore,
    generatedAt: new Date().toISOString(),
  }
}
