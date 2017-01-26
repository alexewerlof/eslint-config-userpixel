'use strict';

//--------------------------------------------------------------------------------------------------
// disallow specified modules when loaded by `require`
// @see http://eslint.org/docs/rules/no-restricted-modules
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();

