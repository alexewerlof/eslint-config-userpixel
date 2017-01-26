'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow newlines around variable declarations
// @see http://eslint.org/docs/rules/one-var-declaration-per-line
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('initializations');
