module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
    'eslint:recommended' // Use ESLint's built-in recommended rules
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
    ]
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js'
    }
  ]
};

