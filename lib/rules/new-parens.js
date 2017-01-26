'use strict';

//--------------------------------------------------------------------------------------------------
// require parentheses when invoking a constructor with no arguments
// @see http://eslint.org/docs/rules/new-parens
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();