<template>
  <v-row justify="center" class="pa-sm-10 pa-4 pt-6 ma-0 h-100">
    <v-col cols="auto">
      <v-card class="highlight-top pa-4 mb-4 elevation-2" max-width="850">
        <h2 class="mb-2 text-h5">
          <v-icon class="mr-2" icon="mdi-shield-star" />
          {{ $t("privacy_policy.title") }}
        </h2>
        <p class="text-body-1 mb-2">
          {{ $t("privacy_policy.intro") }}
        </p>

        <h3 class="mb-2 text-h6">
          {{ $t("privacy_policy.info_collected.title") }}
        </h3>
        <p class="text-body-1 mb-2">
          {{ $t("privacy_policy.info_collected.content") }}
        </p>

        <h3 class="mb-2 text-h6">
          {{ $t("privacy_policy.data_responsibility.title") }}
        </h3>
        <p class="text-body-1 mb-2">
          {{ $t("privacy_policy.data_responsibility.content") }}
        </p>

        <h3 class="mb-2 text-h6">
          {{ $t("privacy_policy.information_usage.title") }}
        </h3>
        <p class="text-body-1 mb-2">
          {{ $t("privacy_policy.information_usage.content") }}
        </p>

        <h3 class="mb-2 text-h6">
          {{ $t("privacy_policy.privacy_policy_changes.title") }}
        </h3>
        <p class="text-body-1 mb-2">
          {{ $t("privacy_policy.privacy_policy_changes.content") }}
        </p>

        <h3 class="mb-2 text-h6">
          {{ $t("privacy_policy.contact.title") }}
        </h3>
        <p class="text-body-1 mb-2">
          {{ $t("privacy_policy.contact.content") }}
          <a class="text-link" href="mailto:contato@criar.art">
            contato@criar.art
          </a>
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>
