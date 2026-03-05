export function formatMoney(amount: number, currency: string) {
  try {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount)
  } catch {
    return `$${Number(amount || 0).toLocaleString('es-MX')} ${currency}`
  }
}