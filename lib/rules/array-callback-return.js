'use strict';

//--------------------------------------------------------------------------------------------------
// enforce `return` statements in callbacks of array methods
// @see http://eslint.org/docs/rules/array-callback-return
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
