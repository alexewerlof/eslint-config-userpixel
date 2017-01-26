'use strict';

//--------------------------------------------------------------------------------------------------
// disallow magic numbers
// @see http://eslint.org/docs/rules/no-magic-numbers
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  ignoreArrayIndexes: true,
  ignore: [
    0,
    1,
    12,
    60,
    1000,
    3600
  ],
  detectObjects: false,
  enforceConst: false
});
