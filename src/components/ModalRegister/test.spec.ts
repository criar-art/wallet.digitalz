import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import ModalRegister from './index.vue'

const wrapper = shallowMount(ModalRegister)

describe('Basic render ModalRegister', () => {
  it('is ModalRegister a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
