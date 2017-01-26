'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing before or after unary operators
// @see http://eslint.org/docs/rules/space-unary-ops
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  words: true,
  nonwords: false
});
