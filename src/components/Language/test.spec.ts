import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Language from './index.vue'

const wrapper = shallowMount(Language)

describe('Basic render Language', () => {
  it('is Language a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
