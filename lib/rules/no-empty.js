'use strict';

//--------------------------------------------------------------------------------------------------
// disallow empty block statements
// @see http://eslint.org/docs/rules/no-empty
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
