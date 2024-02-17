import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import PanelRegisters from './index.vue'

const wrapper = mount(PanelRegisters, {
  props: {
    type: 'investiment',
    registers: [{
      id: '1',
      type: {
        label: 'Investiment',
        value: 'investiment',
      },
      date: '21/09/1994',
      name: 'Test',
      value: 2,
      description: 'Test description of panel register',
      pay: false,
    }, {
      id: '2',
      type: {
        label: 'Investiment',
        value: 'investiment',
      },
      date: '21/09/1994',
      name: 'Test',
      value: 100,
      description: 'Test description of panel register',
      pay: true,
    }]
  },
})

describe('Basic render PanelRegisters', () => {
  it('is PanelRegisters a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Validation PanelRegisters props', () => {
    const { type, registers } = wrapper.props()

    // First Investiment
    expect(type).toContain('investiment')
    expect(registers[0].id).toContain('1')
    expect(registers[0].type).toStrictEqual({ label: 'Investiment', value: 'investiment' })
    expect(registers[0].date).toContain('21/09/1994')
    expect(registers[0].name).toContain('Test')
    expect(registers[0].value).toBe(2)
    expect(registers[0].description).toBe('Test description of panel register')
    expect(registers[0].pay).toBeFalsy()

    // Second Investment
    expect(registers[1].id).toContain('2')
    expect(registers[1].type).toStrictEqual({ label: 'Investiment', value: 'investiment' })
    expect(registers[1].date).toContain('21/09/1994')
    expect(registers[1].name).toContain('Test')
    expect(registers[1].value).toBe(100)
    expect(registers[1].description).toBe('Test description of panel register')
    expect(registers[1].pay).toBeTruthy()
  })
})
