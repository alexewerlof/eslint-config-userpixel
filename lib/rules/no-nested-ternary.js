'use strict';

//--------------------------------------------------------------------------------------------------
// disallow nested ternary expressions
// @see http://eslint.org/docs/rules/no-nested-ternary
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
