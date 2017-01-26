'use strict';

//--------------------------------------------------------------------------------------------------
// disallow labels that share a name with a variable
// @see http://eslint.org/docs/rules/no-label-var
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
