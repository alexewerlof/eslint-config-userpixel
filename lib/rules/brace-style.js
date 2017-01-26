'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent brace style for blocks
// @see http://eslint.org/docs/rules/brace-style
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('1tbs', { allowSingleLine: true });
