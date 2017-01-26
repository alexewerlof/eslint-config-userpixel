'use strict';

//--------------------------------------------------------------------------------------------------
// disallow assignments where both sides are exactly the same
// @see http://eslint.org/docs/rules/no-self-assign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();

