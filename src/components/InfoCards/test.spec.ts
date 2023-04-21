import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import InfoCards from './index.vue'

const wrapper = shallowMount(InfoCards)

describe('Basic render InfoCards', () => {
  it('is InfoCards a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
