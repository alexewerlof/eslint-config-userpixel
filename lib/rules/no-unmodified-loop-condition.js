'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unmodified loop conditions
// @see http://eslint.org/docs/rules/no-unmodified-loop-condition
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
