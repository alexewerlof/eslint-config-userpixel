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

module.exports = { hasPrefix, pluginShortName, pluginLongName };
