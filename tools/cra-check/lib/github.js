// GitHub API client — fetches release assets and repo metadata for remote checks

export async function checkRemote(target, args) {
  const [owner, repo] = target.split('/')
  const token = args.githubToken
  const headers = { 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const api = (path) => fetch(`https://api.github.com/repos/${owner}/${repo}${path}`, { headers })

  // Get release
  const releasePath = args.release === 'latest' ? '/releases/latest' : `/releases/tags/${args.release}`
  const releaseRes = await api(releasePath)

  if (!releaseRes.ok) {
    throw new Error(`Could not fetch release for ${target}: ${releaseRes.status} ${releaseRes.statusText}`)
  }

  const release = await releaseRes.json()
  const product = { name: repo, version: release.tag_name || 'unknown' }

  // Find assets
  const assets = release.assets || []
  const findAsset = (patterns) => assets.find(a => patterns.some(p => a.name.includes(p)))

  const sbomAsset = findAsset(['sbom.cdx.json', 'sbom-source.cdx.json', 'bom.json'])
  const vexAsset = findAsset(['vex.openvex.json', 'vex.json'])
  const vulnAsset = findAsset(['vulnerability-report.json', 'trivy-results.json'])
  const reportAsset = findAsset(['cra-compliance-report.json'])

  // Download and check assets
  const checks = []

  // SBOM
  if (sbomAsset) {
    const sbom = await downloadAsset(sbomAsset.browser_download_url, headers)
    const format = sbom.bomFormat ? 'CycloneDX' : sbom.spdxVersion ? 'SPDX' : 'unknown'
    const components = (sbom.components || sbom.packages || []).length
    checks.push({ name: 'SBOM', status: 'pass', details: `${format}, ${components} components`, data: { format, components, generated: true } })
  } else {
    checks.push({ name: 'SBOM', status: 'fail', details: 'No SBOM in release assets', data: { generated: false } })
  }

  // SBOM Signing
  const sigAsset = findAsset(['.sig'])
  checks.push({
    name: 'SBOM Signed',
    status: sigAsset ? 'pass' : 'skip',
    details: sigAsset ? 'Signature present in release' : 'No signature in release assets',
    data: { signed: !!sigAsset },
  })

  // VEX
  if (vexAsset) {
    const vex = await downloadAsset(vexAsset.browser_download_url, headers)
    const total = (vex.statements || []).length
    const triaged = (vex.statements || []).filter(s => s.status !== 'under_investigation').length
    checks.push({ name: 'VEX Document', status: 'pass', details: `${total} statements (${triaged} triaged)`, data: { generated: true, total, triaged } })
  } else {
    checks.push({ name: 'VEX Document', status: 'skip', details: 'No VEX in release assets', data: { generated: false } })
  }

  // Vulnerabilities (from report asset or from compliance report)
  if (vulnAsset) {
    const report = await downloadAsset(vulnAsset.browser_download_url, headers)
    const vulns = (report.Results || []).flatMap(r => r.Vulnerabilities || [])
    const critical = vulns.filter(v => v.Severity === 'CRITICAL').length
    const high = vulns.filter(v => v.Severity === 'HIGH').length
    const status = critical > 0 ? 'fail' : high > 0 ? 'warn' : 'pass'
    checks.push({ name: 'Vulnerabilities', status, details: `${critical} critical, ${high} high`, data: { critical, high } })
  } else if (reportAsset) {
    const cr = await downloadAsset(reportAsset.browser_download_url, headers)
    const v = cr.vulnerabilities?.summary || {}
    const status = (v.critical || 0) > 0 ? 'fail' : (v.high || 0) > 0 ? 'warn' : 'pass'
    checks.push({ name: 'Vulnerabilities', status, details: `${v.critical || 0} critical, ${v.high || 0} high (from report)`, data: v })
  } else {
    checks.push({ name: 'Vulnerabilities', status: 'skip', details: 'No vulnerability data in release', data: {} })
  }

  // Security Policy (check repo)
  const secRes = await api('/contents/SECURITY.md')
  checks.push({
    name: 'Security Policy',
    status: secRes.ok ? 'pass' : 'fail',
    details: secRes.ok ? 'SECURITY.md present' : 'No SECURITY.md in repo',
    data: { present: secRes.ok },
  })

  // Support Period (from compliance report or guess)
  if (reportAsset) {
    const cr = await downloadAsset(reportAsset.browser_download_url, headers)
    const sp = cr.supportPeriod || {}
    checks.push({
      name: 'Support Period',
      status: sp.years ? 'pass' : 'warn',
      details: sp.years ? `${sp.years} years` : 'Not defined in report',
      data: { defined: !!sp.years, years: sp.years },
    })
  } else {
    checks.push({ name: 'Support Period', status: 'warn', details: 'Not determinable from release', data: { defined: false } })
  }

  return { product, checks }
}

async function downloadAsset(url, headers) {
  const res = await fetch(url, { headers: { ...headers, 'Accept': 'application/octet-stream' } })
  if (!res.ok) throw new Error(`Download failed: ${url}`)
  return res.json()
}
