'use strict';

//--------------------------------------------------------------------------------------------------
// require spacing around infix operators
// @see http://eslint.org/docs/rules/space-infix-ops
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ int32Hint: true });
