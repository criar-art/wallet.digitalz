/* eslint-env node */
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended'
  ],
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: [
        'cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}',
        'src/**/*.vue'
      ],
      extends: [
        'plugin:cypress/recommended'
      ],
      rules: {
        'vue/multi-word-component-names': 0,
      }
    }
  ]
}
