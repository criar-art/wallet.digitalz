import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Registers from './index.vue'

const wrapper = shallowMount(Registers)

describe('Basic render Registers', () => {
  it('is Registers a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
