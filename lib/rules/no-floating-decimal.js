'use strict';

//--------------------------------------------------------------------------------------------------
// disallow leading or trailing decimal points in numeric literals
// @see http://eslint.org/docs/rules/no-floating-decimal
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();