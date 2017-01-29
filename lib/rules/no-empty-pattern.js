'use strict';

//--------------------------------------------------------------------------------------------------
// disallow empty destructuring patterns
// @see http://eslint.org/docs/rules/no-empty-pattern
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es6 ? error() : off();
