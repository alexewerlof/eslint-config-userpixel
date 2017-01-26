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
    node: true,
    es6: true
  }
}, {
  csp: false,
  jsdoc: false // TODO enable later
});
