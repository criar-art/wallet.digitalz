<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '@/i18n'

const { locale }: any = useI18n({ useScope: 'global' });

watch(locale, (val) => {
  setI18nLanguage(String(val))
})
</script>

<template>
  <v-select
    :label="$t('language') + ' '"
    v-model="locale"
    :items="[...supportLocales]"
    density="compact"
    variant="underlined"
    hide-details="auto"
  />
</template>
