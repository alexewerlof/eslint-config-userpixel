'use strict';

//--------------------------------------------------------------------------------------------------
// require parenthesis around regex literals
// @see http://eslint.org/docs/rules/wrap-regex
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
