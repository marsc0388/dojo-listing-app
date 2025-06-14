// import pluginVue from "eslint-plugin-vue";
// import prettier from "eslint-plugin-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";
import antfu from "@antfu/eslint-config";

export default withNuxt(
  ...pluginVue.configs["flat/recommended"],
  antfu({
    // ...@antfu/eslint-config options
  }),
  {
    files: ["**/*.js", "**/*.vue", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        $nuxt: "readonly",
      },
    },
    plugins: {
      // vue,
      prettier,
    },
    env: {
      node: true,
      browser: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  }
);
