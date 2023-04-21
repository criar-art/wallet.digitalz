import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Home from './Home.vue'

const wrapper = shallowMount(Home)

describe('Basic render Home', () => {
  it('is Home a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
