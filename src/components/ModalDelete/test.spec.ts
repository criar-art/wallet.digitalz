import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import ModalDelete from './index.vue'

const mockRegister = {
  id: 'test-1',
  type: { label: 'Investiment', value: 'investiment' },
  date: '1994-09-21',
  name: 'Test',
  value: 1000,
  description: 'Description test example spec',
  pay: false
}

const wrapper = shallowMount(ModalDelete, {
  propsData: { register: mockRegister }
})

describe('Basic render ModalDelete', () => {
  it('is ModalDelete a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Validation ModalDelete props', () => {
    const propsRegister = wrapper.props().register
    const { id, date, name, description, type, value, pay } = propsRegister
    expect(propsRegister).toStrictEqual(mockRegister)
    expect(id).toContain('test-1')
    expect(type).toStrictEqual({ label: 'Investiment', value: 'investiment' })
    expect(date).toContain('1994-09-21')
    expect(name).toContain('Test')
    expect(value).toBe(1000)
    expect(description).toBe('Description test example spec')
    expect(pay).toBeFalsy()
  })
})
