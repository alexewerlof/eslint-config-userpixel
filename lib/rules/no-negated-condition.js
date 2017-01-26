'use strict';

//--------------------------------------------------------------------------------------------------
// disallow negated conditions
// @see http://eslint.org/docs/rules/no-negated-condition
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
