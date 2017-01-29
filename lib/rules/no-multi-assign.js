'use strict';

//--------------------------------------------------------------------------------------------------
// disallow use of chained assignment expressions
// @see http://eslint.org/docs/rules/no-multi-assign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
