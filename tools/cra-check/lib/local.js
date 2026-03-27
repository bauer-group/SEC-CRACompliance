// Local filesystem scanner — checks for CRA artifacts in a directory

import { readFileSync, existsSync } from 'node:fs'
import { join, basename, resolve } from 'node:path'

export async function checkLocal(targetDir) {
  const dir = resolve(targetDir)
  const product = detectProduct(dir)
  const checks = []

  // SBOM
  const sbomPath = findFile(dir, ['sbom.cdx.json', 'sbom-source.cdx.json', 'bom.json'])
  const sbom = checkSbom(sbomPath)
  checks.push(sbom)

  // SBOM Signing
  checks.push(checkSigning(sbomPath, dir))

  // VEX
  const vexPath = findFile(dir, ['vex.openvex.json', 'security/vex.openvex.json'])
  checks.push(checkVex(vexPath))

  // Vulnerabilities
  const vulnPath = findFile(dir, ['vulnerability-report.json', 'trivy-results.json'])
  checks.push(checkVulnerabilities(vulnPath))

  // Security Policy
  checks.push(checkSecurityPolicy(dir))

  // Support Period
  checks.push(checkSupportPeriod(dir))

  return { product, checks }
}

function detectProduct(dir) {
  const name = basename(dir)
  let version = 'unknown'

  const pkgPath = join(dir, 'package.json')
  if (existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
      return { name: pkg.name || name, version: pkg.version || version }
    } catch { /* ignore */ }
  }

  return { name, version }
}

function findFile(dir, candidates) {
  for (const file of candidates) {
    const full = join(dir, file)
    if (existsSync(full)) return full
  }
  return null
}

function readJson(path) {
  if (!path || !existsSync(path)) return null
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    return null
  }
}

function checkSbom(sbomPath) {
  if (!sbomPath) {
    return { name: 'SBOM', status: 'fail', details: 'No SBOM file found', data: {} }
  }

  const sbom = readJson(sbomPath)
  if (!sbom) {
    return { name: 'SBOM', status: 'fail', details: 'Invalid SBOM JSON', data: {} }
  }

  const format = sbom.bomFormat ? 'CycloneDX' : sbom.spdxVersion ? 'SPDX' : 'unknown'
  const components = (sbom.components || sbom.packages || []).length

  return {
    name: 'SBOM',
    status: components > 0 ? 'pass' : 'warn',
    details: `${format}, ${components} components`,
    data: { format, components, generated: true },
  }
}

function checkSigning(sbomPath, dir) {
  if (!sbomPath) {
    return { name: 'SBOM Signed', status: 'skip', details: 'No SBOM to verify', data: { signed: false } }
  }

  const sigPath = sbomPath + '.sig'
  const certPath = sbomPath + '.cert'
  const hasSig = existsSync(sigPath)
  const hasCert = existsSync(certPath)

  if (hasSig && hasCert) {
    return { name: 'SBOM Signed', status: 'pass', details: 'Cosign signature + certificate present', data: { signed: true } }
  } else if (hasSig) {
    return { name: 'SBOM Signed', status: 'warn', details: 'Signature present, certificate missing', data: { signed: true } }
  }

  return { name: 'SBOM Signed', status: 'skip', details: 'No signature found', data: { signed: false } }
}

function checkVex(vexPath) {
  if (!vexPath) {
    return { name: 'VEX Document', status: 'skip', details: 'No VEX file found', data: { generated: false } }
  }

  const vex = readJson(vexPath)
  if (!vex || !vex.statements) {
    return { name: 'VEX Document', status: 'fail', details: 'Invalid VEX format', data: { generated: false } }
  }

  const total = vex.statements.length
  const triaged = vex.statements.filter(s => s.status !== 'under_investigation').length

  return {
    name: 'VEX Document',
    status: 'pass',
    details: `${total} statements (${triaged} triaged)`,
    data: { generated: true, total, triaged },
  }
}

function checkVulnerabilities(vulnPath) {
  if (!vulnPath) {
    return { name: 'Vulnerabilities', status: 'skip', details: 'No scan report found', data: {} }
  }

  const report = readJson(vulnPath)
  if (!report) {
    return { name: 'Vulnerabilities', status: 'fail', details: 'Invalid report', data: {} }
  }

  const vulns = (report.Results || []).flatMap(r => r.Vulnerabilities || [])
  const critical = vulns.filter(v => v.Severity === 'CRITICAL').length
  const high = vulns.filter(v => v.Severity === 'HIGH').length
  const medium = vulns.filter(v => v.Severity === 'MEDIUM').length
  const low = vulns.filter(v => v.Severity === 'LOW').length

  const status = critical > 0 ? 'fail' : high > 0 ? 'warn' : 'pass'
  const details = `${critical} critical, ${high} high, ${medium} medium, ${low} low`

  return { name: 'Vulnerabilities', status, details, data: { critical, high, medium, low } }
}

function checkSecurityPolicy(dir) {
  const candidates = ['SECURITY.md', 'docs/SECURITY.md', '.github/SECURITY.md']

  for (const file of candidates) {
    const full = join(dir, file)
    if (existsSync(full)) {
      const content = readFileSync(full, 'utf8')
      const hasCvd = /disclosure|coordinated|CVD|responsible/i.test(content)

      return {
        name: 'Security Policy',
        status: 'pass',
        details: `SECURITY.md present${hasCvd ? ' with CVD process' : ''}`,
        data: { present: true, cvdProcess: hasCvd },
      }
    }
  }

  return { name: 'Security Policy', status: 'fail', details: 'No SECURITY.md found', data: { present: false, cvdProcess: false } }
}

function checkSupportPeriod(dir) {
  // Check package.json for CRA config, or cra-config.json
  const craConfig = findFile(dir, ['cra-config.json', '.cra.json'])
  if (craConfig) {
    const config = readJson(craConfig)
    if (config?.supportPeriod) {
      return {
        name: 'Support Period',
        status: 'pass',
        details: `${config.supportPeriod.years || config.supportPeriod} years`,
        data: { defined: true, years: config.supportPeriod.years || config.supportPeriod },
      }
    }
  }

  // Check SECURITY.md for support mentions
  const secPaths = ['SECURITY.md', 'docs/SECURITY.md']
  for (const file of secPaths) {
    const full = join(dir, file)
    if (existsSync(full)) {
      const content = readFileSync(full, 'utf8')
      const match = content.match(/support(?:ed)?\s+(?:for\s+)?(\d+)\s*years?/i)
      if (match) {
        return {
          name: 'Support Period',
          status: 'pass',
          details: `${match[1]} years (from SECURITY.md)`,
          data: { defined: true, years: parseInt(match[1]) },
        }
      }
    }
  }

  return { name: 'Support Period', status: 'warn', details: 'Not explicitly defined (CRA requires min. 5 years)', data: { defined: false } }
}
