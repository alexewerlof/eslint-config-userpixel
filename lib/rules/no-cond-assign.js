'use strict';

//--------------------------------------------------------------------------------------------------
// disallow assignment operators in conditional expressions
// @see http://eslint.org/docs/rules/no-cond-assign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error('always');
