<template>
  <div class="pa-sm-10 pa-4 pt-6 background-world">
    <v-card class="highlight-top pa-4 mb-4 elevation-2">
      <h2 class="mb-2 text-h5">
        <v-icon class="mr-2" icon="mdi-earth" />
        {{ $t('contact.title') }}
      </h2>
      <p class="text-body-1 mb-2">
        {{ $t('contact.text1') }}
      </p>
      <p class="text-body-1 mt-2">
        {{ $t('contact.text2') }}
      </p>
      <ul class="ml-4">
        <li class="text-body-1 mt-2">
          <a
            class="text-link"
            href="mailto:contato@criar.art"
          >
            contato@criar.art
          </a>
        </li>
        <li class="text-body-1 mt-2">
          <a
            class="text-link"
            href="mailto:lucasferreiralimax@gmail.com"
          >
            lucasferreiralimax@gmail.com
          </a>
        </li>
        <li class="text-body-1 mt-2">
          <a
            class="text-link"
            href="https://lucas-frontend.web.app/contact"
            target="_blank"
          >
            lucas-frontend.web.app/contact
          </a>
        </li>
        <li class="text-body-1 mt-2">
          <a
            class="text-link"
            href="https://www.linkedin.com/in/lucasferreiralimax"
            target="_blank"
          >
            linkedin.com/in/lucasferreiralimax
          </a>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<style>
.background-world {
  min-height: 100vh;
}

.background-world .v-card {
  max-width: 330px;
  margin: 0 auto;
}

.background-world::before {
  pointer-events: none;
  content: '';
  width: 100%;
  display: flex;
  background-size: cover;
  background-position: -200px bottom !important;
  min-height: 100vh;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@media (min-width: 600px) {
  .background-world::before {
    width: calc(100% - 220px);
    margin-left: 220px;
    background-position: -200px bottom !important;
  }
}
</style>
