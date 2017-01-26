'use strict';

//--------------------------------------------------------------------------------------------------
// enforce comparing `typeof` expressions against valid strings
// @see http://eslint.org/docs/rules/valid-typeof
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({ requireStringLiterals: true });
