<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import { parseMoney } from '@/utils'
import { useI18n } from 'vue-i18n'
import Information from '@/components/Information/index.vue'

const { locale } = useI18n()
const wallet = useWalletStore()
</script>

<template>
  <v-row v-if="wallet.getTotalPatrimony || wallet.getTotalLessExpense">
    <v-col v-if="wallet.getTotalPatrimony">
      <Information
        :title="$t('home.patrimony')"
        :value="parseMoney(wallet.getTotalPatrimony, locale, wallet.eye)"
        type="patrimony"
      />
    </v-col>
    <v-col v-if="wallet.getTotalLessExpense">
      <Information
        :title="$t('home.liquid')"
        :value="parseMoney(wallet.getTotalLessExpense, locale, wallet.eye)"
        type="liquid"
      />
    </v-col>
  </v-row>
  <v-row v-if="wallet.getEntryTotal || wallet.getExpensesTotal">
    <v-col v-if="wallet.getEntryTotal">
      <Information
        :title="$t('register.form.entry', wallet.getEntryTotal)"
        :value="parseMoney(wallet.getEntryTotal, locale, wallet.eye)"
        type="entry"
      />
    </v-col>
    <v-col v-if="wallet.getExpensesTotal">
      <Information
        :title="$t('register.form.expense', wallet.getExpensesTotal)"
        :value="parseMoney(wallet.getExpensesTotal, locale, wallet.eye)"
        type="expense"
      />
    </v-col>
  </v-row>
  <v-row v-if="wallet.getVehiclesTotal || wallet.getInvestimentTotal">
    <v-col v-if="wallet.getVehiclesTotal">
      <Information
        :title="$t('register.form.vehicle', wallet.getVehiclesTotal)"
        :value="parseMoney(wallet.getVehiclesTotal, locale, wallet.eye)"
        type="vehicle"
      />
    </v-col>
    <v-col v-if="wallet.getInvestimentTotal">
      <Information
        :title="$t('register.form.investiment', wallet.getInvestimentTotal)"
        :value="parseMoney(wallet.getInvestimentTotal, locale, wallet.eye)"
        type="investiment"
      />
    </v-col>
  </v-row>
</template>
