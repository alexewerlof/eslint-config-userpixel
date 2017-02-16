'use strict';

//--------------------------------------------------------------------------------------------------
// disallow magic numbers
// @see http://eslint.org/docs/rules/no-magic-numbers
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => warn({
  ignoreArrayIndexes: true,
  ignore: [
    -1, // returned as a result of indexOf and many other array operations
    0,  // should be readable based on context
    1,  // should be readable based on context
    2,  // dividing by 2 or multiplying in 2 is very common
  ].concat(settings.extra.unmagicalNumbers),
  detectObjects: false,
  enforceConst: false
});
