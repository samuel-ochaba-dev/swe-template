// eslint.config.js

import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // 1. Base ESLint recommended rules
  {
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // 2. TypeScript-specific rules
  ...tseslint.configs.recommended,

  // 3. Prettier integration: MUST BE THE LAST ONE
  // This disables all style rules from ESLint that would conflict with Prettier.
  eslintConfigPrettier,
];
