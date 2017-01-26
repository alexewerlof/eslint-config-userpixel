'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent brace style for all control statements
// @see http://eslint.org/docs/rules/curly
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('multi-line');
