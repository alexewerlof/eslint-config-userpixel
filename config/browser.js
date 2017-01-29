'use strict';

const { makeFullConfig } = require('../lib/api');

module.exports = makeFullConfig({
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectSpread: true,
      objectLiteralDuplicateProperties: false,
      generators: true
    }
  },
  env: {
    browser: true
  }
}, {
  csp: true,
  jsdoc: false // TODO enable later
});
