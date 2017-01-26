'use strict';

//--------------------------------------------------------------------------------------------------
// disallow confusing multiline expressions
// @see http://eslint.org/docs/rules/no-unexpected-multiline
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
