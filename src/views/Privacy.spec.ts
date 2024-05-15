import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Privacy from './Privacy.vue'

const wrapper = mount(Privacy)
const card = wrapper.find('.highlight-top')

describe('Basic render Privacy', () => {
  it('is Privacy a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Check if the card is rendered correctly', () => {
    expect(card.find('h2').text()).toBe('Política de Privacidade')
    expect(card.findAll('p').length).toBe(6) // Verifique se todos os parágrafos estão presentes
    expect(card.findAll('h3').length).toBe(5) // Verifique se todos os títulos secundários estão presentes
  })

  it('Check if the email contact is rendered correctly', () => {
    const emailLink = card.find('a.text-link')
    expect(emailLink.exists()).toBeTruthy()
    expect(emailLink.attributes('href')).toBe('mailto:contato@criar.art')
  })
})
