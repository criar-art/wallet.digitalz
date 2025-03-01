import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Language from './index.vue'

const wrapper = mount(Language)

describe('Basic render Language', () => {
  it('is Language a vue instance', () => {
    console.log(wrapper.vm)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('check label language with pt-BR', () => {
    expect(wrapper.text()).toContain('Idioma pt-BRIdioma')
  })
})
