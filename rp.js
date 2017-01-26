'use strict';

// rule populator
const yaml = require('js-yaml');
const fs = require('fs');
const { getRules } = require('eslint').linter;
const path = require('path');

const formatSpaces = 2;

function isJsId(x) {
  return (/[a-z0-9_]+/i).test(x);
}

function quoteIfNeeded(x) {
  return isJsId(x) ? x : `'${x}'`;
}

function objKV(obj) {
  console.log('📍--------------------?????????????');
  return Object.keys(obj).map(key => [ key, obj[key] ]);
}

function opt2str(option) {
  switch (typeof option) {
    case 'string':
      return `'${option}'`;
    case 'number':
      return option;
    case 'boolean':
      return option;
    case 'object':
      return '{ ' + objKV(option).map(kv => `${quoteIfNeeded(kv[0])}: ${opt2str(kv[1])}`) + ' }';
    default:
      throw new Error('opt2str cannot handle that');
  }
}

function normalizeFn(level, options) {
  if (options.length) {
    return `${level}(
  ${options.map(opt2str).join(',\n')}
)`;
  }
  return `${level}()`;
}

function fileContents(ruleName, options, description) {
  return `'use strict';

//--------------------------------------------------------------------------------------------------
// ${description}
// @see http://eslint.org/docs/rules/${ruleName}
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => {
  return off();
};
`;
}

// Get document, or throw exception on error
function dumpYmlToJson(ymlPath) {
  try {
    // eslint-disable-next-line no-sync
    const doc = yaml.safeLoad(fs.readFileSync(ymlPath, 'utf8'));
    
    Object.keys(doc.rules).forEach((ruleName) => {
      console.log(ruleName, 'from', ymlPath);
      const options = doc.rules[ruleName];
      // eslint-disable-next-line no-sync
      fs.writeFileSync(`./lib/rules/${ruleName}__${path.basename(ymlPath, '.yml')}.json`, JSON.stringify(options, null, formatSpaces));
    });
  } catch (e) {
    console.error(e);
  }
}

dumpYmlToJson('./base.yml', 'B');
// dumpYmlToJson('./browser-transpiled.yml', 'BRT');
// dumpYmlToJson('./browser.yml', 'BR');
dumpYmlToJson('./csp.yml', 'C');
dumpYmlToJson('./es6-modules.yml', 'ESM');
dumpYmlToJson('./es6.yml', 'ES6');
dumpYmlToJson('./jsdoc.yml', 'DOC');
dumpYmlToJson('./node.yml', 'N');
dumpYmlToJson('./node.yml', 'N');

getRules().forEach((value, ruleName) => {
  const options = 'off';
  console.log('📍--------------------', ruleName);
  fs.writeFileSync(`./lib/rules/${ruleName}.js`, fileContents(ruleName, options, value.meta.docs.description));
});
