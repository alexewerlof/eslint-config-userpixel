'use strict';

//--------------------------------------------------------------------------------------------------
// disallow negating the left operand of relational operators
// @see http://eslint.org/docs/rules/no-unsafe-negation
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
