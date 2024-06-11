<template>
  <v-row
    justify="center"
    class="pa-sm-10 pa-4 pt-6 ma-0 background-world h-100"
  >
    <v-col cols="auto">
      <v-card class="highlight-top pa-4 mb-4 elevation-2" max-width="450">
        <h2 class="mb-2 text-h5">
          <v-icon class="mr-2" icon="mdi-earth" />
          {{ $t("contact.title") }}
        </h2>
        <p class="text-body-1 mb-2">
          {{ $t("contact.text1") }}
        </p>
        <p class="text-body-1 mt-2">
          {{ $t("contact.text2") }}
        </p>
        <ul class="ml-4">
          <li class="text-body-1 mt-2">
            <a
              class="text-link"
              href="https://criar.art/contact"
              target="_blank"
            >
              criar.art
            </a>
          </li>
          <li class="text-body-1 mt-2">
            <a class="text-link" href="mailto:contato@criar.art">
              contato@criar.art
            </a>
          </li>
          <li class="text-body-1 mt-2">
            <a class="text-link" href="mailto:lucasferreiralimax@gmail.com">
              lucasferreiralimax@gmail.com
            </a>
          </li>
          <li class="text-body-1 mt-2">
            <a
              class="text-link"
              href="https://www.instagram.com/criar.art.tecnologia"
              target="_blank"
            >
              instagram.com/criar.art.tecnologia
            </a>
          </li>
        </ul>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.background-world {
  background: url("@/assets/world.png") no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
