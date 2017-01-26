'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `function` declarations and expressions inside loop statements
// @see http://eslint.org/docs/rules/no-loop-func
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
