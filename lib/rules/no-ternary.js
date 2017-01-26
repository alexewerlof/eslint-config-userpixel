'use strict';

//--------------------------------------------------------------------------------------------------
// disallow ternary operators
// @see http://eslint.org/docs/rules/no-ternary
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
