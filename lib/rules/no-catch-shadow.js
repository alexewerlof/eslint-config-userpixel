'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `catch` clause parameters from shadowing variables in the outer scope
// @see http://eslint.org/docs/rules/no-catch-shadow
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? warn() : error();
