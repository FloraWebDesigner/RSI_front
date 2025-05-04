// export default {
//   ignores: ["**/*"] 
// }

// eslint.config.js
import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    ignores: ['**/.next/**', '**/node_modules/**'] 
  },
  eslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {

      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      ...nextPlugin.configs['core-web-vitals'].rules
    }
  }
];