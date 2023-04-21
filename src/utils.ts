
export const parseMoney = (money: string | number, country: string, eye: boolean) => {
  const number = Number(Number(money).toFixed(2))
  const currencys: any = {
    'pt-BR': 'BRL',
    'en-US': 'USD',
    'es-ES': 'EUR',
    'ru-RU': 'RUB',
    'zh-CN': 'CNY',
    'tr-TR': 'TUR',
  }
  const value = new Intl.NumberFormat(country, { style: 'currency', currency: currencys[country] }).format(number)
  return eye ? value : value.replace(/[.,0-9]/g, "*")
}
