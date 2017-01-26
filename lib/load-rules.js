'use strict';

const fs = require('fs');
const { join, extname, basename } = require('path');

const rulesDir = join(__dirname, './rules');

function ruleNames() {
  // eslint-disable-next-line no-sync
  return fs.readdirSync(rulesDir)
    .filter(fileName => extname(fileName) === '.js')
    .map(fileName => basename(fileName, '.js'));
}

function load() {
  const rules = {};
  ruleNames().forEach((ruleName) => {
      // eslint-disable-next-line global-require
      rules[ruleName] = require(join(rulesDir, ruleName));
    });
  return rules;
}

function getConfig(settings) {
  const ruleFn = load();
  Object.keys(ruleFn).forEach((ruleName) => {
    const fn = ruleFn[ruleName];
    // reassign it to the values of the same object
    ruleFn[ruleName] = fn(settings);
  });
  return ruleFn;
}

module.exports = { load, getConfig };
