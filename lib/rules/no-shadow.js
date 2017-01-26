'use strict';

//--------------------------------------------------------------------------------------------------
// disallow variable declarations from shadowing variables declared in the outer scope
// @see http://eslint.org/docs/rules/no-shadow
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({
  builtinGlobals: true,
  hoist: 'all'
});
