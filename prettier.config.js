/* eslint-env node */

module.exports = {
  ...require('@everlane/prettier-config'),

  overrides: [
    {
      files: '*.tsx',
      options: { parser: 'typescript' },
    },
  ],
}
