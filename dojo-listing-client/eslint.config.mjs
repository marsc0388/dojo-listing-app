import antfu from '@antfu/eslint-config'
// import pluginVue from "eslint-plugin-vue";
import prettier from 'eslint-plugin-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: ['.config/', 'dist/', 'tsconfig.json', './apiOld/'], // acts as global ignores, due to the absence of other properties
  },
  antfu({
    // ...@antfu/eslint-config options
  }),
  // Prettier config
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
)
