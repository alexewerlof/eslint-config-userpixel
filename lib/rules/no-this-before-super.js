'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `this`/`super` before calling `super()` in constructors
// @see http://eslint.org/docs/rules/no-this-before-super
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
