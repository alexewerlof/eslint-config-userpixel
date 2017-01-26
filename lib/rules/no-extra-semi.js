'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary semicolons
// @see http://eslint.org/docs/rules/no-extra-semi
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// Contrary to common belief, it doesn't lead to sudden death!
module.exports = () => warn();
