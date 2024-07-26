import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'no-multiple-empty-lines': [
        'error',
        { 'max': 1, 'maxBOF': 0, 'maxEOF': 1 },
      ],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],
      'no-unused-vars': 'warn',
      'no-trailing-spaces': 'error',
      'no-undef': ['error', { 'typeof': true }],
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
    },
  },
  pluginJs.configs.recommended,
];
