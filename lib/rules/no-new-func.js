'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `new` operators with the `Function` object
// @see http://eslint.org/docs/rules/no-new-func
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.csp() ? error() : warn();
