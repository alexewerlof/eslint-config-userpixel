'use strict';

//--------------------------------------------------------------------------------------------------
// require template literals instead of string concatenation
// @see http://eslint.org/docs/rules/prefer-template
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? error() : off();
