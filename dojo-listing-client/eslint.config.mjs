import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: [
      '.config/',
      'dist/',
      'tsconfig.json',
      './apiOld/',
      './components/ui/',
    ], // acts as global ignores, due to the absence of other properties
  },
  antfu({
    stylistic: {
      semi: false,
      singleQuote: true,
    },
  }),
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
)
