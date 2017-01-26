'use strict';

//--------------------------------------------------------------------------------------------------
// disallow control characters in regular expressions
// @see http://eslint.org/docs/rules/no-control-regex
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
