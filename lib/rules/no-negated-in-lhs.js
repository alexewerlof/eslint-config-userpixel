'use strict';

//--------------------------------------------------------------------------------------------------
// disallow negating the left operand in `in` expressions
// @see http://eslint.org/docs/rules/no-negated-in-lhs
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => {
  return off();
};
