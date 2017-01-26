'use strict';

//--------------------------------------------------------------------------------------------------
// disallow constant expressions in conditions
// @see http://eslint.org/docs/rules/no-constant-condition
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => {
  if (settings.es(6)) {
    return warn({ checkLoops: false });
  } 
  return warn();
};
