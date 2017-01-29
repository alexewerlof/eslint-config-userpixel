'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of `eval()`
// @see http://eslint.org/docs/rules/no-eval
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.csp() ? error() : warn();
