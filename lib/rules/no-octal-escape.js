'use strict';

//--------------------------------------------------------------------------------------------------
// disallow octal escape sequences in string literals
// @see http://eslint.org/docs/rules/no-octal-escape
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
