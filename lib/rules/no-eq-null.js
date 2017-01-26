'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `null` comparisons without type-checking operators
// @see http://eslint.org/docs/rules/no-eq-null
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
