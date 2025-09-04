import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue', '*.js', '**/*.js'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        alert: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'test-setup/**'],
  },
];
