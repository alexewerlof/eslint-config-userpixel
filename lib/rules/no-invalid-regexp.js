'use strict';

//--------------------------------------------------------------------------------------------------
// disallow invalid regular expression strings in `RegExp` constructors
// @see http://eslint.org/docs/rules/no-invalid-regexp
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
