'use strict';

const Settings = require('./Settings');
const { getAllConfigs } = require('./rules');

/*
settings.ecmaVersion: 3, 5 (default), 6, 7, or 8
*/
function makeFullConfig(partialConfig) {
  const settings = new Settings(partialConfig);
  return Object.assign({}, partialConfig, { rules: getAllConfigs(settings) });
}

module.exports = { makeFullConfig };
