'use strict';

const pluginPrefix = 'eslint-plugin-';

/**
* Checks if the plugin starts with "eslint-plugin-"
* @param {string} pluginName
* @return {boolean}
*/
function hasPrefix(pluginName) {
  return pluginName.indexOf(pluginPrefix) === 0;
}

/**
* Remove "eslint-plugin-" from the start of plugin name if it exists
* @param {string} pluginName
* @return {string} 
*/
function pluginShortName(pluginName) {
  return hasPrefix(pluginName) ? pluginName.substr(pluginPrefix.length) : pluginName;
}

/**
* Add "eslint-plugin-" to the start of plugin name if it's missing
* @param {string} pluginName
* @return {string} 
*/
function pluginLongName(pluginName) {
  return hasPrefix(pluginName) ? pluginName : `eslint-plugin-${pluginName}`;
}

/**
* Checks if a plugin that we support is already installed
* @param {string} pluginName
* @return {boolean}
*/
function isInstalled(pluginName) {
  try {
    // TODO this is not a good way to know if it's installed, we should check dependencies from package.json
    require(pluginLongName(pluginName));
    return true;
  } catch (requireException) {
    return false;
  }
}

module.exports = { hasPrefix, pluginShortName, pluginLongName, isInstalled };
