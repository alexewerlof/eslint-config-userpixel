'use strict';

//--------------------------------------------------------------------------------------------------
// require generator functions to contain `yield`
// @see http://eslint.org/docs/rules/require-yield
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? error() : off();
