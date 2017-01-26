'use strict';

//--------------------------------------------------------------------------------------------------
// disallow fallthrough of `case` statements
// @see http://eslint.org/docs/rules/no-fallthrough
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();