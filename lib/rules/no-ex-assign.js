'use strict';

//--------------------------------------------------------------------------------------------------
// disallow reassigning exceptions in `catch` clauses
// @see http://eslint.org/docs/rules/no-ex-assign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
