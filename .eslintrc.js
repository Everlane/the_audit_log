const prettierConfig = require('./prettier.config')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'testing-library'],
  extends: ['next/core-web-vitals', 'plugin:@next/next/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'app/pages/'],
    'prettier/prettier': ['error', prettierConfig],
  },
}
