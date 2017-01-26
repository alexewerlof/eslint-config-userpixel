'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing before and after keywords
// @see http://eslint.org/docs/rules/keyword-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  before: true,
  after: true,
  overrides: {
    return: { after: true },
    throw: { after: true },
    case: { after: true }
  }
});
