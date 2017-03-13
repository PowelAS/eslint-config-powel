'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  rules: {
    // ES6 modules do not require an explicit declaration of 'strict mode'
    'strict': [2, 'never'],
    'no-var': 2,
    'prefer-const': 2,
    'generator-star-spacing': [2, 'after'],
    'array-bracket-spacing': [1, 'never'],
    'object-shorthand': [1, 'always'],
    'arrow-parens': [1, 'as-needed'],

    // https://github.com/babel/eslint-plugin-babel
    'babel/object-curly-spacing': [1, 'always']
  }
};
