'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow named `function` expressions
// @see http://eslint.org/docs/rules/func-names
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => {
  if (settings.es(6)) {
    return warn('as-needed');
  } 
  return warn();
};
