'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unused expressions
// @see http://eslint.org/docs/rules/no-unused-expressions
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({
  allowShortCircuit: false,
  allowTernary: false
});
