'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
// @see http://eslint.org/docs/rules/no-unreachable
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
