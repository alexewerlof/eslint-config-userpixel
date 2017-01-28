'use strict';

//--------------------------------------------------------------------------------------------------
// require parentheses around arrow function arguments
// @see http://eslint.org/docs/rules/arrow-parens
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ?
  warn('always', { requireForBlockBody: true }) : off();
