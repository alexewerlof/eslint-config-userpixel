'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `void` operators
// @see http://eslint.org/docs/rules/no-void
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
