'use strict';

//--------------------------------------------------------------------------------------------------
// disallow reassigning `function` declarations
// @see http://eslint.org/docs/rules/no-func-assign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
