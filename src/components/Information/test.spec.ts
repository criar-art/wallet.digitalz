import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Information from './index.vue'

const wrapper = mount(Information, {
  props: {
    title: 'Test information',
    type: 'investiment',
    value: '2',
  },
})

describe('Basic render Information', () => {
  it('is Information a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
