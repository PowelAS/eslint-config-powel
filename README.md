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

## Composition

You can use any combination of these presets.

Install the dependencies:

```sh
npm i -D eslint eslint-config-powel eslint-config-semistandard babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-react
```

`.eslintrc`:

```js
{
  "extends": [
    "powel",
    "powel/babel",
    "powel/import",
    "powel/react"
  ],
  "rules": {
    // custom tweaks
  }
}
```