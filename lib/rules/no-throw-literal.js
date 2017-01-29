'use strict';

//--------------------------------------------------------------------------------------------------
// disallow throwing literals as exceptions
// @see http://eslint.org/docs/rules/no-throw-literal
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
