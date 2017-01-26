'use strict';

//--------------------------------------------------------------------------------------------------
// require a newline after each call in a method chain
// @see http://eslint.org/docs/rules/newline-per-chained-call
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ ignoreChainWithDepth: 4 });
