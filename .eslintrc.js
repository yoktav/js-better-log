module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 140,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
