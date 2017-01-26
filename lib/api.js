const Settings = require('./Settings');
const { getConfig } = require('./load-rules');

/*
settings.ecmaVersion: 3, 5 (default), 6, 7, or 8
*/
function makeFullConfig(partialConfig) {
  let settings = new Settings(partialConfig);
  return Object.assign({}, partialConfig, { rules: getConfig(settings) });
}

module.exports = { makeFullConfig };
