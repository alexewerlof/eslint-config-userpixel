'use strict';

//--------------------------------------------------------------------------------------------------
// enforce valid JSDoc comments
// @see http://eslint.org/docs/rules/valid-jsdoc
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

const config = {
  requireReturn: false,
  requireReturnType: true,
  requireParamDescription: false,
  requireReturnDescription: false,
  preferType: {
    Boolean: 'boolean',
    Object: 'object',
    String: 'string',
    Number: 'number'
  },
  prefer: {
    arg: 'param',
    argument: 'param',
    virtual: 'abstract',
    augments: 'extends',
    constructor: 'class',
    constant: 'const',
    defaultValue: 'default',
    host: 'external',
    fires: 'emits',
    method: 'function',
    func: 'function',
    var: 'member',
    prop: 'property',
    returns: 'return',
    linkcode: 'link',
    linkplain: 'link'
  }
};

module.exports = (settings) => settings.jsdoc() ? warn(config) : off();
