import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import i18n from './i18n'
import router from './router'

import 'vuetify/styles'
import './style.css'
import '@mdi/font/css/materialdesignicons.css'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          main: '#eee'
        }
      }
    }
  }
})

createApp(App)
  .use(i18n())
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')
