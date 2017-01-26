'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of `arguments.caller` or `arguments.callee`
// @see http://eslint.org/docs/rules/no-caller
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
