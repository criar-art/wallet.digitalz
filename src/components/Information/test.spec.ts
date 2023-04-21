import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Information from './index.vue'

const wrapper = shallowMount(Information)

describe('Basic render Information', () => {
  it('is Information a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
