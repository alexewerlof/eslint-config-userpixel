'use strict';

//--------------------------------------------------------------------------------------------------
// disallow duplicate arguments in `function` definitions
// @see http://eslint.org/docs/rules/no-dupe-args
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
