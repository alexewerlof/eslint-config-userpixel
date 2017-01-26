'use strict';

//--------------------------------------------------------------------------------------------------
// enforce the consistent use of the radix argument when using `parseInt()`
// @see http://eslint.org/docs/rules/radix
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('as-needed');