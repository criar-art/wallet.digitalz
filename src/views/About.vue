<template>
  <v-row justify="center" class="pa-sm-10 pa-4 pt-6 ma-0 finance-world h-100 w-100">
    <v-col cols="12" lg="4">
      <v-card class="highlight-top pa-4 mb-sm-8 mb-4 elevation-2">
        <h2 class="mb-2 text-h5">
          <v-icon class="mr-2" icon="mdi-information-variant" />
          {{ $t('about.project.title') }}
        </h2>
        <p class="text-body-1">
          {{ $t('about.project.text1') }}
        </p>
        <p class="text-body-1">
          {{ $t('about.project.text2') }}
        </p>
        <p class="text-body-1">
          {{ $t('about.project.text3') }}
        </p>
        <p class="text-body-1">
          <a href="https://play.google.com/store/apps/details?id=com.criar.art.walletdigitalzapp" target="_blank">
            <img width="200" src="../assets//google-play-badge.png" alt="Download Wallet Digitalz on PlayStore"/>
          </a>
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card class="highlight-top pa-4 mb-sm-8 mb-4 elevation-2">
        <h2 class="mb-4 text-h5">
          <v-icon class="mr-2" icon="mdi-laptop" />
          {{ $t('about.tech.title') }}
        </h2>
        <p class="text-body-1">
          {{ $t('about.tech.text1') }}
        </p>
        <p class="text-body-1">
          {{ $t('about.tech.text2') }}
        </p>
        <p class="text-body-1">
          {{ $t('about.tech.text3') }}
        </p>
        <p class="text-body-1">
          {{ $t('about.tech.text4') }}
        </p>
        <p class="text-body-1">
          {{ $t('about.tech.text5') }}
          <a class="text-link" href="https://github.com/criar-art/wallet.digitalz" target="_blank">
            {{ $t('about.tech.text6') }}
          </a>
        </p>
        <p class="text-body-1">
          {{ $t('about.tech.text7') }}
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card class="highlight-top pa-4 elevation-2">
        <h2 class="mb-4 text-h5">
          <v-icon class="mr-2" icon="mdi-target" />
          {{ $t('about.objective.title') }}
        </h2>
        <ol class="list">
          <li>{{ $t('about.tech.text1') }}</li>
          <li>{{ $t('about.tech.text2') }}</li>
        </ol>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.finance-world {
  background: url('@/assets/finance.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>

