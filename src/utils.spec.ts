import { describe, expect, it } from 'vitest'
import { parseMoney } from './utils'

describe('Basic render parseMoney function', () => {
  it('is parseMoney BRL', () => {
    expect(parseMoney(1000, 'pt-BR', true)).toBe('R$ 1.000,00')
  })
  it('is parseMoney USD', () => {
    expect(parseMoney(1000, 'en-US', true)).toBe('$1,000.00')
  })
  it('is parseMoney EUR', () => {
    expect(parseMoney(1000, 'es-ES', true)).toBe('1000,00 €')
  })
  it('is parseMoney RUB', () => {
    expect(parseMoney(1000, 'ru-RU', true)).toBe('1 000,00 ₽')
  })
  it('is parseMoney CNY', () => {
    expect(parseMoney(1000, 'zh-CN', true)).toBe('¥1,000.00')
  })
})

describe('Basic render parseMoney with hidden value', () => {
  it('is parseMoney BRL', () => {
    expect(parseMoney(1000, 'pt-BR', false)).toBe('R$ ********')
  })
  it('is parseMoney USD', () => {
    expect(parseMoney(1000, 'en-US', false)).toBe('$********')
  })
  it('is parseMoney EUR', () => {
    expect(parseMoney(1000, 'es-ES', false)).toBe('******* €')
  })
  it('is parseMoney RUB', () => {
    expect(parseMoney(1000, 'ru-RU', false)).toBe('* ****** ₽')
  })
  it('is parseMoney CNY', () => {
    expect(parseMoney(1000, 'zh-CN', false)).toBe('¥********')
  })
})
