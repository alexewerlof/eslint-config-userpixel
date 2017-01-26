'use strict';

//--------------------------------------------------------------------------------------------------
// disallow identifiers from shadowing restricted names
// @see http://eslint.org/docs/rules/no-shadow-restricted-names
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
