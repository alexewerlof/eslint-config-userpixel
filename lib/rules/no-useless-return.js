'use strict';

//--------------------------------------------------------------------------------------------------
// disallow redundant return statements
// @see http://eslint.org/docs/rules/no-useless-return
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
