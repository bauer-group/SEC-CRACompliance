// Compliance score calculator — same algorithm as the GitHub Action

export function calculateScore(artifacts) {
  const checks = artifacts.checks || []
  const get = (name) => checks.find(c => c.name === name) || {}

  const sbom = get('SBOM')
  const signing = get('SBOM Signed')
  const vex = get('VEX Document')
  const vulns = get('Vulnerabilities')
  const policy = get('Security Policy')
  const support = get('Support Period')

  // SBOM: 20 max
  let sSbom = 0
  if (sbom.data?.generated) sSbom += 10
  if (signing.data?.signed) sSbom += 5
  if (sbom.data?.attested) sSbom += 5

  // Signing: 15 max
  let sSign = 0
  if (signing.data?.signed) sSign += 10
  if (sbom.data?.attested) sSign += 5

  // Vulnerabilities: 20 max
  let sVuln = 0
  if (vulns.status !== 'skip') {
    if ((vulns.data?.critical || 0) === 0) sVuln += 15
    if ((vulns.data?.high || 0) === 0) sVuln += 5
  }

  // VEX: 10 max
  let sVex = 0
  if (vex.data?.generated) sVex += 5
  if ((vex.data?.triaged || 0) > 0) sVex += 5

  // Security Policy: 15 max
  let sPol = 0
  if (policy.data?.present) sPol += 10
  if (policy.data?.cvdProcess) sPol += 5

  // Support Period: 10 max
  let sSup = 0
  if (support.data?.defined) sSup += 10

  // Article Coverage: 10 max
  let articlesMet = 0
  const articlesTotal = 9
  if (sbom.data?.generated) articlesMet++
  if ((vulns.data?.critical || 0) === 0) articlesMet++
  if (vulns.status !== 'skip') articlesMet++
  if (signing.data?.signed) articlesMet++
  if (policy.data?.present) articlesMet++
  if (policy.data?.cvdProcess) articlesMet++
  if (vex.data?.generated) articlesMet++
  if (support.data?.defined) articlesMet++
  if (sbom.data?.attested) articlesMet++
  const sArt = Math.round((articlesMet / articlesTotal) * 10)

  const score = sSbom + sSign + sVuln + sVex + sPol + sSup + sArt

  return {
    score,
    breakdown: {
      sbom: sSbom,
      signing: sSign,
      vulnerabilities: sVuln,
      vex: sVex,
      securityPolicy: sPol,
      supportPeriod: sSup,
      articleCoverage: sArt,
    },
  }
}
