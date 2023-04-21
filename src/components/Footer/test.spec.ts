import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Footer from './index.vue'

const wrapper = shallowMount(Footer)

describe('Basic render Footer', () => {
  it('is Footer a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
