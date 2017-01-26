'use strict';

//--------------------------------------------------------------------------------------------------
// enforce minimum and maximum identifier lengths
// @see http://eslint.org/docs/rules/id-length
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

const allowedOneLetterVariables = [
  'i', // common in for loops
  'j', // common in for loops
  'n', // common for natural number variables
  'x', // common in geometry programs
  'y', // common in geometry programs
  'z'  // common in geometry programs
];

module.exports = () => warn({
  min: 2,
  max: 64,
  properties: 'always',
  exceptions: allowedOneLetterVariables
});
