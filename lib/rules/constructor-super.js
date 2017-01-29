'use strict';

//--------------------------------------------------------------------------------------------------
// require `super()` calls in constructors
// @see http://eslint.org/docs/rules/constructor-super
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? error() : off();

