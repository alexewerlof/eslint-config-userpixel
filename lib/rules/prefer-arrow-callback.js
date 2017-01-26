'use strict';

//--------------------------------------------------------------------------------------------------
// require arrow functions as callbacks
// @see http://eslint.org/docs/rules/prefer-arrow-callback
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = settings => settings.es(6) ? warn({
  allowNamedFunctions: false,
  allowUnboundThis: true
}) : off();
