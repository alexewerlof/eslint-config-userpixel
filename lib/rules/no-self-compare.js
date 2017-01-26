'use strict';

//--------------------------------------------------------------------------------------------------
// disallow comparisons where both sides are exactly the same
// @see http://eslint.org/docs/rules/no-self-compare
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
