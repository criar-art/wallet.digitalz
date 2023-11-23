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
      pay: undefined,
    }]
  },
})

describe('Basic render PanelRegisters', () => {
  it('is PanelRegisters a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
