'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow newlines around directives
// @see http://eslint.org/docs/rules/lines-around-directive
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('always');
