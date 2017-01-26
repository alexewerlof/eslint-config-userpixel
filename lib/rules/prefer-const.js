'use strict';

//--------------------------------------------------------------------------------------------------
// require `const` declarations for variables that are never reassigned after declared
// @see http://eslint.org/docs/rules/prefer-const
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = settings => settings.es(6) ? warn({
  destructuring: 'any',
  ignoreReadBeforeAssign: true
}) : off();
