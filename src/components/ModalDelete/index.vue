<script setup lang="ts">
import { ref } from 'vue'
import { useWalletStore } from '@/stores/wallet'
import { Register } from '@/types'
import { parseMoney } from '@/utils'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n();
const props = defineProps<{ register: Register }>()
const dialog = ref<boolean>(false)
const wallet = useWalletStore()
</script>

<template>
  <v-dialog
    v-model="dialog"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="error"
        size="x-small"
        class="mr-2"
        icon="mdi-delete"
        v-bind="props"
      />
    </template>
    <v-card class="mx-auto pa-4">
      <v-card-title>
        <span class="text-h5">{{ $t('register.delete') }}</span>
      </v-card-title>
      <v-card-text>
        {{ $t('register.deleteMsg', { name: register.name, value: parseMoney(Number(register.value), locale, wallet.eye) }) }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          variant="text"
          @click="dialog = false"
        >
          <v-icon class="mr-2" icon="mdi-cancel" />
          {{ $t('actions.cancel') }}
        </v-btn>
        <v-btn
          color="success"
          variant="flat"
          @click="wallet.deleteRegister(register.id as string)"
        >
          <v-icon class="mr-2" icon="mdi-check" />
          {{ $t('actions.confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
