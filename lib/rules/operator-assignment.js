'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow assignment operator shorthand where possible
// @see http://eslint.org/docs/rules/operator-assignment
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('always');
