'use strict';

//--------------------------------------------------------------------------------------------------
// disallow spacing between function identifiers and their applications (deprecated)
// @see http://eslint.org/docs/rules/no-spaced-func
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => {
  return off();
};
