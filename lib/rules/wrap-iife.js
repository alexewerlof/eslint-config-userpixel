'use strict';

//--------------------------------------------------------------------------------------------------
// require parentheses around immediate `function` invocations
// @see http://eslint.org/docs/rules/wrap-iife
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error('outside', { functionPrototypeMethods: false });
