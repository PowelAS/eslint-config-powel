# eslint-config-powel

[![Version npm](http://img.shields.io/npm/v/eslint-config-powel.svg?style=flat-square)](http://browsenpm.org/package/eslint-config-powel)

ESLint configuration presets for Powel projects.

## Usage

### Common

```sh
npm i -D eslint eslint-config-powel
```

Add to your `.eslintrc`

```js
{
  "extends": "powel"
}
```

### Babel

To use the Babel rule set:

```sh
npm i -D eslint eslint-config-powel babel-eslint
```

Add this to your `.eslintrc`:

```js
{
  "extends": "powel/babel"
}
```

### Flow

To use the [flow](https://flowtype.org) rule set:

```sh
npm i -D eslint eslint-config-powel babel-eslint eslint-plugin-flowtype eslint-plugin-flowtype-errors
```

Add this to your `.eslintrc`:

```js
{
  "extends": "powel/flow"
}
```

### TypeScript

To use the [TypeScript](https://www.typescriptlang.org/) rule set:

```sh
npm i -D eslint eslint-config-powel @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

Add this to your `.eslintrc`:

```js
{
  "extends": "powel/typescript"
}
```

### React

To use the React rule set:

```sh
npm i -D eslint eslint-config-powel eslint-plugin-react eslint-plugin-react-hooks
```

Add this to your `.eslintrc`:

```js
{
  "extends": "powel/react"
}
```

### Import

To use the `eslint-plugin-import` rule set:

```sh
npm i -D eslint eslint-config-powel
```

Add this to your `.eslintrc`:

```js
{
  "extends": "powel/import"
}
```

### Jest

To use the [Jest](http://facebook.github.io/jest/) rule set:

```sh
npm i -D eslint eslint-config-powel eslint-plugin-jest
```

Add this to your `.eslintrc`:

```js
{
  "extends": "powel/jest"
}
```

### Mocha

To use the [Mocha](https://mochajs.org/) rule set:

```sh
npm i -D eslint eslint-config-powel
```

Add this to your `.eslintrc`:

```js
{
  "extends": "powel/mocha"
}
```

### css-modules

To use the `eslint-plugin-css-modules` rule set:

```sh
npm i -D eslint eslint-config-powel eslint-plugin-css-modules
```

Add this to your `.eslintrc`:

```js
{
  "extends": "powel/css-modules"
}
```

## Composition

You can use any combination of these presets.

Install the dependencies:

```sh
npm i -D eslint eslint-config-powel babel-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-jest eslint-plugin-css-modules
```

`.eslintrc`:

```js
{
  "extends": [
    "powel",
    "powel/babel",
    "powel/import",
    "powel/typescript",
    "powel/react",
    "powel/jest",
    "powel/css-modules"
  ],
  "rules": {
    // custom tweaks
  }
}
```

## Patch

Our shareable config uses rules from external plugins such as `eslint-plugin-prettier`.
This patch improves how ESLint loads plugins when working for example in a monorepo,
see: https://github.com/eslint/eslint/issues/3458


`.eslintrc.js`

```js
// Patch ESLint module resolution to find shared configs' plugins
require('eslint-config-powel/patch/modern-module-resolution');

module.exports = {
  extends: ['powel'],
};
```
