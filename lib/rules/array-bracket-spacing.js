'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing inside array brackets
// @see http://eslint.org/docs/rules/array-bracket-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('always',
  {
    singleValue: false,
    objectsInArrays: false,
    arraysInArrays: false
  });
