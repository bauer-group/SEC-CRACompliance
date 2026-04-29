/**
 * Ersetzt {placeholder}-Tokens in einem String durch Werte aus einem
 * Datenobjekt. Wird von den Regulatory-Status-Komponenten genutzt, um
 * lokalisierte Label-Templates mit zentralen Daten zu füllen.
 *
 * Beispiel:
 *   interpolate('Lieferung bis {fullDelivery}', { fullDelivery: '2026-10-30' })
 *   → 'Lieferung bis 2026-10-30'
 */
export function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = values[key]
    return value !== undefined ? String(value) : match
  })
}
