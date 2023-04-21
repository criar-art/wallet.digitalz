<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import Registers from '@/components/Registers/index.vue'

const wallet = useWalletStore()
</script>

<template>
  <div class="pa-sm-10 pa-4 pt-6">
    <Registers v-if="wallet.registers.length" />
    <template v-else>
      <h2>{{ $t('home.lets') }}</h2>
      <p>{{ $t('home.about') }}</p>
      <v-divider class="divider my-2" />
    </template>
  </div>
</template>
