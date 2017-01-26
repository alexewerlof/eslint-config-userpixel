'use strict';

//--------------------------------------------------------------------------------------------------
// disallow control flow statements in `finally` blocks
// @see http://eslint.org/docs/rules/no-unsafe-finally
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
