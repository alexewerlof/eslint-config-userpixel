'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `new` operators outside of assignments or comparisons
// @see http://eslint.org/docs/rules/no-new
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
