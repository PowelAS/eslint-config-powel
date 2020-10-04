# 7.2.0 2020-10-04

- Added: patch for enabling ESLint modern module resolution

# 7.1.0 2020-08-03

- Changed: use `@babel/eslint-parser`

# 7.0.0 2020-06-12

- Added: support for ESLint 7.0.0
- Added: `react-hooks` plugin to `react` config
- Changed: `react/jsx-no-bind` has been relaxed to allow for arrow functions

# 6.6.2 2020-04-09

- Added: specify `react/sort-comp` order with `static-variables` included

# 6.5.0 2020-04-03

- Added: extend react config with `prettier/react`

# 6.4.3 2019-11-13

- Fixed: change webpack resolver config path to `webpack.eslint.js`

# 6.4.2 2019-11-13

- Fixed: change webpack resolver config path to `.babel.js` for auto transpilation

# 6.4.1 2019-11-13

- Fixed: add missing webpack module resolution plugin

# 6.4.0 2019-11-12

- Removed: `import/no-cycle` rule
- Fixed: `import/order` now correctly recognizes modules as "external" when using Typescript

# 6.3.0 2019-11-08

- Added: more `eslint-plugin-import` rules

# 6.2.1 2019-09-19

- Removed: `@typescript-eslint/explicit-function-return-type` rule

# 6.2.0 2019-09-19

- Changed: upgrade to `@typescript-eslint` 2

# 6.1.0 - 2019-09-09

- Changed: `eslint-config-standard` has been updated to `~14.1.0`
- Security: upgrade `eslint` to fix security issue

# 6.1.0 - 2019-09-09

- Changed: `eslint-config-standard` has been updated to `~14.1.0`
- Security: upgrade `eslint` to fix security issue

# 6.0.0 - 2019-07-12

- Added: support for ESLint 6.0.0

# 5.3.0 - 2019-02-25

- Changed: migrate deprecated `typescript-eslint-parser` and `eslint-plugin-typescript` to
  `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`

# 5.2.0 - 2019-02-13

- Added: disabled JS specific rules for TypeScript files in `react` preset

# 5.1.0 - 2018-12-19

- Added: TypeScript config

# 5.0.0 - 2018-09-11

- Added: support for ESLint 5.0.0

# 4.0.0 - 2018-04-08

- Added: `camelCase` option for `css-loader`

# 3.1.0 - 2018-03-28

- Added: `babel` preset

# 3.0.0 - 2018-03-28

- Removed: `babel` preset
- Added: support for ESLint 4.0.0

# 2.1.0 - 2017-04-19

- Removed: `eslint-plugin-standard` rules that might conflict with `prettier`

# 2.0.0 - 2017-04-18

- Changed: `eslint-config-standard` has been updated to `~10.2.1`
- Added: `eslint-config-prettier` and `eslint-plugin-prettier`
- Removed: rules that might conflict with `prettier`
