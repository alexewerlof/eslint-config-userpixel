'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow trailing commas
// @see http://eslint.org/docs/rules/comma-dangle
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => {
  if (settings.node()) {
    return error({
      objects: 'only-multiline',
      arrays: 'only-multiline',
      functions: 'never'
    });
  }
  if (settings.es(6)) {
    return warn('only-multiline');
  }
  return error('never');
};
