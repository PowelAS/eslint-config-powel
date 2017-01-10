# eslint-config-powel

[![Version npm](http://img.shields.io/npm/v/eslint-config-powel.svg?style=flat-square)](http://browsenpm.org/package/eslint-config-powel)

ESLint configuration presets for Powel projects.

## Usage

### Common

```sh
npm i -D eslint eslint-config-powel eslint-config-semistandard
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
npm i -D eslint eslint-config-powel babel-eslint eslint-plugin-babel
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

### React

To use the React rule set:

```sh
npm i -D eslint eslint-config-powel eslint-plugin-react
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
npm i -D eslint eslint-config-powel eslint-plugin-import
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

## Composition

You can use any combination of these presets.

Install the dependencies:

```sh
npm i -D eslint eslint-config-powel eslint-config-semistandard babel-eslint eslint-plugin-babel eslint-plugin-flowtype eslint-plugin-flowtype-errors eslint-plugin-import eslint-plugin-react eslint-plugin-jest
```

`.eslintrc`:

```js
{
  "extends": [
    "powel",
    "powel/babel",
    "powel/flow",
    "powel/import",
    "powel/react",
    "powel/jest"
  ],
  "rules": {
    // custom tweaks
  }
}
```
