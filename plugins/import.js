'use strict';

// Nag if the required dependency isn't installed
require('eslint-plugin-import');

// TODO this is airbnb's settings: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js

module.exports = {
  extends: './base.js',
  env: { commonjs: true },
  /* TODO settings from airbnb
  settings:
    { 'import/resolver': { node: { extensions: [Object] } },
      'import/extensions': [ '.js', '.jsx' ],
      'import/core-modules': [],
      'import/ignore': [ 'node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$' ],
      react: { pragma: 'React', version: '0.14' } }
  */
  rules: {}
};
