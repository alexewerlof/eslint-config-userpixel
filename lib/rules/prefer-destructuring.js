'use strict';

//--------------------------------------------------------------------------------------------------
// require destructuring from arrays and/or objects
// @see http://eslint.org/docs/rules/prefer-destructuring
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? warn() : off();
