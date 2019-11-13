'use strict';

module.exports = {
  plugins: ['import'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    // some of the rules are inherited from
    // https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json
    'import/named': 'error',
    'import/default': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal'],
        'newlines-between': 'always'
      }
    ],
    'import/newline-after-import': 'warn',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error'
  },
  settings: {
    'import/resolver': {
      // https://github.com/benmosher/eslint-plugin-import/issues/1396
      node: {},
      webpack: {
        // https://github.com/benmosher/eslint-plugin-import/issues/799
        config: 'conf/webpack.eslint.js'
      }
    },
    'import/ignore': [
      'node_modules',
      '.json$',
      '.(css|scss)$',
      '.(jpg|png|gif|svg|html|txt|md|woff|woff2|ttf|eot)$'
    ]
  }
};
