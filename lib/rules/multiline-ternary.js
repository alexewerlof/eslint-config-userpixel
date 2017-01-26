'use strict';

//--------------------------------------------------------------------------------------------------
// enforce newlines between operands of ternary expressions
// @see http://eslint.org/docs/rules/multiline-ternary
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('never');
