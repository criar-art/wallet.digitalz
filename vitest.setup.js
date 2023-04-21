import { config } from '@vue/test-utils'
import { vi } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from "vuetify";
import i18n from '@/i18n'

config.global.plugins = [
  createTestingPinia({ createSpy: vi.fn() }),
  createVuetify(),
  i18n()
]
