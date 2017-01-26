'use strict';

//--------------------------------------------------------------------------------------------------
// disallow variable and `function` declarations in the global scope
// @see http://eslint.org/docs/rules/no-implicit-globals
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
