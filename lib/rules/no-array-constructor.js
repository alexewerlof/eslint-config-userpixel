'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `Array` constructors
// @see http://eslint.org/docs/rules/no-array-constructor
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
