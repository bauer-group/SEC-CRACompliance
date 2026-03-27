// JSON reporter — machine-readable output

export function formatJson(result) {
  return JSON.stringify({
    $schema: 'https://cra.docs.bauer-group.com/schemas/cra-check/v1.0.0',
    generatedAt: result.generatedAt,
    product: result.product,
    checks: result.checks.map(c => ({
      name: c.name,
      status: c.status,
      details: c.details,
    })),
    complianceScore: {
      score: result.score,
      maxScore: result.maxScore,
      passed: result.passed,
      minScore: result.minScore,
      breakdown: result.breakdown,
    },
  }, null, 2)
}
