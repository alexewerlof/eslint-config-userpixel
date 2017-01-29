'use strict';

//--------------------------------------------------------------------------------------------------
// require `return` statements to either always or never specify values
// @see http://eslint.org/docs/rules/consistent-return
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
