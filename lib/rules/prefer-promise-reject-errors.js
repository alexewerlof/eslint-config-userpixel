'use strict';

//--------------------------------------------------------------------------------------------------
// require using Error objects as Promise rejection reasons
// @see http://eslint.org/docs/rules/prefer-promise-reject-errors
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => {
  return off();
};
