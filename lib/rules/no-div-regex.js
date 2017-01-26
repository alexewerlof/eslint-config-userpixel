'use strict';

//--------------------------------------------------------------------------------------------------
// disallow division operators explicitly at the beginning of regular expressions
// @see http://eslint.org/docs/rules/no-div-regex
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
