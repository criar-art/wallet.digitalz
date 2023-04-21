import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import PanelRegisters from './index.vue'

const wrapper = shallowMount(PanelRegisters)

describe('Basic render PanelRegisters', () => {
  it('is PanelRegisters a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
