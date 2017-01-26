'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of the `__iterator__` property
// @see http://eslint.org/docs/rules/no-iterator
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
