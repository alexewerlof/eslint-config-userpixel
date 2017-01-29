'use strict';

const eslint = require('eslint');

const { load, getRulesDir } = require('./load-rules.js');

function allPossibleEslintRules() {
  return eslint.linter.getRules().keys();
}

function getConfig(settings, rulesDir, allRules = {}) {
  const ruleConfigGeneratorObj = load(rulesDir);
  Object.keys(ruleConfigGeneratorObj).forEach((ruleName) => {
    const ruleConfigGenerator = ruleConfigGeneratorObj[ruleName];
    if (typeof ruleConfigGenerator === 'function') {
      allRules[ruleName] = ruleConfigGenerator(settings);
    } else {
      console.error(`Rule ${ruleName} didn't return a function`);
    }
  });
  return allRules;
}

function normalizePluginName(pluginName) {
  const pluginPrefix = 'eslint-plugin-';
  return pluginName.indexOf(pluginPrefix) !== 0 ? `eslint-plugin-${pluginName}` : pluginName;
}

function getAllConfigs(settings) {
  const rulesDir = [getRulesDir()];
  // Add supported plugin rule dirs
  if (Array.isArray(settings.plugins)) {
    // BUG only load plugin rules if we have a config for them in this repo
    settings.plugins.reduce((pluginName) => getRulesDir(normalizePluginName(pluginName)), rulesDir);
  }
  return rulesDir.reduce((allRules, ruleDir) => getConfig(settings, ruleDir, allRules), {});
}


module.exports = { allPossibleEslintRules, getAllConfigs, normalizePluginName };
