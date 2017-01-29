'use strict';

//--------------------------------------------------------------------------------------------------
// disallow reassigning class members
// @see http://eslint.org/docs/rules/no-class-assign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? error() : off();
