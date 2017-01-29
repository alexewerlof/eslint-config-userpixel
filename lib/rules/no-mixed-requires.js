'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `require` calls to be mixed with regular variable declarations
// @see http://eslint.org/docs/rules/no-mixed-requires
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? warn({
  grouping: false,
  allowCall: true
}) : off();
