'use strict';

//--------------------------------------------------------------------------------------------------
// require `return` statements after callbacks
// @see http://eslint.org/docs/rules/callback-return
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
