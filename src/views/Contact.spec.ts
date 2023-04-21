import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Contact from './Contact.vue'

const wrapper = shallowMount(Contact)

describe('Basic render Contact', () => {
  it('is Contact a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
