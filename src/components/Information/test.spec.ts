import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Information from './index.vue'

const wrapper = mount(Information, {
  props: {
    title: 'Test information',
    type: 'investment',
    value: '2',
  },
})

describe('Basic render Information', () => {
  it('is Information a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Check if the props are rendered correctly', () => {
    expect(wrapper.find('.text-caption').text()).toBe('Test information');
    expect(wrapper.find('b').text()).toBe('2');
  })
  it('Check if the class is applied correctly based on the type', () => {
    expect(wrapper.classes()).toContain('highlight-top');
    expect(wrapper.classes()).toContain('investment');
  })
})
