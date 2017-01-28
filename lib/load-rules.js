'use strict';

const fs = require('fs');
const { join, extname, basename } = require('path');

function ruleNames(rulesDir) {
  // eslint-disable-next-line no-sync
  return fs.readdirSync(rulesDir)
    .filter(fileName => extname(fileName) === '.js')
    .map(fileName => basename(fileName, '.js'));
}

function load(rulesDir) {
  return ruleNames(rulesDir).reduce((rules, ruleName) => {
      // eslint-disable-next-line global-require
      rules[ruleName] = require(join(rulesDir, ruleName));
      return rules;
    }, {});
}

function getRulesDir(subDir = '') {
  return join(__dirname, 'rules', subDir);
}

module.exports = { load, getRulesDir };
