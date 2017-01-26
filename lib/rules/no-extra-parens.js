'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary parentheses
// @see http://eslint.org/docs/rules/no-extra-parens
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
