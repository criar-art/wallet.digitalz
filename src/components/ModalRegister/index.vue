<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { v4 as uuidv4 } from 'uuid';
import { useDisplay } from 'vuetify'
import { useWalletStore } from '@/stores/wallet'
import { parseMoney } from '@/utils'
import { TypeRegister, Register } from '@/types'

const { t, locale } = useI18n()
const { xs } = useDisplay()
const props = defineProps<{ update?: boolean, register?: Register }>()
const wallet = useWalletStore()
const dialog = ref<boolean>(false)
const valid = ref<boolean>(false)
const myForm = ref()
const typeRegister = ref<TypeRegister | undefined>(props.register ? props.register.type : undefined)
const date = ref<string | undefined>(props.register ? props.register.date : new Date().toISOString().slice(0, 10))
const name = ref<string | undefined>(props.register ? props.register.name : undefined)
const value = ref<number | undefined>(props.register ? props.register.value : undefined)
const description = ref<string | undefined>(props.register ? props.register.description : undefined)
const pay = ref<boolean | undefined>(props.register ? props.register.pay : false)

const sizeLimitMoney = 9999999.99;
const limitMoney = parseMoney(sizeLimitMoney, locale.value, true)

const typeRules = [
  (v: string) => !!v || t('register.form.rules.type.required')
]

const dateRules = [
  (v: string) => !!v || t('register.form.rules.date.required'),
]

const nameRules = [
  (v: string) => !!v || t('register.form.rules.name.required'),
  (v: string) => v.length <= 15 || t('register.form.rules.name.less'),
]

const valueRules = [
  (v: string) => !!v || t('register.form.rules.value.required'),
  (v: number) => v <= sizeLimitMoney || t('register.form.rules.value.less', { value: limitMoney })
]

function close() {
  if (!props.update) myForm.value.reset()
  dialog.value = false
}

async function validate() {
  const { valid } = await myForm.value.validate()

  if (valid) {
    const formData = {
      name: name.value,
      type: typeRegister.value,
      value: value.value,
      date: date.value,
      description: description.value,
      pay: pay.value
    }

    if (props.update) {
      wallet.editRegister({
        id: props.register?.id,
        ...formData
      })
    } else {
      wallet.newRegister({
        id: uuidv4(),
        ...formData
      })
    }

    close()
  }
}
</script>

<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn v-if="!update" color="success" v-bind="props" variant="flat" class="mr-sm-10 mr-4 teste"
        aria-label="New register" :size="xs ? 'small' : undefined">
        <v-icon class="mr-2" icon="mdi-plus" />
        {{ $t('actions.register') }}
      </v-btn>
      <v-btn v-if="update" color="success" v-bind="props" size="x-small" icon="mdi-pencil" />
    </template>
    <v-card class="mx-auto pa-4" max-width="600" width="100%">
      <v-card-title>
        <span class="text-h5">{{ update ? $t('register.update') : $t('register.create') }}</span>
      </v-card-title>
      <v-card-text>
        <v-container class="pa-0">
          <v-form v-model="valid" ref="myForm">
            <v-row>
              <v-col cols="12" sm="6" class="pa-0 pr-sm-2">
                <v-text-field aria-label="Date of register" :label="$t('register.form.date')" type="date" v-model="date"
                  :rules="dateRules" required />
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 pl-sm-2">
                <v-select aria-label="Select type register" :label="$t('register.form.type')" v-model="typeRegister"
                  :rules="typeRules" item-title="label" item-value="value" return-object required :items="[
                    { label: $t('register.form.investiment'), value: 'investiment' },
                    { label: $t('register.form.expense'), value: 'expense' },
                    { label: $t('register.form.entry'), value: 'entry' },
                    { label: $t('register.form.truck'), value: 'truck' },
                    { label: $t('register.form.vehicle'), value: 'vehicle' },
                    { label: $t('register.form.motorcycle'), value: 'motorcycle' },
                  ]" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" class="pa-0 pr-sm-2">
                <v-text-field aria-label="Name of register" :label="$t('register.form.name')" v-model="name"
                  :rules="nameRules" required />
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 pl-sm-2">
                <v-text-field aria-label="Value of register" :label="$t('register.form.value')" v-model="value"
                  prefix="$" type="number" :rules="valueRules" required />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pa-0 pb-2">
                <v-textarea aria-label="Description of register" :label="$t('register.form.description')"
                  v-model="description" :maxlength="250" />
              </v-col>
              <template v-if="typeRegister?.value == 'expense'">
                <v-checkbox aria-label="Pay of register" :label="t('register.form.pay')" v-model="pay" />
              </template>
            </v-row>
          </v-form>
        </v-container>
        <small class="d-flex mt-4">{{ $t('register.form.indicates') }}</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="error" variant="text" @click="close">
          <v-icon class="mr-2" icon="mdi-cancel" />
          {{ $t('actions.cancel') }}
        </v-btn>
        <v-btn aria-label="Create register" color="success" variant="flat" @click="validate">
          <v-icon class="mr-2" icon="mdi-check" />
          {{ update ? $t('actions.save') : $t('actions.create') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
