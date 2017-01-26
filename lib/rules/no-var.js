'use strict';

//--------------------------------------------------------------------------------------------------
// require `let` or `const` instead of `var`
// @see http://eslint.org/docs/rules/no-var
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = settings => settings.es(6) ? warn() : off();
