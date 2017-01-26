'use strict';

class Settings { 
 
  constructor(partialConfig, extraConfig) {
    Object.assign(this, partialConfig, extraConfig);
  }
  
  es(version) {
    // eslint-disable-next-line no-magic-numbers
    const { ecmaVersion } = this.parserOptions;
    
    /* eslint-disable no-magic-numbers */
    switch (Number(version)) {
      case 8:
      case 2017:
        return ecmaVersion === 8 || ecmaVersion === 2017;
      case 7:
      case 2016:
        return ecmaVersion === 7 || ecmaVersion === 2016;
      case 6:
      case 2015:
        return ecmaVersion === 6 || ecmaVersion === 2015 || this.env.es6;
      case 5:
      case 5.1:
        return true;
      default:
        return false;
    }
    /* eslint-enable no-magic-numbers */
  }
  
  node() {
    return this.env.node;
  }

  isCommonJs() {
    return this.env.commonjs;
  }
  
  jsdoc() {
    return this.jsdoc;
  }

  es6Modules() {
    return this.sourceType === 'module';
  }

  csp() {
    return this.csp;
  }

}

module.exports = Settings;
