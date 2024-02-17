import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Footer from './index.vue'
import pkg from '../../../package.json'

describe('Basic render Footer', () => {
  const appVersion: string = pkg.version
  const wrapper = mount({
    template: '<v-layout><Footer></Footer></v-layout>'
  }, {
    global: {
      components: {
        Footer,
      }
    }
  })

  it('is Footer a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('in Footer content text Year and Version', () => {
    expect(wrapper.text()).toContain(`${ new Date().getFullYear() } — Versão ${appVersion}`)
  })
  it('in Footer has link for my Github', () => {
    expect(wrapper.find('a').attributes().href).toContain('https://github.com/lucasferreiralimax')
  })
  it('in Footer has Logo', () => {
    expect(wrapper.find('[aria-label="Logo Wallet Digitalz"]').exists()).toBeTruthy()
  })
})
