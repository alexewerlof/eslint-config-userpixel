'use strict';

//--------------------------------------------------------------------------------------------------
// disallow octal literals
// @see http://eslint.org/docs/rules/no-octal
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
