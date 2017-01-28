'use strict';

// Nag if the required dependency isn't installed
require('eslint-plugin-import');

// TODO this is airbnb's settings: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js

module.exports = {
  extends: './base.js',
  env: {
    'commonjs': true
  },
  /* TODO settings from airbnb
  settings:
    { 'import/resolver': { node: { extensions: [Object] } },
      'import/extensions': [ '.js', '.jsx' ],
      'import/core-modules': [],
      'import/ignore': [ 'node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$' ],
      react: { pragma: 'React', version: '0.14' } }
  */
  rules: {
    /* TODO list of all rules set by airbnb
    import/no-unresolved
    import/export
    import/no-named-as-default
    import/no-named-as-default-member
    import/no-extraneous-dependencies
    import/no-mutable-exports
    import/no-amd
    import/first
    import/no-duplicates
    import/extensions
    import/newline-after-import
    import/prefer-default-export
    import/no-absolute-path
    import/no-dynamic-require
    import/no-webpack-loader-syntax
    import/no-named-default
    */
  }
};