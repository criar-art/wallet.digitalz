import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import ModalDelete from './index.vue'

const wrapper = shallowMount(ModalDelete, {
  propsData: {
    register: {
      id: 'test-1',
      type: { label: 'Investiment', value: 'investiment' },
      date: '1994-09-21',
      name: 'Test',
      value: 1000,
      description: 'Descriiption test example spec',
      pay: false
    }
  }
})

describe('Basic render ModalDelete', () => {
  it('is ModalDelete a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
