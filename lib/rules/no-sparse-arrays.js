'use strict';

//--------------------------------------------------------------------------------------------------
// disallow sparse arrays
// @see http://eslint.org/docs/rules/no-sparse-arrays
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
