'use strict';

const Settings = require('./Settings');

function makeConfig(opt) {
  return new Settings(opt).getFullConfig();
}

module.exports = { makeConfig };
