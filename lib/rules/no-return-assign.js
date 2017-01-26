'use strict';

//--------------------------------------------------------------------------------------------------
// disallow assignment operators in `return` statements
// @see http://eslint.org/docs/rules/no-return-assign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
