'use strict';

//--------------------------------------------------------------------------------------------------
// disallow variable or `function` declarations in nested blocks
// @see http://eslint.org/docs/rules/no-inner-declarations
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
