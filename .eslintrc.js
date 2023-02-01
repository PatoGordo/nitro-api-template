module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "import/default": "off",
    "import/namespace": "off",
    "import/order": "off",
    "import/no-duplicates": "off",
    "import/named": "off",
    "require-await": "off",
    "no-useless-constructor": "off",
    "no-useless-catch": "off",
    "no-useless-escape": "off",
    "import/no-named-as-default-member": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
