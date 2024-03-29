<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useWalletStore } from "@/stores/wallet";
import ModalDelete from "@/components/ModalDelete/index.vue";
import ModalRegister from "@/components/ModalRegister/index.vue";
import { RegisterIds, Register } from "@/types";
import { parseMoney, parseString } from "@/utils";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  type: string;
  registers: Register[];
}>();

const { t, locale } = useI18n();
const wallet = useWalletStore();
const panel = ref<RegisterIds[]>([]);
const registersLength = ref<number>(
  props.registers ? props.registers.length : 0
);
const panelChangeView = ref<boolean>(false);
const changeViewLabel = ref<string>(changeViewLabelCurrent());

function changeViewLabelCurrent() {
  return !panelChangeView.value
    ? `${t("actions.expand")} ${t(
        `register.form.${props.type}`,
        registersLength.value
      )}`
    : `${t("actions.compact")} ${t(
        `register.form.${props.type}`,
        registersLength.value
      )}`;
}

function changeView() {
  panel.value = !panelChangeView.value ? wallet.getIds : [];
  panelChangeView.value = !panelChangeView.value;
}

watch(panel, (newPanel) => {
  if (panelChangeView.value && !newPanel.length) {
    panelChangeView.value = false;
  }
  changeViewLabel.value = changeViewLabelCurrent();
});

watch(props, (newPanel) => {
  registersLength.value = newPanel.registers.length;
  changeViewLabel.value = changeViewLabelCurrent();
});

const typeColors: any = {
  investiment: "info",
  expense: "error",
  entry: "success",
  truck: "red",
  vehicle: "red",
  motorcycle: "red",
};

const conditionPay = computed(() => {
  return (
    props.type == "expense" ||
    props.type == "truck" ||
    props.type == "vehicle" ||
    props.type == "motorcycle"
  );
});
</script>

<template>
  <div class="d-flex align-start mb-2">
    <h3>{{ $t(`register.form.${type}`, registersLength) }}</h3>
    <v-btn
      class="ml-auto"
      @click="changeView"
      size="x-small"
      icon
      :aria-label="changeViewLabel"
    >
      <v-icon
        :icon="
          !panelChangeView
            ? 'mdi-arrow-expand-vertical'
            : 'mdi-arrow-collapse-vertical'
        "
      />
      <v-tooltip activator="parent" location="left">
        {{ changeViewLabel }}
      </v-tooltip>
    </v-btn>
  </div>
  <v-expansion-panels v-model="panel" :multiple="panelChangeView">
    <v-expansion-panel
      v-for="item of registers"
      :key="item.id"
      :value="item.id"
      class="register"
      :class="[`${typeColors[type]}`]"
    >
      <v-expansion-panel-title class="pl-4 pr-2">
        <span
          class="d-none d-sm-flex mr-2 font-weight-bold"
          :class="[`text-${typeColors[type]}`]"
        >
          <v-icon v-if="type == 'entry'" icon="mdi-arrow-right" />
          <v-icon v-if="type == 'investiment'" icon="mdi-timelapse" />
          <v-icon v-if="type == 'expense' && !item.pay" icon="mdi-arrow-left" />
          <v-icon
            v-if="type == 'expense' && item.pay"
            icon="mdi-check-circle"
          />
          <v-icon v-if="type == 'truck'" icon="mdi-truck" />
          <v-icon v-if="type == 'vehicle'" icon="mdi-car-hatchback" />
          <v-icon v-if="type == 'motorcycle'" icon="mdi-atv" />
        </span>
        <span
          class="mr-2 font-weight-bold"
          :class="[`text-${typeColors[type]}`]"
        >
          {{ $t(`register.form.${type}`) }}
        </span>
        <span class="text-capitalize">{{ item.name }}</span>
        <span
          class="text-value pl-2 font-weight-bold"
          :class="[`text-${typeColors[type]}`]"
        >
          {{ parseMoney(Number(item.value), locale, wallet.eye) }}
        </span>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <pre class="pt-2 font-weight-regular text-body-1 overflow-x-auto">{{
          parseString(item.description, wallet.eye)
        }}</pre>
        <p class="pt-2 font-weight-regular text-body-1 overflow-x-auto">
          <v-icon icon="mdi-calendar" />
          {{
            !wallet.eye
              ? parseString(item.date, wallet.eye)
              : new Date(
                  parseString(`${item.date}T12:00:00Z`, wallet.eye)
                ).toLocaleDateString(locale)
          }}
        </p>
        <v-col class="d-flex justify-end pa-0 mt-2" width="100%">
          <v-checkbox
            class="pay-checkbox"
            v-if="conditionPay"
            :label="parseString(t('register.form.pay'), wallet.eye)"
            v-model="item.pay"
            hide-details
          />
          <ModalDelete :register="item" />
          <ModalRegister update :register="item" />
        </v-col>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style>
.pay-checkbox {
  transform: translateX(-8px);
  margin-right: auto;
}
</style>
