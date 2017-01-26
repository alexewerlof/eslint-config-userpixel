'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `new` operators with the `String`, `Number`, and `Boolean` objects
// @see http://eslint.org/docs/rules/no-new-wrappers
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
