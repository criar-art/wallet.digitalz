import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import About from './About.vue'

const wrapper = shallowMount(About)

describe('Basic render About', () => {
  it('is About a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
