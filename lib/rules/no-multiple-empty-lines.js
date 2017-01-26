'use strict';

//--------------------------------------------------------------------------------------------------
// disallow multiple empty lines
// @see http://eslint.org/docs/rules/no-multiple-empty-lines
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  max: 2,
  maxBOF: 1,
  maxEOF: 1
});
