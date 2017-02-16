const { makeConfig } = require('./lib/api.js');

module.exports = makeConfig({
  node: true,
  plugins: ['mocha', 'chai', 'node'],
  env: ['mocha'],
  unmagicalNumbers: [5, 6] // ecma versions are used a lot in this code base
});