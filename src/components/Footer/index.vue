<script setup lang="ts">
import Logo from '@/components/Logo/index.vue'
import pkg from '../../../package.json'
const appVersion: string = pkg.version
</script>

<template>
  <v-footer>
    <v-row>
      <v-col class="text-center">
        <a class="footer-text text-decoration-none" href="https://lucas-frontend.web.app" target="_blank">
          <Logo  class="logo-footer mr-2"/> {{ new Date().getFullYear() }} — {{ $t('version') }} {{ appVersion }}
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style>
.logo-footer {
  transform: translateY(5px);
}
.footer-text {
  color: rgba(var(--v-theme-on-surface));
}
</style>
