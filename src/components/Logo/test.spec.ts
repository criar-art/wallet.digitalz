import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Logo from './index.vue'

const wrapper = shallowMount(Logo)

describe('Basic render Logo', () => {
  it('is Logo a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('in Logo has SVG', () => {
    expect(wrapper.find('[aria-label="Logo Wallet Digitalz"]').exists()).toBeTruthy()
  })
})
