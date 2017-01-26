'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
// @see http://eslint.org/docs/rules/prefer-numeric-literals
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? error() : off();
