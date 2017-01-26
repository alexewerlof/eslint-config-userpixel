'use strict';

//--------------------------------------------------------------------------------------------------
// require braces around arrow function bodies
// @see http://eslint.org/docs/rules/arrow-body-style
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ?
  warn('as-needed', { requireReturnForObjectLiteral: false }) : off();
