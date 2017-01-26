'use strict';

//--------------------------------------------------------------------------------------------------
// disallow bitwise operators
// @see http://eslint.org/docs/rules/no-bitwise
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  int32Hint: true,
  allow: [
    '~',
    '>>',
    '^',
    '<<'
  ]
});
