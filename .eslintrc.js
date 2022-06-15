module.exports = {
  env: {
    node: true,
    jest: false,
    browser: false,
  },
  // parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   ecmaVersion: 12,
  //   sourceType: "module",
  //   ecmaFeatures: {
  //     jsx: false,
  //   },
  // },
  extends: [],
  // extends: [
  //   "plugin:prettier/recommended",
  //   "plugin:react-hooks/recommended",
  //   "plugin:@typescript-eslint/recommended",
  //   "plugin:@typescript-eslint/eslint-recommended",
  // ],
  plugins: ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  rules: {},
  // rules: {
  //   "prettier/prettier": ["error"],
  //   "import/prefer-default-export": "off",
  //   "prefer-destructuring": "off",
  //   "prefer-template": "off",
  //   "react/prop-types": "off",
  //   "react/destructuring-assignment": "off",
  //   "no-console": "off",
  //   "jsx-a11y/accessible-emoji": ["off"],
  //   "jsx-a11y/click-events-have-key-events": ["off"],
  //   "jsx-a11y/no-static-element-interactions": ["off"],
  //   "no-underscore-dangle": "off",
  //   "no-nested-ternary": "off",
  //   "no-restricted-syntax": "off",
  //   "no-plusplus": "off",
  //   // "simple-import-sort/imports": "error",
  //   "unused-imports/no-unused-imports": "off",
  //   "@typescript-eslint/explicit-function-return-type": "off",
  //   "@typescript-eslint/explicit-module-boundary-types": "off",
  //   "@typescript-eslint/ban-ts-comment": "off",
  //   "@typescript-eslint/ban-ts-ignore": "off",
  // },
  ignorePatterns: ["build", "node_modules"],
  globals: {
    React: false,
    JSX: false,
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
      rules: {
        "no-undef": "error",
      },
    },
  ],
};
