'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `else` blocks after `return` statements in `if` statements
// @see http://eslint.org/docs/rules/no-else-return
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
