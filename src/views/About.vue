<template>
  <div class="pa-sm-10 pa-4 pt-6">
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
    </v-card>
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
        <a
          class="text-link"
          href="https://github.com/lucasferreiralimax/wallet-digital"
          target="_blank"
        >
          {{ $t('about.tech.text6') }}
        </a>
      </p>
      <p class="text-body-1">
        {{ $t('about.tech.text7') }}
      </p>
    </v-card>
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
  </div>
</template>
