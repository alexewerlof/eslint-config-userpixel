'use strict';

const { makeConfig } = require('../lib/api.js');

module.exports = makeConfig({
  ecmaVersion: 6,
  browser: true,
  csp: true,
  globals: ['chrome']
});
