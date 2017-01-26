'use strict';

//--------------------------------------------------------------------------------------------------
// disallow calling global object properties as functions
// @see http://eslint.org/docs/rules/no-obj-calls
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
