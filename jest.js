'use strict';

module.exports = {
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  rules: {
    'max-len': 'off',
    'no-magic-numbers': 'off',
    'no-console': 'off',

    // https://github.com/jest-community/eslint-plugin-jest
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'warn'
  }
};
