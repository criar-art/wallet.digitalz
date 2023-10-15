<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import InfoCards from '@/components/InfoCards/index.vue'
import PanelRegisters from '@/components/PanelRegisters/index.vue'

const wallet = useWalletStore()
</script>

<template>
  <InfoCards />
  <v-row
    v-if="wallet.getEntrys.length || wallet.getInvestiments.length || wallet.getExpenses.length  || wallet.getVehicles.length"
  >
    <v-col
      v-if="wallet.getEntrys.length"
      class="v-col-12 v-col-md-6 v-col-xl-4"
    >
      <PanelRegisters
      v-if="wallet.getEntrys.length"
      type="entry"
      :registers="wallet.getEntrys"
      />
    </v-col>
    <v-col
      v-if="wallet.getInvestiments.length"
      class="v-col-12 v-col-md-6 v-col-xl-4"
    >
      <PanelRegisters
        v-if="wallet.getInvestiments.length"
        type="investiment"
        :registers="wallet.getInvestiments"
      />
    </v-col>
    <v-col
      v-if="wallet.getExpenses.length"
      class="v-col-12 v-col-md-6 v-col-xl-4"
    >
      <PanelRegisters
        v-if="wallet.getExpenses.length"
        type="expense"
        :registers="wallet.getExpenses"
      />
    </v-col>
    <v-col
      v-if="wallet.getTrucks.length"
      class="v-col-12 v-col-md-6 v-col-xl-4"
    >
      <PanelRegisters
        v-if="wallet.getTrucks.length"
        type="truck"
        :registers="wallet.getTrucks"
      />
    </v-col>
    <v-col
      v-if="wallet.getVehicles.length"
      class="v-col-12 v-col-md-6 v-col-xl-4"
    >
      <PanelRegisters
        v-if="wallet.getVehicles.length"
        type="vehicle"
        :registers="wallet.getVehicles"
      />
    </v-col>
    <v-col
      v-if="wallet.getMotorcycle.length"
      class="v-col-12 v-col-md-6 v-col-xl-4"
    >
      <PanelRegisters
        v-if="wallet.getMotorcycle.length"
        type="motorcycle"
        :registers="wallet.getMotorcycle"
      />
    </v-col>
  </v-row>
</template>
