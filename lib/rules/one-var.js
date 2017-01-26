'use strict';

//--------------------------------------------------------------------------------------------------
// enforce variables to be declared either together or separately in functions
// @see http://eslint.org/docs/rules/one-var
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  uninitialized: 'always',
  initialized: 'never'
});
