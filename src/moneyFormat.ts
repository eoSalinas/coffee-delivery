const IntlCurrency = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function moneyFormat(value: number) {
  return IntlCurrency.format(value)
}
