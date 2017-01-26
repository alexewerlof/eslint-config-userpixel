'use strict';

//--------------------------------------------------------------------------------------------------
// disallow lexical declarations in case clauses
// @see http://eslint.org/docs/rules/no-case-declarations
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
