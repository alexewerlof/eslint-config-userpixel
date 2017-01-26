'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of `undefined` as an identifier
// @see http://eslint.org/docs/rules/no-undefined
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
