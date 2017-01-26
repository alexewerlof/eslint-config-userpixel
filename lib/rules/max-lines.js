'use strict';

//--------------------------------------------------------------------------------------------------
// enforce a maximum number of lines per file
// @see http://eslint.org/docs/rules/max-lines
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  max: 1000,
  skipBlankLines: true,
  skipComments: true
});
