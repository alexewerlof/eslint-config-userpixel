'use strict';

//--------------------------------------------------------------------------------------------------
// require quotes around object literal property names
// @see http://eslint.org/docs/rules/quote-props
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('as-needed', {
  keywords: false,
  unnecessary: true,
  numbers: false
});
