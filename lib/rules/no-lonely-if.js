'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `if` statements as the only statement in `else` blocks
// @see http://eslint.org/docs/rules/no-lonely-if
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
