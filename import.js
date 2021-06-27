'use strict';

module.exports = {
  plugins: ['import', 'simple-import-sort'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    // some of the rules are inherited from
    // https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json
    'import/named': 'error',
    'import/default': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '.json$',
      '.(css|scss)$',
      '.(jpg|png|gif|svg|html|txt|md|woff|woff2|ttf|eot)$'
    ]
  }
};
