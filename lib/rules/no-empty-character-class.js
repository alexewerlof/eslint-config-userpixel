'use strict';

//--------------------------------------------------------------------------------------------------
// disallow empty character classes in regular expressions
// @see http://eslint.org/docs/rules/no-empty-character-class
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
