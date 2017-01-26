'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `this` keywords outside of classes or class-like objects
// @see http://eslint.org/docs/rules/no-invalid-this
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
