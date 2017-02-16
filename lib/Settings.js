'use strict';

const { getAllRuleConfigs } = require('./rules');
const { pluginShortName } = require('./plugins');

function normalizeArrObj(arrOrObj, val) {
  if (Array.isArray(arrOrObj)) {
    const ret = {};
    // eslint-disable-next-line no-return-assign
    arrOrObj.forEach((name) => ret[name] = val);
    return ret;
  }
  return Object.assign({}, arrOrObj);
}

function normalizeEcmaverion(version) {
  const ecmaVersion = Number(version);
  // eslint-disable-next-line no-magic-numbers
  const alreadyNormalizedVersions = [ 3, 5, 5.1, 6, 7, 8 ];
  const normalizationMap = {
    2017: 8,
    2016: 7,
    2015: 6
  };
  if (alreadyNormalizedVersions.indexOf(Number(ecmaVersion)) !== -1) {
    return ecmaVersion;
  }
  if (normalizationMap[ecmaVersion]) {
    return normalizationMap[ecmaVersion];
  }
  throw new Error(`Invalid ecmaVersion: ${ecmaVersion}`);
}

class Settings { 
 
  /**
   * @param {object} opt
   * @param {boolean} [opt.browser=false]
   * @param {boolean} [opt.node=false]
   * @param {boolean} [opt.semi=true]
   * @param {number} [opt.indent] - by default it's read from editorconfig or set to 2
   * @param {number} [opt.linebreak] - by default it's read from editorconfig or set to 'unix' or 'windows' based on os
   * @param {number} [opt.quotes] - by default it's single quotes
   * @param {boolean} [opt.csp=false]
   * @param {boolean} [opt.jsdoc=false]
   * @param {string} [opt.mod] - 'es' 'amd' 'globals' 'commonjs'. By default for browser it is global and for node it's commonjs
   * @param {string[]} opt.plugins
   * @param {number} [opt.ecmaVersion] - by default for browser it is 5 and for node it is 6
   * @param {object} [opt.env] - we may add some environments on top of that based on other options
   * @param {object|string[]} [opt.env]
   * @param {object|string[]} [opt.globals]
   * @param {object} [opt.ecmaFeatures]
   * @param {number[]} [opt.unmagicalNumbers] - a list of numbers to be considered unmagical in the project
   */
  constructor(opt = {}) {
    this.config = {
      parserOptions: {
        ecmaVersion: normalizeEcmaverion(opt.ecmaVersion || 5),
        ecmaFeatures: Object.assign({}, opt.ecmaFeatures)
      },
      plugins: opt.plugins === undefined ? [] : opt.plugins.map(pluginShortName),
      env: normalizeArrObj(opt.env, true),
      globals: normalizeArrObj(opt.globals, false),
    };
    this.extra = {
      csp: Boolean(opt.csp),
      jsdoc: Boolean(opt.jsdoc),
      semi: opt.semi === undefined ? true : opt.semi,
      indent: opt.indent === undefined ? 2 : opt.indent,
      unmagicalNumbers: opt.unmagicalNumbers === undefined ? [] : opt.unmagicalNumbers
    };
    // env
    if (opt.browser && opt.node) {
      this.config.env['shared-node-browser'] = true;
    } else if (opt.browser) {
      this.config.env.browser = true;
      if (!opt.ecmaVersion) {
        this.config.parserOptions.ecmaVersion = 5;
      }
    } else if (opt.node) {
      this.config.env.node = true;
      if (!opt.ecmaVersion) {
        this.config.parserOptions.ecmaVersion = 6;
      }
      if (!opt.mod) {
        this.config.env.commonjs = true;
      }
    }
    // sourceType
    if (opt.mod === 'amd') {
      this.config.env.amd = true;
    }
    if (opt.mod === 'commonjs') {
      this.config.env.commonjs = true;
    }
    if (opt.mod === 'es') {
      this.config.parserOptions.sourceType = 'module';
    }
  }
  
  // Checks if a particular ECMAScript version matches
  es(version) {
    return this.esVersion() === version;
  }
  
  esVersion() {
    return this.config.parserOptions.ecmaVersion;
  }
  
  esEqGt(version) {
    return this.esVersion() >= version;
  }
  
  node() {
    return this.config.env.node;
  }

  isCommonJs() {
    return this.config.env.commonjs;
  }
  
  jsdoc() {
    return this.extra.jsdoc;
  }

  es6Modules() {
    return this.config.parserOptions.sourceType === 'module';
  }

  csp() {
    return this.extra.csp;
  }
  
  getFullConfig() {
    return Object.assign({}, this.config, { rules: getAllRuleConfigs(this) });
  }

}

module.exports = Settings;
